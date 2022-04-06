const { storage, contextMenus, tabs, scripting, runtime } = chrome,
  tabsOptions = { active: true },
  wordsKey = "words";

// Store word handler
function getWord({ selectionText, pageUrl }) {
  selectionText = selectionText.trim();
  get(wordsKey, (words = []) => {
    if (words.findIndex((item) => item.word == selectionText) < 0) {
      getDom(getTranslation);
      runtime.onMessage.addListener(function (
        { action, data },
        sender,
        sendResponse
      ) {
        if (action === "getTranslation" && data) {
          const item = [
            ...words,
            {
              word: selectionText.trim(),
              translation: data,
              pageUrl,
              createdAt: new Date().toString(),
            },
          ];
          store(wordsKey, item);
          sendResponse(true);
        }
      });
      return true;
    }
    getDom(() => {
      window.alert("This word already exist!");
    });
    return false;
  });
}

// On context menu clicked listener
contextMenus.onClicked.addListener(getWord);

// Create context menu
contextMenus.create({
  title: 'Store "%s"',
  contexts: ["selection"],
  id: Math.random().toString(),
});

/**
 * Get current tab DOM
 * @param {Function} action
 * @returns {void}
 */
function getDom(action) {
  typeof action === "function" &&
    tabQuery((tabs) => {
      const tab = tabs[0];
      scripting.executeScript({
        target: { tabId: tab.id },
        func: action,
      });
    });
}

/**
 * Query to access to active tab dom
 * @param {Function} callback
 * @param {Object} options
 * @returns {Function}
 */
function tabQuery(callback, options = tabsOptions) {
  return tabs.query(options, (tabs) => callback(tabs));
}

/**
 * Get word translation from user
 */
function getTranslation() {
  const translation = window.prompt("Translation:");
  chrome.runtime.sendMessage({ action: "getTranslation", data: translation });
}

/**
 * Store item to chrome storage
 * @param {String} key
 * @param {String} value
 * @param {String} disk
 */
function store(key, value, disk = "local") {
  storage[disk].set({ [key]: value });
}

/**
 * Get item from chrome storage
 * @param {String} key
 * @param {Function} callback
 * @param {String} disk
 */
function get(key, callback, disk = "local") {
  return storage[disk].get([key], (result) => callback(result[key]));
}

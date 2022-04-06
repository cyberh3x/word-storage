import PageRoot from "Pages/Index";
import AppProvider from "Store/App/AppProvider";
import "Styles/App.css";

const App = () => {
  return (
    <AppProvider>
      <PageRoot />
    </AppProvider>
  );
};

export default App;

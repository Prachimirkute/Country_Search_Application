import "./App.css";
import Search from "./components/search";
import Header from "./components/header";
import ApiData from "./components/ApiData";

function App() {

  return (
    <div className="App">
      <Header />
      <Search/>
      <ApiData/>
    </div>
  );
}

export default App;

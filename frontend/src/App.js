import "./App.css";
import Search from "./components/search";
import Header from "./components/header";
import ApiData from "./components/ApiData";
import Footer from "./components/Footer";
function App() {

  return (
    <div className="App">
      <Header />
      <Search/>
      <ApiData/>
      <Footer/>
    </div>
  );
}

export default App;

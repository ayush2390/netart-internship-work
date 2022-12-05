import "./App.css";
import Content from "./components/Content";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Products />
      <Details />
      <Footer />
    </div>
  );
}

export default App;

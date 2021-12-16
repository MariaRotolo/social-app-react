
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
import Home from "./pages/Home/index.js";

function App() {
  const name = "Feisbrut";
  const nav = [
    {link: "/home", label: "Home"},
    {link: "/friends", label: "Friends"},
    {link: "/messages", label: "Messages"},
] ;

  return (
    <div >
      <Header name = {name} links = {nav} />
      <p> lorem ipsum </p>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "../src/Pages/Header/Header.jsx";
import Categories from "./Pages/Categories/Categories.jsx";
import Job from "./Pages/Job/Job";
import Subscription from "./Pages/Subscription/Subscription.jsx";
import Footer from "./Pages/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Job />
      <Subscription />
      <Footer />
    </>
  );
}

export default App;

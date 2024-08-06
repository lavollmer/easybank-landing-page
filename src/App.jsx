import "./App.css";
import Navigation from "./components/Navigation.jsx";
import SplashPage from "./components/SplashPage.jsx";
import Why from "./components/Why.jsx";
import Articles from "./components/Articles.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navigation />
      <SplashPage />
      <Why />
      <Articles />
      <Footer />
    </>
  );
}

export default App;

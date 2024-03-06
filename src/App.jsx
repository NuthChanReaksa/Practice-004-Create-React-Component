import "./App.css";
import NavbarComponent from "./components/NavbarComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";

import MainPage from "./layout/MainPage.jsx";

const App = () => {
  return (
    <>
      <section className="h-screen flex flex-col justify-between bg-white-smoke ">
        <div>
          <NavbarComponent />
        </div>

        <MainPage />

        <FooterComponent />
      </section>
    </>
  );
};
export default App;

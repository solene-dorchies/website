import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.scss";

export default function Header() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  const [largeurEcran, setLargeurEcran] = useState<number>(window.innerWidth);

  const mettreAJourLargeurEcran = () => {
    setLargeurEcran(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", mettreAJourLargeurEcran);

    return () => {
      window.removeEventListener("resize", mettreAJourLargeurEcran);
    };
  }, []);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    setIsButtonClicked(!isButtonClicked);
  };

  const handleButtonClicked = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <header id="header">
      <div className="button-burger" id="button-burger">
        <button
          className={`burger ${isButtonClicked ? "open" : ""}`}
          onClick={handleButtonClicked}
        />
      </div>
      <div className="header">
        <div className="Logo">
          <img src="/website/img/Logo-SD.png" alt="" />
        </div>
        {largeurEcran >= 768 ||
        (largeurEcran < 768 && isButtonClicked === true) ? (
          <div className="Menu">
            <ul>
              <li
                className={`link ${activeTab === "home" ? "active" : ""}`}
                onClick={() => handleTabClick("home")}
              >
                <NavLink to="/website">Accueil</NavLink>
              </li>
              <li
                className={`link ${activeTab === "about" ? "active" : ""}`}
                onClick={() => handleTabClick("about")}
              >
                <NavLink to="/about">A propos</NavLink>
              </li>
              <li
                className={`link ${activeTab === "contact" ? "active" : ""}`}
                onClick={() => handleTabClick("contact")}
              >
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}

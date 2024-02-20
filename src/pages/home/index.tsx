import React, { useState } from "react";
import Confetti from "react-confetti";
import Banniere from "../../components/banniere";
import "./index.scss";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [imageSrc, setImageSrc] = useState<string>("/public/img/book.png");
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  function handleMouseEnter() {
    setImageSrc("/public/img/captive.jpg");
    setShowConfetti(true);
  }

  function handleMouseLeave() {
    setImageSrc("/public/img/book.png");
    setShowConfetti(false);
  }

  return (
    <>
      <Banniere />
      <article id="App-Home">
        <div className="presentation">
          <p>
            Bonjour, je m'appelle <span>Solène</span> et j'ai 15 ans. Je suis
            passionnée par les livres. Mon rêve ? <span>Devenir libraire</span>{" "}
            et partager ma passion avec les autres.{" "}
            <span>Je cherche une entreprise qui pourrait m'accueillir </span>en
            stage pour me former au métier de libraire.
          </p>
          <NavLink to="/about">
            <button>En apprendre plus sur mes projets d'avenir</button>{" "}
          </NavLink>
        </div>

        <div className="about">
          <div className="fav-section">
            <p>Mon livre préféré 2023</p>
            <div className="img-section">
              <img
                src={imageSrc}
                alt="Favorite-Book"
                className="fav-book"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              {showConfetti && (
                <Confetti
                  width={200}
                  height={400}
                  numberOfPieces={100}
                  colors={["#FFC700", "#FF0000", "#2E3191", "#41BBC7"]}
                />
              )}
            </div>
          </div>
          <div className="ig-section">
            <p>Mon compte Instagram</p>
            <div className="img-section">
              <a href="https://www.instagram.com/s.dorchies/" target="_blank">
                <img
                  src="/public/img/ig.png"
                  alt="Instagram"
                  className="img-ig"
                />
              </a>
            </div>
          </div>
          <div className="wattpad-section">
            <p>Mon compte Wattpad</p>
            <div className="img-section">
              <a
                href="https://www.wattpad.com/user/Solene_books04"
                target="_blank"
              >
                <img
                  src="/public/img/wattpad.png"
                  alt="Wattpad"
                  className="img-wattpad"
                />
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

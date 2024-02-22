import React from "react";
import { useState } from "react";
import Modale from "../../components/modale";
import { FiDownload } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { BiPhoneCall } from "react-icons/bi";
import ReactToPrint from "react-to-print";
import "./index.scss";

export default function Contact() {
  const [isModale, setIsModale] = useState<boolean>(false);
  const contactPageRef = React.useRef(null);

  return (
    <>
      <article id="App-Contact" ref={contactPageRef}>
        <div className="contact-page">
          <img src="/website/img/contact1.png" alt="" className="contact1" />
          <div>
            <h1>Solène Dorchies</h1>
            <div className="details">
              <div>
                <p>
                  <FiDownload /> Télécharger mon CV
                </p>
                <button onClick={() => setIsModale(true)}>CV</button>
              </div>
              <div>
                <p>
                  <SiMinutemailer /> Envoyer un mail
                </p>
                <a href="mailto:solenedorchies61@gmail.com">
                  solenedorchies61@gmail.com
                </a>
              </div>
              <div>
                <p>
                  <BiPhoneCall /> M'appeler
                </p>
                <a>06.18.01.15.36</a>
              </div>
              <div>
                <p>A bientôt !</p>
                <p>
                  <FaRegHandshake />
                </p>
              </div>
            </div>
          </div>
          <img src="/website/img/contact2.png" alt="" className="contact2" />
        </div>
        <div className="download-page">
          <p>Télécharger mes coordonnées</p>
          <ReactToPrint
            trigger={() => (
              <button>
                <FiDownload />
              </button>
            )}
            content={() => contactPageRef.current}
          />
        </div>
      </article>
      {isModale ? <Modale setIsModale={setIsModale} /> : null}
    </>
  );
}

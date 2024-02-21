import { HashLink } from "react-router-hash-link";
import HTMLFlipBook from "react-pageflip";
import "./index.scss";

export default function Book() {
  return (
    <>
      <HTMLFlipBook
        width={500}
        height={500}
        size="stretch"
        minWidth={500}
        maxWidth={500}
        minHeight={500}
        maxHeight={500}
        drawShadow={true}
        flippingTime={500}
        usePortrait={true}
        startZIndex={10}
        autoSize={true}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        swipeDistance={50}
        clickEventForward={false}
        useMouseEvents={true}
        renderOnlyPageLengthChange={true}
        className={"Book"}
        style={{}}
        startPage={0}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        <div className="demoPage">
          <div className="Photo">
            <img src="img/Photo.png" alt="" />
          </div>
          <div className="Title">Solène Dorchies</div>
        </div>
        <div className="demoPage">
          <h1>Bonjour,</h1>
          <p>
            Je m'appelle <span>Solène</span>, j'aurai 16 ans ce 04 Juillet, et
            je suis une <span>grande lectrice</span>. Quoi de mieux que ce livre
            numérique pour vous partager{" "}
            <span>mon rêve d'intégrer une librairie</span> ?
          </p>
          <p>
            J'adore les livres depuis maintenant quelques années. Depuis, je
            n'ai pas arrêté de lire, surtout des romances, mais aussi d'autres
            genres comme le fantastique ou la comédie. Je trouve que la lecture
            me permet de m'évader, de rêver, et de vivre des émotions fortes.
          </p>
          <p>
            Je suis en 3ème et je vais bientôt passer mon brevet. Je sais déjà
            ce que je veux faire plus tard :{" "}
            <span>travailler dans une librairie</span>. J'aimerais pouvoir{" "}
            <span>conseiller les clients</span>,{" "}
            <span>leur faire découvrir des livres</span>, et{" "}
            <span>partager ma passion avec eux</span>. C'est pour cela que je
            vais entrer en <span>CAP Vente l'année prochaine</span>. Je cherche
            actuellement une librairie qui pourrait m'accueillir pour faire mes
            premières expériences professionnelles.{" "}
            <span>Je suis motivée, sérieuse, et souriante</span>.
          </p>
        </div>
        <div className="demoPage">
          <p>
            En plus de lire, j'aime aussi <span>partager mes avis</span> sur les
            livres que je dévore. C'est pourquoi j'ai créé un{" "}
            <span>compte Instagram</span> où je fais découvrir des livres et je
            donne mon opinion. Je poste régulièrement des photos de mes
            lectures, des chroniques, et des coups de cœur. J'adore échanger
            avec d'autres passionnés de lecture et découvrir de nouvelles
            pépites littéraires. J'ai également un <span>compte Wattpad</span>{" "}
            car j'adore créer des histoires en m'inspirant de mes autrices
            préférées. Sur Wattpad, je publie mes propres romans, nouvelles et
            fanfictions. Je reçois des commentaires et des votes de mes lecteurs
            et lectrices, ce qui me motive à écrire davantage. N'hésitez pas à
            me suivre et à me laisser un message, je serai ravie de discuter
            avec vous.
          </p>
          <div className="bouton-comptes">
            <HashLink to="/#comptes">
              <button className="button-account">Comptes littéraires</button>
            </HashLink>
          </div>
        </div>
        <div className="demoPage">
          <p>
            En attendant de{" "}
            <span>
              trouver la librairie qui me donnera la chance de réaliser mon rêve
            </span>{" "}
            et de mettre en pratique mes compétences, je vous partage{" "}
            <span>ma première rencontre avec CS Quill</span>, une autrice de
            romance que j'admire beaucoup. C'était lors d'une séance de
            dédicace, et j'étais tellement heureuse de pouvoir lui parler et lui
            dire à quel point j'aimais ses livres. Elle a été très gentille et
            attentionnée avec moi. C'était un moment magique que je n'oublierai
            jamais. Voici la photo que j'ai prise avec elle et{" "}
            <span>à bientôt j'espère</span> !
          </p>
          <p className="last-child">
            <span className="signature">Solène</span>
          </p>
        </div>
        <div className="demoPage"></div>
        <div className="demoPage">
          <div className="Photo2">
            <img src="img/CSQuill.png" alt="" className="CSQuill" />
          </div>
        </div>
      </HTMLFlipBook>
    </>
  );
}

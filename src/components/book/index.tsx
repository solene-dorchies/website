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
            Je m'appelle Solène, j'aurai 16 ans ce 04 Juillet, et je suis une
            grande lectrice. Quoi de mieux que ce livre pour vous partager mon
            rêve d'intégrer une librairie ?
          </p>
          <p>
            J'adore les livres depuis maintenant quelques années. Depuis, je
            n'ai pas arrêté de lire, surtout des romances, mais aussi d'autres
            genres comme le fantastique ou la comédie. Je trouve que la lecture
            me permet de m'évader, de rêver, et de vivre des émotions fortes.
          </p>
          <p>
            Je suis en 3ème et je vais bientôt passer mon brevet. Je sais déjà
            ce que je veux faire plus tard : travailler dans une librairie.
            J'aimerais pouvoir conseiller les clients, leur faire découvrir des
            livres, et partager ma passion avec eux. C'est pour cela que je vais
            entrer en CAP Vente l'année prochaine. Je cherche actuellement une
            librairie qui pourrait m'accueillir pour faire mes premières
            expériences professionnelles. Je suis motivée, sérieuse, et
            souriante.
          </p>
        </div>
        <div className="demoPage">
          <p>
            En plus de lire, j'aime aussi partager mes avis sur les livres que
            je dévore. C'est pourquoi j'ai créé un compte Instagram où je fais
            découvrir des livres et je donne mon opinion. Vous pouvez me suivre
            sur @s.dorchies, où je poste régulièrement des photos de mes
            lectures, des chroniques, et des coups de cœur. J'adore échanger
            avec d'autres passionnés de lecture et découvrir de nouvelles
            pépites littéraires.
          </p>
          <p>
            En attendant de trouver la librairie qui me donnera la chance de
            réaliser mon rêve et de mettre en pratique mes compétences, je vous
            partage ma première rencontre avec CSQuill, une autrice de romance
            que j'admire beaucoup. C'était lors d'une séance de dédicace, et
            j'étais tellement heureuse de pouvoir lui parler et lui dire à quel
            point j'aimais ses livres. Elle a été très gentille et attentionnée
            avec moi. C'était un moment magique que je n'oublierai jamais. Voici
            la photo que j'ai prise avec elle et à bientôt j'espère !
          </p>
        </div>
        <div className="demoPage">
          <div className="Photo2">
            <img src="img/CSQuill.png" alt="" className="CSQuill" />
          </div>
        </div>
      </HTMLFlipBook>
    </>
  );
}

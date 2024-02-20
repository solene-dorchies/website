import "./index.scss";

export default function Banniere() {
  return (
    <div className="background">
      <h1>
        <span className="title">Mon rêve de libraire</span>
        <span className="citation">
          “ On dit que le temps guérit toutes les blessures. Je pense plutôt
          qu'il nous aide à accepter la réalité qui nous meurtrit. Nous seuls
          pouvons guérir de nos blessures ” - Captive de Sarah Rivens
        </span>
        <img src="/public/img/star.png" alt="Star-Wish" className="img-star" />
      </h1>
    </div>
  );
}

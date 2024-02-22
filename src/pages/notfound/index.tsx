import { NavLink } from "react-router-dom";
import "./index.scss";

export default function NotFound() {
  return (
    <div id="NotFound">
      <div className="img-blog">
        <img src="/img/404.png" alt="404 page not found" />
      </div>
      <h1>
        Nous sommes désolés, la page que vous avez demandée est introuvable ou
        n'existe pas...
      </h1>
      <div className="button-notfound">
        <NavLink to="/website">
          <button>Accueil</button>
        </NavLink>
      </div>
    </div>
  );
}

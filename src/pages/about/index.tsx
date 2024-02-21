import Book from "../../components/book";
import "./index.scss";

export default function About() {
  return (
    <article id="App-About">
      <p className="Title-Book">
        Pour apprendre à me connaître, cliquez sur le petit livre pour le
        visionner :
      </p>
      <div className="Book-Bloc">
        <Book />
      </div>
    </article>
  );
}

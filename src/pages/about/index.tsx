import Book from "../../components/book";
import "./index.scss";

export default function About() {
  return (
    <article id="App-About">
      <div className="Book-Bloc">
        <Book />
        <div className="Title-Book">
          <p>Pour apprendre à me connaître, </p>
          <p>cliquez sur le petit livre !</p>
        </div>
      </div>
    </article>
  );
}
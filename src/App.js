import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle Submit");
  };
  return (
    <section className="section-center">
      <h3>Tired of Boring Lorem Ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      <article>
        <p>
          Cillum nulla qui culpa aliquip consectetur mollit veniam laboris
          aliqua consectetur adipisicing quis non. Eu velit qui ullamco pariatur
          sunt laborum. Laborum quis fugiat tempor eu. Sit voluptate consequat
          eu reprehenderit adipisicing id irure mollit ex exercitation magna.
          Anim ipsum excepteur consequat veniam ut et ex id quis. Officia sit
          cupidatat Lorem laboris sint ea est tempor.
        </p>
        <p>
          Cillum nulla qui culpa aliquip consectetur mollit veniam laboris
          aliqua consectetur adipisicing quis non. Eu velit qui ullamco pariatur
          sunt laborum. Laborum quis fugiat tempor eu. Sit voluptate consequat
          eu reprehenderit adipisicing id irure mollit ex exercitation magna.
          Anim ipsum excepteur consequat veniam ut et ex id quis. Officia sit
          cupidatat Lorem laboris sint ea est tempor.
        </p>
      </article>
    </section>
  );
}

export default App;

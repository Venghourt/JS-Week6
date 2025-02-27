import Place from "./components/Place.jsx";
import {data} from "./data.js";

function App() {
  return (
    <>
      <header>
        <h1>Hello</h1>
        <p>Where would you like to go?</p>
      </header>
      <main>
        <section className="places-category">
          <ul className="places">
            {data.map((place,index) => (
              <Place key= {index}place={place} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;

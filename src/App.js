import './App.css';
import pinkfloydImg from './pinkfloyd.jpg';


function Header(pros) {
  return (
    <header>
      <h1>{pros.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    // <section>
    <>
      <p>We serve the most {props.adjective} food</p>
      <img
        src={pinkfloydImg}
        height={200}
        alt="Pink Floyd image"
      />
      <img
        src="https://github.com/rafalima.png"
        height={200}
        alt="Rafael Lima picture"
      />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map(dish => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    {/* </section> */}
    </>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );

}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Steak"
];

const dishesObject = dishes.map((dish, index) => ({ id: index, title: dish }));

function App() {
  return (
    <div className="App">
      <Header name="Punisher" />
      <Main adjective="different" dishes={dishesObject} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;

import './App.css';

function Header(pros) {
  return (
    <header>
      <h1>{pros.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food</p>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );

}


function App() {
  return (
    <div className="App">
      <Header name="Punisher" />
      <Main adjective="different" />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;

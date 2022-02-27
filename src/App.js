import './App.css';
import pinkfloydImg from './pinkfloyd.jpg';

function SecretComponent() {
  return <h1>Only authorized personel can see this</h1>;
}

function RegularComponent() {
  return <h1>Everyone can see this component</h1>;
}


function App( {authorized} ) {
  return (
    <>
      {authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  );
}

export default App;

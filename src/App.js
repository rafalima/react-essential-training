import { useState, useReducer } from "react"
import './App.css';

function App( ) {
  const [checked, setChecked] = useState(false);
  function oldSchoolToggle() {
    setChecked((checked) => !checked);
  }

  const [reducerChecked, toggleReducer] = useReducer(
    (checked) => !checked,
    false
  );

  return (
    <>
      <label>Old school hook state</label>
      <input
        type="checkbox"
        value={checked}
        onChange={oldSchoolToggle}
        // onChange={() => setChecked((checked) => !checked)}
      />
      <p>{checked ? "checked": "not checked"}</p>
      <label>---||---</label>
      <br />
      <label>UserReducer hook</label>
      <input
        type="checkbox"
        value={reducerChecked}
        onChange={toggleReducer}
      />

      <p>{reducerChecked ? "checked": "not checked"}</p>

    </>
  );
}

export default App;

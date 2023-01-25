import { useState } from 'react';
import './App.css';
import CreateInput from './components/CreateInput';


function App() {

  const [type, setType] = useState({ selectValue: '' })
  function handleChange(e) {
    setType({ selectValue: e.target.value })

  }


  // function genForm() {
  //   setCreateForm = !setCreateForm;
  // }

  return (
    <div className="App">
      <div class="sidebar">
        {/* <!-- Sidebar --> */}
        <aside class="sidebar__sidebar">
          <button >Create form</button>
          <button>View form</button>
        </aside>

        {/* <!-- Main --> */}
        <main class="sidebar__main">
          <div class="split-screen">
            {/* <!-- Left content --> */}
            <div class="split-screen__half">
              <label>
                Select field type
              </label>
              <select onChange={handleChange} >

                <option value="text">text</option>

                <option value="radio">radio</option>

                <option value="date">date</option>

              </select>


            </div>

            {/* <!-- Right content --> */}
            <div class="split-screen__half"><CreateInput type={type.selectValue} /></div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

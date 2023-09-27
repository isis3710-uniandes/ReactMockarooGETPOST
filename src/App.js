
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [dataPOST, setDataPOST] = useState("{}")
  const [dataGET, setDataGet] = useState("{}")
  const API_KEY = ""

  const exampleJSON = { "id": 1, "first_name": "Erwin", "last_name": "Mangeney", "email": "emangeney0@unicef.org", "gender": "Polygender", "ip_address": "75.180.222.81", "test_input": "#$%&/" }

  async function handlePost() {
    const response = await fetch("https://my.api.mockaroo.com/users.json?key="+API_KEY+"&id="+exampleJSON.id, { method: "POST", body: JSON.stringify(exampleJSON), headers: {"X-Requested-With": "XMLHttpRequest"} })
    const dataa = await response.json()
    console.log(dataa)
    setDataPOST(JSON.stringify(dataa))
  };

  useEffect(()=>{
    fetch("https://my.api.mockaroo.com/users.json?key="+API_KEY).then(response => response.json()).then(data => setDataGet(JSON.stringify(data)))
  },[dataPOST])

  return (
    <div className="App">
      <header className="App-header">
        <textarea value={dataGET}></textarea>
        <button onClick={handlePost}>Test Post</button>
        <textarea value={dataPOST}></textarea>
      </header>
    </div>
  );
}

export default App;

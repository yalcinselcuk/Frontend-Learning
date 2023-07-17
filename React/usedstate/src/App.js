import {useState} from 'react';
function App() {
  let [degiskenim, setDegiskenim] = useState(0);

  let handleClick = () =>{
    setDegiskenim(degiskenim+1);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Sayacı Artır</button>
      <div>Sayaç : {degiskenim}</div>
    </div>
  );
}


export default App;

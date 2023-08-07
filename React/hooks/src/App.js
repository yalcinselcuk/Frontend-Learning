import './App.css';
import {useState} from 'react'
import MyButton from './MyButton';

function App() {

  const[count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

export default App;

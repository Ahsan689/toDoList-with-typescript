import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [Data_State, setData_State] = useState<To_Do[]>([])
  const [item, setitem] = useState('')
  interface To_Do {
    id:string,
    item:string
  }
  let date = new Date()
  let Data: To_Do[] = []

  
  function add_Task(id:string){
    
    // Data.push({id:id,item:item})
    // console.log(Data);
    setData_State([...Data_State,{id:id,item:item}])
  }
  console.log(Data_State,"DATa");
  // add_Task()
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          style={{cursor:'pointer'}}
          // href=""
          // target="_blank"
          // rel="noopener noreferrer"
          
        >
          Learn React
        </a>
      </header> */}
      <input onChange={e => setitem(e.target.value)}/>
      <button onClick={()=> {add_Task(date.getTime().toString())}}> add task </button>
    </div>
  );
}

export default App;

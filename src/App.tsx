import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [Data_State, setData_State] = useState<To_Do[]>([])
  const [item, setitem] = useState('')
  let date = new Date()
  let Data: To_Do[] = []
  
  interface To_Do {
    id:string,
    item:string
  }
  
  function add_Task(id:string){
    
    // Data.push({id:id,item:item})
    let new_obj = [...Data_State,{id:id,item:item}]
    // console.log(new_obj,"NEW");

    localStorage.setItem("toDo",JSON.stringify(new_obj))
    setData_State([...Data_State,{id:id,item:item}])
  }
  
  function delete_func(id:string){
    let filtered_data = Data_State.filter(f => f.id != id)
    localStorage.setItem('toDo',JSON.stringify(filtered_data))
    setData_State(filtered_data)
    
  }
  
  useEffect(() => {
    console.log(Data_State,"DATa");

    let to_do = localStorage.getItem('toDo')
    // console.log(to_do,"valid strng");
    if(to_do){
      let to_do_arr:To_Do[] = JSON.parse(to_do)
      // console.log(to_do,"too");
      
      setData_State(to_do_arr)
    }
    
    
  }, [])
  console.log(Data_State,"from local");

  useEffect(() => {
    console.log(Data_State,"DATa");
   
  }, [Data_State])
  
  // add_Task()
  
  return (
    <div className="App" style={{justifyContent:"center"}}>
      
      <input style={{width:'350px'}} onChange={e => setitem(e.target.value)}/>
      <button style={{marginBottom:'30px'}} onClick={()=> {add_Task(date.getTime().toString())}}> add task </button>
      {
        Data_State.map(d=> (
          <>
          <div style={{marginLeft:'25%'}}>
            <div key={d.id} style={{border:'1px solid black',backgroundColor:'wheat',width:'600px',display:'flex',justifyContent:'space-between'}}>
            <span>{d.item}</span>
            <button onClick={()=>delete_func(d.id)} style={{marginLeft:'40px'}}>delete</button>
            </div>

          </div>
          </>
        ))
      }
    </div>
  );
}

export default App;

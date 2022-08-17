
import React, {useState, useEffect} from 'react';
import { DataRecords } from './DataRecords';
import MySelectMulti from './MultiSelect';
import ParametresMulti from "./ParametresMulti.jsx";
import './App.css'


const sensors=[
  {id: 30, name: 'Sensor 30'},
  {id: 31, name: 'Sensor 31'},
  {id: 43, name: 'Sensor 43'},
  {id: 44, name: 'Sensor 44'}
]
 
function App() {

  const dataRecords = new DataRecords();
  const [multiSelect, setmultiSelect] = useState([]);
  const [records, setRecords] = useState([]);


useEffect(() => {
  dataRecords.getData().then(data => setRecords(data));
  }, []); 


  function selectParam(arr) {
    var filterObj = sensors
    .filter(el => arr.includes(String(el.id)))
    .map(el => el);
    return filterObj;
  }  

  
  return (
    <>
    <MySelectMulti options={sensors} onChange={setmultiSelect} />
    {<div>{multiSelect.join(",")}</div>}
    <ParametresMulti param={selectParam(multiSelect)} record={records}/>
    


    </>
    
  )


  }



  export default App;
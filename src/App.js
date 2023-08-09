import './App.css';
// import Content  from './component/content';
// import Counter from './component/Counter';
import Footer  from './component/footer';
import ArrofObject from './component/ArrofObject';
import React, { useEffect, useState }  from 'react';
import ListNav from './component/listNav'
import AddItems from './component/addItems';
import ApiRequest from './component/apiRequest';

function App() {
  const [items, setItems] = useState( []);
  const [addItems, setAddItems] = useState('')
  const [search, setSearch] = useState('')

  

const handleCheck = (id) => {
   const listItems = items.map(item => item.id === id ? {...item, check:!item.check} : item)
   setItems(listItems)
   localStorage.setItem("todo_list", JSON.stringify(listItems))
  
}

const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id )
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))

 }

const handleSubmit = (event) => {
    event.preventDefault();
    if(!addItems) return;
    addItem(addItems)
    setAddItems('')
  }

const addItem = async (item) => {
  const id= items.length ? items[items.length -1].id+1 : 1;
  const addNewitem = {id, checked : false, item}
  const listItems =[...items, addNewitem]
  setItems(listItems)

  const optionObj = {
    method:'POST',
    headers:{
     'Content-Type':'application/json'
    },
    body: JSON.stringify(addNewitem)
  }

  const result = await ApiRequest(API_URL, optionObj)
  if(result) setFetchError(result)


}

const handleDeleteAll = () => {
  const dd = items.filter(r => r === r.id )
  setItems(dd) 
}

var k=0, j=0;
     items.map((n) => (n.check === true) ? k++ : j++);



    
  return (
    <div className="App">
       <AddItems handleSubmit={handleSubmit}  addItems={addItems} setAddItems={setAddItems}/>  
       <ListNav  handleDeleteAll = {handleDeleteAll}
      search={search} setSearch={setSearch}/>  
    <div className='todo-list'>  
     {fetchError && <p style={{fontSize:'20px'}}>{`Error: ${fetchError}`}</p>}
     {isLoad && <p style={{fontSize:'20px'}}>Loading items...</p>}
     {!fetchError && !isLoad &&
      <ArrofObject  items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
      handleCheck={handleCheck}  
      handleDelete={handleDelete}
      addItems={addItems} setAddItems={setAddItems} >
       
      </ArrofObject>}</div>
     
      <Footer itemsLen={items.length} Checked={k} unChecked={j}/>
    </div>
  );
}

export default App;

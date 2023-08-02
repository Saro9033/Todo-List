import './App.css';
// import Content  from './component/content';
// import Counter from './component/Counter';
import Footer  from './component/footer';
import ArrofObject from './component/ArrofObject';
import React, { useState }  from 'react';
import ListNav from './component/listNav'
import AddItems from './component/addItems';

function App() {
  const [items, setItems] = useState(
   [{id:1, check:true, item:"Wake Up"}]
);

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
    const Id = items.length +1
    const listItems = {id:Id, check:false, item:addItems}
    setItems([...items , listItems])
    setAddItems('')
    localStorage.setItem("todo_list", JSON.stringify(listItems))
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
      
      <ArrofObject  items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
      handleCheck={handleCheck}  
      handleDelete={handleDelete} handleSubmit={handleSubmit}
      addItems={addItems} setAddItems={setAddItems} >
      </ArrofObject>
             
      <Footer itemsLen={items.length} Checked={k} unChecked={j}/>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Nav from './Nav';
import Aside from './Aside';
import Article from './Article';
function App() {
  const [money,setMoney] = useState(Math.round(Math.random() * 10000));
  const [bonus,setBonus] = useState(0);
  const [total,setTotal] = useState(0);
  return (
    <div className="App">
        <Header money={money} bonus={bonus} setMoney={setMoney} setBonus={setBonus}/>
        <Nav />
        <Aside />
        <Article />
        <Main total={total} setTotal={setTotal} />
        <Footer total={total} setTotal={setTotal} money={money} setMoney={setMoney} bonus = {bonus} setBonus={setBonus}/>
        
        
    </div>
  );
}

export default App;

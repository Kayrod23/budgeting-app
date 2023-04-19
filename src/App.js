import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home.js"
import Edit from './Pages/Edit';
import Show from "./Pages/Show.js";
import New from './Pages/New';
import Error from "./Pages/Error.js"
import Nav from './Components/Nav';
import Index from './Pages/Index';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Error/>}/>
      <Route path="/transactions" element={<Index/>}/>
      <Route path="/transaction/new" element={<New/>}/>
      <Route path="/transaction/:index" element={<Show/>}/>
      <Route path="/transaction/:index/edit" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //   </header>
    // </div>
  );
}

export default App;

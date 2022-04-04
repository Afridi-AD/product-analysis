
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Dashbord from './Components/Dashboard/Dashbord';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
     <h1>Welcome to my react route</h1>
     
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/reviews' element={<Reviews></Reviews>}></Route>
       <Route path='/dashboard' element={<Dashbord></Dashbord>}></Route>
       <Route path='/blogs' element={<Blog></Blog>}></Route>
       <Route path='/about' element={<About></About>}></Route>
     </Routes>
    
    </div>
  );
}

export default App;
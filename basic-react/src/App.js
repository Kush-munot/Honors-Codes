import CustomerList from './Components/CustomerList';
import './App.css';
import About from './Components/About';
import ComponentC from './Components/ComponentC';
import Contact from './Components/Contact';
import Counter from './Components/Counter';
import DataFetching from './Components/DataFetching';
import EventBind from './Components/EventBind';
import Form from './Components/Form';
import HookCounter from './Components/HookCounter';
import HookCounter2 from './Components/HookCounter2';
import HookCounter3 from './Components/HookCounter3';
import HookCounter4 from './Components/HookCounter4';
import Message from './Components/Message';
import Parent from './Components/Parent.jsx';
import Shop from './Components/Shop';
import { UserProvider } from './Components/UserContext'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>Hello World</h1> */}
        {/* <Parent/>
      <Message/>
      <Counter/> 
      <EventBind/> */}
        {/* <Form/> */}
        {/* <UserProvider value="Kush">
        <ComponentC />
      </UserProvider> */}
        {/* <HookCounter /> */}

        {/* <HookCounter2/> */}

        {/* <HookCounter3/> */}
        {/* <HookCounter4/> */}
        <nav>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/customers" >All Customers</Link></li>
            {/* <li><Link to="/about" >About</Link></li>
            <li><Link to="/shop" >Shop</Link></li>
            <li><Link to="/contact" >Contact</Link></li> */}

          </ul>
        </nav>
        <Routes>
          {/* <Route excat path='/' element={<HookCounter4 />}></Route>
          <Route excat path='/about' element={<About />}></Route>
          <Route excat path='/shop' element={<Shop />}></Route>
          <Route excat path='/contact' element={<Contact primary={true} />}></Route> */}
          <Route excat path='/customers' element={<CustomerList/>}></Route> 
        </Routes>
        {/* <DataFetching/> */}

      </div>
    </Router>
  );
}

export default App;

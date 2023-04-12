import './App.css';
import ComponentC from './Components/ComponentC';
import Counter from './Components/Counter';
import EventBind from './Components/EventBind';
import Form from './Components/Form';
import HookCounter from './Components/HookCounter';
import HookCounter2 from './Components/HookCounter2';
import HookCounter3 from './Components/HookCounter3';
import HookCounter4 from './Components/HookCounter4';
import Message from './Components/Message';
import Parent from './Components/Parent.jsx';
import { UserProvider } from './Components/UserContext'

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
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
      <HookCounter4/>
    </div>
  );
}

export default App;

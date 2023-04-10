import './App.css';
import ComponentE from './Components/ComponentE';
import Counter from './Components/Counter';
import EventBind from './Components/EventBind';
import Form from './Components/Form';
import Message from './Components/Message';
import Parent from './Components/Parent.jsx';
import {UserProvider} from './Components/UserContext'

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <Parent/>
      <Message/>
      <Counter/> 
      <EventBind/> */}
      {/* <Form/> */}
      <UserProvider value="Kush">
        <ComponentE />
      </UserProvider>

    </div>
  );
}

export default App;

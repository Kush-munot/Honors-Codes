import './App.css';
import Counter from './Components/Counter';
import EventBind from './Components/EventBind';
import Form from './Components/Form';
import Message from './Components/Message';
import Parent from './Components/Parent.jsx';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <Parent/>
      <Message/>
      <Counter/> 
      <EventBind/> */}
      <Form/>

    </div>
  );
}

export default App;

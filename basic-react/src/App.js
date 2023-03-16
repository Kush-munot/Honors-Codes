import './App.css';
import Counter from './Components/Counter';
import EventBind from './Components/EventBind';
import Message from './Components/Message';
import  Parent  from './Components/Parent.jsx';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Parent/>
      <Message/>
      {/* <Counter/> */}
      <EventBind/>
    </div>
  );
}

export default App;

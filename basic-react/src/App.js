import './App.css';
import Counter from './Components/Counter';
import Message from './Components/Message';
import  Parent  from './Components/Parent.jsx';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Parent/>
      <Message/>
      <Counter/>
    </div>
  );
}

export default App;

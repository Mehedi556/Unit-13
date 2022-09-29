import logo from './logo.svg';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div className="App px-5">
      <Header></Header>
      <Body></Body>
      <Questions></Questions>
    </div>
  );
}

export default App;

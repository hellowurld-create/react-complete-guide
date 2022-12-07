import './App.css';
import logo from './logo.svg';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Move Down👇🏽
        </p>
      </header>

      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;

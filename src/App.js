import logo from './logo.svg';
import './App.css';
import Inventory from './Components/Pages/Inventory';
import AddItem from './Components/Modal/AddItem';
import EditItem from './Components/Modal/EditItem';

function App() {
  return (
    <div className="App">
      <Inventory />
      {/*<AddItem />*/}
      {/*<EditItem />*/}
    </div>
  );
}

export default App;

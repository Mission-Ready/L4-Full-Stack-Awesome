import logo from './logo.svg';
import './App.css';
import MuiButton from './components/MuiButton'
import MuiCheckbox from './components/MuiCheckbox'
import MuiRadio from './components/MuiRadio'
import MuiSelect from './components/MuiSelect'
import MuiTextField from './components/MuiTextField'

function App() {
  return (
    <div className="App">
      <MuiButton />
      <MuiCheckbox />
      <MuiRadio />
      <MuiSelect />
      <MuiTextField />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import MuiButton from './components/MuiButton'
import MuiContainer from './components/MuiContainer'
import MuiGrid from './components/MuiGrid'
import StudentImage from './images/student.png'

export default function App() {
  return (
    <div className="App">
      <MuiButton />
      <MuiContainer />
      <MuiGrid />
    </div>
  );
}

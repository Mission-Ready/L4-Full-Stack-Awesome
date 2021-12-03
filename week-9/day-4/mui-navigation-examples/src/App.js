import './App.css';
import MuiBottomNav from './components/MuiBottomNav'
import MuiDrawer from './components/MuiDrawer';
import MuiMenu from './components/MuiMenu'

function App() {
  return (
    <div className="App">
      <MuiBottomNav />
      <MuiDrawer />
      <MuiMenu />
    </div>
  );
}

export default App;

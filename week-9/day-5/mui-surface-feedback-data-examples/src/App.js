import { useState } from "react"
import logo from './logo.svg';
import './App.css';
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import MuiDialog from './components/MuiDialog'
import MuiSnackbar from './components/MuiSnackbar'
import MuiTooltip from './components/MuiTooltip'
import MuiLoadingScreen from './components/MuiLoadingScreen'

function App() {
  const [open, setOpen] = useState(false)
  const handleDialogOpen = () => setOpen(true)
  const handleDialogClose = () => setOpen(false)
  return (
    <div className="App">
      <Card>
        <div className="App">
          This button opens the dialog box<br />
          <Button onClick={handleDialogOpen} variant="contained">Open Dialog</Button>
          <MuiSnackbar />
          <MuiTooltip />
          <MuiLoadingScreen />
        </div>
      </Card>
      <MuiDialog open={open} close={handleDialogClose} />
    </div>
  );
}

export default App;

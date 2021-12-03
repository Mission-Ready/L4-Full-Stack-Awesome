import React, {useState} from 'react'
import Button from '@mui/material/Button'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

export default function MuiLoadingScreen() {
  const [open, setOpen] = useState(false)

  const openLoadingScreen = () => {
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
    }, 3000)
  }
  return (
    <div>
      <Button onClick={openLoadingScreen} variant="contained">Open loading screen</Button>
      <Backdrop open={open}>
        <CircularProgress />
      </Backdrop>
    </div>
  )
}

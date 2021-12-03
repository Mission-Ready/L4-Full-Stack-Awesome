import React, {useState} from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'

export default function MuiSnackbar() {
  const [open, setOpen] = useState(false)
  const openSnackbar = () => {
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
    }, 2000)
  }
  return (
    <div>
      <Button onClick={openSnackbar}>Open snackbar</Button>
      <Snackbar open={open} message="Snackbar is now open" />
    </div>
  )
}
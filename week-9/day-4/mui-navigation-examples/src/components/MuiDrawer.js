import React, {useState} from 'react'
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button'

export default function MuiDrawer() {
  const [open, setOpen] = useState(false)

  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  return (
    <div>
      <Drawer open={open} onClose={closeDrawer}>
        <MenuItem>Item1</MenuItem>
        <MenuItem>Item2</MenuItem>
        <MenuItem>Item3</MenuItem>
        <MenuItem>Item4</MenuItem>
      </Drawer>
      <Button onClick={openDrawer} variant="contained">Open Drawer</Button>
    </div>
  )
}

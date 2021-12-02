import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function MuiMenu() {
  const [open, setOpen] = useState(false)
  const [anchorElement, setAnchorElement] = useState('')

  const handleClick = (e) => {
    setOpen(true)
    setAnchorElement(e.target)
  }

  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button onClick={handleClick} variant="contained">Options</Button>
      <Menu open={open} onClose={handleClose} anchorEl={anchorElement}>
        <MenuItem>item1</MenuItem>
        <MenuItem>item2</MenuItem>
        <MenuItem>item3</MenuItem>
      </Menu>
      <div onClick={handleClick} style={{marginTop: '20px', background: 'green'}}>New div</div>
    </div>
  )
}

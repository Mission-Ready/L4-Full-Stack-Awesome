import React, {useState} from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

export default function MuiSelect() {
  const [option, setOption] = useState('default')

  const handleChange = (e) => setOption(e.target.value)

  return (
    <div>
      <Select value={option} onChange={handleChange} placeholder="select an item">
        <MenuItem value="default" disabled>Select an item</MenuItem> 
        <MenuItem value="item1">Item 1</MenuItem>
        <MenuItem value="item2">Item 2</MenuItem>
        <MenuItem value="item3">Item 3</MenuItem>
        <MenuItem value="item4">Item 4</MenuItem>
      </Select>
    </div>
  )
}

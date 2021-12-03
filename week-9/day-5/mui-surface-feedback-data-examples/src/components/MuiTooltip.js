import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

export default function MuiTooltip() {
  return (
    <div>
      <Tooltip title="This button does nothing">
        <Button variant="contained">Button</Button>
      </Tooltip>
    </div>
  )
}

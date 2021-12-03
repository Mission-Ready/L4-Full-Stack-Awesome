import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'

export default function MuiDialog({open, close}) {
  return (
    <div>
      <Dialog open={open} onClose={close}>
        <div>This is content in my Dialog</div>
      </Dialog>
    </div>
  )
}

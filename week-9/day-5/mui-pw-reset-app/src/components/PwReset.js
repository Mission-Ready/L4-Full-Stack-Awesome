import React, {useState} from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import LockIcon from '@mui/icons-material/Lock'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Snackbar from '@mui/material/Snackbar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

function PopUpList({ dialogOpen, handleDialogClose }) {
  const emails = ['alan@missionreadyhq.com', 'jade@missionreadyhq.com']

  const handleListItemClick = (value) => {
    handleDialogClose(value)
  }

  return (
    <Dialog open={dialogOpen} onClose={() => handleListItemClick('')}>
      <DialogTitle>Choose account to reset password</DialogTitle>
      <List>
        {emails.map((email) => (
          <ListItem key={email} button onClick={() => handleListItemClick(email)}>
            <ListItemAvatar>
              <Avatar>{email[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText>{email}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

export default function PwReset() {
  const [dialogOpen, setDialogOpen] = useState(false) 
  const [accountToReset, setAccountToReset] = useState('')
  const [backdropOpen, setBackdropOpen] = useState(false)
  const [snackOpen, setSnackOpen] = useState(false)

  const handleClickOpen = () => {
    setDialogOpen(true)
  }

  const handleDialogClose = (value) => {
    setDialogOpen(false)
    setAccountToReset(value)
    if (value !== '') {
      setBackdropOpen(true)
      setTimeout(() => {
        setBackdropOpen(false)
        setSnackOpen(true)
      }, 3000)
    }
  }

  const handleSnackClose = () => {
    setSnackOpen(false)
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1">Password is sent to: {accountToReset}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClickOpen} variant="outlined" color="primary">
          <LockIcon /> Reset Password
        </Button>
      </CardActions>
      <PopUpList dialogOpen={dialogOpen} handleDialogClose={handleDialogClose} />
      <Backdrop open={backdropOpen}>
        <CircularProgress color="secondary" />
      </Backdrop>
      <Snackbar open={snackOpen} onClick={handleSnackClose} message="Password has been reset" />
    </Card>
  )
}

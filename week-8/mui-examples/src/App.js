import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function App() {
  return (
    <>
      <Stack spacing={2} direction="row">
        {/* <Button variant="text">Text</Button>
        <Button
          sx={{ color: 'green' }}
          size="small"
          variant="contained"
          color="warning"
          fullWidth
        >
          ABC
        </Button>
        <Button size="medium" variant="contained" color="warning">
          DEF
        </Button>
        <Button size="large" variant="contained" color="warning">
          GHI
        </Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained" color="secondary" href="https://www.google.com">Take me to google.com</Button> */}
        <Button
          variant="outlined"
          sx={{
            borderColor: 'secondary.main',
          }}
        >
          Outlined
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Ha ha ah " arrow>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Ha ha ah " placement="right-end">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </>
  );
}

export default App;

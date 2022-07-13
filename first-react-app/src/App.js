import './App.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';





function App() {
 
  return (
    <div className="App">

      <Alert severity="info">This page is not finished</Alert>
      <Avatar alt="Jordan Eldridge" src="https://pbs.twimg.com/profile_images/1521926925723258881/GQRHt7c7_400x400.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />


      <Typography variant='h1' color='red' >
        Jordan Eldridge

      </Typography>

      <Button variant="text" href='https://www.nba.com/' >Text</Button>
      <Button variant="contained" >Contained</Button>
      <Button variant="outlined">Outlined</Button>

      
    </div>
  );
}

export default App;

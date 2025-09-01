import './App.css'
import Box from '@mui/material/Box';
import NavBar from './navbar.jsx';
import Contents from './Content.jsx';
import Grid from '@mui/material/Grid';


function App() {

  return (
    <Box sx={{
      position: "relative",
      width: "100%",
      height: '500',
      overflow: "hidden",
      borderRadius: 2,
    }}>
      <NavBar />
      <img src='/Images/car.png' style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
      <Contents />
    </Box>
  )
}

export default App

import  React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {useNavigate} from 'react-router-dom';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Alert from '@mui/material/Alert';

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
   const [loading,setLoading]=useState(false);
   const [error,setError]=useState(null);

   const handleSubmit = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
  
      const response = await axios.post('http://localhost:5000/user/login', {
        email: email,
        password: password,
      });
  
      if (response.status === 200) {
        const name=response.data.name;
        const email=response.data.email;
        localStorage.setItem('user', JSON.stringify({name,email,password}));
        navigate('/shop');
        setError(null);
      } else {
        setError('Invalid login credentials');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container style={{width:'350px'}} component="main" maxWidth="xs">
      {error && <Alert severity="error">{error}</Alert>}
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
            value={email}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
              autoFocus
            />
            <TextField
            value={password}
            onChange={(e)=>{setPassword(e.target.value);}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
            disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? 'Loading...' : 'Sign Up'}
            </Button>
            <Grid container>
              <Grid item xs>
          
              </Grid>
              <Grid  item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
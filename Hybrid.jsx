import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import hbc from '../assets/hbc.png';
import Navbar from './Navbar';
import { Button } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const defaultTheme = createTheme();

export default function Inperson() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
      Organisation: data.get('Organisation'),
      phone: data.get('phone'),
    });
    setIsFormSubmitted(true);
  };
  const handleClose = () => {
setIsFormSubmitted(false);
  };

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <div style={{
         backgroundImage: `url(${hbc})`, 
         backgroundSize: 'cover',
      }}>
        
      <Container component="main" maxWidth="md" style={{ 
        display: 'flex',
         height:'100vh', 
         width:'100%',
         paddingBottom: '100px',
         paddingTop:'30px',
         }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft:'50px',
            color: '#fff',
            
          }}
        >
          <h1>Create hybrid events with deeper engagement and unparalleled reach</h1>
          <p>Leverage the industry’s most complete hybrid meetings and events platform to deliver one event with two experiences. Drive and capture engagement across a larger, more connected audience.</p>
        </div>
        <div style={{ flex: 1, padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Organisation"
                  name="Organisation"
                  required
                  fullWidth
                  id="Organisation"
                  label="Organisation"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone no"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
            </Grid>
            <div style={{ paddingTop: '20px'}}>
            <Button variant="contained" color="secondary" type="submit">
  Submit
</Button>
</div>
          </form>
        </div>
      </Container>
      <Dialog open={isFormSubmitted} onClose={handleClose}>
          <DialogTitle>Form Submitted</DialogTitle>
          <DialogContent>
            <p>Your form has been submitted successfully!</p>
            <p>Our Associative will be in contact with you soon...</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}

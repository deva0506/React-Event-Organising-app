import React from 'react';
import './Home.css';
import '../component/footer.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import H2P023 from "../assets/HP2023.webp";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import l1 from "../assets/l1.webp";
import l4 from "../assets/l4.webp";
import c1 from "../assets/c1.webp";
import { Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const Item = ({ children }) => (
  <div style={{ padding: 16, textAlign: 'left' }}>
    {children}
  </div>
);
const Homepage = () => {
  return (
    <div>
      <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2} >
        <Grid item xs={6}>
          <Paper elevation={0}>
            <Item>
              <h1>A better way to manage <br></br>your events</h1>
              <ul>
              <li>Find hotels and venues</li>
               <li>Plan and promote your event</li>
               <li>Engage your attendees</li>
                <li>Capture leads and track ROI</li>
              </ul>
            </Item>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0}>
            <Item>
              <img src={H2P023} alt="Image" style={{ width: '100%', height: 'auto' }} />
            </Item>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }} elevation={0}>
           <CardActionArea>
            <CardMedia
          component="img"
          height="140"
          image={c1}
          alt="Engage audiences"
           />
           <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Build engaging in-person, virtual, and hybrid events
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Build engaging virtual events directly within an industry’s leading event marketing and management platform.

New: Effortlessly create custom pages with full descriptions using Casino
            </Typography>
          </CardContent>
        </CardActionArea>
       </Card>
    </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }} elevation={0}>
           <CardActionArea>
            <CardMedia
          component="img"
          height="140"
          image={c1}
          alt="Engage audiences"
           />
           <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Engage audiences to maximize impact
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Cvent’s event marketing and management platform is an all-in-one solution for every event type across the entire event lifecycle.
            </Typography>
          </CardContent>
        </CardActionArea>
       </Card>
    </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }} elevation={0}>
           <CardActionArea>
            <CardMedia
          component="img"
          height="140"
          image={c1}
          alt="Engage audiences"
           />
           <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Manage your event from start to finish in one place
            </Typography>
            <Typography variant="body2" color="text.secondary">
            An event tech platform for face-to-face, online, and hybrid experiences
Are you using manual processes to plan and execute great events? Ditch the time-consuming work. With Cvent, you’ll have the power to automate tasks and simplify the entire planning process so you can focus on what matters most—your attendees. 
            </Typography>
          </CardContent>
        </CardActionArea>
       </Card>
    </Grid>
    </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={0}>
            <Item>
              <img src={l1} alt="l2" style={{ width: '100%', height: 'auto' }} />
            </Item>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0}>
            <Item>
              <h1>240M+ registrations processed</h1>
<p>Cvent’s technology has added time in our day, freed us up to be more creative, and made it easier for our attendees to take advantage of what we offer.<br></br>
Heather D.</p>
            </Item>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} >
        <Grid item xs={6}>
          <Paper elevation={0}>
            <Item>
            <h1>24/7 customer support</h1>
            <p>
            We were really thrilled with the steps the team took to hold our hands as first-time customers, and we really felt that level of support.<br></br>
             Julie S.<br></br>
             American Marketing Association
            </p>
            </Item>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0}>
            <Item>
              <img src={l4} alt="l4" style={{ width: '100%', height: 'auto' }} />
            </Item>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    <div>
      <footer>
        <p>&copy; 2023 Goslingfurni. All rights reserved.</p>
        <div className="footer-content">
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
          </div>
          <div className="contact-info">
            <p><PhoneIcon /> Contact: +1 123 456 7890</p>
            <p><EmailIcon /> Email: Infocacino@gmail.com</p>
            <p><LockIcon /> <a href="/privacy-policy">Privacy Policy</a></p>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Homepage;

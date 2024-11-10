import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button,Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: '40px 0' }}>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* column 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">About Us</Typography>
            <Divider sx={{ backgroundColor: '#fff', margin: '10px 0' }} />
            <Typography variant="body2">
              We are passionate about food and aim to bring you the best recipes and culinary inspiration.
            </Typography>
          </Grid>

          {/*Column 2*/}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Quick Links</Typography>
            <Divider sx={{ backgroundColor: '#fff', margin: '10px 0' }} />
            <Typography variant="body2">Home</Typography>
            <Typography variant="body2">Recipes</Typography>
            <Typography variant="body2">Blog</Typography>
            <Typography variant="body2">Contact Us</Typography>
          </Grid>

          {/*Column 3*/}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Subscribe</Typography>
            <Divider sx={{ backgroundColor: '#fff', margin: '10px 0' }} />
            <Typography variant="body2">
              Subscribe to our newsletter for the latest recipes and cooking tips!
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              fullWidth
              sx={{ backgroundColor: '#fff', marginTop: '10px' }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: '10px' }}
            >
              Subscribe
            </Button>
          </Grid>

          {/* Column 4: Follow Us (Without Links) */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Follow Us</Typography>
            <Divider sx={{ backgroundColor: '#fff', margin: '10px 0' }} />
            <Typography variant="body2">Facebook</Typography>
            <Typography variant="body2">Twitter</Typography>
            <Typography variant="body2">Instagram</Typography>
            <Typography variant="body2">LinkedIn</Typography>
          </Grid>
        </Grid>

        
        <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Foodie Website. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

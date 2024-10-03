
//my contact page
import React from 'react';
import { Box, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Connection } from '../data/data';
import { motion } from 'framer-motion';
import FastfoodIcon from '@mui/icons-material/Fastfood';

function Contact() {
  return (
    <Box sx={{ bgcolor: '#e8eaf6', minHeight: '100vh', p: 3 }}>
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 10, damping: 10 }}
        >
          <Avatar
            sx={{
              bgcolor: 'black',
              mb: 2,
              mx: 'auto',
              width: 230,
              height: 120,
              fontSize: '30px',
              color:'goldenrod'
            }}
          >
            My resturant<FastfoodIcon/>
          </Avatar>
          <Typography variant="h4" gutterBottom>WELCOME!</Typography>
          <Typography variant="body1" sx={{ px: 2 }}>
            Experience the Best in Food Delivery. Alexa is a premier food delivery website that redefines the way you experience dining at home.
            With a seamless interface and a vast array of culinary options, Alexa makes discovering and enjoying your favorite dishes easier than ever.
            Whether you're craving comfort food, gourmet meals, or the latest in contemporary cuisine, Alexa has something to satisfy every taste.
          </Typography>
        </motion.div>
      </Box>

      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 10, damping: 10 }}
        >
          <Typography variant="h5" gutterBottom>Exceptional Food Delivery</Typography>
          <Typography variant="body1" sx={{ px: 2 }}>
            Alexa is your go-to destination for exceptional food delivery, bringing the best restaurants to your doorstep with just a few clicks.
            Offering a diverse menu selection, from classic comfort food to innovative gourmet dishes, Alexa ensures that every meal is delivered fresh,
            hot, and ready to enjoy. The platform is easy to navigate, making it simple to satisfy your cravings quickly and effortlessly.
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {Connection.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CallIcon sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText primary="Phone Number" secondary={data.num} />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText primary="Email" secondary={data.mail} />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemIcon>
                      <LocationOnIcon sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText primary="Address" secondary={data.address} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Contact;

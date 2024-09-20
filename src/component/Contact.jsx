import React from 'react';
import { Box, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Divider, Avatar } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Connection } from '../data/data';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <>
    
      <Box sx={{ m: 3, textAlign: 'center' }}>
        <Box
          sx={{
            mb: 4,
            bgcolor: 'primary.main',
            color: 'white',
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
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
  width: 130, 
  height: 120, 
  fontSize: '30px' 
}}

>Royale</Avatar>
  
              <h1>Welcome to 'ROYALE' Restaurant!</h1>
              <p>
                Experience the Best in Food Delivery. Alexa is a premier food delivery website that redefines the way you experience dining at home.
                With a seamless interface and a vast array of culinary options, Alexa makes discovering and enjoying your favorite dishes easier than ever.
                Whether you're craving comfort food, gourmet meals, or the latest in contemporary cuisine, Alexa has something to satisfy every taste.
                The platform is designed for convenience, offering quick, reliable delivery from top-rated restaurants straight to your doorstep.
                Alexa’s commitment to quality ensures that each meal arrives fresh, hot, and just as delicious as if you were dining out.
                With exceptional service and a user-friendly experience, Alexa transforms every meal into a delightful experience,
                bringing the best of the culinary world to your home with just a few clicks.
              </p>
          </motion.div>
        </Box>

        <Box
          sx={{
            mb: 4,
            p: 3,
            borderRadius: 2,
            boxShadow: '3px 1px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1,type:'spring',stiffness: 10,damping: 10 }}
          >
            <h2>Exceptional Food Delivery</h2>
            <p>
              Alexa is your go-to destination for exceptional food delivery, bringing the best restaurants to your doorstep with just a few clicks.
              Offering a diverse menu selection, from classic comfort food to innovative gourmet dishes, Alexa ensures that every meal is delivered fresh,
              hot, and ready to enjoy. The platform is easy to navigate, making it simple to satisfy your cravings quickly and effortlessly.
              With reliable service and top-notch quality, Alexa elevates your dining experience, making great food accessible anytime, anywhere.
            </p>
          </motion.div>
        </Box>
      </Box>

      {/* Contact Details Section */}
      <Box sx={{ m: 3 }}>
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
    </>
  );
}

export default Contact;

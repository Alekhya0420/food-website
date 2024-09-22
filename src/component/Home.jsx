import React from 'react';
import { Box, Typography, Button, Grid, Divider, Card, CardContent, CardMedia, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Banner from './banner.jpeg';
import SpecialDish1 from './specialDish1.jpg';
import SpecialDish2 from './specialDish2.jpeg';
import SpecialDish3 from './specialDish3.jpg';

function Home() {
  return (
    <>
      {/* Section 1: Banner page*/}
      <Box
        sx={{
          backgroundImage: `linear-gradient(to left,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${Banner})`,
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
        }}
      >
        <Box sx={{p:4,borderRadius:2,maxWidth:'100%'}}>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Good Food, Good Life
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
            Experience the finest culinary delights with a touch of tradition and modernity.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            <Link to="/menu-page" style={{ color: 'inherit', textDecoration: 'none' }}>Explore Our Menu</Link>
          </Button>
        </Box>
      </Box>

      {/* Section 2: Exquisite Flavors, Fresh Ingredients, Authentic Recipes */}
      <Box sx={{ py: 8, px: 4, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" color="primary" align="center" gutterBottom>
            Our Culinary Excellence
          </Typography>
          <Divider sx={{ mb: 4, width: '60%', mx: 'auto' }}/>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ p:3,borderRadius: 2, boxShadow: 5, backgroundColor: '#e8eaf6', height: '100%' }}>
                <Typography variant="h5" color="secondary" gutterBottom>
                  Exquisite Flavors
                </Typography>
                <Typography variant="body1">
                  Experience an orchestra of flavors where each dish is a masterpiece, delicately balanced to captivate your taste buds.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ p:3,borderRadius:2,boxShadow:5,backgroundColor:'#e8eaf6',height:'100%'}}>
                <Typography variant="h5" color="secondary" gutterBottom>
                  Fresh Ingredients
                </Typography>
                <Typography variant="body1">
                  Savor the taste of freshness with ingredients sourced from the finest farms, ensuring quality and vibrant flavors in every bite.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{p:3,textAlign:'center',borderRadius:2,boxShadow:5,backgroundColor:'#e8eaf6',height:'100%'}}>
                <Typography variant="h5" color="secondary" gutterBottom>
                  Authentic Recipes
                </Typography>
                <Typography variant="body1">
                  Discover time-honored recipes that bring tradition to your plate with a touch of contemporary flair, celebrating the essence of authentic cuisine.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section 3: Healthy Meals and Unmatched Dining Experience */}
      <Box sx={{ py: 8, px: 4, backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" color="primary" align="center" gutterBottom>
            Nourishing Body and Soul
          </Typography>
          <Divider sx={{ mb: 4, width: '60%', mx: 'auto' }} />
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4, borderRadius: 2, boxShadow: 5, backgroundColor: '#e8eaf6', height: '100%' }}>
                <Typography variant="h5" color="primary" gutterBottom>
                  Healthy Meals
                </Typography>
                <Typography variant="body1">
                  Indulge in meals that nurture your well-being, featuring wholesome ingredients that contribute to a balanced and healthy lifestyle.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4, borderRadius: 2, boxShadow: 5, backgroundColor: '#e8eaf6', height: '100%' }}>
                <Typography variant="h5" color="primary" gutterBottom>
                  Unmatched Dining Experience
                </Typography>
                <Typography variant="body1">
                  Enjoy an unparalleled dining experience with exceptional service and a warm, inviting ambiance that makes every meal memorable.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section 4: Seasonal Specials */}
      <Box sx={{ py: 8, px: 4, backgroundColor: '#fafafa' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" color="secondary" align="center" gutterBottom>
            Seasonal Specials
          </Typography>
          <Divider sx={{ mb: 4, width: '60%', mx: 'auto' }} />
          <Grid container spacing={4}>
            {[
              { image: SpecialDish1, title: 'Winter Delights', description: 'Warm up with our seasonal winter dishes, featuring rich flavors and comforting ingredients.' },
              { image: SpecialDish2, title: 'Spring Freshness', description: 'Celebrate spring with vibrant, fresh dishes that highlight seasonal ingredients.' },
              { image: SpecialDish3, title: 'Summer Refreshments', description: 'Beat the heat with our light and refreshing summer dishes, perfect for sunny days.' },
            ].map((dish, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{
                  borderRadius: 3,
                  boxShadow: 8,
                  backgroundColor: '#e8eaf6',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={dish.image}
                    alt={dish.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom>
                      {dish.title}
                    </Typography>
                    <Typography variant="body1">
                      {dish.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Section 5: Our Philosophy */}
      <Box sx={{ py: 8, px: 4, backgroundColor: '#f3f3f3' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" color="secondary" align="center" gutterBottom>
            Our Philosophy
          </Typography>
          <Divider sx={{ mb: 4, width: '60%', mx: 'auto' }} />
          <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
            At our restaurant, food is more than just a meal; it's a way to connect with others and celebrate life's moments. We are dedicated to providing an exceptional dining experience with a focus on quality, authenticity, and hospitality.
          </Typography>
          <Button variant="outlined" color="secondary" size="large" sx={{ display: 'block', mx: 'auto' }}>
            <Link to="/contact-page" style={{ color: 'inherit', textDecoration: 'none' }}>Learn More About Us</Link>
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default Home;

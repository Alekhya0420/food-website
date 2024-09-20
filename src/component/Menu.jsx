import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { menuList } from '../data/data';

function Menu() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', p: 2 }}>
      {menuList.map((menu) => (
        <Card
          key={menu.id}
          sx={{
            maxWidth: 390,
            margin: 2,
            borderRadius: 2,
            boxShadow: 3,
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 6,
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={menu.images}
              sx={{
                borderTopLeftRadius: 2,
                borderTopRightRadius: 2,
                objectFit: 'cover',
              }}
            />
            <CardContent>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{
                  fontWeight: 'bold',
                  color: 'text.primary',
                }}
              >
                {menu.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                }}
              >
                {menu.description}
              </Typography>
              <Typography sx={{bgcolor:'gainsboro'}}>Price:{menu.price}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default Menu;

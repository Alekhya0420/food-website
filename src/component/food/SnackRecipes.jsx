import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Grid,Card,CardMedia,CardContent,Typography,Container,Box} from '@mui/material';

function SnackRecipes() {
  const { snack } = useParams(); // Get the snack parameter from the URL
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/meal-type/${snack}`)
      .then((response) => {
        console.log(response.data); 
        setRecipes(response.data.recipes || []); 
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  }, [snack]); 
  console.log("reciepie are",recipes);

  // Group recipes by mealType
  const groupedRecipes = recipes.reduce((acc, recipe) => {
    const mealType = recipe.mealType[0]; // Assuming each recipe has one meal type
    if (!acc[mealType]) acc[mealType] = [];
    acc[mealType].push(recipe);
    return acc;
  }, {});

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ marginTop: '20px' }}>
       Recipes
      </Typography>
      
      {Object.keys(groupedRecipes).map((mealType) => (
        <Box key={mealType} sx={{ marginBottom: '40px' }}>
          <Typography variant="h5" sx={{ backgroundColor: '#000', color: '#fff', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
            {mealType}
          </Typography>

          <Grid container spacing={3} sx={{ marginTop: '20px' }}>
            {groupedRecipes[mealType].map((recipe) => (
              <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                <Card sx={{ maxHeight: 400, display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={recipe.image}
                    alt={recipe.name}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>{recipe.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      <strong>Meal Type:</strong> {recipe.mealType.join(', ')}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
}

export default SnackRecipes;

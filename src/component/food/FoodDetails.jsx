import React, { useEffect } from 'react';
import details from '../../database/db2.json';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { foodDetails } from '../../redux/food/FoodSlice';
import { Card, Grid, Paper, Typography, Box, CardMedia, CardContent, CardHeader, Button } from '@mui/material';
import banner from '../banner.jpeg';

function FoodDetails() {

    let person = sessionStorage.getItem("authToken");
    let personOne = details.register.find((user) => user.id === person);

    const dispatch = useDispatch();
    const { myfood } = useParams();

    const { data } = useSelector((state) => state.foodType);
    let fetched = data?.recipes || [];

    useEffect(() => {
        dispatch(foodDetails(myfood));
    }, [dispatch, myfood]);

    return (
        <Box sx={{ padding: 4, backgroundColor: '#f0f0f0', minHeight: '100vh', backgroundImage: `url(${banner})` }}>
            <Grid container spacing={2}>
                <Grid item md={4} xl={2}>
                    <Paper
                        elevation={5}
                        sx={{
                            padding: '2px',
                            borderRadius: '10px',
                            backgroundColor: '#ffffff',
                            border: '1px solid #1976d2',
                        }}
                    >
                        <AccountCircleIcon sx={{ fontSize: 60, color: '#1976d2' }} />
                        <Typography sx={{ color: "#1976d2", fontSize: 30, fontWeight: 'bold', marginTop: '10px' }}>
                            User Info
                        </Typography>
                        <hr />
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ fontWeight: 'bold', color: '#1976d2', marginTop: '10px' }}
                        >
                            Name: {personOne.name}
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{ fontWeight: 'bold', color: '#1976d2', marginTop: '10px' }}
                        >
                            Email: {personOne.email}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                marginTop: '20px',
                                backgroundColor: '#1976d2',
                                '&:hover': {
                                    backgroundColor: '#155a9b',
                                },
                            }}
                        >
                            Logout
                        </Button>
                    </Paper>
                </Grid>

                <Grid item xs={12} xl={10}>
                    <Grid container spacing={3}>
                        {fetched && fetched.map((data, index) => (
                            <Grid item xs={12} key={index}>
                                <Card sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: 2,
                                    borderRadius: '8px',
                                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                                    backgroundColor: '#000000',
                                    color: '#e0e0e0',
                                    maxWidth: '800px',
                                    margin: 'auto',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)',
                                        transform: 'scale(1.02)',
                                    },
                                }}>
                                    <Box sx={{ width: '60%' }}>
                                        <CardContent sx={{ padding: '10px' }}>
                                            <Typography sx={{ color: '#ffca28', fontSize: '18px', fontWeight: 'bold' }}>
                                                {data.cuisine}
                                            </Typography>

                                            <Typography sx={{ color: '#bdbdbd', fontSize: '14px', marginTop: '10px' }}>
                                                Difficulty: {data.difficulty}
                                            </Typography>

                                            <Typography sx={{ color: '#ffca28', fontSize: '14px', marginTop: '10px' }}>
                                                Timespan: {data.cookTimeMinutes} minutes
                                            </Typography>

                                            <Typography sx={{ color: '#ffe082', fontSize: '14px', marginTop: '10px' }}>
                                                Ingredients: {data.ingredients?.join(', ')}
                                            </Typography>

                                            <Typography sx={{ color: '#b3e5fc', fontSize: '14px', marginTop: '10px' }}>
                                                Instructions:
                                                {data.instructions?.map((instruction, index2) => (
                                                    <span key={index2}>{index2 + 1}. {instruction}<br /></span>
                                                ))}
                                            </Typography>

                                            <Typography sx={{ color: '#ffca28', fontSize: '14px', marginTop: '10px' }}>
                                                Rating: {data.rating}
                                            </Typography>

                                            <Typography sx={{ color: '#ffca28', fontSize: '14px', marginTop: '10px' }}>
                                                Review Count: {data.reviewCount}
                                            </Typography>

                                            <Typography sx={{ color: '#ffca28', fontSize: '14px', marginTop: '10px' }}>
                                                Servings: {data.servings}
                                            </Typography>

                                            <Button variant='contained' sx={{ marginTop: '10px' }}>
                                                <Link to={`${data.mealType[0]}`} style={{ color: '#fff', textDecoration: 'none' }}>See More</Link>
                                            </Button>
                                        </CardContent>
                                    </Box>

                                    <CardMedia
                                        component="img"
                                        image={data.image}
                                        alt="Food"
                                        sx={{
                                            width: '40%',
                                            height: '500px',
                                            borderRadius: '8px',
                                            marginLeft: '20px',
                                            opacity: 0.85
                                        }}
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default FoodDetails;



// import React,{useEffect} from 'react';
// import details from '../../database/db2.json';
// import { Typography, Paper, Box, Grid,Button, Card,CardContent} from '@mui/material';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import {food} from '../../redux/food/FoodSlice';
// import {useSelector,useDispatch} from 'react-redux';
// import {Link} from 'react-router-dom';


// function Food() {
//     let person = sessionStorage.getItem("authToken");
//     console.log("person is", person);

//     let personOne = details.register.find((user) => {
//         return user.id === person;
//     });

//     let{data,isLoading,status}=useSelector((state)=>state.foodType);
//     console.log("my fetched data is",data);

//     const dispatch = useDispatch();

//    useEffect(()=>{
//     dispatch(food())
//    },[dispatch])


//    if (!person) 
//    {
//     return <Typography variant="h1" 
//     sx={{ 
//         display:'flex',
//         justifyContent: 'center', 
//         alignItems: 'center',
//         height:'100vh' 
//     }} 
    
//     color="error">NO TOKEN FOUND</Typography>;
//    }

//     return (
//         <Box>
//         <Grid container  spacing={1}>   
//         <Grid item md={4}>
       

//         <Paper 
//             elevation={5} 
//             sx={{
//                 padding: '20px',
//                 maxWidth: '300px',
//                 margin: '10px 10px',
//                 borderRadius: '10px',
//                 backgroundColor: '#f9f9f9',
//                 border:'0.8px solid blue',
//                 position:'relative'
//             }}
//         >
           
//                 <Typography
//                 sx={{color:"black",fontSize:30,fontStyle:"italic"}}
//                 >
//                   Users<AccountCircleIcon sx={{fontSize:40,marginTop:0.2,position:'absolute'}}/>
//                 </Typography>
//                <hr/>
//                Name:
//                 <Typography 
//                     variant="h6" 
//                     component="div" 
//                     sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#1976d2' }}
//                 >
//                 {personOne.name}
//                 </Typography>

//                 Email:
//                 <Typography 
//                     variant="body1" 
//                     component="div" 
//                     sx={{fontWeight: 'bold', marginBottom: '10px', color: '#1976d2'}}
//                 >
//                 {personOne.email}
//                 </Typography>

//                <Typography>
//                 <Button variant='outlined' >Logout</Button>
//                </Typography> 
         
//         </Paper>
//        </Grid> 

//        <Grid item md={8}>
//        <Grid container spacing={2}>        
//             {
//              data.length>0 && data?.map((data,index)=>(
//                 <Grid item md={4} key={index}>
//                 <Card sx={{
//               border: '1px solid #ddd', 
//               borderRadius: '8px', 
//               boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)', 
//               padding: '16px',
//                 }}>  
                   
//             <CardContent>     
//             <Typography sx={{ color: "black", bgcolor: 'skyblue' }}>
//               <Link to={`${data}`}>{data}</Link>
//              </Typography>
//            </CardContent>



//                 </Card>                
//                 </Grid>   
//                 ))
               
//             }
        
//         </Grid>
//         </Grid>
//         </Grid>

//       </Box>

//     );
// }

// export default Food;

import React, { useEffect } from 'react';
import details from '../../database/db2.json';
import { Typography, Paper, Box, Grid, Button, Card, CardContent } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { food } from '../../redux/food/FoodSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import banner from '../banner.jpeg'
import {useNavigate} from 'react-router-dom';



function Food() {
    let person = sessionStorage.getItem("authToken");
    console.log("person is", person);
    let navigate=useNavigate();


    let personOne = details.register.find((user) => {
        return user.id === person;
    });

    let { data, isLoading, status } = useSelector((state) => state.foodType);
    console.log("my fetched data is", data);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(food());
    }, [dispatch]);

    let handleLogout=()=>{
        window.sessionStorage.clear();
        navigate('/login-page');
    }

    if (!person) {
        return (
            <Typography
                variant="h1"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    color: 'red',
                }}
            >
                NO TOKEN FOUND
            </Typography>
        );
    }

    return (
        <Box 
        sx={{ padding: '20px', 
        backgroundColor: '#f4f4f4', 
        minHeight: '100vh',
        backgroundImage:`url(${banner})` 
        }}>



            <Grid container spacing={4}>
                <Grid item md={4}>
                    <Paper
                        elevation={5}
                        sx={{
                            padding: '20px',
                            maxWidth: '100%',
                            borderRadius: '10px',
                            backgroundColor: '#ffffff',
                            border: '1px solid #1976d2',
                            textAlign: 'center',
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
                            onClick={handleLogout}
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

                <Grid item md={8}>
                    <Grid container spacing={3}>
                        {data.length > 0 && data.map((item, index) => (
                            <Grid item md={6} key={index}>
                                <Card
                                    sx={{
                                        borderRadius: '10px',
                                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                                            transform: 'scale(1.02)',
                                        },
                                        padding: '20px',
                                        backgroundColor: '#ffffff',
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: "#1976d2",
                                                fontWeight: 'bold',
                                                fontSize: '18px',
                                                textAlign: 'center',
                                                marginBottom: '15px',
                                            }}
                                        >
                                            {item} 
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            component={Link}
                                            to={`${item}`}
                                            sx={{
                                                width: '100%',
                                                borderColor: '#1976d2',
                                                color: '#1976d2',
                                                '&:hover': {
                                                    backgroundColor: '#1976d2',
                                                    color: '#ffffff',
                                                },
                                            }}
                                        >
                                            View Details
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Food;

import React,{useState} from 'react';
import { FormControl, FormLabel, TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registration } from '../redux/AuthSlice';
import { BorderAll } from '@mui/icons-material';
import details from '../database/db2.json'
import {Link} from 'react-router-dom';
import dish from './specialDish1.jpg'
import dishtwo from './specialDish2.jpeg'
import Swal from 'sweetalert2'; 



function About() {
  const form = useForm();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = form;
  const {errors} = formState;
  const [imagePreview, setImagePreview] = useState(null);
 
  console.log("Registration is",register);
  console.log("Details are",details);


  const submitHandle = (data) => {

    let existingUser = details.register.some((user) => 
      user.email === data.email || user.password === data.password
    );
  
    if (existingUser) 
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'User with this email already exists!',
        footer: 'Please try with a different email.',
      });
      return;
    }

    let jsonData= new FormData();
    jsonData.append("name",data.name);
    jsonData.append("email",data.email);
    jsonData.append("password",data.password);


    dispatch(registration(jsonData))
      .then((res) => 
      {
        console.log("data is", res);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Congratulations on your registration!',
        })  

      })

      .catch((error) => {
        console.log("error is", error);
        Swal.fire({
          icon: 'error',
          title: 'Registration failed!',
          text: 'Please try again.',
        });

      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position:'relative',

        '&:before':
        {
          content:'""',
          backgroundImage:`url(${dish})`,
          position:'absolute',
          opacity:0.6,
          top:0,
          left:0,
          height:'100%',
          width:'100%',
          zIndex:-1,
          backgroundPosition:'center',
          backgroundSize:'cover'
        }
      }}
    >
      <Box 
      sx={{
        display:'flex',
        width:'100%',
        maxWidth:'800px',
        borderRadius: '15px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}
      >

      <Box sx={{
          backgroundImage:`url(${dishtwo})`,
          display: { xs: 'none', md: 'block' },
          backgroundSize:'cover',
          backgroundPosition:'center',
          width: '50%',
      }}/>  

      <Box sx={{
        padding:"50px",
        backgroundColor:"black",
        opacity:0.8,
        
      }}>     

      <form onSubmit={handleSubmit(submitHandle)} sx={{border:"2px solid black"}}>

      <fieldset
      style={{
        border: '1px solid black',
        padding: '15px',
        maxWidth: '300px',
        height:"550px",
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)',
        position:"relative"
      }}
      >

      <legend style={{ padding: '0 10px', fontWeight: 'bold',color:"white"}}>Registration Form</legend>  
      <hr></hr>

        <FormControl fullWidth margin="normal">
          <FormLabel style={{color:"white"}}>Enter Name</FormLabel>
          <TextField
            type="text"
            label="Outlined"
            variant="outlined"
            sx={{
              borderRadius: '10px',
              backgroundColor: '#f0f8ff',
              '.MuiInputBase-input': {
                      paddingX:"30px"
                    },
            
            }}
            size='small'
            {...register("name",{required: "Name is compulsory",
              pattern:
              {
              value: /^[A-Za-z\s]+$/,
              message: "Name should contain only letters and spaces"
              }
            })}
          />
        </FormControl>
        <p style={{color:"red",position:"absolute",marginTop: '2px'}}>{errors.name?.message}</p>

        <FormControl fullWidth margin="normal">
          <FormLabel style={{color:"white"}}>Enter Email</FormLabel>
          <TextField
            type="email"
            label="Outlined"
            variant="outlined"
            size='small'
            sx={{
              borderRadius: '10px',
              backgroundColor: '#f0f8ff',
            }}
            {...register("email", { required: "Email is compulsory",
              pattern:
              {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,4}$/,
                message:"Email should be in proper format"
              }
             })}
          />
        </FormControl>
        <p style={{color:"red",position:"absolute",marginTop:'2px'}}>{errors.email?.message}</p>

        <FormControl fullWidth margin="normal">
          <FormLabel style={{color:"white"}}>Enter Password</FormLabel>
          <TextField
            type="password"
            label="Outlined"
            variant="outlined"
            size='small'
            sx={{
              borderRadius: '10px',
              backgroundColor: '#f0f8ff',
            }}
            {...register("password", { required: "Password is compulsory" })}
          />
        </FormControl>
        <p style={{color:"red",position:"absolute",marginTop:'2px'}}>{errors.password?.message}</p>

        {/* <FormControl fullWidth margin="normal">
          <FormLabel style={{color:"white"}}>Give image:</FormLabel>
          <TextField
            type="file"
            size='small'
            sx={{
              borderRadius: '10px',
              backgroundColor: '#f0f8ff',
            }}
           {...register("image",{required:"image is actually required"})}
           onChange={handleImageChange}
          />
        </FormControl> */}



        <FormControl fullWidth margin="normal">
          <Button variant="contained" color="primary"  type="submit" style={{marginTop:"25px"}}>
            Submit
          </Button>
        </FormControl>

        <FormControl fullWidth margin="normal">
         <Link to="/login-page">
          <Button variant="contained" color="error"  type="submit" style={{marginTop:"2px"}}>
            have account?login then!
          </Button>
          </Link> 
        </FormControl>


        </fieldset>
      </form>
      </Box>
      </Box>
    </Box>
  );
}

export default About;

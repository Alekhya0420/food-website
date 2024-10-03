// import React from 'react';
// import { FormControl, FormLabel, TextField, Button, Box, Typography } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { useForm } from 'react-hook-form';
// import { fetchUsers } from '../../redux/AuthSlice';
// import details from '../../database/db2.json';
// import { useNavigate } from 'react-router-dom';
// import chola from './chhola.jpg';
// import Swal from 'sweetalert2';
// import {useState} from 'react';

// function Login() {
//   let navigate = useNavigate();
//   const form = useForm();
//   const dispatch = useDispatch();
//   const { register, handleSubmit, formState } = form;
//   const { errors } = formState;
//   let selects = useSelector((state) => state.auth);
//   console.log("selectors are", selects);


//   const submitHandle = (data) => {
//     const user = details.register.find((user) =>
//       user.email === data.email && user.password === data.password
//     );

//     if (!user) {
      
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Invalid email or password!',
//         confirmButtonColor: '#d33',
//         background: '#fff',
//         customClass: {
//           popup: 'swal2-popup',
//           icon: 'swal2-icon',
//           title: 'swal2-title',
//           confirmButton: 'swal2-confirm',
//         },
//       });
//       return;
//     }

//     dispatch(fetchUsers(user))
//       .then((res) => {
//         console.log("Login successful:", res.meta.arg.name);
//         Swal.fire({
//           icon: 'success',
//           title: 'Login successful',
//           text: 'You have successfully logged in!',
//           confirmButtonColor: '#3085d6',
//           background: '#fff',
//         });
//         sessionStorage.setItem("authToken", res.meta.arg.id);
//         navigate('/food-page');
//       })
//       .catch((error) => { 
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: 'Something went wrong. Please try again later.',
//           confirmButtonColor: '#d33',
//           background: '#fff',
//         });

//       console.log("API related:", error);
//     });
//   };

//   return (
//     <Box
//     sx={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       padding: '20px',
//       position: 'relative', 
//       '&::before': {
//         content: '""',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundImage: `url(${chola})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         opacity: 0.5, 
//         zIndex: -1, 
//       }
//     }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           width: '100%',
//           maxWidth: '800px',
//           borderRadius: '15px',
//           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//         }}
//       >

//         <Box
//           sx={{
//             width: '50%',
//             display: { xs: 'none', md: 'block' },
//             backgroundImage: `url(${chola})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />

//         {/* Right side with form */}
//         <Box
//           sx={{
//             width: { xs: '100%', md: '50%' },
//             padding: '40px',
//             backgroundColor: 'black',
//             opacity:0.7,
//           }}
//         >
//           <Typography variant="h4" gutterBottom align="center" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
//             Welcome Back
//           </Typography>
//           <Typography variant="subtitle1" gutterBottom align="center" sx={{ marginBottom: '20px', color: 'white' }}>
//             Please login to continue
//           </Typography>

//           <form onSubmit={handleSubmit(submitHandle)} style={{ width: '100%' }}>

//             <FormControl fullWidth margin="normal">
//               <FormLabel sx={{ fontWeight: 'bold', color: '#1976d2' }}>Email</FormLabel>
//               <TextField
//                 type="email"
//                 variant="outlined"
//                 size="small"
//                 sx={{
//                   borderRadius: '10px',
//                   backgroundColor: '#f0f8ff',
//                 }}
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                     message: "Invalid email format",
//                   },
//                 })}
//               />
//             </FormControl>
//             <p style={{ color: 'red' }}>{errors.email?.message}</p>

//             <FormControl fullWidth margin="normal">
//               <FormLabel sx={{ fontWeight:'bold', color: '#1976d2'}}>Password</FormLabel>
//               <TextField
//                 type="password"
//                 variant="outlined"
//                 size="small"
//                 sx={{
//                   borderRadius: '10px',
//                   backgroundColor: '#f0f8ff',
//                 }}
//                 {...register("password", { required: "Password is required" })}
//               />
//             </FormControl>

//             <p style={{ color: 'red' }}>{errors.password?.message}</p>

//             <FormControl fullWidth margin="normal">
//               <Button
//                 variant="contained"
//                 type="submit"
//                 sx={{
//                   padding: '12px',
//                   borderRadius: '10px',
//                   fontSize: '16px',
//                   fontWeight: 'bold',
//                   transition: 'background-color 0.3s',
//                   background: 'linear-gradient(45deg, #1976d2, #005bb5)',
                  
//                 }}
//               >
//                 Login
//               </Button>
//             </FormControl>
//           </form>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { FormControl, FormLabel, TextField, Button, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchUsers } from '../../redux/AuthSlice';
import details from '../../database/db2.json';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import chola from './chhola.jpg'; // Image for background

function Login() {
  let navigate = useNavigate();
  const form = useForm();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [showAbout, setShowAbout] = useState(true); // To hide About component after login

  // Function to handle form submission
  const submitHandle = (data) => {
    const user = details.register.find((user) =>
      user.email === data.email && user.password === data.password
    );

    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid email or password!',
        confirmButtonColor: '#d33',
        background: '#fff',
      });
      return;
    }

    dispatch(fetchUsers(user))
      .then((res) => {
        console.log("Login successful:", res.meta.arg.name);
        Swal.fire({
          icon: 'success',
          title: 'Login successful',
          text: 'You have successfully logged in!',
          confirmButtonColor: '#3085d6',
          background: '#fff',
        });
        sessionStorage.setItem("authToken", res.meta.arg.id);
        
        // Hide the About component after login
        setShowAbout(false);

        // Redirect to the food page
        navigate('/food-page');
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again later.',
          confirmButtonColor: '#d33',
          background: '#fff',
        });
        console.error("API related:", error);
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
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${chola})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          maxWidth: '800px',
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box
          sx={{
            width: '50%',
            display: { xs: 'none', md: 'block' },
            backgroundImage: `url(${chola})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Right side with form */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            padding: '40px',
            backgroundColor: 'black',
            opacity: 0.7,
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{ color: '#1976d2', fontWeight: 'bold' }}
          >
            Welcome Back
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            align="center"
            sx={{ marginBottom: '20px', color: 'white' }}
          >
            Please login to continue
          </Typography>

          <form onSubmit={handleSubmit(submitHandle)} style={{ width: '100%' }}>
            <FormControl fullWidth margin="normal">
              <FormLabel sx={{ fontWeight: 'bold', color: '#1976d2' }}>Email</FormLabel>
              <TextField
                type="email"
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: '10px',
                  backgroundColor: '#f0f8ff',
                }}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email format',
                  },
                })}
              />
            </FormControl>
            <p style={{ color: 'red' }}>{errors.email?.message}</p>

            <FormControl fullWidth margin="normal">
              <FormLabel sx={{ fontWeight: 'bold', color: '#1976d2' }}>Password</FormLabel>
              <TextField
                type="password"
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: '10px',
                  backgroundColor: '#f0f8ff',
                }}
                {...register('password', { required: 'Password is required' })}
              />
            </FormControl>
            <p style={{ color: 'red' }}>{errors.password?.message}</p>

            <FormControl fullWidth margin="normal">
              <Button
                variant="contained"
                type="submit"
                sx={{
                  padding: '12px',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s',
                  background: 'linear-gradient(45deg, #1976d2, #005bb5)',
                }}
              >
                Login
              </Button>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;

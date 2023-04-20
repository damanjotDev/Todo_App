import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, useFormik } from 'formik';                               
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../store/slices/AuthActions';
import { Navigate,Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { FormHelperText } from '@mui/material';

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
  terms: Yup.boolean()
  .oneOf([true], 'Please accept the terms and conditions')
  .required('Please accept the terms and conditions'),
});

const theme = createTheme();

export const Login =() =>{
  const initialValues = {
    email: "",
    password: "",
    terms:false
  };
  const[data,setData]=React.useState({email: "eve.holt@reqres.in",password: "cityslicka"})
  const userData = useSelector((state)=>state.User)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const handleSubmit = (values) => {
   if(values){
    const data = {
      email:values?.email,
      password:values?.password,
      terms:values?.terms,
    }
   dispatch(loginUser(data))
   }
   else{
    alert("please fill the data")
   }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  });
  React.useEffect(()=>{
  if(userData.token){
    console.log("working")
    navigate("/")
  }
  },[userData.token])
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
         <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={formik.handleChange}
                  value = {formik.values.email}
                  onBlur={formik.handleBlur}
                  autoComplete="email"
                  helperText={formik.touched.email && formik.errors.email ?formik.errors.email: null}
                  error={formik.touched.email && formik.errors.email?true:false}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={formik.handleChange}
                  value = {formik.values.password}
                  onBlur={formik.handleBlur}
                  autoComplete="new-password"
                  helperText={formik.touched.password && formik.errors.password ?formik.errors.password: null}
                  error={formik.touched.password && formik.errors.password?true:false}
                />
              </Grid>
            
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" name="terms" color="primary" onChange={formik.handleChange} onBlur={formik.handleBlur} />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                  name='terms'
                />
                {formik.touched.terms && formik.errors.terms ? <FormHelperText  error={formik.touched.terms && formik.errors.terms?true:false}>{formik.errors.terms}</FormHelperText>: null}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" to="/register">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
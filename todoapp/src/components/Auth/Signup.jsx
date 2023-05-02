import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';                        
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../actions/AuthActions';
import { Navigate,Link, useNavigate } from 'react-router-dom';
import { useFormik} from 'formik';
import * as Yup from "yup";
import { FormHelperText, InputLabel, ListItemText, MenuItem, Select } from '@mui/material';

const validationSchema = Yup.object({
  firstName: Yup.string().required("firstName is required"),
  lastName: Yup.string().required("lastName is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
  terms: Yup.boolean()
  .oneOf([true], 'Please accept the terms and conditions')
  .required('Please accept the terms and conditions'),
  interest: Yup.array()
  .of(Yup.string().required('Interest is required'))
  .min(1, 'At least one Interest is required')
});


const names = [
  'Playing Music',
  'Watching Videos',
  'Playing Sports',
  'Entertainment'
];

const theme = createTheme();

export const Signup =() =>{
  
  const userData = useSelector((state)=>state.User)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const handleSubmit = (values) => {
   if(values){
    const data = {
      firstName:values?.firstName,
      lastName:values?.lastName,
      email:values?.email,
      password:values?.password,
      terms:values?.terms,
      interest:values?.interest
    }
   dispatch(registerUser({data,navigate}))
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
            Sign up
          </Typography>
         <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={formik.handleChange}
                  value = {formik.values.flexDirection}
                  onBlur={formik.handleBlur}
                  autoFocus
                  helperText={formik.touched.firstName && formik.errors.firstName ?formik.errors.firstName: null}
                  error={formik.touched.firstName && formik.errors.firstName?true:false}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={formik.handleChange}
                  value = {formik.values.lastName}
                  onBlur={formik.handleBlur}
                  autoComplete="family-name"
                  helperText={formik.touched.lastName && formik.errors.lastName ?formik.errors.lastName: null}
                  error={formik.touched.lastName && formik.errors.lastName?true:false}
                />
                 
              </Grid>
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
              <InputLabel id="selected-items-label">Select Interest</InputLabel>
            <Select
             fullWidth
              multiple
              labelId="selected-items-label"
              id="selected-items"
              name="interest"
              value={formik.values.interest}
              onBlur={formik.handleBlur}
              onChange={(event) => {
                formik.setFieldValue("interest", event.target.value);
              }}
              // helperText={formik.touched.interest && formik.errors.interest ?formik.errors.interest: null}
              // error={formik.touched.interest && formik.errors.interest?true:false}
            >
              {names.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.interest && formik.errors.interest ? <FormHelperText  error={formik.touched.interest && formik.errors.interest?true:false}>{formik.errors.interest}</FormHelperText>: null}
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" to="/login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
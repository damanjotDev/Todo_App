import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormHelperText,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  TextField,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Span } from "../TypoGraphy/Typography";
import { useFormik} from 'formik';
import * as Yup from "yup";
import { addUserFormValidationSchema } from "../../../validations/formValidations";


const SimpleForm = () => {
  const [state, setState] = useState({ date: new Date() });
  const initialValues = {
    email: "",
    firstName:"",
    creditCard:"",
    username:"",
    mobile:"",
    password:"",
    confirmPassword:"",
    terms:false,
    date:new Date()
  };
    
  const handleSubmit = (values) => {
    if(values){
      console.log(values)
    }
    else{
      console.log("api not call")
    }
  };
  const handleDateChange = (date) => setState({ ...state, date });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: addUserFormValidationSchema,
    onSubmit: handleSubmit
  });


  return (
    <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
             fullWidth
              type="text"
              name="username"
              id="standard-basic"
              label="Username (Min length 4, Max length 9)"
              onChange={formik.handleChange}
              value = {formik.values.username}
              onBlur={formik.handleBlur}
              autoFocus
              helperText={formik.touched.username && formik.errors.username ?formik.errors.username: null}
              error={formik.touched.username && formik.errors.username?true:false}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              fullWidth
              type="text"
              name="firstName"
              label="First Name"
              onChange={formik.handleChange}
              value = {formik.values.firstName}
              onBlur={formik.handleBlur}
              helperText={formik.touched.firstName && formik.errors.firstName ?formik.errors.firstName: null}
              error={formik.touched.firstName && formik.errors.firstName?true:false}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
             fullWidth
             id="email"
             label="Email Address"
             name="email"
             onChange={formik.handleChange}
             value = {formik.values.email}
             onBlur={formik.handleBlur}
             helperText={formik.touched.email && formik.errors.email ?formik.errors.email: null}
             error={formik.touched.email && formik.errors.email?true:false}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="date"
                value={formik.values.date}
                onChange={(date)=>formik.setFieldValue("date",date)}
                onBlur={formik.handleBlur}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    label="Date picker"
                    id="mui-pickers-date"
                    sx={{ mb: 2, width: "100%" }}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
           
           <Grid item lg={6} md={6} sm={12} xs={12}>
            <TextField
              fullWidth
              type="number"
              name="creditCard"
              label="Credit Card"
              onChange={formik.handleChange}
              value = {formik.values.creditCard}
              onBlur={formik.handleBlur}
              helperText={formik.touched.creditCard && formik.errors.creditCard ?formik.errors.creditCard: null}
              error={formik.touched.creditCard && formik.errors.creditCard?true:false}
            />
          </Grid>
           <Grid item lg={6} md={6} sm={12} xs={12}>
           <TextField
              fullWidth
              type="number"
              name="mobile"
              label="Mobile Nubmer"
              onChange={formik.handleChange}
              value = {formik.values.mobile}
              onBlur={formik.handleBlur}
              helperText={formik.touched.mobile && formik.errors.mobile ?formik.errors.mobile: null}
              error={formik.touched.mobile&& formik.errors.mobile?true:false}
            />
           </Grid>
           <Grid item lg={6} md={6} sm={12} xs={12}>
           <TextField
             fullWidth
              name="password"
              type="password"
              label="Password"
              onChange={formik.handleChange}
              value = {formik.values.password}
              onBlur={formik.handleBlur}
              helperText={formik.touched.password && formik.errors.password ?formik.errors.password: null}
              error={formik.touched.password&& formik.errors.password?true:false}
            />
           </Grid>
           <Grid item lg={6} md={6} sm={12} xs={12}>
           <TextField
              fullWidth
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              onChange={formik.handleChange}
              value = {formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword?formik.errors.confirmPassword: null}
              error={formik.touched.confirmPassword&& formik.errors.confirmPassword?true:false}
            />
           </Grid>
           <Grid item lg={6} md={6} sm={12} xs={12}>
           <FormControlLabel
              control={<Checkbox  />}
              label="I have read and agree to the terms of service."
              name='terms'
              onChange={formik.handleChange} onBlur={formik.handleBlur} 
            />
              {formik.touched.terms && formik.errors.terms ? <FormHelperText  error={formik.touched.terms && formik.errors.terms?true:false}>{formik.errors.terms}</FormHelperText>: null}
           </Grid>
    
        </Grid>

        <Button color="primary" variant="contained" type="submit" >
          <Span sx={{textTransform: "capitalize" }}>Submit</Span>
        </Button>
    </Box>
  );
};

export default SimpleForm;
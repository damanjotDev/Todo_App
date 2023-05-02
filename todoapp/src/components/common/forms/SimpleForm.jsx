import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Checkbox,
  FormControlLabel,
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

const validationSchema = Yup.object({
    username: Yup.string().required("firstName is required").min(4,'Username must be at least 4 characters long').max(9,'Username not be 4 characters long').matches(/^\S*$/, 'Username must not contain spaces'),
    firstName: Yup.string().required("firstName is required").max(50,"first name is too long!").matches(/^\S*$/, 'Username must not contain spaces'),
    email: Yup.string().email("Invalid email address").required("Email is required").matches(/^[^\s@+<>()[\]\\.,;:\s]+@\S+$/, 'Invalid email'),
    creditCard:Yup.string().required("Credit card number is required").min(16,'Minimum length should be 16').max(16,'Maximum length should be 16')
    
    // terms: Yup.boolean()
    // .oneOf([true], 'Please accept the terms and conditions')
    // .required('Please accept the terms and conditions'),
    // interest: Yup.array()
    // .of(Yup.string().required('Interest is required'))
    // .min(1, 'At least one Interest is required')
  });
  
  const initialValues = {
    username: "",
    mobile:"",
    password: "",
    confirmPassword: "",
    gender:"",
    terms:""
  };

const SimpleForm = () => {
  const [state, setState] = useState({ date: new Date() });
    
  const handleSubmit = (values) => {
    // console.log("submitted");
    // console.log(event);
    console.log(values)
  };

  

//   const handleDateChange = (date) => setState({ ...state, date });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  });
 

  return (
    <div>
        <Grid container spacing={6} onSubmit={formik.handleSubmit}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
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

            <TextField
              type="text"
              name="firstName"
              label="First Name"
              onChange={formik.handleChange}
              value = {formik.values.firstName}
              onBlur={formik.handleBlur}
              helperText={formik.touched.firstName && formik.errors.firstName ?formik.errors.firstName: null}
              error={formik.touched.firstName && formik.errors.firstName?true:false}
            />

            <TextField
              type="email"
              name="email"
              label="Email"
              onChange={formik.handleChange}
              value = {formik.values.email}
              onBlur={formik.handleBlur}
              
              helperText={formik.touched.email && formik.errors.email ?formik.errors.email: null}
              error={formik.touched.email && formik.errors.email?true:false}
            />

            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={date}
                onChange={handleDateChange}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    label="Date picker"
                    id="mui-pickers-date"
                    sx={{ mb: 2, width: "100%" }}
                  />
                )}
              />
            </LocalizationProvider> */}

            <TextField
              sx={{ mb: 4 }}
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

          {/* <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="mobile"
              value={mobile || ""}
              label="Mobile Nubmer"
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <TextField
              name="password"
              type="password"
              label="Password"
              value={password || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <TextField
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              label="Confirm Password"
              value={confirmPassword || ""}
              validators={["required", "isPasswordMatch"]}
              errorMessages={["this field is required", "password didn't match"]}
            />
            <RadioGroup
              row
              name="gender"
              sx={{ mb: 2 }}
              value={gender || ""}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Male"
                label="Male"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="Female"
                label="Female"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="Others"
                label="Others"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />
            </RadioGroup>

            <FormControlLabel
              control={<Checkbox  />}
              label="I have read and agree to the terms of service."
              name='terms'
            />
          </Grid> */}
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Span sx={{textTransform: "capitalize" }}>Submit</Span>
        </Button>
    </div>
  );
};

export default SimpleForm;
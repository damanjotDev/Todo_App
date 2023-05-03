import * as Yup from "yup";

export const addUserFormValidationSchema=()=>{
return Yup.object({
    username: Yup.string().required("username is required").min(4,'Username must be at least 4 characters long').max(9,'Username not be 4 characters long').matches(/^\S*$/, 'Username must not contain spaces'),
    firstName: Yup.string().required("firstName is required").max(50,"first name is too long!").matches(/^\S*$/, 'Username must not contain spaces'),
    email: Yup.string().email("Invalid email address").required("Email is required").matches(/^[^\s@+<>()[\]\\.,;:\s]+@\S+$/, 'Invalid email'),
    creditCard:Yup.string().required("Credit card number is required").min(16,'Minimum length should be 16').max(16,'Maximum length should be 16'),
    mobile:Yup.string().required("Mobile number is required").min(10,'Minimum length should be 10').max(10,'Maximum length should be 10'),
    password:Yup.string().required('Password is required').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,'Password must contain at least 8 characters, including at least one letter, one number, and one special character'),
    confirmPassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
    terms:Yup.boolean().oneOf([true], 'Please accept the terms and conditions').required('Please accept the terms and conditions'),
    date:Yup.string().required("Date is required")
    // interest: Yup.array()
    // .of(Yup.string().required('Interest is required'))
    // .min(1, 'At least one Interest is required')
  });
}
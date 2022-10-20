import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './textfield'; 
import * as Yup from 'yup';
// import Loginup from './Loginup';
import { useNavigate } from "react-router-dom";
import './Signup.css'


const Signup = () => {
  const validate = Yup.object({
    fullName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required')
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required')
  })


  const navigate = useNavigate();
  const navigateRes = () => {

    navigate('/Welcom');
  };
  const handleRes = () => {

    navigate('/');
  };

  // const resetAllFields = (resetForm, setFieldValue) => {
  //   resetForm();
  // };
  

    //const sweets = options.map((data)=>data.label)
  
//console.log("options",options.map((data)=>data.label))

  return (
    <Formik
      initialValues={{
        fullName:'',
        email: '',
        password: '',
      }}
    
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values)
        alert("Form is validated! Submitting the form...");
      }}

      children={(props) => {
        //console.log('=======props======', props)
        const { values } = props;
        return (
          <div>
            <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>

            <Form align="center">
            <TextField label="Full Name" name="fullName" type="text" />
              <TextField label="Email" name="email" type="email" />
              <TextField label="password" name="password" type="password" />
              

              

              <button className='btn1' type="submit" onClick={navigateRes} >Create Account</button>
              {/* <button className='btn1'  type="reset" onClick={() => resetAllFields(resetForm, setFieldValue)}>Reset</button> */}
              
              <p  onClick={handleRes}>Have Already a Account</p>

            </Form>

          </div>
        )
      }}
    />
  )
}
export default Signup;
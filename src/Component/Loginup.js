import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './textfield'; 
import * as Yup from 'yup';
 //import Signup from './Signup';
import { useNavigate } from "react-router-dom";
import './Signup.css'


const Loginup = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
      submit :Yup.string()
      .required('Email & Password is required'),

  })


  const navigate = useNavigate();
  const naviRes = () => {

    navigate('/Welcom');
  };
  const navigateRes = () => {

    navigate('/Signup');
  };


  // const resetAllFields = (resetForm, setFieldValue) => {
  //   resetForm();
  // };
  

    //const sweets = options.map((data)=>data.label)
  
//console.log("options",options.map((data)=>data.label))

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        submit:'',
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
            <h1 className="my-4 font-weight-bold .display-4">Log In</h1>

            <Form align="center">
              <TextField label="Email" name="email" type="email" />
              <TextField label="password" name="password" type="password" />
              

              

              <button onClick={naviRes} className='btn1' name="submit"  >Login</button>
              {/* <button className='btn1'  type="reset" onClick={() => resetAllFields(resetForm, setFieldValue)}>Reset</button> */}
              
              <p  onClick={navigateRes}>Create a account</p>

            </Form>

          </div>
        )
      }}
    />
  )
}
export default Loginup;
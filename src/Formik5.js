import React, { useState } from "react"
import { Formik, Form, Field } from "formik"
import Errors from "./Errors";

import axios from "axios";
import * as yup from "yup"

const formSchema = yup.object().shape({
  firstname: yup.string().max(15, "Your Name is too long").min(2, "Your name is too short").required("Please Enter Your Firstname"),
  lastname: yup.string().required("Please Enter Your Lastname"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Please Enter Your password"),
  date: yup.string().required("Date is required"),
  gender: yup.string().required("Select Your Gender"),
  income: yup.string().required("Please select your income"),
  about: yup.string().required("Write Something"),
  social: yup.string().required("Social is required")



});

function Formik5() {
  // const [firstname, setFirstname] = useState("")
  // const [lastname, setlastname] = useState("")
  // const [email, setEmail] = useState("")

  const handleChange = (e) => {
    e.preventDefault()
    // setFirstname(e.target.initialValues)
    // setlastname(e.target.initialValues)
    // setEmail(e.target.initialValues)

  }


  const handleSubmit = (values) => {

    axios({
      method: "POST",
      url: "https://624bf01c71e21eebbcf7daaf.mockapi.io/crud",
      data: values

    })
      .then((response) => {
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })


  }


  return (
    <div>
      <Formik initialValues={{
        firstname: "", lastname: "", email: "",
        password: "", date: "",
        gender: "", income: "", about: "", social:[]
      }}

        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        <Form>
          <label>FirstName</label>
          <br />
          <Field name="firstname" type="text"
            OnChange={handleChange}
          /><br />
          <Errors name="firstname" />


          <label>LastName</label>
          <br />
          <Field name="lastname" type="text"
            OnChange={handleChange} />
          <br />
          <Errors name="lastname" />


          <label>Email</label>
          <br />
          <Field name="email" type="text"
            OnChange={handleChange} />
          <br />
          <Errors name="email"
          />


          <label>Password</label>
          <br />
          <Field name="password" type="password"
            OnChange={handleChange}
          /><br /><br />
          <Errors name="email" />



          <label>Gender</label>
          <br />
          <label>Male</label>
          <Field name="gender" type="radio" value="male" OnChange={handleChange} />
          <label>Female</label>
          <Field name="gender" type="radio" value="female" OnChange={handleChange} />
          <Errors name="gender" />
          <br /><br />



          <label>Date</label>
          <br />
          <Field name="date" type="date" />
          <Errors name="date" />
          <br />
          <label>Income</label>
          <br />
          <Field name="income" as="select">
            <option value="0-1000">Rs 0-10000</option>
            <option value="0-2000">Rs 0-20000</option>
            <option value="0-3000">Rs 0-30000</option>

          </Field>
          <br /><br />
          <label>About</label>
          <br />
          <Field name="about" type="textarea" />
          <Errors name="about" />
          <br /><br />
          <label>SOCIALMEDIA:</label>
          <br />
          <label>Facebook</label>
          <br/>
          <Field name="social[0]" type="text" />
          <br />
          <label>Twitter</label>
          <br />
          <Field name="social[1]" type="text" />
          <br /><br />
          <button>Button</button>




        </Form>
      </Formik>
    </div>
  )
}
export default Formik5



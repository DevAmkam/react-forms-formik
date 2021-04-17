import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

/*
  Steps in in using Formik
  1. Pass in the initial values to the useFormik() hook and assign them to a formik constant variable
    * The properties must match the name attribute of the form fields
  2. Add the on onChange and value attribute prop into all the fields that needs to be tracked
    * The onChange prop is equal to a formik helper method called handleChange
    * The value prop is equal to a formik value object that contains the values of the form fields
  3. When you change the value of the fields the handleChange method is called whick will update the values object which is passed back to the form field


  Handling Form Submission in Formik
  1. Specify the onSubmit handler on the form element with the formik constant to access the handleSubmit method of formik
  2. SPecify another property called onSubmit to the useFormik hook which is a method that recieves the form state as it arguement

  Validating Form fields in Formik
  1. Pass the validate property in the formik hook object

  YUP LIBRARY
  1. Using Yup library, first need to write validation Schema object
  2. Pass the schema into the useFormik() hook

*/

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  // values.name, values.email values.channel, to access the fields values
  // errors.name, errors.email, errors.channel to access the errors for the fields
  // erorors.name = "THe name field is required"
  let errors = {};

  if (!values.name) {
    errors.name = "name field is required";
  } else if (values.name.length < 3) {
    errors.name = "name must be above 3 chars";
  }

  if (!values.email) {
    errors.email = "email field is required";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!values.channel) {
    errors.channel = "Channel field is required";
  }

  return errors;
};

const validationSchema = yup.object({
  name: yup.string().required("Name field is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email field is required"),
  channel: yup.string().required("Channel field is required"),
});

export default function FormikBasics() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });

  console.log(formik.values);
  console.log("Form errors: ", formik.errors);
  console.log("Visited fields: ", formik.touched);

  return (
    <div className="flex justify-center">
      <form
        className="p-10 mt-6 border bg-white shadow-lg rounded-md w-1/2"
        onSubmit={formik.handleSubmit}
      >
        <div className="mt-5">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            className="border py-2 rounded px-3 w-full mt-1"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur} // On blur of this field, errors will be gone
          />
          {formik.touched.name && formik.errors.name && (
            <div>
              <p className="text-red-400 text-xs">{formik.errors.name}</p>
            </div>
          )}
        </div>
        <div className="mt-5">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
            className="border py-2 rounded px-3 w-full mt-1"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur} // On blur of this field, errors will be gone
          />
          {formik.touched.email && formik.errors.email && (
            <div>
              <p className="text-red-400 text-xs">{formik.errors.email}</p>
            </div>
          )}
        </div>
        <div className="mt-5">
          <label htmlFor="channel" className="block">
            Channel
          </label>
          <input
            type="text"
            name="channel"
            id="channel"
            placeholder="Enter channel"
            className="border py-2 rounded px-3 w-full mt-1"
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur} // On blur of this field, errors will be gone
          />
          {formik.touched.channel && formik.errors.channel && (
            <div>
              <p className="text-red-400 text-xs">{formik.errors.channel}</p>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-green-600 py-2 px-6 block mt-4 w-full rounded text-white"
        >
          SUbmit
        </button>
      </form>
    </div>
  );
}

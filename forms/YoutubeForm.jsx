import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as yup from "yup";

/* Formik Component

1. Import Formik component
2. REmove the call to use formik
3. Wrap the entire form with the Formik component

*/
const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form Data Submitted: ", values);
};

const validationSchema = yup.object({
  name: yup.string().required("Name field is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email field is required"),
  channel: yup.string().required("Channel field is required"),
});

export default function YoutubeForm() {
  return (
    <div className="flex justify-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="p-10 mt-6 border bg-white shadow-lg rounded-md w-1/2">
          <div className="mt-5">
            <label htmlFor="name" className="block">
              Name
            </label>
            <Field
              type="text"
              name="name"
              id="name"
              placeholder="Enter name"
              className="border py-2 rounded px-3 w-full mt-1"
            />
            <ErrorMessage name="name" className="text-red-400" />
          </div>
          <div className="mt-5">
            <label htmlFor="email" className="block">
              Email
            </label>
            <Field
              type="text"
              name="email"
              id="email"
              placeholder="Enter email"
              className="border py-2 rounded px-3 w-full mt-1"
            />
            <ErrorMessage name="email" className="text-red-400" />
          </div>
          <div className="mt-5">
            <label htmlFor="channel" className="block">
              Channel
            </label>
            <Field
              type="text"
              name="channel"
              id="channel"
              placeholder="Enter channel"
              className="border py-2 rounded px-3 w-full mt-1"
            />
            <ErrorMessage name="channel" className="text-red-400" />
          </div>
          <button
            type="submit"
            className="bg-green-600 py-2 px-6 block mt-4 w-full rounded text-white"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

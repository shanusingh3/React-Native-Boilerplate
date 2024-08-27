/* eslint-disable react/display-name */
import React from 'react';
import { useFormik } from 'formik';
import { JSX } from 'react';

const withFormik =
  (
    Component: JSX.IntrinsicAttributes,
    initialValues: any,
    validationSchema: any,
    onSubmit: any,
  ) =>
    (props: any) => {
      const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
      });

      return <Component {...props} formik={formik} />;
    };

export default withFormik;

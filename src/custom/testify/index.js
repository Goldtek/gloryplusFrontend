import React, { Fragment } from "react";
import { Formik } from "formik";
import Error from "./Error";
import * as Yup from "yup";
// import Recaptcha from "react-google-invisible-recaptcha";
import "../welcomeform/form.css";
import swal from "sweetalert";

// localhost captchakey for testing
// const localhostKey = "6Lc55O0UAAAAAAi-42a0QpmB4i7uzq0HAYR70JCi";
// const siteKey = "6Leh4e0UAAAAALjSY_pqStVFcEOCmmPW7nxPax1O";

const validationSchema = Yup.object().shape({
fname: Yup.string()
.min(5, "Please have 5 character")
.max(25, "Must have 25 max characters")
.required("Please enter your first name"),
lname: Yup.string()
.min(5, "Please have 5 character")
.max(25, "Please have 25 max characters")
.required("Please enter you last name"),
email: Yup.string()
.email("Please be a valid email address")
.required("Please enter an email"),
phone: Yup.number()
.integer()
.min(11, "Please be a valid phone number")
.required("Please enter your contact number"),
address: Yup.string().required("Please enter your address"),
city: Yup.string().required("please enter your current city"),
testimony: Yup.string().required("please enter your testimony"),
bus_stop: Yup.string().required("Please enter your nearest bus stop"),
});
class TestifyForm extends React.Component {
render() {
return (
<Fragment>
<div className="col-md-8 col-lg-8 col-sm-12 col-x-12 col-md-offset-2">
<section className="site-container padding-tb welcomeform">
<h3 className="wow fadeInDown" data-wow-delay="0.4s">
<strong>PLEASE SHARE YOUR TESTIMONY WITH US BY FILLING THE FORM BELOW:</strong>
</h3>
<section className="card">
<Formik
initialValues={{
fname: "",
lname: "",
email: "",
phone: "",
address: "",
city: "",
bus_stop: "",
testimony: "",
}}
validationSchema={validationSchema}
onSubmit={(values, { setSubmitting, resetForm }) => {
setSubmitting(true);

setTimeout(() => {
// alert(JSON.stringify(values, null, 2));
// swal(JSON.stringify(values, null, 2), "success");
swal(
"Good job!",
"Your testimony has been received!",
"success"
);
resetForm();
setSubmitting(false);
}, 500);
}}
>
{({
values,
errors,
handleChange,
handleBlur,
touched,
handleSubmit,
isSubmitting,
resetForm,
}) => (
<form className="form" onSubmit={handleSubmit}>
{/* FIRST NAME && LASTNAME STARTS */}

<div className="row">
<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
<div
  className="form__wrapper wow fadeInDown"
  data-wow-delay="0.5s"
>
  <input
    type="text"
    id="fname"
    name="fname"
    className={
      touched.fname && errors.fname
        ? "form__input error"
        : "form__input"
    }
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.fname}
  />
  <label className="form__label" htmlFor="First Name">
    <span className="form__label-content">
      First Name
    </span>
  </label>
  <Error
    touched={touched.fname}
    message={errors.fname}
  />
</div>
</div>
<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
<div
  className="form__wrapper wow fadeInDown"
  data-wow-delay="0.5s"
>
  <input
    type="text"
    id="lname"
    name="lname"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.lname}
    className={
      touched.lname && errors.lname
        ? "form__input error"
        : "form__input"
    }
  />
  <label className="form__label" htmlFor="Last Name">
    <span className="form__label-content">
      Last Name
    </span>
  </label>
  <Error
    touched={touched.lname}
    message={errors.lname}
  />
</div>
</div>
</div>
{/* FIRST NAME && LASTNAME ENDS */}

{/* EMAIL && PHONE NUMBER */}
<div className="row">
<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
<div
  className="form__wrapper wow fadeInDown"
  data-wow-delay="0.6s"
>
  <input
    type="email"
    id="email"
    name="email"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.email}
    className={
      touched.email && errors.email
        ? "form__input error"
        : "form__input"
    }
  />
  <label className="form__label" htmlFor="email">
    <span className="form__label-content">Email</span>
  </label>
  <Error
    touched={touched.email}
    message={errors.email}
  />
</div>
</div>
<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
<div
  className="form__wrapper wow fadeInDown"
  data-wow-delay="0.6s"
>
  <input
    type="number"
    id="phone"
    name="phone"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.phone}
    className={
      touched.phone && errors.phone
        ? "form__input error"
        : "form__input"
    }
  />
  <label className="form__label" htmlFor="phone">
    <span className="form__label-content">
      {" "}
      Phone (XXX) XXX-XXXX
    </span>
  </label>
  <Error
    touched={touched.phone}
    message={errors.phone}
  />
</div>
</div>
</div>
<div
className="form__wrapper wow fadeInDown"
data-wow-delay="0.6s"
>
<input
type="text"
id="address"
name="address"
onChange={handleChange}
onBlur={handleBlur}
value={values.address}
className={
  touched.address && errors.address
    ? "form__input error"
    : "form__input"
}
/>
<label className="form__label" htmlFor="address">
<span className="form__label-content">Adress</span>
</label>
<Error
touched={touched.address}
message={errors.address}
/>
</div>
<div className="row">
<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
<div
  className="form__wrapper wow fadeInDown"
  data-wow-delay="0.6s"
>
  <input
    type="text"
    id="city"
    name="city"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.city}
    className={
      touched.city && errors.city
        ? "form__input error"
        : "form__input"
    }
  />
  <label className="form__label" htmlFor="phone">
    <span className="form__label-content"> City</span>
  </label>
  <Error touched={touched.city} message={errors.city} />
</div>
</div>
<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
<div
  className="form__wrapper wow fadeInDown"
  data-wow-delay="0.6s"
>
  <input
    type="text"
    id="bus_stop"
    name="bus_stop"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.bus_stop}
    className={
      touched.bus_stop && errors.bus_stop
        ? "form__input error"
        : "form__input"
    }
  />
  <label className="form__label" htmlFor="Bust Stop">
    <span className="form__label-content">
      Nearest Bus/Stop
    </span>
  </label>
  <Error
    touched={touched.bus_stop}
    message={errors.bus_stop}
  />
</div>
</div>
</div>
<div
className="form__wrapper wow fadeInDown"
data-wow-delay="0.6s"
>
<textarea
id="testomony"
name="testimony"
onChange={handleChange}
onBlur={handleBlur}
value={values.testimony}
className={
  touched.testimony && errors.testimony
    ? "form__input error"
    : "form__input"
}
rows="5"
></textarea>
<label className="form__label" htmlFor="testimony">
<span className="form__label-content">Testimony</span>
</label>
<Error
touched={touched.testimony}
message={errors.testimony}
/>
</div>

<div className="col-xs-6">
{" "}
<div
className="form__wrapper--submit wow fadeInLeft"
data-wow-delay="0.7s"
>
<div className="form__input-submit">
  <button
    className="btn btn-block btn-primary"
    type="submit"
    disabled={isSubmitting}
  >
    Submit
  </button>
</div>
</div>
</div>

<div className="col-xs-6">
{" "}
<div
className="form__wrapper--submit wow fadeInLeft"
data-wow-delay="0.7s"
>
<div className="form__input-submit">
  <button
    className="btn btn-block btn-danger"
    type="reset"
    onClick={resetForm}
  >
    Clear
  </button>
</div>
</div>
</div>
</form>
)}
</Formik>
</section>
</section>
</div>

{/* GOOGLE CAPTCHA */}
{/* <Recaptcha
ref={(ref) => (this.recaptcha = ref)}
sitekey={localhostKey}
onResolved={() => console.log("Human detected.")}
/> */}
</Fragment>
);
}
}

export default TestifyForm;

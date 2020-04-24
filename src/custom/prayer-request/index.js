import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import serializeForm from "form-serialize";
import swal from 'sweetalert';
import "../welcomeform/form.css";



class PrayerRequest extends React.Component {
handleWelcomeForm = e => {
e.preventDefault();
const regValues = serializeForm(e.target, { hash: true });
// console.log(regValues);
swal("Good job!", "Your testimony is received", "success");
};
render() {

return (
<Fragment>
<div className="col-md-2"></div>
<div className="col-md-8 col-lg-8 col-sm-12 col-x-12">
<section className="site-container padding-tb welcomeform">

<section className="card wow fadeInLeft">

<h3 className="wow fadeInDown" data-wow-delay="0.4s">Please fill in your details correctly</h3>

<form action="#" className="form" onSubmit={this.handleWelcomeForm} enctype="multipart/form-data">

<div className="row">
{/* FIRST NAME ######################## */}
<div className="col-xs-6">
<div
className="form__wrapper wow fadeInDown"
data-wow-delay="0.5s"
>
<input
type="text"
className="form__input"
id="fname"
name="fname"
required
/>
<label className="form__label" htmlFor="first name">
<span className="form__label-content">First Name</span>
</label>
</div>
</div>
{/* LAST NAME */}
<div className="col-xs-6">
<div
className="form__wrapper wow fadeInDown"
data-wow-delay="0.5s"
>
<input
type="text"
className="form__input"
id="lname"
name="lname"
required
/>
<label className="form__label" htmlFor="first name">
<span className="form__label-content">Last Name</span>
</label>
</div>
</div>

{/* EMAIL */}
<div className="col-xs-6">
<div
className="form__wrapper wow fadeInDown"
data-wow-delay="0.5s"
>
<input
type="email"
className="form__input"
id="email"
name="email"
required
/>
<label className="form__label" htmlFor="first name">
<span className="form__label-content">Email</span>
</label>
</div>
</div>

{/* GENDER */}
<div className="col-xs-6">
<div
className="form__wrapper wow fadeInDown"
data-wow-delay="0.5s"
>

<select className="form__input"
id="gender" name="gender" required>
<option value=""></option>
<option value="male">Male</option>
<option value="female">Female</option>
</select>
<label className="form__label" htmlFor="first name">
<span className="form__label-content">Gender</span>
</label>
</div>
</div>

{/* MESSAGE */}
<div className="col-xs-12">
<div className="form-group">
<div className="input-group input-file" name="Fichier1">
<span className="input-group-btn">
<button className="btn btn-primary btn-choose btn-sm" type="button">Choose</button>
</span>
<input type="text" className="form-control input-lg" placeholder="Uplaod a video or doctor's report..."  required/>

</div>
</div>
</div>

<div className="col-xs-12">


<div className="col-xs-12">
<div
className="form__wrapper wow fadeInDown"
data-wow-delay="0.5s"
>
<textarea className="form__input"
id="address"
name="address" required></textarea>

<label className="form__label" htmlFor="first name">
<span className="form__label-content">Write Your Prayer Request Here ...</span>
</label>
</div>
</div>

<div className="col-xs-12"></div>

</div>
<div className="col-xs-6">
{" "}
<div
className="form__wrapper--submit wow fadeInLeft"
data-wow-delay="0.7s"
>
<div className="form__input-submit">
<button
className="btn btn-block btn-success"
type="submit"
data-dismiss="modal"
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
data-dismiss="modal"
>
Clear
</button>
</div>
</div>
</div>

</div>
</form>

</section>
</section>
</div>

<div className="col-md-2"></div>
{/* {console.log(homechurches)} */}
</Fragment>

);
}
}

export default PrayerRequest;

import React from 'react'

function card(props) {
return (
<div className="col-sm-6 col-md-6 top-mrgin">
<div className="give-thumbnail">
<div className="caption">
<h3 align="center">{props.title}</h3>
<p className="card-description give-div">
{props.desc}
</p>
<a href="#" className="btn btn-danger btn-block" role="button">{props.btnText}</a>
</div>
</div>
</div>

)
}

export default card

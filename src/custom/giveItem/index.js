import React from "react";
import './styles.css';

const handleClose = () => {
    this.setState({ show: false });
}

const handleShow = (props) => {
    props.setProperty({name:props.title, id:props.id});
   window.$("#giveComponent").modal("show");
   
}


const GiveItem = (props) => (
    <div className="col-sm-4 ">
        <div className="blog-item">
            <div className="blog-item mb-20">
                <div className="bi-thumb set-bg" data-setbg={props.image}>
                    <img src={props.image} style={{ width: '100%', height: '240px'}}/>
                </div>
                <div className="bi-content">
                    <h4><a href="single-blog.html">{props.title}</a></h4>
                    <p className="event-details ">
                      {props.content}
                    </p>
                    <span onClick={()=> handleShow(props)} className="bi-cata">Give Now</span>
                </div>
            </div>
        </div>
    </div>
)

export default GiveItem;
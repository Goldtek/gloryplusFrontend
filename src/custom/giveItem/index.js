import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
import Modal from '../modal';


const GiveItem = (props) => {
  const {
    artist, sermonImg, title, src, vdAmt, adAmt,
  } = props;
  const { user } = useSelector((state) => ({ user: state.User }));
  const { unregistered_user, user: Registered_user, isAuthenticated } = user;
  const { email, phone, name } = unregistered_user;
  const [isVisible, setVisibility] = useState(false);

  const handleClose = () => {
    this.setState({ show: false });
  };

  const handleShow = (props) => {
    if (email === '' | name === '' | phone === '' && isAuthenticated === false) {
      return window.$('#modalBox').modal('show');
    }
    props.setProperty({ name: props.title, id: props.id });
    window.$('#giveComponent').modal('show');
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
  // onClick={() => handleShow(props)}
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Modal />
      <div className="col-sm-4 ">
        <div className="blog-item">
          <div className="blog-item mb-20">
            <div className="bi-thumb set-bg" data-setbg={props.image}>
              <img src={props.image} style={{ width: '100%', height: '240px' }} />
            </div>
            <div className="bi-content">
              <h4><a href="single-blog.html">{props.title}</a></h4>
              <p className="event-details ">
                {props.content}
              </p>
              {!isVisible && (
                <span className="bi-cata" onClick={() => setVisibility(!isVisible)}>Give Now</span>
              )}
            </div>
          </div>
          {isVisible && (
          <div className="">
            <div className="card card-body">
              Anim pariatur cliche
            </div>
          </div>
          )}
        </div>
      </div>

    </>
  );
};

export default GiveItem;

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  TopNav,
  Header,
  PageInfo,
  Footer,
  NewsLetter,
} from '../../custom';
import './styles.css';

const Dashboard = () => {
  const { user } = useSelector((state) => ({ user: state.User }));
  const { user: Reg_user } = user;

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <TopNav />
      <Header />
      <PageInfo title={`Welcome ${Reg_user.firstname} ${Reg_user.lastname} `} bgPicture="url(img/bg-info/church-events.png)" />

      <div className="container mt-50">
        <div className="row profile">
          <div className="col-md-3">
            <div className="profile-sidebar">

              {/* <!-- SIDEBAR USER TITLE --> */}
              <div className="profile-usertitle">
                <img src="http://www.joblo.com/newsimages1/logan-x-24-hugh-jackman-villain-thumb.jpg" className="img-circle" width="100px" />

                <div className="profile-usertitle-name">
                  {Reg_user.firstname}
                  {' '}
                  {Reg_user.lastname}
                </div>
                {/* <div class="profile-usertitle-job">
                                Developer
                            </div> */}
              </div>

              {/*  SIDEBAR MENU */}
              <div className="profile-usermenu">
                <ul className="nav">
                  <li className="active">
                    <Link to="/">
                      <i className="glyphicon glyphicon-home" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard">
                      <i className="glyphicon glyphicon-user" />
                      My Account
                    </Link>
                  </li>
                  {/* <li>
                                    <a href="#" target="_blank">
                                    <i class="glyphicon glyphicon-edit"></i>
                                    Account Setting </a>
                                </li> */}
                  {/* <li>
                                    <a href="#">
                                    <i class="glyphicon glyphicon-ok"></i>
                                    Menu</a>
                                </li> */}
                  <li>
                    <a href="#">
                      <i className="glyphicon glyphicon-lock" />
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- END MENU --> */}
            </div>
          </div>
          <div className="col-md-9">
            {/* <div class="col-sm-4">
                        <div class="profile-content align-items-center">
                        <i class="fa fa-3x fa-money"></i>
                            <h1>Pledges</h1>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="profile-content">
                        <i class="fa fa-3x fa-book"></i>
                        <h1>My Courses </h1>
                        </div>
                    </div> */}
            {/* <div class="col-sm-4">
                        <div class="profile-content">
                        <i class="fa fa-3x fa-money"></i>
                            <h1>Seeds</h1>
                        </div>
                    </div> */}
            <Link to="/courses">
              <div className="col-sm-4">
                <div className="profile-content">
                  <i className="fa fa-3x fa-book" />
                  <h1> Courses</h1>
                  <p className="itext">
                    {' '}
                    GloryPlus International presents opportunities for insightful
                    ministerial education, facilitating and promoting the unity of
                    the body of Christ, the expansion and the advancement of His kingdom
                    in our world through deliberate and strategic teaching and establishment
                    of divine truths of God's word, in the hearts and minds of God's ministers
                    all over the world.
                    {' '}
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/sermon">
              <div className="col-sm-4">
                <div className="profile-content">
                  <i className="fa fa-3x fa-file-audio" />
                  <h1>Sermons</h1>
                  <p className="itext">
                    {' '}
                    Listen to messages of Rev Dubus Achufusi as it transforms
                    your life, from his messages are principles on how to live
                    the life of a glorious and victorious christain in every area of your life,
                    remember faith is built by hearing and hearing the word of God. Romans 10:17
                    {' '}
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/pricing">
              <div className="col-sm-4">
                <div className="profile-content">
                  <i className="fa fa-3x fa-clone" />
                  <h1>Our Packages</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Dashboard;

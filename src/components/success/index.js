import React, { Component, Fragment } from 'react';
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
} from '../../custom';

class Success extends Component {
  render() {
    return (
      <>
        <TopNav />
        <Header />
        <PageInfo
          title="Payment Successful"
          bgPicture="url(img/bg-info/red-contact.png)"
        />
        <div className="row" style={{ height: 530, alignItems: 'center' }}>
          <div className="col-md-4 col-md-offset-4" style={{ marginTop: 100}}>
            <div className="card">
              <div style={{
                borderRadius: '200px', height: '200px', width: '200px', background: '#F8FAF5', margin: '0 auto',
              }}
              >
                <i className="checkmark">✓</i>
              </div>
              <div style={{ marginLeft: 150}}>
                  <h1 >Success</h1>
                  <p>
                    Your payment was successful
                    <br />
                  </p>
              </div>
            
            </div>

          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Success;

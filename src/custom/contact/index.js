import React, { Component } from "react";

class Contactus extends Component {
  state = {
    message: "",
    name: "",
    email: ""
  };

  handleEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleName = event => {
    this.setState({ name: event.target.value });
  };

  handleMessage = event => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = e => {
    const { name, message, email } = this.state;
    if (name === "" || email === "" || message === "") {
      alert("all fields are required");
      return;
    }
    // const data = {
    //   message, name, email
    // };
    alert("Your message has been recieved, you will be contacted soon.");
    e.preventDefault();
  };

  render() {
    const stlyes = {
      border: 0,
      height: "70vh",
      width: "100%"
    };
    return (
      <div>
        <div className="full-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15853.792167427753!2d3.3744406!3d6.5911003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7d1341f4ec9e7c66!2sGloryPlus%20International%20ministries!5e0!3m2!1sen!2sng!4v1572478450602!5m2!1sen!2sng"
            frameBorder={0}
            style={stlyes}
            allowFullScreen={true}
            title="glory-plus-map"
          ></iframe>
        </div>

        <section className="footer-top-contact-section spad">
          <div className="container">
            <div className="row">
              <div className="col-md-6 footer-top-content">
                <div className="section-title title-left"></div>
                <h3>Lagos, Nigeria</h3>
                <p>
                  18 kudirat Abiola way, Oregun, ikeja, Lagos, 100001 Lagos,
                  Nigeria
                </p>
                <p>
                  <span>Email:</span> info@gloryplusinternational.com
                </p>
                <h4>Phone:</h4>
                <h5>+234 (812) 911–9588</h5>
              </div>
              <div className="col-md-6">
                <div className="section-title title-left"></div>
                <form className="contact-form" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={this.state.name}
                        onChange={this.handleName}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="email"
                        placeholder="Email address"
                        value={this.state.email}
                        onChange={this.handleEmail}
                      />
                    </div>
                    <div className="col-sm-12">
                      <textarea
                        placeholder="Your Messege"
                        value={this.state.message}
                        onChange={this.handleMessage}
                      ></textarea>
                      <button type="submit" className="site-btn">
                        Send message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contactus;

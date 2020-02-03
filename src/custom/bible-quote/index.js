import React from "react";
// import { css } from "@emotion/core";
// import { FadeLoader } from "react-spinners";
import axios from "axios";

const quoteAPI = "https://beta.ourmanna.com/api/v1/get/?format=text";
// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;
class BibleQuote extends React.Component {
  state = {
    bibleQuote: [],
    loading: false
  };
  UNSAFE_componentWillMount() {
    this.setState({ loading: true }, () => {
      axios.get(quoteAPI).then(res =>
        this.setState({
          loading: false,
          bibleQuote: res
        })
      );
    });
  }

  render() {
    // const { verse } = this.props;
    const { bibleQuote, loading } = this.state;
    return (
      <section className="event-list-section ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-title title-left">
                <span>Experience God's Presence</span>
                <h2>Daily Quote</h2>
              </div>
            </div>
          </div>

          {loading ? (
            <div style={{ minHeight: "25vh" }}>
              <div className="col-md-4"></div>
              <div
                className="col-md-4"
                style={{
                  marginTop: "35px",
                  marginBottom: "20px"
                }}
              >
                {" "}
                <i className="fas fa-spinner fa-pulse"></i>
              </div>
              <div className="col-md-4"></div>
            </div>
          ) : (
            <div className="event-list ">
              <blockquote className="quoted">
                <p className="text-info" id="newQuote">
                  {bibleQuote.data}
                </p>
              </blockquote>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default BibleQuote;

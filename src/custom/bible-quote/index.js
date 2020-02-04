import React from "react";
// import { css } from "@emotion/core";
// import { FadeLoader } from "react-spinners";
import TextTruncate from "react-text-truncate";
import axios from "axios";
import Modal from "./modal";
import { Link } from "react-router-dom";
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
  componentDidMount() {
    this.setState({ loading: true }, () => {
      axios
        .get(quoteAPI)
        .then(res =>
          this.setState({
            loading: false,
            bibleQuote: res
          })
        )
        .catch(err => console.log(err));
    });

    function truncateString(str, num) {
      if (str.length <= num) {
        return str;
      }
      return str.slice(0, num) + "...";
    }
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
                <TextTruncate
                  line={1}
                  element="span"
                  truncateText="…"
                  text={bibleQuote.data}
                  textTruncateChild={
                    <a href="!#" data-toggle="modal" data-target="#myModal-2">
                      read more
                    </a>
                  }
                />
              </blockquote>
              <Modal quote={bibleQuote.data} />
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default BibleQuote;

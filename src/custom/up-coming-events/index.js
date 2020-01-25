import React from "react";
// import EventItem from "../event-item";
import $ from "jquery";
class UpcomingEvent extends React.Component {
  componentWillMount() {
    (function() {
      $(document).ready(function() {
        getVerse();
      });

      var getVerse = function() {
        $("#spinner").show();
        $.ajax({
          url: "https://labs.bible.org/api/?passage=random&type=json",
          crossDomain: true,
          dataType: "jsonp",
          success: function(result) {
            $("#newQuote").html(
              "<strong>" +
                result[0].bookname +
                " " +
                result[0].chapter +
                ":" +
                result[0].verse +
                "</strong> " +
                result[0].text
            );
            $("#spinner").hide();
          }
        });
      };
    })();
  }

  render() {
    // const { verse } = this.props;
    return (
      <section className="event-list-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section-title title-left">
                <span>Experience God's Presence</span>
                <h2>Daily Quote</h2>
              </div>
            </div>
            {/* <div className="col-md-6 text-right event-more">
              <a href="/" className="site-btn">
                view all events
              </a>
            </div> */}
          </div>
          <div className="event-list">
            {" "}
            <blockquote className="quoted">
              <p className="text-info" id="newQuote">
                {/* {console.log({ verse })} */}
              </p>
            </blockquote>{" "}
          </div>
        </div>
      </section>
    );
  }
}

export default UpcomingEvent;

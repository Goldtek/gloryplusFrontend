import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  Header,
  TopNav,
  Footer,
  PageInfo,
  NewsLetter,
  GiveItem,
  GiveModal
} from "../../custom";
class DonateComponent extends Component {
  state = {
    name: '',
  }
  setProperty = (giveDetails) => {
    this.setState({ name: giveDetails.name, id: giveDetails.id });
  }
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Give - Glory Plus International</title>
          <meta name="description" content="give" />
        </Helmet>
        <TopNav />
        <Header />
        <PageInfo
          title="Give to the gospel"
          bgPicture="url(img/bg-info/give.png)"
        />
        {/* <DonateItem /> */}
        <div className="container my-30">
          <div className="row">
            <GiveModal title={this.state.name} />
            <GiveItem 
            setProperty={this.setProperty}
            title="Tithe"
            content="Thus saith the LORD of hosts; My cities through prosperity shall yet be spread abroad; and the LORD shall yet comfort Zion,
            and shall yet choose Jerusalem."
            image="img/tithe.jpg"
            id={1}
            />
            <GiveItem 
            setProperty={this.setProperty}
            title="Partnership"
            content="Partnership with the Man of God Reverend Dubus Achufusi means that you prayerfully and
             financially support one of our partnership arms so as to take the gospel to the ends of the earth."
            image="img/event/inagauration.jpg"
            id={1}
            />
            <GiveItem 
            setProperty={this.setProperty}
            title="Seed Offering"
            image="img/seed.jpg"
            content="Give God something to work with. No matter how little you think you have, sow it in joy and faith, 
            knowing in your heart that you are sowing seed so you may reap miracles. "
            id={2}
             />
             <GiveItem 
            setProperty={this.setProperty}
            title="Holy Ghost Morning"
            image="img/event/hgm.jpg"
            content="Sponsor the Holy Ghost morning programme with Rev Dubus Achufusi 
            through which God uses to reach out to millions of lives spreading the knowledge of the glory of God."
            id={2}
             />
            <GiveItem 
            setProperty={this.setProperty}
            title="Port-Harcourt Missions"
            content="We are taking the Knowledge of the glory of God to the people of Port-Harcourt to experience the true power
             of the gospel. Join this chariot and sponsor the Port-Harcourt mission"
            image="img/event/workers.jpg"
            id={3}
            />
            <GiveItem 
            setProperty={this.setProperty}
            title="Aba missions"
            content="We are taking the Knowledge of the glory of God to the people of Aba to experience the true power
            of the gospel. Join this chariot and sponsor the Aba mission"
            image="img/event/church.jpg"
            id={4}
            />
          </div>
        </div>

        <NewsLetter />
        <Footer />
      </Fragment>
    );
  }
}

export default DonateComponent;

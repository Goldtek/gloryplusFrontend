import React, { useState, Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { Link } from "react-router-dom";
import Card from "./card"
import GiveModal from '../giveModal';
class DonateItem extends Component{
    state = { show: false };
    
     handleClose = () => {
         this.setState({ show: false });
     }
     handleShow = () => {
         console.log(window.$("#giveComponent").modal('show'));
        window.$("#giveComponent").modal("show");
    }
     
    render() {
        const { show } = this.state;
return (
<section className="about-section spad">
<div className="container-fluid cards-row give">
<div className="container">
<div className="ronw">
<Card
    desc={`Your generosity enables Rev. Dubus Achufusi to  effectively minister the gospel to every nation through every available voice. 
    Giving to GPI supports prayer ministry, outreach  and evangelical programs around the globe`}
    title="Offering"
    btnText={`GIVE YOUR OFFERING`}
    click={this.handleShow}
/>
<Card title="Tithe" desc="God remains faithful to His word, creating opportunities for us to set our faith to work. We are interested in maintaining the principle of returning to God the tenth of your income. This way, we keep God’s storehouse filled and our own lives preserved from loss."
    btnText={`GIVE YOUR TITHE`} click={this.handleShow}
/>
<Card title="First Fruit" desc="Give your First Fruit and connect with the Blessing of Increase today. Take hold of God’s Word as you sow and believe for a great harvest."
    btnText={`GIVE YOUR FIRST FRUIT`} click={this.handleShow}
/>

<Card title="Partnership" desc="Your partnership with GloryPlus International, is your bridge to connecting with the work of God to enable you experience divine acceleration - Rev Dubus Achufusi."
    btnText={`GIVE YOUR PARTNERSHIP`} click={this.handleShow}
/>
  <GiveModal/>
</div>
</div>
</div>
</section>
);
};
}

export default DonateItem;

import React, { Component } from "react";
import moment from "moment";
import { Helmet } from "react-helmet";

import { calculateStateFromProps } from '../../lib/util'
class BottomNav extends Component {
  state = {
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
    dateTo:  new Date( moment().day(7)._d).getTime(),
  };

  
  componentDidMount(){
    this.setState(calculateStateFromProps({ dateTo: this.state.dateTo }), ()=>{
        if(this.state.diff > 0){
            var tickId = setInterval(this.tick,1000);
            this.setState({tickId:tickId});
        }
    });
  }

  static getDerivedStateFromProps(props, state){
      let newState = calculateStateFromProps({ dateTo: state.dateTo });
      return newState
  }

  UNSAFE_componentWillMount(){
      clearInterval(this.state.tickId)
  }

  animateAndChangeIfNeeded = (unit,prevUnit) => {
    let {speed, significance} = this.state;

    if(significance.indexOf(unit) !== -1){
        let unitSpan = document.getElementsByClassName(unit)[0];
        let digits = unitSpan.children;
        for(let i = 0; i < digits.length; i++){

            if(i === digits.length-1){
                setTimeout(()=>{
                    digits[i].classList.toggle('odometerEnd');
                    setTimeout(()=> {
                        digits[i].classList.toggle('odometerEnd')
                        digits[i].classList.toggle('odometerStart')
                        if(prevUnit!=='none'){
                            let newState = {};
                            newState[prevUnit]=59;
                            newState[unit]=this.state[unit]-1;
                            this.setState(newState);
                        }
                        setTimeout(()=>digits[i].classList.toggle('odometerStart'),speed);

                    },speed);
                },1000-speed)
            }else{
                let allZeros = true;
                for(let j = i+1; j < digits.length; j++){
                    if(digits[j].innerHTML === '0'){
                        allZeros = true;
                    }else{
                        allZeros = false;
                        break;
                    }
                }
                if(allZeros){
                    setTimeout(()=>{
                        digits[i].classList.toggle('odometerEnd');
                        setTimeout(()=> {
                            digits[i].classList.toggle('odometerEnd')
                            digits[i].classList.toggle('odometerStart')
                            if(prevUnit!=='none'){
                                let newState = {};
                                newState[prevUnit]=59;
                                newState[unit]=this.state[unit]-1;
                                this.setState(newState);
                            }
                            setTimeout(()=>digits[i].classList.toggle('odometerStart'),speed);
                        },speed);
                    },1000-speed)
                }
            }

        }
    }
}

  tick = () => {
    this.setState({sec:this.state.sec-1})
    this.animateAndChangeIfNeeded('sec','none')

    if(this.state.sec === 0){
        this.animateAndChangeIfNeeded('min','sec');

        if(this.state.min === 0){
            this.animateAndChangeIfNeeded('hour','min');

            if(this.state.hour === 0){
                this.animateAndChangeIfNeeded('day','hour');

                if(this.state.day === 0){
                    this.animateAndChangeIfNeeded('month','day');

                    if(this.state.month === 0){
                        this.animateAndChangeIfNeeded('year','month');
                    }
                }
            }
        }
    }

    if(this.state.sec === 0 && this.state.min === 0 && this.state.hour === 0 && this.state.day === 0 && this.state.month === 0 && this.state.year === 0){
        this.setState({diff:-1})
        clearInterval(this.state.tickId);
        this.props.callback();
    }
  }


  render() {
    return (
      <section className="event-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-6">
              <div className="event-info">
                <div className="event-date">
                  <h2>10</h2>
                  November
                </div>
                <h3>Fellowship with us</h3>
                <p>
                  <i className="fa fa-calendar"></i> 8:00 Am
                  <i className="fa fa-map-marker"></i> 18 kudirat Abiola way,
                  Olusosun, Ikeja, Lagos
                </p>
              </div>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="counter">
                <div className="counter-item">
                  <h4>09</h4>Days
                </div>
                <div className="counter-item">
                  <h4>08</h4>hours
                </div>
                <div className="counter-item">
                  <h4>40</h4>Mins
                </div>
                <div className="counter-item">
                  <h4>56</h4>secs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BottomNav;

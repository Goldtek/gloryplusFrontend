import React, { Component } from 'react';
import Select from 'react-select';
import { errorMessage } from '../../actions';
import { Give } from '../../lib/util';
import './styles.css';


class GiveModal extends Component { 

    state = {
       amount: '',
       name: '',
       phone: '',
       title:'',
        email: '',
        errorMessage: '',
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value, error: "" });
    };

    handleSubmit = () => {
        const { amount, name, phone, email,title } = this.state;
        if(name == '' || name == undefined || phone == '' || phone == undefined || amount == '' || amount == undefined || email == '' || email == undefined){
            this.setState({
                errorMessage: "All fields required!!!"
            });
           return;
        }
        this.setState({ errorMessage: "" });
        Give({phone, amount, email, name, title});
    }


    render() {
        const { title } = this.props;
    return(
            <div id="giveComponent" className="modal fade" role="dialog">
            <div className="modal-dialog modal-md modal-danger  modal-notify">
            {/* <!-- Modal content--> */}
            <div className="modal-content">
                <div className="modal-header" style={{ borderBottom: "none" }}>
                <button type="button" className="close" data-dismiss="modal" id="closeBtn">
                    &times;
                </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                    {this.state.errorMessage !== '' ? <label className="text-danger"> {this.state.errorMessage} </label> : null}
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form__wrapper  " data--delay="0.5s">
                                {/* <Select isSearchable options={options} name="type" /> */}
                                <label className="form-label">{title}</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                        <div className="form__wrapper" data--delay="0.5s">
                            <input
                            type="text"
                            required
                            name="name"
                            className="form__input"
                            id="name"
                            onChange={this.handleChange}
                            />
                            <label className="form__label" htmlFor="email">
                            <span className="form__label-content">YOUR NAME</span>
                            </label>
                        </div>

                        <div className="form__wrapper" data--delay="0.5s">
                            <input
                            type="email"
                            className="form__input"
                            id="email"
                            name="email"
                            required
                            onChange={this.handleChange}
                            />
                            <label className="form__label" htmlFor="email">
                            <span className="form__label-content">YOUR EMAIL</span>
                            </label>
                        </div>

                        <div className="form__wrapper  " data--delay="0.5s">
                            <input
                            type="text"
                            className="form__input"
                            id="phone"
                            name="phone"
                            onChange={this.handleChange}
                            />
                            <label className="form__label" htmlFor="email">
                            <span className="form__label-content">
                                YOUR PHONE NUMBER
                            </span>
                            </label>
                        </div>

                        <div className="form__wrapper  " data--delay="0.5s">
                            <input
                            type="text"
                            className="form__input"
                            id="amount"
                            name="amount"
                            onChange={this.handleChange}
                            />
                            <label className="form__label" htmlFor="email">
                            <span className="form__label-content">
                                AMOUNT
                            </span>
                            </label>
                        </div>
                    </div>

                    <div className="col-xs-6">
                    {" "}
                    <div
                        className="form__wrapper--submit  fadeInLeft"
                        data--delay="0.7s"
                    >
                        <div className="form__input-submit">
                        <button
                            type="submit"
                            className="btn btn-block btn-primary"
                          onClick={()=>this.handleSubmit()}
                        >
                            Submit{" "}
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </button>
                        </div>
                    </div>
                    </div>

                    <div className="col-xs-6">
                    {" "}
                    <div
                        className="form__wrapper--submit  fadeInLeft"
                        data--delay="0.7s"
                    >
                        <div className="form__input-submit">
                        <button
                            className="btn btn-block btn-info"
                            type="button"
                            data-dismiss="modal"
                        >
                            Cancel{" "}
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default GiveModal;

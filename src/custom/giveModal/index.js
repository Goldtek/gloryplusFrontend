import React, { Component } from 'react';
import Select from 'react-select';

class GiveModal extends Component { 

    state = {
        options: [{value: "", label: 'Select'}, {value: "1", label: 'Offering'},
                    {value: "2", label: 'Tithe'}, {value: "3", label: 'First Fruit'},
                    {value: "4", label: 'Patnership'}],
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value, error: "" });
    };


    render() {
        const { options } = this.state;
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
                        <div className="col-md-12">
                            <div className="form__wrapper  " data--delay="0.5s">
                                <Select isSearchable options={options} name="type" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                        <div className="form__wrapper  " data--delay="0.5s">
                            <input
                            type="text"
                            required
                            name="name"
                            className="form__input"
                            id="name"
                        
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
                            id="phone"
                            name="amount"
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

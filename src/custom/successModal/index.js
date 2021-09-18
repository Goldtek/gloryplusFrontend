import React, { forwardRef, useImperativeHandle } from "react";
import $ from 'jquery';

import "./styles.css";


const Success = forwardRef((props, ref) => {

    useImperativeHandle(
        ref,
        () => ({
           open() {
                $("#trigger-btn").click();
            }
        }),
    )

    return (
        <>
            <a href="#myModal" id="trigger-btn" data-toggle="modal">Click to Open Confirm Modal</a>
            <div id="myModal" class="modal fade">
                <div class="modal-dialog modal-confirm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="icon-box">
                                <i class="material-icons">&#xE876;</i>
                            </div>				
                            <h4 class="modal-title">Awesome!</h4>	
                        </div>
                        <div class="modal-body">
                            <p class="text-center">Your booking has been confirmed. Check your email for detials.</p>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-success btn-block" data-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );

})

export default Success;
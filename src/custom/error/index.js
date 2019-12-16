import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default Error = ({ title, message }) => (
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{message}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Ok</Button>
                </Modal.Footer>
            </Modal.Dialog>
        );
/* import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Button, Modal, ModalHeader, ModalBody, Label, Col } from 'reactstrap';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

export class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCFModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggleModal() {
        this.setState({
            isCFModalOpen: !this.state.isCFModalOpen
        });
    }

    handleComment(event) {
        this.toggleModal();
    }

    handleSubmit(values) {
        alert("Current State is: " + JSON.stringify(values));
        console.log("Current State is:" + JSON.stringify(values));
    }
    
    render() { 
        return (
            <>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg" /> Comment
                </Button>

                <div className="row">
                    <Modal isOpen={this.state.isCFModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={2}> Rating </Label>
                                    <Col md={10}>
                                        <Control.select model=".rating" id="rating" name="rating"
                                            className="form-control"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="fullname" md={2}> Your Name</Label>
                                    <Col md={10}>
                                        <Control.text  model=".firstname" id="firstname" name="firstname" placeholder="First Name"
                                            className="form-control"
                                            validators={{ minLength: minLength(3), maxLength: maxLength(15)}}
                                        /> 
                                        <Errors 
                                            className="text-danger"
                                            model=".firstname"
                                            show="touched"
                                            messages={{
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col> 
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comment" md={2}> Comment </Label>
                                    <Col md={10}>
                                        <Control.textarea model=".comment" id="comment" name="comment"
                                            className="form-control"
                                            row="6" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                        <Col md={{size:10, offset:2}}>
                                            <Button type="submit" color="primary">Submit</Button>
                                        </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            </>
        )
    }
} 


*/
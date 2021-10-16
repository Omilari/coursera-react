
import { Card, CardBody, CardText, CardTitle, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Button, Modal, ModalHeader, ModalBody, Label, Col } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
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
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    
    render() { 
        return (
            <>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg" /> Submit Comment
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
                                    <Label htmlFor="author" md={2}> Your Name</Label>
                                    <Col md={10}>
                                        <Control.text  model=".author" id="author" name="author" placeholder="Your Name"
                                            className="form-control"
                                            validators={{ minLength: minLength(3), maxLength: maxLength(15)}}
                                        /> 
                                        <Errors 
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            messages={{
                                                minLength: 'Must be greater than 3 characters',
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
                                            row="6"
                                            validators={{ required }} />
                                        <Errors
                                            className="text-danger"
                                            model=".comment"
                                            show="touched"
                                            messages={{
                                                required: 'You need to write a comment.'
                                            }}
                                        />
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

function RenderComments({comments, addComment, dishId}){
    

    if (comments == null){
        return (
            <div></div>
        )
    } 

    const commentss = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}</p>
                <p>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </li>

        )
    });

    return (
        <>
        <div className="col-12 col-md-5 m-1">
            <h4> Comments </h4>
            <ul className="list-unstyled">
                {commentss}
            </ul>
            <CommentForm comments={comments}  dishId={dishId} addComment={addComment} />
        </div>
       </>
    );


}




function RenderDish({dish}) {
    if (dish != null) 
        return( 
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    else
        return (
            <div></div>
        );
}

const DishDetail = (props) => {
        console.log('dish detail component render')
        
        const dish = props.dish
        
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            )
        }
        else if (props.dish != null)
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row" >
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments}
                            addComment={props.addComment}
                            dishId={props.dish.id} />
                    </div>
                </div>
            )

        /* if(dish == null){
            return(
                <div></div>
            )
        }  */
}


export default DishDetail;

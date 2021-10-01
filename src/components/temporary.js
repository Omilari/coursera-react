/* 


class commentForm extends Component {
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
                                    <Control.textarea  model=".fullname" id="fullname" name="fullname" placeholder="Your Name"
                                        className="form-control"

                                        validators={{ minLength: minLength(2), maxLength: maxLength(15)}}
                                    />
                                    <Errors 
                                        className="text-danger"
                                        model=".fullname"
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
        )
    }
} 


*/
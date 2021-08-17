import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';



class DishDetail extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selectedDishDetail: this.props
        }
    }

    renderComments(comments){
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
                </li>
            )
        });

        return (
            <div className="col-12 col-md-5 m-1">
                <h4> Comments </h4>
                <ul className="list-unstyled">
                    {commentss}
                </ul>
            </div>
        );

    
    }


    renderDish(dish) {
        if (dish != null) 
            return( 
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg src={dish.image} alt={dish.name} />
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
   
   
    render() { 
        const dish = this.props.dish
        
        if(dish == null){
            return(
                <div></div>
            )
        }

        const dishInfo = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);

        return (
            <div className="row" >
                {dishInfo}
                {dishComment}
            </div>
        )

    }

}

export default DishDetail;

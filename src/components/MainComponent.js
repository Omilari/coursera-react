import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import About from './AboutComponent';
import { connect } from 'react-redux';



const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


class Main extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    const HomePage = () => {
        return (
            <Home dish={this.props.dishes.filter((dish) => dish.featured)[0] } 
            promotion={this.props.promotions.filter((promo) => promo.featured)[0] }
            leader={this.props.leaders.filter((leader) => leader.featured)[0] }
            />
        );
    }

    const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]} 
                comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
            />
        );
    }
    
    return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />}  /> {/*if you are navigating to just a component that doesn't need props you can simply write the component name
            other wise you have to pass it in as a function component as seen above*/}
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
            <Route exact path="/contactus" component={Contact} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }

}


export default withRouter(connect(mapStateToProps)(Main));  //rapping Main inside "connect" allows it to use the store
//in order to make this work with the router you need to add 'withRouter'
import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';




class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }
  
  render() {
    const HomePage = () => {
        return (
            <Home />
        );
    }
    
    return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}  /> {/*if you are navigating to just a component that doesn't need props you can simply write the component name
            other wise you have to pass it in as a function component as seen above*/}
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }

}


export default Main;

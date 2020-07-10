import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Add from './Add';
import Listing from './Listing';
import Edit from './Edit';

export default  class  Index extends Component {
    
    render(){
        return (
            <div>
               <Router>
                    <div>
                         <hr/>
                          <Link to="/product" className="btn btn-primary"> Listing </Link>&nbsp;&nbsp;
                          <Link to="/product/Add" className="btn btn-primary"> Add </Link>
                          <Route exact path="/product" component={Listing}></Route> 
                          <Route exact path="/product/Add" component={Add}></Route> 
                          <Route exact path="/product/edit/:id" component={Edit}></Route> 
                    </div>
               </Router>
            </div>
        );
    }

}


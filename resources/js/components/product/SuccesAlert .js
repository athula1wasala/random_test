import React, { Component } from 'react';

export default  class  SuccesAlert extends Component {
    
    render(){
        return (
                    <div className="alert alert-success" role="alert">
                        {this.props.message}
                    </div>
               
        );
    }

}


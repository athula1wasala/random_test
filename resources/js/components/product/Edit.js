import React, { Component } from 'react';
import axios from 'axios';
import SuccesAlert from './SuccesAlert '
import ErrorAlert from './ErrorAlert';

export default  class  Edit extends Component {
    
    constructor(props){

        super(props);
        this.url = 'http://127.0.0.1:8000/api/product'
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeSku = this.onChangeSku.bind(this);
        this.onChangeInventory = this.onChangeInventory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state= {
            name:'',
            sku:'',
            description:'',
            inventory:'',
            alert_msg : ''
       }  
     }

     componentDidMount(){

        axios.get(this.url + "/edit/" + this.props.match.params.id)
        .then(response=>{
          
            this.setState(
                {name:response.data.name,
                 sku:response.data.sku,
                 description:response.data.description,
                 inventory:response.data.inventory  
                 
                });
        })
        .catch((error) => {
                   
        })
     }

     onChangeProductName(e){
        this.setState({
            name:e.target.value
        })
    }

    onChangeSku(e){
        this.setState({
            sku:e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description:e.target.value
        })
    }

    onChangeInventory(e){
        this.setState({
            inventory:e.target.value
        })
        
    }

     onSubmit(e){
         e.preventDefault();
        const product ={
            name:this.state.name,
            sku:this.state.sku,
            description:this.state.description,
            inventory:this.state.inventory

        };


        axios.put(this.url + "/update/" + this.props.match.params.id, product)
        .then(res=> {
            
              this.setState({alert_msg:'success'})
             })
             .catch((error) => {
               
                this.setState({alert_msg:'error'}) 
            })    
              
            
        
     }
    
    render(){
        return (
            <div>
               <hr/>
               {this.state.alert_msg =="success" ? <SuccesAlert   message ={'Record Saved successfully.'}/>: null}
               {this.state.alert_msg =="error" ? <ErrorAlert message={'Error Occured.'}/>: null}
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                   <label htmlFor="exampleInputEmail1">Product Name</label>
                   <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    value={this.state.name}
                    onChange={this.onChangeProductName}
                    aria-describedby="emailHelp" 
                    placeholder="Enter Product"/>
                   </div>

                   <div className="form-group">
                   <label htmlFor="exampleInputEmail1">Sku</label>
                   <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    value={this.state.sku}
                    onChange={this.onChangeSku}
                    aria-describedby="emailHelp" 
                    placeholder="Enter Sku"/>
                   </div>

                   <div className="form-group">
                   <label htmlFor="exampleInputEmail1">Description</label>
                   <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    aria-describedby="emailHelp" 
                    placeholder="Enter Description"/>
                   </div>

                   <div className="form-group">
                   <label htmlFor="exampleInputEmail1">Inventory</label>
                   <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    value={this.state.inventory}
                    onChange={this.onChangeInventory}
                    aria-describedby="emailHelp" 
                    placeholder="Enter Inventory"/>
                   </div>

                   <div className="form-group">
                       <button type="submit" className="btn btn-primary">Submit</button>
                   </div>
               </form>
            </div>
        );
    }

}
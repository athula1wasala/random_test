import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pagination from "react-js-pagination";
import { data } from 'jquery';

export default  class  Listing extends Component {
    
     constructor(){

        super();
        this.url = 'http://127.0.0.1:8000/api/product'
        this.onDelete = this.onDelete.bind(this);
        this.state= {
             product:[],
             activePage:1,
             itemsCountPerPage:1,
             totalItemsCount:1,
             pageRangeDisplayed : 3
        }
        this.handlePageChange = this.handlePageChange.bind(this);
        
     }

     handlePageChange(pageNumber) {
        
        console.log(`active page is ${pageNumber}`);
        this.refreshList(pageNumber);
      }
     

     componentDidMount(){

        this.refreshList();
     }

     refreshList(pageNumber =1){

        axios.get(this.url + '?page=' + pageNumber)
        .then(response=>{
          
            this.setState(
                {   product:response.data.data,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount:response.data.total,
                    activePage : response.data.current_page

            });
        })
        .catch((error) => {
        
        });
           

      }

     onDelete(productId){
          
        axios.delete( this.url + '/delete/' + productId)
        .then(response=>{
            this.refreshList();
        });
     }

    render(){
        return (
            <div>
               <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Sku</th>
                    <th scope="col">Description </th>
                    <th scope="col">Create At </th>
                    <th scope="col" >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.product.map(prod=> {
                            return (
                              <tr>
                              <th scope="col">{prod.id}</th>  
                              <th scope="col">{prod.name}</th> 
                              <th scope="col">{prod.description}</th> 
                              <th scope="col">{prod.inventory}</th> 
                              <th scope="col">{prod.updated_at}</th> 
                              <th scope="col">
                                  <Link to={ `/product/edit/${prod.id}` } >Edit </Link>&nbsp;
                                  <a href="#" onClick={this.onDelete.bind(this,prod.id)  }>Delete</a></th>
                             </tr>
                             )
                     })}
                   
                </tbody>
                </table>
                <div>
                <div class="d-flex justify-content-center">       
                <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.itemsCountPerPage}
                totalItemsCount={this.state.totalItemsCount}
                pageRangeDisplayed={this.state.pageRangeDisplayed}
                itemClass='page-item'
                linkClass='page-link'
                onChange={this.handlePageChange.bind(this)}
               />
              </div>
               </div>
              </div>
        );
    }

}


<?php

namespace App\Repositories;

use DB;
use App\Model\Product;
use Illuminate\Support\Facades\Config;

class ProductRepository {

    /**save product data
     * @param $data
     */
   public  function  addProduct($data){

       $objProduct = new Product();
       $objProduct->name = $data->name;
       $objProduct->sku = $data->sku;
       $objProduct->description = $data->description;
       $objProduct->inventory = $data->inventory;
       $objProduct->save();
   }

    /**
     * uodate product data
     * @param $data
     * @param $id
     */
   public  function updateProduct($data,$id){

       $objProduct = Product::find($id);
       $objProduct->name = $data->name;
       $objProduct->sku = $data->sku;
       $objProduct->description = $data->description;
       $objProduct->inventory = $data->inventory;
       $objProduct->save();

   }

    /**getAll Product
     * @return mixed
     */
   public function  getAllProduct(){

       $result = Product::paginate(5);
       return  $result;
   }

    /**retive product according the id
     * @param $id
     * @return mixed
     */
   public function getProduct($id){

       $objProduct = Product::find($id);
       return  $objProduct;
   }

    /**delete product
     * @param $id
     * @return bool
     */
   public function  deleteProduct($id){

       $objProduct = Product::find($id);
       $objProduct->delete();
       return true;
   }
}

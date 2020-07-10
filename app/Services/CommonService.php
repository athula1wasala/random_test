<?php

namespace App\Services;

use App\Repositories\ProductRepository;


class CommonService
{

    private $productRepository;

    /**
     * CommonService constructor.
     * @param ProductRepository $productRepository
     */
    public function __construct(ProductRepository $productRepository) {

        $this->productRepository = $productRepository;
    }

    public function createProduct($data) {

        return $this->productRepository->addProduct($data);

    }

    public function updateeProduct($data,$id) {

        return  $this->productRepository->updateProduct($data,$id);

    }

    public  function  deleteProduct($id){
        return $this->productRepository->deleteProduct($id);

    }

    public function retriveProduct($id) {

        return $this->productRepository->getProduct($id);

    }

    public function AllProduct() {

        return $this->productRepository->getAllProduct();

    }



}


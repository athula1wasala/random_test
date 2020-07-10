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

    public function createProduct($data {

        $data = $this->productRepository->addProduct($data);
        return $data;
    }


}


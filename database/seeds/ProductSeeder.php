<?php

use Illuminate\Database\Seeder;
use App\Model\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $objProduct = new Product();
        $objProduct->name = 'keyBoard';
        $objProduct->sku = 'scp-1';
        $objProduct->description = '???';
        $objProduct->inventory = '001';
        $objProduct->save();

        $objProduct = new Product();
        $objProduct->name = 'mouse';
        $objProduct->sku = 'kcp-1';
        $objProduct->description = '???';
        $objProduct->inventory = '003';
        $objProduct->save();

        $objProduct = new Product();
        $objProduct->name = 'pen drive';
        $objProduct->sku = 'ccp-1';
        $objProduct->description = '???';
        $objProduct->inventory = '002';
        $objProduct->save();
    }
}

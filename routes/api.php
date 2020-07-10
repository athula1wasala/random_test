<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'product'], function() {
    Route::get("","Api\ProductController@index");
    Route::post("/store","Api\ProductController@store");
    Route::delete('/delete/{id}', 'Api\ProductController@destroy');
    Route::get('/edit/{id}', 'Api\ProductController@edit');
    Route::put("/update/{id}","Api\ProductController@update");
});


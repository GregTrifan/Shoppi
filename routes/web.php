<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpaController;
use App\Http\Controllers\ProductController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::fallback([SpaController::class,'lost'])->name("lost");

/* Spa Controller*/
Route::group([
    "as"=>"spa."
],function () {

    Route::get('/', [SpaController::class,'index'])->name("index");
    Route::get('/product/{name}', [ProductController::class,'see'])->name("product")->where("name",'^\w+$');
    Route::get('/admin',[SpaController::class,'index'])->name("admin");
}
);
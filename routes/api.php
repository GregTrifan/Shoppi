<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\LoginController;
use App\Models\Product;

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

Route::post('/login',LoginController::class)->name("login");
Route::post('/register',[RegisterController::class,'register'])->name("register");
Route::middleware('auth:sanctum')->get('/account',function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->post('/logout',[RegisterController::class,'logout'])->name("logout");


Route::group([
    "prefix"=>"/products",
    "as"=>"products"
], function() {
    Route::get('/',[ProductController::class,'index'])->name("list");
    Route::get("/show/{name}",[ProductController::class,'show'])
            ->name("show")->where("name",'^\w+$');
    Route::post("/add",[ProductController::class,"create"])->name("add");
    Route::get('/top10',[ProductController::class,"tops"])->name("top");
});
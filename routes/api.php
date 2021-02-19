<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
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

Route::middleware('auth')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login',LoginController::class)->name("login");
Route::post('/register',[RegisterController::class,'register'])->name("register");
Route::middleware('auth:sanctum')->get('/account',function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->post('/logout',[RegisterController::class,'logout'])->name("logout");
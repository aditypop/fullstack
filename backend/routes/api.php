<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrganizationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




Route::get('organizations', [OrganizationController::class,'index']);

Route::get('organization/{id}', [OrganizationController::class,'show']);

Route::post('organization',[OrganizationController::class,'store']);

Route::put('organization/{id}',[OrganizationController::class,'update']);

Route::delete('organization/{id}',[OrganizationController::class,'destroy']);


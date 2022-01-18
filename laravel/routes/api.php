<?php

use App\Http\Controllers\Api\V1\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Api\V1\Auth\AuthenticatedUserController;
use App\Http\Controllers\Api\V1\Auth\RegisteredUserController;
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

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::group([

    'as' => 'api.'

], function() {

    // Authentication

    Route::group([

        'prefix' => 'auth',
        'as' => 'auth.'

    ] ,function () {

        //User Register
        Route::post('register', [RegisteredUserController::class, 'store']);

        // //User log in (SANCTUM)
        // Route::post('login', [AuthenticatedSessionController::class, 'store']);
        //         //->middleware('guest');

        // //User log out (SANCTUM)
        // Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
        //         ->middleware('auth:sanctum')
        //         ->name('logout');



    });




    // Authenticated
    Route::group([

        //'middleware' => 'auth:sanctum', // for sanctum
        'middleware' => 'auth:api',

    ] ,function () {

        //User information
        Route::get('/user', [AuthenticatedUserController::class, 'index'])->name('user');

        Route::get('', function() {
            return 'test';
        });

    });

});


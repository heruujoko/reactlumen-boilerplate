<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->group(['prefix' => 'api'], function() use ($app){
  $app->post('/signin','AuthController@signin');
});

$app->get('/', function () use ($app) {
    return view('app');
});
$app->get('/{id}', function () use ($app) {
    return view('app');
});

<?php

namespace App\Http\Controllers;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    use AuthenticatesUsers;
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user();
            $Token=$user->createToken('authToken');
            $success['token'] =  $Token->plainTextToken; 
            $success['name'] =  $user->name;
            $success['status']='User login successfully.';
            $success['token_type']='Bearer';
            return response()->json($success);
        } 
        else{ 
            return response()->json(['status'=>'Unauthorised']);
        } 
    }
}

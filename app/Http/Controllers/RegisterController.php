<?php
   
namespace App\Http\Controllers;
use Validator;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

   
class RegisterController extends Controller
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
            
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
   
        $input = $request->all();
        $input['password'] = Hash::make($input['password']);
        $user = User::create($input);
        $Token=$user->createToken('authToken');
        $success['token'] = $Token->plainTextToken;
        $success['name'] =  $user->name;
        $success['status'] = 'User register successfully.';
        return response()->json($success);
    }
}
/*
    public function account(Request $request) {
        $user = $request->user();
        if ($user) {
            return response()->json(['status' => 'success', 'name' => $request->user()->name, 'email' => $request->user()->email]);
        }
        else {
            return response()->json(["status"=> "fail","name"=>"Guest"]);
        }
    }
    */
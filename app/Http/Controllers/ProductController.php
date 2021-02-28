<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $products=Product::select('name','description')->paginate(12);
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'description'=>'required'
        ]);
        if($validator->fails()){
            return response()->json(['err'=>$validator->errors()]);       
        }
        $input = $request->all();
        $product=Product::create($input);
        return response()->json(["status" => "Product stored successfully"]);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($name)
    {
        $query=Product::where("name","=",$name)->first();
        if ($query) {
            $query->view_count+=1;
            $query->save();
            return response()->json($query);
        }
        return response()->json("Not found",404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
    public function tops(Request $request) {
        $query=Product::orderBy('view_count','DESC')->take(5)->get(['name','view_count']);
        return response()->json($query);
    }
}

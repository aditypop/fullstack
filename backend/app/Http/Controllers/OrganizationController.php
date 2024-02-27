<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Http\Request;
use App\Http\Resources\OrganizationResource;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */


    /**
     * Store a newly created resource in storage.
     */
    public function index()
    {
        return Organization::all();
    }

    public function show($id)
    {
        return Organization::findOrFail($id);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
        ]);

        $organization = Organization::create($request->all());
        return new OrganizationResource($organization);
    }

    public function update(Request $request, $id)
    {
        $organization = Organization::findOrFail($id);
        $organization->update($request->all());
        return new OrganizationResource($organization);
    }

    public function destroy($id)
    {
        $organization = Organization::findOrFail($id);
        $organization->delete();
        return response()->json(null, 204);
    }
}

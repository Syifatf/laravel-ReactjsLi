<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Employee;

class EmployeeController extends Controller
{
    
    public function list_role(){
      
        $data = Role::get();

        $response['data'] = $data;
        $response['succes'] = true;
        return $response;
    }

    public function create(Request $request) {
        try {
            
            $insert['nama_depan'] = $request['nama_depan'];
            $insert['nama_belakang'] = $request['nama_belakang'];
            $insert['tanggal_lahir'] = $request['tanggal_lahir'];
            $insert['no_telephone'] = $request['no_telephone'];
            $insert['email'] = $request['email'];
            $insert['provinsi'] = $request['provinsi'];
            $insert['city'] = $request['city'];
            $insert['alamat'] = $request['alamat'];
            $insert['no_ktp'] = $request['no_ktp'];
            $insert['rekening_bank'] = $request['rekening_bank'];
            $insert['posisi_saat_ini'] = $request['posisi_saat_ini'];
            $insert['no_rekBank'] = $request['no_rekBank'];
            $insert['rol'] = $request['rol'];

            Employee::insert($insert);

            $response['message'] = "Save successful";
            $response['success'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }


    public function list() {
        try {
            
            // $data = Employee::with("role")->get();
            $data = Employee::get();


            $response['data'] = $data;
            $response['message'] = "Load succesful";
            $response['success'] = true;

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    public function get($id) {
        try {
            // $data = Employee::with("role")->find($id);
            $data = Employee::find($id);

            if ($data) {
                $response['data'] = $data;
                $response['message'] = "Load successful";
                $response['success'] = true;
            } else {
                $response['data'] = null;
                $response['message'] = "Not found data id => $id";
                $response['success'] = false;
            }

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    public function update(Request $request, $id) {

        try {

            $data['nama_depan'] = $request['nama_depan'];
            $data['nama_belakang'] = $request['nama_belakang'];
            $data['tanggal_lahir'] = $request['tanggal_lahir'];
            $data['no_telephone'] = $request['no_telephone'];
            $data['email'] = $request['email'];
            $data['provinsi'] = $request['provinsi'];
            $data['city'] = $request['city'];
            $data['alamat'] = $request['alamat'];
            $data['no_ktp'] = $request['no_ktp'];
            $data['rekening_bank'] = $request['rekening_bank'];
            $data['posisi_saat_ini'] = $request['posisi_saat_ini'];
            $data['no_rekBank'] = $request['no_rekBank'];
            $data['rol'] = $request['rol'];        

            $res = Employee::where("id", $id)->update($data);

            $response['res'] = $res;
            $response['message'] = "Update successful";
            $response['succes'] = false;

        
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;        
        }
        return $response;
    }

    public function delete($id){

        try {
            
            $res = Employee::where("id",$id)->delete();
            $response['res'] = $res;
            $response['message'] = "Deleted successful";
            $response['success'] = true; 
        
        } catch (\Exception $e) {
        
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
  
        return $response;
      }
}
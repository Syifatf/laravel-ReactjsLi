<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $table = "employee";

    protected $fillable = [
        'nama_depan',
        'nama_belakang',
        'tanggal_lahir',
        'no_telephone',
        'email',
        'provinsi',
        'city',
        'alamat',
        'no_ktp',
        'rekening_bank',
        'posisi_saat_ini',
        'no_rekBank',
        'rol'
    ];

    public function role(){
        return $this->belongsTo("App\Models\Role","role");
    }
}

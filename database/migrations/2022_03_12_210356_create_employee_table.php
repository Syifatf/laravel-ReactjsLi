<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee', function (Blueprint $table) {
            $table->increments('id', true);
            $table->string('nama_depan');
            $table->string('nama_belakang');
            $table->string('tanggal_lahir');
            $table->bigInteger('no_telephone');
            $table->string('email');
            $table->string('provinsi');
            $table->string('city');
            $table->string('alamat');
            $table->bigInteger('no_ktp');
            $table->string('rekening_bank');
            $table->string('posisi_saat_ini');
            $table->bigInteger('no_rekBank');
            $table->unsignedBigInteger('rol')->unique();
            $table->foreign('rol')->references('rol_id')->on('role');

            $table->timestamps();

        });

        // Schema::table('employee', function ($table) {
        //     $table->foreign('rol')->references('rol_id')->on('role');
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee');
    }
};

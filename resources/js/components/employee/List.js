import React, { useEffect, useState } from 'react';
import employeeServices from "../../services/Employee";
import { Link } from "react-router-dom";

function List(){

  const [ listEmployee, setListEmployee ] = useState([]);

  useEffect(()=>{

    async function fetchDataEmployee(){
      const res = await employeeServices.listEmployee();
      console.log(res.data);
      setListEmployee(res.data)
    }

    fetchDataEmployee();

  },[])

  return (
    <section>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name Depan</th>
            <th scope="col">Nama Belakang</th>
            <th scope="col">Tanggal Lahir</th>
            <th scope="col">No Telp</th>
            <th scope="col">Email</th>
            <th scope="col">Provinsi</th>
            <th scope="col">City</th>
            <th scope="col">Alamat</th>
            <th scope="col">NIK</th>
            <th scope="col">Rek Bank</th>
            <th scope="col">Posisi Saat Ini</th>
            <th scope="col">No Rekening</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          {
            listEmployee.map((item) => {
              return (
                <tr>
                <th scope="row">{item.id}</th>
                <td>{item.nama_depan}</td>
                <td>{item.nama_belakang}</td>
                <td>{item.tanggal_lahir}</td>
                <td>{item.no_telephone}</td>
                <td>{item.email}</td>
                <td>{item.provinsi}</td>
                <td>{item.city}</td>
                <td>{item.alamat}</td>
                <td>{item.no_ktp}</td>
                <td>{item.rekening_bank}</td>
                <td>{item.posisi_saat_ini}</td>
                <td>{item.no_rekBank}</td>
                <td>{item.rol}</td>
                <td>
                <Link className="btn btn-outline-info" to={"/employee/edit/"+item.id}>Edit</Link>
                  <a href="#" className="btn btn-danger"> Delete </a>
                </td>
                </tr>
              )
            })
          }

            </tbody>
  
      </table>
    </section>
  )
}

export default List;

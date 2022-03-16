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

  },[]);


  const onclickDelete = async (i, id) => {
    var yes = confirm("Anda yakin ingin mengahpus ?");

    if (yes===true) {

      const res = await employeeServices.delete(id);

      if (res.succsess) {
        alert(res.message)
        const newList = listEmployee
        newList.splice(i,1);
        setListEmployee(newList);
      }


      
    }
  }

  return (
    <section>
    <script src="../css/app.css"></script>

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
            listEmployee.map((item,i) => {
              return (
                <tr>
                <th scope="row">{i}</th>
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
                  <a href="#" className="btn btn-danger" onClick={()=>onclickDelete(i,item.id)}> Delete </a>
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

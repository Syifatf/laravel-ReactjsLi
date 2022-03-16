import React, { useEffect, useState } from 'react';
import employee from '../../services/Employee';
import employeeServices from "../../services/Employee";


function Edit(props) {

  const [id, setId] = useState(null);
  const [nama_depan, setNama_depan] = useState(null);
  const [nama_belakang, setNama_belakang] = useState(null);
  const [tanggal_lahir, setTanggal_lahir] = useState(null);
  const [no_telephone, setNo_telephone] = useState(null);
  const [email, setEmail] = useState(null);
  const [provinsi, setProvinsi] = useState(null);
  const [city, setCity] = useState(null);
  const [alamat, setAlamat] = useState(null);
  const [no_ktp, setNo_ktp] = useState(null);
  const [rekening_bank, setRekening_bank] = useState(null);
  const [posisi_saat_ini, setPosisi_saat_ini] = useState(null);
  const [no_rekBank, setNo_rekBank] = useState(null);
  const [rol, setRol] = useState(null);

  const [listRol, setListRol] = useState([]);


  useEffect(() => {
    async function fetchDataEmployee() {

      let id = props.match.params.id;
      const res = await employeeServices.get(id);

      if (res.success) {
        console.log(res.data);

        const data = res.data
        setId(data.id)
        setNama_depan(data.nama_depan)
        setNama_belakang(data.nama_belakang)
        setTanggal_lahir(data.tanggal_lahir)
        setNo_telephone(data.no_telephone)
        setEmail(data.email)
        setProvinsi(data.provinsi)
        setCity(data.city)
        setAlamat(data.alamat)
        setNo_ktp(data.no_ktp)
        setRekening_bank(data.rekening_bank)
        setPosisi_saat_ini(data.posisi_saat_ini)
        setNo_rekBank(data.no_rekBank)
        setRol(data.rol)

      } else {
        alert(res.message)
      }
    }

    fetchDataEmployee();

    async function fetchDataRol() {
      //  load data from API
      const res = await employeeServices.listRole();
      setListRol(res.data)
    }

    fetchDataRol();
  }, []);



//  update

  const updateEmployee = async () => {

    const data = {
      nama_depan, nama_belakang, tanggal_lahir, no_telephone, email, provinsi, city,
      alamat, no_ktp, rekening_bank, posisi_saat_ini, no_rekBank, rol    
    }
    const res = await employeeServices.update(data);

    if (res.success) {
      alert(res.message)
      
    } else {
      alert(res.message)
    }
  }


  return (
    <div>
      <h4>Edit </h4>
      <hr />
      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="firstName">Name Depan</label>
          <input type="text" className="form-control" placeholder="Name" value={nama_depan} 
          onChange={(event) => setNama_depan(event.target.value)}
           />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="secondName">Name Belakang</label>
          <input type="text" className="form-control" placeholder="nama belakang" value={nama_belakang} 
          onChange={(event) => setNama_belakang(event.target.value)} 
          />

        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="tanggal_lahir">Tanggal Lahir </label>
          <input type="date" className="form-control" placeholder="DD/MM/YY" value={tanggal_lahir}
          onChange={(event) => setTanggal_lahir(event.target.value)} 
          />

        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="phone">No Telephon </label>
          <input type="text" className="form-control" placeholder="123467890" value={no_telephone} 
          onChange={(event) => setNo_telephone(event.target.value)} 
          />

        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="email">Email</label>
          <input type="email" className="form-control" placeholder="you@example.com" value={email} 
          onChange={(event) => setEmail(event.target.value)} 
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="provinsi">Provinsi</label>
          <input type="text" className="form-control" placeholder="provinsi anda" value={provinsi} 
          onChange={(event) => setProvinsi(event.target.value)} 
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="city">City </label>
          <select id="inputStateCity" className="form-control"
            onChange={(event) => setCity(event.target.value)} value={city} >
            <option selected>Choose ...</option>
            <option value="Kota Bekasi">Kota Bekasi</option>
            <option value="Kota Depok">Kota Depok</option>
            <option value="Kota Jogja">Kota Jogja</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="alamat">Alamat </label>
          <input type="text" className="form-control" placeholder="jl mangga" value={alamat} 
          onChange={(event) => setAlamat(event.target.value)} 
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="no_ktp">No KTP </label>
          <input type="text" className="form-control" placeholder="123467890" value={no_ktp}
          onChange={(event) => setNo_ktp(event.target.value)} 
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="Rekening_bank">Rekening Bank Anda </label>
          <select id="inputStateCity" className="form-control" value={rekening_bank}
            onChange={(event) => setRekening_bank(event.target.value)} >
            <option selected>Choose ...</option>
            <option value="Bank BNI">Bank BNI</option>
            <option value="Bank Mandiri">Bank Mandiri</option>
            <option value="Bank Syariah Mandiri">Bank Syariah Mandiri</option>
            <option value="Bank BCA">Bank BCA</option>
            <option value="lain-lain">Lain Lain</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="posisi_saat_ini">Posisi Saat Ini </label>
          <select id="inputStateCity" className="form-control"
            onChange={(event) => setPosisi_saat_ini(event.target.value)} >
            <option selected>Choose ...</option>
            <option value="Manager">Manager</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Staff">Staff</option>
            <option value="lain-lain">Lain Lain</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="no_rekening">No Rekening Bank </label>
          <input type="text" className="form-control" placeholder="23456789" value={no_rekBank} 
          onChange={(event) => setNo_rekBank(event.target.value)}  
          />
          </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="rol">Rol {rol}</label>
          <select id="inputState" className="form-control"
            // onChange={(event) => this.setState({ selectJob: event.target.value })}>
            onChange={(event) => setRol(event.target.value)} value={rol} >
            <option selected>Choose...</option>

            {
              listRol.map((itemselect) => {
                return (
                  <option value={itemselect.rol_id}>{itemselect.rol_name}</option>
                )
              })
            }

          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <button className="btn btn-primary btn-block" type="submit"
            onClick={()=>updateEmployee()}>Next Save</button>
        </div>
      </div>
    </div>
  )
}
export default Edit;

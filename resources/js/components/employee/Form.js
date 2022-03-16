import React, { useEffect, useState } from 'react';
import employeeServices from "../../services/Employee";


export default function Form() {

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

    async function fetchDataRol() {
      //  load data from API
      const res = await employeeServices.listRole();
      setListRol(res.data)
    }

    fetchDataRol();

  }, []);


  const saveEmployee = async () => {
    const data = {
      nama_depan, nama_belakang, tanggal_lahir, no_telephone, email, provinsi, city,
      alamat, no_ktp, rekening_bank, posisi_saat_ini, no_rekBank, rol
    }

    const res = await employeeServices.save(data);

    if (res.success) {
      alert(res.message)
    } else {
      alert(res.message)
    }
  }


  return (
    <div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="firstName">Name Depan</label>
          <input type="text" className="form-control" placeholder="Name"
            onChange={(event) => setNama_depan(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="secondName">Name Belakang</label>
          <input type="text" className="form-control" placeholder="nama belakang"
            onChange={(event) => setNama_belakang(event.target.value)} />

        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="tanggal_lahir">Tanggal Lahir </label>
          <input type="date" className="form-control" placeholder="DD/MM/YY"
            onChange={(event) => setTanggal_lahir(event.target.value)} />

        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="phone">No Telephon </label>
          <input type="text" className="form-control" placeholder="123467890"
            onChange={(event) => setNo_telephone(event.target.value)} />

        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="email">Email</label>
          <input type="email" className="form-control" placeholder="you@example.com"
            onChange={(event) => setEmail(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="provinsi">Provinsi</label>
          <input type="text" className="form-control" placeholder="provinsi anda"
            onChange={(event) => setProvinsi(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="city">City </label>
          <select id="inputStateCity" className="form-control"
            onChange={(event) => setCity(event.target.value)} >
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
          <input type="text" className="form-control" placeholder="jl mangga"
            onChange={(event) => setAlamat(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="no_ktp">No KTP </label>
          <input type="text" className="form-control" placeholder="123467890"
            onChange={(event) => setNo_ktp(event.target.value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="Rekening_bank">Posisi Saat Ini </label>
          <select id="inputStateCity" className="form-control"
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
          <input type="text" className="form-control" placeholder="23456789"
            onChange={(event) => setNo_rekBank(event.target.value)} />

        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label for="rol">Rol {rol}</label>
          <select id="inputState" className="form-control"
            // onChange={(event) => this.setState({ selectJob: event.target.value })}>
            onChange={(event) => setRol(event.target.value)} >
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
          onClick={() => saveEmployee()}>Next Save</button>
        </div>
      </div>
    </div>
  )
}



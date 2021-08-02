//@ts-check
                                                //Nama Kelompok :
                                        //Herlambang Prasetya : 1119101762
                                        //Moh.Sahrur Romadhon : 1119101784

import { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';


const UpdateMerk = () => {
    //Deklarasi state
    const [_id, setId] = useState('');
    const [_nama_barang, setNama_Barang] = useState('');
    const [_harga_barang, setHarga_Barang] = useState('');
    const [_foto, setFoto] = useState (null);
    const [selectedFile, setSelectedFile] = useState('');
    const [file, setFile] = useState('');

    //Mengambil data yang dikirim melalui router
    const router = useRouter();
    const { id, nama_barang, harga_barang } = router.query;

    useEffect(() => {
        if (typeof id == 'string') {
            setId(id);
        }
        if (typeof nama_barang == 'string') {
            setNama_Barang(nama_barang);
        }
        if (typeof harga_barang == 'string') {
            setHarga_Barang(harga_barang);
        }
    }, [id, nama_barang, harga_barang])

    const onSelectImage = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        const _file = e.target.files[0];
        const reader = new FileReader()
        reader.onload = function () {
            setFile(_file);
            setFoto(reader.result);
        }
        reader.readAsDataURL(_file)

    }

    const submitHandler = async (e) => {
        e.preventDefault()
        //setsubmitting(true)
        try {
            const res = await fetch('/api/update-merk', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: _id,
                    nama_barang: _nama_barang,
                    harga_barang: _harga_barang,
                    foto : _foto
                }),
            })
            const json = await res.json()
            // set submitting(false)
            if (!res.ok) throw Error(json.message)

            alert("Update Data Sukses")
            Router.push('/admin/datamerk')

        } catch (e) {
            throw Error(e.message)

        }

    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className=" w-75 text-center mb-3 font-bold">Edit Data Barang</h1>

                    <div className="w-75 text-center mb-3">
                        <label htmlFor="uploadGambar">
                            <img
                                className="rounded-circle"
                                src={_foto} alt="Pilih Foto"
                                style={{ background: "gray", width: "100px", height: "100px" }} />
                        </label>

                        <input
                            id="uploadGambar"
                            type="file"
                            style={{ display: "none" }}
                            onChange={onSelectImage} />

                    </div>
                        <div className="w-75">
                    <div className="from-floating">
                        <input
                            className="form-control mb-2"
                            id="id"
                            type="text"
                            placeholder="ID"
                            value={_id}
                            onChange={(e) => setId(e.target.value)}
                        />
                        <label htmlFor="id"></label>
                    </div>

                    <div className="from-floating">
                        <input
                            className="form-control mb-2"
                            id="nama_barang"
                            type="text"
                            placeholder="Nama Barang"
                            value={_nama_barang}
                            onChange={(e) => setNama_Barang(e.target.value)}
                        />
                        <label htmlFor="id"></label>
                    </div>

                    <div className="from-floating">
                        <input
                            className="form-control mb-2"
                            id="harga_barang"
                            type="text"
                            placeholder="Harga Barang"
                            value={_harga_barang}
                            onChange={(e) => setHarga_Barang(e.target.value)}
                        />
                        <label htmlFor="id"></label>
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <button className="btn btn-primary" type="submit">Update</button>
                    </div>
                    </div>
                </form>

            </div>
        </div>
    );

}
export default UpdateMerk;
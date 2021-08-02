//@ts-check
                                                //Nama Kelompok :
                                        //Herlambang Prasetya : 1119101762
                                        //Moh.Sahrur Romadhon : 1119101784

import { useState } from "react";

const CreateMerk = () => {

    const [id, setId] = useState('');
    const [nama_barang, setNama_Barang] = useState('');
    const [harga_barang, setHarga_Barang] = useState('');
    const [foto, setFoto] = useState(null);
    const [selectedFile, setSelectedFile] = useState('');
    const [file, setFile] = useState('');

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


    async function submitHandler(e) {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:3000/api/create-merk", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    nama_barang,
                    harga_barang,
                    foto
                }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Penambahan Data Sukses")
        } catch (e) {
            throw Error(e.message)
        }
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center">Input Barang</h1>

                    <div className="w-75 text-center mb-3">
                        <label htmlFor="uploadGambar">
                            <img
                                className="rounded-circle"
                                src={foto} alt="Pilih Foto"
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
                                value={id}
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
                                value={nama_barang}
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
                                value={harga_barang}
                                onChange={(e) => setHarga_Barang(e.target.value)}
                            />
                            <label htmlFor="id"></label>
                        </div>
                    </div>
                    <div className="w-75 d-flex flex-row-reverse">
                        <button className="btn btn-primary" type="submit">Simpan</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default CreateMerk;
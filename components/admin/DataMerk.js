//@ts-check
                                                //Nama Kelompok :
                                        //Herlambang Prasetya : 1119101762
                                        //Moh.Sahrur Romadhon : 1119101784

import { useDataMerk } from '../../lib/swr-fetch'
import Link from 'next/link'
import { mutate } from 'swr';
import Router from 'next/router'

const DataMerk = () => {
    const { data, error } = useDataMerk();

    if (error) {
        return <div>Error Loading</div>
    }
    if (!data) {
        return <div>Loading</div>
    }

    //console.log(data);

    async function deleteBarang(id) {
        //setDeleting(true)
        let res = await fetch(`/api/hapus-merk?id=${id}`, { method: 'DELETE' })
        let json = await res.json()
        if (!res.ok) throw Error(json.message)
        mutate('/api/hapus-merk')
        //setDeleting(false)
        alert('Data telah terhapus')
        Router.push('/admin/datamerk')
    }

    return (
        <div className="container w-75 mx-auto py-4">
            <h3 className="font-bold">Data Barang</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Barang</th>
                        <th>Harga Barang</th>
                        <th>Foto</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map((mrk, idx) => (
                            <tr key={idx}>

                                <td>
                                    {mrk.id}
                                </td>
                                <td>
                                    {mrk.nama_barang}
                                </td>
                                <td>
                                    {mrk.harga_barang}
                                </td>
                                <td>
                                    <img
                                        className="rounded-circle"
                                        src={mrk.foto}
                                        alt="foto"
                                        style={{ width: "50px", height: "50px" }} />
                                </td>
                                <td>
                                    <div className="d-flex justify-content-between">
                                        <Link href={`/admin/updatemerk?id=${mrk.id}
                                    &nama_barang=${mrk.nama_barang}&harga_barang=${mrk.harga_barang}`}
                                        >
                                            <a>Edit</a>
                                        </Link>

                                        <button
                                            className = "btn btn-danger"
                                            value={mrk.id}
                                            onClick={(e) => deleteBarang(e.target.value)}>
                                            Delete</button>
                                    </div>
                                </td>


                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DataMerk;
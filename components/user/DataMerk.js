//@ts-check

import { useDataMerk } from "../../lib/swr-fetch";

const DataMerk = ({ data }) => {
    return (
        <div style={{ marginLeft: "50px" }}>
            <h3 className="text-center">Data Barang</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Barang</th>
                        <th>Harga Barang</th>
                        <th>Foto</th>
                        <th>Pembelian</th>
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
                                    <div>
                                        <a href="/pemesanan" className="nav-link px-0"><button type="button" className="w-100 btn btn-lg btn-outline-primary">Beli</button></a>
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
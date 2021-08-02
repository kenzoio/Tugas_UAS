//@ts-check
//Nama Kelompok :
//Herlambang Prasetya : 1119101762
//Moh.Sahrur Romadhon : 1119101784

import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
//import HomePage from './homepage';
import UserLayout from './user/UserLayout'

export default function pemesanan() {
    return (
        <div>
            <UserLayout>
                <div className="text-center">
                    <h2>Form Pemesanan</h2>
                </div>
                <div className="mb-3 container">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Alamat Email" />
                    <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Kata Sandi" />
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Alamat" />
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Pilihan Barang</option>
                        <option value="Casing DA N23 Middle Tower Gaming Casing">Casing DA N23 Middle Tower Gaming Casing</option>
                        <option value="MSI H110M Gaming">MSI H110M Gaming</option>
                        <option value="Intel Core i7-6850k Processor">Intel Core i7-6850k Processor</option>
                        <option value="Kingston HyperX Furry DDR4 RGB 16GB">Kingston HyperX Furry DDR4 RGB 16GB</option>
                        <option value="Cpu Cooler Gaming Heatsink 2 Pipe RGB Alseye AM90">Cpu Cooler Gaming Heatsink 2 Pipe RGB Alseye AM90</option>
                        <option value="Gigabyte Radeon RX 5700 XT 8G">Gigabyte Radeon RX 5700 XT 8G</option>
                    </select>
                </div>
                <div className="container">
                    <h4>Metode Pembayaran</h4>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>--Pilih Metode Pembayaran--</option>
                        <option value="Indomaret">Indomaret</option>
                        <option value="Alfamart">Alfamart</option>
                        <option value="Gopay">COD</option>
                    </select>
                </div>
                <div className="mb-3 container text-center">
                    <button type="button" className="btn btn-primary">Bayar</button>

                </div>
            </UserLayout>
        </div>
    )
}
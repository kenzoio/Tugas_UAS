//@ts-check
                                                //Nama Kelompok :
                                        //Herlambang Prasetya : 1119101762
                                        //Moh.Sahrur Romadhon : 1119101784

import { db } from "../../lib/db";

const handler = async(req,res) => {
    const {id, nama_barang, harga_barang, foto} = req.body;
    try {
        if (!id || !nama_barang || !harga_barang) {
            return res
            .status(400)
            .json({message: 'Input harus di isi semua'})
        }

        const results = await db.query(`INSERT INTO barang (id, nama_barang, harga_barang, foto) VALUES (?,?,?,?)`,
        [id, nama_barang, harga_barang, foto]
        );
        
        await db.end;

        return res.json(results)
    } catch (e) {
        res.status(500).json({message: e.message});
    }
};

export default handler;
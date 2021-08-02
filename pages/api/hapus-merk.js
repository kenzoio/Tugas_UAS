//@ts-check
                                                //Nama Kelompok :
                                        //Herlambang Prasetya : 1119101762
                                        //Moh.Sahrur Romadhon : 1119101784

import { db } from '../../lib/db'

const handler = async (req, res) => {
    const { id } = req.query
    try {
        if (!id) {
            return res.status(400).json({ message: '`id` tidak ada' })
        }

        const results = await db.query(
            `DELETE FROM barang WHERE id = ?`, id)


        res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

export default handler
//@ts-check
                                                //Nama Kelompok :
                                        //Herlambang Prasetya : 1119101762
                                        //Moh.Sahrur Romadhon : 1119101784

import {useDataMerk} from '../lib/swr-fetch'

const detailmerk = () => {
    const {data, error} = useDataMerk();

    if(error){return <div>Error ....</div>}
    if(!data){return <div>Loading ....</div>}
    const {dataMerk} = data;
    return (
        <div>
            <ul>
                {dataMerk.map((mrk, idx) => (
                    <>
                        <li>{mrk.Nama_Barang}</li>
                        <li>{mrk.Harga_Barang}</li>
                    </>
                ))}
            </ul>
        </div>
    );
}

export default detailmerk;
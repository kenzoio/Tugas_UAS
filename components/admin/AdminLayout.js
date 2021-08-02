//@ts-check
                                            //Nama Kelompok :
                                        //Herlambang Prasetya : 1119101762
                                        //Moh.Sahrur Romadhon : 1119101784

import SideBar from "./SideBar";

const AdminLayout = ({children}) => {
    return (
        <div>
            <SideBar>
                {children}
            </SideBar>
        </div>
    );
}

export default AdminLayout;
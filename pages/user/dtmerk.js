//@ts-check


import DataMerk from "../../components/user/DataMerk";
import UserLayout from "../../components/user/UserLayout";
import { useDataMerk } from '../../lib/swr-fetch'

const dtmerk = (props) => {
    const { data, error } = useDataMerk(props.mrk);

    if (error) {
        return <div>Error Loading</div>
    }
    if (!data) {
        return <div>Loading</div>
    }
    console.log(data);

    return (
        <div>
            <UserLayout>
                <DataMerk data={data} />
            </UserLayout>
        </div>
    );
}

export async function getStaticProps(){
    const res = await fetch('http://localhost:3000/api/dt-merk')
    const mrk = await res.json()

    return{
        props: {
            mrk,
        },
    }
}
 export default dtmerk;
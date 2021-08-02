//@ts-check

import useSWR from "swr";

async function fetcher(url){
    const res = await fetch(url);
    return res.json();
}
 
export const useDataMerk = (mrk) => {
    const url = "http://localhost:3000/api/dt-merk";
    const {data, error} = useSWR(url, fetcher, {initialData: mrk, refreshInterval: 1000});

    return {data, error}
}
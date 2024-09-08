import { useEffect,useState } from "react";

function useCurrencyInfo({from, to}){
    const [data,setData]= useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[from]))
    },[from,to,useCurrencyInfo])
    // console.log(data)
    return data;
}

export default useCurrencyInfo;
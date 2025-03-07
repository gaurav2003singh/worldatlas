import React, { useEffect, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/Layout/UI/Loader";
import { CountryCard } from "../components/Layout/UI/CountryCard";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  useEffect(async() => {
    startTransition(async()=>{
       const res = await getCountryData();
       setCountries(res.data);
       
    });
    
  }, []);

 if (isPending) return <Loader/>;

 return<>
 <section className="country-section">
  <ul className="grid grid-four-cols">
    {Countries.map((curCountry,index)=>{
      return <CountryCard key={index} country={curCountry}/>
    })}
  </ul>
 </section>
 </> 

};

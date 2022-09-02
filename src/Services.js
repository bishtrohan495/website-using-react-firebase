import React from "react";
import { useState } from "react";
import Serviceapi from "./Serviceapi";

const Services = () =>{
const [servicedata , setservicedata] = useState(Serviceapi)
console.log(setservicedata);

return(
    <>
      <section className="service-main-container">
        <div className="container service-container">
            <h1 className="main-heading text-center fw-bold">
                How To Send Money
            </h1>
        <div className="row gy-5">
        {servicedata.map((curelem) =>{
            const {id , logo , title, info} = curelem;
            return(
                <>
                <div className="col-12 col-lg-4 col-xxl-4 work-container-subdiv" key={id}>
                <i className={`fontawesome-style ${logo}`}></i>
                <h2 className="sub-heading"> {title} </h2>
                <p className="main-para"> {info} </p> 
            </div>
                </>
            )
        })};
           
        </div>    
        </div>
      </section> 
    </>
)
}
export default Services;
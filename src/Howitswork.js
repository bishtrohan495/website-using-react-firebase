import React from "react";
import { useState } from "react";
import Workapi from "./Workapi";

const Howitswork = () =>{

    const [workdata , setworkdata] = useState(Workapi);
        console.log(setworkdata)

    return(
           <>
            <container>
                <div className="work-container container">
                    <h1 className="main-heading text-center">How Does It Works</h1>
                    <div className="row">
                    {workdata.map((curelmt) =>{
                        const {id ,logo,title,info} = curelmt;
                      return (
                        <>
                        <div className="col-12 col-lg-4 text-center work-container-subdiv">
                        <i class={`fontawesome-style ${logo}`} aria-hidden="true"/>
                        <h2 className="sub-heading" >{title}</h2>
                        <p className="main-para w-100">{info}</p>

                        </div>   
                        </>
                      )
                    })};
                    </div>
                </div>
            </container>
           </>
    )
}
export default Howitswork;
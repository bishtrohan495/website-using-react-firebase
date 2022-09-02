import React from "react";
import { useState } from "react";
import Howtouse from "./Howtouse"

const Aboutus = () =>{
    const [aboutdata , setaboutdata] = useState(Howtouse);
    console.log(setaboutdata);

    return(
        <>
         <section className="common section our-services">
         <div className="container mb-5">
            <div className="row">
                <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                    <img src="images/img3.webp" alt="image"></img>
                </div>


                <div className="col-12 col-lg-7 our-services-list ">
                    <h3 className="mini-title">
                        ---AVALABE @ GOOGLE PLAY STORE & APP STORE ONLY
                    </h3>
                    <h1 className="main-heading">How To Use App</h1>

                    {aboutdata.map((curelem) =>{
                        const{id, title,number, info} = curelem;
                        return(<>
                        <div className="row our-services-info" >
                        <div className="col-1 our-services-number">{number}</div>
                        <div className="col-10 our-services-data">
                            <h2>{title}</h2>
                            <p className="main-para">{info}</p>
                        </div>
                    </div>
                    </>)
                    })};

                  
                </div>
            </div>
         </div>

         </section>







         <section className="common section our-services">
         <div className="container mb-5">
            <div className="row">

                <div className="col-12 col-lg-7 our-services-list o-s-r-c d-flex justify-content-center align-items-start flex-column ">
                    <h3 className="mini-title">
                        ---SUPPORT IN ANY LANGUAGE !!
                    </h3>
                    <h1 className="main-heading">Our Support is <br />
                                                 24/7 Avalable  </h1>

                    {aboutdata.map((curelem) =>{
                        const{id, title,number, info} = curelem;
                        return(<>
                        <div className="row our-services-info" >
                        <div className="col-1 our-services-number">{number}</div>
                        <div className="col-10 our-services-data">
                            <h2>{title}</h2>
                            <p className="main-para">{info}</p>
                        </div>
                    </div>
                    </>)
                    })};

                  </div>

                  <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                    <img src="images/img4.webp" alt="image"></img>
                </div>

            </div>
         </div>

         </section>

        </>
    )
}
export default Aboutus;
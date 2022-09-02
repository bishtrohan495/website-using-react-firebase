import React from "react";

const Footer = () =>{
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <h2>Company</h2>
                                <div className="mt-5">
                                    <p>company</p>
                                    <p>company</p>
                                    <p>company</p>
                                    <p>company</p>
                                </div>
            
                            </div>

                            <div className="col-6 col-lg-3">
                                <h2>Support</h2>
                                <div className="mt-5">
                                    <p>support</p>
                                    <p>support</p>
                                    <p>support</p>
                                    <p>support</p>
                                </div>
                              
                            </div>

                            <div className="col-6 col-lg-3">
                                <h2>Service</h2>
                                <div className="mt-5">
                                    <p>service</p>
                                    <p>service</p>
                                    <p>service</p>
                                    <p>service</p>
                                </div>
                            </div>

                            <div className="col-6 col-lg-3">
                                <h2>follow Us</h2>
                              <div className="row links">
                                <div className="col-6 ">

                                    <a href="">
                                    <i className="fab fa-instagram fontawesome-style"></i> 
                                    </a>

                                    <a href="">
                                    <i className="fab fa-instagram fontawesome-style"></i> 
                                    </a>
                                </div>
                              </div>
                            </div>

                        </div>

                        <hr />
                        <div className="mt-5">
                            <p className="main-para text-center w-100">
                                    Developed by Rohan Bisht copyright @ .All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
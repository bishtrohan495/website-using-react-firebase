import React from "react";

const Header = () =>{
  return(
    <>
    <header>
        <section className="container main-container">
        <div className="row">
        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
            <h1 className="display-2">
                online payment <br /> made easy for u.</h1>
                <p className="main-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloribus corporis nostrum dolor, reprehenderit, tenetur, illum quas necessitatibus aspernatur maxime cum consequuntur fugiat!</p>
                <h3>get early access for u</h3>
                <div className="input-group mt-3">
                    <input type="text" className="rounded-pill w-75 me-3 p-2 form-control-text"
                    placeholder="enter ur email" ></input>
                    <div className="input-group-button">get it now </div>
                </div>
        </div>
              
              <div className="col-12 col-lg-6 header-right-side d-flex
              justify-content-center align-items-center main-image ">
                <img src="./images/img1.webp" alt="img" className="img-fluid"></img>
                <img src="./images/img2.webp" alt="img2" className="img-fluid main-img"></img>
              </div>
        </div>

        </section>
    </header>
    </>
  );
};
export default Header;
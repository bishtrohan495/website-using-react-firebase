import React from "react";
import { useState } from "react";


const Contact = () => {
    const [userdata , setuserdata] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });
    let name,value
    const postuserdata = (event) =>{
        name = event.target.name;
        value = event.target.value;


        setuserdata({ ...userdata, [name]: value})
    };
   //connect with fire base

   const submitdata = async (event) => {
    event.preventDefault();
    const { firstname, lastname, phone, email, address, message } = userdata;

      const res = fetch(
        "https://rohanpayfirebase-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    
  };



    return (
        <>
        <h1 className="main-heading text-center fw-bold mt-5">Contact Us</h1>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">

                                <div className="conatct-left col-12 col-lg-5">
                                    <h1 className="main-heading fw-bold">Connet With Our <br />Team Asap.</h1>
                                    <br />
                                    <figure> <img src="images/img5.jpg" alt="logo" className="img-fluid mt-5" /></figure>
                                </div>

                                <div className="contact-right col-12 col-lg-7 ">
                                    <form method="POST">

                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 col-lg-6 conatct-input-field ">
                                                    <input
                                                        type="text"
                                                        name="firstname"
                                                        id=""
                                                        placeholder="First name"
                                                        className="form-control"
                                                        value={userdata.firstname}
                                                        onChange={postuserdata} />
                                                </div>

                                                <div className="col-12 col-lg-6 conatct-input-field">
                                                    <input
                                                        type="text"
                                                        name="lastname"
                                                        id=""
                                                        placeholder="Last name"
                                                        className="form-control"
                                                        value={userdata.lastname}
                                                        onChange={postuserdata} />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 col-lg-6 conatct-input-field">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        id=""
                                                        placeholder="Phone no."
                                                        className="form-control"
                                                        value={userdata.phone}
                                                        onChange={postuserdata} />
                                                </div>

                                                <div className="col-12 col-lg-6 conatct-input-field">
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        id=""
                                                        placeholder="Email"
                                                        className="form-control"
                                                        value={userdata.email}
                                                        onChange={postuserdata} />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 conatct-input-field">
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        id=""
                                                        placeholder="Add Address"
                                                        className="form-control"
                                                        value={userdata.address}
                                                        onChange={postuserdata} />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 ">
                                                    <input
                                                        type="text"
                                                        name="message"
                                                        id=""
                                                        placeholder="Enter Your Message"
                                                        className="form-control"
                                                        value={userdata.message}
                                                        onChange={postuserdata} />
                                                </div>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input"
                                                 type="checkbox"
                                                 value=""
                                                 id="flexCheckChecked"
                                                 />
                                                    <label className="form-check-label main-para" >
                                                        I agree that you can contact me with the email and phone no given below.
                                                    </label>
                                            </div>

                                            <button type="submit" className="btn btn-style w-100" onClick={submitdata}>
                                                submit
                                            </button>

                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;
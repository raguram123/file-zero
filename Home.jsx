import React from "react";
import { useUserContext } from "./context/usercontext";

function Home() {
  const { name, setName, email, setEmail, phone, setPhone, handleFormSubmit } =
    useUserContext();
  const formId = 11;
  return (
    <div className="container my-5 py-2" style={{backgroundColor: "red"}}>
      <div className="row align-items-center">
        <div className="col-lg-7 text-center text-lg-start">
          
         
        
        </div>
        <div className="col" style={{margin:"200px"}} >
            <h1 className="display-4 fw-bold lh-1 text-white mb-4">
              Login Page
            </h1>
          <form
            className="p-4 p-md-5 mb-5 "
            onSubmit={(e) => handleFormSubmit(e, { name, email, phone }, formId)}
          >
            
            <div className="mb-4" style={{margin:"50px"}}>
              <label htmlFor="text">Name :</label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter the Name * "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4 " style={{margin:"50px"}}>
              <label htmlFor="text">Email</label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="abcd@gmail.com *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4" style={{margin:"50px"}}>
              <label htmlFor="number">Number</label>
              <input
                type="number"
                className="form-control"
                id="floatingNumber"
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
           
            <button className="btn text-white w-100 " type="submit"  style={{margin:"50px"}}>
              Add To List
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home ;
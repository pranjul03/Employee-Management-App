import React from "react";

export default function Sign_up() {
  return (
    <div>
      <form class="row g-3 signupform">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="User Name"
            aria-label="User name"
          />
        </div>
        <div class="col-md-6">
          <input
            type="date"
            class="form-control"
            placeholder="Date of Birth"
            aria-label="Date of Birth"
          />
        </div>
        <div class="col-md-6">
          
          <input type="email"  placeholder="Email" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          
          <input type="password" placeholder="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Address"
          />
        </div>
       
        <div class="col-md-4">
          
          <input type="text" class="form-control" placeholder="city" id="inputCity" />
        </div>
        <div class="col-md-4">
          
          <select id="inputState" class="form-select">
            <option selected>Choose state...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-4">
          
          <select id="inputState" class="form-select">
            <option selected>Nationality...</option>
            <option>...</option>
          </select>
        </div>

         <div class="col-6">
          
          <input
            type="number"
            class="form-control"
            id="contact_number_1"
            placeholder="Contact Number-1"
          />
        </div>
        <div class="col-6">
          
          <input
            type="number"
            class="form-control"
            id="contact_number_2"
            placeholder="Contact Number-2"
          />
        </div>

        
      
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

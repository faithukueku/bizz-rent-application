import React from "react";

const PaymentForm = ()=>{

    return(

<form>
<div class="form-group">
    <label for="fullName">Full name</label>
    <input type="text" class="form-control" id="fullName"  placeholder="Enter full name"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

  </div>
  <div class="form-group">
    <label for="companyName">Company name</label>
    <input type="email" class="form-control" id="companyName" aria-describedby="emailHelp" placeholder="Enter company name"/>
  </div>

<div className="submit-btn">
  <button type="submit" class="btn btn-primary">Pay now</button>
</div>
</form>

    )
}


export default PaymentForm
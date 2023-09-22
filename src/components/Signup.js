import React from 'react'

function Signup() {
  return (
    <div className='container'>


<div className='row'>
    <div className='col-md-4'></div>
    <div className='col-md-4'>

    <form>
    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="text" readonly="" class="form-control-plaintext" id="staticEmail" value="email@example.com"/>
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <br/>
    <button class="btn btn-success" type="submit">Submit</button>

 
    </form>
    <div className='col-md-4'></div>
    </div>
    </div>
    </div>
  )
}


export default Signup
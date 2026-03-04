import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";

const Registration = () => {

  const navigate = useNavigate();

  // formdata is variable and setformdata is function
  const [formdata, setFormdata] = useState({
    fullname: "",
    email: "",
    password: "",
    address: "",
  });



  const handleInput = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop automatic refresh
    // console.log(formdata);

    //data send to backend
    try {
      const res = await axios.post("http://localhost:5000/api/student/register", formdata);
      // console.log("Server Response", res.data);
      toast.success("Registration Successfully Completed",{position:'top-right',autoClose:2000,theme: "dark",closeOnClick: true,pauseOnHover:true});

      // 
      setFormdata({
        fullname: "",
        email: "",
        password: "",
        address: "",
      });

    //     setTimeout(() => {
    //   navigate("/students");
    // }, 1500); // after submit the from redirect to students page

    } catch (error) {
      console.log("Error", error);
      toast.error("Registration Failed. Please try again",{position:'top-right',autoClose:2000,theme: "dark",closeOnClick: true,pauseOnHover:true});
      // navigate('/register');
    }
  }

  return (
    <>
      <div className='row'>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <h2 className='m-2'>Registration Form</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name='fullname' value={formdata.fullname} placeholder='Enter your fullname' className='form-control mb-3' onChange={handleInput} />
            <input type="email" name='email' value={formdata.email} placeholder='Enter your email' className='form-control mb-3' onChange={handleInput} />
            <input type="password" name='password' value={formdata.password} placeholder='Enter your password' className='form-control mb-3' onChange={handleInput} />
            <textarea placeholder='Enter your address' name='address' value={formdata.address} className='form-control mb-3' onChange={handleInput}></textarea>
            <button type='submit' className='btn btn-info'>Submit</button>
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </>
  )
}

export default Registration
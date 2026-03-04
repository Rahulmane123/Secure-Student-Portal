import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";

const Login = () => {
const navigate = useNavigate();

  const [formdata,setFormdata] = useState({
    email:"",
    password:"",
  })

  const handleInput = (e)=>{
    setFormdata({...formdata,[e.target.name]:e.target.value});
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/student/login", formdata, { withCredentials: true });
      // console.log("Server Response", res.data);
       toast.success(res.data.message || "Login Successful!", {
        position: 'top-right',
        autoClose: 1000,
        theme: "dark",
        closeOnClick: true,
        pauseOnHover: true
      });

      // Reset form
      setFormdata({
        email: "",
        password: "",
      });

     
          setTimeout(() => {
      navigate("/students");
    }, 2000); // after submit the from redirect to students page
     

    } catch (error) {
      console.log("Error", error);
      toast.error("Login failed. Invalid email or password",{position:'top-right',autoClose:1000,theme: "dark",closeOnClick: true,pauseOnHover:true});
     
    } 
  }
  return (
    <div>
       <div className='row'>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <h2 className='m-2'>Login</h2>
          <form action=""  onSubmit={handleSubmit}>

              <input type="email" name='email' value={formdata.email} placeholder='Enter Email' onChange={handleInput} className=' form-control mb-3' />
              <input type="password" name="password" value={formdata.password} placeholder='Enter password'  onChange={handleInput} className=' form-control mb-3' />
              <button type='submit' className='btn btn-info'>Login</button>
          </form>
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  )
}

export default Login
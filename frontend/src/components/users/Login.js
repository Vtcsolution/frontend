import React ,{ useState }from 'react';
import useLogin from "../../hooks/useLogin";
import {Link} from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};



    return (
 
    
    
    <div className="hold-transition login-page" data-aos="zoom-in-right">
   <div className="login-box">
  {/* /.login-logo */}
  <div className="card card-outline">
    <div className="card-header text-center">
    <span className='text-white'> Talktopsychics</span>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form id="login" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          
          <input type="text" 
          
          
                   className="form-control" placeholder="Username" value={username}
                   onChange={(e) => setUsername(e.target.value)} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          
          {/* /.col */}
          <div className="col-4">
            {/* <Link to="/psychics"> */}
            <button type="submit" id="login_button" className="btn btn-block" style={{background:'#ff6000' ,color:'#fff'}}>{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
          </div>
          {/* /.col */}
        </div>
      </form>
     
      <p className="mb-1">
        <p>Don't Have account ? <Link to="/signup">Singup</Link></p>
      </p>
      
    </div>
    {/* /.card-body */}
  </div>
  {/* /.card */}
</div>

    </div>
    

  )
}

export default Login;

import  { useState } from "react";
import "../CSS/Login.css";
import axios from "../lib/axios.js"
import Alert from "../components/Alert.jsx"
import { useGoogleLogin } from '@react-oauth/google';
import  {jwtDecode}  from "jwt-decode";
import { useNavigate } from "react-router-dom";

import useUserStore from '../store/userdetails';
const Login = () => {
  
  const [email,setemail]=useState('')
  const [name,setName] =useState('')
  const [password,setpassword] = useState('')
  const [isLogin, setIsLogin] = useState(true);
  const [messege,setmessege] =useState('')
  const [type,settype] = useState('')
  const isLoggedIn = useUserStore((state)=>state.isLoggedIn)
  const setloggedin = useUserStore((state)=>state.setLoggedIn)
  const setloggeduser = useUserStore((state)=>state.setName)
  const loggeduser = useUserStore((state)=>state.name)
  const navigate = useNavigate()
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log((tokenResponse.access_token))},
      onError:()=>{console.log('error')}
  });
  
 async function handleSubmit(event){
    event.preventDefault()
    if(!email || !password){
      settype('error')
      setmessege('all fields are needed')
    }
    if(isLogin){
      try {
        const response = await axios.post('/api/auth/signin',{email,password})
        if(response.status===200){
          console.log('loggedin')
          setmessege(response.data.msg)
          settype('success')
          setloggedin(true)
          setloggeduser(response.data.name)
          
          navigate('/')
          
        }
      } catch (error) {
        if(error.response.data && error.response){
          console.log('incorrect details')
          setmessege(error.response.data.msg)
          settype('error')
        }
        else{
          setmessege(error.response.data.msg)
          settype('error')
          console.log('server error')
        }
      }
    }
    else{
      try {
        const response = await axios.post('/api/auth/signup',{name,email,password})
        if(response.status===200){
          console.log('signed in ')
          setmessege(response.data.msg)
          settype('success')
        }
      } catch (error) {
        if(error.response.data && error.response){
          console.log('incorrect details')
          setmessege(error.response.data.msg)
          console.log('incorrect details')
        }
        else{
          console.log('incorrect details')
          setmessege(error.response.data.msg)
          console.log('server error')
        }
      }
    }
  }
  return (
    <>
    <Alert message={messege} type={type} onClose={()=>{setmessege('')}}/>
    <div className="auth-container">
     
      <div className="auth-toggle">
        <button
          className={`toggle-button ${isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(true)}
        >
          LOGIN
        </button>
        <button
          className={`toggle-button ${!isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(false)}
        >
          REGISTER
        </button>
      </div>

      {isLogin ? (
        <div className="auth-form">
          <h2>Sign in with:</h2>
          <div className="social-icons">
            <span className="icon" onClick={login}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
</svg></span>
            <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg></span>
            <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg></span>
            <span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></span>
          </div>
          <p>or:</p>
          <form>
            <input type="text" placeholder="Email" onChange={(event)=>{setemail(event.target.value)}} />
            <input type="password" placeholder="Password" onChange={(event)=>{setpassword(event.target.value)}}/>
            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="submit-button" onClick={handleSubmit}>SIGN IN</button>
          </form>
          <p>
            Not a member? <span onClick={() => setIsLogin(false)}>Register</span>
          </p>
        </div>
      ) : (
        <div className="auth-form">
          <h2>Create an account</h2>
          <form>
            <input type="text" placeholder="name" onChange={(event)=>{setName(event.target.value)}}/>
            <input type="email" placeholder="Email" onChange={(event)=>{setemail(event.target.value)}} />
            <input type="password" placeholder="Password"  onChange={(event)=>{setpassword(event.target.value)}}/>
            <button type="submit" className="submit-button" onClick={handleSubmit}>REGISTER</button>
          </form>
          <p>
            Already a member? <span onClick={() => setIsLogin(true)}>Login</span>
          </p>
        </div>
      )}
    </div>
    </>
  );
};

export default Login;

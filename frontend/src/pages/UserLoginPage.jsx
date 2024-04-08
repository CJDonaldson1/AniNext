import React, { useState } from "react"
import axios from "axios"
import "./UserLoginPage.css"

export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const response = await axios.post('http://localhost:3001/api/login', { email, password })
      console.log(response.data)
      alert("Login successful!")
    } catch (error) {
      console.error("Login failed:", error.response?.data?.message || error.message)
      alert("Login failed. Please try again.")
    }
  }

  return (
    <div className="login-page" style={{ backgroundImage: "url(https://cdn.wallpapersafari.com/68/11/t9vZSU.jpg)" }}>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <form className="container" onSubmit={handleLogin}>
            <div className="title">Login</div>
            <p className="description">Time to find out whats next in Anime</p>
            <div className="input">
              <label className="text-wrapper" htmlFor="email">Email</label>
              <input
                className="textfield"
                id="email"
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input">
              <label className="text-wrapper" htmlFor="password">Password</label>
              <input
                className="textfield"
                id="password"
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="button primary">
              <div className="title-2">Login</div>
            </button>
          </form>
          <p className="ani-next">
            <span className="span">A</span>
            <span className="text-wrapper-2">niNext</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage


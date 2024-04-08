import React, { useState } from "react"
import axios from "axios"
import "./UserSignupPage.css" // Assuming you have or will create corresponding CSS

export const CreateAccountPage = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleCreateAccount = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('http://localhost:3001/api/users', {
        username,
        email,
        passwordHash: password, // Depending on your backend, you might directly send "password" and let the backend hash it
      });
      console.log(response.data); // You may want to do something with the response data
      alert("Account created successfully!")
      // Redirect to login page or auto-login the user as needed
    } catch (error) {
      console.error("Error creating account:", error.response?.data?.message || error.message);
      alert("Error creating account. Please try again.")
    }
  }

  return (
    <div className="create-account-page">
      <form className="form-container" onSubmit={handleCreateAccount}>
        <h1>Create Account</h1>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default CreateAccountPage
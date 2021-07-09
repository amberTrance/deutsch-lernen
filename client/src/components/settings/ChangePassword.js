import { useState } from 'react'

const ChangePassword = () => {
  const [inputData, setInputData] = useState({
    oldPass: '',
    newPass: '',
    newPassRepeat: ''
  })

  const onSubmit = (e) => {
    e.preventDefault()

    console.log(inputData)
  }

  const onChange = (e) => {
    setInputData({...inputData, [e.target.name] : e.target.value})
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="settings">
        <h3>Change Password</h3>
        <label htmlFor="oldPass">Old Password:</label>
        <input 
          type="password" 
          name="oldPass"
          className="auth-input newPass"
          onChange={(e) => onChange(e)}
        />

        <label htmlFor="newPass">New Password:</label>
        <input 
          type="password" 
          name="newPass"
          className="auth-input newPass"
          onChange={(e) => onChange(e)}
        />

        <label htmlFor="newPassRepeat">New Password Again:</label>
        <input 
          type="password" 
          name="newPassRepeat"
          className="auth-input newPass"
          onChange={(e) => onChange(e)}
        />

        <input 
          type="submit"
          value="submit"
          className="auth-btn"
        />
      </div>
    </form> 
  )
}
 
export default ChangePassword;
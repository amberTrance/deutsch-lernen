import { Fragment, useState } from 'react'
import axios from 'axios'

const ChangePassword = () => {
  const [inputData, setInputData] = useState({
    oldPass: '',
    newPass: '',
    newPassRepeat: ''
  })

  const [errors, setErrors] = useState([])
  const [success, setSuccess] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify(inputData)

    if (inputData.newPass !== inputData.newPassRepeat) {
      setErrors([{msg: 'Passwords do not match!'}])
    } else {
      axios.put('/api/settings/changePass', body, config)
      .then(res => {
        setSuccess(res.data)
        setErrors([])
      })
      .catch(err => setErrors(err.response.data.errors))
    }
  }

  const onChange = (e) => {
    setInputData({...inputData, [e.target.name] : e.target.value})
  }

  return (
    <Fragment>
      { errors && errors.map((error,i) => 
              <div 
                className="msg error"
                key={`${i}-error`}>{error.msg}
              </div>
        )}
      { success && <div className="msg success">{success}</div>}
      <form onSubmit={(e) => onSubmit(e)}>
        <h3>Change Password</h3>
        <label htmlFor="oldPass">Old Password:</label>
        <input 
          type="password" 
          name="oldPass"
          className="auth-input newPass"
          onChange={(e) => onChange(e)}
          required
        />

        <label htmlFor="newPass">New Password:</label>
        <input 
          type="password" 
          name="newPass"
          className="auth-input newPass"
          onChange={(e) => onChange(e)}
          required
        />

        <label htmlFor="newPassRepeat">New Password Again:</label>
        <input 
          type="password" 
          name="newPassRepeat"
          className="auth-input newPass"
          onChange={(e) => onChange(e)}
          required
        />

        <input 
          type="submit"
          value="Submit"
          className="auth-btn"
        />
      </form> 
    </Fragment>
  )
}
 
export default ChangePassword;

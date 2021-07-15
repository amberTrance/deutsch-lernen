import { useState, Fragment } from 'react'
import axios from 'axios'
import { set } from 'mongoose'

const DeleteProfile = () => {

  const [click, setClick] = useState(false)
  const [overlay, setOverlay] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    setClick(true)
    setError('')
    setOverlay('overlay')
  }

  const handleClickCancel = () => {
    setClick(false)
    setOverlay('')
  }

  const handleOnChange = (e) => {
    setPass(e.target.value)
  }

  const handleClickDelete = () => {

    axios.delete('/api/settings/delete', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        password: pass
      }
    })
    .then(res => {
      localStorage.removeItem('token')
      setSuccess(res.data.msg)
      setClick(false)
      setOverlay('')
      setTimeout(() => {
        window.location = '/'
      }, 3000)
    })
    .catch(err => {
      setError(err.response.data.msg)
      setClick(false)
      setOverlay('')
    })

  }

  return (  
    <Fragment>
      { success && <div className="msg success">{success}</div>}
      <h3>Delete Account</h3>
      <p>
        Deleting this account will erase all data associated with it. Only proceed if certain.
      </p><br/>
      { error && <div className="msg error">{error}</div>}
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="oldPass">Password:</label>
          <input 
            type="password" 
            name="oldPass"
            className="auth-input newPass"
            required
            onChange={(e) => handleOnChange(e)}
            required
          />
          <input
            type="submit"
            className="deleteAcc"
            style={{padding: "7px 10px"}}
            value="Delete Account"
          />
      </form>

      {click && <div className="deleteAccPopup">
        <p>Are you sure you want to delete your account?</p>
        <button 
          className="deleteAcc"
          onClick={handleClickDelete}
        >DELETE
        </button>
        <button 
          className="btn" 
          style={{borderRadius: "3px", fontSize: "15px"}}
          onClick={() => handleClickCancel()}
        >CANCEL</button>
      </div>}
      <div className={overlay}></div>
    </Fragment>
  )
}
 
export default DeleteProfile

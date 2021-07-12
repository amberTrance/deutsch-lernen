import { useState, Fragment } from 'react'

const DeleteProfile = () => {

  const [click, setClick] = useState(false)
  const [overlay, setOverlay] = useState('')

  const handleClick = (str) => {
    if (str === 'delete') {
      setClick(true)
      setOverlay('overlay')
    }
    if (str === 'cancel') {
      setClick(false)
      setOverlay('')
    }
  }

  return (  
    <Fragment>
      <h3>Delete Account</h3>
      <p>
        Deleting this account will erase all data associated with it. Only proceed if certain.
      </p>
      <button 
        className="deleteAcc"
        onClick={() => handleClick('delete')}
        style={{padding: "7px 10px"}}
      >Delete Account</button>

      {click && <div className="deleteAccPopup">
        <p>Are you sure you want to delete your account?</p>
        <button className="deleteAcc">DELETE</button>
        <button 
          className="btn" 
          style={{borderRadius: "3px", fontSize: "15px"}}
          onClick={() => handleClick('cancel')}
        >CANCEL</button>
      </div>}
      <div className={overlay}></div>
    </Fragment>
  )
}
 
export default DeleteProfile
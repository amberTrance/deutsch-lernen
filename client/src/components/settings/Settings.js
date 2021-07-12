import ChangePassword from './ChangePassword'
import DeleteProfile from './DeleteProfile'

const Settings = () => {
  return (  
    <div className="center">
      <div className="settings">
        <ChangePassword />
        <DeleteProfile />
      </div>
    </div>
  )
}
 
export default Settings;
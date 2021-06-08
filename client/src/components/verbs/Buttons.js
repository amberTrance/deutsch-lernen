import { Link } from 'react-router-dom'

const Buttons = ({verb}) => {
  return ( 
    <div className="btn-container">
      <Link to={`/verbs/${verb}`}>
        <button id="see-btn">SEE</button>
      </Link>
      <Link to={`/verbs/${verb}/conjugate`}>
        <button>CONJUGATE</button>
      </Link>
      <Link to={`/verbs/${verb}/edit`}>
        <button id="edit-btn">EDIT</button>
      </Link>
    </div> 
  );
}
 
export default Buttons;
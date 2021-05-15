import { Link } from 'react-router-dom'

const Buttons = ({collection}) => {
  return ( 
    <div className="btn-container">
      <Link to={`/nouns/${collection}`}>
        <button id="see-btn">SEE</button>
      </Link>
      <Link to={`/nouns/${collection}/en-de`}>
        <button>EN-DE</button>
      </Link>
      <Link to={`/nouns/${collection}/de-en`}>
        <button>DE-EN</button>
      </Link>
      <Link to={`/nouns/${collection}/edit`}>
        <button id="edit-btn">EDIT</button>
      </Link>
    </div> 
  );
}
 
export default Buttons;
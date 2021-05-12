import { Link } from 'react-router-dom'

const Buttons = ({collection}) => {
  return ( 
    <div className="btn-container">
      <Link to={`/nouns/${collection}`}>
        <button>See</button>
      </Link>
      <Link to={`/nouns/${collection}/en-de`}>
        <button>en-de</button>
      </Link>
      <Link to={`/nouns/${collection}/de-en`}>
        <button>de-en</button>
      </Link>
      <Link to={`/nouns/${collection}/edit`}>
        <button>edit</button>
      </Link>
    </div> 
  );
}
 
export default Buttons;
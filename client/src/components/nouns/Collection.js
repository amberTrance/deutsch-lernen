import { useParams } from "react-router";

const Collection = () => {
  const { collection } = useParams()

  return ( 
    <h1>Collection: {collection}</h1>
  )
}
 
export default Collection;
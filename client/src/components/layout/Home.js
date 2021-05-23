const Home = () => {
  return ( 
    <div className="center">
      <h2 style={{marginBottom: "15px"}}>Welcome to my App!</h2>
      <p className="para">
        I have built this app to facilitate my german learning process.
        At the present moment, it can be used to create, edit and delete
        collections of nouns, and then test your memory by translating 
        the words you have introduced.</p>
      <p className="para">
        Unlike flashcards which give you 
        words at random, sometimes making the learning process slow, this 
        app gives you the posibility to test yourself only on the words you
        wish to be tested on.
      </p>
      <p className="para">
        This app will be extended in the future to include verb conjugation,
        adjectives, etc.
      </p>
    </div>
   )
}
 
export default Home;
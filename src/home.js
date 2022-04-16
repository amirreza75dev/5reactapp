import { Link } from "react-router-dom"

const Home = () => {
    return ( 
        <div className="home-page">
            <h1>5 react basics projects</h1>
            <Link to ='/question'>question project</Link>
            <Link to ='/birthday'>Birthday project</Link>
            <Link to ='/tour'>tour project</Link>
            <Link to ='/menu'>reviews project</Link>
            <Link to ='/reviews'>menu project</Link>


        </div>
     );
}
 
export default Home;
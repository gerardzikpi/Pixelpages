import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
            <h1 className='text-xl font-bold'>Book Lib </h1>
               <div>
                <Link to='/'>Home</Link>
                <Link to='/library'>Library</Link>
                </div>
        </nav>
    );
}
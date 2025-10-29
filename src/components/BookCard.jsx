import {Link} from 'react-router-dom';


export default function BookCard({title, author, cover}){
    return(
        <div className="border rounded-md p-4  hover: shadow-lg transition">
            <img src={cover} alt={`${title} cover`} className="w-full h-48 object-cover mb-4 rounded"/>
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="text-gray-700">by {author}</p>
        </div>
    );
}
import {useState} from "react";
import {useEffect} from "react";
import books from "../components/Library";


export default function BookContent(){
    const [bookContent,setBookContent] = useState('');
    return(
        <>
            <h2>{books.title}</h2>
            <p><i>Writtten By:{books.author}</i></p>
            <hr/>
            <div>
                {/* import bookcontent from the api */}
            </div>
        </>
    )
}
import {useState} from "React";


export default function Theme(){
    const [darkTheme,setDarkTheme] = useState(false);   
    function handleClick(){
        setDarkTheme(prev => !prev)
    }   
    return (
        onClick={handleClick}    
        <button className='bg-black text-white'></button>
    )
}
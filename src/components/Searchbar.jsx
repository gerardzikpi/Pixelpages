export default function SearchBar({query,SetQuery}){   
    return(
        <div>
            <input type='search' value={query} onChange={ (e) => SetQuery(e.target.value)} placeholder='Search books...' className='border p-2 w-full mb-4 rounded'/>
        </div>
    )
}
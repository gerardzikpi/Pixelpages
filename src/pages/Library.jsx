import { useState} from 'react';
import SearchBar from '../components/Searchbar';
import BookCard from "../components/BookCard";
import Header from "../components/Header";

const books = [{title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg"},
{title: "To Kill a Mockingbird", author: "Harper Lee", cover: "https://images-na.ssl-images-amazon.com/images/I/81OtwF1XWkL.jpg"},
{title: "1984", author: "George Orwell", cover: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg"},
{title: "Pride and Prejudice", author: "Jane Austen", cover: "https://images-na.ssl-images-amazon.com/images/I/81vg6qJdGDL.jpg"},
{title: "The Catcher in the Rye", author: "J.D. Salinger", cover: "https://images-na.ssl-images-amazon.com/images/I/71Q1Iu4suSL.jpg"},
{title: "The Hobbit", author: "J.R.R. Tolkien", cover: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg"},];

export default function Library(){
    const [query, setQuery] = useState(null);
    const filteredBooks = books.filter(book => 
        books.title.toLowerCase().includes(query.toLowerCase()) || 
        books.author.toLowerCase().includes(query.toLowerCase())
    );
    return(
        <>
            <div className="p-8 grid grid-cols-3 gap-4">
                <SearchBar query={query} SetQuery={setQuery} />
                <div className='grid grid-cols-2 gap-4 mt-4'>
                {filteredBooks.length >0 ?(
                    filteredBooks.map((book, index) => (
                        <BookCard key={index} title={book.title} author={book.author} cover={book.cover} />
                ) )
                )
                  :(<p className='text-gray-500 col-span-2'> No Books found </p>
                ) }
                </div>
                <h1 className='text-blue-500'>Library</h1>
                <p>Hello! this is the library page </p>
            </div>
        </>
    );
}
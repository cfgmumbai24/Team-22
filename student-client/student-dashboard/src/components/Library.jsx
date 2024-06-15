import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div>
    <div className='fixed top-0 left-0 w-full z-50'>
    <Navbar />
    </div>
    <div className="container mx-auto my-20 p-8 rounded-md shadow-md" style={{ overflow: "auto", height: "87vh" }}>
    <h1 className="text-3xl font-bold text-center mb-4">Resource Library</h1>

      <div className="mb-4 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search books [name, author, topic]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow px-4 py-2 border rounded-md ml-4"
          style={{ width: "40vw" }}
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md"
          style={{ width: "12vw" }}
        >
          Search
        </button>
      </div>
      <div>
        {books.map((book) => (
          <div key={book.id} className="mb-8">
            <div className="flex flex-col p-4 rounded-md shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail || 'No image available'}
                  alt={book.volumeInfo.title}
                  className="w-32 h-40 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold mb-2">{book.volumeInfo.title}</h3>
                  <p className="text-sm mb-2 text-justify">
                    {book.volumeInfo.description
                      ? `${book.volumeInfo.description.split(' ').slice(0, 110).join(' ')}...`
                      : 'No description available'}
                  </p>
                  <div className="mt-auto">
                    <a
                      href={book.volumeInfo.infoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-green-500 px-4 py-1 rounded-md text-sm inline-block"
                      style={{ textDecoration: "none" }}
                    >
                      View on Google Books
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Library;

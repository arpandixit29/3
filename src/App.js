import React, { useState } from 'react';
import './App.css';

const App = () => {
  // 1. State for the list of books
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ]);

  // 2. State for form inputs and search
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Function to add a new book
  const addBook = () => {
    if (newTitle && newAuthor) {
      const newBook = {
        id: Date.now(), // Unique ID based on time
        title: newTitle,
        author: newAuthor
      };
      setBooks([...books, newBook]);
      setNewTitle(''); // Clear inputs
      setNewAuthor('');
    }
  };

  // Function to remove a book
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  // Logic to filter books based on search input
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>

      {/* Input Section */}
      <div className="card input-card">
        <input 
          type="text" 
          placeholder="Search books..." 
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="add-row">
          <input 
            type="text" 
            placeholder="Book Title" 
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Author" 
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />
          <button className="add-btn" onClick={addBook}>Add Book</button>
        </div>
      </div>

      {/* Book List Section */}
      {filteredBooks.map(book => (
        <div key={book.id} className="card book-card">
          <div className="book-info">
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
          </div>
          <button className="remove-btn" onClick={() => removeBook(book.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default App;

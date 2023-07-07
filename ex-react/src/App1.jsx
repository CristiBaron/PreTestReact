import React, { useState } from "react";

const booksData = [
  {
    title: "Il Signore degli Anelli",
    author: "J.R.R. Tolkien",
    imageCover:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJZaN4imRJOoqV8dTvdeQg2KXCOQ9SvCuMFWVjwzMjFesGmgAJzjm4EaN_y-rcA_G6wl2uTx9x&usqp=CAc",
    price: 20.99,
  },
  {
    title: "Harry Potter e la Pietra Filosofale",
    author: "J.K. Rowling",
    imageCover:
      "https://m.media-amazon.com/images/I/813azBbGnnL._AC_UF1000,1000_QL80_.jpg",
    price: 15.99,
  },
  {
    title: "1984",
    author: "George Orwell",
    imageCover:
      "https://m.media-amazon.com/images/I/81StSOpmkjL._AC_UF1000,1000_QL80_.jpg",
    price: 12.99,
  },
  {
    title: "Harry Potter e la Camera dei Segreti",
    author: "J.K. Rowling",
    imageCover:
      "https://m.media-amazon.com/images/I/71CUTxwwt6L._AC_UF1000,1000_QL80_.jpg",
    price: 16.99,
  },
  {
    title: "Il Codice da Vinci",
    author: "Dan Brown",
    imageCover: "https://m.media-amazon.com/images/I/51d9puvpOkL.jpg",
    price: 18.99,
  },
  {
    title: "Il Signore degli Anelli: Le Due Torri",
    author: "J.R.R. Tolkien",
    imageCover:
      "https://www.tolkien.it/wp-content/uploads/2017/05/Il-Signore-degli-Anelli-Vol.-2-Le-due-Torri.jpg",
    price: 21.99,
  },
  {
    title: "1984",
    author: "Aldous Huxley",
    imageCover: "https://m.media-amazon.com/images/I/51O+ajY0ukL.jpg",
    price: 14.99,
  },
  {
    title: "Il Codice da Vinci",
    author: "Kate Mosse",
    imageCover:
      "https://1.bp.blogspot.com/-uBF_Rw0HEro/T4ULEiZDEhI/AAAAAAAAG4g/C0Z5liAZpFw/s1600/ottavo%2Barcano_ross.jpg",
    price: 17.99,
  },
];

const Header = () => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <img src="/public/img/book-stack.png" className="w-14" alt="" />
      <h1 className="text-4xl font-bold ">Online Bookstore</h1>
      <img src="/public/img/lesson.png" className="w-14" alt="" />
    </div>
  );
};

const Footer = () => {
  return <p>© 2023 - Online Bookstore</p>;
};

const Main = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSearch = () => {
    const filteredBooks = booksData.filter(
      (book) =>
        book.title.toLowerCase().includes(title.toLowerCase()) ||
        book.author.toLowerCase().includes(author.toLowerCase())
    );
    setSearchResults(filteredBooks);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex gap-10">
        <div className="flex flex-col gap-3 ">
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Book title"
            className="rounded-md text-center border-2 hover:border-cyan-300 hover:bg-slate-50"
          />
          <input
            type="text"
            value={author}
            onChange={handleAuthorChange}
            placeholder="Author of the book"
            className="rounded-md text-center border-2 hover:border-cyan-300 hover:bg-slate-50"
          />
        </div>
        <button onClick={handleSearch}>
          <img
            src="/public/img/searching.png"
            className="w-14 hover:animate-pulse"
            alt=""
          />
        </button>
      </div>
      <div className=" flex flex-row gap-11 items-center w-10/12 justify-center">
        {searchResults.length > 0 ? (
          searchResults.map((book, index) => (
            <div key={index} className="w-1/2">
              <h3>{book.title}</h3>
              <p>Autore: {book.author}</p>
              <img src={book.imageCover} alt={book.title} />
              <p>Prezzo: €{book.price}</p>
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

const App1 = () => {
  return (
    <div className="flex justify-center flex-col gap-9 items-center h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-100 via-cyan-400 to-zinc-100">
      <img src="/public/img/sun-glasses.png" className="w-64" alt="" />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App1;

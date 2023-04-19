const BookCard = ({ book, setBook }) => {
    return (
        <>
            {book &&
                <div 
                onClick={()=>{
                    setBook(book);
                }}
                className="mx-4 my-6 p-2 rounded-sm shadow grid grid-cols-4 bg-gradient-to-r from-secondary to-lprime cursor-pointer hover:shadow">
                    <div className="col-span-1">
                        <img src={book.formats["image/jpeg"]} alt="img" />
                    </div>
                    <div className="col-span-3">
                        <p className="text-lg md:text-xl text-dprime ml-1 mb-2">
                            <strong>{book.title}</strong>
                        </p>
                        <div className="text-md text-slate ml-1 mb-2">
                            <strong>Authors</strong> : {book.authors.map(author => <span key={author.name}>{author.name}</span>)}
                        </div>
                        <div className="text-md text-slate ml-1 mb-2">
                            <strong>Languages</strong> : {book.languages.map(language => <span key={language}>{language}</span>)}
                        </div>
                    </div>

                </div>
            }
        </>
    );
}

export default BookCard;
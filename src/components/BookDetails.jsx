const BookDetails = ({ book, setBook }) => {


    return (
        <div className="md:w-3/4 bg-secondary rounded-xl mx-auto p-2">

            {/* book details  */}
            <div className="w-fit m-2 shadow-xl">
                <img src={book.formats["image/jpeg"]} alt="cover" />
            </div>
            <div className="my-5">
                <p className="text-4xl md:text-5xl text-dprime ml-2 mb-2 font-semibold">
                    {book.title}
                </p>
                <div className="text-xl text-slate ml-2 mb-2">
                    <strong>Authors</strong> : {book.authors.map(author => <span key={author.name}>{author.name}</span>)}
                </div>
                <div className="text-xl text-slate ml-2 mb-2">
                    <strong>Languages</strong> : {book.languages.map(language => <span key={language}>{language}</span>)}
                </div>
                <div className="text-xl text-slate ml-2 mb-2">
                    <strong>Total Downloads</strong> : {book.download_count}
                </div>
                <div className="text-xl text-slate ml-2 mb-2">
                    <strong>Copyright</strong> : {book.copyright ? "True" : "False"}
                </div>
                <div className="text-xl text-slate ml-2 mb-2">
                    <strong>Type</strong> : {book.media_type}
                </div>
            </div>

            {/* download  */}
            <div className="md:w-3/4 bg-white p-1 rounded-xl shadow-lg border border-primary">

                <span className="text-3xl md:text-4xl text-dprime ml-2 font-semibold">Downloads</span>

                <div className="flex flex-wrap justify-between border border-primary rounded-xl p-1 mt-2">
                    <span className="text-lg text-slate m-2 font-semibold">Mobipocket/ebook</span>
                    <a
                        className="px-3 py-2 rounded-xl border bg-dprime hover:bg-hprime text-white transition"
                        href={book.formats["application/x-mobipocket-ebook"]}
                    >Download</a>
                </div>

                <div className="flex flex-wrap justify-between border border-primary rounded-xl p-1 mt-1">
                    <span className="text-lg text-slate m-2 font-semibold">Epub</span>
                    <a
                        className="px-3 py-2 rounded-xl border bg-dprime hover:bg-hprime text-white transition"
                        href={book.formats["application/epub+zip"]}
                    >Download</a>
                </div>

            </div>

            {/* read  */}
            <div className="md:w-3/4 bg-white p-1 rounded-xl mt-3 shadow-lg border border-primary">
                <span className="text-3xl md:text-4xl text-dprime ml-2 font-semibold">Read</span>
                <div className="flex flex-wrap justify-between border border-primary rounded-xl p-1 mt-2">
                    <span className="text-lg text-slate m-2 font-semibold">Html/Text</span>
                    <a
                        className="px-3 py-2 rounded-xl border bg-dprime hover:bg-hprime text-white transition"
                        href={book.formats["text/html"]}
                    >Read</a>
                </div>
            </div>

        </div>
    );
    
}

export default BookDetails;
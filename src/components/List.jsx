import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import NotFound from './NotFound';

const List = ({ list, setUrl , setBook}) => {
    const [language, setLanguage] = useState(null);

    useEffect(()=>{
        setUrl(`http://gutendex.com/books/?page=1${language ? `&languages=${language}` : ''}`);
    }, [language])

    const handleChange = (e)=> {
        if(e.target.value === 'all'){
            setLanguage(null);
        }
        else{
            setLanguage(e.target.value);
        }
    }

    const handleClick = () => {
        setUrl("http://gutendex.com/books/?page=1");
    }

    return (
        <>
            {/* if there is no result then show this */}
            {!list.count &&
                <div>
                    <div 
                        className="bg-gradient-to-r from-dprime to-lprime text-white hover:bg-primary transition p-2 cursor-pointer"
                        onClick={handleClick}>
                    {"< Back"}</div>

                    <NotFound/>
                </div>}
            {/* header of list component  */}
            {list.count != 0 &&
                <div>
                    <div className="text-secondary m-3 mt-5 rounded-xl bg-primary p-2 text-4xl md:text-5xl text-center">Popular Books</div>
                    <div>
                        <select name="filter" onChange={handleChange} className="p-1 mx-3 md:text-xl rounded-md  bg-primary text-white hover:bg-hprime transition">
                            <option value="all">Select Language(all)</option>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="fi">Finnish</option>

                        </select>
                    </div>
                </div>
            }

            {/* list of cards */}
            {list.count != 0 && list.results.map(book =>
                <BookCard key={book.id} book={book} setBook={setBook} />
            )}

            {/* prev and next list buttons  */}
            {list.count != 0 && <div className="flex text-2xl mb-3 text-white mx-5 justify-between">
                    {list.previous &&
                        <div
                            className="navigate"
                            onClick={() => setUrl(list.previous)}
                        ><i className="arrow left"></i> Previous</div>}
                    {list.next &&
                        <div
                            className="navigate"
                            onClick={() => setUrl(list.next)}
                        >Next <i className="arrow right"></i></div>}
                </div>}

        </>
    );
}

export default List;
import { useState } from "react";
import getABook from "../utility/getABook";

const SideBar = ({ setBook, suggested, setSuggested }) => {
    const [isPending, setIsPending] = useState(false);

    const handleClick = () => {
        getABook(setSuggested, setIsPending);
    }
    
    
    return (
        <>
            {suggested &&
                <div
                    onClick={() => setBook(suggested)}
                    className="flex flex-col md:my-6 mx-2 bg-white rounded-lg"
                >
                    <div className="flex justify-center m-3">
                        <img src={suggested.formats["image/jpeg"]} alt="img" />
                    </div>
                    <div className="px-2 pb-3">
                        <p className="text-lg md:text-xl text-dprime ml-1 mb-2">
                            <strong>{suggested.title}</strong>
                        </p>
                        <div className="text-md text-slate ml-1 mb-2">
                            <strong>Authors</strong> : {suggested.authors.map(author => <span key={author.name}>{author.name}</span>)}
                        </div>
                        <div className="text-md text-slate ml-1 mb-2">
                            <strong>Languages</strong> : {suggested.languages.map(language => <span key={language}>{language}</span>)}
                        </div>
                    </div>
                </div>
            }

            {isPending 
            ? <button disabled className="m-3 px-3 py-2 rounded-xl bg-hprime text-white">Loading...</button>
            
            :<button onClick={handleClick} className="m-3 px-3 py-2 rounded-xl bg-primary text-white hover:bg-hprime transition duration-150 ease-in">Suggest me a random book</button>}

            {/* advance selection here based on language and catagory */}

        </>
    );
}

export default SideBar;
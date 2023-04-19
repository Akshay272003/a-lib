
import { useState } from "react";
const NavBar = ({ setUrl, setBook, setSuggested }) => {
    
    const [search, setSearch] = useState(null);

    const handleClick = (e) => {
        if(search === ''){
            return;
        }
        setUrl(`http://gutendex.com/books/?page=1${search ? `&search=${search}`:''}`);
        // document.getElementById('search').value= '';
        setSuggested(null);
        
    }

    return (
        <div className="">
            <div className="flex content-center justify-between p-2 bg-gradient-to-r from-primary to-dprime text-white">

                <span 
                className="text-3xl self-center md:text-5xl font-semibold cursor-pointer"
                onClick={()=>setBook(null)}
                >A-Lib
                </span>

                <div className="flex m-2">

                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)}
                        id="search"
                        className="rounded-xl border border-secondary p-2 text-xl  text-slate w-40 md:w-full" />

                    <svg
                        onClick={handleClick}
                        className="w-8 h-8 self-center cursor-pointer hover:text-slate ml-2"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                    </svg>


                </div>

            </div>
        </div>

    );
}

export default NavBar;
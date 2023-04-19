import NavBar from './components/NavBar';
import List from './components/List';
import useFetchAllBooks from './utility/useFetchAllBooks';
import Loading from './components/Loading';
import { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import BookDetails from './components/BookDetails';

function App() {
	const [list, setList] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [book, setBook] = useState(null);
	const [url, setUrl] = useState(`http://gutendex.com/books/?page=1`);
	const [suggested, setSuggested] = useState(null);

	useEffect(() => {
		useFetchAllBooks(setList, url, setIsPending);
	}, [url])

	return (
		<div className="App">
			<NavBar setUrl={setUrl} setBook={setBook} setSuggested={setSuggested}/>

			{
				book ?
					<div className='bg-lprime pb-4 px-1'>
						<div 
						onClick={()=>setBook(null)}
						className="text-lg bg-dprime text-white mb-6 cursor-pointer hover:text-primary transition duraation-200"
						>{"<Back to home..."}</div>

						<BookDetails book={book} setBook={setBook} />
					</div>
					:
					<div className="md:grid grid-cols-5">

						<div className="col-span-2 bg-gradient-to-r from-dsecond from-10% to-lprime p-3">
							<SideBar setBook={setBook} suggested={suggested} setSuggested={setSuggested} />
						</div>

						<div className="col-span-3">
							{isPending && <><Loading /></>}
							{list && <List list={list} setUrl={setUrl} isPending={isPending} setBook={setBook} />}
						</div>

					</div>
			}
		</div>
	)
}

export default App

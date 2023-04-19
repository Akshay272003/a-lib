import axios from 'axios';

const useFetchAllBooks = (setList, url, setIsPending) => {
    setIsPending(true);
    axios.get(url)
    .then(res => {
        setList(res.data);
        setIsPending(false);
    })
    .catch(err => {
        setIsPending(false);
        console.log(err.message);
    });
    
}

export default useFetchAllBooks;
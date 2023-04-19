import axios from 'axios';
const getABook = (setSuggested, setIsPending) => {
    setIsPending(true)
    const randomNumber = Math.floor(Math.random()*70470 + 1)
    axios.get(`http://gutendex.com/books/${randomNumber}`)
    .then(res => {
        setSuggested(res.data);
        setIsPending(false);

    })
    .catch(err => {
        console.log(err.message)
        setIsPending(false);
    });
}
 
export default getABook;
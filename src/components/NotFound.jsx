import Not_found from '../assets/404_.svg';

const NotFound = () => {
    return ( 
        <>
        <div className='flex justify-center my-6 mx-2'>
            <img className='svgss' src={Not_found} />
        </div>
        <div className='text-4xl text-center text-dprime'>No Results...</div>
        </>
     );
}
 
export default NotFound;
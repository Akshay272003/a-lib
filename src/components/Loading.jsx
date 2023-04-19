import Loading_svg from '../assets/loading.svg';

const Loading = () => {
    return ( 
        <>
        <div className='flex justify-center my-6 mx-2'>
            <img className='svgss' src={Loading_svg} />
        </div>
        <div className='text-4xl text-center text-dprime'>Loading...</div>
        </>
     );
}
 
export default Loading;
import Ticket from '../images/ayanokoji_image.png'
const Home = () => {
    return(
        <>
        <div className="text-center">
            <h2>Find a movie</h2>
            <hr />
            <img className='w-50 p-3' src={Ticket} alt="idk" />
        </div>
        </>
    )
}

export default Home;
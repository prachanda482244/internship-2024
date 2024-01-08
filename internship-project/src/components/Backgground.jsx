import backgroundImage from '../assets/images/background.jpg'
import Banner from './Banner'
const Background = () => {
    return (
        <div className='relative' >
            <div className='hidden mt-6 h-28  -z-10 max-w-7xl mx-auto sm:block'>
                <Banner />
            </div>
            <div className='absolute z-0 top-40'>
                <img className='w-[100vw] object-cover' src={backgroundImage} alt="background" />
            </div>
        </div>
    )
}

export default Background

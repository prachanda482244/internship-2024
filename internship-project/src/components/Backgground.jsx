import banner from '../assets/images/cropped-cropped-hrit-logo-2.png'
import backgroundImage from '../assets/images/background.jpg'
const Background = () => {
    return (
        <div className='relative' >
            <div className='mt-6 h-28 -z-10 max-w-7xl mx-auto'>
                <img className='-z-40' src={banner} alt="banner" />
            </div>
            <div className='absolute z-0 top-40'>
                <img className='w-[100vw] object-cover' src={backgroundImage} alt="background" />
            </div>
        </div>
    )
}

export default Background

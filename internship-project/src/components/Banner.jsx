import banner from '../assets/images/cropped-cropped-hrit-logo-2.png'
const Banner = ({ height, width }) => {
    return (
        <div >
            <img className='-z-40' height={height} width={width} src={banner} alt="banner" />
        </div>
    )
}

export default Banner

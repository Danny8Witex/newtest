import './hero.css'
import photo from './photo.jpg'

function Hero() {
    return (
        <div className='hero-section'>
            <img src={photo} className='img2' />
            <div className='hero-text'>
                Watch something incredible
            </div>
        </div>
    )
}

export default Hero;
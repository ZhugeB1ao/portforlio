import headerImg from '../assets/img/header-img.svg'
import '../assets/style/banner.css'
import {CircleArrowRight} from 'lucide-react';

const Banner = () => {

    return (
        <header>
            <div className="banner-container-1">
                <h4>Welcome to my Portfolio</h4>
                <h1>{`Hi! I'm Gia Bao`}</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer
                    took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="connect-content">
                    <h4>Let's connect</h4>
                    <CircleArrowRight className="c-arr-r-icon"/>
                </div>
            </div>

            <div className="banner-container-2">
                <img src={headerImg} alt="This is a header image"/>
            </div>
        </header>
    )
}

export default Banner;
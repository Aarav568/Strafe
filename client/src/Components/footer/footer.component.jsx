import logo from '../../images/logo.png'
import social from '../../images/social.png'
const Footer = () => {
    return (
        <div style={{ minHeight: "300px" }} className="w-full py-20 bg-p" >
            <div className="mx-auto flex justify-around items-center ">
                <div className='text-white text-sm' >
                    <span className='text-lg underline' >Quick Links</span>
                    <div>
                        <a href="#">Home</a>
                    </div>
                    <div>
                        <a href="#">Get Started</a>
                    </div>
                    <div>
                        <a href="#">Join Now</a>
                    </div>
                    <div>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <div className='text-white text-sm' >
                    <span className='text-lg underline' >For Collaborators</span>
                    <div>
                        <a href="#">Out Policy</a>
                    </div>
                    <div>
                        <a href="#">Public Press</a>
                    </div>
                    <div>
                        <a href="#">Vision</a>
                    </div>
                </div>
                <div>
                    <a href="#" className="cursor-pointer">
                        <img src={logo} alt="" height="90" width="220" />
                    </a>
                    <span className='text-white' >Join the Noise</span>
                </div>
                <div>
                    <img src={social} alt="" width="250" height="250" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
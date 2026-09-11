
import Logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <div>
            <nav className="bg-cyan-100 text-white py-4 container">
                <div className=" mx-20 flex justify-between ">
                    <img src={Logo} alt="Logo" />
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-pink-500 hover:text-cyan-700">Home</a></li>
                        <li><a href="#" className="text-black hover:text-cyan-700">Technologies</a></li>
                        <li><a href="#" className="text-black hover:text-cyan-700">Projects</a></li>
                        <li><a href="#" className=" text-black hover:text-cyan-700">About</a></li>
                        <li><a href="#" className=" text-black hover:text-cyan-700">Contact</a></li>
                    </ul>
                    <ul className="flex space-x-4" mx-auto>
                        <li><a href="#" className="text-black hover:text-cyan-700">Sign In</a></li>
                        <li><button className="btn btn-active btn-secondary border-radius-rounded">Sign Up</button> </li>
                    </ul>
                </div>

            </nav>

        </div>
    );
};

export default Nav;              

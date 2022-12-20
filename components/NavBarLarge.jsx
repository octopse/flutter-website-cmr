import Image from 'Next/Image'
import logo from '../public/images/9.svg'
import searchIcon from '../public/images/29.svg'


function NavBarLarge(){
    return(
        <div className="w-4/5 py-4 mx-auto flex justify-between items-center ">
            <Image src={logo} />
            <div className="flex items-center space-x-4 text-xl ">
                <a href="#">Events</a>
                <a href="#">Forum</a>
                <a href="#">Articles</a>
                <a href="#">Podcasts</a>
                <a href="#">Jobs</a>
                <div className="flex items-center space-x-6 text-base">
                    <div className="flex justify-center items-center bg-green-100 p-2 rounded-full border-2 border-green-200">
                        <Image src={searchIcon} />
                    </div>
                    <a href="#" className="p-2 px-4 bg-green-900 text-white rounded-md">Login</a>
                    <a href="#" className="text-green-900">Signup</a>
                </div>
            </div>
        </div>
    );

}

export default NavBarLarge
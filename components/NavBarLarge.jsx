import Image from 'Next/Image'
import logo from '../public/images/9.svg'
import searchIcon from '../public/images/29.svg'


function NavBarLarge(){
    return(
        <div className="w-4/5 py-4 mx-auto flex justify-between items-center ">
            <Image src={logo} />
            <div className="flex items-center space-x-4 text-lg ">
                <a href="#">Events</a>
                <a href="#">Forum</a>
                <a href="#">Articles</a>
                <a href="#">Podcasts</a>
                <a href="#">Jobs</a>
                <div className="flex items-center space-x-6 text-base font-medium">
                    <div className="flex justify-center items-center bg-brand-light opacity-8 p-2 rounded-full border-2 border-green-100">
                        <Image src={searchIcon} />
                    </div>
                    <a href="#" className="p-2 px-4 bg-brand text-white rounded-md hover:opacity-90">Login</a>
                    <a href="#" className="text-brand p-2 px-4 hover:border-2 hover:border-brand hover:bg-brand-light hover:rounded-md">Sign up</a>
                </div>
            </div>
        </div>
    );

}

export default NavBarLarge
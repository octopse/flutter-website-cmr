import NavBarLarge from "./NavBarLarge"

function NavBar(){
    return( 
        <nav className="w-full border-b-2 border-gray-100 fixed top-0 left-0 z-50 bg-white max-w-[1600px]">
            <NavBarLarge />
        </nav>
    )
}

export default NavBar
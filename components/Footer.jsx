import Image from 'next/image'

import imgFooter1 from '../public/images/12.svg'
import imgFooter2 from '../public/images/25.svg'
import imgFooter3 from '../public/images/27.svg'
import imgFooter4 from '../public/images/10.svg'
import imgFooter5 from '../public/images/26.svg'
import imgFooter6 from '../public/images/28.svg'
import imgFooter7 from '../public/images/30.svg'


function Footer(){
    return(
        <footer className="w-4/5 mx-auto mt-8">
            <div className="flex justify-between p-4 bg-gray-100 rounded-2xl">
                <div className="w-1/4">
                    <h3 className="text-2xl font-semibold mb-4">Resources</h3>
                    <p className="opacity-80 cursor-pointer">Become a Sponsor</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">Call for Speakers</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">About</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">Podcasts</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">Jobs</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">Branding</p>
                    <div className="bg-black flex space-x-2 rounded-md p-2 mt-2 w-fit cursor-pointer"><img src={imgFooter1.src} className="w-auto h-6" /><span className="text-white"> English</span></div>
                    <div className="flex space-x-2 mt-4">
                       <div className="flex items-center font-medium space-x-2 bg-white w-fit p-2 rounded-md cursor-pointer border-2 border-gray-100 hover:border-black">
                            <Image src={imgFooter2} />
                            <span className="">Slack</span>
                        </div>
                        <div className="flex items-center font-medium space-x-2 bg-white w-fit p-2 rounded-md cursor-pointer border-2 border-gray-100 hover:border-black">
                            <Image src={imgFooter3} />
                            <span>Telegram</span>
                        </div>
                    </div>
                </div>
                <div className="w-1/4">
                    <h3 className="text-2xl font-semibold mb-4">Learn Flutter</h3>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">Learning Journey</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">codelabs</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">Samples</p>
                </div>
                <div className="w-1/4">
                    <h3 className="text-2xl font-semibold mb-4">Legal</h3>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">Terms and services</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">Code of conduct</p>
                    <p className="opacity-80 cursor-pointer hover:opacity-100">FAQ</p>
                </div>
                <div className="w-1/4">
                    <h3 className="text-2xl font-semibold mb-4">Join Us</h3>
                    <p className="opacity-80">Join our newsletter to receive tutorials, articles and podcasts on web design and programming.</p>
                    <form className="flex w-full mt-4 space-x-2">
                        <input type="text" placeholder="Your email address" className="p-2 rounded-md border-2 border-gray-200 outline-none"/>
                        <input type="submit" value="Sign up" className="p-2 bg-brand text-white rounded-md cursor-pointer hover:bg-none hover:opacity-80" />
                    </form>
                </div>
            </div>
            <hr className="mt-4 w-full border border-gray-200" />
            <div className="mt-4 flex justify-between mb-4">
                <p className="font-medium">&copy; 2022 - 2023 Flutter Cameroun. All rights reserve Design by
                    <a href="#" className="text-brand"> MBAGNA Johan</a> (some adjustment by me)
                </p>
                <div className='space-x-2'>
                    <a href="#"><Image src={imgFooter4}/></a>
                    <a href="#"><Image src={imgFooter5}/></a>
                    <a href="#"><Image src={imgFooter6}/></a>
                    <a href="#"><Image src={imgFooter7}/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import Link from 'next/link'
import Image from 'next/image'

import imgPartner1 from '../public/images/14.svg'
import imgPartner2 from '../public/images/15.svg'
import imgPartner3 from '../public/images/8.svg'
import imgPartner4 from '../public/images/16.svg'
import imgPartner5 from '../public/images/5.svg'
import imgPartner6 from '../public/images/datk.png'

function Partners(){
    return(
        <section className="mt-12 w-4/5 mx-auto p-8 bg-black text-white rounded-xl flex">
            <div className="w-3/4 pr-4">
                <h2 className="text-3xl font-semibold">Partners</h2>
                <p className="opacity-80 mb-8">A very big thank you to all our partners for their continued partnership.
                    If you are interested in being showcased throughout Flutter Cameroon, 
                    contact <span className="text-brand-yellow">sponsor@fluttercm.dev</span> to discuss sponshorship opportunities.
                </p>
                <Link href="#">
                    <a className="p-2 border-2 text-brand-yellow border-brand-yellow rounded-md hover:bg-brand-yellow hover:text-black">Become a partner</a>
                </Link>
            </div>
            <div className="w-1/4 flex flex-col justify-between">  
                <div className="flex justify-between">
                    <Image src={imgPartner1}/>
                    <Image src={imgPartner2}/>
                </div>
                <div className="flex justify-around -mt-4">
                    <Image src={imgPartner3}/>
                    <Image src={imgPartner4}/>
                </div>
                <div className="flex justify-between mt-2">
                    <a href="https:www.instagram.com/datk.creative"><img src={imgPartner6.src} className="w-auto h-8" alt="datk Creative logo.@datk.creative" /></a>
                    {/* <div className="h-20 w-auto bg-blue-800 relative overflow-hidden">
                    </div> */}
                    <Image src={imgPartner5}/>
                </div>
            </div>
        </section>
    )
}

export default Partners
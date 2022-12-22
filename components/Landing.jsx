import Link from 'next/Link'
import Image from 'next/image'
import LandingStat from "./LandingStat"

import img1 from '../public/images/1.jpeg'
import img2 from '../public/images/2.jpeg'
import img3 from '../public/images/3.jpeg'
import img4 from '../public/images/4.jpeg'

function Landing(){
    return(
        <section className="flex">
            {/* Left side */}
            <div className="w-1/2 space-y-4">
                <h1 className="text-6xl font-bold">A commuinty open to everyone</h1>
                <p className="leading-tight font-medium opacity-60 ">Flutter Cameroon is an initiative to focus the efforts of many 
                    developers in and around Cameroon to learn, shate and become 
                    produtive using Flutter.
                </p>
                <div className="space-x-2">
                    <Link href="#">
                        <a className="bg-brand text-white p-2 rounded-md">Join the 237community</a></Link>
                    <Link href="#">
                        <a className="border-2 border-brand text-brand font-medium p-2 rounded-md">Visit forum</a>
                    </Link>
                </div>
                <div className="space-x-4 flex">
                <LandingStat number="106k" title="Members on Meetup" />
                <LandingStat number="127k" title="Stars on Github" />
                <LandingStat number="151.4k" title="Followers on Twitter" />
                </div>
            </div>
            {/* Right side */}
            <div className="w-1/2 flex items-center justify-end">
                <div className="w-[30%] h-[500px] relative rounded-full overflow-hidden">
                    <Image src={img1} alt="image 1" layout="fill" objectFit="cover"/>
                </div>
                <div className="w-[30%] h-[1000px]">
                    <div className="w-full h-1/2 relative rounded-full overflow-hidden">
                        <Image src={img2} alt="image 2" layout="fill" objectFit="cover" />
                    </div>
                    <div className="w-full h-1/2 relative rounded-full overflow-hidden">
                        <Image src={img3} alt="image 3" layout="fill" objectFit="cover" />
                    </div>
                </div>
                <div className="w-[30%] h-[500px] relative rounded-full overflow-hidden">
                    <Image src={img4} alt="image 4" layout="fill" objectFit="cover" />
                </div>
            </div>
        </section>
    )
}

export default Landing
import Link from 'next/Link'
import LandingStat from "./LandingStat"

function Landing(){
    return(
        <section>
            {/* Left side */}
            <div className="w-1/2 space-y-4">
                <h1 className="text-6xl font-bold">A commuinty open to everyone</h1>
                <p className="leading-tight">Flutter Cameroon is an initiative to focus the efforts of many 
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
            </div>
            <div className="space-x-4 flex">
                <LandingStat number="106k" title="Members on Meetup" />
                <LandingStat number="127k" title="Stars on Github" />
                <LandingStat number="151.4k" title="Followers on Twitter" />
            </div>
            {/* Right side */}
            <div>
                
            </div>
        </section>
    )
}

export default Landing
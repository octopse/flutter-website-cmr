import Link from 'next/link'

import EventsCard from './EventsCard'

import imgEvent1 from '../public/images/21.png'
import imgEvent2 from '../public/images/22.png'
import imgEvent3 from '../public/images/24.png'
import imgEvent4 from '../public/images/23.png'


function Events(){
    return(
        <section className="w-4/5 mx-auto mt-16">
            <h2 className="text-6xl font-bold">Community events</h2>
            <p className="leading-tight font-medium opacity-60 w-3/5">Find out about all the virtual and physiacl events organized by the different communities in each city. 
                Attend events hosted by the global Flutter community and continue to learn more about Flutter.
            </p>
            <div className="my-8">
                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <EventsCard image={imgEvent1} title="Flutter at Google I/O 2022" detail="Dig into Flutter's announcements from I/O, including Flutter 3."/>
                    </div>
                    <div className="w-1/2 pt-4">
                        <EventsCard image={imgEvent2} title="FlutterFestival Cameroon" detail="Today is the big day of our #FlutterFestival Cameroon. 
                                We expect you massively between 13h and 17h at @ActivSpaces Douala."/>
                    </div>
                </div>
                <div className="flex space-x-4 mt-4">
                    <div className="w-1/3">
                        <EventsCard image={imgEvent3} title="Flutter Update: App Monetization" detail="Watch Flutter UPdate to get the latest news
                                about updates to out monetization features."/>
                    </div>
                    <div className="w-2/3">
                        <EventsCard image={imgEvent4} title="Flutter Interact 2019" detail="Watch Keynotes and Sessions from Flutter Interract in 2019 and check out the photo gallery to see who was there!"/>
                    </div>
                </div>
            </div>
            <Link href="#">
                <a className="p-2 px-12 text-brand rounded-md border-2 border-brand font-medium hover:bg-brand hover:text-white">See all events</a>    
            </Link>

        </section>
    )
}

export default Events
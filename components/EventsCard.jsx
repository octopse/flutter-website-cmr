import Image from 'next/image'


function EventsCard({image, title, detail}){
    return(
        <>
        <Image src={image} />
        <div className="mt-4">
            <h3 className="font-semibold text-3xl">{title}</h3>
            <p className="font-medium opacity-60">{detail}</p>
        </div>
        </>
    )
}
export default EventsCard
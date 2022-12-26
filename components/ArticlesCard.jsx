

function ArticlesCard({title, image}){
    return(
        <div className="p-4 w-full h-full bg-no-repeat bg-left-top bg-cover rounded-xl" style={{backgroundImage: `url(${image.src})`}}>
            <h3 className="text-white font-semibold">{title}</h3>
        </div>
    )
}

export default ArticlesCard
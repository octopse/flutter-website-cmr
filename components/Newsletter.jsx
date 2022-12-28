import bgImage from '../public/images/31.svg'


function Newsletter(){
    return(
        <section className="py-8 bg-brand text-white mt-16 flex flex-col items-center justify-center" style={{backgroundImage: `url(${bgImage.src})`}}>
            <form className="flex flex-col items-center justify-center">
                <h2 className="text-5xl">Join our newsletter</h2>
                <p className="font-light opacity-80">Join our newsletter to receive tutorials, article and podcasts on web design and programming.</p>
                <div className="flex w-full space-x-2 px-16 mt-4">
                    <input type="text" placeholder="Enter your email address" className="p-2 w-5/6 rounded-md"/>
                    <input type="submit" value="Sign up" className="bg-green-500 text-brand rounded-md p-2 w-1/6 cursor-pointer hover:bg-none hover:border-2 hover:border-green-500" />
                </div>
            </form>
        </section>
    )
}

export default Newsletter
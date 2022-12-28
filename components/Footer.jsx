


function Footer(){
    return(
        <footer className="w-4/5 mx-auto mt-8">
            <div className="flex justify-between p-4">
                <div className="w-1/4">
                    <h3 className="text-2xl font-semibold mb-4">Resources</h3>
                    <p>Become a Sponsor</p>
                    <p>Call for Speakers</p>
                    <p>About</p>
                    <p>Podcasts</p>
                    <p>Jobs</p>
                    <p>Branding</p>
                    <p>#DROP DOWN MENU#</p>
                    <div>
                        <span>Slack</span>
                        <span>Telegram</span>
                    </div>
                </div>
                <div className="w-1/4">
                    <h3 className="text-2xl font-semibold mb-4">Learn Flutter</h3>
                    <p>Learning Journey</p>
                    <p>codelabs</p>
                    <p>Samples</p>
                </div>
                <div className="w-1/4">
                    <h3 className="text-2xl font-semibold mb-4">Legal</h3>
                    <p>Terms and services</p>
                    <p>Code of conduct</p>
                    <p>FAQ</p>
                </div>
                <div className="w-1/4">
                    <h3 className="text-2xl font-semibold mb-4">Join Us</h3>
                    <p>Join our newsletter to receive tutorials, articles and podcasts on web design and programming.</p>
                    <form className="flex w-full mt-4 space-x-2">
                        <input type="text" placeholder="Your email address" className="p-2 rounded-md border-2 border-gray-200"/>
                        <input type="submit" value="Sign up" className="p-2 bg-brand text-white rounded-md cursor-pointer hover:bg-none hover:opacity-80" />
                    </form>
                </div>
            </div>
            <hr className="mt-4 w-full border border-gray-200" />
            <div className="mt-4 flex justify-between">
                <p>&copy; 2022 - 2023 Flutter Cameroun. All rights reserve Design by
                    <a href="#" className="text-brand"> MBAGNA Johan</a> (some adjustment by me)
                </p>
                <p>#icons#</p>
            </div>
        </footer>
    )
}

export default Footer
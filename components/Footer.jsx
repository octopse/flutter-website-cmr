


function Footer(){
    return(
        <footer className="w-1/5 mx-auto">
            <div>
                <div>
                    <h3>Resources</h3>
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
                <div>
                    <h3>Learn Flutter</h3>
                    <p>Learning Journey</p>
                    <p>codelabs</p>
                    <p>Samples</p>
                </div>
                <div>
                    <h3>Legal</h3>
                    <p>Terms and services</p>
                    <p>Code of conduct</p>
                    <p>FAQ</p>
                </div>
                <div>
                    <h3>Join Us</h3>
                    <p>Join our newsletter to receive tutorials, articles and podcasts on web design and programming.</p>
                    <form className="flex w-full">
                        <input type="text" placeholder="Your email address" className="p-2 rounded-md border border-gray-400"/>
                        <input type="submit" value="Sign up" className="p-2 bg-brand text-white rounded-md cursor-pointer hover:bg-none hover:opacity-80" />
                    </form>
                </div>
            </div>
            <hr className="w-full border-2 border-gray-400" />
            <div>
                <p>&copy 2022 - 2023 Flutter Cameroun. All rights reserve Design by 
                    <a href="#" className="text-brand">MBAGNA Johan</a> (personally made some modifications)
                </p>
                <p>#icons#</p>
            </div>
        </footer>
    )
}

export default Footer
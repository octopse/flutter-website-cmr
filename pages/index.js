import Head from 'next/head'
import Articles from '../components/articles'
import Landing from '../components/Landing'
import Partners from '../components/Partners'
import Events from '../components/Events'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import bgImage from '../public/images/6.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Flutter Cameroon</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/images/11.svg" />
      </Head>

      <main className="w-full mx-auto bg-contain bg-right-top bg-no-repeat" style={{backgroundImage: `url(${bgImage.src})`}}>
        <Landing />
        <Partners />
        <Articles />
        <Events />
        <Newsletter />
        <Footer />

      </main>
    </>
  )
}

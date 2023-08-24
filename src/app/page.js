import Image from 'next/image'
import Layout from './component/Layout/layout'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Blog from './component/Blog/Blog'
import Partners from './component/Partners/Partners'
import Newsletter from './component/NewsLetter/Newsletter'
import Agency from './component/Agency/Agency'
import Team from './component/Team/Team'

export default function Home() {
  return (
    <>
    <Layout>
      <Hero/>
      <About/>
      <Agency/>
      <Team/>
      <Blog/>
      <Partners/>
      <Newsletter/>
    </Layout>
    
      
    </>
  )
}

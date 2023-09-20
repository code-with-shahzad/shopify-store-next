import Navbar from './navbar'
import Footer from './footer'
 
export const Layout = ({ children }: any)=> {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
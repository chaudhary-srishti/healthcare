import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default function Layout({ children }: any) {
    return (
      <>
        <div className='sticky top-0 left-0 right-0' style={{ zIndex: 99999 }}>
          <Header />
        </div>
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
        <div>
          <Footer />
        </div>
      </>
    )
}
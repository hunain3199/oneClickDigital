import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

export default function WebLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    )
  }
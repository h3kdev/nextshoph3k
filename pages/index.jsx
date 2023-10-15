import Comments from "./components/comments";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Products from "./components/products";

export default function Index() {
  return (
    <main className="w-full h-full lg:px-20 flex items-start justify-center">
      <div>
        <Navbar />
        <Header />
        <Products />
        <Footer />
      </div>
    </main>
  )
}

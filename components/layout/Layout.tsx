import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

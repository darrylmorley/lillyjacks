import Header from "./Header";
import Footer from "./Footer";
import { Children } from "react";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

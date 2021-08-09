import Head from "next/head";
import Nav from "./Nav";

export default function () {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cookie&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <h1 style={{ fontFamily: "Cookie" }}>LillyJacks</h1>
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
        }
        h1 {
          font-size: 5em;
          background: -webkit-linear-gradient(blue, red);
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
}

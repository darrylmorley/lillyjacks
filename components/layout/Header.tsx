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
        <h1>LillyJacks</h1>
        <p>Sweet treats & gifts</p>
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 10em;
        }

        h1 {
          font-size: 5em;
          font-family: Cookie;
          background: -webkit-linear-gradient(blue, red);
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        p {
          align-self: flex-end;
          font-family: Cookie;
          font-size: 1.8em;
          margin-left: -3.5em;
          animation: pulse 10s;
        }

        @keyframes pulse {
          0% {
            color: #fff;
          }
          100% {
            color: #000;
          }
        }
      `}</style>
    </>
  );
}

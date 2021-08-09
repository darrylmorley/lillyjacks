import Head from "next/head";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cookie&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="header">
        <div></div>
        <div className="logo">
          <h1>LillyJacks</h1>
          <p>Sweet treats & gifts</p>
        </div>
        <div className="icons">
          <AiOutlineUser style={{ marginRight: "0.5em" }} />
          <AiOutlineShopping />
        </div>
      </div>
      <style jsx>{`
        .header {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          margin-bottom: -2em;
        }

        .logo {
          display: flex;
          justify-content: center;
        }

        h1 {
          font-size: 5em;
          font-family: Cookie;
          background: linear-gradient(blue, red);
          background: -webkit-linear-gradient(blue, red);
          background-clip: text;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          text-fill-color: transparent;
          -webkit-text-fill-color: transparent;
          margin-top: 20px;
        }

        p {
          padding-top: 2.6em;
          font-family: Cookie;
          font-size: 2em;
          margin-top: -1px;
          margin-left: -3.2em;
          animation: pulse 5s;
        }

        @keyframes pulse {
          0% {
            color: #fff;
          }
          100% {
            color: #000;
          }
        }

        .icons {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.6em;
        }

        .icons:hover {
          background: -webkit-linear-gradient(blue, red);
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
}

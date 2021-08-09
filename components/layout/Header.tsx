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
        <div className="search">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
          />
        </div>
        <div className="logo">
          <h1>LillyJacks</h1>
          <p>Sweet treats & gifts</p>
        </div>
        <div className="icons">
          <AiOutlineUser
            style={{
              marginRight: "0.5em",
            }}
            className="icon"
          />
          <AiOutlineShopping className="icon" />
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
          background: linear-gradient(orange, white);
          background: -webkit-linear-gradient(white, orange);
          background-clip: text;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          text-fill-color: transparent;
          -webkit-text-fill-color: transparent;
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

        .icon {
          background: linear-gradient(blue, red);
          background: -webkit-linear-gradient(blue, red);
          background-clip: text;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          text-fill-color: transparent;
          -webkit-text-fill-color: transparent;
        }

        .search {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        #search {
          width: 18em;
          height: 2em;
          border: double 3px transparent;
          border-radius: 6px;
          background-image: linear-gradient(white, white),
            linear-gradient(to right, red, blue);
          background-origin: border-box;
          background-clip: padding-box, border-box;
        }
      `}</style>
    </>
  );
}

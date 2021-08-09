export default function Nav() {
  return (
    <nav>
      <ul>
        <li>Sweet Boxes</li>
        <li>Tasty Treats</li>
        <li>Awesome Gifts</li>
        <li>Jolly Christmas</li>
      </ul>
      <style jsx>
        {`
          nav {
            height: 2.9em;
            margin-top: 1px;
            background-color: #671591;
          }

          ul {
            display: flex;
            justify-content: center;
            align-items: center;
            list-style-type: none;
          }

          li {
            font-family: "Style Script", cursive;
            font-size: 1.8em;
            margin-top: 0.1em;
            margin-left: 1em;
            margin-right: 1em;
            color: white;
          }

          li:hover {
            background: linear-gradient(orange, white);
            background: -webkit-linear-gradient(orange, white);
            background-clip: text;
            -webkit-background-clip: text;
            -moz-background-clip: text;
            text-fill-color: transparent;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>
    </nav>
  );
}

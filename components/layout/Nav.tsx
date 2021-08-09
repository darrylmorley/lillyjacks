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
            height: 2em;
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
            font-family: "Permanent Marker", cursive;
            text-transform: uppercase;
            font-size: 1.4em;
            margin-left: 1em;
            margin-right: 1em;
            color: white;
          }
        `}
      </style>
    </nav>
  );
}

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>Sweets</li>
        <li>Treats</li>
        <li>Gifts</li>
        <li>Christmas</li>
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
            font-family: Lato;
            font-weight: 900;
            text-transform: uppercase;
            font-size: 1.4em;
            margin: 0em 1em;
            color: white;
          }
        `}
      </style>
    </nav>
  );
}

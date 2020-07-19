// import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {Id} from '../tsc/id.model';

const Nav: React.FC = (): JSX.Element => {
  const [id, setId] = useState<Id []>([]);

  useEffect(() => {
    const localId: string = localStorage.getItem("id");
    if (localId !== "undefined") {
      console.log(localId);
      setId(JSON.parse(localId));
    } else {
      console.log(localId);
      setId(JSON.parse("5930"));
    }
  }, []);
  
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/newPost" as={`/posts/new`}>
            <a>Create new Post</a>
          </Link>
        </li>
        <li>
          <Link href="/posts/[id]" as={`/posts/${id}`}>
            <a>Last Viewed Post</a>
          </Link>
        </li>
      </ul>

      {/* <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}</style> */}
    </nav>
  );
};

export default Nav;

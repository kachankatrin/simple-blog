// import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {Id} from '../tsc/id.model';
import styled from 'styled-components';

const ListElement = styled.li`
    list-style: none;
    cursor: pointer;
  `;

  const LinkElement = styled.a`
    color: #615b5b;
    text-decoration: none;
    font-size: 2rem;
    ${ListElement}:hover & {
      color: black;
    }
  `;
  const NavBar = styled.nav`
    border-top: 1px solid #9e9a97;
    border-bottom: 1px solid #9e9a97;
    padding: 0.5rem;
  `;

  const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    padding: 4px 16px;
  `;

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
    <NavBar>
      <List>
        <ListElement>
          <Link href="/">
            <LinkElement>Home</LinkElement>
          </Link>
        </ListElement>
        <ListElement>
          <Link href="/posts/newPost" as={`/posts/new`}>
            <LinkElement>Create new Post</LinkElement>
          </Link>
        </ListElement>
        <ListElement>
          <Link href="/posts/[id]" as={`/posts/${id}`}>
            <LinkElement>Last Viewed Post</LinkElement>
          </Link>
        </ListElement>
      </List>
    </NavBar>
  );
};

export default Nav;

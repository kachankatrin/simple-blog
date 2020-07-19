import fetch from "node-fetch";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
export const url = `https://simple-blog-api.crew.red/posts`;

export function getPosts() {
  return fetch(url);
}
export async function createPost(
  { post }: { post: { title: string; body: string } },
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();
  axios
    .post(url, post)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export const MyGlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}
html {
  font-size: 10px;
}
body {
  background-color: #f7f6f2;
  font-size: 1.6rem;
  font-family: Aleo-Regular;
  height: 100vh;
  
}
a {
  text-decoration: none;
  color: black
}
li {
  list-style: none;
}
@font-face {
  font-family: 'Aleo-Regular';
  src: url("./fonts/aleo/Aleo-Regular.otf");  font-style: normal;
  // font-weight: 400;
  font-display: fallback; /* <- this can be added to each @font-face definition */
}
`;
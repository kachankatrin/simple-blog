export const url = `https://simple-blog-api.crew.red/posts`;
import fetch from "node-fetch";
import axios from "axios";

export function getPosts() {
  return fetch(url);
}
export async function createPost(post) {
  axios
    .post(url, post)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

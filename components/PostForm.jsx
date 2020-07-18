import { useState } from "react";
import { createPost } from "../utils";

export default function PostForm() {
  const [post, setPost] = useState({ title: "", body: "" });
  const [show, setShow] = useState({ display: "none" });
  const { title, body } = post;

  const changeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const clearInput = () => {
    setPost({ title: "", body: "" });
  };

  const clickHandler = () => {
    show.display === "block"
      ? setShow({ display: "none" })
      : setShow({ display: "block" });
  };

  return (
    <div state={useState}>
      <button onClick={clickHandler}>Create</button>
      <form
        style={show}
        onSubmit={(e) => {
          createPost(post);
          clearInput();
          e.preventDefault();
        }}
      >
        <button
          onClick={() => {
            clickHandler();
            clearInput();
          }}
        >
          Cancel
        </button>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={title}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="post text"
          name="body"
          value={body}
          onChange={changeHandler}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
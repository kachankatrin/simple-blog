import { useState } from "react";
import { createPost } from "../utils";
import {PostState, Visibility} from '../tsc/postState.model'

const PostForm: React.FC = (): JSX.Element => {

  const [post, setPost] = useState<PostState>({ title: "", body: "" });
  const [show, setShow] = useState<Visibility>({ display: "none" });
  const { title, body } = post;

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.currentTarget.name]: e.currentTarget.value });
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
    <div>
      <button onClick={clickHandler}>Create</button>
      <form
        style={show}
        onSubmit={(e) => {
          createPost({post}, e);
          clearInput();
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

export default PostForm
import { useState } from "react";
import { createPost } from "../utils";
import { PostState, Visibility } from "../tsc/postState.model";
import styled from "styled-components";

const FormContainer = styled.div`
  margin: 5rem auto;
  width: 45%;
  text-align: center;
`;

const Button = styled.button`
  background-color: transparent;
  border-radius: 5px;
  letter-spacing: 1px;
  color: #615a5a;
  font-size: 14px;
  padding: 1rem;
  margin: 2rem 1rem;
  text-align: center;
  outline: none;
  &:hover {
    box-shadow: 3px 3px 9px #d1cebd;
    cursor: pointer;
  }
  &:active {
    outline: none;
    transform: scale(0.9);
  }
  &:not(:active) {
    transform: scale(1);
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin: 1rem;
  > input {
    margin: 1rem;
    padding: 1rem;
  }
`;
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
    <FormContainer>
      <Button onClick={clickHandler}>Create</Button>
      <form
        style={show}
        onSubmit={(e) => {
          createPost({ post }, e);
          clearInput();
        }}
      >
        <InputsContainer>
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
        </InputsContainer>
        <div>
          <Button
            onClick={() => {
              clickHandler();
              clearInput();
            }}
          >
            Cancel
          </Button>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default PostForm;

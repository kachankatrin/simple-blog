import Link from "next/link";
import styled from "styled-components";
// export { PostListElement } from '../pages/index';

export const PostListElement = styled.a`
  overflow: scroll;
  // width: 90%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-align: center;
  padding: 1rem 0;
  width: ${(props: {widthCard: string}) => props.widthCard || "100%"};
  margin: ${(props: {margin: string}) => props.margin || "0"} 
`;
const Title = styled.h3`
  text-align: left;
  padding: 1rem 2rem;
`;
const Paragraph = styled.p`
  text-align: left;
  padding: 1rem 2rem;
`;
const ImageContainer = styled.div`
  text-align: center;
`;
const Post = ({
  post
}: {
  post: { title?: string; body?: string; isSent?: boolean; id?: string };
}) => {
  // const title: string = typeof post.title === "string" ? post.title : "wrong title";
  // const body: string = typeof post.body === "string" ? post.body : "wrong body";

  return (
    <Link href="/posts/[id]" as={`/posts/${post.id}`}>
      <PostListElement widthCard="50%" margin="5rem auto">
      {/* <a> */}
        <ImageContainer>
          <img src={`https://picsum.photos/seed/${post.id}/350`} />
        </ImageContainer>
        <Title>{post.title ? post.title : "Error: empty input"}</Title>
        <Paragraph>{post.body ? post.body : "Error: Empty body"}</Paragraph>
      {/* </a> */}
      </PostListElement>
    </Link>
  );
};

export default Post;

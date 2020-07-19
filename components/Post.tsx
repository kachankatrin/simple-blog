import Link from "next/link";

// interface SinglePostProps {
//   post?: {title?: string, body?: string, isSent?: boolean, id: number} [];
// }

const Post = ( {post}: {post: {title?: string, body?: string, isSent?: boolean, id?: string}}) => {
  // const title: string = typeof post.title === "string" ? post.title : "wrong title";
  // const body: string = typeof post.body === "string" ? post.body : "wrong body";
  
  return (
    <Link href="/posts/[id]" as={`/posts/${post.id}`}>
      <a>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </a>
    </Link>
  );
}

export default Post;

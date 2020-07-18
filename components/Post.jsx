import Link from "next/link";

function Post({ post }) {
  const title = typeof post.title === "string" ? post.title : "wrong title";
  const body = typeof post.body === "string" ? post.body : "wrong body";
  
  return (
    <Link href="/posts/[id]" as={`/posts/${post.id}`}>
      <a>
        <h3>{title}</h3>
        <p>{body}</p>
      </a>
    </Link>
  );
}

export default Post;

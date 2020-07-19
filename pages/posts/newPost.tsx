import Layout from "../../components/layout";
import PostForm from "../../components/PostForm";
import { NextPage } from "next";

const createNewPost: NextPage  = (): JSX.Element =>  {
  return (
    <Layout>
      <PostForm />
    </Layout>
  );
}

export default createNewPost;

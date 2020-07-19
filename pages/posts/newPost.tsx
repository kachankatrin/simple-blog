import Layout from "../../components/layout";
import PostForm from "../../components/PostForm";
import { NextPage } from "next";
import { MyGlobalStyle } from "../../utils";

const createNewPost: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <MyGlobalStyle />
      <PostForm />
    </Layout>
  );
};

export default createNewPost;
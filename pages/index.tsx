import { url } from "../utils";
import Head from "next/head";
import Post from "../components/Post"
import Layout, { siteTitle } from "../components/layout";
import axios from "axios";
import { NextPage } from "next";

interface Props {
  posts?: {title?: string, body?: string, isSent?: boolean, id?: string} [];
}
 
const Home: NextPage<Props> = ({ posts }) => {
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="container">
        <ul>
          {posts.map((item: {title?: string, body?: string, isSent?: boolean, id?: string}) => {
            return (
              <li key={item.id}>
                <Post post={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

Home.getInitialProps = async function () {
  const res = await axios.get(url);
  const data = await res.data;
  // console.log(data);
  return {
    posts: data,
  };
};

export default Home;

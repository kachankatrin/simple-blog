import { url } from "../utils";
import Head from "next/head";
import Post from "../components/Post";
import Layout, { siteTitle } from "../components/layout";
import axios from "axios";

const Home = ({ posts }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="container">
        <ul>
          {posts.map((item) => {
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

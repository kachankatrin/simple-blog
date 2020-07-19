import { url, MyGlobalStyle } from "../utils";
import Head from "next/head";
import Post from "../components/Post";
import Layout, { siteTitle } from "../components/layout";
import axios from "axios";
import { NextPage } from "next";
import styled from "styled-components";

const GridContainer = styled.ul`
  padding: 5rem;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, max-content));
  grid-gap: 2vmin;
  grid-auto-rows: 400px;
  > li {
    overflow: scroll;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    :hover {
      cursor: pointer;
      transform: scale(1.1);
    }
    > a {
      width: 100%;
      margin: 0;
    }
  }
`;

interface Props {
  posts?: { title?: string; body?: string; isSent?: boolean; id?: string }[];
}
const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Layout home>
      <MyGlobalStyle />
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <GridContainer>
          {posts.map(
            (item: {
              title?: string;
              body?: string;
              isSent?: boolean;
              id?: string;
            }) => {
              return (
                <li key={item.id}>
                  <Post post={item} />
                </li>
              );
            }
          )}
        </GridContainer>
      </div>
    </Layout>
  );
};

Home.getInitialProps = async function () {
  const res = await axios.get(url);
  const data = await res.data;
  console.log(data);
  return {
    posts: data,
  };
};

export default Home;

import Head from "next/head";
import { url, MyGlobalStyle } from "../../utils";
import Post from "../../components/Post";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SinglePost() {
  const router = useRouter();
  const { data, error } = useSwr(`${url}/${router.query.id}`, fetcher);
  if (error) return <div>Failed to load user</div>;
  if (!data) return <div>Loading...</div>;

  localStorage.setItem("id", data.id);

  return (
    <Layout>
      <MyGlobalStyle />
      <Head>
        <title>{data.title}</title>
      </Head>
      <Post key={data.id} post={data} />
    </Layout>
  );
}
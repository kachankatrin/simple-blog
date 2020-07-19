import Head from "next/head";
import Link from "next/link";
import Nav from "./nav";
import styled from "styled-components";

import Header from "../components/header";
const name = "Blogger Name";
export const siteTitle: string = "Simple Blog";
const BlogHeader = styled.header`
  text-align: center;
  padding: 12rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
  background-image: url(https://picsum.photos/1000/300);
    background-size: cover;
    margin-top: 5rem
`;

const BackButton = styled.a`
  margin: 5rem;
  cursor: pointer;
`;

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <Nav />
      <BlogHeader>
        {home ? (
          <>
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <h2>Blog</h2>
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </BlogHeader>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <BackButton>← Back to home</BackButton>
          </Link>
        </div>
      )}
    </div>
  );
}

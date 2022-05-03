import React from "react";
import Link from "next/link";
import Head from "next/head";
import { getPosts } from "../lib/posts";

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.title}>
              <Link href={`/posts/${post.page}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default HomePage;

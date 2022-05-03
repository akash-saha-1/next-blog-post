import React from "react";
import Head from "next/head";
import { getPost, getPostFile } from "../../lib/posts";

export async function getStaticPaths() {
  const pages = await getPostFile();

  return {
    paths: pages.map((page) => ({
      params: {
        postName: page,
      },
    })),
    // paths: [
    //   { params: { postName: "first-post" } },
    //   { params: { postName: "second-post" } },
    // ],
    fallback: false,
  };
}

export const getStaticProps = async ({ params: { postName } }) => {
  const post = await getPost(postName);
  return {
    props: { post },
  };
};

const PostPage = ({ post }) => {
  //console.log(post);
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
};

export default PostPage;

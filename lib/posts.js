import { readFile, readdir } from "fs/promises";
import { marked } from "marked";
import * as matter from "gray-matter";

export async function getPost(slug) {
  const source = await readFile(`./content/posts/${slug}.md`, "utf-8");
  const {
    data: { date, title },
    content,
  } = matter(source);
  const body = marked(content);

  return {
    title,
    date,
    body,
  };
}

export async function getPosts() {
  const pages = await getPostFile();
  const posts = [];
  for (const page of pages) {
    const post = await getPost(page);
    posts.push({ page, ...post });
  }
  return posts;
}

export async function getPostFile() {
  const suffix = ".md";
  const files = await readdir("./content/posts");
  return files
    .filter((file) => file.endsWith(suffix))
    .map((file) => file.slice(0, -suffix.length));
}

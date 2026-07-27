import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getPosts() {
  const files = fs.readdirSync(postsDirectory);

  return files.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      ...data,
      content,
    };
  });
}

export function getPost(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);

  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  };
}
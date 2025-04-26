import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

import { ArticleDataType, FrontmatterType } from "@/types";

const CONTENTS_DIR = "contents";
const MDX_EXTENSION = ".mdx";

class FileHelperError extends Error {
  constructor(message: string, public path?: string) {
    super(message);
    this.name = "FileHelperError";
  }
}

const validatePath = (path: string): void => {
  if (!path || typeof path !== "string") {
    throw new FileHelperError("Path must be a non-empty string");
  }
};

const getArticlesList = async (
  articlePath: string
): Promise<ArticleDataType[]> => {
  validatePath(articlePath);

  try {
    const fileNames = await getDirectory(path.join(CONTENTS_DIR, articlePath));

    const articles = await Promise.all(
      fileNames.map(async (fileName) => {
        const articleContent = await getFile(
          path.join(CONTENTS_DIR, articlePath, fileName)
        );

        const { data: frontmatter } = matter(articleContent);
        const slug = fileName.replace(MDX_EXTENSION, "");

        return {
          frontmatter: frontmatter as FrontmatterType,
          content: "",
          slug,
        };
      })
    );

    return articles.sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
  } catch (error) {
    throw new FileHelperError(
      `Error while retrieving articles: ${error}`,
      articlePath
    );
  }
};

const loadArticles = async (
  slug: string,
  articlePath: string
): Promise<ArticleDataType> => {
  validatePath(slug);
  validatePath(articlePath);

  try {
    const filePath = path.join(
      CONTENTS_DIR,
      articlePath,
      `${slug}${MDX_EXTENSION}`
    );
    const articleContent = await getFile(filePath);
    const { data: frontmatter, content } = matter(articleContent);

    return {
      frontmatter: frontmatter as FrontmatterType,
      content,
      slug,
    };
  } catch (error) {
    throw new FileHelperError(
      `Error while loading article: ${error}`,
      `${articlePath}/${slug}`
    );
  }
};

const getFile = async (filePath: string): Promise<string> => {
  validatePath(filePath);

  try {
    return await fs.readFile(path.join(process.cwd(), filePath), "utf8");
  } catch (error) {
    throw new FileHelperError(`Error while reading file: ${error}`, filePath);
  }
};

const getDirectory = async (filePath: string): Promise<string[]> => {
  validatePath(filePath);

  try {
    return await fs.readdir(path.join(process.cwd(), filePath));
  } catch (error) {
    throw new FileHelperError(
      `Error while reading directory: ${error}`,
      filePath
    );
  }
};

export { loadArticles, getArticlesList };

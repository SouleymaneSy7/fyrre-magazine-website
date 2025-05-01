import * as React from "react";

import path from "path";
import matter from "gray-matter";
import { promises as fs } from "fs";

import { ArticleDataType, FrontmatterType } from "@/types";
import { CONTENTS_DIR, MDX_EXTENSION } from "@/constants";

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

    if (articlePath === "authors") {
      return articles.sort((a, b) => {
        const idA = a.frontmatter.id || 0;
        const idB = b.frontmatter.id || 0;
        return idA - idB;
      });
    }

    if (articlePath === "magazine") {
      return articles.sort((a, b) => {
        const dateA = new Date(a.frontmatter.date || "").getTime();
        const dateB = new Date(b.frontmatter.date || "").getTime();
        return dateB - dateA;
      });
    }

    if (articlePath === "podcast") {
      return articles.sort((a, b) => {
        const episodeA = a.frontmatter.episode || 0;
        const episodeB = b.frontmatter.episode || 0;
        return episodeB - episodeA;
      });
    }

    return articles;
  } catch (error) {
    throw new FileHelperError(
      `Error while retrieving articles: ${error}`,
      articlePath
    );
  }
};

const loadArticle = React.cache(async function loadArticle(
  articlePath: string,
  slug: string
): Promise<ArticleDataType> {
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
});

export { loadArticle, getArticlesList };

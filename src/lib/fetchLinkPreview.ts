import { HTMLElement, parse } from "node-html-parser";

type PreviewData = {
  url: string;
  title: string;
  description: string;
  image: string;
};

export async function fetchLinkPreview(url: string): Promise<PreviewData> {
  const res: Response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (LinkPreviewBot)",
      accept: "text/html",
    },
  });

  const html: string = await res.text();
  const root: HTMLElement = parse(html);

  const getMeta: (key: string) => string | undefined = (key: string) =>
    root.querySelector(`meta[property="${key}"]`)?.getAttribute("content") ||
    root.querySelector(`meta[name="${key}"]`)?.getAttribute("content");

  const title: string =
    getMeta("og:title") || root.querySelector("title")?.text || "";

  const description: string = getMeta("og:description") || "";

  const image: string = getMeta("og:image") || "";

  return {
    url,
    title,
    description,
    image,
  };
}

import type {
  Emphasis,
  Image,
  Paragraph,
  PhrasingContent,
  Root,
  RootContent,
  Text,
} from "mdast";
import type { Plugin } from "unified";
import he from "he";

export const customFigcaption: Plugin<[], Root> = () => {
  return (tree: Root) => {
    const children: RootContent[] = tree.children;

    for (let i: number = 0; i < children.length - 1; i++) {
      const image: RootContent = children[i];
      const caption: RootContent = children[i + 1];

      const isParagraphWithImage: boolean =
        image.type === "paragraph" &&
        image.children.length === 1 &&
        image.children[0].type === "image";
      const isParagraphWithEmphasis: boolean =
        caption.type === "paragraph" &&
        caption.children.length === 1 &&
        caption.children[0].type === "emphasis";

      if (isParagraphWithImage && isParagraphWithEmphasis) {
        const img: Image = (image as Paragraph).children[0] as Image;
        const captionText: string = (
          (caption as Paragraph).children[0] as Emphasis
        ).children
          .filter((n: PhrasingContent): n is Text => "value" in n)
          .map((n: Text) => n.value)
          .join("");
        children.splice(i, 2, {
          type: "html",
          value: figureAndFigcaption(img, captionText),
        });
      }
    }
  };
};

function isSafeImageUrl(url: string) {
  return url.startsWith("/") || url.startsWith("./") || url.startsWith("../");
}

function figureAndFigcaption(img: Image, captionText: string): string {
  let url: string = "";
  if (!isSafeImageUrl(img.url)) {
    return "";
  }
  url = img.url;
  return `
<figure>
  <div class="figure-scroll">
    <img src="${he.escape(url.toString())}" alt="${he.escape(img.alt ?? "")}" title="${he.escape(img.title ?? "")}">
  </div>
  <figcaption>${he.escape(captionText)}</figcaption>
</figure>`;
}

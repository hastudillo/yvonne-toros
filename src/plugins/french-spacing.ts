import { visit } from "unist-util-visit";
import type { Root, Text } from "mdast";
import type { Plugin } from "unified";

const NO_BREAK_SPACE: string = "\u00A0";

export const frenchSpacing: Plugin<[], Root> = () => {
  return (tree: Root) => {
    visit(tree, "text", (node: Text) => {
      node.value = node.value.replace(/(?<=[«]) /g, NO_BREAK_SPACE);
      node.value = node.value.replace(/ (?=[?!:;»])/g, NO_BREAK_SPACE);
    });
  };
};

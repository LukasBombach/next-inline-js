import type { FC } from "react";

type InlineScriptProps = Omit<JSX.IntrinsicElements["script"], "src" | "dangerouslySetInnerHTML"> & {
  src: Promise<any>;
};

export const InlineScript: FC<InlineScriptProps> = ({ src, ...props }) => {
  debugger;
  return <script {...props} dangerouslySetInnerHTML={{ __html: "console.log('InlineScript');" }} />;
};

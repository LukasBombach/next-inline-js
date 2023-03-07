import type { FC } from "react";

type ScriptElementProps = Omit<JSX.IntrinsicElements["script"], "src" | "dangerouslySetInnerHTML">;

type InlineScriptProps<Src extends Promise<any>, Props = Src extends Promise<infer T> ? T : never> = {
  src: Src;
} & Props;

export const InlineScript = <S extends Promise<any>>({ src, ...props }: InlineScriptProps<S>) => {
  return <script {...props} dangerouslySetInnerHTML={{ __html: "console.log('InlineScript');" }} />;
};

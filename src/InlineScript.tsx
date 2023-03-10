import dynamic from "next/dynamic";

type ScriptElementProps = Omit<JSX.IntrinsicElements["script"], "src" | "dangerouslySetInnerHTML">;

type InlineScriptProps<
  Src extends Promise<any>,
  Props = Src extends Promise<infer R> ? (R extends { onMount: (props: infer P) => void } ? P : never) : never
> = {
  src: Src;
} & Props;

export const InlineScript = <S extends Promise<any>>({ src, ...props }: InlineScriptProps<S>) => {
  const DynamicScript = dynamic(() =>
    src.then(code => {
      const Script = () => <script {...props} dangerouslySetInnerHTML={{ __html: code }} />;
      return Script;
    })
  );
  return <DynamicScript />;
};

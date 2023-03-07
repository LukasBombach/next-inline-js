import { InlineScript } from "../InlineScript";

export default function Home() {
  return (
    <main>
      home
      <InlineScript src={import("../log.inline-script")} />
    </main>
  );
}

/* import { InlineScript } from "../InlineScript"; */

import stylesheet from "../stylesheet";

export default function Home() {
  console.log("stylesheet", typeof stylesheet, JSON.stringify(stylesheet));

  return (
    <main>
      home
      {/* <InlineScript src={import("../log.inline-script")} foo="bar" /> */}
    </main>
  );
}

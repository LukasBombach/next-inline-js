export default function Home() {
  import("../log.inline-script").then(r => console.log("inline", r));

  return <main>home</main>;
}

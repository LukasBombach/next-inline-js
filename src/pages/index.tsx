export default function Home() {
  import("../log.inline-script").then(result => {
    console.log("loaded:", typeof result, JSON.stringify(result));
  });

  return <main>home</main>;
}

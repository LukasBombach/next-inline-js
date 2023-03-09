import { logMe } from "./importedByLog";

export function onMount(props: { foo: "bar" }): void {
  logMe();
}

import { logMe } from "./importedByLog";

logMe();

export function onMount(props: { foo: "bar" }): void {}

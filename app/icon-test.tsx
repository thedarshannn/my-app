import * as SI from "react-icons/si";

export default function IconTest() {
  // Check if Azure icons exist
  const azureIcons = Object.keys(SI).filter((key) =>
    key.toLowerCase().includes("azure")
  );

  return (
    <div>
      <h1>Available Azure Icons:</h1>
      <pre>{JSON.stringify(azureIcons, null, 2)}</pre>
    </div>
  );
}

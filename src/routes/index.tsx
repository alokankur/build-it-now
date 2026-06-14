import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indian FES Assessment" },
      { name: "description", content: "Functional Electrical Stimulation (FES) clinical assessment tool." },
      { property: "og:title", content: "Indian FES Assessment" },
      { property: "og:description", content: "Functional Electrical Stimulation (FES) clinical assessment tool." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/fes.html"
      title="Indian FES Assessment"
      style={{ border: 0, width: "100vw", height: "100vh", display: "block" }}
    />
  );
}

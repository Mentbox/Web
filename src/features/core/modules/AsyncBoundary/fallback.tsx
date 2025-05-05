import { FallbackProps } from "react-error-boundary";

export function PendingFallback() {
  return <div className="flex items-center justify-center p-5">loading...</div>;
}

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const title = "Error";
  const content = error?.message ?? "retry later";

  return (
    <section className="flex flex-col items-center justify-center gap-2 p-5">
      <h1>{title}</h1>
      <p>{content}</p>

      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 rounded bg-black text-white font-bold text-center"
      >
        Reset
      </button>
    </section>
  );
}

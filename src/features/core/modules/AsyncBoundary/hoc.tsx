import { JSX, Suspense } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { ErrorFallback, PendingFallback } from "./fallback";

type Options = {
  pendingFallback?: React.ReactNode;
  rejectedFallback?: (props: FallbackProps) => React.ReactNode;
};

function withAsyncBoundary<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<P>,
  options?: Options
) {
  return function CompWithAsyncBoundary(props: P) {
    return (
      <ErrorBoundary
        FallbackComponent={(props) =>
          options?.rejectedFallback ? (
            options.rejectedFallback(props)
          ) : (
            <ErrorFallback {...props} />
          )
        }
      >
        <Suspense fallback={options?.pendingFallback ?? <PendingFallback />}>
          <WrappedComponent {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };
}

export default withAsyncBoundary;

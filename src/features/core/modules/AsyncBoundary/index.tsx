import { Suspense } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { ErrorFallback, PendingFallback } from "./fallback";

type Props = React.PropsWithChildren<{
  pendingFallback?: React.ReactNode;
  rejectedFallback?: (props: FallbackProps) => React.ReactNode;
}>;

function AsyncBoundary({ pendingFallback, rejectedFallback, children }: Props) {
  return (
    <ErrorBoundary
      FallbackComponent={(props) =>
        rejectedFallback ? (
          rejectedFallback(props)
        ) : (
          <ErrorFallback {...props} />
        )
      }
    >
      <Suspense fallback={pendingFallback ?? <PendingFallback />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;

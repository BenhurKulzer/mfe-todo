import React, { Suspense, lazy } from "react";

import ErrorBoundary from "../Error";

const ErrorText = (
  <div className="text-amber-600 text-center p-4">
    This MFE application is currently unavailable.
  </div>
);

const TodoApp = lazy(() =>
  import("todo/TodoApp").catch(() => ({
    default: () => ErrorText,
  }))
);

const Loader = () => {
  return (
    <ErrorBoundary fallback={ErrorText}>
      <Suspense fallback={<p className="text-center">Loading application...</p>}>
        <TodoApp />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Loader;

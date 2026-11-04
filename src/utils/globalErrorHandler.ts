export function initGlobalErrorHandler() {
  window.onerror = function (message, source, lineno, colno, error) {
    console.error("Global JS error:", {
      message,
      source,
      lineno,
      colno,
      error,
    });
  };

  window.onunhandledrejection = function (event) {
    console.error("Global error in Promise (without .catch!):", {
      reason: event.reason,
    });
  };
}

import React from "react";

// An uncaught render error unmounts the entire React tree, which is how one bad
// record in profile.json turned into a blank white page. Wrapping a section in
// this keeps the failure local: that section renders nothing, the rest of the
// page stays up, and the error is still logged for debugging.
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  componentDidCatch(error, info) {
    console.error(
      `Section "${this.props.name ?? "unknown"}" failed to render and was hidden:`,
      error,
      info?.componentStack
    );
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

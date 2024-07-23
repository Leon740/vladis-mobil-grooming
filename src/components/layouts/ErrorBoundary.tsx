import React from 'react';

import NotFoundPage from 'pages/404';
import { Component, ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryPropsI {
  children: ReactNode;
  // fallback: FC<{ errorMsg: string }>;
}

interface ErrorBoundaryStateI {
  errorMsg: string;
}

export function ErrorBoundaryFallback({ errorMsg }: ErrorBoundaryStateI) {
  return <NotFoundPage title={errorMsg} />;
}

export class ErrorBoundary extends Component<ErrorBoundaryPropsI, ErrorBoundaryStateI> {
  constructor(props: ErrorBoundaryPropsI) {
    super(props);
    this.state = { errorMsg: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryStateI {
    console.log(error);
    return { errorMsg: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // logErrorToMyServices(error, info);
    console.log(error, info);
  }

  render() {
    const { errorMsg } = this.state;
    const { children } = this.props;

    if (errorMsg) {
      return <ErrorBoundaryFallback errorMsg={errorMsg} />;
    }

    return children;
  }
}

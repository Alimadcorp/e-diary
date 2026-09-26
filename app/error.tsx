'use client';

import DynamicErrorView from './_components/dynamic-error-view';

interface CustomError extends Error {
  status?: number;
}

export default function RootError({ error }: { error: CustomError }) {
  const statusCode = error.status || 500; 

  return <DynamicErrorView statusCode={statusCode} message={error.message} />;
}

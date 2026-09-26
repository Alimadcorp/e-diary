import DynamicErrorView from './_components/dynamic-error-view';

export default function GlobalNotFound() {
  return <DynamicErrorView statusCode={404} />;
}

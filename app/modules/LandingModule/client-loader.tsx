import type { ClientLoaderFunctionArgs } from 'react-router';

export default function LandingClientLoader({
  serverLoader,
}: ClientLoaderFunctionArgs) {
  return serverLoader;
}

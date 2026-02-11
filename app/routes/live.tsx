import { META } from "~/constants";
import type { Route } from "./+types/live";

export function meta({}: Route.MetaArgs) {
  return [
    { title: META.LIVE.title },
    { name: "description", content: META.LIVE.description },
  ];
}

export default function Live() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Live
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Live scores and updates will appear here.
      </p>
    </div>
  );
}

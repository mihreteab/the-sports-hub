import { META } from "~/constants";

export function meta() {
  return [
    { title: META.MATCHES.title },
    { name: "description", content: META.MATCHES.description },
  ];
}

export default function Matches() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Matches
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Matches and fixtures will appear here.
      </p>
    </div>
  );
}

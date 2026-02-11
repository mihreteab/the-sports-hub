import { META } from "~/constants";

export function meta() {
  return [
    { title: META.STATISTICS.title },
    { name: "description", content: META.STATISTICS.description },
  ];
}

export default function Statistics() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Statistics
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Statistics will appear here.
      </p>
    </div>
  );
}

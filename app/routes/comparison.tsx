import { META } from "~/constants";

export function meta() {
  return [
    { title: META.COMPARISON.title },
    { name: "description", content: META.COMPARISON.description },
  ];
}

export default function Comparison() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Comparison
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Comparison tools will appear here.
      </p>
    </div>
  );
}

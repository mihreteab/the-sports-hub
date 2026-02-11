import { META } from "~/constants";

export function meta() {
  return [
    { title: META.STANDINGS.title },
    { name: "description", content: META.STANDINGS.description },
  ];
}

export default function Standings() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Standings
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        League standings will appear here.
      </p>
    </div>
  );
}

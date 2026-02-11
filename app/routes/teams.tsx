import { META } from "~/constants";

export function meta() {
  return [
    { title: META.TEAMS.title },
    { name: "description", content: META.TEAMS.description },
  ];
}

export default function Teams() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Teams
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Teams will appear here.
      </p>
    </div>
  );
}

import { META } from "~/constants";

export function meta() {
  return [
    { title: META.VENUES.title },
    { name: "description", content: META.VENUES.description },
  ];
}

export default function Venues() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Venues
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Venues and stadiums will appear here.
      </p>
    </div>
  );
}

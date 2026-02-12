import { useParams } from "react-router";

export function meta({ params }: { params: { id?: string } }) {
  return [
    { title: `Match ${params.id ?? ""} | The Sports Hub` },
    { name: "description", content: "Match detail" },
  ];
}

export default function MatchDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex flex-col gap-4 p-4 md:p-0">
      <div className="font-semibold text-[20px] leading-[26px] tracking-normal">
        Match detail
      </div>
      <p className="text-foreground-muted">
        Placeholder for match {id}.
      </p>
    </div>
  );
}

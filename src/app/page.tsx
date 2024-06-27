import Link from "next/link";
import { GitHub } from "~/components/icons/github";
import { Table } from "~/components/table";
import { Card } from "~/components/ui/card";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Card className="flex flex-col gap-8 p-6 md:min-h-fit md:gap-10 md:p-8">
        <Table />
        <Link
          className="text-md flex w-full items-center justify-center gap-3 tracking-tight text-muted-foreground"
          href="https://github.com/blairmcalpine"
          target="_blank"
        >
          Created by Blair McAlpine
          <GitHub className="inline-block h-6 w-6" fill="currentColor" />
        </Link>
      </Card>
    </main>
  );
}

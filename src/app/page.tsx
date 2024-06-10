import { GitHub } from "~/components/icons/github";
import { Table } from "~/components/table";
import { Card, CardDescription, CardTitle } from "~/components/ui/card";

export default function HomePage() {
  return (
    <main className="flex h-dvh flex-col items-center justify-center">
      <Card className="flex h-dvh flex-col gap-8 p-6 md:h-auto md:gap-10 md:p-8">
        <div className="flex flex-col gap-1.5">
          <CardTitle className="text-5xl">Warzone Point Calculator</CardTitle>
          <CardDescription className="text-xl">
            Using a match point threshold of{" "}
            <span className="font-medium text-primary">150</span>
          </CardDescription>
        </div>
        <Table />
        <h3 className="text-md flex w-full items-center justify-center gap-3 tracking-tight text-muted-foreground">
          Created by Blair McAlpine
          <GitHub className="inline-block h-6 w-6" fill="currentColor" />
        </h3>
      </Card>
    </main>
  );
}

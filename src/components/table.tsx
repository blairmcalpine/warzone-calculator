"use client";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useState } from "react";

const placements = [1, 5, 10, 20, 30, 40] as const;
type Placements = (typeof placements)[number];

const multipliers: Record<Placements, number> = {
  1: 2,
  5: 1.8,
  10: 1.6,
  20: 1.4,
  30: 1.2,
  40: 1,
};

const formattedPlacement: Record<Placements, string> = {
  1: "1st",
  5: "2nd - 5th",
  10: "6th - 10th",
  20: "11th - 20th",
  30: "21st - 30th",
  40: "31st - 40th",
};

export const Table = () => {
  const [points, setPoints] = useState<number>(0);
  const onPointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.valueAsNumber;
    if (isNaN(value)) value = 0;
    else if (value < 0) value = 0;
    console.log(value);
    setPoints(value);
  };
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="points" className="">
          How many points is the team on currently?
        </Label>
        <Input
          id="name"
          placeholder="0"
          type="number"
          value={points !== 0 ? points : ""}
          onChange={onPointsChange}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th className="w-1/4 border-b border-muted p-2 text-left">
              Placement
            </th>
            <th className="w-1/4 border-b border-muted p-2 text-right">
              Multiplier{" "}
            </th>
            <th className="w-1/2 border-b border-muted p-2 text-right">
              Kills Needed
            </th>
          </tr>
        </thead>
        <tbody>
          {placements.map((placement) => {
            const killsNeeded = Math.ceil(
              Math.max(150 - points, 0) / multipliers[placement],
            );
            return (
              <tr key={placement}>
                <td
                  key={placement}
                  className="border-b border-muted p-3 text-left"
                >
                  {formattedPlacement[placement]}
                </td>
                <td className="border-b border-muted p-3 text-right">
                  {multipliers[placement]}
                </td>
                <td className="border-b border-muted p-3 text-right font-medium text-primary">
                  {killsNeeded}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

"use client";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useRef, useState } from "react";

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
  const inputRef = useRef<null | HTMLInputElement>(null);
  const onPointsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.valueAsNumber;
    if (isNaN(value)) value = 0;
    else if (value < 0) value = 0;
    setPoints(value);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      inputRef.current?.blur();
    }
  };
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="points">
          How many points is the team on currently?
        </Label>
        <Input
          id="name"
          placeholder="0"
          type="number"
          value={points !== 0 ? points : ""}
          onChange={onPointsChange}
          onKeyDown={onKeyDown}
          ref={inputRef}
          className="text-lg"
        />
      </div>
      <table>
        <thead>
          <tr>
            <th className="border-b border-muted py-3 text-left">Placement</th>
            <th className="border-b border-muted py-3 text-right">
              Multiplier{" "}
            </th>
            <th className="border-b border-muted py-3 text-right">
              Frags Needed
            </th>
          </tr>
        </thead>
        <tbody>
          {placements.map((placement) => {
            const fragsNeeded = Math.ceil(
              Math.max(150 - points, 0) / multipliers[placement],
            );
            return (
              <tr key={placement}>
                <td
                  key={placement}
                  className="border-b border-muted py-3 text-left"
                >
                  {formattedPlacement[placement]}
                </td>
                <td className="border-b border-muted py-3 text-right">
                  {multipliers[placement]}
                </td>
                <td className="border-b border-muted py-3 text-right font-medium text-primary">
                  {fragsNeeded}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

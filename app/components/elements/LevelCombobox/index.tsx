"use client";
import React, { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";
import { Input } from "~/components/ui/input";

export const levels = [
  "TK_A",
  "TK_B",
  "SD_Kelas_1",
  "SD_Kelas_2",
  "SD_Kelas_3",
  "SD_Kelas_4",
  "SD_Kelas_5",
  "SD_Kelas_6",
  "SMP_Kelas_7",
  "SMP_Kelas_8",
  "SMP_Kelas_9",
  "SMA_Kelas_10",
  "SMA_Kelas_11",
  "SMA_Kelas_12",
  "SMK_Kelas_10",
  "SMK_Kelas_11",
  "SMK_Kelas_12",
  "D3_Semester_1",
  "D3_Semester_2",
  "D3_Semester_3",
  "D3_Semester_4",
  "D3_Semester_5",
  "D3_Semester_6",
  "S1_Semester_1",
  "S1_Semester_2",
  "S1_Semester_3",
  "S1_Semester_4",
  "S1_Semester_5",
  "S1_Semester_6",
  "S1_Semester_7",
  "S1_Semester_8",
  "S2_Semester_1",
  "S2_Semester_2",
  "S2_Semester_3",
  "S2_Semester_4",
  "Umum",
];

export const LevelCombobox = ({
  data = levels,
  error,
  value,
  setValue,
}: {
  data?: typeof levels;
  error?: string;
  value: string;
  setValue: (value: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Input
          required
          id="level"
          name="level"
          autoComplete="level"
          label="Jenjang yang Diajarkan"
          className="text-start"
          placeholder="Pilih sesuai dengan jenjang yang Anda ajarkan."
          value={
            value
              ? data.find((item) => item === value)
              : "Pilih sesuai dengan jenjang yang Anda ajarkan."
          }
          error={error}
          rightIcon={
            <ChevronDown
              className={cn(open ? "rotate-180" : "", "transition-transform")}
            />
          }
        />
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Cari jenjang..." />
          <CommandList>
            <CommandEmpty>Tidak ada Sub Kategori.</CommandEmpty>
            <CommandGroup>
              {data.map((item, index) => (
                <CommandItem
                  key={index}
                  value={item}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {item.replace(/_/g, " ")}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

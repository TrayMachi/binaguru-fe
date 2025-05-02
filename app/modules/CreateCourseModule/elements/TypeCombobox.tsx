import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "~/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import { ChevronDown, Check } from "lucide-react";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

export const courseType = [
  "Pengelolaan Kelas",
  "Pembelajaran Daring",
  "Teknologi dalam Pendidikan",
  "Inovasi Pembelajaran",
  "Kurikulum dan Rencana Pembelajaran",
  "Teknik Evelausasi Pembelajaran",
];

export const TypeCombobox = ({
  data = courseType,
  error,
  value,
  setValue,
}: {
  data?: typeof courseType;
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
          id="courseType"
          name="courseType"
          autoComplete="courseType"
          label="Tipe Pelatihan"
          className="text-start"
          placeholder="Pilih sesuai tipe pelatihan yang Anda inginkan."
          value={
            value
              ? data.find((item) => item === value)
              : "Pilih sesuai tipe pelatihan yang Anda inginkan."
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
          <CommandInput placeholder="Cari Tipe Pelatihan..." />
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
                  {item}
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

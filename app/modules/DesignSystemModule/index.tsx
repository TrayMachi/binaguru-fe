import { Search, UserCircle2 } from "lucide-react";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";
import { useToast } from "~/hooks/use-toast";
import { Label } from "~/components/ui/label";

export default function DesignSytemModule() {
  const { toast } = useToast();

  return (
    <main className="h-fit grow w-full flex flex-col gap-4 justify-center py-40 items-center text-black dark:text-white">
      <div className="text-h1 font-suez">Heading/H1</div>
      <div className="text-h2 font-suez">Heading/H2</div>
      <div className="text-h3 font-suez">Heading/H3</div>
      <div className="text-h4 font-suez">Heading/H4</div>
      <div className="text-h5 font-suez">Heading/H5</div>
      <div className="text-h6 font-suez">Heading/H6</div>
      <div className="text-h7 font-suez">Heading/H7</div>
      <div className="text-h8 font-suez">Heading/H8</div>
      <div className="text-h9 font-suez">Heading/H9</div>

      <div className="text-s1 font-space">Sub-heading/S1</div>
      <div className="text-s2 font-space">Sub-heading/S2</div>
      <div className="text-s3 font-space">Sub-heading/S3</div>
      <div className="text-s4 font-space">Sub-heading/S4</div>
      <div className="text-s5 font-space">Sub-heading/S5</div>
      <div className="text-s6 font-space">Sub-heading/S6</div>
      <div className="text-s7 font-space">Sub-heading/S7</div>
      <div className="text-s8 font-space">Sub-heading/S8</div>
      <div className="text-s9 font-space">Sub-heading/S9</div>

      <div className="text-b1 font-space">Body/B1</div>
      <div className="text-b2 font-space">Body/B2</div>
      <div className="text-b3 font-space">Body/B3</div>
      <div className="text-b4 font-space">Body/B4</div>
      <div className="text-b5 font-space">Body/B5</div>
      <div className="text-b6 font-space">Body/B6</div>
      <div className="text-b7 font-space">Body/B7</div>
      <div className="text-b8 font-space">Body/B8</div>
      <div className="text-b9 font-space">Body/B9</div>

      <div className="grid grid-cols-3 gap-4 py-5">
        <Button
          variant={"primary"}
          onClick={() => {
            toast({
              title: "Loading",
              variant: "loading",
            });
          }}
        >
          Loading toast
        </Button>
        <Button
          variant={"primary"}
          onClick={() => {
            toast({
              title: "Error message",
              variant: "error",
            });
          }}
        >
          Error toast
        </Button>
        <Button
          variant={"primary"}
          onClick={() => {
            toast({
              title: "Success message",
              variant: "success",
            });
          }}
        >
          Success toast
        </Button>
      </div>

      <div className="w-1/5 space-y-3">
        <div className="space-y-1 w-full">
          <Label>Basic Select</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
              <SelectItem value="carrot">Carrot</SelectItem>
              <SelectItem value="broccoli">Broccoli</SelectItem>
              <SelectItem value="spinach">Spinach</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1 w-full">
          <Label>Small Select</Label>
          <Select>
            <SelectTrigger size="sm">
              <SelectValue placeholder="Small size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1 w-full">
          <Label>Disabled Select</Label>
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="Disabled" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="disabled1">Disabled 1</SelectItem>
              <SelectItem value="disabled2">Disabled 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="w-1/5 space-y-3">
        <Input placeholder="Search..." label="Label" required />
        <Input
          icon={<Search />}
          placeholder="Search..."
          label="Label"
          error="This is an error"
        />
        <Input placeholder="Search..." label="Label" disabled />
      </div>

      <div className="flex flex-col gap-1 w-fit">
        <div className="flex flex-rpw gap-1 w-fit">
          <Button variant="primary">
            <UserCircle2 />
            Register
            <UserCircle2 />
          </Button>
          <Button variant="secondary">
            <UserCircle2 />
            Register
            <UserCircle2 />
          </Button>
          <Button variant="ghost">
            <UserCircle2 />
            Register
            <UserCircle2 />
          </Button>
        </div>
        <div className="flex flex-row gap-1">
          <Button variant="primary" disabled>
            <UserCircle2 />
            Register
            <UserCircle2 />
          </Button>
          <Button variant="secondary" disabled>
            <UserCircle2 />
            Register
            <UserCircle2 />
          </Button>
          <Button variant="ghost" disabled>
            <UserCircle2 />
            Register
            <UserCircle2 />
          </Button>
        </div>
      </div>
    </main>
  );
}

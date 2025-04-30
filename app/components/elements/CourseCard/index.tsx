import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";
import { prosImg } from "~/const";
import { getAsset } from "~/lib/getAsset";
import { cn } from "~/lib/utils";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  level: string;
  pros: string;
  progress?: number;
  className?: string;
}

export function CourseCard({
  id,
  title,
  description,
  level,
  pros,
  progress,
  className,
}: CourseCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col bg-white dark:bg-[#2A2A2A] rounded-[16px] shadow-sm hover:shadow-md transition-shadow p-5 gap-3 h-fit max-md:w-[300px]",
        className
      )}
    >
      {progress && <Progress value={progress} className="w-full" />}
      <div className="w-full h-fit overflow-hidden z-10 rounded-[8px]">
        <img
          src={getAsset(prosImg[pros as keyof typeof prosImg])}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-row gap-2 overflow-x-auto scrollbar-hide pb-2 thin-scrollbar">
        <div className="border-[1px] border-border rounded-full py-2 px-4 font-space text-b8 whitespace-nowrap flex-shrink-0">
          {pros}
        </div>
        <div className="border-[1px] border-border rounded-full py-2 px-4 font-space text-b8 whitespace-nowrap flex-shrink-0">
          {level}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {title.length > 60 ? (
          <div className="text-s7 md:text-s6 font-space">
            {title.slice(0, 60) + "..."}
          </div>
        ) : (
          <div className="text-s7 md:text-s6 font-space">{title}</div>
        )}
        {description.length > 100 ? (
          <div className="text-b8 md:text-b7 font-space">
            {description.slice(0, 100) + "..."}
          </div>
        ) : (
          <div className="text-b8 md:text-b7 font-space">{description}</div>
        )}
      </div>
      <Link to={`/course/${id}`} className="w-full">
        <Button variant="ghost" className="w-full">
          Lanjutkan
          <ArrowRight />
        </Button>
      </Link>
    </div>
  );
}

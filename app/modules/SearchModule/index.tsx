import { ArrowRight, BookMarked, Filter, Search, X } from "lucide-react";
import { CourseCard } from "~/components/elements/CourseCard";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { getAsset } from "~/lib/getAsset";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { useLoaderData, useNavigate } from "react-router";
import type {
  CourseBase,
  CourseResponse,
  MyCourse,
  RecommendedCourse,
} from "./loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useState } from "react";

export default function SearchModule() {
  const navigate = useNavigate();
  const data = useLoaderData() as CourseResponse;
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCons, setSelectedCons] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const getUniqueValues = <T extends CourseBase>(
    courses: T[],
    property: keyof CourseBase
  ): string[] => {
    const uniqueSet = new Set<string>();
    courses.forEach((course) => {
      if (course[property]) {
        uniqueSet.add(course[property] as string);
      }
    });
    return Array.from(uniqueSet);
  };

  const getUniqueConstraints = (): string[] => {
    const uniqueSet = new Set<string>();

    data.courseku?.forEach((course) => {
      course.ownerCons?.forEach((cons) => uniqueSet.add(cons));
    });

    data.rekomendasi?.forEach((course) => {
      course.user?.cons?.forEach((cons) => uniqueSet.add(cons));
    });

    data.allcourse?.forEach((course) => {
      course.user?.cons?.forEach((cons) => uniqueSet.add(cons));
    });

    return Array.from(uniqueSet);
  };

  const availableLevels = getUniqueValues(
    [
      ...(data.courseku || []),
      ...(data.rekomendasi || []),
      ...(data.allcourse || []),
    ],
    "level"
  );
  const availableTypes = getUniqueValues(
    [
      ...(data.courseku || []),
      ...(data.rekomendasi || []),
      ...(data.allcourse || []),
    ],
    "courseType"
  );
  const availableConstraints = getUniqueConstraints();
  const availableLanguages = getUniqueValues(
    [
      ...(data.courseku || []),
      ...(data.rekomendasi || []),
      ...(data.allcourse || []),
    ],
    "language"
  );
  const availableSubjects = getUniqueValues(
    [
      ...(data.courseku || []),
      ...(data.rekomendasi || []),
      ...(data.allcourse || []),
    ],
    "courseSubject"
  );

  const filterCourses = <T extends CourseBase>(courses: T[]): T[] => {
    return courses.filter((course) => {
      const matchesSearch =
        !searchQuery.trim() ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLevel =
        selectedLevels.length === 0 || selectedLevels.includes(course.level);

      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(course.courseType);

      const matchesLanguage =
        selectedLanguages.length === 0 ||
        selectedLanguages.includes(course.language);

      const matchesSubject =
        selectedSubjects.length === 0 ||
        selectedSubjects.includes(course.courseSubject);

      const matchesConstraint =
        selectedCons.length === 0 ||
        (course as any).ownerCons?.some((cons: string) =>
          selectedCons.includes(cons)
        ) ||
        (course as any).user?.cons?.some((cons: string) =>
          selectedCons.includes(cons)
        );

      return (
        matchesSearch &&
        matchesLevel &&
        matchesType &&
        matchesLanguage &&
        matchesSubject &&
        matchesConstraint
      );
    });
  };

  const filteredCourseku = filterCourses<MyCourse>(data.courseku || []);
  const filteredRekomendasi = filterCourses<RecommendedCourse>(
    data.rekomendasi || []
  );
  const filteredAllcourse = filterCourses<RecommendedCourse>(
    data.allcourse || []
  );

  const toggleFilter = (
    value: string,
    selectedValues: string[],
    setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  return (
    <div className="relative overflow-clip h-fit grow w-screen flex flex-col justify-start items-start text-black pb-10 max-md:-mt-10">
      <div className="w-full h-fit overflow-hidden md:hidden z-10">
        <img
          src={getAsset("/searchimgmobile.webp")}
          alt="search-module"
          className="w-full h-full object-cover object-top dark:hidden"
        />
        <img
          src={getAsset("/searchimgmobiledark.webp")}
          alt="search-module"
          className="w-full h-full object-cover object-top hidden dark:block"
        />
      </div>
      <div className="w-full h-fit relative bg-tosca-600 dark:bg-tosca-800 max-md:-mt-4 py-7 px-6 md:py-16 md:px-10 lg:py-24 lg:px-20 z-[9]">
        <div className="flex flex-col gap-6 w-full md:w-3/5">
          <div className="flex flex-col gap-3 md:gap-6 w-full">
            <div className="font-suez text-h5 md:text-h4 lg:text-h3 text-white max-md:text-center">
              Course Pelatihan
            </div>
            <div className="font-space text-s8 md:text-s7 lg:text-s6 text-white">
              Temukan course pelatihan yang inspiratif dari guru lain, atau
              biarkan Gemini AI menciptakan course yang sempurna untukmu!
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-2 gap-6 w-full h-fit items-center justify-start">
            <div className="w-full max-lg:grid max-lg:grid-cols-12 max-lg:gap-3 max-lg:h-fit max-lg:items-center max-lg:justify-start">
              <div className="col-span-8">
                <Input
                  placeholder="Type here"
                  rightIcon={<Search />}
                  className="!h-10 md:!h-14 w-full col-span-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="col-span-4">
                <Drawer direction="bottom">
                  <DrawerTrigger className="lg:hidden w-full ">
                    <Button
                      variant={"secondary"}
                      className="w-full lg:hidden col-span-4"
                    >
                      Filter
                      <Filter />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="!w-full !max-w-none sm:!max-w-none bg-white dark:bg-[#2A2A2A]">
                    <DrawerHeader className="gap-3 justify-start items-start thin-scrollbar overflow-x-auto scrollbar-hide">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="font-space text-s6">Filters</div>
                        <DrawerClose className="text-black dark:text-white">
                          <X />
                        </DrawerClose>
                      </div>
                      <div className="space-y-7">
                        <div className="space-y-3">
                          <div className="font-space text-s8 text-[#A7A7A7]">
                            Jenjang Pendidikan
                          </div>
                          <div className="space-y-2">
                            {availableLevels.map((level) => (
                              <div
                                key={level}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox
                                  id={`level-${level}`}
                                  checked={selectedLevels.includes(level)}
                                  onCheckedChange={() =>
                                    toggleFilter(
                                      level,
                                      selectedLevels,
                                      setSelectedLevels
                                    )
                                  }
                                />
                                <label
                                  htmlFor={`level-${level}`}
                                  className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {level}
                                </label>
                              </div>
                            ))}
                            {availableLevels.length === 0 && (
                              <div className="text-s8 text-gray-500">
                                Tidak ada pilihan
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="font-space text-s8 text-[#A7A7A7]">
                            Tipe Pelatihan
                          </div>
                          <div className="space-y-2">
                            {availableTypes.map((type) => (
                              <div
                                key={type}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox
                                  id={`type-${type}`}
                                  checked={selectedTypes.includes(type)}
                                  onCheckedChange={() =>
                                    toggleFilter(
                                      type,
                                      selectedTypes,
                                      setSelectedTypes
                                    )
                                  }
                                />
                                <label
                                  htmlFor={`type-${type}`}
                                  className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {type}
                                </label>
                              </div>
                            ))}
                            {availableTypes.length === 0 && (
                              <div className="text-s8 text-gray-500">
                                Tidak ada pilihan
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="font-space text-s8 text-[#A7A7A7]">
                            Kendala
                          </div>
                          <div className="space-y-2">
                            {availableConstraints.map((constraint) => (
                              <div
                                key={constraint}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox
                                  id={`constraint-${constraint}`}
                                  checked={selectedCons.includes(constraint)}
                                  onCheckedChange={() =>
                                    toggleFilter(
                                      constraint,
                                      selectedCons,
                                      setSelectedCons
                                    )
                                  }
                                />
                                <label
                                  htmlFor={`constraint-${constraint}`}
                                  className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {constraint}
                                </label>
                              </div>
                            ))}
                            {availableConstraints.length === 0 && (
                              <div className="text-s8 text-gray-500">
                                Tidak ada pilihan
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="font-space text-s8 text-[#A7A7A7]">
                            Bahasa
                          </div>
                          <div className="space-y-2">
                            {availableLanguages.map((language) => (
                              <div
                                key={language}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox
                                  id={`language-${language}`}
                                  checked={selectedLanguages.includes(language)}
                                  onCheckedChange={() =>
                                    toggleFilter(
                                      language,
                                      selectedLanguages,
                                      setSelectedLanguages
                                    )
                                  }
                                />
                                <label
                                  htmlFor={`language-${language}`}
                                  className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {language}
                                </label>
                              </div>
                            ))}
                            {availableLanguages.length === 0 && (
                              <div className="text-s8 text-gray-500">
                                Tidak ada pilihan
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="font-space text-s8 text-[#A7A7A7]">
                            Mata Pelajaran
                          </div>
                          <div className="space-y-2">
                            {availableSubjects.map((subject) => (
                              <div
                                key={subject}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox
                                  id={`subject-${subject}`}
                                  checked={selectedSubjects.includes(subject)}
                                  onCheckedChange={() =>
                                    toggleFilter(
                                      subject,
                                      selectedSubjects,
                                      setSelectedSubjects
                                    )
                                  }
                                />
                                <label
                                  htmlFor={`subject-${subject}`}
                                  className="text-s8 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {subject}
                                </label>
                              </div>
                            ))}
                            {availableSubjects.length === 0 && (
                              <div className="text-s8 text-gray-500">
                                Tidak ada pilihan
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </DrawerHeader>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
            <Button
              onClick={() => navigate("/course/create")}
              variant={"secondary"}
              className="w-full lg:w-fit"
            >
              Buat Course Sendiri
              <BookMarked />
            </Button>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-[35%] h-full overflow-hidden max-md:hidden">
          <img
            src={getAsset("/searchimg.webp")}
            alt="search-module"
            className="w-full h-full object-cover object-left dark:hidden"
          />
          <img
            src={getAsset("/searchimgdark.webp")}
            alt="search-module"
            className="w-full h-full object-cover object-left hidden dark:block"
          />
        </div>
      </div>
      <div className="flex flex-row w-full items-start justify-between">
        <div className="w-fit pt-[60px] px-20 border-r-[1px] border-border max-lg:hidden space-y-5 text-black dark:text-white">
          <div className="font-space text-s4">Filters</div>
          <div className="space-y-7">
            <div className="space-y-3">
              <div className="font-space text-s7 text-[#A7A7A7]">
                Jenjang Pendidikan
              </div>
              <div className="space-y-2">
                {availableLevels.map((level) => (
                  <div key={level} className="flex items-center space-x-2">
                    <Checkbox
                      id={`level-${level}`}
                      checked={selectedLevels.includes(level)}
                      onCheckedChange={() =>
                        toggleFilter(level, selectedLevels, setSelectedLevels)
                      }
                    />
                    <label
                      htmlFor={`level-${level}`}
                      className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {level}
                    </label>
                  </div>
                ))}
                {availableLevels.length === 0 && (
                  <div className="text-s7 text-gray-500">Tidak ada pilihan</div>
                )}
              </div>
            </div>
            <div className="space-y-3">
              <div className="font-space text-s7 text-[#A7A7A7]">
                Tipe Pelatihan
              </div>
              <div className="space-y-2">
                {availableTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`type-${type}`}
                      checked={selectedTypes.includes(type)}
                      onCheckedChange={() =>
                        toggleFilter(type, selectedTypes, setSelectedTypes)
                      }
                    />
                    <label
                      htmlFor={`type-${type}`}
                      className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {type}
                    </label>
                  </div>
                ))}
                {availableTypes.length === 0 && (
                  <div className="text-s7 text-gray-500">Tidak ada pilihan</div>
                )}
              </div>
            </div>
            <div className="space-y-3">
              <div className="font-space text-s7 text-[#A7A7A7]">Kendala</div>
              <div className="space-y-2">
                {availableConstraints.map((constraint) => (
                  <div key={constraint} className="flex items-center space-x-2">
                    <Checkbox
                      id={`constraint-${constraint}`}
                      checked={selectedCons.includes(constraint)}
                      onCheckedChange={() =>
                        toggleFilter(constraint, selectedCons, setSelectedCons)
                      }
                    />
                    <label
                      htmlFor={`constraint-${constraint}`}
                      className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {constraint}
                    </label>
                  </div>
                ))}
                {availableConstraints.length === 0 && (
                  <div className="text-s7 text-gray-500">Tidak ada pilihan</div>
                )}
              </div>
            </div>
            <div className="space-y-3">
              <div className="font-space text-s7 text-[#A7A7A7]">Bahasa</div>
              <div className="space-y-2">
                {availableLanguages.map((language) => (
                  <div key={language} className="flex items-center space-x-2">
                    <Checkbox
                      id={`language-${language}`}
                      checked={selectedLanguages.includes(language)}
                      onCheckedChange={() =>
                        toggleFilter(
                          language,
                          selectedLanguages,
                          setSelectedLanguages
                        )
                      }
                    />
                    <label
                      htmlFor={`language-${language}`}
                      className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {language}
                    </label>
                  </div>
                ))}
                {availableLanguages.length === 0 && (
                  <div className="text-s7 text-gray-500">Tidak ada pilihan</div>
                )}
              </div>
            </div>
            <div className="space-y-3">
              <div className="font-space text-s7 text-[#A7A7A7]">
                Mata Pelajaran
              </div>
              <div className="space-y-2">
                {availableSubjects.map((subject) => (
                  <div key={subject} className="flex items-center space-x-2">
                    <Checkbox
                      id={`subject-${subject}`}
                      checked={selectedSubjects.includes(subject)}
                      onCheckedChange={() =>
                        toggleFilter(
                          subject,
                          selectedSubjects,
                          setSelectedSubjects
                        )
                      }
                    />
                    <label
                      htmlFor={`subject-${subject}`}
                      className="text-s7 font-space peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {subject}
                    </label>
                  </div>
                ))}
                {availableSubjects.length === 0 && (
                  <div className="text-s7 text-gray-500">Tidak ada pilihan</div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-8 px-5 md:py-10 md:px-12 lg:py-[60px] lg:px-20 flex flex-col gap-8 md:gap-11 lg:gap-[60px]">
          {filteredCourseku.length === 0 &&
            filteredRekomendasi.length === 0 &&
            filteredAllcourse.length === 0 &&
            searchQuery.trim() !== "" && (
              <div className="text-center w-full py-10">
                <div className="font-space text-s6 md:text-s5 lg:text-s4 text-gray-500">
                  Tidak ada hasil untuk "{searchQuery}"
                </div>
              </div>
            )}

          {filteredCourseku.length > 0 && (
            <div className="space-y-4 md:space-y-5">
              <div className="font-space text-s6 md:text-s5 lg:text-s4 text-tosca-500">
                Courseku
              </div>
              <div className="max-md:flex max-md:flex-row max-md:overflow-x-auto max-md:no-scrollbar max-md:pb-2 max-md:gap-4 md:grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredCourseku.map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    level={course.level}
                    pros={course.courseType}
                    progress={course.progress}
                  />
                ))}
              </div>
            </div>
          )}

          {filteredRekomendasi.length > 0 && (
            <div className="space-y-4 md:space-y-5">
              <div className="font-space text-s6 md:text-s5 lg:text-s4 text-tosca-500">
                Rekomendasi
              </div>
              <div className="max-md:flex max-md:flex-row max-md:overflow-x-auto max-md:no-scrollbar max-md:pb-2 max-md:gap-4 md:grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredRekomendasi.map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    level={course.level}
                    pros={course.courseType}
                  />
                ))}
              </div>
            </div>
          )}

          {filteredAllcourse.length > 0 && (
            <div className="space-y-4 md:space-y-5">
              <div className="font-space text-s6 md:text-s5 lg:text-s4 text-tosca-500">
                Semua Course
              </div>
              <div className="max-md:gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredAllcourse.map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    level={course.level}
                    pros={course.courseType}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Drawer direction="bottom">
        <DrawerTrigger className="md:hidden">
          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-1 py-4 px-5 text-white bg-tosca-600 rounded-[24px]">
            <div className="font-space text-s8">Tanya AI</div>
          </div>
        </DrawerTrigger>
        <DrawerContent className="bg-white dark:bg-[#2A2A2A] md:hidden w-full thin-scrollbar overflow-y-auto">
          <DrawerHeader className="gap-8 justify-between items-center flex-row flex py-4 px-5">
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="font-suez text-h6 lg:text-h5 text-tosca-500">
                Tanya AI
              </div>
              <div className="py-2 px-4 flex flex-row gap-[6px] border-[1px] border-border rounded-full">
                <div className="font-space text-b8">Powered by</div>
              </div>
            </div>
            <DrawerClose className="self-end text-black dark:text-white">
              <X />
            </DrawerClose>
          </DrawerHeader>
          <div className="w-full h-[2pt] bg-border" />
          <div className="flex flex-col w-full h-full">
            <div className="w-full h-fit py-4 px-5 gap-8 flex flex-col justify-end items-start text-start">
              <div className="w-[90%] font-space text-b8 p-3 bg-tosca-050 dark:bg-tosca-800 rounded-[8px] self-end">
                Lorem ipsum dolor sit amet consectetur. Feugiat scelerisque
                velit nulla mattis mattis vitae nunc nisi. Duis purus
                ullamcorper ultricies commodo elementum sagittis porttitor.
              </div>
              <div className="w-[90%] font-space text-b8">
                Lorem ipsum dolor sit amet consectetur. Feugiat scelerisque
                velit nulla mattis mattis vitae nunc nisi. Duis purus
                ullamcorper ultricies commodo elementum sagittis porttitor.
              </div>
              <div className="w-[90%] font-space text-b8 p-3 bg-tosca-050 dark:bg-tosca-800 rounded-[8px] self-end">
                Lorem ipsum dolor sit amet consectetur. Feugiat scelerisque
                velit nulla mattis mattis vitae nunc nisi. Duis purus
                ullamcorper ultricies commodo elementum sagittis porttitor.
              </div>
              <div className="w-[90%] font-space text-b8">
                Lorem ipsum dolor sit amet consectetur. Feugiat scelerisque
                velit nulla mattis mattis vitae nunc nisi. Duis purus
                ullamcorper ultricies commodo elementum sagittis porttitor.
              </div>
            </div>
            <div className="w-full h-fit">
              <div className="w-full h-[0.5pt] bg-border" />
              <div className="p-5 pb-4 w-full flex-row flex gap-1 items-center justify-between !h-[92px]">
                <Input placeholder="Type here" className="w-[145%]" />
                <Button variant="secondary" className="!h-12 w-[20%] !px-4">
                  <ArrowRight />
                </Button>
              </div>
              <div className="pb-5 px-5 flex flex-row gap-[6pt] items-center justify-center w-full">
                <div className="font-space text-b8 w-fit whitespace-nowrap">
                  Pilih mode:
                </div>
                <Select>
                  <SelectTrigger className="w-full !py-2 !px-3 !h-8 !rounded-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">
                      Tambahkan Konteks Profil Saya
                    </SelectItem>
                    <SelectItem value="false">
                      Tidak Tambahkan Konteks Profil Saya
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      <Drawer direction="right">
        <DrawerTrigger className="max-md:hidden">
          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-1 py-4 px-5 text-white bg-tosca-600 rounded-[24px]">
            <div className="font-space text-s7">Tanya AI</div>
          </div>
        </DrawerTrigger>
        <DrawerContent className="bg-white dark:bg-[#2A2A2A] max-md:hidden w-[429px]">
          <DrawerHeader className="gap-8 justify-between items-center flex-row flex py-4 px-5">
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="font-suez text-h6 lg:text-h5 text-tosca-500">
                Tanya AI
              </div>
              <div className="py-2 px-4 flex flex-row gap-[6px] border-[1px] border-border rounded-full">
                <div className="font-space text-b8">Powered by</div>
              </div>
            </div>
            <DrawerClose className="self-end text-black dark:text-white">
              <X />
            </DrawerClose>
          </DrawerHeader>
          <div className="w-full h-[1pt] bg-border" />
          <div className="flex flex-col w-full h-full justify-between">
            <div className="w-full h-full py-4 px-5 gap-8 flex flex-col justify-end items-start text-start overflow-y-auto thin-scrollbar">
              <div className="w-[90%] font-space text-b8 p-3 bg-tosca-050 dark:bg-tosca-800 rounded-[8px] self-end">
                Lorem ipsum dolor sit amet consectetur. Feugiat scelerisque
                velit nulla mattis mattis vitae nunc nisi. Duis purus
                ullamcorper ultricies commodo elementum sagittis porttitor.
              </div>
              <div className="w-[90%] font-space text-b8">
                Lorem ipsum dolor sit amet consectetur. Feugiat scelerisque
                velit nulla mattis mattis vitae nunc nisi. Duis purus
                ullamcorper ultricies commodo elementum sagittis porttitor.
              </div>
              <div className="w-[90%] font-space text-b8 p-3 bg-tosca-050 dark:bg-tosca-800 rounded-[8px] self-end">
                Lorem ipsum dolor sit amet consectetur. Feugiat scelerisque
                velit nulla mattis mattis vitae nunc nisi. Duis purus
                ullamcorper ultricies commodo elementum sagittis porttitor.
              </div>
              <div className="w-[90%] font-space text-b8">
                Lorem ipsum dolor sit amet consectetur. Feugiat scelerisque
                velit nulla mattis mattis vitae nunc nisi. Duis purus
                ullamcorper ultricies commodo elementum sagittis porttitor.
              </div>
            </div>
            <div className="w-full h-fit">
              <div className="w-full h-[0.5pt] bg-border" />
              <div className="p-5 pb-4 w-full flex-row flex gap-1 items-center justify-between !h-[92px]">
                <Input placeholder="Type here" className="w-[145%]" />
                <Button variant="secondary" className="!h-12 w-[20%] !px-4">
                  <ArrowRight />
                </Button>
              </div>
              <div className="pb-5 px-5 flex flex-row gap-[6pt] items-center justify-center w-full">
                <div className="font-space text-b8 w-fit whitespace-nowrap">
                  Pilih mode:
                </div>
                <Select>
                  <SelectTrigger className="w-full !py-2 !px-3 !h-8 !rounded-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">
                      Tambahkan Konteks Profil Saya
                    </SelectItem>
                    <SelectItem value="false">
                      Tidak Tambahkan Konteks Profil Saya
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

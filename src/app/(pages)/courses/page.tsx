import React from "react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/shared/CourseCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Search, Filter } from "lucide-react";

// Mock data for courses
const courseData = [
  {
    id: "c1",
    title: "Introduction to Elementary Mathematics",
    description: "A foundational course covering basic mathematics concepts for elementary school students.",
    imageUrl: "https://source.unsplash.com/SYTO3xs06fU",
    category: "Mathematics",
    level: "Beginner",
    badge: { text: "Popular", variant: "popular" },
    href: "/courses/elementary/math-101",
    instructor: "Dr. Sarah Johnson",
    lessons: 24,
    duration: "12 weeks",
  },
  {
    id: "c2",
    title: "Elementary Science: Exploring the Natural World",
    description: "An engaging introduction to science concepts for young learners through hands-on activities.",
    imageUrl: "https://source.unsplash.com/1-aA2Fadydc",
    category: "Science",
    level: "Beginner",
    badge: { text: "New", variant: "new" },
    href: "/courses/elementary/science-101",
    instructor: "Prof. David Chen",
    lessons: 18,
    duration: "10 weeks",
  },
  {
    id: "c3",
    title: "Middle School Algebra Foundations",
    description: "Build a strong foundation in algebraic concepts for middle school students.",
    imageUrl: "https://source.unsplash.com/B5PNmq5xdFI",
    category: "Mathematics",
    level: "Intermediate",
    href: "/courses/middle/algebra-101",
    instructor: "Prof. Michael Lee",
    lessons: 32,
    duration: "16 weeks",
  },
  {
    id: "c4",
    title: "Physics for High School Students",
    description: "Comprehensive physics course covering mechanics, electricity, and modern physics for high school students.",
    imageUrl: "https://source.unsplash.com/pF5yvZT94ik",
    category: "Science",
    level: "Advanced",
    href: "/courses/high/physics-101",
    instructor: "Dr. Robert Kim",
    lessons: 40,
    duration: "20 weeks",
  },
  {
    id: "c5",
    title: "Chemistry: Atoms, Molecules and Reactions",
    description: "Explore the fundamentals of chemistry through interactive lessons and virtual lab experiments.",
    imageUrl: "https://source.unsplash.com/p5BoBF0XJUA",
    category: "Science",
    level: "Advanced",
    href: "/courses/high/chemistry-101",
    instructor: "Dr. Emily Zhang",
    lessons: 36,
    duration: "18 weeks",
  },
  {
    id: "c6",
    title: "College Entrance Exam Preparation",
    description: "Comprehensive preparation for college entrance exams with practice tests and strategies.",
    imageUrl: "https://source.unsplash.com/0Zx1bDv5BNY",
    category: "Test Prep",
    level: "Advanced",
    badge: { text: "Best Seller", variant: "popular" },
    href: "/courses/entrance/college-prep",
    instructor: "Prof. James Wilson",
    lessons: 48,
    duration: "24 weeks",
  },
  {
    id: "c7",
    title: "Introduction to Computer Science",
    description: "Learn the fundamental concepts of computer science and programming basics.",
    imageUrl: "https://source.unsplash.com/ZkwAtOwppEw",
    category: "Computer Science",
    level: "Beginner",
    href: "/courses/bachelor/cs-intro",
    instructor: "Dr. Alan Smith",
    lessons: 42,
    duration: "21 weeks",
  },
  {
    id: "c8",
    title: "Business Administration Fundamentals",
    description: "An introduction to key business administration concepts for undergraduate students.",
    imageUrl: "https://source.unsplash.com/JN0SUcTOig0",
    category: "Business",
    level: "Intermediate",
    href: "/courses/bachelor/business-admin",
    instructor: "Prof. Lisa Brown",
    lessons: 36,
    duration: "18 weeks",
  },
];

const CoursesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container-custom py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Courses</h1>
            <p className="text-lg text-blue-100 max-w-2xl">
              Discover a wide range of courses designed for all educational levels,
              from elementary to undergraduate. Find the perfect course to boost your learning journey.
            </p>
          </div>
        </section>

        {/* Filters and Search Section */}
        <section className="bg-gray-50 border-b">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search courses..."
                    className="w-full pl-10"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>

                <select
                  className="p-2 border rounded-md bg-white text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>Category</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="language">Language</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="business">Business</option>
                </select>

                <select
                  className="p-2 border rounded-md bg-white text-sm"
                  defaultValue=""
                >
                  <option value="" disabled>Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid Section */}
        <section className="py-12">
          <div className="container-custom">
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All Courses</TabsTrigger>
                <TabsTrigger value="elementary">Elementary</TabsTrigger>
                <TabsTrigger value="middle">Middle School</TabsTrigger>
                <TabsTrigger value="high">High School</TabsTrigger>
                <TabsTrigger value="entrance">Entrance Prep</TabsTrigger>
                <TabsTrigger value="bachelor">Bachelor Level</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {courseData.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="elementary">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {courseData
                    .filter(course =>
                      course.id.includes("c1") || course.id.includes("c2")
                    )
                    .map((course) => (
                      <CourseCard key={course.id} {...course} />
                    ))
                  }
                </div>
              </TabsContent>

              <TabsContent value="middle">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {courseData
                    .filter(course => course.id.includes("c3"))
                    .map((course) => (
                      <CourseCard key={course.id} {...course} />
                    ))
                  }
                </div>
              </TabsContent>

              <TabsContent value="high">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {courseData
                    .filter(course =>
                      course.id.includes("c4") || course.id.includes("c5")
                    )
                    .map((course) => (
                      <CourseCard key={course.id} {...course} />
                    ))
                  }
                </div>
              </TabsContent>

              <TabsContent value="entrance">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {courseData
                    .filter(course => course.id.includes("c6"))
                    .map((course) => (
                      <CourseCard key={course.id} {...course} />
                    ))
                  }
                </div>
              </TabsContent>

              <TabsContent value="bachelor">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {courseData
                    .filter(course =>
                      course.id.includes("c7") || course.id.includes("c8")
                    )
                    .map((course) => (
                      <CourseCard key={course.id} {...course} />
                    ))
                  }
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;

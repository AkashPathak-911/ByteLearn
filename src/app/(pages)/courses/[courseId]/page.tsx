"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  PlayCircle,
  Clock,
  BarChart,
  Award,
  User,
  CheckCircle,
  BookOpen,
  Calendar,
  Star,
  MessageSquare,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function CourseDetailPage({ params }: { params: { courseId: string } }) {
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  // Mock course data
  const course = {
    id: params.courseId,
    title: "Advanced Python Programming: Data Science & Machine Learning",
    instructor: "Dr. Alan Smith",
    instructorTitle: "PhD in Computer Science, Stanford University",
    instructorImage: "https://source.unsplash.com/c_GmwfHBDzk/400x400",
    level: "Intermediate",
    category: "Computer Science",
    rating: 4.8,
    reviews: 324,
    students: 1423,
    lastUpdated: "March 2025",
    language: "English",
    price: 89.99,
    discountPrice: 49.99,
    duration: "8 weeks",
    lectures: 42,
    totalHours: 38,
    description: "Master Python programming with a focus on data science and machine learning applications. This comprehensive course will take you from the fundamentals of Python to advanced concepts in data analysis, visualization, and building machine learning models.",
    image: "https://source.unsplash.com/ZkwAtOwppEw/800x450",
    tags: ["Python", "Data Science", "Machine Learning", "AI", "Statistics"],
    preview: "https://www.youtube.com/embed/rfscVS0vtbw",
    whatYouWillLearn: [
      "Understand advanced Python programming concepts",
      "Master data manipulation with NumPy and Pandas",
      "Build compelling data visualizations with Matplotlib and Seaborn",
      "Implement machine learning algorithms using Scikit-learn",
      "Create neural networks with TensorFlow and Keras",
      "Work with real-world datasets to solve business problems",
      "Deploy machine learning models to production environments",
      "Optimize code for performance and scalability"
    ],
    curriculum: [
      {
        title: "Introduction to Python for Data Science",
        lessons: [
          { title: "Course Overview and Setup", duration: "15:20", type: "video", isPreview: true },
          { title: "Python Basics Review", duration: "28:45", type: "video" },
          { title: "Working with Variables and Data Types", duration: "23:12", type: "video" },
          { title: "Control Flow and Functions", duration: "31:08", type: "video" },
          { title: "Python Programming Quiz", type: "quiz" }
        ]
      },
      {
        title: "Data Manipulation with NumPy and Pandas",
        lessons: [
          { title: "Introduction to NumPy Arrays", duration: "22:15", type: "video" },
          { title: "Array Operations and Functions", duration: "26:30", type: "video" },
          { title: "Getting Started with Pandas", duration: "34:18", type: "video" },
          { title: "Data Cleaning and Preprocessing", duration: "41:23", type: "video" },
          { title: "Data Analysis Assignment", type: "assignment" }
        ]
      },
      {
        title: "Data Visualization",
        lessons: [
          { title: "Visualization Basics with Matplotlib", duration: "28:42", type: "video" },
          { title: "Advanced Plots and Customization", duration: "32:17", type: "video" },
          { title: "Interactive Visualizations with Plotly", duration: "36:54", type: "video" },
          { title: "Creating Dashboards with Dash", duration: "45:08", type: "video" },
          { title: "Visualization Project", type: "project" }
        ]
      },
      {
        title: "Machine Learning Fundamentals",
        lessons: [
          { title: "Introduction to Machine Learning", duration: "38:22", type: "video" },
          { title: "Supervised vs Unsupervised Learning", duration: "29:16", type: "video" },
          { title: "Model Training and Evaluation", duration: "36:45", type: "video" },
          { title: "Regression Algorithms", duration: "42:31", type: "video" },
          { title: "Classification Algorithms", duration: "40:28", type: "video" },
          { title: "Machine Learning Quiz", type: "quiz" }
        ]
      },
      {
        title: "Deep Learning and Neural Networks",
        lessons: [
          { title: "Introduction to Neural Networks", duration: "45:12", type: "video" },
          { title: "Building Models with TensorFlow", duration: "53:28", type: "video" },
          { title: "Convolutional Neural Networks", duration: "47:34", type: "video" },
          { title: "Recurrent Neural Networks", duration: "51:23", type: "video" },
          { title: "Deep Learning Project", type: "project" }
        ]
      },
      {
        title: "Final Project: End-to-End Data Science Solution",
        lessons: [
          { title: "Project Requirements and Setup", duration: "18:45", type: "video" },
          { title: "Data Collection and Preprocessing", duration: "32:20", type: "video" },
          { title: "Model Selection and Training", duration: "41:36", type: "video" },
          { title: "Model Deployment and Monitoring", duration: "28:54", type: "video" },
          { title: "Final Project Submission", type: "project" }
        ]
      }
    ],
    requirements: [
      "Basic knowledge of Python programming",
      "Understanding of fundamental programming concepts",
      "A computer with Python installed (setup instructions provided)",
      "No prior data science or machine learning experience required",
      "Enthusiasm for learning and problem-solving"
    ]
  };

  const toggleSection = (index: number) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter(i => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };

  // Calculate total lessons and hours
  const totalLessons = course.curriculum.reduce((acc, section) => acc + section.lessons.length, 0);
  const totalVideoDurations = course.curriculum.flatMap(section =>
    section.lessons
      .filter(lesson => lesson.type === "video" && lesson.duration)
      .map(lesson => {
        const [minutes, seconds] = (lesson.duration as string).split(':').map(Number);
        return minutes + seconds / 60;
      })
  ).reduce((a, b) => a + b, 0);

  return (
    <div className="container-custom py-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/courses">Courses</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href={`/courses?category=${encodeURIComponent(course.category)}`}>{course.category}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <span className="text-muted-foreground">{course.title}</span>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Course Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>

          <div className="flex flex-wrap gap-2 items-center text-sm">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="ml-1 font-bold">{course.rating}</span>
              <span className="ml-1 text-muted-foreground">({course.reviews} reviews)</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="ml-1 text-muted-foreground">{course.students} students</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <div>
              <Badge variant="outline">{course.level}</Badge>
            </div>
            <span className="text-muted-foreground">•</span>
            <div className="text-muted-foreground">
              Last updated: {course.lastUpdated}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Image
              src={course.instructorImage}
              alt={course.instructor}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="font-medium">{course.instructor}</div>
              <div className="text-xs text-muted-foreground">{course.instructorTitle}</div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border">
            <h3 className="text-lg font-semibold mb-3">What you'll learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {course.whatYouWillLearn.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Card className="sticky top-6">
            <div className="relative aspect-video">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Preview Course
                </Button>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">${course.discountPrice}</span>
                {course.discountPrice < course.price && (
                  <span className="ml-2 text-lg text-muted-foreground line-through">${course.price}</span>
                )}
                {course.discountPrice < course.price && (
                  <Badge variant="outline" className="ml-2 bg-green-100 text-green-800 border-green-200">
                    {Math.round((1 - course.discountPrice / course.price) * 100)}% off
                  </Badge>
                )}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>{course.duration} ({course.totalHours} hours)</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  <span>{totalLessons} lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-muted-foreground" />
                  <span>{course.level} level</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span>Full lifetime access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-muted-foreground" />
                  <span>Certificate of completion</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full">Enroll Now</Button>
                <Button variant="outline" className="w-full">Add to Wishlist</Button>
              </div>

              <div className="mt-4 text-center text-sm text-muted-foreground">
                30-Day Money-Back Guarantee
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Course Tabs */}
      <Tabs defaultValue="curriculum" className="mb-12">
        <TabsList className="w-full border-b rounded-none justify-start h-auto p-0 bg-transparent">
          <TabsTrigger
            value="curriculum"
            className="rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none bg-transparent"
          >
            Curriculum
          </TabsTrigger>
          <TabsTrigger
            value="description"
            className="rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none bg-transparent"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="instructor"
            className="rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none bg-transparent"
          >
            Instructor
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none bg-transparent"
          >
            Reviews
          </TabsTrigger>
        </TabsList>

        <TabsContent value="curriculum" className="pt-6">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Course Content</h2>
            <div className="text-sm text-muted-foreground">
              {course.curriculum.length} sections • {totalLessons} lessons • {Math.floor(totalVideoDurations / 60)}h {Math.round(totalVideoDurations % 60)}m total length
            </div>
          </div>

          <div className="space-y-4">
            {course.curriculum.map((section, sectionIndex) => (
              <div key={sectionIndex} className="border rounded-lg overflow-hidden">
                <div
                  className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(sectionIndex)}
                >
                  <div className="font-medium">
                    <span className="mr-2">{sectionIndex + 1}.</span>
                    {section.title}
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-muted-foreground mr-3">
                      {section.lessons.length} lessons
                    </span>
                    {expandedSections.includes(sectionIndex) ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </div>

                {expandedSections.includes(sectionIndex) && (
                  <div className="divide-y">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <div key={lessonIndex} className="p-4 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          {lesson.type === "video" ? (
                            <PlayCircle className="h-5 w-5 text-blue-600" />
                          ) : lesson.type === "quiz" ? (
                            <BarChart className="h-5 w-5 text-purple-600" />
                          ) : lesson.type === "assignment" ? (
                            <FileText className="h-5 w-5 text-orange-600" />
                          ) : (
                            <Award className="h-5 w-5 text-green-600" />
                          )}

                          <div>
                            <div className="font-medium">{lesson.title}</div>
                            <div className="text-xs text-muted-foreground">
                              {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}
                              {lesson.isPreview && <span className="ml-2 text-blue-600">(Preview)</span>}
                            </div>
                          </div>
                        </div>

                        {lesson.duration && (
                          <div className="text-sm text-muted-foreground">{lesson.duration}</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="description" className="pt-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">About This Course</h2>
            <p className="text-gray-700 leading-relaxed">{course.description}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Requirements</h3>
            <ul className="list-disc pl-5 space-y-2">
              {course.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="bg-blue-50">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="instructor" className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-24 h-24 relative flex-shrink-0">
              <Image
                src={course.instructorImage}
                alt={course.instructor}
                fill
                className="rounded-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold">{course.instructor}</h2>
                <p className="text-muted-foreground">{course.instructorTitle}</p>
              </div>

              <div className="flex gap-4 text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span>4.8 Instructor Rating</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span>241 Reviews</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>2,814 Students</span>
                </div>
                <div className="flex items-center">
                  <PlayCircle className="h-4 w-4 mr-1" />
                  <span>12 Courses</span>
                </div>
              </div>

              <div className="text-gray-700">
                <p className="mb-3">
                  Dr. Alan Smith is a renowned expert in Data Science and Machine Learning with over 15 years of industry and academic experience. He received his PhD from Stanford University and has worked at leading tech companies including Google and Microsoft.
                </p>
                <p className="mb-3">
                  His research focuses on the application of machine learning techniques to solve real-world problems in various domains including healthcare, finance, and e-commerce. Dr. Smith has published numerous papers in top-tier conferences and journals.
                </p>
                <p>
                  As an instructor, he has taught thousands of students worldwide and is known for his ability to explain complex concepts in a simple and intuitive manner. His teaching philosophy is centered around practical, hands-on learning that prepares students for real-world challenges.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="pt-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary">{course.rating}</div>
                <div className="flex mt-2 justify-center">
                  {Array(5).fill(0).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(course.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground mt-1">Course Rating</div>
              </div>

              <div className="flex-1 space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => {
                  // Mock percentage for each rating
                  const percentage = rating === 5 ? 78 :
                                    rating === 4 ? 16 :
                                    rating === 3 ? 4 :
                                    rating === 2 ? 1 : 1;
                  return (
                    <div key={rating} className="flex items-center gap-3">
                      <div className="flex items-center w-20">
                        <span className="mr-1">{rating}</span>
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      </div>
                      <Progress value={percentage} className="h-2 flex-1" />
                      <div className="w-12 text-sm text-right">{percentage}%</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mock reviews - we would fetch these from an API in a real application */}
          <div className="space-y-6">
            {[
              {
                name: "John D.",
                rating: 5,
                date: "March 12, 2025",
                comment: "This course exceeded my expectations! The instructor explains complex topics in a very understandable way. I particularly enjoyed the hands-on projects that helped me apply what I learned."
              },
              {
                name: "Sarah M.",
                rating: 5,
                date: "February 28, 2025",
                comment: "Comprehensive and well-structured course. The content is up-to-date and relevant to today's industry standards. As someone with limited programming experience, I found the pace perfect and the explanations clear."
              },
              {
                name: "Robert K.",
                rating: 4,
                date: "February 15, 2025",
                comment: "Great course overall. The machine learning section was particularly strong. I would have appreciated more depth on deep learning concepts, but overall it's a solid introduction to the field."
              }
            ].map((review, index) => (
              <div key={index} className="border-t pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.date}</div>
                  </div>
                  <div className="flex">
                    {Array(5).fill(0).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
              </div>
            ))}

            <Button variant="outline" className="w-full">Load More Reviews</Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Courses - could be added here */}
    </div>
  );
}

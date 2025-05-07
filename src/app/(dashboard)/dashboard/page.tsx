"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, BookCheck, GraduationCap, Clock, Calendar, Award, BarChart2, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  // Mock data for the dashboard
  const enrolledCourses = 6;
  const completedCourses = 2;
  const upcomingClasses = 3;
  const assignmentsDue = 4;
  const totalPoints = 1250;
  const coursesProgress = [
    { id: 1, name: "Python Programming", progress: 68, category: "Computer Science", href: "/dashboard/courses/123" },
    { id: 2, name: "Digital Marketing", progress: 42, category: "Business", href: "/dashboard/courses/456" },
    { id: 3, name: "Introduction to Physics", progress: 92, category: "Science", href: "/dashboard/courses/789" },
    { id: 4, name: "Algebra Fundamentals", progress: 35, category: "Mathematics", href: "/dashboard/courses/101" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your learning journey.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Enrolled Courses</p>
                <h3 className="text-2xl font-bold">{enrolledCourses}</h3>
              </div>
              <div className="p-2 bg-blue-100 rounded-full">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed Courses</p>
                <h3 className="text-2xl font-bold">{completedCourses}</h3>
              </div>
              <div className="p-2 bg-green-100 rounded-full">
                <BookCheck className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Upcoming Live Classes</p>
                <h3 className="text-2xl font-bold">{upcomingClasses}</h3>
              </div>
              <div className="p-2 bg-indigo-100 rounded-full">
                <Calendar className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Assignments Due</p>
                <h3 className="text-2xl font-bold">{assignmentsDue}</h3>
              </div>
              <div className="p-2 bg-red-100 rounded-full">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Course progress */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5" />
                Your Course Progress
              </span>
              <Link href="/dashboard/courses">
                <Button variant="ghost" size="sm">View All</Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {coursesProgress.map((course) => (
                <div key={course.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Link href={course.href} className="text-sm font-medium hover:underline">
                      {course.name}
                    </Link>
                    <span className="text-xs text-muted-foreground bg-slate-100 px-2 py-0.5 rounded-full">
                      {course.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Progress value={course.progress} className="h-2" />
                    <div className="font-medium text-sm w-12 text-right">
                      {course.progress}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Your Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-16 w-16 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                  {totalPoints}
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl">Good Progress!</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                You've earned {totalPoints} points this month.
                Keep up the good work!
              </p>
              <Button className="w-full">View Your Achievements</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4 items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">Web Development - HTML & CSS Fundamentals</h4>
                <div className="text-sm text-muted-foreground mt-1">Today, 2:00 PM - 4:00 PM</div>
                <div className="text-sm mt-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Live Class
                  </span>
                </div>
              </div>
              <Button variant="outline" size="sm">Join</Button>
            </div>

            <div className="flex gap-4 items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 flex items-center justify-center bg-red-100 rounded-lg flex-shrink-0">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">Data Science - Python for Analytics</h4>
                <div className="text-sm text-muted-foreground mt-1">Assignment Due: Tomorrow, 11:59 PM</div>
                <div className="text-sm mt-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Pending
                  </span>
                </div>
              </div>
              <Button variant="outline" size="sm">View</Button>
            </div>

            <div className="flex gap-4 items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-lg flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">Introduction to Economics</h4>
                <div className="text-sm text-muted-foreground mt-1">Quiz: Thursday, 10:00 AM</div>
                <div className="text-sm mt-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Upcoming
                  </span>
                </div>
              </div>
              <Button variant="outline" size="sm">Prepare</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

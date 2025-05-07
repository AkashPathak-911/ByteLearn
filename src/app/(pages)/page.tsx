import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, BookOpen, Video, Users, Calendar, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container-custom py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Learn Smarter, Not Harder
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Complete learning platform for students from Class 1 to undergraduate level.
              Access comprehensive study materials, video lessons, and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/courses">
                  Explore Courses
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                <Link href="/signup">
                  Sign Up Free
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/909963604/4235056531.svg"
                alt="Students learning online"
                width={600}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-lg shadow-sm bg-blue-50">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div className="p-6 rounded-lg shadow-sm bg-green-50">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">Video Lessons</div>
            </div>
            <div className="p-6 rounded-lg shadow-sm bg-purple-50">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-600">Expert Instructors</div>
            </div>
            <div className="p-6 rounded-lg shadow-sm bg-orange-50">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600">Subject Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Levels Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Learning for Every Stage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform caters to learners of all ages and educational levels,
              providing tailored content and resources for each stage of education.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Elementary Education */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-orange-400 relative">
                <Image
                  src="https://source.unsplash.com/5NLCaz2wJXE"
                  fill
                  alt="Elementary education"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <span className="grade-badge-elementary mb-3 inline-block">Classes 1-5</span>
                <h3 className="text-xl font-semibold mb-3">Elementary Education</h3>
                <p className="text-gray-600 mb-4">
                  Fun and interactive learning activities that build a strong foundation in core subjects.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/courses/elementary">
                    Explore Classes <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Middle School */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-blue-400 relative">
                <Image
                  src="https://source.unsplash.com/PDX_a_82obo"
                  fill
                  alt="Middle school education"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <span className="grade-badge-middle mb-3 inline-block">Classes 6-8</span>
                <h3 className="text-xl font-semibold mb-3">Middle School</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive curriculum that builds critical thinking and problem-solving skills.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/courses/middle">
                    Explore Classes <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* High School */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-purple-400 relative">
                <Image
                  src="https://source.unsplash.com/PmNjS6b3XP4"
                  fill
                  alt="High school education"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <span className="grade-badge-high mb-3 inline-block">Classes 9-12</span>
                <h3 className="text-xl font-semibold mb-3">High School</h3>
                <p className="text-gray-600 mb-4">
                  Advanced coursework that prepares students for college and careers.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/courses/high">
                    Explore Classes <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Entrance Preparation */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-red-400 relative">
                <Image
                  src="https://source.unsplash.com/GDokEYnOfnE"
                  fill
                  alt="Entrance exam preparation"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <span className="grade-badge-high mb-3 inline-block">Competitive Exams</span>
                <h3 className="text-xl font-semibold mb-3">Entrance Preparation</h3>
                <p className="text-gray-600 mb-4">
                  Specialized coaching for various competitive entrance examinations.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/courses/entrance">
                    Explore Courses <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Undergraduate */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-green-400 relative">
                <Image
                  src="https://source.unsplash.com/aJeH0KcFkuc"
                  fill
                  alt="Undergraduate education"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <span className="grade-badge-college mb-3 inline-block">Higher Education</span>
                <h3 className="text-xl font-semibold mb-3">Undergraduate Level</h3>
                <p className="text-gray-600 mb-4">
                  Specialized courses for various undergraduate programs and majors.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/courses/bachelor">
                    Explore Degrees <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Professional Development */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-yellow-400 relative">
                <Image
                  src="https://source.unsplash.com/QckxruozjRg"
                  fill
                  alt="Professional development"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <span className="grade-badge-college mb-3 inline-block">Career Skills</span>
                <h3 className="text-xl font-semibold mb-3">Professional Development</h3>
                <p className="text-gray-600 mb-4">
                  Skill enhancement courses for working professionals and job seekers.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/courses/professional">
                    Explore Courses <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/courses">
                View All Courses
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Why Learn With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform offers a comprehensive learning experience with features
              designed to enhance your educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Notes</h3>
              <p className="text-gray-600">
                Access detailed study materials and notes for all subjects and educational levels.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Video Lessons</h3>
              <p className="text-gray-600">
                Learn with high-quality video lessons taught by expert educators in their fields.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Faculty</h3>
              <p className="text-gray-600">
                Learn from experienced educators who are experts in their respective subjects.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Live Classes</h3>
              <p className="text-gray-600">
                Participate in interactive live classes with real-time doubt resolution.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Practice Tests</h3>
              <p className="text-gray-600">
                Test your knowledge with practice exams and get instant feedback.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain-circuit text-yellow-600">
                  <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z" />
                  <path d="M16 8V5c0-1.1.9-2 2-2" />
                  <path d="M12 13h4" />
                  <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                  <path d="M12 8h8" />
                  <path d="M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                  <path d="M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                  <path d="M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                  <path d="M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Learning</h3>
              <p className="text-gray-600">
                Get customized learning paths based on your strengths and areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already benefiting from our comprehensive
            learning platform. Get started today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100" asChild>
              <Link href="/signup">
                Get Started For Free
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

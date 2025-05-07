import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Twitter, Linkedin, Mail, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Faculty data
const facultyMembers = [
  {
    id: "f1",
    name: "Dr. Alan Smith",
    title: "Professor of Computer Science",
    department: "Computer Science",
    specialization: "Data Science and Machine Learning",
    image: "https://source.unsplash.com/c_GmwfHBDzk/400x400",
    email: "alan.smith@ByteLearn.com",
    bio: "Dr. Alan Smith is a renowned expert in Data Science and Machine Learning with over 15 years of industry and academic experience. He received his PhD from Stanford University and has worked at leading tech companies including Google and Microsoft.",
    courses: ["Python Programming", "Machine Learning Fundamentals", "Data Science with Python"],
    rating: 4.8,
    students: 2814,
    social: {
      linkedin: "https://linkedin.com/in/alan-smith",
      twitter: "https://twitter.com/alansmith",
      facebook: "https://facebook.com/alan.smith"
    }
  },
  {
    id: "f2",
    name: "Dr. Sarah Johnson",
    title: "Associate Professor of Mathematics",
    department: "Mathematics",
    specialization: "Applied Mathematics and Statistics",
    image: "https://source.unsplash.com/7ySdRuQcfiU/400x400",
    email: "sarah.johnson@ByteLearn.com",
    bio: "Dr. Sarah Johnson specializes in applied mathematics with applications in data analysis and statistical modeling. She has published extensively in top mathematics journals and brings real-world problems into her teaching.",
    courses: ["College Algebra", "Statistical Methods", "Calculus for Scientists"],
    rating: 4.9,
    students: 2341,
    social: {
      linkedin: "https://linkedin.com/in/sarah-johnson",
      twitter: "https://twitter.com/sarahjohnson",
      facebook: "https://facebook.com/sarah.johnson"
    }
  },
  {
    id: "f3",
    name: "Prof. David Chen",
    title: "Assistant Professor of Education",
    department: "Education",
    specialization: "Elementary Education & Cognitive Development",
    image: "https://source.unsplash.com/7YVZYaVbUmw/400x400",
    email: "david.chen@ByteLearn.com",
    bio: "Professor Chen is dedicated to improving elementary education through research-backed teaching methods. His innovative approaches to learning have helped thousands of young students develop strong foundational skills.",
    courses: ["Child Development", "Teaching Methods for Elementary Education", "Educational Psychology"],
    rating: 4.7,
    students: 1875,
    social: {
      linkedin: "https://linkedin.com/in/david-chen",
      twitter: "https://twitter.com/davidchen",
      facebook: "https://facebook.com/david.chen"
    }
  },
  {
    id: "f4",
    name: "Dr. Emily Zhang",
    title: "Professor of Chemistry",
    department: "Science",
    specialization: "Organic Chemistry & Biochemistry",
    image: "https://source.unsplash.com/IF9TK5Uy-KI/400x400",
    email: "emily.zhang@ByteLearn.com",
    bio: "Dr. Zhang's research in organic chemistry has led to breakthroughs in pharmaceutical development. She brings her extensive laboratory experience into the classroom, making complex chemistry concepts accessible to students.",
    courses: ["General Chemistry", "Organic Chemistry", "Biochemistry Fundamentals"],
    rating: 4.6,
    students: 2109,
    social: {
      linkedin: "https://linkedin.com/in/emily-zhang",
      twitter: "https://twitter.com/emilyzhang",
      facebook: "https://facebook.com/emily.zhang"
    }
  },
  {
    id: "f5",
    name: "Prof. Michael Lee",
    title: "Professor of Physics",
    department: "Science",
    specialization: "Theoretical Physics & Quantum Mechanics",
    image: "https://source.unsplash.com/mEZ3PoFGs_k/400x400",
    email: "michael.lee@ByteLearn.com",
    bio: "Professor Lee has dedicated his career to making complex physics concepts understandable to students. His research in theoretical physics has been published in leading scientific journals.",
    courses: ["Introduction to Physics", "Advanced Physics", "Quantum Mechanics"],
    rating: 4.8,
    students: 1932,
    social: {
      linkedin: "https://linkedin.com/in/michael-lee",
      twitter: "https://twitter.com/michaellee",
      facebook: "https://facebook.com/michael.lee"
    }
  },
  {
    id: "f6",
    name: "Dr. Lisa Brown",
    title: "Professor of Business Administration",
    department: "Business",
    specialization: "Strategic Management & Entrepreneurship",
    image: "https://source.unsplash.com/zDyJOj8ZXG0/400x400",
    email: "lisa.brown@ByteLearn.com",
    bio: "Dr. Brown combines academic excellence with real-world business experience. She has founded two successful startups and advised numerous businesses, bringing practical insights to her business administration courses.",
    courses: ["Business Fundamentals", "Strategic Management", "Entrepreneurship"],
    rating: 4.9,
    students: 2450,
    social: {
      linkedin: "https://linkedin.com/in/lisa-brown",
      twitter: "https://twitter.com/lisabrown",
      facebook: "https://facebook.com/lisa.brown"
    }
  },
  {
    id: "f7",
    name: "Prof. James Wilson",
    title: "Senior Lecturer in Test Preparation",
    department: "Test Preparation",
    specialization: "College Entrance Exams & Standardized Testing",
    image: "https://source.unsplash.com/sibVwORYqs0/400x400",
    email: "james.wilson@ByteLearn.com",
    bio: "Professor Wilson specializes in preparing students for college entrance examinations. His systematic approach to test preparation has helped thousands of students achieve their target scores and gain admission to top universities.",
    courses: ["SAT Preparation", "College Entrance Exam Strategies", "Standardized Test Mastery"],
    rating: 4.8,
    students: 3150,
    social: {
      linkedin: "https://linkedin.com/in/james-wilson",
      twitter: "https://twitter.com/jameswilson",
      facebook: "https://facebook.com/james.wilson"
    }
  },
  {
    id: "f8",
    name: "Dr. Robert Kim",
    title: "Associate Professor of Physics",
    department: "Science",
    specialization: "Astrophysics & Cosmology",
    image: "https://source.unsplash.com/d1UPkiFd04A/400x400",
    email: "robert.kim@ByteLearn.com",
    bio: "Dr. Kim's passion for astrophysics has inspired countless students. His research on cosmic phenomena has been featured in leading scientific publications, and he excels at making complex astronomical concepts accessible.",
    courses: ["Introduction to Astronomy", "Astrophysics", "Cosmology and the Universe"],
    rating: 4.7,
    students: 1820,
    social: {
      linkedin: "https://linkedin.com/in/robert-kim",
      twitter: "https://twitter.com/robertkim",
      facebook: "https://facebook.com/robert.kim"
    }
  }
];

// Department data for filtering
const departments = [
  { name: "All Departments", value: "all" },
  { name: "Computer Science", value: "computer-science" },
  { name: "Mathematics", value: "mathematics" },
  { name: "Science", value: "science" },
  { name: "Business", value: "business" },
  { name: "Education", value: "education" },
  { name: "Test Preparation", value: "test-preparation" }
];

export default function FacultyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container-custom py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Meet Our Expert Faculty</h1>
              <p className="text-xl text-blue-100 mb-6">
                Learn from industry experts and experienced educators dedicated to your success
              </p>
              <div className="flex items-center justify-center max-w-md mx-auto">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Search faculty by name or expertise..."
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 focus-visible:ring-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Department Filter */}
        <section className="bg-gray-50 py-4 border-b">
          <div className="container-custom">
            <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar">
              {departments.map(dept => (
                <Button
                  key={dept.value}
                  variant={dept.value === "all" ? "default" : "outline"}
                  className="whitespace-nowrap"
                >
                  {dept.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Grid */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {facultyMembers.map((faculty) => (
                <Card key={faculty.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <Image
                      src={faculty.image}
                      alt={faculty.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                      <h3 className="text-xl font-bold text-white">{faculty.name}</h3>
                      <p className="text-white/90 text-sm">{faculty.title}</p>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        {faculty.department}
                      </Badge>
                      <div className="flex items-center text-sm text-yellow-500">
                        <span className="font-bold mr-1">{faculty.rating}</span>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm line-clamp-4 mb-4">
                      {faculty.bio}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Specialization</h4>
                      <p className="text-sm text-gray-600">{faculty.specialization}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Courses</h4>
                      <div className="flex flex-wrap gap-1">
                        {faculty.courses.map((course, index) => (
                          <Badge key={index} variant="outline" className="bg-gray-100">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Link href={faculty.social.linkedin} passHref>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Linkedin className="h-4 w-4 text-blue-600" />
                          </Button>
                        </Link>
                        <Link href={faculty.social.twitter} passHref>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Twitter className="h-4 w-4 text-blue-400" />
                          </Button>
                        </Link>
                        <Link href={`mailto:${faculty.email}`} passHref>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                            <Mail className="h-4 w-4 text-gray-600" />
                          </Button>
                        </Link>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/faculty/${faculty.id}`}>View Profile</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="bg-blue-50 py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Teaching Team</h2>
              <p className="text-gray-600 mb-8">
                Are you passionate about education and want to share your knowledge with students around the world?
                We're always looking for expert educators to join our growing faculty team.
              </p>
              <Button size="lg" asChild>
                <Link href="/careers/faculty">Apply to Teach</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

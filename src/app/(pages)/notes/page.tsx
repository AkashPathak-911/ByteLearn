import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Download, FileText, BookOpen, Search, Clock, Eye } from "lucide-react";

// Mock data for notes
const notesData = [
  {
    id: "n1",
    title: "Elementary Mathematics: Numbers and Operations",
    subject: "Mathematics",
    grade: "Elementary",
    fileType: "PDF",
    thumbnail: "https://source.unsplash.com/9DaOYUYnOls/400x300",
    downloads: 1250,
    views: 4800,
    dateAdded: "2024-03-15",
    size: "2.4 MB",
    url: "/notes/elementary/math-numbers-operations.pdf",
  },
  {
    id: "n2",
    title: "Elementary Science: Plants and Animals",
    subject: "Science",
    grade: "Elementary",
    fileType: "PDF",
    thumbnail: "https://source.unsplash.com/OyCl7Y4y0Bk/400x300",
    downloads: 980,
    views: 3600,
    dateAdded: "2024-03-10",
    size: "3.1 MB",
    url: "/notes/elementary/science-plants-animals.pdf",
  },
  {
    id: "n3",
    title: "Middle School Algebra: Equations and Inequalities",
    subject: "Mathematics",
    grade: "Middle School",
    fileType: "PDF",
    thumbnail: "https://source.unsplash.com/cLaaVIrpnJs/400x300",
    downloads: 2100,
    views: 7500,
    dateAdded: "2024-02-28",
    size: "4.2 MB",
    url: "/notes/middle/algebra-equations.pdf",
  },
  {
    id: "n4",
    title: "Middle School Geography: Continents and Oceans",
    subject: "Geography",
    grade: "Middle School",
    fileType: "PDF",
    thumbnail: "https://source.unsplash.com/xG5VJW-7Bio/400x300",
    downloads: 1560,
    views: 5200,
    dateAdded: "2024-02-20",
    size: "5.7 MB",
    url: "/notes/middle/geography-continents.pdf",
  },
  {
    id: "n5",
    title: "High School Physics: Mechanics and Motion",
    subject: "Physics",
    grade: "High School",
    fileType: "PDF",
    thumbnail: "https://source.unsplash.com/1-aA2Fadydc/400x300",
    downloads: 3200,
    views: 9600,
    dateAdded: "2024-03-05",
    size: "6.3 MB",
    url: "/notes/high/physics-mechanics.pdf",
  },
  {
    id: "n6",
    title: "High School Chemistry: Atomic Structure",
    subject: "Chemistry",
    grade: "High School",
    fileType: "PDF",
    thumbnail: "https://source.unsplash.com/DS0ZSq98I74/400x300",
    downloads: 2800,
    views: 8400,
    dateAdded: "2024-03-01",
    size: "5.8 MB",
    url: "/notes/high/chemistry-atomic-structure.pdf",
  },
  {
    id: "n7",
    title: "College Entrance Exam Preparation Guide",
    subject: "Test Prep",
    grade: "High School",
    fileType: "PDF",
    thumbnail: "https://source.unsplash.com/0Zx1bDv5BNY/400x300",
    downloads: 4500,
    views: 12000,
    dateAdded: "2024-02-15",
    size: "8.5 MB",
    url: "/notes/entrance/exam-prep-guide.pdf",
  },
  {
    id: "n8",
    title: "Introduction to Computer Science: Algorithms",
    subject: "Computer Science",
    grade: "Bachelor",
    fileType: "PDF",
    thumbnail: "https://source.unsplash.com/ZkwAtOwppEw/400x300",
    downloads: 3800,
    views: 10500,
    dateAdded: "2024-03-12",
    size: "7.2 MB",
    url: "/notes/bachelor/cs-algorithms.pdf",
  },
];

const NoteCard = ({ note }) => {
  const getBadgeColor = (grade) => {
    switch (grade) {
      case "Elementary":
        return "bg-orange-100 text-orange-800";
      case "Middle School":
        return "bg-blue-100 text-blue-800";
      case "High School":
        return "bg-purple-100 text-purple-800";
      case "Bachelor":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={note.thumbnail}
          alt={note.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Button variant="outline" className="bg-white text-primary" asChild>
            <Link href={note.url}>
              <FileText className="mr-2 h-4 w-4" />
              Preview
            </Link>
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <Badge variant="outline" className={getBadgeColor(note.grade)}>
            {note.grade}
          </Badge>
          <Badge variant="outline" className="bg-gray-100 text-gray-700">
            {note.subject}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{note.title}</h3>

        <div className="mt-4 text-sm text-gray-500 grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <Download className="mr-1.5 h-4 w-4" />
            {note.downloads}
          </div>
          <div className="flex items-center">
            <Eye className="mr-1.5 h-4 w-4" />
            {note.views}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1.5 h-4 w-4" />
            {new Date(note.dateAdded).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <FileText className="mr-1.5 h-4 w-4" />
            {note.fileType} • {note.size}
          </div>
        </div>

        <Button variant="default" className="w-full mt-4" asChild>
          <Link href={note.url}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

const NotesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container-custom py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Study Materials & Notes</h1>
            <p className="text-lg text-blue-100 max-w-2xl">
              Access comprehensive study materials and notes for all educational levels.
              Download high-quality PDFs to enhance your learning experience.
            </p>

            <div className="mt-8 bg-white rounded-md overflow-hidden shadow-lg max-w-2xl">
              <div className="flex items-center p-2">
                <Search className="ml-2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search for notes, subjects, topics..."
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button className="rounded-md">Search</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Notes Grid Section */}
        <section className="py-12">
          <div className="container-custom">
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All Notes</TabsTrigger>
                <TabsTrigger value="elementary">Elementary</TabsTrigger>
                <TabsTrigger value="middle">Middle School</TabsTrigger>
                <TabsTrigger value="high">High School</TabsTrigger>
                <TabsTrigger value="entrance">Entrance Prep</TabsTrigger>
                <TabsTrigger value="bachelor">Bachelor Level</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {notesData.map((note) => (
                    <NoteCard key={note.id} note={note} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="elementary">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {notesData
                    .filter(note => note.grade === "Elementary")
                    .map((note) => (
                      <NoteCard key={note.id} note={note} />
                    ))
                  }
                </div>
              </TabsContent>

              <TabsContent value="middle">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {notesData
                    .filter(note => note.grade === "Middle School")
                    .map((note) => (
                      <NoteCard key={note.id} note={note} />
                    ))
                  }
                </div>
              </TabsContent>

              <TabsContent value="high">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {notesData
                    .filter(note => note.grade === "High School" && note.subject !== "Test Prep")
                    .map((note) => (
                      <NoteCard key={note.id} note={note} />
                    ))
                  }
                </div>
              </TabsContent>

              <TabsContent value="entrance">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {notesData
                    .filter(note => note.subject === "Test Prep")
                    .map((note) => (
                      <NoteCard key={note.id} note={note} />
                    ))
                  }
                </div>
              </TabsContent>

              <TabsContent value="bachelor">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {notesData
                    .filter(note => note.grade === "Bachelor")
                    .map((note) => (
                      <NoteCard key={note.id} note={note} />
                    ))
                  }
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container-custom text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="heading-2 mb-4">Can't Find What You Need?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
              We're continuously adding new study materials to our library.
              If you can't find what you're looking for, feel free to request it.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/request">
                  Request Study Material
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contribute">
                  Contribute Notes
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotesPage;

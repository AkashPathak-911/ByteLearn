import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  level: string;
  badge?: {
    text: string;
    variant?: "default" | "outline" | "success" | "destructive" | "secondary" | "popular" | "new";
  };
  href: string;
  instructor?: string;
  lessons?: number;
  duration?: string;
}

const CourseCard = ({
  id,
  title,
  description,
  imageUrl,
  category,
  level,
  badge,
  href,
  instructor,
  lessons,
  duration,
}: CourseCardProps) => {
  // Badge styling based on variant
  const getBadgeVariant = (variant = "default") => {
    switch (variant) {
      case "popular":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200";
      case "new":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "success":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "destructive":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "secondary":
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
      case "outline":
        return "border border-gray-200 text-gray-800 hover:bg-gray-100";
      default:
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    }
  };

  // Determine level badge style
  const getLevelBadge = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-transform hover:translate-y-[-5px] hover:shadow-md">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {badge && (
          <span
            className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getBadgeVariant(
              badge.variant
            )}`}
          >
            {badge.text}
          </span>
        )}
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <Badge variant="outline" className={`${getLevelBadge(level)}`}>
            {level}
          </Badge>
          <Badge variant="outline" className="bg-gray-100 text-gray-700">
            {category}
          </Badge>
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm flex-grow line-clamp-3">{description}</p>

        {(instructor || lessons || duration) && (
          <div className="mb-4 text-sm text-gray-500">
            {instructor && <div className="mb-1">Instructor: {instructor}</div>}
            <div className="flex justify-between">
              {lessons && <span>{lessons} lessons</span>}
              {duration && <span>{duration}</span>}
            </div>
          </div>
        )}

        <Button variant="outline" className="w-full mt-auto group" asChild>
          <Link href={href}>
            View Course
            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;

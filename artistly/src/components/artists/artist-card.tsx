import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ArtistCardProps {
  id: number;
  name: string;
  category: string;
  priceRange: string;
  location: string;
  image: string;
  bio: string;
}

export default function ArtistCard({ id, name, category, priceRange, location, image, bio }: ArtistCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <div className="h-48 bg-gray-200 relative">
        {/* We'll use a placeholder for now */}
        {/* <img src={image} alt={name} className="w-full h-full object-cover" /> */}
      </div>
      <CardHeader className="pb-2">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-500 text-sm">{category} • {location}</p>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <p className="text-gray-600 text-sm mb-2">{bio.substring(0, 100)}...</p>
        <p className="text-sm font-medium">{priceRange}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/artists/${id}`}>Ask for Quote</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

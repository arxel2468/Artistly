import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterBarProps {
  categories: string[];
  locations: string[];
  priceRanges: string[];
  onFilterChange: (filterType: string, value: string) => void;
  selectedFilters: {
    category: string;
    location: string;
    priceRange: string;
  };
}

export default function FilterBar({ 
  categories, 
  locations, 
  priceRanges, 
  onFilterChange,
  selectedFilters 
}: FilterBarProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <Select 
            value={selectedFilters.category || "all"} 
            onValueChange={(value) => onFilterChange('category', value === "all" ? "" : value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <Select 
            value={selectedFilters.location || "all"} 
            onValueChange={(value) => onFilterChange('location', value === "all" ? "" : value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              {locations.map(location => (
                <SelectItem key={location} value={location}>{location}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <Select 
            value={selectedFilters.priceRange || "all"} 
            onValueChange={(value) => onFilterChange('priceRange', value === "all" ? "" : value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Price Ranges" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Price Ranges</SelectItem>
              {priceRanges.map(range => (
                <SelectItem key={range} value={range}>{range}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

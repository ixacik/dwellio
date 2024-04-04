import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchForm = () => {
  return (
    <div className="bg-white rounded-[1rem] border-b-4 border-primary px-6 py-4 shadow-xl relative z-10 min-w-[58rem]">
      <div className="flex items-end gap-4 [&_label]:text-muted-foreground [&_input]:w-full">
        <div className="w-[50%]">
          <label htmlFor="search">Location</label>
          <Input id="search" placeholder="Search for an area..." />
        </div>
        <div className="flex-1">
          <label htmlFor="category">Category</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Categories" id="category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1">
          <label htmlFor="type">Type</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Types" id="type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>Search</Button>
      </div>
    </div>
  );
};
export default SearchForm;

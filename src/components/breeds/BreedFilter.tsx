import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SearchIcon, XIcon } from "lucide-react";
import { 
  sizeOptions, 
  energyOptions, 
  friendlinessOptions 
} from "@/lib/types";

const formSchema = z.object({
  search: z.string().optional(),
  size: z.string().optional(),
  energyLevel: z.string().optional(),
  friendliness: z.string().optional(),
});

export type BreedFilters = z.infer<typeof formSchema>;

interface BreedFilterProps {
  onFilterChange: (filters: BreedFilters) => void;
}

export default function BreedFilter({ onFilterChange }: BreedFilterProps) {
  const form = useForm<BreedFilters>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
      size: "all",
      energyLevel: "all",
      friendliness: "all",
    },
  });

  const handleSubmit = (values: BreedFilters) => {
    onFilterChange(values);
  };

  const resetFilters = () => {
    form.reset({
      search: "",
      size: "all",
      energyLevel: "all",
      friendliness: "all",
    });
    onFilterChange({
      search: "",
      size: "all",
      energyLevel: "all",
      friendliness: "all",
    });
  };

  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <Form {...form}>
          <form 
            onChange={form.handleSubmit(handleSubmit)}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <SearchIcon className="h-4 w-4" />
                    Search
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Search by breed name..."
                      {...field}
                      className="bg-background"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Size</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {sizeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="energyLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Energy Level</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select energy level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {energyOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="friendliness"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Friendliness</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select friendliness" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {friendlinessOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </form>
        </Form>

        <div className="flex justify-end mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={resetFilters}
            className="flex items-center gap-1"
          >
            <XIcon className="h-4 w-4" />
            Reset Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
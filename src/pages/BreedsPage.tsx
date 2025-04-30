import { useState, useEffect } from 'react';
import { SectionHeader } from '@/components/ui/section-header';
import BreedCard from '@/components/breeds/BreedCard';
import BreedFilter, { BreedFilters } from '@/components/breeds/BreedFilter';
import { dogBreeds } from '@/data/breeds';
import { DogIcon } from 'lucide-react';
import { type Dog } from '@/types/dog';

export default function BreedsPage() {
  const [filteredBreeds, setFilteredBreeds] = useState<Dog[]>(dogBreeds);
  const [filters, setFilters] = useState<BreedFilters>({
    search: '',
    size: 'all',
    energyLevel: 'all',
    friendliness: 'all',
  });

  useEffect(() => {
    const filtered = dogBreeds.filter((breed) => {
      // Search filter
      if (
        filters.search &&
        !breed.name.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      // Size filter
      if (
        filters.size !== 'all' &&
        !breed.size.toLowerCase().includes(filters.size.toLowerCase())
      ) {
        return false;
      }

      // Energy level filter
      if (
        filters.energyLevel !== 'all' &&
        !breed.energyLevel.toLowerCase().includes(filters.energyLevel.toLowerCase())
      ) {
        return false;
      }

      // Friendliness filter
      if (
        filters.friendliness !== 'all' &&
        !breed.friendliness.toLowerCase().includes(filters.friendliness.toLowerCase())
      ) {
        return false;
      }

      return true;
    });

    setFilteredBreeds(filtered);
  }, [filters]);

  const handleFilterChange = (newFilters: BreedFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <SectionHeader
        title="Explore Dog Breeds"
        description="Search and filter through our comprehensive library of dog breeds to find your perfect match."
        align="center"
        icon={<DogIcon className="h-8 w-8" />}
      />

      <BreedFilter onFilterChange={handleFilterChange} />

      {filteredBreeds.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-2xl font-semibold mb-2">No breeds found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your filters to see more results.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBreeds.map((breed) => (
            <BreedCard key={breed.id} breed={breed} />
          ))}
        </div>
      )}
    </div>
  );
}
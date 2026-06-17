import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "~/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Skeleton } from "~/components/ui/skeleton";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "~/components/ui/empty";
import { useDebouncedCallback } from "~/hooks/use-debounce";
import { cn } from "~/lib/utils/helpers";

const MOCK_ITEMS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  description: `This is a description for example item ${i + 1}. Replace with real data from your API.`,
  tag: i % 3 === 0 ? "Featured" : i % 3 === 1 ? "New" : "Popular",
}));

export default function BrowsePage() {
  const [inputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearch = useDebouncedCallback((q: string) => {
    setQuery(q);
    setIsLoading(false);
  }, 400);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsLoading(true);
    debouncedSearch(e.target.value);
  };

  const clearQuery = () => {
    setInputValue("");
    setQuery("");
    setIsLoading(false);
  };

  const filtered = MOCK_ITEMS.filter(
    (item) =>
      !query.trim() ||
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-content mx-auto w-full px-4 py-8 sm:px-6">
      <div className="mb-6">
        <h1 className="mb-1 text-2xl font-bold">Browse</h1>
        <p className="text-muted-foreground text-sm">
          Example list page — wire up your own API in{" "}
          <code className="text-foreground">app/features/example/</code>.
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <Input
          type="search"
          placeholder="Search items..."
          value={inputValue}
          onChange={handleQueryChange}
          startAdornment={
            <Search className="text-muted-foreground size-4 shrink-0" />
          }
          endAdornment={
            inputValue ? (
              <button type="button" onClick={clearQuery} className="shrink-0">
                <X className="text-muted-foreground hover:text-foreground size-4" />
              </button>
            ) : null
          }
          inputWrapperClassName="max-w-md"
        />
      </div>

      {/* Results header */}
      {!isLoading && (
        <p className="text-muted-foreground mb-4 text-sm">
          {query
            ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${query}"`
            : `${MOCK_ITEMS.length} items`}
        </p>
      )}

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-4 w-24" />
              </CardHeader>
              <CardContent>
                <Skeleton className="mb-2 h-3 w-full" />
                <Skeleton className="h-3 w-3/4" />
              </CardContent>
            </Card>
          ))
        ) : filtered.length === 0 ? (
          <div className="col-span-full py-16">
            <Empty>
              <EmptyHeader>
                <EmptyMedia>
                  <Search
                    className="text-muted-foreground size-10"
                    strokeWidth={1}
                  />
                </EmptyMedia>
                <EmptyTitle>No results found</EmptyTitle>
                <EmptyDescription>
                  No items match &ldquo;{query}&rdquo;. Try a different search.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        ) : (
          filtered.map((item) => (
            <Card
              key={item.id}
              className={cn("transition-shadow hover:shadow-md")}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base">{item.name}</CardTitle>
                  <Badge variant="secondary" className="shrink-0 text-xs">
                    {item.tag}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

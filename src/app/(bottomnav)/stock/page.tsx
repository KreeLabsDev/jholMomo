"use client";

import { useState } from "react";
import { Search, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface StockItem {
  id: number;
  name: string;
  quantity: number;
}

export default function StockTrackingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const stockItems = [
    { id: 1, name: "Jhol Momo", quantity: 24 },
    { id: 2, name: "Chicken Momo", quantity: 56 },
    { id: 3, name: "Veg Momo", quantity: 132 },
    { id: 4, name: "Veg Chowmein", quantity: 18 },
    { id: 5, name: "Chicken Chowmein", quantity: 9 },
    { id: 6, name: "Chicken Lolipop", quantity: 87 },
    { id: 7, name: "Sausage", quantity: 31 },
    { id: 8, name: "Fry Momo", quantity: 12 },
    { id: 9, name: "C Momo", quantity: 27 },
    { id: 10, name: "Chicken Leg Piece", quantity: 43 },
  ];

  const filteredItems = stockItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col w-[400px] max-w-[450px] h-screen bg-gray-100">
      <div className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="relative flex items-center justify-center mb-4">
          <ArrowLeft
            className="absolute left-0 h-5 w-5 cursor-pointer text-gray-700"
            onClick={() => router.back()}
          />
          <h1 className="text-xl font-bold text-center">Inventory Stock</h1>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search items..."
            className="pl-9 w-full border-2 border-gray-400 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 mt-10 scrollbar-hidden">
        {filteredItems.length === 0 ? (
          <div className="flex justify-center items-center h-40 text-muted-foreground">
            No items found
          </div>
        ) : (
          <div className="grid gap-3">
            {filteredItems.map((item) => (
              <StockItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StockItem({ item }: { item: StockItem }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-center justify-between p-4">
          <div className="font-medium">{item.name}</div>
          <StockBadge quantity={item.quantity} />
        </div>
      </CardContent>
    </Card>
  );
}

function StockBadge({ quantity }: { quantity: number }) {
  let status:
    | "default"
    | "destructive"
    | "secondary"
    | "outline"
    | null
    | undefined = "default";

  if (quantity <= 10) {
    status = "destructive";
  } else if (quantity <= 30) {
    status = "secondary";
  } else {
    status = "default";
  }

  return (
    <Badge variant={status} className="text-xs">
      {quantity} in stock
    </Badge>
  );
}

import React from "react";

type TilesProps = {
  src: string;
  name: string;
  category: number;
};

export default function Tile({ src, name, category }: TilesProps) {
  // Determine text based on category
  let categoryText = "";
  switch (category) {
    case 0:
      categoryText = "New";
      break;
    case 1:
      categoryText = "Hot";
      break;
    default:
      categoryText = "";
  }

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-lg border-4 border-amber-600">
        <img
          className="w-full h-full object-cover transition-all duration-300"
          src={src}
          alt={name}
        />
      </div>

      {/* Category text always visible on the top right */}
      {categoryText && (
        <div
          className={
            categoryText === "New"
              ? "absolute top-2 left-2 bg-amber-600 border-amber-600 text-green-500 text-xl px-2 py-1 rounded"
              : "absolute top-2 left-2 bg-amber-600 border-amber-600 text-white text-xl px-2 py-1 rounded"
          }
        >
          {categoryText}
        </div>
      )}
      {/* Hover effect: "Play" button */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-semibold transform translate-y-8 group-hover:-translate-y-10 transition-transform duration-300">
          Play
        </button>
      </div>
    </div>
  );
}

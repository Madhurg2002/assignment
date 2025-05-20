import type { Route } from "./+types/home";
import Tile from "~/components/tile";
import Carousel from "~/components/carousel";
import data_tiles from "../data_tiles.json";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Carousel />
      <div className="grid grid-cols-6 gap-4 min-h-0 flex-1">
        {data_tiles.map((item, index) => (
          <Tile key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

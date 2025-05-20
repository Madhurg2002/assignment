import type { Route } from "./+types/home";
import Tile from "~/components/tile";
import AnimatedImageBanner from "~/components/imagebanner";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
const data = [
  {
    link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2fXMXlWFTqoZT90zaFdd-A5B5cSrosun_9fFoJzMhvbJkWb7l",
    name: "Tiles",
    category: 0,
  },
  {
    link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2fXMXlWFTqoZT90zaFdd-A5B5cSrosun_9fFoJzMhvbJkWb7l",
    name: "Tiles",
    category: 1,
  },
  {
    link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2fXMXlWFTqoZT90zaFdd-A5B5cSrosun_9fFoJzMhvbJkWb7l",
    name: "Tiles",
    category: 0,
  },
  {
    link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2fXMXlWFTqoZT90zaFdd-A5B5cSrosun_9fFoJzMhvbJkWb7l",
    name: "Tiles",
    category: 0,
  },
  {
    link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2fXMXlWFTqoZT90zaFdd-A5B5cSrosun_9fFoJzMhvbJkWb7l",
    name: "Tiles",
    category: 1,
  },
  {
    link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2fXMXlWFTqoZT90zaFdd-A5B5cSrosun_9fFoJzMhvbJkWb7l",
    name: "Tiles",
    category: 2,
  },
  {
    link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2fXMXlWFTqoZT90zaFdd-A5B5cSrosun_9fFoJzMhvbJkWb7l",
    name: "Tiles",
    category: 2,
  },
  {
    link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2fXMXlWFTqoZT90zaFdd-A5B5cSrosun_9fFoJzMhvbJkWb7l",
    name: "Tiles",
    category: 2,
  },
];
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <AnimatedImageBanner />
      <div className="grid grid-cols-6 gap-4 min-h-0 flex-1">
        {data.map((item, index) => (
          <Tile key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

import Hero from "../components/Hero";
import HomeStorySections from "../components/HomeStorySections";
import PostsGridSection from "../components/PostsGridSection";
import { posts } from "../data/posts";
import sketchBook from "../assets/video/sketch-book.mp4";

export default function HomePage() {
  return (
    <>
      <Hero videoSources={[{ src: sketchBook, isHeavy: false }]} />
      <PostsGridSection posts={posts.slice(0, 3)} fullWidth />
      <HomeStorySections />
    </>
  );
}

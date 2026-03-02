import Hero from "../components/Hero";
import HomeStorySections from "../components/HomeStorySections";
import PostsGridSection from "../components/PostsGridSection";
import { posts } from "../data/posts";
import modaVideo from "../assets/video/moda-video.mp4";

export default function HomePage() {
  return (
    <>
      <Hero videoSources={[{ src: modaVideo, isHeavy: false }]} />
      <PostsGridSection posts={posts.slice(0, 3)} fullWidth />
      <HomeStorySections />
    </>
  );
}

import PostsGridSection from "../components/PostsGridSection";
import { posts } from "../data/posts";

export default function ImagesPage() {
  return (
    <div className="pt-24">
      <PostsGridSection
        posts={posts}
        title="Imagenes"
        description="Archivo visual de procesos, editoriales y desarrollo de colecciones."
      />
    </div>
  );
}

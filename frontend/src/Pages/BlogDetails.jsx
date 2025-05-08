import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const categories = ["Tümü", "Teknoloji", "Seyahat", "Kültür", "Tasarım", "Kariyer"];
const allPosts = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Blog Yazısı ${i + 1}`,
  category: categories[(i % (categories.length - 1)) + 1],
  description: "Bu blog yazısında şu konulardan bahsediyoruz...",
  content: `Detaylı içerik buraya gelecek... Yazı numarası: ${i + 1}`,
  image: `https://picsum.photos/seed/${i + 1}/600/400`,
  tags: ["Tasarım", "Kariyer", "Teknoloji"].slice(0, Math.floor(Math.random() * 3) + 1),
  createdAt: new Date(Date.now() - i * 86400000),
}));

export default function BlogDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = allPosts.find((p) => p.id === parseInt(id));
  const latestPosts = [...allPosts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3);
  const allTags = [...new Set(allPosts.flatMap((post) => post.tags))];

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Yazı Bulunamadı</h2>
            <p className="text-gray-600 mb-6">Aradığınız blog yazısı mevcut değil veya silinmiş olabilir.</p>
            <button
              onClick={() => navigate("/blog")}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Blog Sayfasına Geri Dön
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <button
                onClick={() => navigate("/blog")}
                className="mb-6 text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium transition-colors"
              >
                ← Blog Sayfasına Geri Dön
              </button>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">
                {post.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="prose prose-blue max-w-none text-gray-800 mb-6">
                <p>{post.content}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="border-t pt-4">
                <span className="text-sm text-gray-500">
                  Yayınlanma Tarihi: {new Date(post.createdAt).toLocaleDateString("tr-TR")}
                </span>
              </div>
            </div>
          </main>

          <aside className="lg:w-1/3 space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Son Yazılar</h3>
              <ul className="space-y-3">
                {latestPosts.map((latestPost) => (
                  <li key={latestPost.id} className="flex gap-3">
                    <img
                      src={latestPost.image}
                      alt={latestPost.title}
                      className="w-16 h-16 object-cover rounded cursor-pointer"
                      onClick={() => navigate(`/blog/${latestPost.id}`)}
                    />
                    <div>
                      <h4 className="font-medium text-gray-900 hover:text-blue-600 transition-colors">
                        <button onClick={() => navigate(`/blog/${latestPost.id}`)}>
                          {latestPost.title}
                        </button>
                      </h4>
                      <span className="text-xs text-gray-500">
                        {new Date(latestPost.createdAt).toLocaleDateString("tr-TR")}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Etiketler</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}
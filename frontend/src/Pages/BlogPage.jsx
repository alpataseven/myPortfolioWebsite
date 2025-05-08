import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const categories = ["Tümü", "Yazılım", "YBS", "Edebiyat", "Müzik"]
const popularTopics = ["React İpuçları", "Frontend Kariyeri", "Yazılımda Minimal Tasarım", "UX ve UI Farkı"];

const allPosts = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Blog Yazısı ${i + 1}`,
  category: categories[(i % (categories.length - 1)) + 1],
  description: "Bu blog yazısında şu konulardan bahsediyoruz...",
  content: `Detaylı içerik buraya gelecek... Yazı numarası: ${i + 1}`,
  image: `https://picsum.photos/seed/${i + 1}/600/400`,
  tags: ["Tasarım", "Kariyer", "Teknoloji"].slice(0, Math.floor(Math.random() * 3) + 1),
  createdAt: new Date(Date.now() - i * 86400000)
}));

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [sortOrder, setSortOrder] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleGoToDetail = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = selectedCategory === "Tümü" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortOrder === "asc") return a.title.localeCompare(b.title);
    if (sortOrder === "desc") return b.title.localeCompare(a.title);
    if (sortOrder === "date-asc") return new Date(a.createdAt) - new Date(b.createdAt);
    if (sortOrder === "date-desc") return new Date(b.createdAt) - new Date(a.createdAt);
    return 0;
  });

  const latestPosts = [...allPosts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 3);
  const allTags = [...new Set(allPosts.flatMap(post => post.tags))];

  return (
    <>
      <Navbar />
      <div className="max-w-10xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 mt-8">
                <div className="flex flex-wrap gap-2">
                  {categories.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => {
                        setSelectedCategory(tab);
                        setVisibleCount(6);
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === tab
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Makale ara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full max-w-xs"
                  />
                  <select
                    onChange={(e) => setSortOrder(e.target.value)}
                    value={sortOrder}
                    className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="default">Sırala</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                    <option value="date-asc">Eskiden Yeniye</option>
                    <option value="date-desc">Yeniden Eskiye</option>
                  </select>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "1.5rem" }} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {sortedPosts.slice(0, visibleCount).map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => handleGoToDetail(post.id)}
                  />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                      <button onClick={() => handleGoToDetail(post.id)} className="text-left w-full">
                        {post.title}
                      </button>
                    </h2>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString('tr-TR')}
                      </span>
                      <button 
                        onClick={() => handleGoToDetail(post.id)}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                      >
                        Oku
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {visibleCount < sortedPosts.length && (
              <div className="text-center">
                <button
                  onClick={() => setVisibleCount(prev => prev + 6)}
                  className="px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Daha Fazla Yükle
                </button>
              </div>
            )}
          </main>

          <aside className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Hakkımda</h3>
              <p className="text-gray-600 mb-4">
                Bu blog sayfası modern web geliştirme üzerine bilgiler sunar.
                Geliştiricilere ilham ve kaynak sağlamak amacıyla oluşturulmuştur.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popüler Konular</h3>
              <ul className="space-y-2">
                {popularTopics.map((topic) => (
                  <li key={topic}>
                    <button className="text-blue-600 hover:text-blue-800 hover:underline transition-colors text-left w-full py-1">
                      {topic}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Son Yazılar</h3>
              <ul className="space-y-3">
                {latestPosts.map((post) => (
                  <li key={post.id} className="flex gap-3">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded cursor-pointer"
                      onClick={() => handleGoToDetail(post.id)}
                    />
                    <div>
                      <h4 className="font-medium text-gray-900 hover:text-blue-600 transition-colors">
                        <button onClick={() => handleGoToDetail(post.id)}>
                          {post.title}
                        </button>
                      </h4>
                      <span className="text-xs text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString('tr-TR')}
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

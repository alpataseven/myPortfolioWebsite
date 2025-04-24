import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";

const categories = ["Tümü", "Teknoloji", "Seyahat", "Kültür", "Tasarım", "Kariyer"];
const allPosts = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Blog Yazısı ${i + 1}`,
  category: categories[(i % (categories.length - 1)) + 1],
  description: "Bu blog yazısında şu konulardan bahsediyoruz...",
  image: `https://picsum.photos/seed/${i + 1}/600/400`
}));

export default function BlogPage() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const filteredPosts =
    selectedCategory === "Tümü"
      ? allPosts
      : allPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-16">
        {/* Üst Tabli Widget */}
        <div className="flex flex-wrap gap-4 overflow-x-auto pb-6 mb-10">
          {categories.map((tab, i) => (
            <button
              key={i}
              className={`text-gray-700 whitespace-nowrap hover:text-primary font-medium px-3 py-1 transition  ${selectedCategory === tab ? "font-semibold text-white-600" : ""}`}
              onClick={() => {
                setSelectedCategory(tab);
                setVisibleCount(5);
              }}
            >
              {tab}

            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 justify-center">
          {/* Blog Cardları */}
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-12 items-center justify-center"> {/* Yeni wrapper div ve ortalama stilleri */}
              {filteredPosts.slice(0, visibleCount).map((post) => (
                <motion.div
                  key={post.id}
                  className="card lg:card-side bg-base-100 shadow-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <figure className="lg:w-2/5 max-h-96">
                    <img src={post.image} alt={post.title} className="object-cover w-full h-full" />
                  </figure>
                  <div className="card-body p-8 space-y-6 lg:w-3/5">
                    <h2 className="card-title text-3xl">{post.title}</h2>
                    <p className="text-gray-700 text-lg">{post.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Devamını Oku</button>
                    </div>
                  </div>
                </motion.div>
              ))}

              {visibleCount < filteredPosts.length && (
                <div className="text-center">
                  <button onClick={handleShowMore} className="btn btn-outline btn-primary">
                    Daha Fazla Göster
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
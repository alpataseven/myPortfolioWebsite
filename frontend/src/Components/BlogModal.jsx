import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function BlogModal({ post, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white max-w-3xl w-full rounded-2xl shadow-lg overflow-hidden relative"
      >
        {/* Kapatma butonu */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
        >
          <X size={24} />
        </button>

        {/* İçerik */}
        <div className="p-6 space-y-4">
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg" />
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="text-gray-700">{post.content}</p>
        </div>
      </motion.div>
    </div>
  );
}

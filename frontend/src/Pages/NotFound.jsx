import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6 gap-6">
      <motion.div 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center bg-red-100 p-4 rounded-full shadow-lg"
      >
        <AlertTriangle className="w-16 h-16 text-red-600" />
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-9xl font-bold text-gray-800 mt-4"
      >
        404
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-2xl font-semibold text-gray-700"
      >
        Oops! Sayfa Bulunamadı
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-gray-600"
      >
        Aradığınız sayfa mevcut değil veya kaldırılmış olabilir.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-16"
      >
        <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Ana Sayfaya Dön
        </Link>
      </motion.div>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 p-3 text-white shadow-lg transition-opacity cursor-pointer after:content-['scroll_to_top'] after:text-white after:absolute after:whitespace-nowrap after:scale-0 hover:after:scale-100 after:duration-200 w-16 h-16 rounded-full border-4 border-sky-200 bg-black flex items-center justify-center duration-300 hover:w-36 group overflow-hidden active:scale-90 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={scrollToTop}
    >
      <svg
        className="w-3 fill-white delay-50 duration-200 group-hover:-translate-y-12"
        viewBox="0 0 384 512"
      >
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
      </svg>
    </button>
  );
}

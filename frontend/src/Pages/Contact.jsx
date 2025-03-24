import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import swal from "sweetalert";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        swal("Mesaj gönderildi", "", "success");
    };
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen p-6">
                <div className="card w-full max-w-lg border shadow-xl p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">İletişime Geç</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <label className="form-control w-full">
                            <span className="label-text">Adınız</span>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                placeholder="Adınızı girin"
                                required
                            />
                        </label>
                        <label className="form-control w-full">
                            <span className="label-text">E-posta</span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                placeholder="E-posta adresinizi girin"
                                required
                            />
                        </label>
                        <label className="form-control w-full">
                            <span className="label-text">Mesajınız</span>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="textarea textarea-bordered w-full"
                                placeholder="Mesajınızı yazın"
                                rows="4"
                                required
                            />
                        </label>
                        <button type="submit" className="btn btn-primary w-full">
                            Gönder
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}   
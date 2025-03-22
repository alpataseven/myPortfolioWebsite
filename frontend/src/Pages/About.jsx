import AboutTimeline from "../Components/AboutTimeline";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SkillsShowcase from "../Components/SkillsShowcase";
import photo from "../Photos/alp2.jpg"

export default function About() {
    return (
        <>
            <Navbar />
            <br />
            <div className="grid grid-cols-2 grid-flow-row gap-5 p-4 h-150">
                <div className="text-white p-4 flex justify-center items-center">
                    <img
                        className="mask mask-square w-90 h-90"
                        src={photo} /></div>
                <div className="grid grid-cols-1 grid-flow-row gap-5 flex justify-center items-center p-15">
                    <h1 style={{ height: "0.5rem" }} className="text-2xl text-center">Merhaba! Ben Alperen ATASEVEN.</h1>
                    <br />
                    <p>
                        Gedik Üniversitesi'nde Yönetim Bilişim Sistemleri öğrencisiyim. Üniversite hayatım boyunca hem teknik hem de sosyal yönümü geliştirmek için çeşitli faaliyetlerde bulundum. 3 yıl boyunca kültür ve edebiyat kulübünün başkanlığını üstlenerek, edebiyat ve sanat alanında birçok etkinlik düzenledim. Liderlik becerilerimi geliştirdiğim bu süreçte, ekip yönetimi, organizasyon planlaması ve iletişim konularında önemli deneyimler edindim. <br />
                        Şu anda İdefix'te test ve iş analisti stajyeri olarak çalışıyorum. İş süreçlerini analiz etmek, yazılımın test süreçlerini yönetmek ve kullanıcı ihtiyaçlarını doğru şekilde belirlemek üzerine kendimi geliştirmeye devam ediyorum. İş analizi ve yazılım dünyasının kesişim noktasında, kullanıcı odaklı çözümler üretmeye ve geliştirme süreçlerini daha verimli hale getirmeye odaklanıyorum. <br />
                        Bunun yanı sıra, yazılım geliştirme alanında özellikle frontend teknolojilerine büyük ilgi duyuyorum. Kullanıcı deneyimi ve arayüz tasarımına önem veren, modern ve dinamik web uygulamaları geliştirme konusunda kendimi sürekli olarak geliştiriyorum. HTML, CSS, JavaScript ve React gibi teknolojiler üzerinde çalışarak, kullanıcı dostu ve etkileyici arayüzler oluşturmayı hedefliyorum. <br />

                    </p>
                </div>
            </div>
            <AboutTimeline />
            <SkillsShowcase />
            <br />
            
            <Footer />
        </>
    )
}   
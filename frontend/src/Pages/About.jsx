import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
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
                    <h1 style={{height:"0.5rem"}} className="text-2xl text-center">Merhaba! Ben Alperen ATASEVEN.</h1>
                    <p>I am passionate about UI/UX design and Web Design. I am a skilled front-end developer and master of graphic design tools such as Photoshop and Sketch. 
                        I am a quick learner and a team worker that gets the job done. I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.I am passionate about UI/UX design and Web Design. I am a skilled front-end developer and master of graphic design tools such as Photoshop and Sketch. 
                        I am a quick learner and a team worker that gets the job done. I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.I am passionate about UI/UX design and Web Design. I am a skilled front-end developer and master of graphic design tools such as Photoshop and Sketch. 
                        I am a quick learner and a team worker that gets the job done. I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.
                    </p>
                    <div className="grid grid-cols-1 row">
                        <div className="cols4">fgfdgd</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}   
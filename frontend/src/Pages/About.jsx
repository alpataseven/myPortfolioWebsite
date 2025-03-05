import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function About() {
    return(
        <>
            <Navbar />
            <br />
            <div className="grid grid-cols-6 grid-flow-row gap-5 p-4 bg-gray-200 h-auto">
                <div className="bg-blue-500 text-white p-4">Kutu 1</div>
                <div className="bg-red-500 text-white p-4">Kutu 2</div>
                <div className="bg-green-500 text-white p-4">Kutu 3</div>
                <div className="bg-yellow-500 text-white p-4 col-span-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquid voluptatum ea repudiandae debitis impedit at nemo magnam reprehenderit consectetur assumenda adipisci minus, illum asperiores quos porro odio? Eaque, perferendis.
                Tempora maxime, veniam fugiat inventore, quaerat unde est debitis nulla commodi cumque eveniet hic, quae repudiandae aperiam delectus. Dignissimos ducimus quasi debitis beatae, exercitationem vero quam possimus qui sapiente assumenda.
                Perferendis nisi libero quam fugit quis incidunt. Rerum quia magni ex, corrupti autem doloribus laboriosam distinctio fugit repellendus placeat. Iusto odit atque aliquam facere facilis ea ipsa asperiores assumenda ab.
                Quis dolorem, officia corrupti aspernatur quos magni laboriosam consectetur totam aliquam ipsa, cumque est sunt vel libero ipsam facilis odio illum atque animi similique. Quisquam consectetur fugit doloremque excepturi aut!
                Voluptates earum rem consequuntur eveniet labore maxime sed vel officiis quod fugiat exercitationem, eum obcaecati, molestias quaerat excepturi, temporibus tempora quam ut veritatis repellendus. Facere nihil repellendus soluta minima ut.</div>
                <div className="bg-purple-500 text-white p-4">Kutu 5</div>
                <div className="bg-purple-500 text-white p-4">Kutu 5</div>
                <div className="bg-purple-500 text-white p-4">Kutu 5</div>
                <div className="bg-purple-500 text-white p-4">Kutu 5</div>
                <div className="bg-purple-500 text-white p-4">Kutu 5</div>
            </div>
            <Footer />
        </>
    )
}   
export default function ContactForm() {
    return (
        <>
            <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
                <legend className="fieldset-legend">Login</legend>

                <label className="fieldset-label">İsim-Soyisim</label>
                <input type="text" placeholder="İsim-Soyisim" className="input" />

                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="fieldset-label">Mesajınız</label>
                <textarea className="textarea h-24" placeholder="Mesajınız"></textarea>
                <div className="fieldset-label">Optional</div>

                <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
        </>
    )
}
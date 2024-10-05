import foto from "./foto.png";


export default function Header () {
    return (
        <div className="header">
            <img src={foto} alt="pic"></img>
            <h1>Bade Başak Tutuş</h1>
            <h2>Frontend Developer</h2>
            <p>badetutus@gmail.com</p>
        </div>
    )
}
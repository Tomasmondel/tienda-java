import'./header.css'
export const Header = () =>{
    return (
        <header className="header">
            <div className="header__container">
                <nav className="navbar">
                    <img claasname="logo" src="" alt="logo" />
                    <a className="link" href="#">inicio</a>
                    <a className="link" href="#">contacto</a>
                    <a className="link" href="#">login</a>
                </nav>
            </div>
        </header>
    )
}
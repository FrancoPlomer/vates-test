
export const Navbar = () => {

    return <>
        <header className="header --scrollUp">
            <div className="lay">
                <div className="row">
                    <div className="col-4 header__left">
                        <div className="com-hamburger">
                            <span className="com-hamburger__bar"></span>
                            <span className="com-hamburger__bar"></span>
                            <span className="com-hamburger__bar"></span>
                        </div>
                        <form className="com-search">
                            <input type="text" className="com-search__input" placeholder="buscar" />
                            <img src={ require('assets/img/search.svg').default } alt="search" className="icon-search"/>
                            <input type="submit" value="Buscar" className="--btn --primary com-search__submit" />
                        </form>
                    </div>
                    <div className="col-4  header__middle">
                        <a href="/" className="header__middle__logo">
                            <p className="logo-la-nacion">
                                LA NACIÓN
                            </p>
                        </a>
                    </div>
                    <div className="col-4 header__right">
                        <div className="com-usuario">
                            <button className="--btn --highlight hlp-marginRight-35"> Suscribite </button>
                            <button className="--btn --secondary"> Ingresar </button>
                        </div>
                    </div>  
                </div>
            </div>
        </header>
        <header className="header-mobile">
            <div className="lay">
                <div className="row">
                    <div className="col-6">
                        <a href="/" className="header-mobile__logo">
                            <p className="logo-la-nacion">
                                LA NACIÓN
                            </p>
                        </a>
                    </div>
                    <div className="col-6 hlp-text-right">
                            <p>Suscribite</p>  
                    </div> 
                </div> 
            </div>
        </header>
        <nav className="com-nav-mobile --scrollUp">
            <div className="row">
                <a href="/" className="col-2 item-foo"><i className="icon-home"></i><p>Home</p></a>
                <a href="/" className="col-4 item-foo"><i className="icon-club"></i><p> <nobr>Club LA NACION</nobr></p></a>
                <a href="/" className="col-3 item-foo"><i className="icon-comment"></i><p>Mi cuenta</p></a>
                <button className="col-2 item-foo"><i className="icon-menu"></i><p>Menú</p></button>
            </div>
        </nav>
    </>
}
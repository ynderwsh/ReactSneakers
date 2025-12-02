function Header(props){
    
    return(
        <header className="d-flex justify-between align-center p-40">
            <div className="headerLeft d-flex align-center">
            <img className="logo" src="/img/logo.svg" alt="Logo"/>
            <div className="headerInfo">
                <h3 className="text-uppercase opacity-6">React Sneakers</h3>
                <p>Магазин лучших кроссововок</p>
            </div>
            </div>
            <ul className="d-flex">
            <li onClick={props.onClickCart}
            className="mr-30 cu-p">
                <img className="profile" src="/img/cart.svg" alt="CartImage"/>
                <span>1205 руб</span>
            </li>
            <li>
                <img className="profile" src="/img/user.svg" alt="ProfileImage"/>
            </li>
            </ul>
        </header>
    )
}

export default Header;
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function NavBar(){
    let title = 'Serum´s';
    return(
        <div className="barra">        
           
          <h1>{title}</h1>
        <nav>
            <a href="/#">Inicio</a>
            <a href="/#">Productos</a>
            <CartWidget />
        </nav>

        </div>     
    );
}

export default NavBar;
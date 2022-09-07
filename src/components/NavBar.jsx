import "./NavBar.css"

function Barra(){
    return(
        <div className="barra">        
           
          <h1>Serum´s</h1>
        <nav>
            <a href="/#">Inicio</a>
            <a href="/#">Productos</a>
            <a href="/#"><i className="bi bi-bag"></i></a>
        </nav>

        </div>     
    );
}

export default Barra;
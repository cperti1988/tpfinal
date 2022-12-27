


class Pedido {
    constructor(items){
        this.items = items
    }

    htmlCode(){
        this.items.map(elemento => {
            document.querySelector('#orden').innerHTML += `
                
            <div class="main">
                <h2>${elemento.hospedaje}</h2>
                <div class="producto">
                    <article class="text">
                        <p>${elemento.detalle}</p>
                        <p>${elemento.precio}</p>
                        <p>Calificacion:${elemento.calificacion}</p>
                        <button class="btn btn-primary"><< Volver</a></button>
                    </article>
                    <figure>    
                        <img src="${elemento.imagen}">
                    </figure>
                </div>
                
            </div>

                
            
            `

        })

    }
}

const arrayPedido = JSON.parse(localStorage.getItem('pedidoUsuario'))
const orden = new Pedido(arrayPedido)
console.log(orden);
orden.htmlCode()

const volver = () => {
    let botones2 = document.querySelectorAll('.btn')
    console.log(botones2);
    for (const btn of botones2) {
        btn.addEventListener('click', (evento) => {
                localStorage.clear(); 
                window.location.href="index.html";
            
        })
    }
}

volver()





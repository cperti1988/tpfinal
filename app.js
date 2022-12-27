const main = document.querySelector('#alojamiento')


const productos = [{
    id:1,
    hospedaje:'Camping',
    descripcion: 'Parcelas para carpas y casas rodantes equipadas con bancos, parrillas y enchufe' ,
    detalle:'40 parcelas para carpas y casas rodantes con energía eléctrica (toma corriente con disyuntor y térmica) y sanitarios con duchas y vestuarios. También dispone de mesas, bancos y parrillas y quincho de uso compartido.',
    imagen:'./images/camping.jpg',
    precio:'$3.000 p/noche',
    calificacion:'⭐',
},
{
    id:2,
    hospedaje:'Hostel',
    descripcion: 'Habitaciones compartidas y cocina equipáda' ,
    detalle:'Ofrecemos alojamiento de calidad y barato para viajeros que recorren el mundo, con habitaciones privadas y compartidas limpias y cómodas, baño privado, wifi gratuito, aire acondicionado, lockers, caja de seguridad y una cafetería deliciosa y económica',
    imagen:'./images/hostel.jpg',
    precio:'$5.000 p/noche',
    calificacion: '⭐',

},
{
    id:3,
    hospedaje:'Bungalow',
    descripcion: 'Capacidad para 4 personas y con 2 ambientes.' ,
    detalle:'2 Ambientes con  Capacidad: 3 personas. Cuenta con 1 Dormitorio con 1 Cama Matrimonial. En el Estar/Comedor 1 Cama Simple; 1 Baño.',
    imagen:'./images/bungalow.jpg',
    precio:'$17.000 p/noche',
    calificacion: '⭐⭐',
},
{
    id:4,
    hospedaje:'Eco-dormitorios',
    descripcion: 'Contenedores marítimos reciclados, ecológicamente sostenibles' ,
    detalle:'Son contenedores marítimos reutilizados de 30 metros cuadrados cada uno, con capacidad para 3 personas con su estructura readaptada y transformada a unidades de alojamiento. Así, recuperamos elementos no bio-degradables y les otorgamos una nueva función. De otro modo se transformarían en residuos dañinos al medioambiente.',
    imagen:'./images/ecomodulos.jpg',
    precio:'$20.000 p/noche',
    calificacion: '⭐⭐⭐',
},
{
    id:5,
    hospedaje:'Hotel Vertientes',
    descripcion: 'Habitaciones equipadas con vista al parque, blanquería y baño privado' ,
    detalle:'Habitaciones de 2 personas con vista al parque y equipadas con blanquería y amenities, baño privado, aire acondicionado y Calefacción. Opcional: desayuno adicional en Confitería del Complejo.',
    imagen:'./images/Hotel-Vertientes.jpg',
    precio:'$25.000 p/noche',
    calificacion: '⭐⭐⭐⭐',
},
{
    id:6,
    hospedaje:'Hotel Quinto Elemento',
    descripcion: 'Habitaciones equipadas con vista al parque y piscina climatizada.' ,
    detalle:'Habitaciones equipadas con cama Sommier King Size, TV plasma 32, Jacuzzi, Caja de seguridad y circuito de aire y calefacción. Tambien cuenta con Desayuno continental asistido por el personal del hotel y Piscina climatizada dentro del hotel de agua dulce.',
    imagen:'./images/hqe-5.jpg',
    precio:'$35.000 p/noche',
    calificacion: '⭐⭐⭐⭐⭐',
},

]



const pedido = JSON.parse( localStorage.getItem('pedidoUsuario')) || []


 const html = (arr) => {
     arr.forEach(element => {
         main.innerHTML += `
                            <div class="e">
                                 <h2>${element.hospedaje}</h2>
                                 <p>${element.descripcion}</p>
                            </div>
                            <div class="button-wrapper">
                                <button class="btn btn-primary"id=${element.id}>+ Info</button>
                            </div>
                             `
     }) 
 }
html(productos)


const solicitarInfo = () => {
    let botones = document.querySelectorAll('.btn')
    console.log(botones);
    
    for (const btn of botones) {
        btn.addEventListener('click', (evento) => {
            console.log(evento.target.id);
            let resultado = productos.find( el => el.id == evento.target.id);  
            console.log(resultado);
            if  (resultado == undefined){
                alert('Ocurrio un error');
            }
            else{
                pedido.push(resultado)
                localStorage.setItem('pedidoUsuario',JSON.stringify(pedido)) 
                console.log(pedido);
                window.location.href="producto.html";
            }
        })
    }
}

solicitarInfo()


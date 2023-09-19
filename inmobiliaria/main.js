listaPropiedadesJSON = []; 

let contenedorFiltros = document.getElementById("contenedorFiltros");
let comboOperacion = document.getElementById('comboOperacion');
let comboPropiedad = document.getElementById('comboPropiedad');
let comboDorm = document.getElementById('comboDormitorios');

fetch('data/propiedades.JSON')
    .then(resp => resp.json())
    .then(data => listaPropiedadesJSON = data);



comboOperacion.addEventListener('change', 
    function(){
        var selectedOption = this.options[comboOperacion.selectedIndex];
        for (let i = 0; i < listaPropiedadesJSON.length; i++) {

            // switch (listaPropiedadesJSON[i].operacion) {
            //     case "Alquiler":
                    
            //         break;
            
            //     case "Venta":

            //         break;

            //     case "Construccion":

            //         break;
            //     default:
            //         break;
            // }

            if (listaPropiedadesJSON[i].operacion = selectedOption.value) {
                console.log(
                    listaPropiedadesJSON[i].id,
                    listaPropiedadesJSON[i].tipo,
                    listaPropiedadesJSON[i].operacion,
                    listaPropiedadesJSON[i].dormitorios,
                    listaPropiedadesJSON[i].img,
                    listaPropiedadesJSON[i].precio,
                    listaPropiedadesJSON[i].detalle
                    );
            }
            
               
        }
    }
);

const propiedadesList = getElementById('propiedadesListado');

function mostrarPropiedades(){
    propiedadesList.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pedido.cliente}</td>
            <td>${pedido.hamburguesa}</td>
            <td>${pedido.direccion}</td>
            <td>${pedido.entregado ? 'Entregado' : 'Pendiente'}</td>
            <td><button class="cambiarEstado" data-key="${key}">Cambiar Estado</button></td>
            `;

        propiedadesList.appendChild(row);
    }
}


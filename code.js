class Hamburguesa {
    constructor(nombre, precio, ingredientes) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.ingredientes = ingredientes;
    }
}

const hamburguesas = [];
hamburguesas.push(new Hamburguesa("Bella Burger", 150, ['Carne', 'Queso']));
hamburguesas.push(new Hamburguesa("Bella Doble", 250, ['Carne', 'Queso', 'Panceta']));
hamburguesas.push(new Hamburguesa("Bella Pollo", 150, ['Pollo', 'Queso']));
hamburguesas.push(new Hamburguesa("Super Bella", 150, ['Carne', 'Queso', 'huevo']));
hamburguesas.push(new Hamburguesa("Bella Vegan", 150, ['Espinaca', 'Soja']));

const clienteInput = document.getElementById('cliente');
const direccionInput = document.getElementById('direccion');
const hamburguesaSelect = document.getElementById('hamburguesa');
const agregarPedidoBtn = document.getElementById('agregarPedido');
const pedidosPendientesList = document.getElementById('pedidosPendientes');
const limpiarPedidosBtn = document.getElementById('limpiarPedidos');

agregarPedidoBtn.addEventListener('click', () => {
    const cliente = clienteInput.value;
    const direccion = direccionInput.value;
    const hamburguesaSeleccionada = hamburguesaSelect.value;

    const pedido = {
        cliente: cliente,
        direccion: direccion,
        hamburguesa: hamburguesaSeleccionada,
        entregado: false
    };

    const pedidoString = JSON.stringify(pedido);
    localStorage.setItem(Date.now().toString(), pedidoString);

    mostrarPedidosPendientes();
});

limpiarPedidosBtn.addEventListener('click', () => {
    localStorage.clear();
    mostrarPedidosPendientes();
});

function mostrarPedidosPendientes() {
    pedidosPendientesList.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const pedidoString = localStorage.getItem(key);
        const pedido = JSON.parse(pedidoString);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pedido.cliente}</td>
            <td>${pedido.hamburguesa}</td>
            <td>${pedido.direccion}</td>
            <td>${pedido.entregado} <input type="checkbox"></td>
        `;
        pedidosPendientesList.appendChild(row);
    }
}

mostrarPedidosPendientes();

const listaPedidos = [];
let totalAcumulado = 0;

function agregarPedido(cliente, producto, precio) {
    let pedido = {
        nombreCliente: cliente,
        nombreProducto: producto,
        precioProducto: precio
    };

    listaPedidos.push(pedido);

    totalAcumulado = totalAcumulado + precio;

    console.log("¡Pedido agregado con éxito!");
}

let nom = prompt ("Ingrese el nombre del cliente:");


agregarPedido(nom, "Café Americano", 40);

console.log("--- LISTA DE PEDIDOS ---");

console.log(listaPedidos);

console.log("Total acumulado en caja: $" + totalAcumulado);
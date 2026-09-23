import { listaPedidos } from "./datos.js";

let totalAcumulado = 0;

function agregarPedido(cliente, producto, precio) {
    let preciosArray = [precio];
    let subtotal = preciosArray.reduce((acumulador, actual) => acumulador + actual, 0);

    let iva = subtotal * 0.16;
    let precioConIva = subtotal + iva;

    let pedido = {
        nombreCliente: cliente,
        nombreProducto: producto,
        precioProducto: precioConIva,
        subtotalPedido: subtotal,
        ivaPedido: iva
    };

    listaPedidos.push(pedido);
    totalAcumulado = totalAcumulado + precioConIva;

    console.log("¡Pedido agregado con éxito!");
}

export function nuevoPedido(cliente) {
    let producto = prompt("Nombre del producto:");
    let precio = parseFloat(prompt("Precio del producto:"));

    agregarPedido(cliente, producto, precio);

    alert("Pedido guardado");
}

function listarPedidos() {
    nuevoPedido("Cliente General");

    document.write("<h2>Lista de Pedidos - Caja</h2>");

    for (let i = 0; i < listaPedidos.length; i++) {
        const { nombreCliente, nombreProducto, precioProducto, subtotalPedido, ivaPedido } = listaPedidos[i];

        document.write(
            "<p><strong>Cliente:</strong> " + nombreCliente + "</p>" +
            "<p><strong>Producto:</strong> " + nombreProducto + "</p>" +
            "<p>Subtotal: $" + subtotalPedido.toFixed(2) + "</p>" +
            "<p>IVA (16%): $" + ivaPedido.toFixed(2) + "</p>" +
            "<p><strong>Total con IVA:</strong> $" + precioProducto.toFixed(2) + "</p>" +
            "<hr>"
        );
    }

    console.log("--- LISTA DE PEDIDOS ---");
    console.log(listaPedidos);

    console.log(
        "Total acumulado en caja: $" + totalAcumulado.toFixed(2)
    );
}
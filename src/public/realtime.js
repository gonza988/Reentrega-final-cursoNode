const socket = io();
socket.on('productos', data => {
    console.log(data);
    // implementación frontend aquí...
});
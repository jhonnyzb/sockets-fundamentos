  
        var socket = io();
        socket.on('connect', function () {
            console.log('Conectado al servidor')

        })

        //escuchar
        socket.on('disconnect', function () {
            console.log('perdimos conexion con el servidor');            
        })


        //enviar info
        socket.emit('enviarMensaje', {
            usuario: 'Jhon Zabala',
            mensaje : 'Hola Mundo'
        }, function (resp) {
            console.log('Respuesta server: ', resp);
        })

        //escuchar info
        socket.on('enviarMensaje', function (mensaje) {
            console.log('Servidor: ', mensaje);
        })

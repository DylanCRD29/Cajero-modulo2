
// Datos iniciales 

var cuentas = [
    { nombre: "Dylan", saldo: 200, password: 'D000', userpage: 'Dylan.html'},
    { nombre: "Valeria", saldo: 290, password: 'V000', userpage: 'Valeria.html'},
    { nombre: "Juan", saldo: 67, password: 'J000', userpage: 'Juan.html'},

    ];
    
    const buttonLogin = document.getElementById('botones');
    const bienvenida = document.getElementById('bienvenida');

    buttonLogin.addEventListener('click', passLogin)

// Ingresar Contraseña 

    function passLogin(e) {
        cuentas.forEach(function (item){
            if (item.nombre == e.target.textContent){
                var pswd = prompt('¡Hola ' + item.nombre + '! Ingresa tu contraseña para acceder a tu cuenta.')
                if (item.password == pswd) {
                    window.location=item.userpage;
                }
                else{
                    alert('Tu contraseña es incorrecta, por favor intenta nuevamente.')
                }
            }        
        })
    }     
            
            
    // Perfil de Dylan

    function SaldoDylan() {
        alert('Tu saldo es de $' + (cuentas[0].saldo)+'.00 MXN')
    }

    function DepositarDylan() {
        var monto = Number(prompt('¿Cuánto deseas depositar?'))
        if (Number(monto)) {
            if ((monto + cuentas[0].saldo) <= 990) {
                alert('Depositaste $'+monto+'.00 MXN'+'. Tu nuevo saldo es de: $'+ (monto + cuentas[0].saldo)+'.00 MXN')            }
            }else{    
                alert('Por favor ingresa una cantidad.');
        }
        if((monto + cuentas[0].saldo) <= 990) {
            (cuentas[0].saldo) += monto
        }else{   
            alert('Tu saldo no puede ser mayor a $990.00 MXN. Por favor intenta de nuevo.');
        }
    }
    
    function RetirarDylan() {
        var retiro = Number(prompt('¿Cuánto deseas retirar?'))
    if (Number(retiro)) {
        if ((cuentas[0].saldo - retiro >= 10)) {
            alert('Retiraste $'+retiro+'.00 MXN'+'. Tu nuevo saldo es de: $'+(cuentas[0].saldo - retiro)+'.00 MXN')
        }else{
            alert('Tu saldo no puede ser menor a $10.00 MXN. Por favor intenta de nuevo.')
        }
    }else{    
        alert('Por favor ingresa una cantidad.');
    }
    if((retiro + cuentas[0].saldo) <= 990) {
        (cuentas[0].saldo) -= retiro
        }
    }    
    
    // Perfil de Valeria

    function SaldoValeria() {
        alert('Tu saldo es de $' + (cuentas[1].saldo)+'.00 MXN')
    }

    function DepositarValeria() {
        var monto = Number(prompt('¿Cuánto deseas depositar?'))
        if (Number(monto)) {
            if ((monto + cuentas[0].saldo) <= 990) {
                alert('Depositaste $'+monto+'.00 MXN'+'. Tu nuevo saldo es de: $'+ (monto + cuentas[0].saldo)+'.00 MXN')            }
            }else{    
                alert('Por favor ingresa una cantidad.');
        }
        
        if((monto + cuentas[0].saldo) <= 990) {
            (cuentas[0].saldo) += monto
        }else{   
            alert('Tu saldo no puede ser mayor a $990.00 MXN. Por favor intenta de nuevo.');
        }
    }
    
    function RetirarValeria() {
        var retiro = Number(prompt('¿Cuánto deseas retirar?'))
        if (Number(retiro)) {
            if ((cuentas[0].saldo - retiro >= 10)) {
                alert('Retiraste $'+retiro+'.00 MXN'+'. Tu nuevo saldo es de: $'+(cuentas[0].saldo - retiro)+'.00 MXN')
            }else{
                alert('Tu saldo no puede ser menor a $10.00 MXN. Por favor intenta de nuevo.')
            }
        }else{    
            alert('Por favor ingresa una cantidad.');
        }
        if((retiro + cuentas[0].saldo) <= 990) {
            (cuentas[0].saldo) -= retiro
            }
    }    
    
    

    // Perfil de Juan

    function SaldoJuan() {
        alert('Tu saldo es de $' + (cuentas[2].saldo)+'.00 MXN')
    }
    
    function DepositarJuan() {
        var monto = Number(prompt('¿Cuánto deseas depositar?'))
        if (Number(monto)) {
            if ((monto + cuentas[0].saldo) <= 990) {
                alert('Depositaste $'+monto+'.00 MXN'+'. Tu nuevo saldo es de: $'+ (monto + cuentas[0].saldo)+'.00 MXN')            }
            }else{    
                alert('Por favor ingresa una cantidad.');
        }
        
        if((monto + cuentas[0].saldo) <= 990) {
            (cuentas[0].saldo) += monto
        }else{   
            alert('Tu saldo no puede ser mayor a $990.00 MXN. Por favor intenta de nuevo.');
        }
    }
    
    function RetirarJuan() {
        var retiro = Number(prompt('¿Cuánto deseas retirar?'))
        if (Number(retiro)) {
            if ((cuentas[0].saldo - retiro >= 10)) {
                alert('Retiraste $'+retiro+'.00 MXN'+'. Tu nuevo saldo es de: $'+(cuentas[0].saldo - retiro)+'.00 MXN')
            }else{
                alert('Tu saldo no puede ser menor a $10.00 MXN. Por favor intenta de nuevo.')
            }
        }else{    
            alert('Por favor ingresa una cantidad.');
        }
        if((retiro + cuentas[0].saldo) <= 990) {
            (cuentas[0].saldo) -= retiro
            }
    }    
    
        

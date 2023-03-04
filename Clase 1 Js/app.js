
// Datos iniciales 

var cuentas = [
    { nombre: "Dylan", saldo: 349, password: 'D000', userpage: 'Dylan.html'},
    { nombre: "Valeria", saldo: 20, password: 'V000', userpage: 'Valeria.html'},
    { nombre: "Juan", saldo: 750, password: 'J000', userpage: 'Juan.html'},

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
            if((monto + cuentas[0].saldo) <= 10000) {
                alert('Depositaste $'+monto+'.00 MXN'+'. Tu nuevo saldo es de: $'+ (monto + cuentas[0].saldo)+'.00 MXN')            }
        }else{    
            alert('Por favor ingresa una cantidad.');
        }
        if((monto + cuentas[0].saldo) <= 10000) {
            (cuentas[0].saldo) += monto
        }
    }
    
    function RetirarDylan() {
        var retiro = Number(prompt('¿Cuánto deseas retirar?'))
        if (Number(retiro)) {
            if ((cuentas[0].saldo - retiro >= 0)) {
                alert('Retiraste $'+retiro+'.00 MXN'+'. Tu nuevo saldo es de: $'+(cuentas[0].saldo - retiro)+'.00 MXN')
            }
        }else{    
            alert('Por favor ingresa una cantidad.');
        }
        if((retiro + cuentas[0].saldo) <= 10000) {
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
            if((monto + cuentas[1].saldo) <= 10000) {
                alert('Ingresaste $'+monto+'.00 MXN'+'. Tu nuevo saldo es de: $'+ (monto + cuentas[1].saldo)+'.00 MXN')
            }
        }else{    
            alert('Por favor ingresa una cantidad.');
        }
        if((monto + cuentas[1].saldo) <= 10000) {
            (cuentas[1].saldo) += monto
        }
    }
    
    function RetirarValeria() {
        var retiro = Number(prompt('¿Cuánto deseas retirar'))
        if (Number(retiro)) {
            if ((cuentas[1].saldo - retiro >= 10000)) {
                alert('Retiraste $'+retiro+'.00 MXN'+'. Tu nuevo saldo es de: $'+(cuentas[1].saldo - retiro)+'.00 MXN')
            }
        }else{    
            alert('Por favor ingresa una cantidad.');
        }
        if((retiro + cuentas[1].saldo) <= 10000) {
            (cuentas[1].saldo) -= retiro
        }
    }    
    
    

    // Perfil de Juan

    function SaldoJuan() {
        alert('Tu saldo es de $' + (cuentas[2].saldo)+'.00 MXN')
    }
    
    function DepositarJuan() {
        var monto = Number(prompt('¿Cuánto deseas depositar?'))
        if (Number(monto)) {
            if((monto + cuentas[2].saldo) <= 10000) {
                alert('Ingresaste $'+monto+'.00 MXN'+'. Tu nuevo saldo es de: $'+ (monto + cuentas[2].saldo)+'.00 MXN')
            }
        }else{    
            alert('Por favor ingresa una cantidad.');
        }
        if((monto + cuentas[2].saldo) <= 10000) {
            (cuentas[2].saldo) += monto
        }
    }
    
    function RetirarJuan() {
        var retiro = Number(prompt('¿Cuánto deseas retirar?'))
        if (Number(retiro)) {
            if ((cuentas[2].saldo - retiro >= 10)) {
                alert('Retiraste $'+retiro+'.00 MXN'+'. Tu nuevo saldo es de: $'+(cuentas[2].saldo - retiro)+'.00 MXN')
            }
        }else{    
            alert('Por favor ingresa una cantidad.');
        }
        if((retiro + cuentas[2].saldo) <= 10000) {
            (cuentas[2].saldo) -= retiro
        }
    }    
    
        

// EJERCICIO 1
/*function promesasEncadenadas(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor((Math.random() * (100 - 1 + 1)) + 1));
        }, 2000);
    });
}

function promesasEncadenadas2(aleatorio){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(Math.pow(aleatorio, 2));
        }, 3000);
    })
}

function promesasEncadenadas3(cuadrado){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(Math.sqrt(cuadrado))
        }, 1000);
    });
}

promesasEncadenadas().then(result => {
    console.log(result);
    promesasEncadenadas2(result).then(result2 => {
        console.log(result2);
        promesasEncadenadas3(result2).then(result3 => {
            console.log(result3);
        })
    });
})*/

// EJERCICIO 2
/*const array = ['https://pokeapi.co/api/v2/pokemon/ditto','https://www.thesportsdb.com/api/v1/json/3/all_leagues.php','https://www.thesportsdb.com/api/v1/json/3/all_countries.php']
let resultados = [];

function multiplesSolicitudes(){
    for (let i = 0; i < array.length; i++) {
        const promesa = fetch(array[i]).then(result => result.json());
        resultados.push(promesa)  
    } 
    return Promise.all(resultados);
}

multiplesSolicitudes().then(result => console.log(result))*/

// EJERCICIO 3
/*function suma(num1, num2){
    return new Promise((resolve, reject) => {
        resolve(num1 + num2);
    })
}

function resta(num1, num2){
    return new Promise((resolve, reject) => {
        resolve(num1 - num2);
    })
}

function multiplicacion(num1, num2){
    return new Promise((resolve, reject) => {
        resolve(num1 * num2);
    })
}

Promise.all([suma(1,2), resta(2,1), multiplicacion(1,2)]).then(resultado => console.log(resultado))*/

// EJERCICIO 4
/*const listaPromesas = [];
function promesasEnCadena(num){
    for (let i = 1; i <= num; i++) {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(i);
                resolve(i)
            }, num * 1000);
        })
        listaPromesas.push(promesa);
    }

    return Promise.all([listaPromesas]).then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Todas las promesas se resolvieron');
            }, num * 1000);
        });
    }); 
} 

promesasEnCadena(3).then((mensaje)=>{
    console.log(mensaje);
}).catch((error)=>{
    console.log(error);
})*/

// EJERCICIO 5
function promesaCancelacion(){
    let time;
    const promesa = new Promise((resolve, reject) => {
        time = setTimeout(() => { 
            resolve('Promesa resuelta') 
        }, 5000);
    })

    promesa.cancel = function(){
        clearTimeout(time);
        console.log('Promesa cancelada');
    }

    return promesa;
}

promesaCancelacion().then(mensaje => {
    console.log(mensaje);
}).catch(error => {
    console.log(error);
})

//promesaCancelacion().cancel(); 


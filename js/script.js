fetch("./js/datos.json")
  .then(function(resp){
    return resp.json()
  })
  .then(function(data){
    //console.log(data);
    const dato = (data.canciones);
    console.log(dato);
  })

















// var dato = {};

// function cargarJson (){
//   $(document).ready(function () {

//     //Carga los datos que estan en el JSON (info.json) usando AJAX
//     $.ajax({
//       url: "http://127.0.0.1:5600/js/datos.json"
//     }).done(function (resultado) {    
//       var dato = JSON.parse(resultado);
//       console.log(dato);
//     });
//   })  
//   return dato;  
// }

// async function procesar(){
//   try{
//     var datos = await cargarJson ();
//     console.log("datos");
//   }catch(error){
//     console.log('error: ', error);
//   }
// }

// procesar();

//const nombre = song.map(song => song.canciones)

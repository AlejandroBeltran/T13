function addManzana(){
  var renglon = document.createElement("tr");
  var manzana = document.createElement("td");
  var precioM = document.createElement("td");
  var precio = Math.floor(Math.random()*5)+1;
  var total = Number(document.getElementById("total").textContent);
  manzana.innerHTML = "manzana";
  precioM.innerHTML = precio;
  var producto = document.getElementById("body");
  renglon.appendChild(manzana);
  renglon.appendChild(precioM);
  producto.appendChild(renglon);

  document.getElementById("total").innerHTML = total + precio;
};
function addLeche(){
  var renglon = document.createElement("tr");
  var leche = document.createElement("td");
  var precioL = document.createElement("td");
  var precio = Math.floor(Math.random()*5)+1;
  var total = Number(document.getElementById("total").textContent);
  leche.innerHTML = "leche";
  precioL.innerHTML = precio;
  var producto = document.getElementById("body");
  renglon.appendChild(leche);
  renglon.appendChild(precioL);
  producto.appendChild(renglon);

  document.getElementById("total").innerHTML = total + precio;
};

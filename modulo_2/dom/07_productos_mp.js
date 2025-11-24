// Versión MP: usa storage para persistir inventario y permite agregar/eliminar
const defaultProductos = [
  { nombre: "Teclado", descripcion: "Mecánico", precio: 45, existencia: 12, ubicacion: "Estante A" },
  { nombre: "Mouse", descripcion: "Inalámbrico", precio: 20, existencia: 25, ubicacion: "Estante B" },
  { nombre: "Monitor", descripcion: "24 pulgadas", precio: 150, existencia: 7, ubicacion: "Estante C" },
  { nombre: "Laptop", descripcion: "Core i5", precio: 700, existencia: 5, ubicacion: "Estante D" },
  { nombre: "Cable HDMI", descripcion: "2m", precio: 10, existencia: 30, ubicacion: "Estante F" }
];

(function(){
  const KEY = 'mp_inventory';
  let productos = JSON.parse(localStorage.getItem(KEY)) || defaultProductos.slice();

  function save(){ localStorage.setItem(KEY, JSON.stringify(productos)); }

  function render(){
    const tabla = document.getElementById('cuerpoTabla');
    if(!tabla) return;
    tabla.innerHTML = '';
    productos.forEach((p, idx) => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${p.nombre}</td>
        <td>${p.descripcion}</td>
        <td>$${Number(p.precio||0).toFixed(2)}</td>
        <td>${p.existencia}</td>
        <td>${p.ubicacion}</td>
        <td><button data-idx="${idx}" class="rm">Eliminar</button></td>
      `;
      tabla.appendChild(fila);
    });
    Array.from(document.getElementsByClassName('rm')).forEach(b=>b.addEventListener('click', e=>{ productos.splice(Number(e.target.dataset.idx),1); save(); render(); }));
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('inventoryForm');
    if(form){
      form.addEventListener('submit', e=>{
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('descripcion').value;
        const precio = Number(document.getElementById('precio').value) || 0;
        const existencia = Number(document.getElementById('existencia').value) || 0;
        const ubicacion = document.getElementById('ubicacion').value;
        productos.push({nombre, descripcion, precio, existencia, ubicacion});
        save();
        form.reset();
        render();
      });
    }
    render();
  });

  window.mpInventory = { list:()=>productos, add:(it)=>{productos.push(it); save(); render();} };
})();

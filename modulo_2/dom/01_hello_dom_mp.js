console.log(document.head);
console.log(document.body.children);
console.log(document.body.tittle);

// Módulo simple de inventario (MP)
(function(){
  const STORAGE_KEY = 'mp_inventory';
  let inventory = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  function save(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inventory));
  }

  function render(){
    const tbody = document.getElementById('inventoryTable');
    if(!tbody) return;
    tbody.innerHTML = '';
    inventory.forEach((item, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item.nombre}</td>
        <td>${item.descripcion}</td>
        <td>$${Number(item.precio||0).toFixed(2)}</td>
        <td>${item.existencia}</td>
        <td>${item.ubicacion}</td>
        <td><button data-idx="${idx}" class="removeBtn">Eliminar</button></td>
      `;
      tbody.appendChild(tr);
    });
    Array.from(document.getElementsByClassName('removeBtn')).forEach(b => {
      b.addEventListener('click', e => {
        const i = Number(e.target.dataset.idx);
        inventory.splice(i,1);
        save(); render();
      });
    });
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('inventoryForm');
    if(form){
      form.addEventListener('submit', e => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('descripcion').value;
        const precio = Number(document.getElementById('precio').value) || 0;
        const existencia = Number(document.getElementById('existencia').value) || 0;
        const ubicacion = document.getElementById('ubicacion').value;
        inventory.push({nombre, descripcion, precio, existencia, ubicacion});
        save();
        form.reset();
        render();
      });
    }
    render();
  });

  window.mpInventory = {
    list: () => inventory,
    add: (item) => { inventory.push(item); save(); render(); }
  };
})();

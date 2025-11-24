console.log('02_variables_mp cargado');
(function(){
  const STORAGE_KEY = 'mp_inventory';
  let inventory = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(inventory)); }
  function render(){ const tbody=document.getElementById('inventoryTable'); if(!tbody) return; tbody.innerHTML=''; inventory.forEach((it,i)=>{ const tr=document.createElement('tr'); tr.innerHTML=`<td>${it.nombre}</td><td>${it.descripcion}</td><td>$${Number(it.precio||0).toFixed(2)}</td><td>${it.existencia}</td><td>${it.ubicacion}</td><td><button data-i="${i}" class="rm">Eliminar</button></td>`; tbody.appendChild(tr); }); Array.from(document.getElementsByClassName('rm')).forEach(b=>b.addEventListener('click', e=>{ inventory.splice(Number(e.target.dataset.i),1); save(); render(); })); }
  document.addEventListener('DOMContentLoaded', ()=>{ const form=document.getElementById('inventoryForm'); if(form) form.addEventListener('submit', e=>{ e.preventDefault(); inventory.push({nombre:document.getElementById('nombre').value, descripcion:document.getElementById('descripcion').value, precio:Number(document.getElementById('precio').value)||0, existencia:Number(document.getElementById('existencia').value)||0, ubicacion:document.getElementById('ubicacion').value}); save(); form.reset(); render(); }); render(); });
  window.mpInventory = { list:()=>inventory, add:(it)=>{ inventory.push(it); save(); render(); } };
})();

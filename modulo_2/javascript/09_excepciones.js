try{
    const user = JSON.parse('{ "name": "John", age: 30 }');
}catch(e){
    console.log("Error detectado:", e.message);
}

try{
    console.log("Intenando abrir un archivo...");
    throw new Error("Archivo No encontrado."); //error intencional
}catch(error){
    console.log("Error:", error.message);
}
finally{
    console.log("Finalizo el intento de abrir un archivo.");
}
document.querySelector("#ingresar").onclick = function(){
    const $primerNombreUsuario = document.querySelector("#primer-nombre").value;
    const $segundoNombreUsuario = document.querySelector("#segundo-nombre").value;
    const $apellidoUsuario = document.querySelector("#apellido").value;
    const $edadUsuario = Number(document.querySelector("#edad").value);
    const $divTexto = document.querySelector("#info-texto");
   
    

    if($primerNombreUsuario !== '' && $segundoNombreUsuario !== '' && $apellidoUsuario !== '' && $edadUsuario !== ''){

        document.querySelector("#saludo").textContent = `Bienvenido, ${$primerNombreUsuario}!`;
        const nuevaAreaTexto = document.createElement('textarea')
        nuevaAreaTexto.textContent = `Nombre y apellido:${$primerNombreUsuario} ${$segundoNombreUsuario} ${$apellidoUsuario} Edad:${$edadUsuario}`;
        $divTexto.appendChild(nuevaAreaTexto);
    }

}

document.querySelector("#reset").onclick = function(){
    const $divTexto = document.querySelector("#info-texto");
    const $areaTexto = document.querySelector('textarea');
    $divTexto.removeChild($areaTexto);
}
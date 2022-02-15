$(document).ready(function(){
    $(#barras).click(function() {
        if($("#menu").hasClass("#menu-ativo")){
            $("#menu").removeClass("#menu-ativo")
        }else{
            $("#menu").addClass("#menu-ativo")
        }
    })
})

// $(document).ready(function(){
//     $("#carrosel img:eq(0)").addClass("banner-ativo").show()
// })

// setInterval(slide,5000)
// function slide(){
//     if($(".banner-ativo").next().length){
//         $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
//     }else{
//         $(".banner-ativo").removeClass().hide()
//         $("#carrosel img:eq(0)").addClass("banner-ativo").show()
//     }
// }

// let listaNovositens = [
//     {
//         descricao: "Placa GTX 1050 Ti DDR5, 4GB de RAM",
//     },
//     {
//         descricao: "Placa GTX 1050 Ti DDR5, 4GB de RAM",
//     },
//     {
//         descricao: "Placa GTX 1050 Ti DDR5, 4GB de RAM",
//     },
//     {
//         descricao: "Placa GTX 1050 Ti DDR5, 4GB de RAM",
//     },
//     {
//         descricao: "Placa GTX 1050 Ti DDR5, 4GB de RAM",
//     },
//     {
//         descricao: "Placa GTX 1050 Ti DDR5, 4GB de RAM",
//     },
// ]

// function renderizarItens(){
//     let espaco = document.getElementById("id-itens")

//     let template ="";

//     for (let index = 0; index < listaNovositens.length; index++) {
//         const itens = listaNovositens[index];
        
//         template += `<div class="carditens">
//         <img src="img/gtx.jpg" alt="imagem gtx 1050ti">
//         <h3>${itens.descricao}</h3>
//     </div>`
//     }

//     espaco.innerHTML = template;
// }
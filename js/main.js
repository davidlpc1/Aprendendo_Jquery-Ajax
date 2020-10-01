const $btnSearch = document.getElementById("search-CEP");
const $progressBar = document.getElementById("barra-progresso")

$btnSearch.addEventListener('click',() => {
    $(".barra-progresso").show()
    let cep = document.querySelector('#cep-input').value

    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        type: "GET",
        success(response){
            $(".barra-progresso").hide()
            const { cep ,localidade, uf , logradouro,bairro} = response

            $("#resposta-estado").html(uf)
            $("#resposta-cidade").html(localidade)
            $("#resposta-bairro").html(bairro)
            $("#resposta-rua").html(logradouro)
            $("#show-cep").html(`O seu CEP é ${cep}`)
            $(".table-cep").show()

        }
    }) 
})

$(function(){
    $(".barra-progresso").hide()
    $(".table-cep").hide()
})

setInterval(() => {

})


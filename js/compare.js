
//car
let carArr = [];

class Car {


    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

/* permite varrer uma array, retornando à posição do objeto armazenado 
se for igual ao objeto informado. Se não encontrar, retorna -1.*/
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}
/* permite inserir o objeto Car em uma array, apenas se o checkbox 
estiver com o estado de checked. Não deve permitir a inclusão do número maior que dois 
carros no array e quando o checkbox for desmarcado, deverá remover o respectivo objeto 
do array. */
// Função para adicionar/remover carros da comparação
function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car) {
        if(el.checked) {
            // Verifica se já tem 2 carros selecionados
            if(carArr.length >= 2) {
                alert("Você só pode comparar 2 carros por vez");
                el.checked = false;
                return;
            }
            // Adiciona o carro se não estiver já no array
            if(GetCarArrPosition(carArr, carClass) === -1) {
                carArr.push(carClass);
            }
        } else {
            // Remove o carro do array
            const index = GetCarArrPosition(carArr, carClass);
            if(index !== -1) {
                carArr.splice(index, 1);
            }
        }
    } else {
        throw "Você precisa fornecer uma instância da classe Car";
    }
}


// exibe o pop-up com a tabela de comparação.
function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }else {
        UpdateCompareTable();
        document.getElementById("compare").style.display = "block";

    }

}
// oculta o pop-up com a tabela de comparação.
function HideCompare() {
    document.getElementById("compare").style.display = "none";
}
/*
 este método é chamado no ShowCompare, e tem o objetivo de 
atualizar os elementos HTML contidos na tag <div id="compare">...</div>. Utilize funções 
do JavaScript para injetar dinamicamente o conteúdo correspondente em cada célula da 
tabela, com atenção aos IDs que identificam qual informação deve ser exibida. 
 */
function UpdateCompareTable() {
    // Preenche os dados para cada carro (máximo 2)
    for (let i = 0; i < carArr.length && i < 2; i++) {
        const car = carArr[i];

        //imagem do carro
        document.getElementById(`compare_image_${i}`).innerHTML = 
            `<img src="${car.image}" width="200">`;

        //dados do carro
        document.getElementById(`compare_modelo_${i}`).textContent =
            car.nome;
        document.getElementById(`compare_alturacacamba_${i}`).textContent = 
            car.alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).textContent =
            car.alturaVeiculo;
        document.getElementById(`compare_alturasolo_${i}`).textContent = 
            car.alturaSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).textContent = 
            car.capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).textContent = 
            car.motor;
        document.getElementById(`compare_potencia_${i}`).textContent = 
            car.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).textContent = 
            car.volumeCacamba;
        document.getElementById(`compare_roda_${i}`).textContent = 
            car.roda;
        document.getElementById(`compare_preco_${i}`).textContent = 
            `R$ ${car.preco.toLocaleString('pt-BR')}`;
    }
    
   
}

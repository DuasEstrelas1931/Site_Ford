class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;       
    }
}

// Função principal que processa o formulário
function Post(form) {
    // 1. Validação dos campos antes de prosseguir
    if (!validarFormulario(form)) {
        return false;
    }

    // 2. Cria o objeto contato com os dados do formulário
    const novoContato = new Contato(
        form.elements.namedItem("nome").value.trim(),
        form.elements.namedItem("sobrenome").value.trim(),
        form.elements.namedItem("email").value.trim(),
        form.elements.namedItem("cpf").value.trim(),
        form.elements.namedItem("telefone").value.trim(),
        form.elements.namedItem("contato").value
    );

    // 3. Armazena o contato
    armazenarContato(novoContato);

    // 4. Feedback e limpeza do formulário
    mostrarFeedback(novoContato.nome);
    form.reset();
    

    return true;
}

// Função de validação completa
function validarFormulario(form) {
    
    const nome = form.elements.namedItem("nome").value.trim();
    if (nome.length < 3) {
        alert("Por favor, preencha seu nome com pelo menos 3 caracteres!");
        form.elements.namedItem("nome").focus();
        return false;
    }   

    const email = form.elements.namedItem("email").value.trim();
    if (!validarEmail(email)) {
        alert("Por favor, insira um e-mail válido! Ex: ricardo.amor@exemplo.com");
        form.elements.namedItem("email").focus();
        return false;
    }   

    const cpf = form.elements.namedItem("cpf").value.trim();
    if (!validarCPF(cpf)) {
        alert("Por favor, CPF deve ter 11 dígitos!");
        form.elements.namedItem("cpf").focus();
        return false;
    }
    
    const telefone = form.elements.namedItem("telefone").value.trim();
    if (!validarPhone(telefone)) {
        alert("'Digite um telefone válido com DDD (10 ou 11 dígitos)");
        form.elements.namedItem("telefone").focus();
        return false;
    }

    return true;
}

// Funções auxiliares
function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    return isValid 
}

function validarCPF(cpf) {       
    cpf = cpf.replace(/\D/g, '');    
    const isValid = cpf.length == 11 || /^(\d)\1{10}$/.test(cpf); 
    return isValid;
}

function validarPhone(telefone) {
  telefone = telefone.replace(/\D/g, '');
  const isValid = telefone.length >= 10 && telefone.length <= 11;
  return isValid;
}

function armazenarContato(contato) {
    const contatosExistentes = JSON.parse(localStorage.getItem("dados")) || [];
    contatosExistentes.push(contato);
    localStorage.setItem("dados", JSON.stringify(contatosExistentes));
}

function mostrarFeedback(nome) {
    alert(`Obrigado, ${nome}! Seus dados foram cadastrados com sucesso.`);
}

// Como usar no HTML:
// <form onsubmit="return processarFormulario(this)">

 window.addEventListener('load', () => {
    document.querySelector('.imagem-animada').classList.add('visible');
});

document.addEventListener("DOMContentLoaded", () => {   

  const bntBut = document.getElementById('botHelperBtn');
  if (bntBut) {

    bntBut.addEventListener("click", () => {

          // Cria um contato de exemplo
      const exemplo = new Contato(
        "Ricardo", 
        "Amor", 
        "ricardo.amor@exemplo.com", 
        "123.456.789-09", 
        "(11) 98765-4321", 
        "TELEFONE"
      );
      
      // Preenche o formulário com os dados de exemplo
      document.querySelector('input[name="nome"]').value = exemplo.nome;
      document.querySelector('input[name="sobrenome"]').value = exemplo.sobrenome;
      document.querySelector('input[name="email"]').value = exemplo.email;
      document.querySelector('input[name="cpf"]').value = exemplo.cpf;
      document.querySelector('input[name="telefone"]').value = exemplo.telefone;
      document.querySelector('select[name="contato"]').value = exemplo.contato;
      
      // Atualiza o status de validação 
      if (typeof validateForm === 'function') {
        validateForm();
      }
      
      alert("Formulário preenchido com dados de exemplo. Por favor, revise antes de enviar!");
    });
  }
  
});


const checkbox1 = document.getElementById("checkbox1");
const botao = document.getElementById("botaoEnviar");

    checkbox1.addEventListener("change", () => {        
        botao.disabled = !checkbox1.checked;
});



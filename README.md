# Projeto Ford Brasil - Simulador de Carros

Este projeto simula um site fictício da Ford, com foco em apresentar lançamentos de veículos, comparar modelos e capturar contatos de clientes interessados.

## 🧩 Funcionalidades

### 🔄 Carousel de Destaques
- Exibe imagens promocionais com título e link.
- Avanço automático a cada 2 segundos.
- Botões "anterior" e "próximo" permitem navegação manual.

📄 Arquivo relacionado: `carousel.js`  
📍 Página onde aparece: `index.html`

---

### 🚘 Comparação de Carros
- Permite comparar até **2 carros** simultaneamente.
- Exibe um popup com informações técnicas detalhadas (motor, altura, roda, preço etc.).
- Interface com checkboxes para seleção.

📄 Arquivo relacionado: `compare.js`  
📍 Página onde aparece: `lancamento.html`

---

### 📬 Formulário de Contato
- Coleta informações do usuário (nome, sobrenome, e-mail, CPF, telefone e preferência de contato).
- Validação completa dos dados.
- Armazena localmente no navegador (`localStorage`).
- Botão de ajuda automatiza preenchimento de exemplo.

📄 Arquivo relacionado: `form.js`  
📍 Página onde aparece: `contato.html`

---

## 📁 Estrutura de Diretórios
/
├── index.html # Página inicial com o carousel
├── lancamento.html # Página com modelos para comparar
├── contato.html # Página com formulário de contato
├── js/
│ ├── carousel.js # Lógica do carrossel de destaques
│ ├── compare.js # Lógica de comparação de carros
│ └── form.js # Validação e envio de formulário
├── img/
│ ├── facebook-50.png
│ ├── ford-96.png
│ ├── imagem_1.jpg
│ |── imagem_2.jpg
│ ├── imagem_3.jpg
│ ├── info.png
│ ├── instagram-logo-50.png
│ |── logo-ford-256.png
│ |── storm.jpg
│ ├── XL Cabine.jpg
│ ├── xls 2.2 diesel.jpg
│ ├── youtube-squared-50.png
├── css/
│ ├── form.css # Estilo específico do formulário
│ └── lancamento.css # Estilo específico da página de lançamento
│ ├── reset.css # Reset de estilo
│ ├── style.css # Estilização geral

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Armazenamento Local (`localStorage`)
- Manipulação de DOM

---

## 🚀 Como Usar

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` no navegador.
3. Navegue entre as páginas via menu superior.

---

## 📌 Observações

- Este projeto é apenas para fins educativos e demonstrações.
- Nenhuma integração com backend foi implementada.
- O CPF é validado apenas por formato (não usa os dígitos verificadores reais).
- As imagens e marcas pertencem à Ford Brasil (uso fictício).

---

## 👤 Autor

Desenvolvido por **Ricardo Amor Divino**  
- 🔗 GitHub: [github.com/DuasEstrelas1931](https://github.com/DuasEstrelas1931)  
- 🔗 LinkedIn: [linkedin.com/in/ricardo-amor-divino-a562a9125](https://www.linkedin.com/in/ricardo-amor-divino-a562a9125)

---



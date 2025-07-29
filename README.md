# 📋 Gerenciador de Tarefas React

Um aplicativo moderno e responsivo para gerenciamento de tarefas desenvolvido com React, Vite e Tailwind CSS. Permite criar, visualizar, marcar como concluída e excluir tarefas com uma interface intuitiva e elegante.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Funcionalidades

### 🎯 Principais Recursos
- **Criação de Tarefas**: Adicione novas tarefas com título e descrição
- **Visualização de Tarefas**: Lista organizada de todas as tarefas
- **Marcar como Concluída**: Clique para marcar/desmarcar tarefas como concluídas
- **Exclusão de Tarefas**: Remova tarefas que não são mais necessárias
- **Detalhes da Tarefa**: Visualize informações completas de cada tarefa
- **Persistência Local**: Dados salvos automaticamente no localStorage do navegador
- **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela

### 🔧 Funcionalidades Técnicas
- **Validação de Formulários**: Campos obrigatórios com feedback visual
- **Navegação com React Router**: Páginas separadas para detalhes das tarefas
- **Estado Global**: Gerenciamento de estado com React Hooks
- **Componentes Reutilizáveis**: Arquitetura modular e organizada

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca JavaScript para construção de interfaces
- **Vite 5.4.1** - Build tool e dev server ultra-rápido
- **Tailwind CSS 3.4.10** - Framework CSS utilitário
- **React Router DOM 7.4.0** - Roteamento para aplicações React
- **Lucide React 0.435.0** - Biblioteca de ícones modernos

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/Gerenciador-de-Tarefas-React.git
   cd Gerenciador-de-Tarefas-React
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse o aplicativo**
   Abra seu navegador e acesse `http://localhost:5173`


## 📁 Estrutura do Projeto

```
src/
├── componentes/          # Componentes reutilizáveis
│   ├── AddTarefas.jsx   # Formulário para adicionar tarefas
│   ├── Tarefas.jsx      # Lista de tarefas
│   ├── Title.jsx        # Componente de título
│   ├── Button.jsx       # Botão reutilizável
│   └── Input.jsx        # Campo de entrada reutilizável
├── paginas/             # Páginas da aplicação
│   └── PaginaTarefa.jsx # Página de detalhes da tarefa
├── assets/              # Recursos estáticos
├── App.jsx              # Componente principal
├── main.jsx             # Ponto de entrada da aplicação
└── index.css            # Estilos globais
```

## 🎮 Como Usar

### Adicionando uma Tarefa
1. Preencha o campo "Título da Tarefa"
2. Adicione uma descrição detalhada
3. Clique em "Adicionar"

### Gerenciando Tarefas
- **Marcar como concluída**: Clique no título da tarefa
- **Ver detalhes**: Clique no ícone de seta (→)
- **Excluir**: Clique no ícone de lixeira (🗑️)

### Visualizando Detalhes
- Navegue para a página de detalhes para ver informações completas da tarefa
- Use o botão voltar do navegador para retornar à lista

## 📚 Tutorial do Felipe Rocha

Este projeto foi desenvolvido seguindo o tutorial **"Projeto React - Gerenciador de Tarefas"** do canal [Felipe Rocha](https://www.youtube.com/@FelipeRocha).

- **Link**: [Assistir no YouTube](https://www.youtube.com/watch?v=2RWsLmu8yVc&t=939s&pp=ygUNcHJvamV0byByZWFjdA%3D%3D)

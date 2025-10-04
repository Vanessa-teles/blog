# VitaWell - Blog de Saúde, Fitness e Bem-Estar

Um blog moderno e responsivo focado em saúde, fitness e bem-estar, desenvolvido com React, Tailwind CSS e componentes shadcn/ui.

## 🌟 Características

O VitaWell é um blog completo que oferece uma experiência de usuário excepcional com design moderno e funcionalidades interativas. O site apresenta uma interface limpa e intuitiva, otimizada para dispositivos móveis e desktop.

### Funcionalidades Principais

**Navegação Intuitiva**: O site conta com um sistema de navegação responsivo que inclui menu desktop e mobile, permitindo fácil acesso a todas as seções do blog.

**Seção Hero Impactante**: A página inicial apresenta uma seção hero com título chamativo, imagem de alta qualidade e estatísticas impressionantes que demonstram o alcance e qualidade do conteúdo.

**Sistema de Busca**: Os usuários podem pesquisar artigos através de um campo de busca funcional que permite encontrar conteúdo específico rapidamente.

**Artigos em Destaque**: O blog exibe artigos selecionados em cards visuais atraentes, cada um com imagem, categoria, título e resumo do conteúdo.

**Newsletter Interativa**: Sistema de inscrição para newsletter com validação de email e feedback visual para o usuário.

**Widget de Populares**: Sidebar com os artigos mais populares, incluindo tempo de leitura e categorização.

## 🚀 Tecnologias Utilizadas

- **React 18**: Framework JavaScript para construção da interface
- **Vite**: Build tool moderna e rápida
- **Tailwind CSS**: Framework CSS utility-first para estilização
- **shadcn/ui**: Biblioteca de componentes UI modernos
- **Lucide React**: Ícones SVG otimizados
- **JavaScript (JSX)**: Linguagem de programação principal

## 📦 Instalação e Uso

### Pré-requisitos

Certifique-se de ter o Node.js (versão 16 ou superior) e pnpm instalados em sua máquina.

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd vitawell-blog
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   pnpm run dev
   ```

4. **Acesse o site**
   Abra seu navegador e vá para `http://localhost:5173`

### Scripts Disponíveis

- `pnpm run dev`: Inicia o servidor de desenvolvimento
- `pnpm run build`: Cria a versão de produção
- `pnpm run preview`: Visualiza a versão de produção localmente
- `pnpm run lint`: Executa o linter para verificar o código

## 🎨 Design e Estilo

### Paleta de Cores

O VitaWell utiliza uma paleta de cores cuidadosamente selecionada que transmite saúde e bem-estar:

- **Verde Principal**: #059669 (emerald-600)
- **Verde Secundário**: #0d9488 (teal-600)
- **Cinza Escuro**: Para textos principais
- **Branco**: Fundo principal
- **Gradientes**: Utilizados em seções especiais

### Tipografia

O site emprega fontes modernas e legíveis que garantem uma excelente experiência de leitura em todos os dispositivos.

### Responsividade

O design é mobile-first, garantindo que o site funcione perfeitamente em smartphones, tablets e desktops.

## 📱 Funcionalidades Interativas

### Sistema de Navegação

O header inclui navegação responsiva com menu hambúrguer para dispositivos móveis e menu horizontal para desktop.

### Busca de Conteúdo

Campo de busca funcional que permite aos usuários encontrar artigos específicos por palavras-chave.

### Newsletter

Sistema de inscrição com validação de email e feedback visual, incluindo estado de sucesso após inscrição.

### Scroll to Top

Botão flutuante que aparece durante o scroll e permite retorno rápido ao topo da página.

## 🔧 Estrutura do Projeto

```
vitawell-blog/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Imagens e recursos estáticos
│   ├── components/        # Componentes React
│   │   └── ui/           # Componentes UI do shadcn
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utilitários e configurações
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos customizados
│   ├── index.css         # Estilos globais
│   └── main.jsx          # Ponto de entrada
├── index.html            # Template HTML
├── package.json          # Dependências e scripts
├── tailwind.config.js    # Configuração do Tailwind
└── vite.config.js        # Configuração do Vite
```

## 🌐 Deploy

### Netlify

1. Faça build do projeto: `pnpm run build`
2. Faça upload da pasta `dist` para o Netlify
3. Configure as variáveis de ambiente se necessário

### Vercel

1. Conecte seu repositório GitHub ao Vercel
2. Configure o comando de build: `pnpm run build`
3. Configure o diretório de output: `dist`

### GitHub Pages

1. Instale gh-pages: `pnpm add -D gh-pages`
2. Adicione script no package.json: `"deploy": "gh-pages -d dist"`
3. Execute: `pnpm run build && pnpm run deploy`

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto VitaWell, entre em contato através dos canais disponíveis no site.

---

Desenvolvido com ❤️ para promover saúde e bem-estar através de conteúdo de qualidade.

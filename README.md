📚 README: Criando um Projeto com Tailwind CSS e PostCSS do Zero
🚀 Objetivo

Criar um site simples de currículo usando Tailwind CSS com PostCSS, organizado, profissional e preparado para desenvolvimento contínuo com Live Server.

🔧 Ferramentas usadas
Node.js + npm
Tailwind CSS
PostCSS + Autoprefixer
VS Code (com extensão Live Server)

Passo a passo detalhado
1. Criar pasta do projeto

mkdir curriculo
cd curriculo

2. Inicializar npm
npm init -y
Isso cria um package.json básico.

3. Instalar dependências de desenvolvimento
npm install -D tailwindcss postcss autoprefixer

4. Inicializar configuração do Tailwind e PostCSS
npx tailwindcss init -p


Isso cria dois arquivos na raiz:

tailwind.config.js
postcss.config.js


5. Configurar tailwind.config.js

Edite para incluir os caminhos dos seus arquivos que usarão Tailwind:

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b',
        secondary: '#334155',
        accent: '#6366f1',
        'accent-light': '#818cf8',
      }
    },
  },
  plugins: [],
}


6. Criar estrutura de pastas
mkdir -p src/css dist assets

src/css — CSS fonte do Tailwind
dist — saída do CSS compilado
assets — imagens e outros arquivos estáticos


7. Criar arquivo src/css/input.css

Conteúdo:
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

/* Classes utilitárias customizadas via @apply devem ir aqui */

.skill-item {
  @apply px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-default;
}

.skill-category h3 {
  @apply text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2;
}

.job-tags .tag {
  @apply px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-medium;
}


8. Adicionar script no package.json

No seu package.json, adicione:
"scripts": {
  "dev": "tailwindcss -i ./src/css/input.css -o ./dist/output.css --watch"
}


9. Criar arquivo HTML src/index.html

Baseie-se no seu layout atual, ajustando a referência do CSS para:
<link href="../dist/output.css" rel="stylesheet">

Importante: Não coloque <style> com @apply no HTML! Use só classes Tailwind.


10. Rodar o Tailwind em modo desenvolvimento
npm run dev

Ele vai gerar e atualizar o dist/output.css toda vez que você salvar input.css ou index.html.


11. Abrir com Live Server
No VS Code, clique com o botão direito em src/index.html e escolha Open with Live Server.

Isso abrirá o navegador e atualiza automaticamente sempre que salvar mudanças.


12. Testar o projeto
Altere alguma classe no HTML para testar (ex: bg-red-500)
Salve o input.css e veja se o CSS se recompila automaticamente
Veja no navegador o resultado


🔥 Dicas para evoluir seu projeto
Não misture configuração Tailwind no HTML (script inline)
Use sempre o PostCSS para buildar o Tailwind
Centralize seus estilos personalizados no CSS (input.css)
Use pastas organizadas (src, dist, assets)
Use Live Server para desenvolvimento rápido


⚙️ Próximos passos que podemos fazer juntos
Melhorar o design e UI (inspirado em Dribbble)
Deixar 100% responsivo para mobile/tablets
Otimizar currículo para recrutadores (layout + conteúdo)
Subir seu projeto no GitHub Pages para compartilhar online
Transformar seu currículo em portfólio web completo


⚠️ Resumo dos comandos principais
npm init -y
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev

Estrutura final de pastas (exemplo)
curriculo/
├── dist/
│   └── output.css
├── node_modules/
├── src/
│   ├── css/
│   │   └── input.css
│   ├── index.html
│   └── assets/
│       └── fotoperfil.jpg
├── package.json
├── postcss.config.js
└── tailwind.config.js
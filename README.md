📚 Currículo Web com Tailwind CSS e PostCSS
🚀 Objetivo

Criar um site de currículo profissional, responsivo e organizado, usando Tailwind CSS com PostCSS. Preparado para desenvolvimento contínuo e deploy na Vercel.

🔧 Ferramentas usadas
Node.js + npm
Tailwind CSS
PostCSS + Autoprefixer
VS Code (com extensão Live Server)
⚙️ Passo a passo detalhado


1. Criar pasta do projeto
mkdir curriculo
cd curriculo


2. Inicializar npm
npm init -y

Isso cria o package.json básico.


3. Instalar dependências de desenvolvimento
npm install -D tailwindcss postcss autoprefixer


4. Inicializar Tailwind e PostCSS
npx tailwindcss init -p

Isso cria os arquivos:

tailwind.config.js
postcss.config.js


5. Configurar tailwind.config.js
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

Rodar no terminal:
npx tailwindcss -i ./src/css/input.css -o ./dist/output.css --minify
npx tailwindcss -i ./src/css/input.css -o ./dist/output.css --watch

6. Criar estrutura de pastas
mkdir -p src/css public assets

src/css → CSS fonte do Tailwind
public → saída final do HTML e CSS para deploy
assets → imagens e outros arquivos estáticos


7. Criar arquivo src/css/input.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

.skill-item {
  @apply px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors cursor-default;
}

.skill-category h3 {
  @apply text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2;
}

.job-tags .tag {
  @apply px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-medium;
}



8. Scripts do package.json
"scripts": {
  "dev": "tailwindcss -i ./src/css/input.css -o ./dist/output.css --watch",
  "build": "tailwindcss -i ./src/css/input.css -o ./public/output.css --minify && cp src/index.html public/index.html"
}

dev → desenvolvimento local com atualização automática do CSS
build → gera CSS minificado e copia HTML para public/ para deploy

✅ É aqui que entra o comando npx tailwindcss -i ./src/css/input.css -o ./dist/output.css --minify.
Ele é usado quando você quer gerar a versão final do CSS, antes do deploy.


9. Criar arquivo HTML public/index.html
<link href="output.css" rel="stylesheet">

Referência relativa ao CSS compilado em public/.
Não use <style> inline; todo estilo customizado vai em input.css.
Todo estilo customizado via Tailwind deve ficar em input.css e não inline no HTML.


10. Rodar desenvolvimento local
npm run dev
Ele compila e atualiza automaticamente public/output.css
Abra public/index.html com Live Server


11. Build para produção
npm run build
Gera CSS minificado em public/output.css
Use antes de subir para o GitHub ou Vercel


12. Deploy na Vercel
Suba o projeto no GitHub
No painel da Vercel:
Build Command: npm run build
Output Directory: public
Confirme que index.html e output.css estão acessíveis

A Vercel irá servir o site a partir de public/ com todos os estilos aplicados.


13. Estrutura final de pastas
curriculo/
├── public/
│   ├── index.html      <-- HTML copiado no build
│   └── output.css      <-- CSS compilado
├── src/
│   └── css/input.css   <-- CSS Tailwind
├── assets/
│   └── fotoperfil.jpg
├── node_modules/
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── .gitignore


14. .gitignore sugerido
node_modules/
.env
.DS_Store

✅ Não ignore dist/output.css, pois o CSS compilado é necessário para produção.


15. Testando
Alterar qualquer classe Tailwind no HTML
Salvar input.css
Verificar se dist/output.css atualiza automaticamente
Testar npm run build antes do deploy



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
npm run build
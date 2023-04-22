# Imagem base do Node.js
FROM node:16-alpine

# Cria um diretório de trabalho
WORKDIR /app

# Copia os arquivos do aplicativo para o diretório de trabalho
COPY . .

ENV VITE_API_TASKS="http://172.17.0.3:3002/api"

# Instala as dependências do aplicativo
RUN npm install

# Compila o aplicativo com Vite
RUN npm run build

# Define o comando padrão que será executado quando o contêiner for iniciado
CMD ["npm", "run", "dev"]

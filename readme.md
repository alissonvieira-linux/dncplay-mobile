
# DNC Play

HUB para listagem de filmes e séries com base na API do The Movie Database.




## Funcionalidades

- Temas dark e light
- Cadastre até 6 perfis diferentes (e independentes)
- Possibilidade de marcar um título como favorito


## Instalação
Para realizar o download do projeto, é necessário ter o GIT instalado e configurado na sua máquina. Você pode consultar um guia para isso [clicando aqui](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### 1 - Clonando repositório:

No seu terminal, digite o seguinte comando:
```bash
  git clone https://github.com/alissonvieira-linux/dncplay-mobile
```

### 2 - Instalando dependências
Para seguir este passo, é necessário ter o Node instalado em sua máquina. Utilize o gerenciado de pacotes de sua preferência.
Consulte aqui a [documentação para instalação do Node.js](https://nodejs.org/en/).

```bash
  npm i
```

ou, caso esteja utilizando o Yarn:
```bash
  yarn
```

## Executando o projeto
Para executar o projeto em sua máquina, utilize o terminal inserindo os seguintes comandos:

npm
```bash
  npm run android && npm run start
``` 

ou, caso use yarn
```bash
  yarn android && yarn start
``` 

Se você já configurou seu emulador Android ou iOS, ele iniciará automaticamente e começará a instalação do app.

## Stack utilizada

**Mobile:** Javascript, Typescript, React Native, Async Storage, Styled Components, React Navigation v6 e Axios.

**API:** [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction)



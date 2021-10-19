# <h1 align="center">NETFLIX INTERFACE</h1>

<p align="center">Clone the <a href="">Netflix Website interface</a> with React.js | #Cloning-Interfaces-2 :rocket:</p>

<img align="center" src="https://github.com/FelipePDS/netflix-interface/blob/main/.github/feature-image.jpg" />

<p align="center">
    <a href="https://github.com/FelipePDS/netflix-interface/blob/main/LICENSE"><img src="https://img.shields.io/github/license/FelipePDS/netflix-interface?style=for-the-badge&color=E50914"></a> 
    <img src="https://img.shields.io/github/repo-size/FelipePDS/netflix-interface?style=for-the-badge&color=E50914"/>
    <img src="https://img.shields.io/static/v1?label=npm&message=v6.14.4&color=E50914&style=for-the-badge&logo=npm&logoColor=white"> 
    <img src="https://img.shields.io/static/v1?label=yarn&message=v1.22.5&color=E50914&style=for-the-badge&logo=yarn&logoColor=white">
</p>

## 📌 Topics

<ul>
  <li><a href="#license">💻 Technologies</a></li>
  <li><a href="#layout">🎨 Layout</a></li>
  <ul>
      <li><a href="#layout-web">🖥️ Web</a></li>
      <li><a href="#layout-mobile">📱 Mobile</a></li>
  </ul>
  <li><a href="#clone-project">📂 Clone Project</a></li>
  <ul>
      <li><a href="#how-it-use">How it Use</a></li>
  </ul>
  <li><a href="#contribution">🤝 Contribution</a></li>
  <li><a href="#author">👤 Author</a></li>
  <li><a href="#license">📃 License</a></li>
</ul>

<h2 id="technologies">💻 Technologies</h2>

<ul>
  <li><a href="https://pt-br.reactjs.org/">React.js</a></li>
  <ul>
    <li><a href="https://www.typescriptlang.org/pt/docs/handbook/react.html">Typescript</a></li>
    <li><a href="https://www.npmjs.com/package/axios">Axios</a></li>
    <li><a href="https://www.npmjs.com/package/json-server">Json-Server</a></li>
    <li><a href="https://styled-components.com/docs">Styled Components</a></li>
    <li><a href="https://styled-icons.js.org/">Styled Icons</a></li>
  </ul>
  <li><a href="https://yarnpkg.com/">Yarn</a></li>
  <li><a href="https://git-scm.com/">Git</a></li>
  <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
</ul>

<h2 id="layout">🎨 Layout</h2>

<h3 id="layout-web">🖥️ Web</h3>

<p align="center">
    <img src="https://github.com/FelipePDS/netflix-interface/blob/main/.github/Web_Screenshot_1.png" /> <br>
    <img src="https://github.com/FelipePDS/netflix-interface/blob/main/.github/Web_Screenshot_2.png" /> <br>
    <img src="https://github.com/FelipePDS/netflix-interface/blob/main/.github/Web_Screenshot_3.png" />
</p>

<h3 id="layout-mobile">📱 Mobile</h3>

<p align="center">
    <img src="https://github.com/FelipePDS/netflix-interface/blob/main/.github/Mobile_Screenshot_1.png" /> <br>
    <img src="https://github.com/FelipePDS/netflix-interface/blob/main/.github/Mobile_Screenshot_2.png" /> <br>
    <img src="https://github.com/FelipePDS/netflix-interface/blob/main/.github/Mobile_Screenshot_3.png" />
</p>

<h2 id="clone-project">📂 Clone Project</h2>
<p>To clone and run the project, have <a href="https://git-scm.com/">GIT</a> and <a href="https://yarnpkg.com/">YARN</a> installed.</p>

``` bash
# clone
$ git clone https://github.com/FelipePDS/netflix-interface.git

# open project
$ cd netflix-interface

# install dependencies
$ yarn install
# or
$ npm install
```

<h3 id="how-it-use">How it Use</h3>

First you need to get your Secret Key to use the Movie API. To get the Secret Key and understand more about the API go to [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction)


Now with the Secret Key obtained, it is necessary to create a new file called <code>.env</code> and replicate the secret key to a variable exactly as it is in the <kbd><a href="https://github.com/FelipePDS/netflix-interface/blob/main/.env.example">.env.example</a></kbd> file.

With everything set up to use the Movie API, you now need to start the servers. Then within the project, open two bash terminals.

The first server to be started is the users json-server, it loads the profiles on it:

``` bash
$ yarn server
# or
$ npm run server
```

After the user server is started, it is necessary to start the project server:

``` bash
$ yarn start
# or
$ npm start
```

<h2 id="contribution">🤝 Contribution</h2>

To collaborate with the project, you need to create a <code>FORK</code> with your Git account:

``` bash
# Cloning project
$ git clone https://github.com/YOUR-USER/netflix-interface.git

# Creating a branh
$ git branch my-change

# Accessing the new branch
$ git checkout -b my-change

# Adding changed files
$ git add .

# Creating commit and message
$ git commit -m "Your Commit..."

# Submitting changes to branch
$ git push origin my-change
```

Now you should just go to your repository created on Github and click on the <code>New pull request</code> button.

<h2 id="author">👤 Author</h2>

Made by [FelipePDS](https://felipepds.github.io) :heart: | Cloning interfaces with React.js #2

<h2 id="license">📃 License</h2>

All rights reserved to Netflix

<p align="center"><a href="https://github.com/FelipePDS/netflix-interface/blob/main/LICENSE">MIT License</a></p>

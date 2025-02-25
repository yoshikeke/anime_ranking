アプリケーションはこちら
https://animetier-54ccf.web.app/

# 今回挑戦してみた技術
- firebase authentication
- firestore database
- firebase hosting
- firebase ui ←　時間かかった...
- vue router
- vue draggable
- rest api でのデータの取得

# アーキテクチャ図

![asdf](https://github.com/yoshikeke/anime_ranking/blob/main/src/images/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-02-25%2013.17.07.png)

# 環境構築
1. Node.jsをインストール
2. vueファイルを作成
```
npm create vue@latest
```
3. vueアプリにfirebaseを追加
   
firebaseプロジェクトを作成

アプリを登録する

```
npm install firebase
```

firebaseオブジェクトの追加

firebaseコンソールからプロジェクトの設定→マイアプリのコードをコピペ

```src/firebase/init.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  ......
  ......
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics
```

[firebaseをjavascriptアプリに追加する](https://firebase.google.com/docs/web/setup?hl=ja&_gl=1*1aqiyx6*_up*MQ..*_ga*MTQzMTk1OTEzNi4xNzQwNDQ1Nzk1*_ga_CW55HF8NVT*MTc0MDQ0NTc5NS4xLjAuMTc0MDQ0NTc5NS4wLjAuMA..)

4. init.jsにfirebaseのもろもろの機能を追加

init.jsを参照

5. vue-routerのインポート
```
npm install vue-router
```

# 実装編
1. ログイン機能を実装する

[firebaseUIでログイン機能の追加](https://firebase.google.com/docs/auth/web/firebaseui?hl=ja)
   
2. 既存、新規ユーザーでルーティング

init.jsのuiCofig方でルーティングできないか試したが、firebaseの設定ファイルの中でvueの機能は使えないので、LoginScreen.vueのauth.onAuthStateChangedの中でルーティングした

[firestore databaseのデータを取得する方法](https://firebase.google.com/docs/firestore/query-data/get-data?hl=ja&_gl=1*1gsitne*_up*MQ..*_ga*NTUxODY5ODgzLjE3NDA0NTg3ODk.*_ga_CW55HF8NVT*MTc0MDQ1ODc4OS4xLjAuMTc0MDQ1ODc4OS4wLjAuMA..)
[vue-routerの使い方](https://qiita.com/hshota28/items/765cf903f055754f7557)

3. annictにリクエスト

[jsでhttpリクエストをする方法](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)
   
4. 画像の表示
   
5. ドラッグコンポーネントの実装

かなりの曲者,elementってなんなんだ

[vue-draggableサンプルコード](https://sortablejs.github.io/Vue.Draggable/#/simple)

# Vuetify (Default)

This is the official scaffolding tool for Vuetify, designed to give you a head start in building your new Vuetify application. It sets up a base template with all the necessary configurations and standard directory structure, enabling you to begin development without the hassle of setting up the project from scratch.

## ❗️ Important Links

- 📄 [Docs](https://vuetifyjs.com/)
- 🚨 [Issues](https://issues.vuetifyjs.com/)
- 🏬 [Store](https://store.vuetifyjs.com/)
- 🎮 [Playground](https://play.vuetifyjs.com/)
- 💬 [Discord](https://community.vuetifyjs.com)

## 💿 Install

Set up your project using your preferred package manager. Use the corresponding command to install the dependencies:

| Package Manager                                                | Command        |
|---------------------------------------------------------------|----------------|
| [yarn](https://yarnpkg.com/getting-started)                   | `yarn install` |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install)     | `npm install`  |
| [pnpm](https://pnpm.io/installation)                          | `pnpm install` |
| [bun](https://bun.sh/#getting-started)                        | `bun install`  |

After completing the installation, your environment is ready for Vuetify development.

## ✨ Features

- 🖼️ **Optimized Front-End Stack**: Leverage the latest Vue 3 and Vuetify 3 for a modern, reactive UI development experience. [Vue 3](https://v3.vuejs.org/) | [Vuetify 3](https://vuetifyjs.com/en/)
- 🗃️ **State Management**: Integrated with [Pinia](https://pinia.vuejs.org/), the intuitive, modular state management solution for Vue.
- 🚦 **Routing and Layouts**: Utilizes Vue Router for SPA navigation and vite-plugin-vue-layouts for organizing Vue file layouts. [Vue Router](https://router.vuejs.org/) | [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- ⚡ **Next-Gen Tooling**: Powered by Vite, experience fast cold starts and instant HMR (Hot Module Replacement). [Vite](https://vitejs.dev/)
- 🧩 **Automated Component Importing**: Streamline your workflow with unplugin-vue-components, automatically importing components as you use them. [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

These features are curated to provide a seamless development experience from setup to deployment, ensuring that your Vuetify application is both powerful and maintainable.

## 💡 Usage

This section covers how to start the development server and build your project for production.

### Starting the Development Server

To start the development server with hot-reload, run the following command. The server will be accessible at [http://localhost:3000](http://localhost:3000):

```bash
yarn dev
```

(Repeat for npm, pnpm, and bun with respective commands.)

> Add NODE_OPTIONS='--no-warnings' to suppress the JSON import warnings that happen as part of the Vuetify import mapping. If you are on Node [v21.3.0](https://nodejs.org/en/blog/release/v21.3.0) or higher, you can change this to NODE_OPTIONS='--disable-warning=5401'. If you don't mind the warning, you can remove this from your package.json dev script.

### Building for Production

To build your project for production, use:

```bash
yarn build
```

(Repeat for npm, pnpm, and bun with respective commands.)

Once the build process is completed, your application will be ready for deployment in a production environment.

## 💪 Support Vuetify Development

This project is built with [Vuetify](https://vuetifyjs.com/en/), a UI Library with a comprehensive collection of Vue components. Vuetify is an MIT licensed Open Source project that has been made possible due to the generous contributions by our [sponsors and backers](https://vuetifyjs.com/introduction/sponsors-and-backers/). If you are interested in supporting this project, please consider:

- [Requesting Enterprise Support](https://support.vuetifyjs.com/)
- [Sponsoring John on Github](https://github.com/users/johnleider/sponsorship)
- [Sponsoring Kael on Github](https://github.com/users/kaelwd/sponsorship)
- [Supporting the team on Open Collective](https://opencollective.com/vuetify)
- [Becoming a sponsor on Patreon](https://www.patreon.com/vuetify)
- [Becoming a subscriber on Tidelift](https://tidelift.com/subscription/npm/vuetify)
- [Making a one-time donation with Paypal](https://paypal.me/vuetify)

## 📑 License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present Vuetify, LLC
# anime_ranking

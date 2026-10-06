# 凪燈ものがたり

観光列車「凪燈ものがたり」の静的サイトです。

## SCSS編集元

`assets/scss/style.scss`

`style.scss`から各partialを読み込みます。生成済みCSSは直接編集しません。

## CSS出力先

`assets/css/style.css`

## 開発用

```sh
npm run dev
```

## 本番build

```sh
npm run build
```

初回のみ`npm install`で依存パッケージを準備してください。

## ページ

`index.html`、`about.html`、`route.html`、`old-guide.html`、`history.html`、`archive.html`、`gallery.html`、`record.html`、`truth.html`の9ページ構成です。

## modules

`modules/site-alteration/`は提供された演出・debug moduleです。STEP1では調査のみを行い、接続や状態管理は実装していません。

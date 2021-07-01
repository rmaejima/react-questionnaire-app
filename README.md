# 現在製作途中(Youtube簡単検索アプリ)

## 概要
アンケートに答えることで、Youtubeの動画を簡単に検索できるアプリ
動画検索とチャンネル検索を行えるように実装しました。
## 技術スタック
- React
- TypeScript
- styled-components( + ThemeProvider )

## 実行手順
1. GCPアカウントでプロジェクトを作成
2. YouTube Data API v3を有効にし、APIキーを生成
3. このリポジトリをクローン
4. .envを作成し、以下のコードを追加
```bash
REACT_APP_YOUTUBE_API_KEY=YOUR_TOKEN
```
5. `yarn` でパッケージをインストール
6. ```yarn start```で実行

## デモ
### 動画検索のデモ
![React-App-Google-Chrome-2021-07-01-10-01-18](https://user-images.githubusercontent.com/82492270/124049479-85fca580-da53-11eb-9e5f-aefd2b76e2b0.gif)

### チャンネル検索のデモ
![React-App-Google-Chrome-2021-07-01-10-04-20](https://user-images.githubusercontent.com/82492270/124049657-f4d9fe80-da53-11eb-8695-6a8f94dd89c2.gif)

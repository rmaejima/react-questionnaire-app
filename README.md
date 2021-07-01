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

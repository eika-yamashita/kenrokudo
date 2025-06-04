# 絢禄堂 個体管理システム

このリポジトリは飼育個体の管理を行うためのWebアプリケーションのフロントエンドです。

---

## 主な機能

- 個体情報の一覧表示
- 個体情報の新規登録・編集・削除
- 個体ごとの詳細ページ閲覧
- 検索・フィルタ機能（必要に応じて追加）


---

## 技術スタック

- **フロントエンド**
  - React/TypeScript
  - JavaScript, HTML, CSS
- **バックエンド**
  - Java SpringBoot
- **その他**
  - GitHubでソース管理

---

## セットアップ方法

### 1. フロントエンド

```bash
cd frontend
npm install
npm start
```
- `http://localhost:3000` でアプリが起動します。

### 2. バックエンド

```bash
cd backend
./mvnw spring-boot:run
```
- `http://localhost:8080` でAPIが起動します。

---

## ディレクトリ構成例

```
kenrokudo/
├── frontend/             # フロントエンド（Reactアプリ）
├── backend/              # バックエンド（Spring Bootなど）
├── README.md             # このファイル
└── ...
```

---

## APIの概要

- 個体一覧取得: `GET /individuals`
- 個体取得: `GET /individuals/{speciesCd}/{id}`
- 個体登録: `POST /individuals`
- 個体更新: `PUT /individuals/{speciesCd}/{id}`
- 個体削除: `DELETE /individuals/{speciesCd}/{id}`

---

## 開発・運用メモ

- フロントエンド・バックエンドともに別々で起動します。
- CORS対策が必要な場合は、バックエンド側で設定してください。
- 誤操作やデータ損失を防ぐため、編集・削除時は確認ダイアログを表示してください。

---

## ライセンス

このプロジェクトはMITライセンスで公開されています。

---

## 貢献

バグ報告・機能要望・プルリクエストは大歓迎です！

---

## 作者

- [eika-yamashita](https://github.com/eika-yamashita)
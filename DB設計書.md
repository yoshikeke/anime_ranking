# テーブル設計

## usersテーブル

| Column       | Type   | Null | Default | Comment          | Others         |
| ------------ | ------ | ---- | ------- | ---------------- | -------------- |
| sid          | int    | No   | -       | ユーザーSID      | AUTO_INCREMENT |
| user_name    | string | No   | -       | ユーザー名       | -              |
| password     | int    | No   | -       | パスワード       | -              |
| access_token | string | No   | -       | アクセストークン | -              |

### 備考

- `user_name`
    Annictのユーザー名
- `password`
    Annictのパスワード
- `access_token`
    AnnictAPIを利用するための個人用アクセストークン
    [取得方法については公式ドキュメントを参照](https://developers.annict.com/docs/authentication/personal-access-token)

## worksテーブル

| Column     | Type   | Null | Default | Comment           | Others         |
| ---------- | ------ | ---- | ------- | ----------------- | -------------- |
| sid        | int    | No   | -       | 作品SID           | AUTO_INCREMENT |
| title      | string | No   | -       | 作品名            | -              |
| seasonYear | string | No   | -       | 放送年            | -              |
| seasonName | string | No   | -       | 放送クール        | -              |
| annictId   | int    | No   | -       | Annict作品ID      | -              |
| malAnimeId | string | Yes  | Null    | MyAnimeList作品ID | -              |
| image_path | string | Yes  | Null    | 画像ファイルパス  | -              |


### 備考
- annictAPIで取得したアニメの一覧を格納する
- 
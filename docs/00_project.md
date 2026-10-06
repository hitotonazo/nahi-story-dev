# 観光列車「凪燈ものがたり」
# ARGサイト CodeX実装仕様書
# 00_project.md

> 【重要】
> 実装開始前に、
> 00_project.md
> → 01_pages.md
> → 02_game-flow.md
> → 03_truth-ending-images.md
> の順ですべて確認してください。
>
> 1ファイルだけを確認して実装を開始することは禁止します。
> 骨子案・確定画像・modules・本仕様書を最優先とし、
> CodeX独自判断による構成変更は禁止します。


# 1. 基本情報

作品名：
観光列車「凪燈ものがたり」

キャッチコピー：
「景色の、その先へ。」

想定プレイ時間：
20〜60分

進行：
一本道

通常サイトは、山間部・湖・渓谷・食事・車窓を楽しむ
一般的な観光列車ブランドサイトとして制作する。

ゲーム開始時点では、
ホラー・怪異・不穏な表現を使用しない。


# 2. 実装前必須確認

以下を必ず確認してから制作する。

・最新骨子案
・参考サイト画像
・確定済み画像一式
・本4仕様書
・プロジェクト内 modules フォルダ


# 3. modules

modulesフォルダに存在する、

・「サイトが改変されました」演出
・デバッグモード
・既存状態管理処理

を必ず確認・流用する。

同等機能を新規に作り直さない。

modules内の既存仕様について
変更が必要な場合は勝手に改変せず、
変更理由・影響範囲を報告する。


# 4. 制作ページ

index.html
about.html
route.html
old-guide.html
history.html
archive.html
gallery.html
record.html
truth.html


# 5. 作成しないページ

以下は不要。

train.html
dining.html
reservation.html

車両・料理等を紹介する場合も、
TOPや既存ページ内のコンテンツとして配置する。

CodeX判断で復活させない。


# 6. デザイン方向

## 通常サイト

・上品
・和風寄り
・観光列車らしい
・自然、旅、食事を中心とする
・濃紺＋金をブランドカラーとして使用
・白〜生成り系背景
・写真を大きく使用
・ホラー感なし


## レイアウト

PC/SPともに
「崩れないこと」を最優先とする。

禁止：

・セクション間の波型境界
・曲線状の境界
・過剰なclip-path
・複雑なabsolute配置
・過度な要素の重なり
・PCだけ成立するレイアウト


# 7. フォント

見出し：
Shippori Mincho

本文：
Noto Sans JP

英語：
Josefin Sans


# 8. カラー目安

通常：

Navy:
#102c43

Deep Navy:
#071722

Gold:
#b99650

Ivory:
#f7f4ec

Text:
#272727

Line:
#d8d1c3


真相：

Background:
#0d1012

Panel:
#15191c

Border:
#343a3f

Danger Red:
#9b2020


# 9. コンテンツ幅

通常コンテナ：

max-width: 1200px

読み物中心：

max-width: 880px


左右余白：

PC:
40px前後

SP:
20px前後


# 10. セクション余白

PC：

large：120px
medium：96px
small：64px

SP：

large：72px
medium：64px
small：48px


# 11. Header

PC：

・ロゴ
・ナビゲーション
・探索リセット

SP：

・ロゴ
・探索リセット
・ハンバーガー


重要：

SP版の探索リセットは
ハンバーガーメニュー内に入れない。

ハンバーガーボタン横に常時配置する。


ロゴ：

logo-nagibi.png

クリック：
index.html


# 12. Headerナビ

TOP

凪燈ものがたりについて

JOURNEY

HISTORY

GALLERY


# 13. Footer

logo-nagibi-white.png は使用しない。

既存の

logo-nagibi.png

を使用する。

ロゴが視認できる背景を用意する。

Footerロゴクリック：
index.html


Footer内に小さく、

運行管理：
霧嶺運行サービス株式会社

を表示する。


コピーライト：

©ぺいぽぴー


フィクション表記：

※このWebサイトの内容はフィクションであり、
実在の人物・団体とは一切関係ありません。


# 14. ボタン

共通コンポーネントを使用。

.c-button
.c-button--primary
.c-button--secondary
.c-button--text

最低操作領域：
44px

ページ固有でボタンを作り直さない。


# 15. SCSS

SCSSを正とする。

例：

assets/
 ├ scss/
 │  ├ style.scss
 │  ├ foundation/
 │  ├ layout/
 │  ├ component/
 │  └ project/
 └ css/
    └ style.css


style.scss
↓
style.css

という一方向にする。

style.cssの直接編集は禁止。

SCSS変更後は必ずコンパイルする。


# 16. state

localStorageキー：

nagibi_arg_state_v1


想定構造：

{
  "phase": 0,

  "discovered": {
    "route": false,
    "history": false,
    "gallery": false
  },

  "unlocked": {
    "oldGuide": false,
    "archive": false,
    "record": false,
    "truth": false
  },

  "endingReached": false
}


PHASEだけで
初回演出済みかどうかを判定しない。


# 17. 真相ページ

真相ページは通常サイトから明確にデザイン変更する。

暗色背景を使用。

ただし、

「意味が分からないから怖い」

という構成は禁止。

内容を理解した結果、

「人間を業務として消している」

と分かることを優先する。


# 18. CodeX独自判断禁止

以下は禁止。

・ページ追加
・ページ削除
・ページ分割
・タブ化
・真相ページ複数化
・PHASE順変更
・重要異常追加
・設定変更
・冬霞ヶ関駅の名称変更
・凪燈ものがたりの名称変更

・オルグレイ・パートナーズを登場させる

・霧嶺運行サービス株式会社を
  Rルートの依頼主・黒幕とする

霧嶺運行サービス株式会社は
あくまで実行・運行管理側。

依頼元は国家機関、大企業、
その他巨大組織など複数存在する。

また、

「人々の記憶から対象者が消える」

「写真から対象者が消える」

「記録が超常的に消える」

などの設定を追加しない。


# 19. 完了条件

PC表示正常

SP表示正常

横スクロールなし

SCSS build済み

Header/Footerロゴ正常

探索リセット正常

modules正常

localStorage正常

再読み込み正常

ブラウザBack/Forward正常

直接URL対策正常
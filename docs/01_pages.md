# 01_pages.md
# ページ別仕様

> 実装前に4仕様書をすべて確認すること。


# index.html

## 目的

完全に普通の観光列車ブランドサイトとして見せる。


## 構成

1. Header
2. Hero Slideshow
3. Concept
4. Topics
5. About
6. JOURNEY / HISTORY / GALLERY
7. 季節の車窓
8. Footer Landscape
9. Footer


## Hero

4枚。

hero-top-01.jpg
hero-top-02.jpg
hero-top-03.jpg
hero-top-04.jpg


キャッチコピー：

景色の、その先へ。


文字はHTMLで配置する。


## Topics

topics-thumb-01.jpg

topics-thumb-03.jpg

その他、
既に確定済みの画像のみ使用。

CodeX判断で新規画像を作らない。


## About

about-main.jpg


## 導線

JOURNEY：
card-route.jpg

HISTORY：
card-history.jpg

GALLERY：
card-gallery.jpg


## 四季

season-gallery-strip.jpg


## Footer前

footer-landscape.jpg



# about.html

ARG異常なし。

通常ブランドページ。


構成：

Page Title

Concept

about-main.jpg

車窓体験

車内体験

季節の魅力

JOURNEY導線

Footer



# route.html

## 通常

JOURNEY／運行ルート


PC：

route-map-current.png


SP：

route-map-current-sp.png


## PHASE1

PHASE0の状態で閲覧した場合、

現在ルート
↓
旧ルート
↓
現在ルート

を数秒ごとに切り替える。


旧ルート：

PC：

route-map-old.png

SP：

route-map-old-sp.png


旧マップ表示中のみクリック可能。


初回クリック：

phase = 1

discovered.route = true

unlocked.oldGuide = true


modulesの
「サイトが改変されました」
を一度だけ表示。

その後、

old-guide.html

へ遷移。


発見済みの場合は
演出なしで遷移可能。



# old-guide.html

1960年代の公式観光案内。

不気味なページにはしない。


使用：

old-guide-main.jpg

route-map-old.png

route-map-old-sp.png


構成：

タイトル

旧観光パンフレット

山間ルート

冬霞ヶ関駅

停車駅案内

運行終了について

TOPへ戻る


このページで理解：

1960年代に
冬霞ヶ関駅が正式な駅として存在していた。



# history.html

## 通常

年表：

1964
凪燈ものがたり運行開始

1968
運行ルートを現在のコースへ変更

1986
車内サービスをリニューアル

2004
新型車両導入

2024
運行開始60周年


1968年画像：

history-normal-1968.jpg


説明：

「より多くの観光地を巡るため
運行ルートを変更しました。」


## PHASE2

phase >= 1 の場合、

1968年写真のみ

history-anomaly-collage.jpg

へ変更。


他の場所は変更しない。


画像クリック：

phase = 2

discovered.history = true

unlocked.archive = true


modules演出を1回。


archive.html

へ遷移。



# archive.html

タイトル：

冬霞ヶ関駅関連資料


使用画像：

news-1964.jpg

news-1966.jpg

news-1968.jpg

occult-magazine.jpg

station-archive-1960s.jpg

route-close-notice.jpg


構成：

1964年新聞

1966年新聞

1968年新聞

オカルト誌

1960年代冬霞ヶ関駅

山間ルート運行終了資料

TOPへ戻る


重要：

画像内文字だけで説明しない。

HTML本文でも必ず、

1964：
30代男性1名

1966：
女性1名

1968：
1名

が行方不明と記載。


いずれも複数の利用者がいた。

行方不明になったのは
ごくまれに一人だけ。


運行終了：

1968年9月30日をもって
山間ルートの運行を終了。


※「旧山間ルートの運行を終了」
という見出しにはしない。

当時の資料上は
「山間ルート」。



# gallery.html

通常写真：

gallery-normal-01.jpg
gallery-normal-02.jpg
gallery-normal-03.jpg
gallery-normal-04.jpg
gallery-normal-05.jpg


構図はすべて変える。


01：
春・海沿い・斜め前方

02：
夏・水辺・真横

03：
秋・渓谷・橋梁・遠景

04：
冬景色

05：
ホーム・夕方


## PHASE3

phase >= 2 で、

最後に

gallery-fuyugasumigaseki-current.jpg

を追加。


ノイズ演出なし。

画像そのものを異常とする。


写真条件：

雪の日

夕方16時頃

薄暗い

現在の凪燈ものがたり

駅名標
「冬霞ヶ関」

を大きく見せる

男性1名のみホームに残る


クリック：

phase = 3

discovered.gallery = true

unlocked.record = true


modules演出1回。

record.htmlへ。



# record.html

撮影データ・乗客照合記録。


## 撮影データ

HTML table。


撮影日：
2026年2月13日（金）

撮影時刻：
16:08

天候：
降雪

外気温：
-3.2℃

列車：
凪燈ものがたり

運行区分：
特別回送

山間ルート進入：
15:31

冬霞ヶ関駅到着：
16:05

冬霞ヶ関駅発車：
16:10

降車人数：
1名


## 移送記録

対象引渡地点：
第3車両基地

搬入時刻：
14:48

移送区分：
S-2

引渡担当：
██班

依頼元：
████████


ここで、

男性が自分の意思で
観光列車へ乗ったわけではない

と理解させる。


## 男の身元

r017-mugshot.jpg

r017-news-clipping.jpg


HTML：

対象番号：
R-017

氏名：
████ ████

案件：
████議員暗殺事件

状態：
処理完了


赤文字：

運用記録 R ルートを利用して抹消済み


ここではRルートを説明しない。


## 検索

ページ最下部。


placeholder：

記録名を入力


空白を除去して、

運用記録Rルート

と一致した場合のみ成功。


truth.htmlへ。


その他：

該当する記録はありません。



# truth.html

1ページ完結。

詳細は

03_truth-ending-images.md

を参照。
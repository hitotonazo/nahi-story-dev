# 02_game-flow.md
# ARG進行・状態管理

> 実装前に4仕様書をすべて確認すること。


# PHASE

PHASE0
通常サイト

PHASE1
山間ルート・冬霞ヶ関駅を発見

PHASE2
過去の失踪事件を発見

PHASE3
現在も冬霞ヶ関駅が使用されていることを発見

PHASE4
Rルート真相


# 一本道

route.html

↓

old-guide.html

↓

TOP

↓

history.html

↓

archive.html

↓

TOP

↓

gallery.html

↓

record.html

↓

「運用記録 R ルート」を検索

↓

truth.html


別ルートを作らない。


# PHASE1

route.html

唯一の重要異常：

現在マップと過去マップが
数秒おきに切り替わる。


旧マップクリック時：

phase = 1

discovered.route = true

unlocked.oldGuide = true


改変演出：

初回1回のみ。


# PHASE2

history.html


条件：

phase >= 1


唯一の重要異常：

1968年写真のみ変化。


通常：

history-normal-1968.jpg


異常：

history-anomaly-collage.jpg


クリック：

phase = 2

discovered.history = true

unlocked.archive = true


# PHASE3

gallery.html


条件：

phase >= 2


唯一の重要異常：

ギャラリー最後に

gallery-fuyugasumigaseki-current.jpg

追加。


ノイズを入れない。


クリック：

phase = 3

discovered.gallery = true

unlocked.record = true


# 真相解放

record.html


内部検索で、

運用記録 R ルート

を入力。


判定時は
半角／全角スペースを除去。


運用記録Rルート

との一致時：

phase = 4

unlocked.truth = true


truth.htmlへ。


「R」
「Rルート」
などの部分一致だけでは進ませない。


# ページ解放

old-guide.html：

unlocked.oldGuide


archive.html：

unlocked.archive


record.html：

unlocked.record


truth.html：

unlocked.truth


未解放URLへ直接アクセスした場合：

stateは変更しない。

index.htmlへ戻す。


debugモードのみ直接確認可。


# サイト改変演出

modulesを必ず使用。


初回のみ：

PHASE1

PHASE2

PHASE3


一度発見した異常では
二度目以降再生しない。


# Reload

再読み込みしても、

phase

discovered

unlocked

endingReached

を保持。


# Back / Forward

ブラウザバックだけで
PHASEを戻さない。


localStorageを正とする。


# 探索リセット

確認後、

全状態を初期化。


結果：

phase = 0

discovered = false

unlocked = false

endingReached = false


history：
通常写真

gallery：
異常写真なし

truth：
アクセス不可


index.htmlへ戻る。


# DEBUG

modulesの既存debugを利用。


確認項目：

phase

discovered

unlocked

reset

PHASE切替


本番画面には露出させない。


# SP

PCとゲームルールを変えない。


異常位置も同じ。


route：
マップ

history：
1968写真

gallery：
最後の写真


探索リセットは
ハンバーガー外。


# 最重要

1PHASEにつき
新規重要異常は1箇所。

以前の異常は残してよい。

プレイヤーに
「次にどこを押せばいいのか」
が自然に分かる構成にする。
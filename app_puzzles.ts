import { Puzzle } from './types'

export const puzzles: Puzzle[] = [
  {
    title: "第一の謎 〜Bとaの暗号〜",
    description: "下の文字列をよく観察せよ。\"大きいもの\"を 1、\"小さいもの\"を 0 として7つずつ束ねたとき、本来の姿が見えるだろう。",
    ciphertext: "BaaaaBaBaaBBBBBaaaaaBBaBaabaBaaabaaaBaaaaaBaBaabBBaabaaBaaabaBBaaaaaaBaBaaBBa",
    answer: "Board Game",
    hint: "0〜127の範囲で考えてみよう。7ビットは何を表しているのだろうか？",
    nextLocation: "ボードゲーム置き場"
  },
  {
    title: "第二の謎 〜シャッフルされたUTF-8バイト列〜",
    description: "下のバイト列(16進数)は、本来 2文字を表す符号化情報だった。しかし何らかの力で並びが混乱し、6片に砕け散ってしまった。正しい順序を復元し、2文字を呼び覚ませ。",
    ciphertext: "0xE7 0xE8 0xAE 0xAC 0xB1 0x96",
    answer: "薬箱",
    hint: "これは多バイト文字のかけら、6バイトで2文字らしい…？",
    nextLocation: "薬箱"
  },
  {
    title: "第三の謎 〜ROT13〜",
    description: "かつて 26の旅人が円卓を囲んでいたが、その座席が \"13\" だけずれているという。彼らを本来の位置へ戻せば、言葉が蘇るはずだ。",
    ciphertext: "T E R R A   C B H P U",
    answer: "GREEN POUCH",
    hint: "26文字＝アルファベット…13のズレ…？",
    nextLocation: "緑のポーチ"
  },
  {
    title: "第四の謎 〜Vigenère暗号〜",
    description: "古の剣は \"バラ\" の呪文で封印されている――そう伝わる伝承が次の文にも宿るという。呪文を解き放てば、真の姿が映し出されるだろう。",
    ciphertext: "BCFRP OCYPI TMNOF SYOCS",
    answer: "婚約指輪の箱",
    hint: "\"バラ\"=ROSE が鍵？複数回のずらし…",
    nextLocation: "婚約指輪の箱"
  },
  {
    title: "第五（最終）の謎 〜集大成〜",
    description: "汝が歩んだ四つの道――そこには、それぞれ異なる術式があった。いま再び、それらを思い出し、四つの断章を解き放て。",
    ciphertext: `第一の断章 (B/a変換 7ビットASCII)
第二の断章 (シャッフルしたASCIIバイト列)
第三の断章 (ROT13)
第四の断章 (Vigenère, キー: "ROSE")

すべてを解読し、並び連ねれば、最後の地が姿を現すだろう。`,
    answer: "the black laundry basket",
    hint: "各断章を解読し、結果を組み合わせてみよう。",
    nextLocation: "黒い洗濯物入れ"
  }
]


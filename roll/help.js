var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply = {
	type: 'text'
}; //type是必需的,但可以更改

function Help() {
	rply = {
		"type": "template",
		"altText": "【擲骰BOT】v1.7.1 \
\n 例如輸入2d6+1　攻撃！\
\n 會輸出）2d6+1：攻撃  9[6+3]+1 = 10\
\n 如上面一樣,在骰子數字後方隔空白位打字,可以進行發言。\
\n 以下還有其他例子\
\n 5 3D6 	：分別骰出5次3d6\
\n D66 D66s ：骰出D66 s小者固定在前\
\n 5B10：不加總的擲骰 會進行小至大排序 \
\n 5B10 9：如上,另外計算其中有多少粒大於9 \
\n 5U10 8：進行5D10 每骰出一粒8會有一粒獎勵骰 \
\n 5U10 8 9：如上,另外計算其中有多少粒大於9 \
\n Choice：啓動語choice/隨機/選項/選1\
\n (問題)(啓動語)(問題)  (選項1) (選項2) \
\n 例子 隨機收到聖誕禮物數 1 2 3 >4  \
\n COC7ed：cc 80 技能小於等於80  \
\n 其他指令請到 https://github.com/zeteticl/RoboYabaso 最底下查詢",
		"template": {
			"type": "carousel",
			"columns": [{
					"title": "《基本擲骰系統》",
					"text": "【擲骰BOT】v1.61 指令包括1D100, 5B10 ,5U10 8 9",
					"actions": [{
							"type": "message",
							"label": "1d100擲骰範例",
							"text": "5 1d100 骰出5次1D100"
						},
						{
							"type": "message",
							"label": "5B10擲骰範例",
							"text": "5B10 9 不加總的擲骰,計算其中有多少粒大於9"
						},
						{
							"type": "message",
							"label": "5U10 8 9擲骰範例",
							"text": "5U10 8 9 每骰出一粒8會有一粒獎勵骰及計算有多少粒大於9"
						}

					]
				}, {
					"title": "《COC 6 7版 擲骰系統》",
					"text": "指令包括 6版ccb, 7版cc, cc(n)1~2, cc6版創角, cc7版創角, coc7角色背景",
					"actions": [{
							"type": "message",
							"label": "6版擲骰 技能80",
							"text": "ccb 80 擒抱!"
						},
						{
							"type": "message",
							"label": "7版擲骰 cc((n)1-2) d ",
							"text": "ccn2 80 7版擲骰 n代表懲罰 1-2數量 d 目標值"
						},
						{
							"type": "message",
							"label": "cc7版創角 50歲",
							"text": "cc7版創角 50"
						}

					]
				},
				{
					"title": "《COC7版 擲骰系統》",
					"text": "指令包括 即時型瘋狂 總結型瘋狂",
					"actions": [{
							"type": "message",
							"label": "即時型瘋狂Real Time",
							"text": "ccrt"
						},
						{
							"type": "message",
							"label": "總結型瘋狂Summary",
							"text": "ccsu"
						},
						{
							"type": "message",
							"label": "成長或增強檢定",
							"text": "DP 80 偵查 Development Phase"
						}

					]
				},
				{
					"title": "《其他系統01》",
					"text": "NC死靈年代記之永遠的後日談, WoD黑暗世界",
					"actions": [{
							"type": "message",
							"label": "1NC 擲骰範例",
							"text": "2NC"
						},
						{
							"type": "message",
							"label": "NM 依戀擲骰範例",
							"text": "nm"
						},
						{
							"type": "message",
							"label": "WOD擲骰範例",
							"text": "5wd8 投擲5次D10 每有一粒大於8,得到一粒獎勵骰"
						}

					]
				},
				{
					"title": "《其他系統02》",
					"text": "DX3雙重十字 nDXc+m n=骰數 c=暴擊值 m=其他修正",
					"actions": [{
							"type": "message",
							"label": "DX3 擲骰範例",
							"text": "5DX8-1+8"
						},
						{
							"type": "message",
							"label": "DX3 擲骰範例",
							"text": "8DX+1"
						},
						{
							"type": "message",
							"label": "DX3 擲骰範例",
							"text": "2DX5-1"
						}

					]
				},
				{
					"title": "《其他系統03》",
					"text": "SW2.0 劍世界 KKn+m-m@c$d$+xGF n=骰數 c=暴擊值 m=其他修正 d=固定值 x=增加值",
					"actions": [{
							"type": "message",
							"label": "SW2.0 擲骰範例",
							"text": "KK28-8+1"
						},
						{
							"type": "message",
							"label": "SW2.0 擲骰範例",
							"text": "KK050+8-1@8"
						},
						{
							"type": "message",
							"label": "SW2.0 擲骰範例",
							"text": "KK050+8@8$9gf"
						}

					]
				},
				{
					"title": "《附加功能》",
					"text": "排序及隨機功能,D66, D66s",
					"actions": [{
							"type": "message",
							"label": "排序功能範例",
							"text": "交換禮物排序 A君 C君 F君 G君"
						},
						{
							"type": "message",
							"label": "隨機功能範例",
							"text": "隨機收到聖誕禮物數 1 2 3 >4"
						},
						{
							"type": "message",
							"label": "D66s 骰出D66 小至大",
							"text": "D66s 骰出D66 小至大"
						}

					]
				},
				{
					"title": "《附加功能2》",
					"text": "塔羅牌,運氣占卜,死亡FLAG. ",
					"actions": [{
							"type": "message",
							"label": "塔羅占卜",
							"text": "單張塔羅/大十字塔羅/每日塔羅牌/時間tarot 單張,大十字,每日及時間必須放頭"
						},
						{
							"type": "message",
							"label": "死亡FLAG, 運氣占卜",
							"text": "立Flag/死亡flag, 全句中包含運勢兩字"
						},
						{
							"type": "message",
							"label": "骰子機器人原始碼",
							"text": "https://github.com/zeteticl/RoboYabaso"
						}

					]
				}
			]
		}
	};
	return rply;
}



module.exports = {
	Help: Help
};

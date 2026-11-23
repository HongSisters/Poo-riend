(function(){
'use strict';
/* ===================== i18n ===================== */
var I18N = {
  ko: {
    'app.sub':'똥 현황 공유',
    'auth.tagline':'친구 똥 현황. 실시간.',
    'auth.phone':'휴대폰 번호', 'auth.id':'아이디', 'auth.nick':'닉네임',
    'auth.phonePh':'010-0000-0000', 'auth.idPh':'honglan', 'auth.nickPh':'홍란',
    'auth.enter':'입장', 'auth.demo':'데모로 입장',
    'auth.notice':'프로토타입. 입력값은 이 기기에만 저장돼요.',
    'auth.errPhone':'번호 다시 볼까요.', 'auth.errId':'아이디 3자 이상.', 'auth.errNick':'닉네임 넣어 주세요.',
    'tab.home':'홈', 'tab.mypoo':'내 똥', 'tab.friends':'친구', 'tab.settings':'설정',
    'home.title':'뒷간', 'home.lede':'지금 <b>{n}곳</b> 중 <b>{a}곳</b>이 사용 중이에요.',
    'home.add':'뒷간 추가', 'home.empty':'아직 뒷간이 없어요', 'home.emptySub':'하나 만들면 친구를 초대할 수 있어요.',
    'home.members':'{n}명', 'home.active':'{n}명 똥 중', 'home.idle':'아무도 없음',
    'home.foot':'문을 눌러 들어가요.', 'home.owner':'방장', 'home.member':'멤버',
    'room.back':'뒤로', 'room.free':'빈칸', 'room.using':'똥 중', 'room.stall':'칸 {n}',
    'room.enter':'똥 싸러 들어가기', 'room.enterSub':'눌러서 입장', 'room.leave':'물 내리기', 'room.flush':'물 내리고 나가기',
    'room.silentNote':'아이폰 무음 모드면 소리가 안 들려요. 스위치를 위로 올려 주세요.',
    'room.holdHint':'칸을 길게 누르면 응원, 두 번 누르면 노크.',
    'room.inRoom':'{n}명 · {a}명 똥 중', 'room.full':'자리 없음', 'room.yours':'내 칸',
    'room.pooping':'똥 싸는 중', 'room.game':'미니게임', 'room.gameSub':'똥 싸면서 한 판',
    'room.cheer':'{name} 응원함', 'room.knock':'{name} 노크함', 'room.leaveDone':'기록됨 · {t}',
    'room.admin':'뒷간 관리', 'room.ownerName':'방장 {name}',
    'mypoo.title':'내 똥', 'mypoo.lede':'꾸민 똥은 친구들한테도 이렇게 보여요.',
    'mypoo.shape':'모양', 'mypoo.thick':'굵기', 'mypoo.hat':'모자', 'mypoo.saved':'저장됨',
    'mypoo.newHats':'이달의 신상 5종', 'mypoo.newHatsSub':'매달 모자 5개가 새로 나와요.', 'mypoo.none':'안 씀',
    'shape.classic':'클래식', 'shape.flat':'납작', 'shape.tall':'길쭉', 'shape.round':'동글', 'shape.tip':'뾰족', 'shape.twins':'쌍둥이',
    'thick.0':'얇음', 'thick.1':'보통', 'thick.2':'굵음', 'thick.3':'왕굵음',
    'hat.none':'안 씀', 'hat.crown':'왕관', 'hat.beanie':'비니', 'hat.cap':'볼캡', 'hat.beret':'베레모', 'hat.tp':'휴지모자',
    'hat.bow':'리본', 'hat.flower':'화관', 'hat.wizard':'마법사', 'hat.phones':'헤드폰', 'hat.cone':'고깔',
    'friends.title':'친구', 'friends.lede':'친구를 눌러 이달의 똥을 봐요.',
    'friends.empty':'기록 없음', 'friends.badgePoo':'이달의 똥쟁이', 'friends.badgeLong':'똥파이터',
    'fp.count':'이번 달', 'fp.countUnit':'{n}회', 'fp.longest':'최장', 'fp.total':'총 시간', 'fp.rooms':'{n}곳에서 만남',
    'settings.title':'설정', 'settings.account':'계정', 'settings.display':'화면', 'settings.dark':'다크 모드',
    'settings.lang':'언어', 'settings.security':'보안', 'settings.encrypt':'암호화',
    'settings.encryptSub':'전송 구간 암호화 (프로토타입: 흉내)', 'settings.autoLogout':'자동 로그아웃',
    'settings.off':'안 함', 'settings.min':'{n}분', 'settings.data':'데이터', 'settings.reset':'데모 초기화',
    'settings.resetSub':'기록을 전부 지움', 'settings.logout':'로그아웃', 'settings.about':'Poo-riend v6 · 프로토타입',
    'settings.phone':'휴대폰', 'settings.id':'아이디', 'settings.nick':'닉네임',
    'settings.on':'켜짐', 'settings.offState':'꺼짐', 'settings.myPoo':'내 똥 꾸미기',
    'confirm.logoutTitle':'로그아웃 할까요', 'confirm.logoutBody':'기록은 남아요.',
    'confirm.resetTitle':'데모 초기화 할까요', 'confirm.resetBody':'기록이 전부 지워져요.',
    'confirm.deleteTitle':'뒷간을 지울까요', 'confirm.deleteBody':'{name}과 기록이 함께 사라져요. 되돌릴 수 없어요.',
    'confirm.leaveTitle':'뒷간에서 나갈까요', 'confirm.leaveBody':'{name}의 기록에서 빠져요. 다시 초대받으면 들어올 수 있어요.',
    'confirm.yes':'응', 'confirm.no':'아니', 'common.close':'닫기', 'common.cancel':'취소',
    'add.title':'뒷간 추가', 'add.name':'뒷간 이름', 'add.placeholder':'예: 우리집 변기', 'add.create':'만들기',
    'add.code':'초대코드', 'add.err':'이름을 넣어 주세요.', 'add.done':'뒷간 만듦',
    'add.note':'만들면 초대코드가 생겨요. 친구는 그 코드로 들어와요.',
    'friend.title':'친구 추가', 'friend.name':'닉네임', 'friend.add':'추가', 'friend.dup':'이미 있어요',
    'friend.added':'{name} 추가됨', 'friend.hint':'추가하면 칸이 하나 늘어나요.',
    'cal.title':'달력', 'cal.month':'{y}년 {m}월', 'cal.dows':'일,월,화,수,목,금,토', 'cal.minShort':'{n}분',
    'cal.topPoo':'이번 달 최다 똥쟁이', 'cal.topLong':'이번 달 최장 똥파이터', 'cal.none':'기록 없음',
    'cal.countUnit':'{n}회', 'cal.dayDetail':'{m}월 {d}일', 'cal.empty':'이 날 기록 없음',
    'cal.total':'이번 달 {n}회 · {t}', 'cal.legend':'점 = 횟수',
    'notify.title':'알림', 'notify.empty':'알림 없음',
    'admin.title':'뒷간 관리', 'admin.name':'뒷간 이름', 'admin.rename':'이름 저장', 'admin.color':'뒷간 색',
    'admin.colorSub':'카드와 안쪽 포인트 색이 같이 바뀌어요.', 'admin.delete':'뒷간 삭제', 'admin.leave':'뒷간 탈퇴',
    'admin.saved':'저장했어요', 'admin.members':'멤버', 'admin.ownerOnly':'방장만 바꿀 수 있어요.',
    'admin.info':'초대코드 {code} · {n}명', 'admin.memberNote':'방장 {name}이 만든 뒷간이에요.',
    'game.title':'똥 미니게임', 'game.sub':'변기를 피해 달리고, 바닥의 휴지를 먹어요.',
    'game.hint':'화면을 눌러 점프 · 바닥 휴지 = 목숨 +1', 'game.over':'게임 오버', 'game.score':'점수', 'game.best':'최고',
    'game.restart':'다시 하기', 'game.newBest':'최고 기록!', 'game.start':'시작', 'game.ready':'눌러서 출발',
    'badge.you':'나', 'badge.poo':'똥쟁이', 'badge.long':'똥파이터', 'admin.saveColor':'색 저장',
    'toast.pooping':'{name} 똥 중입니다.', 'toast.entered':'{name} 입장', 'toast.left':'{name} 나감',
    'toast.cheerSent':'응원 보냄', 'toast.knockSent':'노크함', 'toast.roomDeleted':'뒷간 지움',
    'toast.roomLeft':'뒷간에서 나옴', 'toast.renamed':'이름 바꿈', 'toast.colorSaved':'색 저장됨',
    'toast.life':'목숨 +1', 'toast.noRoom':'뒷간이 없어졌어요'
  },
  en: {
    'app.sub':'Poop status',
    'auth.tagline':"Friends' poop status. Live.",
    'auth.phone':'Phone number', 'auth.id':'ID', 'auth.nick':'Nickname',
    'auth.phonePh':'010-0000-0000', 'auth.idPh':'honglan', 'auth.nickPh':'Honglan',
    'auth.enter':'Enter', 'auth.demo':'Demo login',
    'auth.notice':'Prototype. Saved on this device only.',
    'auth.errPhone':'Check the number.', 'auth.errId':'ID needs 3+ characters.', 'auth.errNick':'Enter a nickname.',
    'tab.home':'Home', 'tab.mypoo':'My poo', 'tab.friends':'Friends', 'tab.settings':'Settings',
    'home.title':'Toilets', 'home.lede':'<b>{a}</b> of <b>{n}</b> in use right now.',
    'home.add':'Add toilet', 'home.empty':'No toilets yet', 'home.emptySub':'Make one and invite a friend.',
    'home.members':'{n} people', 'home.active':'{n} pooping', 'home.idle':'Empty',
    'home.foot':'Tap a door to enter.', 'home.owner':'Owner', 'home.member':'Member',
    'room.back':'Back', 'room.free':'Free', 'room.using':'Pooping', 'room.stall':'Stall {n}',
    'room.enter':'Go poop', 'room.enterSub':'Tap to enter', 'room.leave':'Flush', 'room.flush':'Flush and leave',
    'room.silentNote':'On iPhone silent mode the sound stays off. Flick the switch on.',
    'room.holdHint':'Hold a stall to cheer, double-tap to knock.',
    'room.inRoom':'{n} people · {a} pooping', 'room.full':'Full', 'room.yours':'My stall',
    'room.pooping':'Pooping', 'room.game':'Mini game', 'room.gameSub':'Play while you sit',
    'room.cheer':'Cheered {name}', 'room.knock':'Knocked {name}', 'room.leaveDone':'Logged · {t}',
    'room.admin':'Toilet settings', 'room.ownerName':'Owner {name}',
    'mypoo.title':'My poo', 'mypoo.lede':'Friends see your poo like this.',
    'mypoo.shape':'Shape', 'mypoo.thick':'Thickness', 'mypoo.hat':'Hat', 'mypoo.saved':'Saved',
    'mypoo.newHats':'5 new this month', 'mypoo.newHatsSub':'Five new hats every month.', 'mypoo.none':'None',
    'shape.classic':'Classic', 'shape.flat':'Flat', 'shape.tall':'Tall', 'shape.round':'Round', 'shape.tip':'Pointy', 'shape.twins':'Twins',
    'thick.0':'Thin', 'thick.1':'Normal', 'thick.2':'Thick', 'thick.3':'Extra',
    'hat.none':'None', 'hat.crown':'Crown', 'hat.beanie':'Beanie', 'hat.cap':'Cap', 'hat.beret':'Beret', 'hat.tp':'TP roll',
    'hat.bow':'Bow', 'hat.flower':'Flowers', 'hat.wizard':'Wizard', 'hat.phones':'Headphones', 'hat.cone':'Party',
    'friends.title':'Friends', 'friends.lede':"Tap a friend to see this month's poo.",
    'friends.empty':'No records', 'friends.badgePoo':'Top pooper', 'friends.badgeLong':'Longest sitter',
    'fp.count':'This month', 'fp.countUnit':'{n}x', 'fp.longest':'Longest', 'fp.total':'Total', 'fp.rooms':'In {n} toilets',
    'settings.title':'Settings', 'settings.account':'Account', 'settings.display':'Display', 'settings.dark':'Dark mode',
    'settings.lang':'Language', 'settings.security':'Security', 'settings.encrypt':'Encryption',
    'settings.encryptSub':'Encrypted in transit (simulated)', 'settings.autoLogout':'Auto logout',
    'settings.off':'Off', 'settings.min':'{n} min', 'settings.data':'Data', 'settings.reset':'Reset demo',
    'settings.resetSub':'Delete all records', 'settings.logout':'Log out', 'settings.about':'Poo-riend v6 · Prototype',
    'settings.phone':'Phone', 'settings.id':'ID', 'settings.nick':'Nickname',
    'settings.on':'On', 'settings.offState':'Off', 'settings.myPoo':'Customize my poo',
    'confirm.logoutTitle':'Log out?', 'confirm.logoutBody':'Records stay.',
    'confirm.resetTitle':'Reset demo?', 'confirm.resetBody':'All records are deleted.',
    'confirm.deleteTitle':'Delete this toilet?', 'confirm.deleteBody':'{name} and its records go away. This cannot be undone.',
    'confirm.leaveTitle':'Leave this toilet?', 'confirm.leaveBody':'You drop out of {name}. You can rejoin if invited again.',
    'confirm.yes':'Yes', 'confirm.no':'No', 'common.close':'Close', 'common.cancel':'Cancel',
    'add.title':'Add toilet', 'add.name':'Toilet name', 'add.placeholder':'e.g. Home toilet', 'add.create':'Create',
    'add.code':'Code', 'add.err':'Enter a name.', 'add.done':'Toilet added',
    'add.note':'A code is made. Friends join with it.',
    'friend.title':'Add friend', 'friend.name':'Nickname', 'friend.add':'Add', 'friend.dup':'Already added',
    'friend.added':'{name} added', 'friend.hint':'One more friend, one more stall.',
    'cal.title':'Calendar', 'cal.month':'{m}/{y}', 'cal.dows':'S,M,T,W,T,F,S', 'cal.minShort':'{n}m',
    'cal.topPoo':'Top pooper this month', 'cal.topLong':'Longest sitter this month', 'cal.none':'No records',
    'cal.countUnit':'{n}x', 'cal.dayDetail':'{m}/{d}', 'cal.empty':'No records', 'cal.total':'{n} times · {t}',
    'cal.legend':'Dots = count',
    'notify.title':'Alerts', 'notify.empty':'No alerts',
    'admin.title':'Toilet settings', 'admin.name':'Toilet name', 'admin.rename':'Save name', 'admin.color':'Toilet color',
    'admin.colorSub':'Changes the card and inside accents.', 'admin.delete':'Delete toilet', 'admin.leave':'Leave toilet',
    'admin.saved':'Saved', 'admin.members':'Members', 'admin.ownerOnly':'Only the owner can change this.',
    'admin.info':'Code {code} · {n} people', 'admin.memberNote':'Owned by {name}.',
    'game.title':'Poop mini game', 'game.sub':'Dodge the toilets, grab the TP on the floor.',
    'game.hint':'Tap to jump · floor TP = +1 life', 'game.over':'Game over', 'game.score':'Score', 'game.best':'Best',
    'game.restart':'Play again', 'game.newBest':'New best!', 'game.start':'Start', 'game.ready':'Tap to start',
    'badge.you':'Me', 'badge.poo':'Top pooper', 'badge.long':'Longest', 'admin.saveColor':'Save color',
    'toast.pooping':'{name} is pooping.', 'toast.entered':'{name} entered', 'toast.left':'{name} left',
    'toast.cheerSent':'Cheer sent', 'toast.knockSent':'Knocked', 'toast.roomDeleted':'Toilet deleted',
    'toast.roomLeft':'Left the toilet', 'toast.renamed':'Name saved', 'toast.colorSaved':'Color saved',
    'toast.life':'Life +1', 'toast.noRoom':'That toilet is gone'
  },
  ja: {
    'app.sub':'うんち状況',
    'auth.tagline':'友達のうんち状況。リアルタイム。',
    'auth.phone':'電話番号', 'auth.id':'ID', 'auth.nick':'ニックネーム',
    'auth.phonePh':'090-0000-0000', 'auth.idPh':'honglan', 'auth.nickPh':'ホンラン',
    'auth.enter':'入る', 'auth.demo':'デモで入る',
    'auth.notice':'プロトタイプ。この端末にのみ保存。',
    'auth.errPhone':'番号を確認。', 'auth.errId':'IDは3文字以上。', 'auth.errNick':'ニックネームを入れて。',
    'tab.home':'ホーム', 'tab.mypoo':'マイうんち', 'tab.friends':'友達', 'tab.settings':'設定',
    'home.title':'トイレ', 'home.lede':'今 <b>{n}</b>件中 <b>{a}</b>件が使用中。',
    'home.add':'トイレを追加', 'home.empty':'トイレがありません', 'home.emptySub':'作って友達を招待しましょう。',
    'home.members':'{n}人', 'home.active':'{n}人うんち中', 'home.idle':'空き',
    'home.foot':'ドアを押して入る。', 'home.owner':'オーナー', 'home.member':'メンバー',
    'room.back':'戻る', 'room.free':'空き', 'room.using':'うんち中', 'room.stall':'個室 {n}',
    'room.enter':'うんちしに行く', 'room.enterSub':'押して入る', 'room.leave':'流す', 'room.flush':'流して出る',
    'room.silentNote':'iPhoneのサイレントモード中は音が出ません。',
    'room.holdHint':'長押しで応援、2回押しでノック。',
    'room.inRoom':'{n}人 · {a}人うんち中', 'room.full':'満員', 'room.yours':'自分の個室',
    'room.pooping':'うんち中', 'room.game':'ミニゲーム', 'room.gameSub':'座りながら一戦',
    'room.cheer':'{name}を応援', 'room.knock':'{name}にノック', 'room.leaveDone':'記録 · {t}',
    'room.admin':'トイレ管理', 'room.ownerName':'オーナー {name}',
    'mypoo.title':'マイうんち', 'mypoo.lede':'飾ったうんちは友達にもこう見えます。',
    'mypoo.shape':'形', 'mypoo.thick':'太さ', 'mypoo.hat':'帽子', 'mypoo.saved':'保存済み',
    'mypoo.newHats':'今月の新作5種', 'mypoo.newHatsSub':'毎月5つ新しい帽子が出ます。', 'mypoo.none':'なし',
    'shape.classic':'クラシック', 'shape.flat':'平たい', 'shape.tall':'長い', 'shape.round':'まる', 'shape.tip':'とがり', 'shape.twins':'双子',
    'thick.0':'細い', 'thick.1':'普通', 'thick.2':'太い', 'thick.3':'極太',
    'hat.none':'なし', 'hat.crown':'王冠', 'hat.beanie':'ニット帽', 'hat.cap':'キャップ', 'hat.beret':'ベレー', 'hat.tp':'トイレットペーパー',
    'hat.bow':'リボン', 'hat.flower':'花冠', 'hat.wizard':'魔法使い', 'hat.phones':'ヘッドホン', 'hat.cone':'とんがり',
    'friends.title':'友達', 'friends.lede':'友達を押して今月のうんちを見る。',
    'friends.empty':'記録なし', 'friends.badgePoo':'今月のうんち王', 'friends.badgeLong':'うんち戦士',
    'fp.count':'今月', 'fp.countUnit':'{n}回', 'fp.longest':'最長', 'fp.total':'合計', 'fp.rooms':'{n}件で一緒',
    'settings.title':'設定', 'settings.account':'アカウント', 'settings.display':'画面', 'settings.dark':'ダークモード',
    'settings.lang':'言語', 'settings.security':'セキュリティ', 'settings.encrypt':'暗号化',
    'settings.encryptSub':'通信を暗号化（プロトタイプ：模擬）', 'settings.autoLogout':'自動ログアウト',
    'settings.off':'なし', 'settings.min':'{n}分', 'settings.data':'データ', 'settings.reset':'デモ初期化',
    'settings.resetSub':'記録を全部削除', 'settings.logout':'ログアウト', 'settings.about':'Poo-riend v6 · プロトタイプ',
    'settings.phone':'電話番号', 'settings.id':'ID', 'settings.nick':'ニックネーム',
    'settings.on':'オン', 'settings.offState':'オフ', 'settings.myPoo':'うんちを飾る',
    'confirm.logoutTitle':'ログアウトする？', 'confirm.logoutBody':'記録は残る。',
    'confirm.resetTitle':'デモを初期化する？', 'confirm.resetBody':'記録は全部消える。',
    'confirm.deleteTitle':'トイレを削除する？', 'confirm.deleteBody':'{name}と記録が消えます。戻せません。',
    'confirm.leaveTitle':'トイレから出る？', 'confirm.leaveBody':'{name}から抜けます。また招待されれば入れます。',
    'confirm.yes':'はい', 'confirm.no':'いいえ', 'common.close':'閉じる', 'common.cancel':'キャンセル',
    'add.title':'トイレ追加', 'add.name':'トイレ名', 'add.placeholder':'例: 家のトイレ', 'add.create':'作成',
    'add.code':'招待コード', 'add.err':'名前を入れて。', 'add.done':'トイレを追加した',
    'add.note':'作成すると招待コードが出る。友達はそのコードで入る。',
    'friend.title':'友達追加', 'friend.name':'ニックネーム', 'friend.add':'追加', 'friend.dup':'追加済み',
    'friend.added':'{name} 追加', 'friend.hint':'友達が増えると個室も増える。',
    'cal.title':'カレンダー', 'cal.month':'{y}年{m}月', 'cal.dows':'日,月,火,水,木,金,土', 'cal.minShort':'{n}分',
    'cal.topPoo':'今月の最多うんち王', 'cal.topLong':'今月の最長うんち戦士', 'cal.none':'記録なし',
    'cal.countUnit':'{n}回', 'cal.dayDetail':'{m}月{d}日', 'cal.empty':'この日の記録なし',
    'cal.total':'今月{n}回 · {t}', 'cal.legend':'点 = 回数',
    'notify.title':'通知', 'notify.empty':'通知なし',
    'admin.title':'トイレ管理', 'admin.name':'トイレ名', 'admin.rename':'名前を保存', 'admin.color':'トイレの色',
    'admin.colorSub':'カードと内側の色が変わります。', 'admin.delete':'トイレを削除', 'admin.leave':'トイレを出る',
    'admin.saved':'保存した', 'admin.members':'メンバー', 'admin.ownerOnly':'オーナーのみ変更可。',
    'admin.info':'コード {code} · {n}人', 'admin.memberNote':'{name}さんが作ったトイレ。',
    'game.title':'うんちミニゲーム', 'game.sub':'便器を避けて走り、床のペーパーを取る。',
    'game.hint':'タップでジャンプ · 床のペーパーでライフ+1', 'game.over':'ゲームオーバー', 'game.score':'スコア', 'game.best':'最高',
    'game.restart':'もう一回', 'game.newBest':'最高記録！', 'game.start':'スタート', 'game.ready':'タップで開始',
    'badge.you':'自分', 'badge.poo':'うんち王', 'badge.long':'最長', 'admin.saveColor':'色を保存',
    'toast.pooping':'{name} うんち中です。', 'toast.entered':'{name} 入室', 'toast.left':'{name} 退出',
    'toast.cheerSent':'応援した', 'toast.knockSent':'ノックした', 'toast.roomDeleted':'トイレを削除',
    'toast.roomLeft':'トイレを出た', 'toast.renamed':'名前を変更', 'toast.colorSaved':'色を保存',
    'toast.life':'ライフ +1', 'toast.noRoom':'トイレがありません'
  },
  zh: {
    'app.sub':'拉屎状态',
    'auth.tagline':'好友拉屎状态。实时。',
    'auth.phone':'手机号', 'auth.id':'账号', 'auth.nick':'昵称',
    'auth.phonePh':'138-0000-0000', 'auth.idPh':'honglan', 'auth.nickPh':'洪兰',
    'auth.enter':'进入', 'auth.demo':'演示登录',
    'auth.notice':'原型。仅保存在本机。',
    'auth.errPhone':'检查号码。', 'auth.errId':'账号至少3位。', 'auth.errNick':'请输入昵称。',
    'tab.home':'首页', 'tab.mypoo':'我的便便', 'tab.friends':'好友', 'tab.settings':'设置',
    'home.title':'厕所', 'home.lede':'<b>{n}</b>个中有<b>{a}</b>个正在使用。',
    'home.add':'添加厕所', 'home.empty':'还没有厕所', 'home.emptySub':'建一个就能邀请好友。',
    'home.members':'{n}人', 'home.active':'{n}人在拉', 'home.idle':'没人',
    'home.foot':'点门进入。', 'home.owner':'房主', 'home.member':'成员',
    'room.back':'返回', 'room.free':'空位', 'room.using':'拉屎中', 'room.stall':'隔间 {n}',
    'room.enter':'去拉屎', 'room.enterSub':'点击进入', 'room.leave':'冲水', 'room.flush':'冲水离开',
    'room.silentNote':'iPhone 静音模式下没有声音。',
    'room.holdHint':'长按加油，双击敲门。',
    'room.inRoom':'{n}人 · {a}人在拉', 'room.full':'满了', 'room.yours':'我的隔间',
    'room.pooping':'拉屎中', 'room.game':'小游戏', 'room.gameSub':'坐着来一局',
    'room.cheer':'给{name}加油', 'room.knock':'敲了{name}的门', 'room.leaveDone':'已记录 · {t}',
    'room.admin':'厕所管理', 'room.ownerName':'房主 {name}',
    'mypoo.title':'我的便便', 'mypoo.lede':'好友看到的就是这样。',
    'mypoo.shape':'形状', 'mypoo.thick':'粗细', 'mypoo.hat':'帽子', 'mypoo.saved':'已保存',
    'mypoo.newHats':'本月新品5款', 'mypoo.newHatsSub':'每月上新5顶帽子。', 'mypoo.none':'不戴',
    'shape.classic':'经典', 'shape.flat':'扁扁', 'shape.tall':'长长', 'shape.round':'圆圆', 'shape.tip':'尖尖', 'shape.twins':'双胞胎',
    'thick.0':'细', 'thick.1':'普通', 'thick.2':'粗', 'thick.3':'超粗',
    'hat.none':'不戴', 'hat.crown':'皇冠', 'hat.beanie':'毛线帽', 'hat.cap':'棒球帽', 'hat.beret':'贝雷帽', 'hat.tp':'卷纸帽',
    'hat.bow':'蝴蝶结', 'hat.flower':'花环', 'hat.wizard':'巫师', 'hat.phones':'耳机', 'hat.cone':'派对帽',
    'friends.title':'好友', 'friends.lede':'点好友查看本月便便。',
    'friends.empty':'没有记录', 'friends.badgePoo':'本月拉屎王', 'friends.badgeLong':'久蹲王',
    'fp.count':'本月', 'fp.countUnit':'{n}次', 'fp.longest':'最长', 'fp.total':'总时长', 'fp.rooms':'在{n}个厕所',
    'settings.title':'设置', 'settings.account':'账号', 'settings.display':'显示', 'settings.dark':'深色模式',
    'settings.lang':'语言', 'settings.security':'安全', 'settings.encrypt':'加密',
    'settings.encryptSub':'传输加密（原型：模拟）', 'settings.autoLogout':'自动退出',
    'settings.off':'不自动', 'settings.min':'{n}分钟', 'settings.data':'数据', 'settings.reset':'重置演示',
    'settings.resetSub':'清空全部记录', 'settings.logout':'退出登录', 'settings.about':'Poo-riend v6 · 原型',
    'settings.phone':'手机号', 'settings.id':'账号', 'settings.nick':'昵称',
    'settings.on':'开', 'settings.offState':'关', 'settings.myPoo':'装饰我的便便',
    'confirm.logoutTitle':'退出登录？', 'confirm.logoutBody':'记录会保留。',
    'confirm.resetTitle':'重置演示？', 'confirm.resetBody':'全部记录会删除。',
    'confirm.deleteTitle':'删除这个厕所？', 'confirm.deleteBody':'{name}和记录一起消失，无法恢复。',
    'confirm.leaveTitle':'离开这个厕所？', 'confirm.leaveBody':'你会退出{name}。再次受邀可以回来。',
    'confirm.yes':'是', 'confirm.no':'否', 'common.close':'关闭', 'common.cancel':'取消',
    'add.title':'添加厕所', 'add.name':'厕所名称', 'add.placeholder':'例：家里的厕所', 'add.create':'创建',
    'add.code':'邀请码', 'add.err':'请输入名称。', 'add.done':'已添加厕所',
    'add.note':'创建后会生成邀请码，好友用邀请码加入。',
    'friend.title':'加好友', 'friend.name':'昵称', 'friend.add':'添加', 'friend.dup':'已添加',
    'friend.added':'已添加 {name}', 'friend.hint':'好友越多，隔间越多。',
    'cal.title':'日历', 'cal.month':'{y}年{m}月', 'cal.dows':'日,一,二,三,四,五,六', 'cal.minShort':'{n}分',
    'cal.topPoo':'本月拉屎王', 'cal.topLong':'本月久蹲王', 'cal.none':'没有记录',
    'cal.countUnit':'{n}次', 'cal.dayDetail':'{m}月{d}日', 'cal.empty':'这天没有记录',
    'cal.total':'本月{n}次 · {t}', 'cal.legend':'点 = 次数',
    'notify.title':'通知', 'notify.empty':'没有通知',
    'admin.title':'厕所管理', 'admin.name':'厕所名称', 'admin.rename':'保存名称', 'admin.color':'厕所色',
    'admin.colorSub':'卡片和内部颜色一起变。', 'admin.delete':'删除厕所', 'admin.leave':'退出厕所',
    'admin.saved':'已保存', 'admin.members':'成员', 'admin.ownerOnly':'只有房主可以修改。',
    'admin.info':'邀请码 {code} · {n}人', 'admin.memberNote':'由{name}创建。',
    'game.title':'拉屎小游戏', 'game.sub':'躲开马桶，吃地上的卷纸。',
    'game.hint':'点击跳跃 · 地上卷纸 = 命 +1', 'game.over':'游戏结束', 'game.score':'分数', 'game.best':'最高',
    'game.restart':'再来一局', 'game.newBest':'新纪录！', 'game.start':'开始', 'game.ready':'点击开始',
    'badge.you':'我', 'badge.poo':'拉屎王', 'badge.long':'久蹲王', 'admin.saveColor':'保存颜色',
    'toast.pooping':'{name} 正在拉屎。', 'toast.entered':'{name} 进入', 'toast.left':'{name} 离开',
    'toast.cheerSent':'已加油', 'toast.knockSent':'已敲门', 'toast.roomDeleted':'厕所已删除',
    'toast.roomLeft':'已离开厕所', 'toast.renamed':'名称已改', 'toast.colorSaved':'颜色已存',
    'toast.life':'命 +1', 'toast.noRoom':'厕所不见了'
  }
};

var LANGS = [
  {code:'ko', label:'한국어'},
  {code:'en', label:'English'},
  {code:'ja', label:'日本語'},
  {code:'zh', label:'中文'}
];


/* ---- v7 server build: extra strings ---- */
var I18N_EXTRA = {
  ko: {
    'auth.login':'로그인', 'auth.signup':'회원가입', 'auth.pw':'비밀번호', 'auth.pwPh':'4자 이상',
    'auth.phoneOpt':'휴대폰 번호 (선택)', 'auth.toSignup':'처음이에요 · 회원가입', 'auth.toLogin':'계정 있어요 · 로그인',
    'auth.demo':'데모로 둘러보기', 'auth.notice':'계정과 기록은 서버에 저장돼요. 데모 계정은 3일 뒤 지워져요.',
    'auth.enter':'입장',
    'err.bad_handle':'아이디는 영문 소문자·숫자 3~20자.', 'err.bad_password':'비밀번호는 4자 이상.',
    'err.bad_name':'닉네임 넣어 주세요.', 'err.bad_phone':'번호 다시 볼까요.', 'err.handle_taken':'이미 쓰는 아이디예요.',
    'err.bad_login':'아이디나 비밀번호가 달라요.', 'err.slow_down':'잠깐 쉬었다 다시 해 주세요.',
    'err.no_room':'그런 초대코드는 없어요.', 'err.room_full':'뒷간이 꽉 찼어요.', 'err.too_many_rooms':'뒷간은 12개까지.',
    'err.network':'서버 연결이 안 돼요.', 'err.server':'서버 오류. 다시 해 주세요.', 'err.already_in':'이미 들어가 있어요.',
    'err.owner_only':'방장만 할 수 있어요.', 'err.login':'다시 로그인해 주세요.',
    'home.join':'코드로 참여', 'add.joinTitle':'초대코드로 참여', 'add.codePh':'POO-ABCD', 'add.join':'참여',
    'add.or':'또는 친구 뒷간에 들어가기', 'add.joined':'뒷간 입장',
    'inv.title':'친구 초대', 'inv.sub':'코드나 링크를 보내면 친구가 바로 들어와요.', 'inv.copy':'링크 복사', 'inv.copied':'복사됨',
    'inv.share':'공유', 'inv.text':'{room} 뒷간으로 와! 초대코드 {code}',
    'mode.title':'오늘 상태는?', 'mode.sub':'고르면 바로 칸에 들어가요.',
    'mode.normal':'쾌변', 'mode.hard':'변비', 'mode.loose':'설사',
    'mode.normalSub':'평화로운 하루', 'mode.hardSub':'끙… 힘줘서 뚫어야 함', 'mode.looseSub':'급함! 친구들한테 경보 울림',
    'room.push':'힘주기!', 'room.pushSub':'끙 게이지 {n}/{goal} · 친구 응원 +3',
    'room.relieved':'뚫렸다!', 'room.relievedSub':'변비 탈출. 이제 물 내려요.',
    'room.urgent':'급똥 비상', 'room.urgentSub':'꾸르륵… 조금만 버텨', 'room.rumble':'꾸르륵…',
    'room.suspect':'변비 의심', 'room.toHard':'변비 모드로', 'room.toLoose':'설사 모드로',
    'room.holdHint':'칸을 길게 누르면 응원, 두 번 누르면 노크. 변비 친구는 응원하면 힘이 +3.',
    'room.invite':'친구 초대', 'room.live':'실시간',
    'tag.hard':'변비', 'tag.loose':'설사', 'tag.looseToday':'오늘 {n}번',
    'cal.topHard':'변비왕', 'cal.topLoose':'설사왕', 'badge.hard':'변비왕', 'badge.loose':'설사왕',
    'kind.normal':'쾌변', 'kind.hard':'변비', 'kind.loose':'설사',
    'cal.legend':'● 쾌변 · ○ 변비 · ▲ 설사 · 숫자 = 분',
    'n.entered':'{name} 똥 싸러 감 · {room}', 'n.enteredHard':'{name} 변비로 고전 중 · {room}',
    'n.urgent':'🚨 {name} 급똥 비상! · {room}', 'n.relieved':'💨 {name} 변비 탈출! · {room}',
    'n.cheered':'♥ {name}이(가) 응원함', 'n.knocked':'똑똑! {name}이(가) 노크함',
    'n.joined':'{name} 새로 들어옴 · {room}', 'n.roomGone':'{room} 뒷간이 없어졌어요',
    'settings.conn':'연결', 'settings.connHttps':'HTTPS 암호화됨', 'settings.connPlain':'암호화 안 됨 (로컬 테스트)',
    'settings.delete':'회원 탈퇴', 'settings.deleteSub':'계정과 기록을 전부 지워요', 'settings.about':'Poo-riend v7 · 서버판',
    'settings.guest':'데모 계정 · 3일 뒤 삭제', 'settings.rename':'닉네임 바꾸기',
    'confirm.deleteMeTitle':'탈퇴할까요', 'confirm.deleteMeBody':'계정과 기록이 지워지고, 내가 방장인 뒷간은 다른 멤버에게 넘어가요. 되돌릴 수 없어요.',
    'mypoo.mood':'표정', 'mypoo.moodNote':'미리보기만 · 실제 표정은 칸에 들어갈 때 고른 상태로 바뀌어요.',
    'live.off':'연결 끊김 · 다시 붙는 중', 'name.title':'닉네임 바꾸기', 'name.save':'저장'
  },
  en: {
    'auth.login':'Log in', 'auth.signup':'Sign up', 'auth.pw':'Password', 'auth.pwPh':'4+ characters',
    'auth.phoneOpt':'Phone (optional)', 'auth.toSignup':'New here · Sign up', 'auth.toLogin':'Have an account · Log in',
    'auth.demo':'Try the demo', 'auth.notice':'Accounts and records live on the server. Demo accounts are deleted after 3 days.',
    'auth.enter':'Enter',
    'err.bad_handle':'ID: 3-20 lowercase letters or digits.', 'err.bad_password':'Password needs 4+ characters.',
    'err.bad_name':'Enter a nickname.', 'err.bad_phone':'Check the number.', 'err.handle_taken':'That ID is taken.',
    'err.bad_login':'Wrong ID or password.', 'err.slow_down':'Too many tries. Wait a bit.',
    'err.no_room':'No toilet with that code.', 'err.room_full':'That toilet is full.', 'err.too_many_rooms':'Max 12 toilets.',
    'err.network':'Cannot reach the server.', 'err.server':'Server error. Try again.', 'err.already_in':'Already inside.',
    'err.owner_only':'Owner only.', 'err.login':'Please log in again.',
    'home.join':'Join with code', 'add.joinTitle':'Join with a code', 'add.codePh':'POO-ABCD', 'add.join':'Join',
    'add.or':"Or join a friend's toilet", 'add.joined':'Joined',
    'inv.title':'Invite friends', 'inv.sub':'Send the code or link and friends join right away.', 'inv.copy':'Copy link', 'inv.copied':'Copied',
    'inv.share':'Share', 'inv.text':'Join {room} on Poo-riend! Code {code}',
    'mode.title':'How is it today?', 'mode.sub':'Pick one and you are in.',
    'mode.normal':'Smooth', 'mode.hard':'Constipated', 'mode.loose':'Diarrhea',
    'mode.normalSub':'A peaceful day', 'mode.hardSub':'Ugh… you have to push', 'mode.looseSub':'Urgent! Alarms your friends',
    'room.push':'Push!', 'room.pushSub':'Push meter {n}/{goal} · cheers +3',
    'room.relieved':'Through!', 'room.relievedSub':'Constipation beaten. Flush now.',
    'room.urgent':'Code brown', 'room.urgentSub':'Grumble… hang in there', 'room.rumble':'Grumble…',
    'room.suspect':'Constipated?', 'room.toHard':'Constipated mode', 'room.toLoose':'Diarrhea mode',
    'room.holdHint':'Hold a stall to cheer, double-tap to knock. Cheering a constipated friend adds +3.',
    'room.invite':'Invite', 'room.live':'Live',
    'tag.hard':'Constipated', 'tag.loose':'Diarrhea', 'tag.looseToday':'{n}x today',
    'cal.topHard':'Constipation king', 'cal.topLoose':'Diarrhea king', 'badge.hard':'Constip. king', 'badge.loose':'Diarrhea king',
    'kind.normal':'Smooth', 'kind.hard':'Constipated', 'kind.loose':'Diarrhea',
    'cal.legend':'● smooth · ○ constipated · ▲ diarrhea · number = min',
    'n.entered':'{name} went to poop · {room}', 'n.enteredHard':'{name} is constipated · {room}',
    'n.urgent':'🚨 {name} code brown! · {room}', 'n.relieved':'💨 {name} broke through! · {room}',
    'n.cheered':'♥ {name} cheered you', 'n.knocked':'Knock knock! {name}',
    'n.joined':'{name} joined · {room}', 'n.roomGone':'{room} was deleted',
    'settings.conn':'Connection', 'settings.connHttps':'HTTPS encrypted', 'settings.connPlain':'Not encrypted (local test)',
    'settings.delete':'Delete account', 'settings.deleteSub':'Erase account and records', 'settings.about':'Poo-riend v7 · Server',
    'settings.guest':'Demo account · deleted in 3 days', 'settings.rename':'Change nickname',
    'confirm.deleteMeTitle':'Delete account?', 'confirm.deleteMeBody':'Your account and records go away; toilets you own pass to another member. This cannot be undone.',
    'mypoo.mood':'Mood', 'mypoo.moodNote':'Preview only · the real face follows the state you pick when entering.',
    'live.off':'Offline · reconnecting', 'name.title':'Change nickname', 'name.save':'Save'
  },
  ja: {
    'auth.login':'ログイン', 'auth.signup':'新規登録', 'auth.pw':'パスワード', 'auth.pwPh':'4文字以上',
    'auth.phoneOpt':'電話番号（任意）', 'auth.toSignup':'はじめて · 新規登録', 'auth.toLogin':'アカウントあり · ログイン',
    'auth.demo':'デモで見る', 'auth.notice':'アカウントと記録はサーバーに保存。デモは3日後に削除。',
    'auth.enter':'入る',
    'err.bad_handle':'IDは英小文字・数字3〜20文字。', 'err.bad_password':'パスワードは4文字以上。',
    'err.bad_name':'ニックネームを入れて。', 'err.bad_phone':'番号を確認。', 'err.handle_taken':'そのIDは使用中。',
    'err.bad_login':'IDかパスワードが違います。', 'err.slow_down':'少し待ってから。',
    'err.no_room':'そのコードのトイレはありません。', 'err.room_full':'満員です。', 'err.too_many_rooms':'トイレは12件まで。',
    'err.network':'サーバーにつながりません。', 'err.server':'サーバーエラー。', 'err.already_in':'もう入っています。',
    'err.owner_only':'オーナーのみ。', 'err.login':'もう一度ログインして。',
    'home.join':'コードで参加', 'add.joinTitle':'招待コードで参加', 'add.codePh':'POO-ABCD', 'add.join':'参加',
    'add.or':'または友達のトイレに入る', 'add.joined':'参加した',
    'inv.title':'友達を招待', 'inv.sub':'コードかリンクを送るとすぐ入れます。', 'inv.copy':'リンクをコピー', 'inv.copied':'コピーした',
    'inv.share':'共有', 'inv.text':'{room}に来て！招待コード {code}',
    'mode.title':'今日の調子は？', 'mode.sub':'選ぶとすぐ個室に入ります。',
    'mode.normal':'快便', 'mode.hard':'便秘', 'mode.loose':'下痢',
    'mode.normalSub':'平和な一日', 'mode.hardSub':'うーん…いきむ必要あり', 'mode.looseSub':'緊急！友達に警報',
    'room.push':'いきむ！', 'room.pushSub':'いきみゲージ {n}/{goal} · 応援 +3',
    'room.relieved':'出た！', 'room.relievedSub':'便秘脱出。流そう。',
    'room.urgent':'緊急事態', 'room.urgentSub':'ゴロゴロ… がんばれ', 'room.rumble':'ゴロゴロ…',
    'room.suspect':'便秘かも', 'room.toHard':'便秘モード', 'room.toLoose':'下痢モード',
    'room.holdHint':'長押しで応援、2回押しでノック。便秘の友達を応援すると+3。',
    'room.invite':'招待', 'room.live':'ライブ',
    'tag.hard':'便秘', 'tag.loose':'下痢', 'tag.looseToday':'今日{n}回',
    'cal.topHard':'便秘王', 'cal.topLoose':'下痢王', 'badge.hard':'便秘王', 'badge.loose':'下痢王',
    'kind.normal':'快便', 'kind.hard':'便秘', 'kind.loose':'下痢',
    'cal.legend':'● 快便 · ○ 便秘 · ▲ 下痢 · 数字 = 分',
    'n.entered':'{name} うんち中 · {room}', 'n.enteredHard':'{name} 便秘で苦戦中 · {room}',
    'n.urgent':'🚨 {name} 緊急事態！ · {room}', 'n.relieved':'💨 {name} 便秘脱出！ · {room}',
    'n.cheered':'♥ {name}が応援', 'n.knocked':'コンコン！{name}がノック',
    'n.joined':'{name} 参加 · {room}', 'n.roomGone':'{room}が削除されました',
    'settings.conn':'接続', 'settings.connHttps':'HTTPS 暗号化', 'settings.connPlain':'暗号化なし（ローカル）',
    'settings.delete':'退会', 'settings.deleteSub':'アカウントと記録を削除', 'settings.about':'Poo-riend v7 · サーバー版',
    'settings.guest':'デモアカウント · 3日後に削除', 'settings.rename':'ニックネーム変更',
    'confirm.deleteMeTitle':'退会する？', 'confirm.deleteMeBody':'アカウントと記録が消え、オーナーのトイレは他のメンバーへ。戻せません。',
    'mypoo.mood':'表情', 'mypoo.moodNote':'プレビューのみ · 実際の表情は入室時の状態で変わる。',
    'live.off':'切断 · 再接続中', 'name.title':'ニックネーム変更', 'name.save':'保存'
  },
  zh: {
    'auth.login':'登录', 'auth.signup':'注册', 'auth.pw':'密码', 'auth.pwPh':'至少4位',
    'auth.phoneOpt':'手机号（选填）', 'auth.toSignup':'第一次来 · 注册', 'auth.toLogin':'已有账号 · 登录',
    'auth.demo':'演示体验', 'auth.notice':'账号和记录保存在服务器。演示账号3天后删除。',
    'auth.enter':'进入',
    'err.bad_handle':'账号为3-20位小写字母或数字。', 'err.bad_password':'密码至少4位。',
    'err.bad_name':'请输入昵称。', 'err.bad_phone':'检查号码。', 'err.handle_taken':'账号已被使用。',
    'err.bad_login':'账号或密码错误。', 'err.slow_down':'尝试太多，稍后再试。',
    'err.no_room':'没有这个邀请码。', 'err.room_full':'厕所满了。', 'err.too_many_rooms':'最多12个厕所。',
    'err.network':'连不上服务器。', 'err.server':'服务器错误。', 'err.already_in':'已经在里面了。',
    'err.owner_only':'只有房主可以。', 'err.login':'请重新登录。',
    'home.join':'用邀请码加入', 'add.joinTitle':'用邀请码加入', 'add.codePh':'POO-ABCD', 'add.join':'加入',
    'add.or':'或加入好友的厕所', 'add.joined':'已加入',
    'inv.title':'邀请好友', 'inv.sub':'发送邀请码或链接，好友马上加入。', 'inv.copy':'复制链接', 'inv.copied':'已复制',
    'inv.share':'分享', 'inv.text':'来{room}！邀请码 {code}',
    'mode.title':'今天状态如何？', 'mode.sub':'选好立即进入隔间。',
    'mode.normal':'顺畅', 'mode.hard':'便秘', 'mode.loose':'拉肚子',
    'mode.normalSub':'平静的一天', 'mode.hardSub':'嗯…得用力', 'mode.looseSub':'紧急！给好友拉警报',
    'room.push':'用力！', 'room.pushSub':'用力值 {n}/{goal} · 加油 +3',
    'room.relieved':'通了！', 'room.relievedSub':'便秘解除，冲水吧。',
    'room.urgent':'紧急状态', 'room.urgentSub':'咕噜咕噜… 坚持住', 'room.rumble':'咕噜咕噜…',
    'room.suspect':'疑似便秘', 'room.toHard':'便秘模式', 'room.toLoose':'拉肚子模式',
    'room.holdHint':'长按加油，双击敲门。给便秘好友加油 +3。',
    'room.invite':'邀请', 'room.live':'实时',
    'tag.hard':'便秘', 'tag.loose':'拉肚子', 'tag.looseToday':'今天{n}次',
    'cal.topHard':'便秘王', 'cal.topLoose':'拉肚子王', 'badge.hard':'便秘王', 'badge.loose':'拉肚子王',
    'kind.normal':'顺畅', 'kind.hard':'便秘', 'kind.loose':'拉肚子',
    'cal.legend':'● 顺畅 · ○ 便秘 · ▲ 拉肚子 · 数字 = 分钟',
    'n.entered':'{name} 去拉屎了 · {room}', 'n.enteredHard':'{name} 便秘苦战中 · {room}',
    'n.urgent':'🚨 {name} 紧急！ · {room}', 'n.relieved':'💨 {name} 便秘解除！ · {room}',
    'n.cheered':'♥ {name} 给你加油', 'n.knocked':'咚咚！{name} 敲门',
    'n.joined':'{name} 加入 · {room}', 'n.roomGone':'{room} 已被删除',
    'settings.conn':'连接', 'settings.connHttps':'HTTPS 已加密', 'settings.connPlain':'未加密（本地测试）',
    'settings.delete':'注销账号', 'settings.deleteSub':'删除账号和全部记录', 'settings.about':'Poo-riend v7 · 服务器版',
    'settings.guest':'演示账号 · 3天后删除', 'settings.rename':'修改昵称',
    'confirm.deleteMeTitle':'注销账号？', 'confirm.deleteMeBody':'账号和记录会删除，你是房主的厕所会转给其他成员。无法恢复。',
    'mypoo.mood':'表情', 'mypoo.moodNote':'仅预览 · 实际表情跟随进入时选择的状态。',
    'live.off':'已断开 · 重新连接中', 'name.title':'修改昵称', 'name.save':'保存'
  }
};
(function(){
  for(var lang in I18N_EXTRA){
    if(!Object.prototype.hasOwnProperty.call(I18N_EXTRA, lang)) continue;
    for(var k in I18N_EXTRA[lang]){
      if(Object.prototype.hasOwnProperty.call(I18N_EXTRA[lang], k)) I18N[lang][k] = I18N_EXTRA[lang][k];
    }
  }
})();
/* ---- v7.1: plain, dry copy (no cute tone) — overrides everything above ---- */
var I18N_DRY = {
  ko: {
    'auth.tagline':'친구 똥 현황 실시간 공유', 'auth.notice':'계정과 기록은 서버에 저장. 데모 계정은 3일 후 삭제.',
    'auth.toSignup':'회원가입', 'auth.toLogin':'로그인', 'auth.demo':'데모',
    'home.lede':'{n}곳 중 {a}곳 사용 중', 'home.empty':'뒷간 없음', 'home.emptySub':'뒷간을 만들면 초대코드가 생성됨',
    'home.foot':'문을 눌러 입장', 'home.idle':'비어 있음',
    'room.enter':'입장', 'room.enterSub':'상태 선택 후 칸 배정',
    'room.silentNote':'아이폰 무음 모드에서는 소리 없음',
    'room.holdHint':'길게 누르면 응원, 두 번 누르면 노크. 변비 상태 멤버는 응원 1회당 게이지 +3',
    'room.cheer':'{name} 응원', 'room.knock':'{name} 노크', 'room.leaveDone':'기록 · {t}',
    'room.pooping':'사용 중', 'room.gameSub':'대기 중 미니게임',
    'mypoo.lede':'친구 화면에 이 모양으로 표시', 'mypoo.newHats':'이달 신규 5종', 'mypoo.newHatsSub':'매달 5종 추가',
    'mypoo.mood':'상태', 'mypoo.moodNote':'미리보기. 실제 표시는 입장 시 선택한 상태 기준.',
    'friends.lede':'이름을 누르면 이번 달 기록', 'friends.badgePoo':'최다 횟수', 'friends.badgeLong':'최장 시간',
    'settings.myPoo':'내 똥 설정', 'settings.deleteSub':'계정과 기록 전체 삭제', 'settings.guest':'데모 계정 · 3일 후 삭제',
    'confirm.logoutTitle':'로그아웃', 'confirm.logoutBody':'기록은 유지됨',
    'confirm.deleteTitle':'뒷간 삭제', 'confirm.deleteBody':'{name}과 모든 기록 삭제. 복구 불가.',
    'confirm.leaveTitle':'뒷간 탈퇴', 'confirm.leaveBody':'{name}에서 내 기록 삭제. 재초대 시 재입장 가능.',
    'confirm.deleteMeTitle':'회원 탈퇴', 'confirm.deleteMeBody':'계정과 기록 삭제. 방장인 뒷간은 다른 멤버에게 이전. 복구 불가.',
    'confirm.yes':'확인', 'confirm.no':'취소',
    'add.err':'이름 입력 필요', 'add.done':'뒷간 생성됨', 'add.note':'생성 시 초대코드 발급. 친구는 코드로 참여.',
    'add.or':'초대코드로 참여', 'add.joined':'참여 완료',
    'inv.sub':'코드 또는 링크 전달 시 바로 참여 가능', 'inv.text':'Poo-riend {room} · 초대코드 {code}',
    'cal.topPoo':'최다 횟수', 'cal.topLong':'최장 시간', 'cal.topHard':'변비 최다', 'cal.topLoose':'설사 최다',
    'cal.empty':'기록 없음', 'cal.legend':'● 쾌변 · ○ 변비 · ▲ 설사 · 숫자 = 분',
    'admin.colorSub':'카드와 내부 포인트 색 변경', 'admin.saved':'저장됨', 'admin.ownerOnly':'방장만 변경 가능',
    'admin.memberNote':'{name}이(가) 만든 뒷간',
    'game.sub':'변기를 피하고 바닥의 휴지를 주움', 'game.hint':'화면을 눌러 점프 · 휴지 = 목숨 +1', 'game.newBest':'최고 기록',
    'badge.poo':'최다 횟수', 'badge.long':'최장 시간', 'badge.hard':'변비 최다', 'badge.loose':'설사 최다',
    'toast.pooping':'{name} 사용 중', 'toast.entered':'{name} 접속', 'toast.roomLeft':'뒷간 탈퇴함',
    'toast.renamed':'이름 변경됨', 'toast.noRoom':'삭제된 뒷간',
    'err.bad_handle':'아이디: 영문 소문자·숫자 3~20자', 'err.bad_password':'비밀번호 4자 이상', 'err.bad_name':'닉네임 입력 필요',
    'err.bad_phone':'번호 확인 필요', 'err.handle_taken':'이미 사용 중인 아이디', 'err.bad_login':'아이디 또는 비밀번호 불일치',
    'err.slow_down':'시도 횟수 초과. 잠시 후 재시도', 'err.no_room':'존재하지 않는 초대코드', 'err.room_full':'정원 초과',
    'err.too_many_rooms':'뒷간은 최대 12개', 'err.network':'서버 연결 실패', 'err.server':'서버 오류',
    'err.already_in':'이미 입장 중', 'err.owner_only':'방장만 가능', 'err.login':'다시 로그인 필요',
    'mode.title':'똥 상태', 'mode.sub':'선택 즉시 입장',
    'mode.normalSub':'일반', 'mode.hardSub':'힘주기 게이지를 채워야 배출', 'mode.looseSub':'입장 시 멤버 전원에게 경보',
    'room.push':'힘주기', 'room.pushSub':'게이지 {n}/{goal} · 응원 1회 +3',
    'room.relieved':'배출 완료', 'room.relievedSub':'물 내리기 가능',
    'room.urgent':'설사', 'room.urgentSub':'멤버 전원에게 경보 전송됨', 'room.rumble':'복통',
    'tag.looseToday':'오늘 {n}회', 'tag.cheers':'응원 {n}',
    'n.entered':'{name} 입장 · {room}', 'n.enteredHard':'{name} 입장 (변비) · {room}',
    'n.urgent':'{name} 입장 (설사) · {room}', 'n.relieved':'{name} 변비 해소 · {room}',
    'n.cheered':'{name} 응원', 'n.knocked':'{name} 노크', 'n.joined':'{name} 참여 · {room}', 'n.roomGone':'{room} 삭제됨',
    'live.off':'연결 끊김 · 재연결 중'
  },
  en: {
    'auth.tagline':"Friends' poop status, live.", 'auth.toSignup':'Sign up', 'auth.toLogin':'Log in', 'auth.demo':'Demo',
    'home.lede':'{a} of {n} in use', 'home.emptySub':'Creating a toilet issues an invite code.',
    'room.holdHint':'Hold to cheer, double-tap to knock. Each cheer adds +3 to a constipated member.',
    'mypoo.mood':'State', 'mypoo.moodNote':'Preview. Actual display follows the state chosen on entry.',
    'mode.title':'Poop state', 'mode.sub':'Enters immediately',
    'mode.normalSub':'Normal', 'mode.hardSub':'Fill the push meter to finish', 'mode.looseSub':'Alerts all members on entry',
    'room.push':'Push', 'room.pushSub':'Meter {n}/{goal} · cheer +3',
    'room.relieved':'Done', 'room.relievedSub':'Ready to flush',
    'room.urgent':'Diarrhea', 'room.urgentSub':'Alert sent to all members', 'room.rumble':'Cramp',
    'tag.cheers':'cheers {n}', 'tag.looseToday':'{n}x today',
    'n.entered':'{name} entered · {room}', 'n.enteredHard':'{name} entered (constipated) · {room}',
    'n.urgent':'{name} entered (diarrhea) · {room}', 'n.relieved':'{name} constipation resolved · {room}',
    'n.cheered':'{name} cheered', 'n.knocked':'{name} knocked',
    'cal.topHard':'Most constipated', 'cal.topLoose':'Most diarrhea', 'badge.hard':'Most constipated', 'badge.loose':'Most diarrhea',
    'game.newBest':'New best'
  },
  ja: {
    'mypoo.mood':'状態', 'mode.title':'状態を選択', 'mode.sub':'選択後すぐ入室',
    'mode.normalSub':'通常', 'mode.hardSub':'ゲージを満たすと排出', 'mode.looseSub':'入室時に全員へ通知',
    'room.push':'いきむ', 'room.relieved':'排出完了', 'room.relievedSub':'流せます',
    'room.urgent':'下痢', 'room.urgentSub':'全員に通知済み', 'room.rumble':'腹痛', 'tag.cheers':'応援 {n}',
    'n.urgent':'{name} 入室（下痢） · {room}', 'n.relieved':'{name} 便秘解消 · {room}',
    'n.cheered':'{name} 応援', 'n.knocked':'{name} ノック', 'game.newBest':'最高記録'
  },
  zh: {
    'mypoo.mood':'状态', 'mode.title':'选择状态', 'mode.sub':'选择后立即进入',
    'mode.normalSub':'普通', 'mode.hardSub':'填满用力值才能排出', 'mode.looseSub':'进入时通知全员',
    'room.push':'用力', 'room.relieved':'排出完成', 'room.relievedSub':'可以冲水',
    'room.urgent':'拉肚子', 'room.urgentSub':'已通知全员', 'room.rumble':'腹痛', 'tag.cheers':'加油 {n}',
    'n.urgent':'{name} 进入（拉肚子） · {room}', 'n.relieved':'{name} 便秘解除 · {room}',
    'n.cheered':'{name} 加油', 'n.knocked':'{name} 敲门', 'game.newBest':'新纪录'
  }
};
(function(){
  for(var lang in I18N_DRY){
    if(!Object.prototype.hasOwnProperty.call(I18N_DRY, lang)) continue;
    for(var k in I18N_DRY[lang]){
      if(Object.prototype.hasOwnProperty.call(I18N_DRY[lang], k)) I18N[lang][k] = I18N_DRY[lang][k];
    }
  }
})();

/* ---- v7.1 copy ---- */
var I18N_V71 = {
  ko: {
    'auth.idPh':'ID', 'auth.nickPh':'민지',
    'room.enter':'똥 싸러 들어가기', 'room.enterSub':'눌러서 입장', 'toast.pooping':'{name} 똥 중입니다.',
    'n.entered':'{name} 똥 중입니다 · {room}',
    'room.stallOf':'{name} 칸', 'room.yours':'내 칸', 'badge.you':'나',
    'tag.knocks':'노크 {n}', 'tag.cheers':'응원 {n}', 'tag.relief':'해소',
    'mypoo.door':'문', 'mypoo.prop':'소품', 'mypoo.stallLede':'친구 화면에 보이는 내 칸',
    'door.plain':'기본', 'door.wc':'WC', 'door.moon':'달', 'door.planks':'나무판', 'door.window':'창문', 'door.number':'번호판',
    'prop.none':'없음', 'prop.plant':'화분', 'prop.roll':'휴지걸이', 'prop.news':'신문', 'prop.clock':'시계', 'prop.spray':'방향제', 'prop.radio':'라디오',
    'knock.0':'{name} 화이팅', 'knock.1':'{name} 쾌변해', 'knock.2':'똥중호걸 {name}', 'knock.3':'잘 쌀 수 있어 {name}',
    'knock.4':'{name} 한 방에 가자', 'knock.5':'시원하게 가자 {name}', 'knock.6':'{name} 무사 배출 기원', 'knock.7':'끝까지 간다 {name}',
    'nt.normal':'똥 싸러 들어감', 'nt.hard':'변비로 입장', 'nt.loose':'설사로 긴급 입장', 'nt.relief':'변비 해소',
    'nt.cheer':'나를 응원', 'nt.knock':'노크', 'nt.join':'뒷간에 들어옴', 'nt.gone':'뒷간 삭제됨',
    'time.now':'방금', 'time.min':'{n}분 전', 'time.hour':'{n}시간 전', 'time.today':'오늘', 'time.yesterday':'어제',
    'admin.mono':'색 없음', 'admin.fine':'세부 조정', 'admin.colorSub':'문과 포인트에 적용', 'admin.rename':'저장',
    'room.toHard':'변비', 'room.toLoose':'설사', 'mode.hardSub':'게이지를 채워야 해소',
    'room.pushSub':'게이지 {n}/{goal}',
    'room.pushHow':'가득 차면 변비 해소 → 멤버 전원에게 알림, 상태는 쾌변으로. 친구 응원 1회 +3',
    'tab.mypoo':'똥꾸', 'mypoo.title':'똥꾸', 'settings.myPoo':'똥꾸', 'kk.poo':'내 똥', 'kk.stall':'내 칸',
    'mypoo.acc':'소품', 'mypoo.door':'문', 'mypoo.prop':'소품',
    'acc.none':'없음', 'acc.scarf':'목도리', 'acc.bowtie':'나비넥타이', 'acc.cape':'망토', 'acc.flower':'꽃', 'acc.balloon':'풍선',
    'mypoo.toilet':'변기', 'wc.basic':'기본', 'wc.bidet':'비데', 'wc.wood':'원목 시트', 'wc.squat':'화변기', 'wc.gold':'황금', 'wc.fluffy':'퍼 커버',
    'kk.save':'저장하기', 'kk.back':'뒤로가기', 'mypoo.saved':'저장됨',
    'admin.doorDesign':'뒷간 문', 'admin.doorSub':'홈과 뒷간에 보이는 문 디자인', 'admin.saveColor':'디자인 저장',
    'mode.hardSub':'힘줘야 나옴', 'room.pushSub':'{n}/{goal}', 'room.push':'힘주기', 'notify.del':'삭제', 'notify.delAll':'전체 삭제', 'rank.title':'이달의 랭킹', 'rank.titleMonth':'{m}월 랭킹', 'rank.poo':'똥쟁이', 'rank.long':'똥파이터', 'rank.hard':'변비왕', 'rank.loose':'설사왕',
    'rank.pooSub':'제일 많이 쌈', 'rank.longSub':'제일 오래 앉음', 'rank.hardSub':'변비 최다', 'rank.looseSub':'설사 최다', 'rank.none':'아직 없음', 'rank.solo':'단독 1위',
    'badge.poo':'똥쟁이', 'badge.long':'똥파이터', 'badge.hard':'변비왕', 'badge.loose':'설사왕', 'friends.badgePoo':'똥쟁이', 'friends.badgeLong':'똥파이터',
    'cal.topPoo':'똥쟁이', 'cal.topLong':'똥파이터', 'cal.topHard':'변비왕', 'cal.topLoose':'설사왕', 'friends.lede':'친구', 'toast.colorSaved':'디자인 저장됨',
    'room.holdHint':'길게 누르면 응원, 두 번 누르면 노크', 'mode.looseSub':'멤버 전원에게 경보', 'admin.doorSub':''
  },
  en: {
    'auth.idPh':'ID', 'auth.nickPh':'Minji',
    'room.enter':'Go poop', 'room.enterSub':'Tap to enter', 'toast.pooping':'{name} is pooping.',
    'n.entered':'{name} is pooping · {room}',
    'room.stallOf':"{name}'s stall", 'room.yours':'My stall', 'badge.you':'Me',
    'tag.knocks':'knock {n}', 'tag.cheers':'cheer {n}', 'tag.relief':'resolved',
    'mypoo.door':'Door', 'mypoo.prop':'Item', 'mypoo.stallLede':'Your stall as friends see it',
    'door.plain':'Plain', 'door.wc':'WC', 'door.moon':'Moon', 'door.planks':'Planks', 'door.window':'Window', 'door.number':'Number',
    'prop.none':'None', 'prop.plant':'Plant', 'prop.roll':'TP holder', 'prop.news':'Paper', 'prop.clock':'Clock', 'prop.spray':'Spray', 'prop.radio':'Radio',
    'knock.0':'Go {name}', 'knock.1':'Smooth one, {name}', 'knock.2':'{name}, legend of the stall', 'knock.3':'You got this, {name}',
    'knock.4':'One shot, {name}', 'knock.5':'Let it flow, {name}', 'knock.6':'Safe landing, {name}', 'knock.7':'All the way, {name}',
    'nt.normal':'went in', 'nt.hard':'went in constipated', 'nt.loose':'rushed in with diarrhea', 'nt.relief':'got through',
    'nt.cheer':'cheered you', 'nt.knock':'knocked', 'nt.join':'joined', 'nt.gone':'toilet deleted',
    'time.now':'just now', 'time.min':'{n} min ago', 'time.hour':'{n} h ago', 'time.today':'Today', 'time.yesterday':'Yesterday',
    'admin.mono':'None', 'admin.fine':'Fine tune', 'admin.colorSub':'Applied to doors and accents', 'admin.rename':'Save',
    'room.toHard':'Constipated', 'room.toLoose':'Diarrhea', 'mode.hardSub':'Fill the meter to get through',
    'room.pushSub':'Meter {n}/{goal}',
    'room.pushHow':'Full meter = constipation over → all members alerted, state turns smooth. Each cheer +3',
    'tab.mypoo':'Dress up', 'mypoo.title':'Dress up', 'settings.myPoo':'Dress up', 'kk.poo':'My poo', 'kk.stall':'My stall',
    'mypoo.acc':'Item', 'mypoo.door':'Door', 'mypoo.prop':'Item',
    'acc.none':'None', 'acc.scarf':'Scarf', 'acc.bowtie':'Bow tie', 'acc.cape':'Cape', 'acc.flower':'Flower', 'acc.balloon':'Balloon',
    'mypoo.toilet':'Toilet', 'wc.basic':'Basic', 'wc.bidet':'Bidet', 'wc.wood':'Wood seat', 'wc.squat':'Squat', 'wc.gold':'Gold', 'wc.fluffy':'Fluffy',
    'kk.save':'Save', 'kk.back':'Back',
    'admin.doorDesign':'Door', 'admin.doorSub':'The door shown for this toilet', 'admin.saveColor':'Save design',
    'mode.hardSub':'Needs a push', 'room.pushSub':'{n}/{goal}', 'notify.del':'Delete', 'notify.delAll':'Delete all', 'rank.title':'This month', 'rank.titleMonth':'Month {m} ranking', 'rank.poo':'Top pooper', 'rank.long':'Poo fighter', 'rank.hard':'Constipation king', 'rank.loose':'Diarrhea king',
    'rank.pooSub':'Most visits', 'rank.longSub':'Longest sit', 'rank.hardSub':'Most constipated', 'rank.looseSub':'Most diarrhea', 'rank.none':'Nobody yet', 'rank.solo':'Solo #1',
    'badge.poo':'Top pooper', 'badge.long':'Poo fighter', 'badge.hard':'Constip. king', 'badge.loose':'Diarrhea king', 'friends.lede':'Friends', 'toast.colorSaved':'Design saved', 'room.holdHint':'Hold to cheer, double-tap to knock', 'admin.doorSub':''
  },
  ja: { 'auth.idPh':'ID', 'auth.nickPh':'ミンジ', 'badge.you':'自分', 'time.today':'今日', 'time.yesterday':'昨日' },
  zh: { 'auth.idPh':'ID', 'auth.nickPh':'敏智', 'badge.you':'我', 'time.today':'今天', 'time.yesterday':'昨天' }
};
(function(){
  for(var lang in I18N_V71){
    if(!Object.prototype.hasOwnProperty.call(I18N_V71, lang)) continue;
    for(var k in I18N_V71[lang]){
      if(Object.prototype.hasOwnProperty.call(I18N_V71[lang], k)) I18N[lang][k] = I18N_V71[lang][k];
    }
  }
})();

/* ===================== helpers ===================== */
function esc(s){
  return String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
}
function t(key, vars){
  var dict = I18N[state.lang] || I18N.ko;
  var s = dict[key];
  if(s === undefined) s = I18N.ko[key];
  if(s === undefined) return key;
  if(vars){
    for(var k in vars){
      if(Object.prototype.hasOwnProperty.call(vars, k)){
        s = s.split('{' + k + '}').join(vars[k]);
      }
    }
  }
  return s;
}
function dur(sec){
  sec = Math.max(0, Math.round(sec));
  if(sec < 60) return sec + 's';
  var m = Math.floor(sec / 60), s = sec % 60;
  if(m < 60) return m + ':' + ('0' + s).slice(-2);
  return Math.floor(m / 60) + ':' + ('0' + (m % 60)).slice(-2) + ':' + ('0' + s).slice(-2);
}
function durText(sec){
  sec = Math.max(0, Math.round(sec));
  var m = Math.floor(sec / 60);
  if(m < 1) return t('cal.minShort', {n:1});
  if(m < 60) return t('cal.minShort', {n:m});
  return Math.floor(m / 60) + 'h ' + (m % 60) + 'm';
}
function hhmm(ts){
  var d = new Date(ts);
  return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
}
function vibrate(p){
  try{ if(navigator.vibrate) navigator.vibrate(p); }catch(e){}
}

/* ===================== poo character ===================== */
var SHAPES = [
  {id:'classic', top:[60,46], d:'M60 32 C46 32 38 40 42 48 C30 50 24 60 30 68 C18 71 13 84 23 93 C31 100 45 104 60 104 C75 104 89 100 97 93 C107 84 102 71 90 68 C96 60 90 50 78 48 C82 40 74 32 60 32 Z',
    detail:'M43 49 C52 53 68 53 77 49 M31 68 C44 73 76 73 89 68'},
  {id:'flat', top:[60,60], d:'M60 50 C40 50 28 58 33 66 C18 68 9 82 20 93 C29 101 45 104 60 104 C75 104 91 101 100 93 C111 82 102 68 87 66 C92 58 80 50 60 50 Z',
    detail:'M34 68 C46 73 74 73 86 68'},
  {id:'tall', top:[60,34], d:'M60 20 C51 20 46 27 49 33 C40 35 35 44 40 51 C31 54 27 63 33 70 C23 74 20 87 29 94 C36 100 47 103 60 103 C73 103 84 100 91 94 C100 87 97 74 87 70 C93 63 89 54 80 51 C85 44 80 35 71 33 C74 27 69 20 60 20 Z',
    detail:'M40 51 C48 55 72 55 80 51 M33 70 C44 75 76 75 87 70'},
  {id:'round', top:[60,46], d:'M60 36 C40 36 26 50 26 66 C26 89 41 104 60 104 C79 104 94 89 94 66 C94 50 80 36 60 36 Z',
    detail:'M40 58 C48 64 72 64 80 58'},
  {id:'tip', top:[60,36], d:'M60 17 C53 23 51 30 57 33 C42 35 33 46 38 54 C25 58 20 69 27 77 C16 82 13 95 23 100 C32 105 46 107 60 107 C74 107 88 105 97 100 C107 95 104 82 93 77 C100 69 95 58 82 54 C87 46 78 35 63 33 C69 30 67 23 60 17 Z',
    detail:'M38 55 C48 59 72 59 82 55 M27 77 C40 82 80 82 93 77'},
  {id:'twins', top:[72,64], d:['M36 70 C26 70 19 78 19 88 C19 98 27 105 37 105 C47 105 53 97 53 88 C53 78 46 70 36 70 Z',
      'M72 52 C58 52 48 62 48 77 C48 92 58 105 72 105 C86 105 96 92 96 77 C96 62 86 52 72 52 Z']}
];
var THICKS = [0.80, 1.0, 1.16, 1.34];
var HATS = [
  {id:'none', name:'hat.none', d:''},
  {id:'crown', name:'hat.crown',
    d:'M-23 2 L-26 -13 L-10 -5 L0 -18 L10 -5 L26 -13 L23 2 Z',
    extra:'<circle cx="-26" cy="-15" r="2.4" fill="currentColor"/><circle cx="0" cy="-20" r="2.4" fill="currentColor"/><circle cx="26" cy="-15" r="2.4" fill="currentColor"/>'},
  {id:'beanie', name:'hat.beanie',
    d:'M-24 1 C-24 -11 -13 -19 0 -19 C13 -19 24 -11 24 1 Z',
    extra:'<rect x="-26" y="-2" width="52" height="10" rx="5" fill="var(--card)"/><path d="M-26 0.5 L26 0.5" opacity=".3"/><circle cx="0" cy="-20" r="3.6"/>'},
  {id:'cap', name:'hat.cap',
    d:'M-23 1 C-23 -11 -12 -18 0 -18 C12 -18 23 -11 23 1 Z',
    extra:'<path d="M14 -1 C28 -3 36 2 33 6 C28 9 18 6 13 2 Z" fill="var(--card)"/><circle cx="0" cy="-18" r="2.4" fill="currentColor" stroke="none"/>'},
  {id:'beret', name:'hat.beret',
    d:'M-26 -2 C-28 -15 -13 -22 2 -21 C17 -20 26 -10 24 -3 C13 4 -13 4 -26 -2 Z',
    extra:'<path d="M4 -21 C4 -25 6 -26 8 -25"/>'},
  {id:'tp', name:'hat.tp',
    d:'M-14 -14 L-14 1 C-14 6 14 6 14 1 L14 -14 C14 -20 -14 -20 -14 -14 Z',
    extra:'<path d="M-14 -14 C-14 -9 14 -9 14 -14"/><circle cx="0" cy="-14" r="3.8"/><path d="M12 1 C20 4 17 12 8 10"/>'},
  {id:'bow', name:'hat.bow', isNew:true,
    d:'M-4 -2 L-20 -12 L-20 4 L-4 -2 Z M4 -2 L20 -12 L20 4 L4 -2 Z',
    extra:'<circle cx="0" cy="-3" r="3.8"/>'},
  {id:'flower', name:'hat.flower', isNew:true,
    d:'',
    extra:'<g fill="currentColor" stroke="none"><circle cx="-17" cy="-2" r="2.7"/><circle cx="-15" cy="-7" r="2.7"/><circle cx="-9" cy="-4" r="2.7"/><circle cx="-4" cy="-10" r="2.7"/><circle cx="2" cy="-7" r="2.7"/><circle cx="8" cy="-11" r="2.7"/><circle cx="13" cy="-5" r="2.7"/><circle cx="18" cy="-1" r="2.7"/></g><path d="M-19 1 C-9 -6 9 -8 20 0"/>'},
  {id:'wizard', name:'hat.wizard', isNew:true,
    d:'M-20 2 L1 -28 L21 2 Z',
    extra:'<path d="M-26 2 Q1 7 27 2"/><path d="M-4 -9 l2.5 -2.5 M5 -17 l2.5 -2.5"/>'},
  {id:'phones', name:'hat.phones', isNew:true, noFill:true,
    d:'M-23 2 C-25 -12 -13 -20 0 -20 C13 -20 25 -12 23 2',
    extra:'<rect x="-29" y="-4" width="9" height="13" rx="4.5" fill="currentColor" stroke="none"/><rect x="20" y="-4" width="9" height="13" rx="4.5" fill="currentColor" stroke="none"/>'},
  {id:'cone', name:'hat.cone', isNew:true,
    d:'M-18 2 L2 -28 L18 2 Z',
    extra:'<path d="M-24 2 Q2 7 24 2"/><circle cx="2" cy="-30" r="3.2"/><path d="M-8 -9 L11 -13"/>'}
];

function shapeById(id){
  for(var i=0;i<SHAPES.length;i++){ if(SHAPES[i].id === id) return SHAPES[i]; }
  return SHAPES[0];
}
function hatById(id){
  for(var i=0;i<HATS.length;i++){ if(HATS[i].id === id) return HATS[i]; }
  return HATS[0];
}
function hatName(id){
  var h = hatById(id);
  return h.id === 'none' ? t('mypoo.none') : t(h.name);
}
/* older builds saved the list index instead of the shape id: map it back */
function normShape(v){
  var s = String(v == null ? '' : v);
  if(/^\d+$/.test(s)){
    var i = parseInt(s, 10);
    if(SHAPES[i]) return SHAPES[i].id;
  }
  return shapeById(s).id;
}
function normThick(v){
  var n = parseInt(v, 10);
  if(isNaN(n) || n < 0 || n > THICKS.length - 1) return 1;
  return n;
}

/* ===================== poo renderer (v7.1: clean bold line) =====================
   One solid black outline, the layer lines in the same ink, no hatching, no face.
   The state shows only through marks around the body. The viewBox is wide enough
   for the thickest body plus its marks, so nothing spills out of its card. */
var _meas = null, _sampleCache = {}, _pooCache = {}, _pooCacheN = 0;
var PVB = {x:-26, y:-4, w:172, h:126};     /* poo viewBox */
function measurer(){
  if(_meas) return _meas;
  var ns = 'http://www.w3.org/2000/svg';
  var svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('width', '0'); svg.setAttribute('height', '0');
  svg.setAttribute('aria-hidden', 'true');
  svg.style.cssText = 'position:absolute;left:-9999px;top:0;width:0;height:0';
  var p = document.createElementNS(ns, 'path');
  svg.appendChild(p);
  document.body.appendChild(svg);
  _meas = p;
  return p;
}
function splitSub(d){
  return String(d).split(/(?=M)/).map(function(s){ return s.trim(); }).filter(Boolean);
}
function samplePath(d, step){
  var key = d + '|' + step;
  if(_sampleCache[key]) return _sampleCache[key];
  var p = measurer();
  p.setAttribute('d', d);
  var L = 0;
  try{ L = p.getTotalLength(); }catch(e){ L = 0; }
  var n = Math.max(10, Math.round(L / step)), pts = [];
  for(var i=0;i<=n;i++){
    var q = p.getPointAtLength(L * i / n);
    pts.push([q.x, q.y]);
  }
  _sampleCache[key] = pts;
  return pts;
}
function f1(v){ return Math.round(v * 10) / 10; }
function smoothD(pts, close){
  if(!pts.length) return '';
  var d = 'M' + f1(pts[0][0]) + ' ' + f1(pts[0][1]);
  for(var i=1;i<pts.length - 1;i++){
    var a = pts[i], b = pts[i + 1];
    d += ' Q' + f1(a[0]) + ' ' + f1(a[1]) + ' ' + f1((a[0] + b[0]) / 2) + ' ' + f1((a[1] + b[1]) / 2);
  }
  var last = pts[pts.length - 1];
  d += ' L' + f1(last[0]) + ' ' + f1(last[1]);
  return close ? d + ' Z' : d;
}
/* the original path, stretched sideways by the thickness (the stroke keeps its width) */
function scaledD(d, sx, close){
  return splitSub(d).map(function(sub){
    var pts = samplePath(sub, 2.6).map(function(p){ return [60 + (p[0] - 60) * (sx || 1), p[1]]; });
    return smoothD(pts, close);
  }).join(' ');
}
function fnvHex(s){
  var h = 2166136261;
  for(var i=0;i<s.length;i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0).toString(36);
}
function hashSeed(s){
  s = String(s || 'x');
  var h = 2166136261;
  for(var i=0;i<s.length;i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0) % 997 + 1;
}
function dropD(x, y, s){
  return 'M' + f1(x) + ' ' + f1(y) + ' C' + f1(x - 3.2 * s) + ' ' + f1(y + 4.6 * s) + ' ' + f1(x - 3.6 * s) + ' ' + f1(y + 8 * s) + ' ' + f1(x) + ' ' + f1(y + 8.4 * s)
    + ' C' + f1(x + 3.6 * s) + ' ' + f1(y + 8 * s) + ' ' + f1(x + 3.2 * s) + ' ' + f1(y + 4.6 * s) + ' ' + f1(x) + ' ' + f1(y) + ' Z';
}
var HALF_W = {classic:47, flat:51, tall:40, round:34, tip:47, twins:41};
/* state marks: 변비 = sweat + strain arcs, 설사 = drips + speed lines + puddle line */
/* ===================== v7.2 art =====================
   poo: one quiet outline + two short inner strokes that stop before the edge,
   so it reads as a drawing, not stacked shapes.
   items (hats, accessories, doors, stall things): pen line + flat colour. */
var PAL = {red:'#E9705F', yellow:'#F4C64E', blue:'#6E9ED6', pink:'#F3A9BB', green:'#7DBE8C', purple:'#A88AD8',
  brown:'#B98458', cream:'#FFF8EA', white:'#FFFFFF', sky:'#CFE4F4', grey:'#C9C9C9', brass:'#E6C062', terra:'#D9825B'};
var NECK = {classic:[60, 68, 41], flat:[60, 79, 47], tall:[60, 70, 37], round:[60, 72, 34], tip:[60, 77, 43], twins:[72, 77, 24]};

/* inner tier lines: keep a middle stretch only, alternating which side they lean to */
var HAT_ART = {
  crown: function(){
    return '<path d="M-22 3 L-25.4 -13 L-12.4 -5 L-.8 -19.4 L10.6 -5.2 L24.6 -14 L21.4 3.2 C9 5.6 -9.6 5.4 -22 3 Z" fill="' + PAL.yellow + '"/>'
      + '<path d="M-21.4 -1.4 C-8 1 8 1 21.6 -1.6" stroke-width="1.4"/>'
      + '<circle cx="-25.4" cy="-14.6" r="2.8" fill="' + PAL.red + '"/><circle cx="-.8" cy="-21" r="2.8" fill="' + PAL.blue + '"/><circle cx="24.6" cy="-15.6" r="2.8" fill="' + PAL.green + '"/>';
  },
  beanie: function(){
    return '<path d="M-22.6 0 C-23.4 -12 -12.4 -19.6 .6 -19.8 C13 -20 22.8 -12.4 22.8 0 Z" fill="' + PAL.red + '"/>'
      + '<path d="M-24.6 -2.6 C-8 -5.4 9 -5.6 24.8 -2.4 L24.4 4.6 C8.6 2.2 -8.6 2.4 -24.4 4.8 Z" fill="' + PAL.cream + '"/>'
      + '<path d="M-15 -3.2 L-15.2 3.4 M-5.2 -4 L-5.2 2.8 M4.8 -4 L4.8 2.8 M14.6 -3.4 L14.8 3.2" stroke-width="1.2" opacity=".6"/>'
      + '<path d="M.8 -26.6 C4.4 -26.6 5.8 -24.2 5.6 -22 C5.4 -19.6 3.2 -18 .6 -18.2 C-2.2 -18.4 -4 -20.4 -3.8 -22.6 C-3.6 -24.8 -1.8 -26.6 .8 -26.6 Z" fill="' + PAL.cream + '"/>';
  },
  cap: function(){
    return '<path d="M-21.6 1.4 C-22 -11 -11.4 -18.2 .8 -18.4 C12.4 -18.6 21.8 -11 21.8 1.4 Z" fill="' + PAL.blue + '"/>'
      + '<path d="M11.4 -.6 C22.6 -3.8 33.4 -.4 32.2 4.6 C27 8 17.2 6 10.6 2.8 Z" fill="#4E7EBE"/>'
      + '<path d="M.8 -18.4 C-1.4 -11 -2.2 -5 -1.6 1.2" stroke-width="1.3"/>'
      + '<circle cx=".8" cy="-18.8" r="2.2" fill="var(--ink)" stroke="none"/>';
  },
  beret: function(){
    return '<path d="M-25.6 -.8 C-27.6 -13.6 -12 -21.6 3 -21 C17.8 -20.4 27 -10.4 24.2 -2.2 C13.2 3.8 -13.6 4 -25.6 -.8 Z" fill="' + PAL.purple + '"/>'
      + '<path d="M3.6 -21 C3.4 -24.6 5.6 -26 8 -25"/>';
  },
  tp: function(){
    return '<path d="M-13 -14 L-13 1 C-13 6 13 6 13 1 L13 -14" fill="' + PAL.white + '"/>'
      + '<path d="M-13 -14 C-13 -19.6 13 -19.6 13 -14 C13 -9 -13 -9 -13 -14 Z" fill="' + PAL.white + '"/>'
      + '<path d="M0 -16.2 C2.6 -16.2 3.6 -15.2 3.6 -14 C3.6 -12.8 2.6 -11.8 0 -11.8 C-2.6 -11.8 -3.6 -12.8 -3.6 -14 C-3.6 -15.2 -2.6 -16.2 0 -16.2 Z" fill="' + PAL.grey + '"/>'
      + '<path d="M12 .8 C19 3.6 18 11.6 9.6 10.6 L10.4 3.6" fill="' + PAL.white + '"/>';
  },
  bow: function(){
    return '<path d="M-2 -3 C-9 -14 -21.6 -12.6 -20.4 -3.4 C-19.4 4.4 -9 3.4 -2 -3 Z" fill="' + PAL.pink + '"/>'
      + '<path d="M2 -3 C9 -14 21.6 -12.6 20.4 -3.4 C19.4 4.4 9 3.4 2 -3 Z" fill="' + PAL.pink + '"/>'
      + '<path d="M0 -7 C2.8 -7 3.8 -5 3.6 -3 C3.4 -1 2 .4 0 .2 C-2 0 -3.6 -1.4 -3.6 -3.2 C-3.6 -5.2 -2.4 -7 0 -7 Z" fill="#E68AA2"/>';
  },
  flower: function(){
    var f = function(x, y, c){
      var o = '';
      for(var k=0;k<5;k++){ var a = k / 5 * 6.283 - 1.57; o += '<circle cx="' + (x + Math.cos(a) * 3).toFixed(1) + '" cy="' + (y + Math.sin(a) * 3).toFixed(1) + '" r="2.4" fill="' + c + '" stroke-width="1"/>'; }
      return o + '<circle cx="' + x + '" cy="' + y + '" r="1.5" fill="' + PAL.yellow + '" stroke-width="1"/>';
    };
    return '<path d="M-21 1.4 C-9 -6 9 -7.4 21 .4" stroke="' + PAL.green + '" stroke-width="2.6"/>'
      + f(-15.6, -2.4, PAL.pink) + f(-5, -6.8, PAL.white) + f(6, -7.4, PAL.sky) + f(16, -2.6, PAL.pink);
  },
  wizard: function(){
    return '<path d="M-20 2 C-11 -8 -3 -18 1.6 -30.4 C6 -18 12 -8 21 2 Z" fill="#6F7BD0"/>'
      + '<path d="M-27 2.4 C-9 7.4 10 7.6 28 2.2" stroke-width="2.2"/>'
      + '<path d="M1.6 -16.4 L3 -13.2 L6.4 -13 L3.8 -10.8 L4.6 -7.4 L1.6 -9.2 L-1.4 -7.4 L-.6 -10.8 L-3.2 -13 L.2 -13.2 Z" fill="' + PAL.yellow + '" stroke-width="1"/>';
  },
  phones: function(){
    return '<path d="M-23 3 C-25.4 -12.6 -13 -21.2 .2 -21.2 C13.4 -21.2 25.2 -12.6 23 3" stroke-width="3"/>'
      + '<path d="M-29.6 -5.4 C-29.6 -7.6 -28 -8.6 -25.8 -8.4 C-23 -8.2 -21.4 -6.6 -21.4 -3.6 L-21.4 4.6 C-21.4 7.4 -23 8.8 -25.6 8.6 C-28 8.4 -29.6 7.2 -29.6 5 Z" fill="' + PAL.red + '"/>'
      + '<path d="M29.8 -5.4 C29.8 -7.6 28.2 -8.6 26 -8.4 C23.2 -8.2 21.6 -6.6 21.6 -3.6 L21.6 4.6 C21.6 7.4 23.2 8.8 25.8 8.6 C28.2 8.4 29.8 7.2 29.8 5 Z" fill="' + PAL.red + '"/>';
  },
  cone: function(){
    return '<path d="M-17.4 2.2 L1.8 -28 L18.4 2 C7 5.6 -6.4 5.8 -17.4 2.2 Z" fill="' + PAL.yellow + '"/>'
      + '<path d="M-9.6 -9.8 C-3 -11.6 4 -12 10 -10.6 M-4.4 -18.6 C-.6 -19.6 2.8 -19.6 5.6 -18.8" stroke="' + PAL.pink + '" stroke-width="3.2"/>'
      + '<path d="M1.8 -33.6 C4.4 -33.6 5.4 -31.8 5.2 -30 C5 -28.2 3.4 -27 1.6 -27.2 C-.4 -27.4 -1.6 -28.8 -1.6 -30.4 C-1.6 -32.2 -.2 -33.6 1.8 -33.6 Z" fill="' + PAL.red + '"/>';
  }
};

/* accessories: worn on / held by the body */
var ACCS = ['none', 'scarf', 'bowtie', 'cape', 'flower', 'balloon'];
function accBehind(acc, sh, sx){
  if(acc !== 'cape') return '';
  var n = NECK[sh.id] || NECK.classic, x = n[0] + (n[0] - 60) * (sx - 1), y = n[1], hw = n[2] * sx;
  return '<path d="M' + f1(x - hw) + ' ' + y + ' C' + f1(x - hw - 16) + ' ' + (y + 26) + ' ' + f1(x - hw - 14) + ' ' + (y + 46) + ' ' + f1(x - hw - 7) + ' 104 L' + f1(x + hw + 7) + ' 104.4 C' + f1(x + hw + 14) + ' ' + (y + 46) + ' ' + f1(x + hw + 16) + ' ' + (y + 26) + ' ' + f1(x + hw) + ' ' + y + ' Z" fill="' + PAL.red + '"/>';
}
function accFront(acc, sh, sx){
  var n = NECK[sh.id] || NECK.classic, x = n[0] + (n[0] - 60) * (sx - 1), y = n[1], hw = n[2] * sx;
  var R = 60 + (HALF_W[sh.id] || 47) * sx;
  if(acc === 'scarf'){
    return '<path d="M' + f1(x - hw - 1) + ' ' + f1(y - 3) + ' C' + f1(x - hw * .4) + ' ' + f1(y + 2.4) + ' ' + f1(x + hw * .4) + ' ' + f1(y + 2.4) + ' ' + f1(x + hw + 1) + ' ' + f1(y - 3)
      + ' L' + f1(x + hw + 1.6) + ' ' + f1(y + 4.4) + ' C' + f1(x + hw * .4) + ' ' + f1(y + 10) + ' ' + f1(x - hw * .4) + ' ' + f1(y + 10) + ' ' + f1(x - hw - 1.6) + ' ' + f1(y + 4.4) + ' Z" fill="' + PAL.red + '"/>'
      + '<path d="M' + f1(x + hw * .35) + ' ' + f1(y + 6) + ' L' + f1(x + hw * .62) + ' ' + f1(y + 23) + ' L' + f1(x + hw * .3) + ' ' + f1(y + 24) + ' L' + f1(x + hw * .12) + ' ' + f1(y + 7.6) + ' Z" fill="' + PAL.red + '"/>'
      + '<path d="M' + f1(x - hw * .6) + ' ' + f1(y + 1.4) + ' L' + f1(x - hw * .6) + ' ' + f1(y + 7.4) + ' M' + f1(x - hw * .1) + ' ' + f1(y + 2.4) + ' L' + f1(x - hw * .1) + ' ' + f1(y + 8.2) + ' M' + f1(x + hw * .5) + ' ' + f1(y + 13) + ' L' + f1(x + hw * .4) + ' ' + f1(y + 13.6) + '" stroke="' + PAL.cream + '" stroke-width="2"/>';
  }
  if(acc === 'bowtie'){
    var by = y + 6;
    return '<path d="M' + f1(x) + ' ' + f1(by) + ' L' + f1(x - 10) + ' ' + f1(by - 6.4) + ' C' + f1(x - 11.6) + ' ' + f1(by - 2) + ' ' + f1(x - 11.6) + ' ' + f1(by + 2) + ' ' + f1(x - 10) + ' ' + f1(by + 6.4) + ' Z" fill="' + PAL.blue + '"/>'
      + '<path d="M' + f1(x) + ' ' + f1(by) + ' L' + f1(x + 10) + ' ' + f1(by - 6.4) + ' C' + f1(x + 11.6) + ' ' + f1(by - 2) + ' ' + f1(x + 11.6) + ' ' + f1(by + 2) + ' ' + f1(x + 10) + ' ' + f1(by + 6.4) + ' Z" fill="' + PAL.blue + '"/>'
      + '<circle cx="' + f1(x) + '" cy="' + f1(by) + '" r="2.8" fill="#4E7EBE"/>';
  }
  if(acc === 'cape'){
    return '<path d="M' + f1(x - hw - 1) + ' ' + f1(y - 1.6) + ' C' + f1(x - hw * .3) + ' ' + f1(y + 4) + ' ' + f1(x + hw * .3) + ' ' + f1(y + 4) + ' ' + f1(x + hw + 1) + ' ' + f1(y - 1.6) + '" stroke-width="2.4"/>'
      + '<circle cx="' + f1(x) + '" cy="' + f1(y + 3) + '" r="2.6" fill="' + PAL.yellow + '"/>';
  }
  if(acc === 'flower'){
    var fx = R + 12, fy = 54, o = '';
    for(var k=0;k<5;k++){ var a = k / 5 * 6.283 - 1.57; o += '<circle cx="' + f1(fx + Math.cos(a) * 4) + '" cy="' + f1(fy + Math.sin(a) * 4) + '" r="3.4" fill="' + PAL.pink + '" stroke-width="1.3"/>'; }
    return '<path d="M' + f1(R - 3) + ' 82 C' + f1(R + 6) + ' 76 ' + f1(R + 10) + ' 66 ' + f1(fx) + ' ' + (fy + 4) + '" stroke="' + PAL.green + '" stroke-width="2.4"/>'
      + '<path d="M' + f1(R + 6) + ' 72 C' + f1(R + 12) + ' 70 ' + f1(R + 15) + ' 72 ' + f1(R + 16) + ' 75 C' + f1(R + 11) + ' 76 ' + f1(R + 8) + ' 75 ' + f1(R + 6) + ' 72 Z" fill="' + PAL.green + '" stroke-width="1.3"/>'
      + o + '<circle cx="' + f1(fx) + '" cy="' + fy + '" r="2.2" fill="' + PAL.yellow + '" stroke-width="1.3"/>';
  }
  if(acc === 'balloon'){
    var bx = R + 12, byy = 22;
    return '<path d="M' + f1(R - 2) + ' 80 C' + f1(R + 8) + ' 70 ' + f1(R + 2) + ' 52 ' + f1(R + 10) + ' 42 C' + f1(R + 13) + ' 38 ' + f1(bx) + ' 36 ' + f1(bx) + ' 33.6" stroke-width="1.4"/>'
      + '<path d="M' + f1(bx) + ' 8.6 C' + f1(bx + 8) + ' 8.6 ' + f1(bx + 10) + ' 15.6 ' + f1(bx + 9.6) + ' 21 C' + f1(bx + 9) + ' 28 ' + f1(bx + 4) + ' 33 ' + f1(bx) + ' 33 C' + f1(bx - 4) + ' 33 ' + f1(bx - 9.4) + ' 28 ' + f1(bx - 9.8) + ' 21 C' + f1(bx - 10) + ' 15 ' + f1(bx - 8) + ' 8.6 ' + f1(bx) + ' 8.6 Z" fill="' + PAL.red + '"/>'
      + '<path d="M' + f1(bx - 5) + ' 14 C' + f1(bx - 6) + ' 16 ' + f1(bx - 6.4) + ' 18 ' + f1(bx - 6.2) + ' 20" stroke="' + PAL.white + '" stroke-width="2"/>'
      + '<path d="M' + f1(bx - 2) + ' 35.4 L' + f1(bx) + ' 32.6 L' + f1(bx + 2) + ' 35.4 Z" fill="' + PAL.red + '" stroke-width="1.2"/>';
  }
  return '';
}

/* state marks around the body */
function auraSVG(sh, sx, mood, sw, opt){
  var out = '', w = (sw * .85).toFixed(2);
  var edge = (HALF_W[sh.id] || 47) * sx;
  var L = 60 - edge, R = 60 + edge;
  var g = '<g fill="none" stroke="var(--ink)" stroke-width="' + w + '" stroke-linecap="round" stroke-linejoin="round">';
  if(mood === 'hard'){
    out += g
      + '<path d="M' + f1(L - 7) + ' 76 q-4 6 0 12 M' + f1(L - 13) + ' 73 q-5 9 0 18"/>'
      + '<path d="M' + f1(R + 7) + ' 76 q4 6 0 12 M' + f1(R + 13) + ' 73 q5 9 0 18"/>'
      + '</g>'
      + '<g fill="' + PAL.sky + '" stroke="var(--ink)" stroke-width="' + w + '" stroke-linejoin="round">'
      + '<path d="' + dropD(R + 3, sh.top[1] + 6, 1.05) + '"/>'
      + '<path d="' + dropD(L - 3, sh.top[1] + 18, .85) + '"/>'
      + '</g>';
  } else if(mood === 'loose'){
    out += g
      + '<path d="M' + f1(L - 6) + ' 70 L' + f1(L - 15) + ' 70 M' + f1(L - 4) + ' 81 L' + f1(L - 19) + ' 81 M' + f1(L - 6) + ' 92 L' + f1(L - 14) + ' 92"/>'
      + '<path d="M' + f1(R + 6) + ' 66 L' + f1(R + 15) + ' 66 M' + f1(R + 4) + ' 78 L' + f1(R + 19) + ' 78"/>'
      + (opt.noPuddle ? '' : '<path d="M' + f1(60 - edge * .8) + ' 112 C' + f1(60 - edge * .4) + ' 116 ' + f1(60 + edge * .4) + ' 116 ' + f1(60 + edge * .8) + ' 112"/>')
      + '</g>'
      + '<g fill="' + PAL.brown + '" stroke="var(--ink)" stroke-width="' + w + '" stroke-linejoin="round">'
      + '<path d="' + dropD(60 - edge * .4, 101, 1.1) + '"/>'
      + '<path d="' + dropD(60 + edge * .45, 102, .8) + '"/>'
      + '</g>';
  }
  if(opt.stink){
    out += '<g fill="none" stroke="var(--ink)" stroke-width="' + w + '" stroke-linecap="round" opacity=".4">'
      + '<path d="M' + f1(L + 4) + ' 40 c-4 -4 4 -7 0 -11 c-4 -4 4 -7 0 -11"/>'
      + '<path d="M' + f1(R - 4) + ' 36 c4 -4 -4 -7 0 -11 c4 -4 -4 -7 0 -11"/>'
      + '</g>';
  }
  return out;
}

/* pooSVG(cfg, size, {mood, stink, noHat, noAcc, noPuddle}) — size = rendered height in px */
function pooSVG(cfg, size, opt){
  opt = opt || {};
  size = size || 60;
  cfg = cfg || {};
  var mood = opt.mood || 'normal';
  var acc = opt.noAcc ? 'none' : (cfg.acc || 'none');
  var key = [cfg.shape, cfg.thick, cfg.hat, acc, size, mood, opt.stink ? 1 : 0, opt.noHat ? 1 : 0, opt.noPuddle ? 1 : 0].join('|');
  if(_pooCache[key]) return _pooCache[key];
  var sh = shapeById(cfg.shape);
  var sx = THICKS[cfg.thick] || 1;
  /* about 2.2px on screen at any size */
  var sw = 2.2;   /* viewBox units: the line scales with the picture */
  var ds = Object.prototype.toString.call(sh.d) === '[object Array]' ? sh.d : [sh.d];
  var wpx = Math.round(size * PVB.w / PVB.h);
  var line = 'stroke="var(--ink)" stroke-linejoin="round" stroke-linecap="round"';
  var out = '<svg class="poo-svg' + (mood !== 'normal' ? ' m-' + mood : '') + '" viewBox="' + PVB.x + ' ' + PVB.y + ' ' + PVB.w + ' ' + PVB.h + '" width="' + wpx + '" height="' + size + '" aria-hidden="true">';
  if(acc !== 'none') out += '<g ' + line + ' stroke-width="' + (sw * .9).toFixed(2) + '">' + accBehind(acc, sh, sx) + '</g>';
  out += '<g class="pbody" fill="var(--poo)" ' + line + ' stroke-width="' + sw.toFixed(2) + '">';
  for(var i=0;i<ds.length;i++) out += '<path d="' + scaledD(ds[i], sx, true) + '"/>';
  if(sh.detail) out += '<path d="' + innerD(sh.detail, sx) + '" fill="none" stroke-width="' + (sw * .8).toFixed(2) + '"/>';
  out += '</g>';
  out += auraSVG(sh, sx, mood, sw, opt);
  if(acc !== 'none') out += '<g fill="none" ' + line + ' stroke-width="' + (sw * .9).toFixed(2) + '">' + accFront(acc, sh, sx) + '</g>';
  if(!opt.noHat && cfg.hat && cfg.hat !== 'none' && HAT_ART[cfg.hat]){
    out += '<g class="hat" transform="translate(' + sh.top[0] + ' ' + sh.top[1] + ')" fill="none" ' + line + ' stroke-width="' + (sw * .9).toFixed(2) + '">' + HAT_ART[cfg.hat]() + '</g>';
  }
  out += '</svg>';
  if(_pooCacheN > 400){ _pooCache = {}; _pooCacheN = 0; }
  _pooCache[key] = out; _pooCacheN++;
  return out;
}

/* door: rounded top, inset panels, brass knob, floor line; colour from the toilet (--door) */
function iconDoor(busy, deco, num){
  var style = (deco && DOORS.indexOf(deco) >= 0) ? deco : 'plain';
  var o = '<svg class="door-svg" viewBox="0 0 44 60" width="44" height="60" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="M7.4 8.6 C7.4 6 8.8 4.6 11.4 4.6 L32.6 4.2 C35.2 4.2 36.6 5.6 36.6 8.2 L37.4 55.2 L6.6 55.6 Z" fill="' + (style === 'planks' ? '#E7CFAE' : 'var(--door, #fff)') + '"/>';
  if(style === 'planks'){
    o += '<path d="M15.6 5 L15.4 55.4 M22.4 4.8 L22.3 55.4 M29.2 4.6 L29.4 55.3" stroke-width="1.2" opacity=".55"/>'
      + '<path d="M8 16.4 L36.6 16 M7.6 44.2 L37.2 43.8" stroke-width="1.6"/>';
  } else {
    o += '<path d="M12.6 10.6 L31.4 10.4 L31.6 26 L12.8 26.2 Z M12.8 31.8 L31.8 31.6 L32 50 L13 50.2 Z" stroke-width="1.2" opacity=".35"/>';
  }
  if(style === 'wc'){
    o += '<path d="M13.6 12.4 L30.6 12.2 L30.8 21.6 L13.8 21.8 Z" fill="' + PAL.white + '" stroke-width="1.5"/>'
      + '<text x="22.2" y="19.6" text-anchor="middle" font-size="7.2" font-family="Gochi Hand, Gmarket Sans, sans-serif" fill="' + PAL.blue + '" stroke="none">WC</text>';
  } else if(style === 'moon'){
    o += '<path d="M25.2 11 C19.8 11.6 18.8 19.6 23.4 22.2 C19.2 22.6 16.4 19.6 16.8 16.2 C17.2 12.8 20.8 10.2 25.2 11 Z" fill="' + PAL.yellow + '" stroke-width="1.4"/>';
  } else if(style === 'window'){
    o += '<path d="M14 11.6 L30.2 11.4 L30.4 23.6 L14.2 23.8 Z" fill="' + PAL.sky + '" stroke-width="1.5"/>'
      + '<path d="M22.2 11.6 L22.3 23.6 M14.2 17.6 L30.3 17.4" stroke-width="1.2"/>'
      + '<path d="M16.4 14 L18.4 13.9" stroke="' + PAL.white + '" stroke-width="1.6"/>';
  } else if(style === 'number'){
    o += '<path d="M22 11.2 C26.2 11.2 28 13.6 27.8 16.2 C27.6 18.8 25.4 20.8 22 20.8 C18.4 20.8 16.2 18.6 16.4 16 C16.6 13.2 18.6 11.2 22 11.2 Z" fill="' + PAL.brass + '" stroke-width="1.5"/>'
      + '<text x="22.1" y="18.8" text-anchor="middle" font-size="7.6" font-family="Gochi Hand, Gmarket Sans, sans-serif" fill="var(--ink)" stroke="none">' + ((num || 0) + 1) + '</text>';
  }
  o += '<path d="M7.4 14.2 L5.6 14.2 M7.2 44.4 L5.4 44.4" stroke-width="1.6"/>'
    + '<path d="M31.4 29.6 C33 29.6 33.6 30.6 33.5 31.6 C33.4 32.6 32.6 33.3 31.5 33.2 C30.4 33.1 29.8 32.3 29.9 31.3 C30 30.3 30.6 29.6 31.4 29.6 Z" fill="' + PAL.brass + '" stroke-width="1.4"/>'
    + '<path d="M3 56.6 C13 57.4 30 57.4 41 56.2" stroke-width="1.6"/>'
    + '</svg>';
  return o;
}
function iconProp(kind){
  var a = '<svg class="prop-svg" viewBox="0 0 28 28" width="24" height="24" fill="none" stroke="var(--ink)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
  var z = '</svg>';
  if(kind === 'plant') return a + '<path d="M13.6 17 C13.6 12.8 13.2 9.4 10.8 6 M13.8 13 C15.4 9.6 18.2 8.4 21.4 8.8 C20.6 12 17.8 13.4 14 13.2 Z" fill="' + PAL.green + '"/><path d="M13 10.6 C10.6 9.8 7.8 10.6 6.6 12.8 C8.8 14 11.4 13.6 13.2 12 Z" fill="' + PAL.green + '"/><path d="M7.8 17.2 L20.2 17 L18.6 25.6 L9.4 25.8 Z" fill="' + PAL.terra + '"/><path d="M7.4 17.2 L20.6 17 L20.4 19.6 L7.6 19.8 Z" fill="' + PAL.terra + '"/>' + z;
  if(kind === 'roll') return a + '<path d="M3.6 5.2 L3.6 11 M3.4 8.1 L9.4 8"/><path d="M15.4 8.2 L15.6 22 L13.2 20.6 L10.8 22.2 L10 11.8" fill="' + PAL.white + '"/><path d="M10 4.6 C14 4.6 15.4 6.4 15.4 8.2 C15.4 10 14 11.8 10 11.8 C6.2 11.8 4.8 10 4.8 8.2 C4.8 6.4 6.2 4.6 10 4.6 Z" fill="' + PAL.white + '"/><circle cx="10" cy="8.2" r="1.4" fill="' + PAL.grey + '"/>' + z;
  if(kind === 'news') return a + '<path d="M4.6 7.4 L20.4 6.4 L21.8 22 L6 23.2 Z" fill="' + PAL.cream + '"/><path d="M8 10.4 L14.4 10" stroke-width="2.4"/><path d="M8.2 13.6 L18 13 M8.4 16.6 L18.2 16 M8.6 19.4 L15.4 19" stroke-width="1.2"/><path d="M20.4 6.4 L23.8 9.6 L21.6 10" fill="' + PAL.cream + '"/>' + z;
  if(kind === 'clock') return a + '<path d="M14 3.8 C20 3.8 24 8 24 14 C24 20 20 24 14 24 C8 24 4 20 4 14 C4 8 8 3.8 14 3.8 Z" fill="' + PAL.yellow + '"/><path d="M14 6.8 C18.4 6.8 21 9.6 21 14 C21 18.4 18.4 21 14 21 C9.6 21 7 18.4 7 14 C7 9.6 9.6 6.8 14 6.8 Z" fill="' + PAL.white + '" stroke-width="1.2"/><path d="M14 9.6 L14 14.2 L17.2 16"/>' + z;
  if(kind === 'spray') return a + '<path d="M9.4 11 L18.6 10.8 L19 25.2 L9 25.4 Z" fill="' + PAL.pink + '"/><path d="M11.4 10.8 L11.4 7 L16.6 7 L16.6 10.8 Z" fill="' + PAL.white + '"/><path d="M16.6 8 L20.4 6.4"/><path d="M10.4 15.6 L17.6 15.4 L17.7 19.6 L10.5 19.8 Z" fill="' + PAL.white + '" stroke-width="1"/><path d="M21.8 4 L22.4 4 M23.6 6.6 L24.2 6.6 M22 8.8 L22.6 8.8"/>' + z;
  if(kind === 'radio') return a + '<path d="M8 10.4 L18.6 4"/><path d="M3.8 10.6 L24.2 10.2 L24.4 23.4 L4 23.6 Z" fill="' + PAL.red + '"/><path d="M10.6 13.6 C13.2 13.6 14.4 15.2 14.4 17 C14.4 18.8 13 20.4 10.6 20.4 C8.4 20.4 7 18.8 7 17 C7 15.2 8.4 13.6 10.6 13.6 Z" fill="' + PAL.cream + '"/><path d="M17.4 14.6 L21 14.5 M17.4 17.2 L21 17.1 M17.4 19.8 L21 19.7" stroke-width="1.3"/>' + z;
  return '';
}

/* pooSVG(cfg, size, {mood, stink, noHat, noPuddle}) — size = rendered height in px */
/* ===================== v7.3 =====================
   poo shapes: flat bottom, diagonal "wrap" lines that read as a swirl */
(function(){
  var NEW = {
    classic:{d:'M60 32 C46 32 38 40 42 48 C30 50 24 60 30 68 C17 71 11 84 16 95 C19 101 30 103 60 103 C90 103 101 101 104 95 C109 84 103 71 90 68 C96 60 90 50 78 48 C82 40 74 32 60 32 Z',
      detail:'M47 45 C55 44 62 41 69 37 M36 63 C48 62 63 57 76 51 M22 90 C42 89 66 82 87 73'},
    flat:{d:'M60 52 C40 52 30 60 34 67 C19 70 10 82 14 95 C17 101 30 103 60 103 C90 103 103 101 106 95 C110 82 101 70 86 67 C90 60 80 52 60 52 Z',
      detail:'M44 63 C54 62 64 59 73 55 M22 92 C42 91 68 85 91 76'},
    tall:{d:'M60 20 C51 20 46 27 49 33 C40 35 35 44 40 51 C31 54 27 63 33 70 C22 73 17 86 21 96 C24 101 34 103 60 103 C86 103 96 101 99 96 C103 86 98 73 87 70 C93 63 89 54 80 51 C85 44 80 35 71 33 C74 27 69 20 60 20 Z',
      detail:'M51 31 C56 30 61 28 65 25 M46 47 C55 46 64 42 71 37 M40 66 C51 65 64 60 77 54 M28 92 C45 90 66 84 85 76'},
    round:{d:'M60 38 C40 38 25 52 25 70 C25 84 27 96 33 100 C39 103 48 103 60 103 C72 103 81 103 87 100 C93 96 95 84 95 70 C95 52 80 38 60 38 Z',
      detail:'M38 66 C50 64 66 57 78 49 M34 88 C50 86 70 79 85 69'},
    tip:{d:'M60 17 C53 23 51 30 57 33 C42 35 33 46 38 54 C25 58 20 69 27 77 C15 81 10 92 15 98 C19 102 30 103 60 103 C90 103 101 102 105 98 C110 92 105 81 93 77 C100 69 95 58 82 54 C87 46 78 35 63 33 C69 30 67 23 60 17 Z',
      detail:'M44 50 C54 49 64 45 74 39 M34 73 C48 72 66 66 83 59 M22 95 C42 94 70 88 95 80'},
    twins:{d:['M36 72 C26 72 19 80 19 90 C19 99 23 103 37 103 C49 103 53 99 53 90 C53 80 46 72 36 72 Z',
        'M72 54 C58 54 48 64 48 78 C48 94 52 103 72 103 C92 103 96 94 96 78 C96 64 86 54 72 54 Z'],
      detail:'M26 96 C34 95 41 91 46 85 M57 92 C67 90 79 82 89 70 M60 72 C68 71 76 66 82 60'}
  };
  SHAPES.forEach(function(s){ if(NEW[s.id]){ s.d = NEW[s.id].d; s.detail = NEW[s.id].detail; } });
  HALF_W.classic = 47; HALF_W.flat = 47; HALF_W.tall = 41; HALF_W.round = 35; HALF_W.tip = 48; HALF_W.twins = 41;
})();
/* the swirl lines are drawn whole (they already sit inside the body) */
function innerD(detail, sx){
  return splitSub(detail).map(function(sub){
    return smoothD(samplePath(sub, 2.2).map(function(p){ return [60 + (p[0] - 60) * sx, p[1]]; }), false);
  }).join(' ');
}

/* 내 칸 = a toilet. Six styles, pen line + colour. viewBox 64x64 */
var TOILETS = ['basic', 'bidet', 'wood', 'squat', 'gold', 'fluffy'];
function iconWC(style){
  style = TOILETS.indexOf(style) >= 0 ? style : 'basic';
  var o = '<svg class="wc-svg" viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
  if(style === 'squat'){
    return o
      + '<path d="M22 6 L42 5.8 L42.4 15 L22.2 15.2 Z" fill="' + PAL.white + '"/>'
      + '<path d="M32 15.2 L32 26" stroke-width="2.4"/>'
      + '<path d="M6 54 C14 52 50 52 58 54" stroke-width="1.6"/>'
      + '<path d="M18 34 C18 28 24 25.6 32 25.6 C40 25.6 46 28 46 34 L47 46 C47 50.6 41 53 32 53 C23 53 17 50.6 17 46 Z" fill="' + PAL.white + '"/>'
      + '<path d="M23 38 C23 33.6 27 31.6 32 31.6 C37 31.6 41 33.6 41 38 L41.6 45 C41.6 47.8 37.6 49.2 32 49.2 C26.4 49.2 22.4 47.8 22.4 45 Z" fill="' + PAL.sky + '" stroke-width="1.6"/>'
      + '<path d="M11 47 L15 47.4 M49 47.4 L53 47" stroke-width="1.6"/>'
      + '</svg>';
  }
  var body = style === 'gold' ? PAL.yellow : PAL.white;
  var seat = style === 'wood' ? '#C99A6A' : style === 'gold' ? PAL.brass : style === 'fluffy' ? PAL.pink : PAL.white;
  o += '<path d="M15.6 5.2 L45.6 4.8 C46.8 4.8 47.4 5.4 47.4 6.6 L47.6 21.4 L15.4 21.8 L15.2 6.8 C15.2 5.6 15.6 5.2 15.6 5.2 Z" fill="' + body + '"/>'
    + '<path d="M39 9.6 L43.4 9.4" stroke-width="2.2"/>';
  if(style === 'fluffy'){
    /* scalloped fluffy lid cover */
    o += '<path d="M14.2 6.4 C16 3.6 19 3.6 20.6 5.6 C22.4 3.2 26 3.2 27.6 5.4 C29.4 3 33 3 34.6 5.4 C36.4 3 40 3.2 41.4 5.6 C43 3.6 46.2 3.8 47.8 6.6 L48 16 C46 18 43.6 18 42 16.4 C40.4 18.4 36.8 18.4 35.2 16.4 C33.6 18.4 30 18.4 28.4 16.4 C26.8 18.4 23.2 18.4 21.6 16.4 C20 18.2 16.6 18 14.6 16.2 Z" fill="' + PAL.pink + '" stroke-width="1.6"/>';
  }
  o += '<path d="M11 22 L52.6 21.6 C53.4 21.6 53.8 22.2 53.6 23 L53.2 25.6 L10.2 26 L9.8 23.4 C9.6 22.6 10.2 22 11 22 Z" fill="' + seat + '"/>'
    + '<path d="M12 26 C12.8 36.8 20.6 44.4 32.2 44.4 C43.4 44.4 50.8 36.6 51.4 25.8" fill="' + body + '"/>'
    + '<path d="M18.4 29.6 C22 32.4 42 32.2 45.4 29.2" stroke-width="1.4" opacity=".5"/>'
    + '<path d="M26 43.6 L24.2 54.6 L40.6 54.4 L38.4 43.4" fill="' + body + '"/>';
  if(style === 'bidet'){
    o += '<path d="M51.6 26.4 L58 26.2 L58.2 33.4 L51.8 33.6 Z" fill="' + PAL.grey + '" stroke-width="1.6"/>'
      + '<circle cx="54" cy="29.8" r="1.2" fill="' + PAL.blue + '" stroke="none"/><circle cx="56.4" cy="29.8" r="1.2" fill="' + PAL.red + '" stroke="none"/>';
  }
  if(style === 'gold'){
    o += '<path d="M8 10 L8 14 M6 12 L10 12 M56 38 L56 42 M54 40 L58 40" stroke-width="1.4"/>';
  }
  if(style === 'fluffy'){
    o += '<path d="M14 57.6 C14 55 18 54 32 54 C46 54 50 55 50 57.6 C50 60 46 61 32 61 C18 61 14 60 14 57.6 Z" fill="' + PAL.pink + '" stroke-width="1.6"/>';
  } else {
    o += '<path d="M21 55 L43.4 54.7" stroke-width="2.4"/>';
  }
  return o + '</svg>';
}

/* ===================== v7.4 art: one pen =====================
   Every drawing uses the same two pen weights, set by the place it is shown in (--pen):
     .ln  outline / main line      -> var(--pen)
     .lt  inner detail / texture   -> 0.6 x var(--pen)
     .fo  colour fill only, no line
   Lines are non-scaling, so a poo, a door and a toilet next to each other share one weight.
   Each object is drawn as one continuous outline plus a few inner strokes. */
function A(d, cls, fill, extra){
  return '<path class="' + cls + '" d="' + d + '"' + (fill ? ' fill="' + fill + '"' : '') + (extra || '') + '/>';
}

/* ---------- hats (anchor = top of the poo) ---------- */
var HAT_ART = {
  crown: function(){
    return A('M-21.6 3.4 C-22.8 -2 -24.2 -8 -25 -13.2 C-20.6 -10.4 -16.4 -7.6 -12.2 -5 C-8.6 -9.6 -4.8 -14.4 -.8 -19.2 C3 -14.4 6.8 -9.6 10.6 -5 C15 -7.8 19.6 -10.8 24.2 -13.6 C23.4 -8 22.4 -2.4 21.4 3.2 C8.6 5.6 -9 5.8 -21.6 3.4 Z', 'ln', PAL.yellow)
      + A('M-20.4 -1.2 C-7.6 .8 8 .8 20.6 -1.4', 'lt')
      + A('M-25 -16.4 C-23.2 -16.4 -22.6 -14.4 -24 -13.6 C-25.6 -12.8 -27 -14.6 -25.4 -16.2', 'ln', PAL.red)
      + A('M-.8 -22.6 C1 -22.6 1.6 -20.6 .2 -19.8 C-1.4 -19 -2.8 -20.8 -1.2 -22.4', 'ln', PAL.blue)
      + A('M24.2 -17 C26 -17 26.6 -15 25.2 -14.2 C23.6 -13.4 22.2 -15.2 23.8 -16.8', 'ln', PAL.green);
  },
  beanie: function(){
    return A('M-24.2 4.8 C-25 1.6 -24.6 -1.4 -22.6 -2.6 C-22.6 -13.4 -12.6 -19.8 .4 -19.8 C12.8 -19.8 22.6 -13.4 22.8 -2.6 C24.8 -1.4 25.2 1.6 24.4 4.6 C8.4 2.4 -8.2 2.6 -24.2 4.8 Z', 'ln', PAL.red)
      + A('M-23.4 -2.4 C-8 -4.8 8.6 -4.8 23.4 -2.4 C24.6 -.6 24.8 2 24.4 4.6 C8.4 2.4 -8.2 2.6 -24.2 4.8 C-24.6 2 -24.4 -.4 -23.4 -2.4 Z', 'fo', PAL.cream)
      + A('M-22.8 -2.6 C-8 -5 8.6 -5 22.8 -2.6', 'lt')
      + A('M-14.6 -3.2 C-14.8 -1 -14.8 1.4 -14.6 3.4 M-4.8 -4 C-5 -1.6 -5 .6 -4.8 2.8 M5 -4 C4.8 -1.6 4.8 .6 5 2.8 M14.8 -3.2 C14.6 -1 14.6 1.4 14.8 3.4', 'lt')
      + A('M.6 -26.4 C4.2 -26.6 5.8 -24 5.4 -21.6 C5 -19.2 2.8 -17.8 .2 -18.2 C-2.4 -18.6 -4 -20.6 -3.6 -22.8 C-3.2 -25 -1.6 -26.4 .6 -26.4', 'ln', PAL.cream);
  },
  cap: function(){
    return A('M-21.4 1.6 C-22 -10.6 -11.6 -18.2 .6 -18.4 C12.4 -18.6 21.6 -11 21.8 -.6 C26 -2.8 31.4 -2.2 32.6 1.2 C33.4 4.4 29.8 6.6 24.8 6.4 C19 6.2 14.2 4.2 10.4 2.6 C1 2.8 -10.4 2.6 -21.4 1.6 Z', 'ln', PAL.blue)
      + A('M21.8 -.6 C24.6 1 28 2.6 32.2 2.6', 'lt')
      + A('M.6 -18.4 C-1.6 -11 -2.4 -4.4 -1.8 1.8', 'lt')
      + A('M.4 -20.4 C1.8 -20.4 2.2 -18.6 1 -18.2 C-.2 -17.8 -1.2 -19 -.2 -20', 'ln', 'var(--ink)');
  },
  beret: function(){
    return A('M-25.4 -.6 C-27.8 -13.4 -12.2 -21.6 2.8 -21 C17.6 -20.4 27 -10.4 24.2 -2.4 C13 3.8 -13.6 4.2 -25.4 -.6 Z', 'ln', PAL.purple)
      + A('M3.6 -21 C3.2 -24.4 5.4 -26.2 8.2 -25.2', 'ln')
      + A('M-18 -6.2 C-10 -10 4 -12 14 -9.6', 'lt');
  },
  tp: function(){
    return A('M-13 -14.6 C-13 -19.4 13 -19.4 13 -14.6 L13.2 .8 C13.2 3 9 4.4 4.6 4.8 C9.6 5.2 17.4 6.4 17.2 10.4 C14.4 11.6 11 11.2 9.6 10.4 L10.2 5 C3.6 5.6 -3.6 5.4 -9 4.2 C-11.4 3.6 -13 2.4 -13 .8 Z', 'ln', PAL.white)
      + A('M-13 -14.6 C-12.6 -10.4 12.6 -10.4 13 -14.6', 'lt')
      + A('M0 -16.4 C2.6 -16.4 3.6 -15.4 3.6 -14.2 C3.6 -13 2.4 -12.2 0 -12.2 C-2.4 -12.2 -3.6 -13 -3.6 -14.2 C-3.6 -15.4 -2.4 -16.4 0 -16.4', 'lt', PAL.grey)
      + A('M-12.6 -6 C-4 -3.6 4 -3.6 12.8 -6', 'lt');
  },
  bow: function(){
    return A('M-1.6 -2.6 C-6.6 -11.4 -21 -13.6 -20.6 -4 C-20.2 4.6 -8.4 3.6 -1.6 -2.6 C2.6 -8.6 10 -12.4 15.4 -11.6 C21 -10.8 22.4 -4.4 19.2 -.6 C15.6 3.6 6.8 2.8 1.6 -2.6 C.6 -3.8 -.6 -3.8 -1.6 -2.6 Z', 'ln', PAL.pink)
      + A('M0 -6.6 C2.6 -6.6 3.6 -4.8 3.4 -3 C3.2 -1 1.8 .2 0 0 C-1.8 -.2 -3.4 -1.4 -3.4 -3.2 C-3.4 -5 -2.2 -6.6 0 -6.6', 'ln', 'var(--bg)')
      + A('M-15 -6 C-12 -5.4 -9 -4.6 -6 -3.4 M15 -6 C12 -5.4 9 -4.6 6 -3.4', 'lt');
  },
  flower: function(){
    var f = function(x, y, c){
      return A('M' + x + ' ' + (y - 4.6) + ' C' + (x + 2.2) + ' ' + (y - 4.6) + ' ' + (x + 2.6) + ' ' + (y - 2.4) + ' ' + (x + 1.6) + ' ' + (y - 1.4)
        + ' C' + (x + 3.8) + ' ' + (y - 2.6) + ' ' + (x + 5.4) + ' ' + (y - .2) + ' ' + (x + 3.4) + ' ' + (y + 1)
        + ' C' + (x + 4.2) + ' ' + (y + 3.4) + ' ' + (x + 1.6) + ' ' + (y + 4.4) + ' ' + x + ' ' + (y + 2.6)
        + ' C' + (x - 1.6) + ' ' + (y + 4.4) + ' ' + (x - 4.2) + ' ' + (y + 3.4) + ' ' + (x - 3.4) + ' ' + (y + 1)
        + ' C' + (x - 5.4) + ' ' + (y - .2) + ' ' + (x - 3.8) + ' ' + (y - 2.6) + ' ' + (x - 1.6) + ' ' + (y - 1.4)
        + ' C' + (x - 2.6) + ' ' + (y - 2.4) + ' ' + (x - 2.2) + ' ' + (y - 4.6) + ' ' + x + ' ' + (y - 4.6) + ' Z', 'ln', c)
        + A('M' + (x - .8) + ' ' + y + ' a.8 .8 0 1 0 1.6 0 a.8 .8 0 1 0 -1.6 0', 'fo', PAL.yellow);
    };
    return A('M-21 1.6 C-9 -5.8 9 -7.2 21 .6', 'ln', null, ' stroke="' + PAL.green + '"')
      + f(-15.4, -2.4, PAL.pink) + f(-5, -6.6, PAL.white) + f(5.8, -7.2, PAL.sky) + f(15.8, -2.6, PAL.pink);
  },
  wizard: function(){
    return A('M-27 2.4 C-21 1.8 -18.4 .4 -15.8 -3.4 C-9.6 -12 -3.4 -21.4 1.6 -30.4 C2.6 -24 5.6 -16.2 10 -9 C13 -3.6 16.6 .4 21 1.4 C24 2 26.4 2.2 28 2.4 C10 7.6 -9 7.4 -27 2.4 Z', 'ln', 'var(--bg)')
      + A('M-15.6 -1.6 C-6 1.4 9 1.4 19.4 -.6', 'lt')
      + A('M1.4 -16.4 L2.8 -13.4 L6 -13 L3.6 -10.8 L4.4 -7.6 L1.4 -9.4 L-1.6 -7.6 L-.8 -10.8 L-3.2 -13 L0 -13.4 Z', 'ln', PAL.yellow);
  },
  phones: function(){
    return A('M-23 1 C-25.6 -13 -13 -21.4 .2 -21.4 C13.4 -21.4 25.4 -13 23 1', 'ln')
      + A('M-20.4 .6 C-22.4 -11 -11.6 -18.4 .2 -18.4 C12 -18.4 22.6 -11 20.6 .6', 'lt')
      + A('M-29.6 -5.4 C-29.8 -7.8 -28 -8.8 -25.6 -8.4 C-22.8 -8 -21.2 -6.4 -21.2 -3.4 L-21.4 4.8 C-21.4 7.6 -23.2 8.8 -25.8 8.6 C-28.2 8.4 -29.8 7 -29.8 4.8 Z', 'ln', PAL.red)
      + A('M29.8 -5.4 C30 -7.8 28.2 -8.8 25.8 -8.4 C23 -8 21.4 -6.4 21.4 -3.4 L21.6 4.8 C21.6 7.6 23.4 8.8 26 8.6 C28.4 8.4 30 7 30 4.8 Z', 'ln', PAL.red);
  },
  cone: function(){
    return A('M-17.2 2.4 C-11 -8 -4.6 -18 1.8 -28 C7.6 -18.6 13 -8.6 18.4 2 C7 5.8 -6.2 6 -17.2 2.4 Z', 'ln', PAL.yellow)
      + A('M-10.2 -8.8 C-3.6 -11 3.6 -11.4 10.6 -9.6 L12.6 -6 C4.6 -8 -4 -7.8 -12 -5.6 Z', 'fo', PAL.pink)
      + A('M-4.4 -18.4 C-1 -19.6 3 -19.8 6.4 -18.6 L7.8 -16 C3.6 -17 -.8 -17 -5.8 -15.8 Z', 'fo', PAL.pink)
      + A('M1.8 -33.4 C4.4 -33.6 5.6 -31.6 5.2 -29.6 C4.8 -27.8 3.2 -26.8 1.4 -27.2 C-.6 -27.6 -1.6 -29 -1.4 -30.6 C-1.2 -32.2 0 -33.4 1.8 -33.4', 'ln', PAL.red);
  }
};

/* ---------- accessories ---------- */
function neckOf(sh, sx){
  var n = NECK[sh.id] || NECK.classic;
  return {x:n[0] + (n[0] - 60) * (sx - 1), y:n[1], hw:n[2] * sx, R:60 + (HALF_W[sh.id] || 47) * sx};
}
function accBehind(acc, sh, sx){
  if(acc !== 'cape') return '';
  var n = neckOf(sh, sx), x = n.x, y = n.y, hw = n.hw;
  return A('M' + f1(x - hw) + ' ' + y + ' C' + f1(x - hw - 15) + ' ' + (y + 22) + ' ' + f1(x - hw - 15) + ' ' + (y + 40) + ' ' + f1(x - hw - 9) + ' 103.4 C' + f1(x - hw * .3) + ' 105.6 ' + f1(x + hw * .3) + ' 105.6 ' + f1(x + hw + 9) + ' 103.4 C' + f1(x + hw + 15) + ' ' + (y + 40) + ' ' + f1(x + hw + 15) + ' ' + (y + 22) + ' ' + f1(x + hw) + ' ' + y, 'ln', PAL.red);
}
function accFront(acc, sh, sx){
  var n = neckOf(sh, sx), x = n.x, y = n.y, hw = n.hw, R = n.R;
  if(acc === 'scarf'){
    return A('M' + f1(x - hw - 1.4) + ' ' + f1(y - 3) + ' C' + f1(x - hw * .4) + ' ' + f1(y + 2) + ' ' + f1(x + hw * .4) + ' ' + f1(y + 2) + ' ' + f1(x + hw + 1.4) + ' ' + f1(y - 3)
        + ' C' + f1(x + hw + 2.4) + ' ' + f1(y) + ' ' + f1(x + hw + 2.2) + ' ' + f1(y + 3) + ' ' + f1(x + hw + 1.2) + ' ' + f1(y + 4.8)
        + ' C' + f1(x + hw * .7) + ' ' + f1(y + 7) + ' ' + f1(x + hw * .55) + ' ' + f1(y + 7.6) + ' ' + f1(x + hw * .5) + ' ' + f1(y + 7.8)
        + ' C' + f1(x + hw * .58) + ' ' + f1(y + 13) + ' ' + f1(x + hw * .64) + ' ' + f1(y + 18) + ' ' + f1(x + hw * .62) + ' ' + f1(y + 23)
        + ' C' + f1(x + hw * .5) + ' ' + f1(y + 24) + ' ' + f1(x + hw * .36) + ' ' + f1(y + 24) + ' ' + f1(x + hw * .26) + ' ' + f1(y + 23.4)
        + ' C' + f1(x + hw * .24) + ' ' + f1(y + 18) + ' ' + f1(x + hw * .2) + ' ' + f1(y + 13) + ' ' + f1(x + hw * .14) + ' ' + f1(y + 8.6)
        + ' C' + f1(x - hw * .5) + ' ' + f1(y + 9.6) + ' ' + f1(x - hw - .6) + ' ' + f1(y + 8) + ' ' + f1(x - hw - 1.4) + ' ' + f1(y + 4.6)
        + ' C' + f1(x - hw - 2.4) + ' ' + f1(y + 2) + ' ' + f1(x - hw - 2.4) + ' ' + f1(y - 1) + ' ' + f1(x - hw - 1.4) + ' ' + f1(y - 3) + ' Z', 'ln', PAL.red)
      + A('M' + f1(x - hw * .62) + ' ' + f1(y + 1) + ' C' + f1(x - hw * .6) + ' ' + f1(y + 3) + ' ' + f1(x - hw * .6) + ' ' + f1(y + 5) + ' ' + f1(x - hw * .62) + ' ' + f1(y + 7.2)
        + ' M' + f1(x - hw * .14) + ' ' + f1(y + 2) + ' C' + f1(x - hw * .12) + ' ' + f1(y + 4) + ' ' + f1(x - hw * .12) + ' ' + f1(y + 6) + ' ' + f1(x - hw * .14) + ' ' + f1(y + 8)
        + ' M' + f1(x + hw * .3) + ' ' + f1(y + 15) + ' C' + f1(x + hw * .42) + ' ' + f1(y + 15.4) + ' ' + f1(x + hw * .52) + ' ' + f1(y + 15.4) + ' ' + f1(x + hw * .6) + ' ' + f1(y + 15), 'lt', null, ' stroke="' + PAL.cream + '"');
  }
  if(acc === 'bowtie'){
    var by = y + 6;
    return A('M' + f1(x - 1.6) + ' ' + f1(by - 1.6) + ' C' + f1(x - 5) + ' ' + f1(by - 5) + ' ' + f1(x - 9) + ' ' + f1(by - 7) + ' ' + f1(x - 10.4) + ' ' + f1(by - 5.4)
        + ' C' + f1(x - 12) + ' ' + f1(by - 3) + ' ' + f1(x - 12) + ' ' + f1(by + 3) + ' ' + f1(x - 10.4) + ' ' + f1(by + 5.4)
        + ' C' + f1(x - 9) + ' ' + f1(by + 7) + ' ' + f1(x - 5) + ' ' + f1(by + 5) + ' ' + f1(x - 1.6) + ' ' + f1(by + 1.6)
        + ' C' + f1(x - .6) + ' ' + f1(by + 2.8) + ' ' + f1(x + .6) + ' ' + f1(by + 2.8) + ' ' + f1(x + 1.6) + ' ' + f1(by + 1.6)
        + ' C' + f1(x + 5) + ' ' + f1(by + 5) + ' ' + f1(x + 9) + ' ' + f1(by + 7) + ' ' + f1(x + 10.4) + ' ' + f1(by + 5.4)
        + ' C' + f1(x + 12) + ' ' + f1(by + 3) + ' ' + f1(x + 12) + ' ' + f1(by - 3) + ' ' + f1(x + 10.4) + ' ' + f1(by - 5.4)
        + ' C' + f1(x + 9) + ' ' + f1(by - 7) + ' ' + f1(x + 5) + ' ' + f1(by - 5) + ' ' + f1(x + 1.6) + ' ' + f1(by - 1.6)
        + ' C' + f1(x + .6) + ' ' + f1(by - 2.8) + ' ' + f1(x - .6) + ' ' + f1(by - 2.8) + ' ' + f1(x - 1.6) + ' ' + f1(by - 1.6) + ' Z', 'ln', PAL.blue)
      + A('M' + f1(x - 1.6) + ' ' + f1(by - 1.6) + ' C' + f1(x - 2.2) + ' ' + f1(by) + ' ' + f1(x - 2.2) + ' ' + f1(by) + ' ' + f1(x - 1.6) + ' ' + f1(by + 1.6)
        + ' M' + f1(x + 1.6) + ' ' + f1(by - 1.6) + ' C' + f1(x + 2.2) + ' ' + f1(by) + ' ' + f1(x + 2.2) + ' ' + f1(by) + ' ' + f1(x + 1.6) + ' ' + f1(by + 1.6), 'lt');
  }
  if(acc === 'cape'){
    return A('M' + f1(x - hw - 1) + ' ' + f1(y - 1.4) + ' C' + f1(x - hw * .3) + ' ' + f1(y + 3.8) + ' ' + f1(x + hw * .3) + ' ' + f1(y + 3.8) + ' ' + f1(x + hw + 1) + ' ' + f1(y - 1.4), 'ln')
      + A('M' + f1(x) + ' ' + f1(y + .4) + ' C' + f1(x + 2.4) + ' ' + f1(y + .4) + ' ' + f1(x + 3) + ' ' + f1(y + 2.6) + ' ' + f1(x + 1.8) + ' ' + f1(y + 3.8) + ' C' + f1(x + .6) + ' ' + f1(y + 5) + ' ' + f1(x - 2.4) + ' ' + f1(y + 4.6) + ' ' + f1(x - 2.4) + ' ' + f1(y + 2.4) + ' C' + f1(x - 2.4) + ' ' + f1(y + 1.2) + ' ' + f1(x - 1.4) + ' ' + f1(y + .4) + ' ' + f1(x) + ' ' + f1(y + .4), 'ln', PAL.yellow);
  }
  if(acc === 'flower'){
    var fx = R + 12, fy = 54;
    return A('M' + f1(R - 3) + ' 82 C' + f1(R + 6) + ' 76 ' + f1(R + 10) + ' 66 ' + f1(fx) + ' ' + (fy + 5), 'ln', null, ' stroke="' + PAL.green + '"')
      + A('M' + f1(R + 6.6) + ' 72.4 C' + f1(R + 11) + ' 69.4 ' + f1(R + 15) + ' 70.4 ' + f1(R + 16.4) + ' 73.6 C' + f1(R + 12.6) + ' 75.8 ' + f1(R + 9) + ' 75.4 ' + f1(R + 6.6) + ' 72.4 Z', 'ln', PAL.green)
      + HAT_FLOWER(fx, fy, PAL.pink, 1.5);
  }
  if(acc === 'balloon'){
    var bx = R + 12;
    return A('M' + f1(R - 2) + ' 80 C' + f1(R + 8) + ' 70 ' + f1(R + 2) + ' 52 ' + f1(R + 10) + ' 42 C' + f1(R + 12.4) + ' 39 ' + f1(bx) + ' 37 ' + f1(bx) + ' 34', 'lt')
      + A('M' + f1(bx) + ' 8.6 C' + f1(bx + 8) + ' 8.4 ' + f1(bx + 10.2) + ' 15.6 ' + f1(bx + 9.6) + ' 21 C' + f1(bx + 9) + ' 28 ' + f1(bx + 4) + ' 32.6 ' + f1(bx + 1) + ' 33 L' + f1(bx + 2.2) + ' 35.2 C' + f1(bx + .4) + ' 35.6 ' + f1(bx - .6) + ' 35.6 ' + f1(bx - 2.2) + ' 35.2 L' + f1(bx - 1) + ' 33 C' + f1(bx - 4) + ' 32.6 ' + f1(bx - 9.4) + ' 28 ' + f1(bx - 9.8) + ' 21 C' + f1(bx - 10) + ' 15 ' + f1(bx - 8) + ' 8.8 ' + f1(bx) + ' 8.6 Z', 'ln', PAL.red)
      + A('M' + f1(bx - 5) + ' 14 C' + f1(bx - 6.2) + ' 16 ' + f1(bx - 6.4) + ' 18 ' + f1(bx - 6.2) + ' 20', 'lt', null, ' stroke="' + PAL.white + '"');
  }
  return '';
}
/* a 5-petal flower as one outline (used by the held flower) */
function HAT_FLOWER(x, y, c, s){
  s = s || 1;
  var p = function(dx, dy){ return f1(x + dx * s) + ' ' + f1(y + dy * s); };
  return A('M' + p(0, -4.6) + ' C' + p(2.2, -4.6) + ' ' + p(2.6, -2.4) + ' ' + p(1.6, -1.4) + ' C' + p(3.8, -2.6) + ' ' + p(5.4, -.2) + ' ' + p(3.4, 1)
    + ' C' + p(4.2, 3.4) + ' ' + p(1.6, 4.4) + ' ' + p(0, 2.6) + ' C' + p(-1.6, 4.4) + ' ' + p(-4.2, 3.4) + ' ' + p(-3.4, 1)
    + ' C' + p(-5.4, -.2) + ' ' + p(-3.8, -2.6) + ' ' + p(-1.6, -1.4) + ' C' + p(-2.6, -2.4) + ' ' + p(-2.2, -4.6) + ' ' + p(0, -4.6) + ' Z', 'ln', c)
    + '<circle class="fo" cx="' + f1(x) + '" cy="' + f1(y) + '" r="' + f1(1 * s) + '" fill="' + PAL.yellow + '"/>';
}

/* ---------- state marks ---------- */
function auraSVG(sh, sx, mood, sw, opt){
  var out = '';
  var edge = (HALF_W[sh.id] || 47) * sx;
  var L = 60 - edge, R = 60 + edge;
  if(mood === 'hard'){
    out += A('M' + f1(L - 7) + ' 76 C' + f1(L - 10) + ' 79 ' + f1(L - 10) + ' 85 ' + f1(L - 7) + ' 88 M' + f1(L - 13) + ' 73 C' + f1(L - 18) + ' 78 ' + f1(L - 18) + ' 86 ' + f1(L - 13) + ' 91', 'lt')
      + A('M' + f1(R + 7) + ' 76 C' + f1(R + 10) + ' 79 ' + f1(R + 10) + ' 85 ' + f1(R + 7) + ' 88 M' + f1(R + 13) + ' 73 C' + f1(R + 18) + ' 78 ' + f1(R + 18) + ' 86 ' + f1(R + 13) + ' 91', 'lt')
      + A(dropD(R + 3, sh.top[1] + 6, 1.05), 'ln', PAL.sky)
      + A(dropD(L - 3, sh.top[1] + 18, .85), 'ln', PAL.sky);
  } else if(mood === 'loose'){
    out += A('M' + f1(L - 6) + ' 70 L' + f1(L - 15) + ' 70 M' + f1(L - 4) + ' 81 L' + f1(L - 19) + ' 81 M' + f1(L - 6) + ' 92 L' + f1(L - 14) + ' 92', 'lt')
      + A('M' + f1(R + 6) + ' 66 L' + f1(R + 15) + ' 66 M' + f1(R + 4) + ' 78 L' + f1(R + 19) + ' 78', 'lt')
      + (opt.noPuddle ? '' : A('M' + f1(60 - edge * .8) + ' 112 C' + f1(60 - edge * .4) + ' 116 ' + f1(60 + edge * .4) + ' 116 ' + f1(60 + edge * .8) + ' 112', 'lt'))
      + A(dropD(60 - edge * .4, 101, 1.1), 'ln', PAL.brown)
      + A(dropD(60 + edge * .45, 102, .8), 'ln', PAL.brown);
  }
  if(opt.stink){
    out += A('M' + f1(L + 4) + ' 40 c-4 -4 4 -7 0 -11 c-4 -4 4 -7 0 -11 M' + f1(R - 4) + ' 36 c4 -4 -4 -7 0 -11 c4 -4 -4 -7 0 -11', 'lt', null, ' opacity=".45"');
  }
  return out;
}

/* ---------- the poo ---------- */
function pooSVG(cfg, size, opt){
  opt = opt || {};
  size = size || 60;
  cfg = cfg || {};
  var mood = opt.mood || 'normal';
  var acc = opt.noAcc ? 'none' : (cfg.acc || 'none');
  var key = [cfg.shape, cfg.thick, cfg.hat, acc, size, mood, opt.stink ? 1 : 0, opt.noHat ? 1 : 0, opt.noPuddle ? 1 : 0, opt.fit ? 1 : 0, opt.kk ? 1 : 0].join('|');
  if(_pooCache[key]) return _pooCache[key];
  var sh = shapeById(cfg.shape);
  var sx = THICKS[cfg.thick] || 1;
  var ds = Object.prototype.toString.call(sh.d) === '[object Array]' ? sh.d : [sh.d];
  var vb = opt.kk ? KK_VB : (opt.fit && (acc === 'none' || acc === 'scarf' || acc === 'bowtie' || acc === 'cape')) ? {x:-10, y:-2, w:140, h:122} : PVB;
  var wpx = Math.round(size * vb.w / vb.h);
  var out = '<svg class="art poo-svg' + (mood !== 'normal' ? ' m-' + mood : '') + '" viewBox="' + vb.x + ' ' + vb.y + ' ' + vb.w + ' ' + vb.h + '" width="' + wpx + '" height="' + size + '" fill="none" aria-hidden="true">';
  if(acc !== 'none') out += accBehind(acc, sh, sx);
  for(var i=0;i<ds.length;i++) out += A(scaledD(ds[i], sx, true), 'ln', 'var(--poo)');
  if(sh.detail) out += A(innerD(sh.detail, sx), 'lt');
  out += auraSVG(sh, sx, mood, 0, opt);
  if(acc !== 'none') out += accFront(acc, sh, sx);
  if(!opt.noHat && cfg.hat === 'beret'){
    out += wigPaths(sh, sx);
  } else if(!opt.noHat && cfg.hat && cfg.hat !== 'none' && HAT_ART[cfg.hat]){
    out += '<g transform="' + hatTransform(sh, sx, cfg.hat) + '">' + HAT_ART[cfg.hat]() + '</g>';
  }
  out += '</svg>';
  if(_pooCacheN > 400){ _pooCache = {}; _pooCacheN = 0; }
  _pooCache[key] = out; _pooCacheN++;
  return out;
}

/* ---------- door (뒷간) — one outline with a rounded top ---------- */
function iconDoor(busy, deco, num){
  var style = (deco && DOORS.indexOf(deco) >= 0) ? deco : 'plain';
  var o = '<svg class="art door-svg" viewBox="0 0 44 60" width="44" height="60" fill="none" aria-hidden="true">'
    + A('M7.6 48 L36.8 48 L37.4 56.4 L7 56.6 Z', 'fo', 'var(--door, #fff)')
    + A('M7.2 55.4 C7 40 7 24 7.4 9.4 C7.6 6.2 9.4 4.6 12.4 4.6 C19 4.4 25.4 4.4 31.8 4.3 C34.8 4.3 36.6 6 36.6 9.2 C36.8 24 37 40 37.2 55.2', 'ln', 'var(--door, #fff)')
    + A('M3.4 55.8 C16 56.6 28 56.6 40.8 55.6', 'ln');
  if(style === 'planks'){
    o += A('M15.2 5 C15 22 15 38 15.2 55.4 M22.2 4.6 C22 22 22 38 22.2 55.6 M29.4 4.4 C29.2 22 29.4 38 29.6 55.4', 'lt')
      + A('M7.6 16.6 C17 16 27 16 36.6 16.2 M7.4 44 C17 43.6 27 43.6 37 43.8', 'lt');
  } else {
    o += A(('M12.4 10.4 C18.6 10.2 25 10.2 31.4 10.2 C31.6 15.4 31.6 20.6 31.6 25.8 C25.2 26 18.8 26 12.6 26 C12.6 20.8 12.4 15.6 12.4 10.4 Z ') + 'M12.8 31.6 C19 31.4 25.6 31.4 31.8 31.4 C32 37.6 32 43.6 32 49.8 C25.6 50 19.2 50 12.8 50 C12.8 43.8 12.8 37.6 12.8 31.6 Z', 'lt');
  }
  if(style === 'wc'){
    o += A('M14.4 12.6 C19.4 12.4 25 12.4 29.8 12.4 C30 15.4 30 18.4 29.8 21.4 C24.6 21.6 19.4 21.6 14.6 21.4 C14.4 18.4 14.4 15.4 14.4 12.6 Z', 'ln', PAL.white)
      + '<text x="22.2" y="19.4" text-anchor="middle" font-size="7" font-family="Gochi Hand, Gmarket Sans, sans-serif" fill="var(--ink)">WC</text>';
  } else if(style === 'moon'){
    o += A('M24.9 15.1 C21.6 15.4 21.0 20.4 23.8 22.0 C21.2 22.2 19.5 20.4 19.7 18.3 C20.0 16.2 22.2 14.6 24.9 15.1 Z', 'ln', 'var(--ink)');
  } else if(style === 'window'){
    o += A('M14.4 11.8 C19.6 11.6 24.8 11.6 30 11.6 C30.2 15.6 30.2 19.6 30 23.6 C24.8 23.8 19.6 23.8 14.6 23.6 C14.4 19.6 14.4 15.6 14.4 11.8 Z', 'ln', PAL.sky)
      + A('M22.2 11.8 C22.3 15.8 22.3 19.6 22.2 23.6 M14.6 17.6 C19.8 17.4 24.8 17.4 30 17.6', 'lt')
      + A('M16.4 14.2 C17 14 17.8 14 18.4 14', 'lt', null, ' stroke="' + PAL.white + '"');
  } else if(style === 'number'){
    o += A('M22 11.2 C26.2 11.2 28 13.6 27.8 16.2 C27.6 18.8 25.4 20.8 22 20.8 C18.4 20.8 16.2 18.6 16.4 16 C16.6 13.2 18.6 11.2 22 11.2 Z', 'ln', PAL.brass)
      + '<text x="22.1" y="18.8" text-anchor="middle" font-size="7.4" font-family="Gochi Hand, Gmarket Sans, sans-serif" fill="var(--ink)">' + ((num || 0) + 1) + '</text>';
  }
  o += A('M31.4 29.6 C33 29.6 33.6 30.6 33.5 31.6 C33.4 32.6 32.6 33.3 31.5 33.2 C30.4 33.1 29.8 32.3 29.9 31.3 C30 30.3 30.6 29.6 31.4 29.6 Z', 'ln', PAL.brass)
    + '</svg>';
  return o;
}

/* ---------- toilet (내 칸) — one silhouette: tank, seat, bowl and foot in a single line ---------- */
var TOILETS = ['basic', 'bidet', 'wood', 'squat', 'gold', 'fluffy'];
var WC_OUTLINE = 'M17.4 6.6 C17.4 5 18.4 4.4 20 4.4 C28 4.2 36 4.2 44 4.2 C45.8 4.2 46.6 5 46.6 6.6 L46.8 19.8 C51 20 53.6 21 53.6 23 C53.6 24.8 52.6 25.8 51 26.2 C50.4 35.6 44.6 42.6 37.8 44.4 C38.4 47.6 39.2 51 39.8 54.2 C40 55.4 39.2 56 38 56 C34 56 30 56.1 26 56.2 C24.8 56.2 24.2 55.6 24.4 54.6 C25 51.2 25.6 47.8 26.2 44.4 C19.4 42.6 13.6 35.6 13 26.2 C11.4 25.8 10.4 24.8 10.4 23 C10.4 21 13 20 17.6 19.8 Z';
function iconWC(style){
  style = TOILETS.indexOf(style) >= 0 ? style : 'basic';
  var o = '<svg class="art wc-svg" viewBox="0 0 64 64" width="56" height="56" fill="none" aria-hidden="true">';
  if(style === 'squat'){
    return o
      + A('M24.4 6.4 C24.4 5.2 25.2 4.6 26.4 4.6 C30.2 4.4 34 4.4 37.8 4.4 C39 4.4 39.8 5.2 39.8 6.4 C39.8 8.6 39.8 10.8 39.8 13 C39.8 14.2 39 14.8 37.8 14.8 L33.4 14.8 C33.4 18.6 33.6 22.4 33.8 26 L30.4 26.2 C30.6 22.4 30.8 18.6 30.8 14.8 L26.4 14.8 C25.2 14.8 24.4 14.2 24.4 13 C24.4 10.8 24.4 8.6 24.4 6.4 Z', 'ln', PAL.white)
      + A('M14.4 44 C13.6 35.6 21.6 28.6 32 28.6 C42.4 28.6 50.4 35.6 49.6 44 C49 50 42 53.6 32 53.6 C22 53.6 15 50 14.4 44 Z', 'ln', PAL.white)
      + A('M24.4 43.6 C24.4 39.4 27.6 36.6 32 36.6 C36.4 36.6 39.6 39.4 39.6 43.6 C39.6 46.6 36.4 48.4 32 48.4 C27.6 48.4 24.4 46.6 24.4 43.6 Z', 'lt', PAL.sky)
      + A('M21.6 33.2 C26 30.6 38 30.6 42.4 33.2', 'lt')
      + A('M6.4 56 C18 55 46 55 57.6 56', 'lt');
  }
  var body = style === 'gold' ? PAL.yellow : PAL.white;
  var seat = style === 'wood' ? 'var(--bg)' : style === 'gold' ? PAL.brass : style === 'fluffy' ? PAL.pink : null;
  o += A(WC_OUTLINE, 'fo', body);
  if(seat) o += A('M10.4 23 C10.4 21 13 20 17.6 19.8 L46.8 19.8 C51 20 53.6 21 53.6 23 C53.6 24.8 52.6 25.8 51 26.2 C39 27.8 25 27.8 13 26.2 C11.4 25.8 10.4 24.8 10.4 23 Z', 'fo', seat);
  if(style === 'fluffy'){
    o += A('M18 15.6 C17.4 12 18.6 9.6 21.4 10.2 C22.6 7.6 26 7.4 27.4 9.6 C29 7.2 32.6 7.2 34 9.6 C35.6 7.4 39 7.6 40.2 10.2 C43 9.6 44.4 12 43.8 15.6 C36 16.8 26 16.8 18 15.6 Z', 'lt', PAL.pink);
  }
  o += A(WC_OUTLINE, 'ln')
    + A('M17.6 19.8 C27 19.6 37 19.6 46.8 19.8', 'lt')
    + A('M13 26.2 C25 27.8 39 27.8 51 26.2', 'lt')
    + A('M39.4 7.6 C40.6 7.5 41.8 7.5 43 7.6', 'ln')
    + A('M19.6 31.4 C25 34 39 34 44.4 31.4', 'lt');
  if(style === 'bidet'){
    o += A('M51 26.2 C53.6 25.6 56.6 25.8 57.6 27 C58.2 28.4 58.2 31 57.4 32.4 C56 33.4 53.4 33.4 51.4 32.8', 'ln', PAL.grey)
      + '<circle class="fo" cx="54" cy="29.4" r="1.1" fill="' + PAL.blue + '"/><circle class="fo" cx="56.2" cy="29.4" r="1.1" fill="' + PAL.red + '"/>';
  }
  if(style === 'gold'){
    o += A('M7.6 9.6 C7.6 11 7.6 12.4 7.6 13.8 M5.6 11.7 C6.9 11.7 8.3 11.7 9.6 11.7 M56.4 38 C56.4 39.4 56.4 40.8 56.4 42.2 M54.4 40.1 C55.7 40.1 57.1 40.1 58.4 40.1', 'lt');
  }
  if(style === 'fluffy'){
    o += A('M14.8 58.4 C14.4 56 18.8 55 32 55 C45.2 55 49.6 56 49.2 58.4 C48.8 60.6 44.6 61.4 32 61.4 C19.4 61.4 15.2 60.6 14.8 58.4 Z', 'ln', PAL.pink);
  } else {
    o += A('M19.4 57.6 C28 58.2 36.4 58.2 45 57.4', 'lt');
  }
  return o + '</svg>';
}

/* ---------- stall items ---------- */
function iconProp(kind){
  var o = '<svg class="art prop-svg" viewBox="0 0 28 28" width="24" height="24" fill="none" aria-hidden="true">', z = '</svg>';
  if(kind === 'plant') return o
    + A('M14 17.4 C13.8 13 13.2 9.4 10.6 6.2', 'ln', null, ' stroke="' + PAL.green + '"')
    + A('M13.8 13.2 C15.2 9.8 18.2 8.2 21.6 8.8 C20.8 12 17.8 13.6 13.8 13.2 Z', 'ln', PAL.green)
    + A('M13.2 11.8 C11.6 10 8.6 9.6 6.6 11.4 C8.6 13.6 11.4 13.8 13.2 11.8 Z', 'ln', PAL.green)
    + A('M7.6 17.2 C11.8 17 16.2 17 20.4 17.2 C20 20 19.4 22.8 18.6 25.4 C15.6 25.8 12.4 25.8 9.4 25.6 C8.6 22.8 8 20 7.6 17.2 Z', 'ln', PAL.terra)
    + A('M8 19.6 C12 19.8 16 19.8 20 19.6', 'lt') + z;
  if(kind === 'roll') return o
    + A('M3.8 5.4 C3.6 7.4 3.6 9.2 3.8 11 M3.6 8.2 C5.6 8.1 7.4 8.1 9.4 8.2', 'ln')
    + A('M10 4.6 C14 4.6 15.4 6.4 15.4 8.2 C15.4 11 15.6 16 15.6 22 C14.8 21.6 14 21.2 13.2 20.6 C12.4 21.2 11.6 21.8 10.8 22.2 C10.6 18.6 10.4 15 10 11.8 C6.2 11.8 4.8 10 4.8 8.2 C4.8 6.4 6.2 4.6 10 4.6 Z', 'ln', PAL.white)
    + A('M10 7 C11 7 11.4 7.6 11.4 8.2 C11.4 8.8 11 9.4 10 9.4 C9 9.4 8.6 8.8 8.6 8.2 C8.6 7.6 9 7 10 7', 'lt', PAL.grey) + z;
  if(kind === 'news') return o
    + A('M4.6 7.6 C10 7 15.2 6.6 20.4 6.4 C21.6 7.4 22.8 8.6 23.8 9.8 C22.6 10 21.8 10 21.4 10.2 C21.6 14 21.8 18 21.8 22 C16.6 22.6 11.4 23 6 23.2 C5.6 18 5 12.8 4.6 7.6 Z', 'ln', PAL.cream)
    + A('M8 10.6 C10 10.4 12 10.2 14.4 10.2', 'ln')
    + A('M8.2 13.8 C11.6 13.6 14.8 13.4 18.2 13.2 M8.4 16.8 C11.8 16.6 15 16.4 18.4 16.2 M8.6 19.6 C11 19.4 13 19.2 15.4 19.2', 'lt') + z;
  if(kind === 'clock') return o
    + A('M14 3.8 C20 3.8 24 8 24 14 C24 20 20 24 14 24 C8 24 4 20 4 14 C4 8 8 3.8 14 3.8 Z', 'ln', PAL.yellow)
    + A('M14 7 C18.4 7 21 9.8 21 14 C21 18.2 18.4 21 14 21 C9.6 21 7 18.2 7 14 C7 9.8 9.6 7 14 7 Z', 'lt', PAL.white)
    + A('M14 9.6 C14 11.2 14 12.6 14 14.2 C15 14.8 16.2 15.4 17.2 16', 'ln') + z;
  if(kind === 'spray') return o
    + A('M11.4 10.8 C11.4 9.4 11.4 8.2 11.4 7 C13.2 6.8 15 6.8 16.6 7 C16.6 8.2 16.6 9.6 16.6 10.8 C17.6 10.8 18.6 11 18.6 12 C18.8 16.4 19 20.8 19 25.2 C15.6 25.4 12.4 25.4 9 25.4 C9 20.8 9.2 16.4 9.4 12 C9.4 11 10.4 10.8 11.4 10.8 Z', 'ln', PAL.pink)
    + A('M11.4 10.8 C13.2 10.6 15 10.6 16.6 10.8 M10.6 15.6 C13 15.4 15.2 15.4 17.6 15.6 L17.6 19.6 C15.2 19.8 13 19.8 10.6 19.6 Z', 'lt', PAL.white)
    + A('M16.6 8.2 C17.8 7.6 19 7 20.4 6.6', 'ln')
    + A('M21.8 4.2 L22.2 4.2 M23.6 6.8 L24 6.8 M22 9 L22.4 9', 'lt') + z;
  if(kind === 'radio') return o
    + A('M8.2 10.4 C11.6 8.2 15 6.2 18.6 4.2', 'ln')
    + A('M4.6 10.8 C11 10.4 17.6 10.2 24 10.4 C24.4 14.6 24.4 19 24.2 23.2 C17.6 23.6 11 23.6 4.4 23.4 C4 19.2 4 15 4.6 10.8 Z', 'ln', PAL.red)
    + A('M10.6 13.6 C13.2 13.6 14.4 15.2 14.4 17 C14.4 18.8 13 20.4 10.6 20.4 C8.4 20.4 7 18.8 7 17 C7 15.2 8.4 13.6 10.6 13.6 Z', 'ln', PAL.cream)
    + A('M17.4 14.6 C18.6 14.6 19.8 14.6 21 14.5 M17.4 17.2 C18.6 17.2 19.8 17.2 21 17.1 M17.4 19.8 C18.6 19.8 19.8 19.8 21 19.7', 'lt') + z;
  return '';
}

/* ===================== v7.5: line-icon style =====================
   Black line on white, one weight everywhere (like a hand-drawn icon set).
   Colour fills are dropped; the toilet's colour still paints its door. */
(function(){
  for(var k in PAL){ if(Object.prototype.hasOwnProperty.call(PAL, k)) PAL[k] = 'var(--bg)'; }
  /* swirl lines that start and end on the outline, like a real soft-serve wrap */
  var LINES = {
    classic:'M42 48 C54 47 68 45 78.5 41 M30 68 C46 66 66 58 78 48 M16 95 C42 92 70 82 90 68',
    flat:'M34 67 C50 66 70 64 86 60.7 M14 95 C40 92 68 80 86 67',
    tall:'M49 33 C56 32 65 30 71.6 27.5 M40 51 C50 49 62 41 71 33 M33 70 C46 68 66 60 80 51 M21 96 C42 93 68 84 87 70',
    round:'M25 70 C45 68 72 60 88.4 51 M26.7 88.8 C48 86 76 79 95 70',
    tip:'M38 54 C48 52 57 43 63 33 M27 77 C44 75 66 66 82 54 M15 98 C40 95 72 88 93 77',
    twins:'M19 90 C30 88 42 85 49.8 79.3 M48 78 C62 76 80 70 91.6 63.5 M50.7 93.7 C66 91 84 86 96 78'
  };
  SHAPES.forEach(function(s){ if(LINES[s.id]) s.detail = LINES[s.id]; });
})();

/* 내 칸: a toilet seen from the side, one outline + a few lines */
var WC_SIDE = 'M11 6.6 C11 5.4 11.8 4.8 13 4.8 C17 4.7 21.2 4.6 25.4 4.6 C26.6 4.6 27.2 5.4 27.2 6.6 L27.4 26.4 C35.8 26.3 44 26.2 52.4 26.2 C54.2 26.2 55 27.2 54.6 28.6 C54.2 30 53.4 30.6 52.4 30.6 C51.6 39 46.8 44.8 40.6 45.6 C41 49.6 42 53 43.6 56.2 C39.2 56.3 34.6 56.4 30.2 56.4 C31.6 53 32.4 49.6 32.6 45.4 C28.6 43.6 26.8 38.8 26.6 34.6 C21.8 34.6 17.2 34.6 12.4 34.6 C11.2 34.6 10.8 34 10.8 32.8 Z';
function iconWC(style){
  style = TOILETS.indexOf(style) >= 0 ? style : 'basic';
  var o = '<svg class="art wc-svg" viewBox="0 0 64 64" width="56" height="56" fill="none" overflow="visible" aria-hidden="true">';
  var floor = A('M8 58.2 C24 58.8 44 58.8 58 58', 'ln');
  if(style === 'squat'){
    return o
      + A('M24.4 6.4 C24.4 5.2 25.2 4.6 26.4 4.6 C30.2 4.4 34 4.4 37.8 4.4 C39 4.4 39.8 5.2 39.8 6.4 C39.8 8.6 39.8 10.8 39.8 13 C39.8 14.2 39 14.8 37.8 14.8 L33.4 14.8 C33.4 18.6 33.6 22.4 33.8 26 L30.4 26.2 C30.6 22.4 30.8 18.6 30.8 14.8 L26.4 14.8 C25.2 14.8 24.4 14.2 24.4 13 C24.4 10.8 24.4 8.6 24.4 6.4 Z', 'ln', 'var(--bg)')
      + A('M14.4 44 C13.6 35.6 21.6 28.6 32 28.6 C42.4 28.6 50.4 35.6 49.6 44 C49 50 42 53.6 32 53.6 C22 53.6 15 50 14.4 44 Z', 'ln', 'var(--bg)')
      + A('M24.4 43.6 C24.4 39.4 27.6 36.6 32 36.6 C36.4 36.6 39.6 39.4 39.6 43.6 C39.6 46.6 36.4 48.4 32 48.4 C27.6 48.4 24.4 46.6 24.4 43.6 Z', 'ln')
      + floor + '</svg>';
  }
  o += A(WC_SIDE, 'ln', 'var(--bg)')
    + A('M27.4 30.6 C35.8 30.6 44 30.6 52.4 30.6', 'ln')
    + A('M14.6 9.4 C16.4 9.3 18.2 9.3 20 9.4', 'ln');
  if(style === 'bidet'){
    o += A('M30.6 21.8 C33 21.6 35.6 21.6 38 21.8 L38.2 26.2 L30.6 26.3 Z', 'ln', 'var(--bg)')
      + '<circle cx="33" cy="24" r="1" fill="var(--ink)"/><circle cx="35.8" cy="24" r="1" fill="var(--ink)"/>';
  } else if(style === 'wood'){
    o += A('M27.4 28.4 C35.8 28.4 44 28.4 53.6 28.4', 'ln')
      + A('M33 27.3 L35.4 27.3 M42 29.5 L44.6 29.5', 'ln');
  } else if(style === 'gold'){
    o += A('M58 8 L58 16 M54 12 L62 12 M5 40 L5 46 M2 43 L8 43 M50 2 L50 6 M48 4 L52 4', 'ln');
  } else if(style === 'fluffy'){
    o += A('M27.4 26.3 C28.4 23.4 31.6 23.4 32.6 26.2 C33.6 23.4 36.8 23.4 37.8 26.2 C38.8 23.4 42 23.4 43 26.2 C44 23.4 47.2 23.4 48.2 26.2 C49.2 23.6 52 23.8 52.6 26.2', 'ln');
    floor = A('M24.6 58.2 C24.6 56 30 55.4 37 55.4 C44 55.4 49.4 56 49.4 58.2 C49.4 60.4 44 61 37 61 C30 61 24.6 60.4 24.6 58.2 Z', 'ln', 'var(--bg)')
      + A('M6 58.2 L24 58.2 M50 58.2 L58 58.2', 'ln');
  }
  return o + floor + '</svg>';
}

/* ===================== v7.6 =====================
   colour comes back for the accessories and the stall items (hats stay line-only),
   the toilet is drawn from the front again (seat ring seen slightly from above). */
var PALC = {red:'#E9705F', yellow:'#F4C64E', blue:'#6E9ED6', pink:'#F3A9BB', green:'#7DBE8C', purple:'#A88AD8',
  brown:'#B98458', cream:'#FFF8EA', white:'#FFFFFF', sky:'#CFE4F4', grey:'#C9C9C9', brass:'#E6C062', terra:'#D9825B'};
function withColour(fn){
  return function(){
    var keep = PAL; PAL = PALC;
    try{ return fn.apply(this, arguments); } finally { PAL = keep; }
  };
}
accFront = withColour(accFront);
accBehind = withColour(accBehind);
iconProp = withColour(iconProp);

function iconWC(style){
  style = TOILETS.indexOf(style) >= 0 ? style : 'basic';
  var o = '<svg class="art wc-svg" viewBox="0 0 64 64" width="56" height="56" fill="none" aria-hidden="true">';
  var floor = A('M10 59 C24 59.6 40 59.6 54 58.8', 'ln');
  if(style === 'squat'){
    return o
      + A('M24.4 6.4 C24.4 5.2 25.2 4.6 26.4 4.6 C30.2 4.4 34 4.4 37.8 4.4 C39 4.4 39.8 5.2 39.8 6.4 C39.8 8.6 39.8 10.8 39.8 13 C39.8 14.2 39 14.8 37.8 14.8 L33.4 14.8 C33.4 18.6 33.6 22.4 33.8 26 L30.4 26.2 C30.6 22.4 30.8 18.6 30.8 14.8 L26.4 14.8 C25.2 14.8 24.4 14.2 24.4 13 C24.4 10.8 24.4 8.6 24.4 6.4 Z', 'ln', 'var(--bg)')
      + A('M14.4 44 C13.6 35.6 21.6 28.6 32 28.6 C42.4 28.6 50.4 35.6 49.6 44 C49 50 42 53.6 32 53.6 C22 53.6 15 50 14.4 44 Z', 'ln', 'var(--bg)')
      + A('M24.4 43.6 C24.4 39.4 27.6 36.6 32 36.6 C36.4 36.6 39.6 39.4 39.6 43.6 C39.6 46.6 36.4 48.4 32 48.4 C27.6 48.4 24.4 46.6 24.4 43.6 Z', 'ln', PALC.sky)
      + floor + '</svg>';
  }
  var gold = style === 'gold';
  var body = gold ? PALC.yellow : ({mint:'#9FD9C2', black:'#555555', space:'#C9D3E0'})[style] || 'var(--bg)';
  var seat = style === 'wood' ? PALC.brown : gold ? PALC.brass : ({throne:'#C94B4B', heart:PALC.pink, space:'#9FB0C6', black:'#555555'})[style] || 'var(--bg)';
  var lid = style === 'fluffy' ? PALC.pink : style === 'throne' ? '#C94B4B' : body;
  /* tank */
  o += A('M20 5.8 C20 4.6 20.8 4 22 4 C28.6 3.9 35.4 3.8 42 3.8 C43.2 3.8 44 4.6 44 5.8 L44.2 15.6 C36 15.7 28 15.8 19.8 15.8 Z', 'ln', body)
    + A('M38.4 7.6 C39.4 7.5 40.6 7.5 41.6 7.6', 'ln');
  /* lid, raised against the tank */
  if(style === 'fluffy'){
    o += A('M20.6 24.2 L20.8 15.4 C20.4 12.8 22.6 11.2 25 12 C26 9.8 29.4 9.8 30.4 11.8 C31.6 9.8 34.8 9.8 36 11.8 C37 9.8 40.4 10 41.4 12 C43.6 11.4 45.2 13.2 44 15.6 L43.4 24 Z', 'ln', lid);
  } else {
    o += A('M20.8 24.2 L21 15.6 C21 13 23 11.6 26 11.6 C30 11.5 34 11.5 38 11.4 C41 11.4 43 12.8 43 15.6 L43.2 24 Z', 'ln', lid);
  }
  /* bowl + foot as one outline */
  o += A('M12.4 28.6 C13.4 37 19.6 43.6 26.6 45 C26 48.6 25.2 52 24 55 C23.6 56 24.2 56.6 25.2 56.6 C29.8 56.5 34.2 56.5 38.8 56.4 C39.8 56.4 40.4 55.8 40 54.8 C38.8 51.8 38 48.4 37.4 45 C44.4 43.6 50.6 37 51.6 28.6', 'ln', body);
  /* seat ring seen from a little above, and the opening */
  o += A('M32 20.8 C44 20.8 52.6 24 52.6 28.4 C52.6 32.8 44 35.6 32 35.6 C20 35.6 11.4 32.8 11.4 28.4 C11.4 24 20 20.8 32 20.8 Z', 'ln', seat)
    + A('M32 24.4 C39.6 24.4 44.6 26.2 44.6 28.6 C44.6 31 39.6 32.6 32 32.6 C24.4 32.6 19.4 31 19.4 28.6 C19.4 26.2 24.4 24.4 32 24.4 Z', 'ln', 'var(--bg)');
  if(style === 'bidet'){
    o += A('M51.8 25.2 C54.4 24.8 57.4 25 58.2 26.4 C58.8 28 58.8 30.6 58 32 C56.6 33 54 33 51.8 32.4', 'ln', PALC.grey)
      + '<circle cx="54.6" cy="28.8" r="1.1" fill="' + PALC.blue + '"/><circle cx="56.6" cy="28.8" r="1.1" fill="' + PALC.red + '"/>';
  } else if(style === 'gold'){
    o += A('M8 6 L8 13 M4.5 9.5 L11.5 9.5 M56.6 38 L56.6 44 M53.6 41 L59.6 41 M51 4.4 L51 8.4 M49 6.4 L53 6.4', 'ln');
  } else if(style === 'fluffy'){
    floor = A('M13.4 59 C13.4 56.4 21 55.4 32 55.4 C43 55.4 50.6 56.4 50.6 59 C50.6 61.4 43 62.2 32 62.2 C21 62.2 13.4 61.4 13.4 59 Z', 'ln', PALC.pink);
  }
  return o + floor + '</svg>';
}

/* ===================== v7.7 =====================
   - drawings: same weight, but each outline gets a small hand wobble
   - state (변비/설사) no longer changes the poo: a small icon sits beside it
   - toilet with a proper tank, urinal last, a wig instead of the beret,
     a new chunky shape in place of the round one */
var HAND = 0;
var _handCache = {};
function handD(d, amp){
  var key = d + '|' + amp;
  if(_handCache[key]) return _handCache[key];
  var seed = hashSeed(d) * 3;
  var out = splitSub(d).map(function(sub, si){
    var closed = /z\s*$/i.test(sub);
    var pts = samplePath(sub, Math.max(.9, amp * 3.2));
    if(pts.length < 3) return sub;
    var n = pts.length, p1 = srnd(seed + si) * 6.283, p2 = srnd(seed + si + 5) * 6.283;
    var res = [];
    for(var i=0;i<n;i++){
      var a = pts[i];
      var pv = pts[Math.max(0, i - 1)], nx = pts[Math.min(n - 1, i + 1)];
      if(closed && (i === 0 || i === n - 1)){ pv = pts[n - 2]; nx = pts[1]; }
      var dx = nx[0] - pv[0], dy = nx[1] - pv[1], L = Math.sqrt(dx * dx + dy * dy) || 1;
      var u = i / (n - 1);
      var off = amp * (.65 * Math.sin(6.283 * u * 2 + p1) + .35 * Math.sin(6.283 * u * 5 + p2));
      if(!closed){ var e = Math.min(1, Math.min(i, n - 1 - i) / 3); off *= e; }   /* line ends stay put */
      res.push([a[0] - dy / L * off, a[1] + dx / L * off]);
    }
    if(closed) res[n - 1] = res[0];
    return smoothD(res, closed);
  }).join(' ');
  _handCache[key] = out;
  return out;
}
var _A0 = A;
A = function(d, cls, fill, extra){
  if(HAND > 0 && (cls === 'ln' || cls === 'lt')) d = handD(d, HAND);
  return _A0(d, cls, fill, extra);
};
function withHand(fn, amp){
  return function(){
    var keep = HAND; HAND = amp;
    try{ return fn.apply(this, arguments); } finally { HAND = keep; }
  };
}

/* ---- shapes & hats ---- */
(function(){
  SHAPES.forEach(function(s){
    if(s.id === 'round'){
      s.d = 'M58 36 C52 40 53 46 58 48 C44 49 36 56 39 64 C26 67 20 78 22 90 C24 99 32 103 60 103 C88 103 96 99 98 90 C100 78 94 67 81 64 C84 56 76 49 63 48 C68 45 66 39 58 36 Z';
      s.detail = 'M39 64 C48 62 57 56 63 48 M22 90 C42 88 66 78 81 64';
      s.top = [58, 44];
    }
  });
  HALF_W.round = 38;
  NECK.round = [60, 64, 22];
})();
HAT_ART.beret = function(){
  /* sleek bob: side-swept fringe, ends tapering to points at the chin */
  return A('M-23.8 12.6 C-27 3 -26.4 -7.6 -20.6 -14.8 C-14.8 -21.8 -7 -24.6 .2 -24.6 C7.4 -24.6 15 -21.8 20.8 -14.8 C26.6 -7.6 27.2 3 24 12.6 C22.8 16.6 20.8 20.4 18 23.6 C17.6 15.4 17 8.2 15.4 2.6 C12.6 -2.2 7.4 -5.6 1.6 -7.4 C-3.4 -2.6 -9.6 .6 -15.6 2.4 C-17 8.2 -17.6 15.4 -18 23.6 C-20.8 20.4 -22.6 16.6 -23.8 12.6 Z', 'ln', PAL.brown)
    + A('M4.6 -24.2 C1.6 -18.6 -4.6 -12.6 -12.6 -8.8', 'lt')
    + A('M-21 -2.4 C-21.4 5 -21 12 -19.6 18 M21.2 -2.4 C21.6 5 21.2 12 19.8 18 M9.6 -14.6 C12.6 -10.6 14.6 -6.4 15.6 -1.6', 'lt');
};
I18N.ko['hat.beret'] = '가발'; void '가발'; I18N.en['hat.beret'] = 'Wig'; void 'Wig'; I18N.ja['hat.beret'] = 'かつら'; void 'かつら'; I18N.zh['hat.beret'] = '假发'; void '假发';
I18N.ko['shape.round'] = '꼬마'; I18N.en['shape.round'] = 'Little';
/* outline on top again where colour bands were laid over it */
(function(){
  var beanie = HAT_ART.beanie, cone = HAT_ART.cone;
  HAT_ART.beanie = function(){
    return beanie() + A('M-24.2 4.8 C-25 1.6 -24.6 -1.4 -22.6 -2.6 C-22.6 -13.4 -12.6 -19.8 .4 -19.8 C12.8 -19.8 22.6 -13.4 22.8 -2.6 C24.8 -1.4 25.2 1.6 24.4 4.6 C8.4 2.4 -8.2 2.6 -24.2 4.8 Z', 'ln');
  };
  HAT_ART.cone = function(){
    return cone() + A('M-17.2 2.4 C-11 -8 -4.6 -18 1.8 -28 C7.6 -18.6 13 -8.6 18.4 2 C7 5.8 -6.2 6 -17.2 2.4 Z', 'ln');
  };
})();

/* ---- state icons: sweat drop (변비), emergency buzzer (설사) ---- */
function moodPaths(mood, x, y, s){
  var p = function(dx, dy){ return f1(x + dx * s) + ' ' + f1(y + dy * s); };
  if(mood === 'hard'){
    return A('M' + p(0, 0) + ' C' + p(-4.4, 6) + ' ' + p(-6, 9.6) + ' ' + p(-6, 12.4) + ' C' + p(-6, 16) + ' ' + p(-3.4, 18.2) + ' ' + p(0, 18.2)
      + ' C' + p(3.4, 18.2) + ' ' + p(6, 16) + ' ' + p(6, 12.4) + ' C' + p(6, 9.6) + ' ' + p(4.4, 6) + ' ' + p(0, 0) + ' Z', 'ln', '#CFE4F4')
      + A('M' + p(-2.6, 11.4) + ' C' + p(-2.8, 13) + ' ' + p(-2.2, 14.4) + ' ' + p(-1, 15.2), 'lt');
  }
  if(mood === 'loose'){
    return A('M' + p(-8, 8) + ' C' + p(-8, 2.4) + ' ' + p(-4.4, -.6) + ' ' + p(0, -.6) + ' C' + p(4.4, -.6) + ' ' + p(8, 2.4) + ' ' + p(8, 8) + ' Z', 'ln', '#E9705F')
      + A('M' + p(-11, 8) + ' C' + p(-4, 7.8) + ' ' + p(4, 7.8) + ' ' + p(11, 8) + ' L' + p(10.4, 13.4) + ' C' + p(4, 13.6) + ' ' + p(-4, 13.6) + ' ' + p(-10.4, 13.4) + ' Z', 'ln', 'var(--bg)')
      + A('M' + p(-3.4, 2.6) + ' C' + p(-2.4, 1.8) + ' ' + p(-1.2, 1.4) + ' ' + p(0, 1.4), 'lt')
      + A('M' + p(-12.6, -2) + ' L' + p(-10, .2) + ' M' + p(12.6, -2) + ' L' + p(10, .2) + ' M' + p(0, -6) + ' L' + p(0, -3.4), 'lt');
  }
  return '';
}
function iconMood(mood){
  if(mood !== 'hard' && mood !== 'loose') return '';
  return '<svg class="art mood-svg" viewBox="-14 -8 28 24" width="22" height="19" fill="none" aria-hidden="true">'
    + withHand(function(){ return moodPaths(mood, 0, mood === 'hard' ? -6 : 0, mood === 'hard' ? .95 : 1); }, .25)() + '</svg>';
}
/* inside pooSVG: the icon sits at the lower right of the body, the poo itself is untouched */
auraSVG = function(sh, sx, mood, sw, opt){
  var out = '';
  var edge = (HALF_W[sh.id] || 47) * sx;
  var L = 60 - edge, R = 60 + edge;
  if(!opt.noBadge && (mood === 'hard' || mood === 'loose')) out += moodPaths(mood, Math.min(R + 16, 136), mood === 'hard' ? 72 : 88, 1.25);
  if(opt.stink){
    out += A('M' + f1(L + 4) + ' 40 c-4 -4 4 -7 0 -11 c-4 -4 4 -7 0 -11 M' + f1(R - 4) + ' 36 c4 -4 -4 -7 0 -11 c4 -4 -4 -7 0 -11', 'lt', null, ' opacity=".45"');
  }
  return out;
};

/* ---- toilet: taller, wider tank; mat removed; urinal-like one last ---- */
TOILETS = ['basic', 'bidet', 'wood', 'gold', 'fluffy', 'mint', 'black', 'stripe', 'heart', 'smart', 'retro', 'throne', 'kid', 'space', 'squat'];
I18N.ko['wc.squat'] = '소변기'; I18N.en['wc.squat'] = 'Urinal';
function iconWC(style){
  style = TOILETS.indexOf(style) >= 0 ? style : 'basic';
  var o = '<svg class="art wc-svg" viewBox="0 0 64 64" width="56" height="56" fill="none" aria-hidden="true">';
  var floor = A('M10 59 C24 59.6 40 59.6 54 58.8', 'ln');
  if(style === 'squat'){
    return o
      + A('M24.4 6.4 C24.4 5.2 25.2 4.6 26.4 4.6 C30.2 4.4 34 4.4 37.8 4.4 C39 4.4 39.8 5.2 39.8 6.4 C39.8 8.6 39.8 10.8 39.8 13 C39.8 14.2 39 14.8 37.8 14.8 L33.4 14.8 C33.4 18.6 33.6 22.4 33.8 26 L30.4 26.2 C30.6 22.4 30.8 18.6 30.8 14.8 L26.4 14.8 C25.2 14.8 24.4 14.2 24.4 13 C24.4 10.8 24.4 8.6 24.4 6.4 Z', 'ln', 'var(--bg)')
      + A('M14.4 44 C13.6 35.6 21.6 28.6 32 28.6 C42.4 28.6 50.4 35.6 49.6 44 C49 50 42 53.6 32 53.6 C22 53.6 15 50 14.4 44 Z', 'ln', 'var(--bg)')
      + A('M24.4 43.6 C24.4 39.4 27.6 36.6 32 36.6 C36.4 36.6 39.6 39.4 39.6 43.6 C39.6 46.6 36.4 48.4 32 48.4 C27.6 48.4 24.4 46.6 24.4 43.6 Z', 'ln', PALC.sky)
      + floor + '</svg>';
  }
  var gold = style === 'gold';
  var body = gold ? PALC.yellow : ({mint:'#9FD9C2', black:'#5A5A5A', space:'#C9D3E0', ocean:'#CFE4F4'})[style] || 'var(--bg)';
  var seat = style === 'wood' ? PALC.brown : gold ? PALC.brass : ({throne:'#C94B4B', heart:PALC.pink, space:'#9FB0C6', black:'#5A5A5A', mint:'#9FD9C2'})[style] || 'var(--bg)';
  var lid = style === 'fluffy' ? PALC.pink : style === 'throne' ? '#C94B4B' : body;
  /* tank: as wide as the seat, about a third of the height */
  o += A('M14.4 4.6 C14.4 3.2 15.4 2.4 17 2.4 C27 2.2 37 2.2 47 2.2 C48.6 2.2 49.6 3.2 49.6 4.6 L49.8 20.4 C38 20.6 26 20.6 14.2 20.6 Z', 'ln', body)
    + A('M14.6 7.4 C26 7.2 38 7.2 49.6 7.4', 'lt')
    + A('M41.4 11.4 C42.8 11.3 44.4 11.3 45.8 11.4', 'ln');
  if(style === 'fluffy'){
    o += A('M19.4 24.6 L19.6 17.4 C19 14.8 21.4 13 24 13.8 C25 11.6 28.6 11.6 29.6 13.6 C30.8 11.6 34.2 11.6 35.4 13.6 C36.4 11.6 40 11.8 41 13.8 C43.4 13 45.4 14.8 44.6 17.4 L44.6 24.4 Z', 'ln', lid);
  } else {
    o += A('M19.6 24.6 L19.8 17.6 C19.8 15 21.8 13.6 24.8 13.6 C29.6 13.5 34.4 13.5 39.2 13.4 C42.2 13.4 44.2 14.8 44.2 17.6 L44.4 24.4 Z', 'ln', lid);
  }
  o += A('M12.4 28.6 C13.4 37 19.6 43.6 26.6 45 C26 48.6 25.2 52 24 55 C23.6 56 24.2 56.6 25.2 56.6 C29.8 56.5 34.2 56.5 38.8 56.4 C39.8 56.4 40.4 55.8 40 54.8 C38.8 51.8 38 48.4 37.4 45 C44.4 43.6 50.6 37 51.6 28.6', 'ln', body)
    + A('M32 20.8 C44 20.8 52.6 24 52.6 28.4 C52.6 32.8 44 35.6 32 35.6 C20 35.6 11.4 32.8 11.4 28.4 C11.4 24 20 20.8 32 20.8 Z', 'ln', seat)
    + A('M32 24.4 C39.6 24.4 44.6 26.2 44.6 28.6 C44.6 31 39.6 32.6 32 32.6 C24.4 32.6 19.4 31 19.4 28.6 C19.4 26.2 24.4 24.4 32 24.4 Z', 'ln', 'var(--bg)');
  if(style === 'bidet'){
    o += A('M51.8 25.2 C54.4 24.8 57.4 25 58.2 26.4 C58.8 28 58.8 30.6 58 32 C56.6 33 54 33 51.8 32.4', 'ln', PALC.grey)
      + '<circle cx="54.6" cy="28.8" r="1.1" fill="' + PALC.blue + '"/><circle cx="56.6" cy="28.8" r="1.1" fill="' + PALC.red + '"/>';
  } else if(gold){
    o += A('M7 26 L7 33 M3.5 29.5 L10.5 29.5 M57 38 L57 44 M54 41 L60 41', 'ln');
  } else if(style === 'stripe'){
    o += A('M20 2.6 C19.8 8.6 19.8 14.6 20 20.4 M28 2.4 C27.8 8.4 27.8 14.4 28 20.4 M36 2.4 C35.8 8.4 35.8 14.4 36 20.4 M44 2.4 C43.8 8.4 43.8 14.4 44 20.4', 'lt', null, ' stroke="' + PALC.red + '"');
  } else if(style === 'heart'){
    o += A('M32 18.2 C28.4 15.4 25.8 13.4 26 10.8 C26.2 8.8 28.6 7.8 30.4 9 C31 9.4 31.6 10 32 10.8 C32.4 10 33 9.4 33.6 9 C35.4 7.8 37.8 8.8 38 10.8 C38.2 13.4 35.6 15.4 32 18.2 Z', 'ln', PALC.pink);
  } else if(style === 'ocean'){
    o += A('M15.4 14.4 C19 12.4 22.6 12.4 26.2 14.4 C29.8 16.4 33.4 16.4 37 14.4 C40.6 12.4 44.2 12.4 48.4 14.4', 'lt', null, ' stroke="' + PALC.blue + '"');
  } else if(style === 'flower'){
    o += A('M32 11.4 C33.4 8.4 37 9.2 35.6 12 C38.6 12 38.6 15.4 35.6 15.2 C36.8 18 33.4 18.8 32 16 C30.6 18.8 27.2 18 28.4 15.2 C25.4 15.4 25.4 12 28.4 12 C27 9.2 30.6 8.4 32 11.4 Z', 'ln', PALC.pink) + A('M32 13.6 l.1 0', 'lt', null, ' stroke-width="3" stroke="' + PALC.yellow + '"');
  } else if(style === 'smart'){
    o += A('M52 23.4 C54.6 23.2 56.4 23.6 56.8 24.8 C57.2 27 57.2 30 56.6 32.2 C55.6 33 53.6 33.2 51.6 32.8', 'ln', '#EAF2FA')
      + A('M53.8 26 L55 26 M53.8 28.4 L55 28.4 M53.8 30.8 L55 30.8', 'lt', null, ' stroke="' + PALC.blue + '"')
      + A('M22 11 C26 10.8 38 10.8 42 11', 'lt', null, ' stroke="' + PALC.blue + '"');
  } else if(style === 'retro'){
    o += A('M50 9 C52.4 9 53.6 10 53.6 12 L53.8 30 M53.8 30 C53.8 31.6 52.8 32.6 51.6 32.6', 'ln')
      + A('M53.6 12 C54.8 16 55 20 54.6 24 M54.4 24 C55.4 24 56 24.8 56 25.6 C56 26.6 55.2 27.2 54.4 27.2 C53.6 27.2 53 26.6 53 25.6 C53 24.8 53.6 24 54.4 24 Z', 'lt', PALC.brass);
  } else if(style === 'throne'){
    o += A('M24 2.6 L23 -4 L28 0 L32 -6 L36 0 L41 -4 L40 2.6 Z', 'ln', PALC.yellow);
  } else if(style === 'kid'){
    o += A('M20.4 52 C27.4 51.6 36.6 51.6 43.6 52 C44 54.4 44 56.6 43.6 58.6 C36.6 59 27.4 59 20.4 58.6 C20 56.6 20 54.4 20.4 52 Z', 'ln', PALC.sky);
  } else if(style === 'space'){
    o += A('M42 2.4 C42.4 -1 43.4 -3.4 45 -5 M45.6 -7.6 C46.8 -7.6 47.4 -6.8 47.4 -5.8 C47.4 -4.8 46.6 -4 45.6 -4 C44.6 -4 43.8 -4.8 43.8 -5.8 C43.8 -6.8 44.6 -7.6 45.6 -7.6 Z', 'ln', PALC.red)
      + A('M18.6 12 C19.4 11.4 20.4 11.4 21.2 12 M24.6 12 C25.4 11.4 26.4 11.4 27.2 12', 'lt');
  }
  return o + floor + '</svg>';
}

/* hand wobble on every drawing (amplitude in each drawing's own units) */
pooSVG = withHand(pooSVG, .9);
iconDoor = withHand(iconDoor, .45);
iconWC = withHand(iconWC, .55);
iconProp = withHand(iconProp, .25);

/* tiny poo for the calendar */
function iconTinyPoo(){
  return '<svg class="tiny-poo" viewBox="0 0 16 14" width="12" height="11" aria-hidden="true"><path d="M8 1.6 C6 2.2 5.6 3.6 6.6 4.4 C4.4 4.8 3.4 6.2 4.2 7.4 C2 8 1.2 9.6 1.8 11 C2.4 12.4 4.4 12.6 8 12.6 C11.6 12.6 13.6 12.4 14.2 11 C14.8 9.6 14 8 11.8 7.4 C12.6 6.2 11.6 4.8 9.6 4.6 C10.4 3.4 9.6 2 8 1.6 Z" fill="var(--bg)" stroke="var(--ink)" stroke-width="1.3" stroke-linejoin="round"/></svg>';
}

/* hats in colour, like the other decorations */
(function(){
  var wiz = HAT_ART.wizard;
  HAT_ART.wizard = function(){ return wiz().replace('var(--bg)', PAL.purple); };
  Object.keys(HAT_ART).forEach(function(k){ HAT_ART[k] = withColour(HAT_ART[k]); });
})();
/* option tiles show the item alone; the applied look stays in the big preview */
var itemSVG = withHand(function(kind, id, cfg){
  /* drawn exactly as it sits on the current poo, so the tile matches the preview */
  var sh = shapeById(cfg && cfg.shape || 'classic'), sx = THICKS[cfg && cfg.thick != null ? cfg.thick : 1] || 1, inner = '';
  if(kind === 'hat') inner = id === 'beret' ? wigPaths(sh, sx) : '<g transform="' + hatTransform(sh, sx, id) + '">' + HAT_ART[id]() + '</g>';
  else inner = accBehind(id, sh, sx) + accFront(id, sh, sx);
  return '<svg class="art item-svg" data-fit="1" data-min="' + (kind === 'hat' ? (id === 'beret' ? 70 : 52) : 48) + '" viewBox="-40 -40 200 200" width="64" height="64" fill="none" aria-hidden="true"><g>' + inner + '</g></svg>';
}, .9);
function fitItems(root){
  var list = (root || document).querySelectorAll('svg[data-fit]');
  for(var i=0;i<list.length;i++){
    var sv = list[i], g = sv.firstChild;
    try{
      var b = g.getBBox();
      if(!b.width || !b.height) continue;
      /* one scale per menu so line weights match across tiles: hats ~64 units, items at least 72 */
      var minSide = sv.getAttribute('data-min') ? +sv.getAttribute('data-min') : 0;
      var side = Math.max(b.width, b.height, minSide) + 8;
      sv.setAttribute('viewBox', (b.x + b.width / 2 - side / 2).toFixed(1) + ' ' + (b.y + b.height / 2 - side / 2).toFixed(1) + ' ' + side.toFixed(1) + ' ' + side.toFixed(1));
      if(sv.closest('#app[data-view="mypoo"]')){ var px = (side * KK_H / KK_VB.h).toFixed(1); sv.style.setProperty('width', px + 'px', 'important'); sv.style.setProperty('height', px + 'px', 'important'); }
      sv.removeAttribute('data-fit');
    }catch(e){}
  }
}
(function(){
  var pf = paintFrames;
  paintFrames = function(root){ var r = pf.apply(this, arguments); fitItems(root); return r; };
})();
/* ===================== v7.8 =====================
   - 응원 → 힘주기 ("{name} 끄응"), shown low on the screen
   - menu icons drawn like the other pictures */
(function(){
  var ko = {
    'room.holdHint':'길게 누르면 힘주기, 두 번 누르면 노크',
    'room.cheer':'{name} 끄응', 'toast.cheerSent':'{name} 끄응',
    'n.cheered':'{name} 끄응', 'nt.cheer':'힘주기',
    'tag.cheers':'끄응 {n}', 'tag.knocks':'똑똑 {n}',
    'room.pushSub':'배출 진행률 {n}/{goal}'
  };
  var en = {
    'room.holdHint':'Hold to push for them, double-tap to knock',
    'room.cheer':'{name} hnngh', 'toast.cheerSent':'{name} hnngh',
    'n.cheered':'{name} hnngh', 'nt.cheer':'push',
    'tag.cheers':'hnngh {n}', 'tag.knocks':'knock {n}',
    'room.pushSub':'Evacuation progress {n}/{goal}'
  };
  var ja = {'room.holdHint':'長押しでいきむ、ダブルタップでノック', 'room.cheer':'{name} ふんっ', 'n.cheered':'{name} ふんっ', 'tag.cheers':'ふんっ {n}', 'tag.knocks':'コンコン {n}'};
  var zh = {'room.holdHint':'长按一起使劲，双击敲门', 'room.cheer':'{name} 嗯——', 'n.cheered':'{name} 嗯——', 'tag.cheers':'使劲 {n}', 'tag.knocks':'咚咚 {n}'};
  [['ko', ko], ['en', en], ['ja', ja], ['zh', zh]].forEach(function(p){
    for(var k in p[1]) I18N[p[0]][k] = p[1][k];
  });
})();

/* toast(msg, low): a push toast sits near the bottom */
(function(){
  var base = toast;
  toast = function(msg, low){
    var layer = document.getElementById('toast-layer');
    if(layer){
      layer.classList.toggle('low', !!low);
      /* a sheet is open: sit just above it instead of on top of its contents */
      var pn = document.querySelector('.panel');
      var vw = window.innerWidth;
      layer.style.setProperty('bottom', pn && vw < 900 ? (window.innerHeight - pn.getBoundingClientRect().top + 10) + 'px' : '', pn && vw < 900 ? 'important' : '');
    }
    return base(msg);
  };
})();

/* knock / push counts: two little stickers */
function stallCounts(s){
  if(!s || !(s.knocks || s.cheers)) return '';
  return '<span class="stall-counts">'
    + (s.knocks ? '<span class="cnt k"><span>' + esc(t('tag.knocks', {n:s.knocks})) + '</span></span>' : '')
    + (s.cheers ? '<span class="cnt c"><span>' + esc(t('tag.cheers', {n:s.cheers})) + '</span></span>' : '')
    + '</span>';
}

/* menu icons, in the same hand as the poo and the toilets */
function navArt(inner, vb){
  return '<svg class="art nav-art" viewBox="' + vb + '" fill="none" aria-hidden="true">' + inner + '</svg>';
}
function pooPaths(fill){
  var sh = shapeById('classic');
  var ds = Object.prototype.toString.call(sh.d) === '[object Array]' ? sh.d : [sh.d];
  var o = '';
  for(var i=0;i<ds.length;i++) o += A(ds[i], 'ln', fill);
  if(sh.detail) o += A(sh.detail, 'lt');
  return o;
}
navHome = withHand(function(){
  return navArt(
    A('M7 21.4 L24 7.6 L41 21.2', 'ln')
    + A('M11 18.4 C10.8 26 10.8 33.8 11 41.2 C19.6 41.4 28.4 41.4 37 41.2 C37.2 33.8 37.2 26 37 18.2 L24 8.2 Z', 'ln', 'var(--bg)')
    + A('M20 41.2 C19.8 37 19.8 33 20 29.4 C22.6 29.2 25.4 29.2 28 29.4 C28.2 33 28.2 37 28 41.2', 'ln', 'var(--nav-accent, var(--bg))')
    + A('M29.6 11.6 L29.6 6.4 L33.6 6.4 L33.6 14.8', 'ln', 'var(--bg)'),
    '4 2 40 42');
}, .5);
navPoo = withHand(function(){
  return navArt(pooPaths('var(--bg)'), '-8 14 136 100');
}, .9);
navFriends = withHand(function(){
  return navArt(
    '<g transform="translate(58 22) scale(.78)">' + pooPaths('var(--bg)') + '</g>'
    + '<g transform="translate(0 10)">' + pooPaths('var(--bg)') + '</g>',
    '-6 18 166 104');
}, .9);
navGear = withHand(function(){
  var pts = [];
  for(var i=0;i<=84;i++){
    var a = i / 84 * Math.PI * 2;
    var r = 15.6 + 3.2 * Math.max(-.6, Math.min(.6, Math.cos(a * 8) * 1.6));
    pts.push((24 + r * Math.cos(a)).toFixed(2) + ' ' + (24 + r * Math.sin(a)).toFixed(2));
  }
  var gear = 'M' + pts.join(' L') + ' Z';
  return navArt(A(gear, 'ln', 'var(--bg)')
    + A('M24 17.6 C27.8 17.6 30.4 20.4 30.4 24 C30.4 27.6 27.8 30.4 24 30.4 C20.2 30.4 17.6 27.6 17.6 24 C17.6 20.4 20.2 17.6 24 17.6 Z', 'ln', 'var(--bg)'),
    '3 3 42 42');
}, .45);

iconBell = withHand(function(){
  return '<svg class="art bell-art" viewBox="2 0 44 46" fill="none" aria-hidden="true">'
    + A('M24 4.6 C25.8 4.6 26.8 5.8 26.6 7.4 C26.4 8.6 25.4 9.2 24 9.2 C22.6 9.2 21.6 8.6 21.4 7.4 C21.2 5.8 22.2 4.6 24 4.6 Z', 'ln', 'var(--bg)')
    + A('M10.4 34.2 C13.2 31.2 13.8 27.4 13.8 22.6 C13.8 14.6 18 9 24 9 C30 9 34.2 14.6 34.2 22.6 C34.2 27.4 34.8 31.2 37.6 34.2 C29 35.8 19 35.8 10.4 34.2 Z', 'ln', 'var(--bg)')
    + A('M17.6 16.6 C18.4 14.2 20 12.6 22 12', 'lt')
    + A('M20.2 35.6 C20.4 38.6 22 40.4 24 40.4 C26 40.4 27.6 38.6 27.8 35.6', 'ln', 'var(--bg)');
}, .4);
/* ===================== v7.9 =====================
   - hats follow the shape and thickness of the poo
   - knock lines never repeat back to back; knock/push toasts sit low
   - mini game: drawings in the same hand, poo gags, no speed readout */

/* hats: measure the top tier of the (thickened) shape and fit the hat to it */
var _hatFit = {};
function hatFit(sh, sx){
  var key = sh.id + '|' + sx;
  if(_hatFit[key]) return _hatFit[key];
  function measure(s, k){
    var all = Object.prototype.toString.call(s.d) === '[object Array]' ? s.d : [s.d];
    var pts = [];
    all.forEach(function(d){ splitSub(d).forEach(function(sub){ samplePath(sub, 1).forEach(function(p){ pts.push([60 + (p[0] - 60) * k, p[1]]); }); }); });
    var minY = Infinity;
    pts.forEach(function(p){ if(p[1] < minY) minY = p[1]; });
    var L = Infinity, R = -Infinity;
    pts.forEach(function(p){ if(p[1] > minY + 5 && p[1] < minY + 15){ if(p[0] < L) L = p[0]; if(p[0] > R) R = p[0]; } });
    if(!isFinite(L)){ L = 50; R = 70; }
    return {half:(R - L) / 2, cx:(L + R) / 2, top:minY};
  }
  var ref = measure(shapeById('classic'), 1);
  var m = measure(sh, sx);
  var sc = Math.max(.72, Math.min(1.3, m.half / ref.half));
  var cx = sh.id === 'classic' ? 60 + (sh.top[0] - 60) * sx : m.cx;
  var refOff = shapeById('classic').top[1] - ref.top;
  var y = Math.abs(m.cx - (60 + (sh.top[0] - 60) * sx)) > 6 ? m.top + refOff * sc : sh.top[1] + (m.top - ref.top) * .3;
  return (_hatFit[key] = {sc:sc, x:cx, y:y});
}
var HAT_BOOST = {bunny:[1.15, -2], cat:[1.2, -2], propeller:[1.22, -2], grad:[1.22, -2], cowboy:[1.2, -2], tophat:[1.18, -2], chef:[1.22, -2], wizard:[1.22, -2], tp:[1.22, -2], crown:[1.2, -2]};
function hatTransform(sh, sx, id){
  var f = hatFit(sh, sx), b = HAT_BOOST[id] || [1, 0];
  return 'translate(' + f.x.toFixed(2) + ' ' + (f.y + b[1] * f.sc).toFixed(2) + ') scale(' + (f.sc * b[0]).toFixed(3) + ')';
}

/* knock: pick a line that differs from the last one */
var _lastKnock = -1;
function freshKnockLine(){
  var m = Math.floor(Math.random() * KNOCK_LINES);
  if(m === _lastKnock) m = (m + 1 + Math.floor(Math.random() * (KNOCK_LINES - 1))) % KNOCK_LINES;
  _lastKnock = m;
  return m;
}

/* ---------- mini game art ---------- */
var GAME_TOILETS = ['basic', 'basic', 'wood', 'gold', 'bidet', 'fluffy'];
iconToilet = function(style){ return iconWC(style || 'basic'); };
iconTP = withHand(function(size){
  var w = size || 26;
  return '<svg class="art tp-svg" viewBox="0 0 64 64" width="' + w + '" height="' + w + '" fill="none" aria-hidden="true">'
    + A('M12.6 17.4 C12.4 25.6 12.4 33.8 12.6 42.2 C12.8 48 19 51.2 26.4 51.2 C33.8 51.2 40 48 40.2 42.2 C40.4 33.8 40.4 25.6 40.2 17.4', 'ln', 'var(--bg)')
    + A('M26.4 11.4 C34 11.4 40.2 14 40.2 17.4 C40.2 20.8 34 23.4 26.4 23.4 C18.8 23.4 12.6 20.8 12.6 17.4 C12.6 14 18.8 11.4 26.4 11.4 Z', 'ln', 'var(--bg)')
    + A('M26.4 14.8 C29.2 14.8 31 16 31 17.4 C31 18.8 29.2 20 26.4 20 C23.6 20 21.8 18.8 21.8 17.4 C21.8 16 23.6 14.8 26.4 14.8 Z', 'ln', PALC.grey)
    + A('M34.6 50 C34.8 53.4 35 56.8 35.2 60.2 C38.2 59.8 41.2 59.8 44.2 60 C44 55.6 43.6 51.2 43 46.8', 'ln', 'var(--bg)')
    + A('M35.4 55.4 C38 55.2 40.8 55.2 43.4 55.4', 'lt');
}, .4);
var iconPotato = withHand(function(size){
  var w = size || 40;
  return '<svg class="art potato-svg" viewBox="0 0 64 64" width="' + w + '" height="' + w + '" fill="none" aria-hidden="true">'
    + A('M10.4 38 C7.6 30.4 12.6 21.8 22.4 18.6 C32.6 15.2 46.4 15.8 52.4 22.6 C57.6 28.6 55.4 37.8 46.6 42.6 C37.6 47.6 22.6 48.6 15.6 45 C13.2 43.6 11.4 41 10.4 38 Z', 'ln', '#B86B9A')
    + A('M22 28.6 C23 28.2 24 28.2 25 28.6 M36.6 25.2 C37.6 24.8 38.6 24.8 39.6 25.2 M30.4 37.6 C31.4 37.2 32.4 37.2 33.4 37.6 M44.6 33.4 C45.4 33 46.2 33 47 33.4', 'lt')
    + A('M52.4 22.6 C54.6 19.2 57.6 17.6 60.4 18', 'ln');
}, .4);
function puffSVG(){
  return '<svg class="art" viewBox="0 0 40 30" fill="none" aria-hidden="true">'
    + A('M8.4 22.6 C3.6 22.4 2.4 16.6 6.6 14.6 C5.6 9.4 11.6 6.4 15.4 9.4 C17.6 4.6 25.4 4.4 27.6 9.6 C32.6 8 37 12.6 34.6 17 C38 19.6 35.6 24.4 31 23.8 C23.6 24.4 15.8 24.4 8.4 22.6 Z', 'ln', '#DDEBC8') + '</svg>';
}
function flySVG(){
  return '<svg class="art fly-svg" viewBox="0 0 20 16" fill="none" aria-hidden="true">'
    + A('M6.4 4.6 C4.6 1.6 7.6 .4 9.4 3.4 M12.2 3.6 C13.8 .6 16.8 1.8 14.4 4.8', 'lt')
    + A('M10.2 4.6 C13.2 4.6 14.8 6.8 14.6 9.4 C14.4 12 12.4 13.6 10 13.6 C7.6 13.6 5.6 12 5.6 9.4 C5.6 6.8 7.4 4.6 10.2 4.6 Z', 'ln', 'var(--ink)') + '</svg>';
}

/* little words that pop over the poo */
function gamePop(txt, cls){
  var pl = document.getElementById('g-player');
  if(!pl) return;
  var el = document.createElement('span');
  el.className = 'g-pop' + (cls ? ' ' + cls : '');
  el.textContent = txt;
  pl.appendChild(el);
  setTimeout(function(){ if(el.parentNode) el.parentNode.removeChild(el); }, 900);
}
function gamePuff(){
  if(!MINI.stage) return;
  var el = document.createElement('span');
  el.className = 'g-puff';
  el.innerHTML = puffSVG();
  el.style.bottom = 'calc(var(--gy) + ' + (MINI.py + 6).toFixed(0) + 'px)';
  MINI.stage.appendChild(el);
  setTimeout(function(){ if(el.parentNode) el.parentNode.removeChild(el); }, 700);
}
var GAME_POPS = {
  hit:['철퍽!', '으악', '쿵!'],
  tp:['슥슥', '휴지 GET'],
  potato:['뿡!', '뿌웅~'],
  mile:['뿌직', '끄응', '쾌변 중']
};
function popLine(kind){
  var lang = state.lang || 'ko';
  if(lang !== 'ko'){
    var en = {hit:['Splat!', 'Oof'], tp:['Wipe!'], potato:['Toot!', 'Pfft~'], mile:['Plop', 'Hnngh']}[kind];
    return en[Math.floor(Math.random() * en.length)];
  }
  var a = GAME_POPS[kind];
  return a[Math.floor(Math.random() * a.length)];
}
(function(){
  var langs = {
    ko:{'game.hint':'화면을 눌러 점프', 'game.over':'막혔다!', 'game.restart':'다시 싸기', 'game.newBest':'신기록 쾌변!', 'game.score':'점수',
        'game.sub':'변기는 피하고 휴지·고구마는 줍기', 'toast.life':'휴지 +1'},
    en:{'game.hint':'Tap to jump', 'game.over':'Clogged!', 'game.restart':'Go again', 'game.newBest':'Record dump!', 'game.sub':'Dodge toilets, grab TP and sweet potatoes', 'toast.life':'TP +1'},
    ja:{'game.hint':'タップでジャンプ', 'game.over':'詰まった！', 'game.restart':'もう一回', 'game.newBest':'記録更新！'},
    zh:{'game.hint':'点击跳跃', 'game.over':'堵住了！', 'game.restart':'再来一次', 'game.newBest':'新纪录！'}
  };
  for(var l in langs) for(var k in langs[l]) I18N[l][k] = langs[l][k];
})();

I18N.ko['n.entered'] = "'{room}'에서 '{name}', 똥 중입니다.";
I18N.en['n.entered'] = '{name} is pooping in {room}.';
I18N.ko['n.enteredHard'] = "'{room}'에서 '{name}', 변비로 똥 중입니다.";
I18N.ko['n.urgent'] = "'{room}'에서 '{name}', 설사로 똥 중입니다.";
I18N.ko['n.relieved'] = "'{room}'에서 '{name}', 변비 해소!";
I18N.ko['n.relievedLoose'] = "'{room}'에서 '{name}', 설사 진정!";
I18N.en['n.relievedLoose'] = "{name} is settled down in {room}.";
I18N.ja['n.relievedLoose'] = '{room}で{name}の下痢がおさまった';
I18N.zh['n.relievedLoose'] = '{name} 在 {room} 拉肚子止住了';
I18N.ko['room.relievedLoose'] = '설사 진정';
I18N.ko['room.owner'] = '방장'; I18N.en['room.owner'] = 'Owner';
I18N.ko['room.pushSubLoose'] = '진압 진행률 {n}/{goal}';
I18N.en['room.pushSubLoose'] = 'Containment progress {n}/{goal}';
I18N.ja['room.pushSubLoose'] = '{n}/{goal}';
I18N.zh['room.pushSubLoose'] = '{n}/{goal}'; I18N.en['room.relievedLoose'] = 'Settled down';
I18N.ja['room.relievedLoose'] = 'おさまった'; I18N.zh['room.relievedLoose'] = '止住了';
I18N.en['n.enteredHard'] = '{name} is pooping (constipated) in {room}.';
I18N.en['n.urgent'] = '{name} is pooping (diarrhea) in {room}.';
I18N.ja['n.entered'] = '{room}で{name}がうんち中。';
I18N.zh['n.entered'] = '{name} 正在 {room} 拉屎。';
/* wig (stored as 'beret'): a retro flip bob draped along the poo's own slopes */
var _wigCache = {};
function wigPaths(sh, sx){
  var key = sh.id + '|' + sx;
  if(_wigCache[key]) return _wigCache[key];
  var all = Object.prototype.toString.call(sh.d) === '[object Array]' ? sh.d : [sh.d];
  var pts = [];
  all.forEach(function(d){ splitSub(d).forEach(function(sub){ samplePath(sub, 1).forEach(function(p){ pts.push([60 + (p[0] - 60) * sx, p[1]]); }); }); });
  var top = Infinity, bot = -Infinity, cx = 60;
  pts.forEach(function(p){ if(p[1] < top){ top = p[1]; cx = p[0]; } if(p[1] > bot) bot = p[1]; });
  var H = Math.min(50, (bot - top) * .62);
  function edges(y){
    /* envelope: the widest point at or above y (hair hangs, it never tucks into the folds) */
    var L = cx, R = cx;
    pts.forEach(function(p){ if(p[1] <= y + .8 && p[1] >= top){ if(p[0] < L) L = p[0]; if(p[0] > R) R = p[0]; } });
    return [L, R];
  }
  var N = 12, outL = [], outR = [], inL = [], inR = [];
  var cy = top + 15;
  var dw = edges(top + H * .5), dL = dw[0] + 1, dR = dw[1] - 1;    /* the dome is as wide as the body halfway down the hair */
  for(var i=0;i<=N;i++){
    var y = cy + (top + H - cy) * i / N;
    var e = edges(y); e = [Math.min(e[0], dL), Math.max(e[1], dR)];
    var g = 3 + 1.8 * i / N;
    outL.push([e[0] - g, y]); outR.push([e[1] + g, y]);
    inL.push([e[0] + 11, y]); inR.push([e[1] - 11, y]);
  }
  var yb = top + H, oL = outL[N], oR = outR[N];
  var mx = (outL[0][0] + outR[0][0]) / 2, rx = (outR[0][0] - outL[0][0]) / 2, ry = cy - top + 7;
  var fringeY = top + 20;
  var path = [];
  path.push([inL[N][0], yb + 1.4], [oL[0] - 3.6, yb + 2.6], [oL[0] - 9, yb - 1], [oL[0] - 7, yb - 5.6], [oL[0] - 2.4, yb - 4.8]);
  for(var a=N - 2;a>=1;a--) path.push(outL[a]);
  for(var k=0;k<=8;k++){ var th = Math.PI + Math.PI * k / 8; path.push([mx + rx * Math.cos(th), cy + ry * Math.sin(th)]); }
  for(var b=1;b<=N - 2;b++) path.push(outR[b]);
  path.push([oR[0] + 2.4, yb - 4.8], [oR[0] + 7, yb - 5.6], [oR[0] + 9, yb - 1], [oR[0] + 3.6, yb + 2.6], [inR[N][0], yb + 1.4]);
  for(var c=N - 1;c>=0;c--){ if(inR[c][1] > fringeY + 3) path.push(inR[c]); }
  path.push([mx + rx * .5, fringeY - 1], [mx + rx * .1, fringeY - 4.6], [mx - rx * .35, fringeY - 1.4], [mx - rx * .62, fringeY + 3.6]);
  for(var e2=0;e2<=N;e2++){ if(inL[e2][1] > fringeY + 6) path.push(inL[e2]); }
  var d = smoothD(path, true);
  var strands = 'M' + f1(mx + rx * .35) + ' ' + f1(top - 2) + ' C' + f1(mx + rx * .05) + ' ' + f1(top + 4) + ' ' + f1(mx - rx * .3) + ' ' + f1(fringeY - 5) + ' ' + f1(mx - rx * .62) + ' ' + f1(fringeY + 1)
    + ' M' + f1(outR[2][0] - 4) + ' ' + f1(outR[2][1]) + ' C' + f1(outR[6][0] - 4.6) + ' ' + f1(outR[6][1]) + ' ' + f1(outR[9][0] - 4) + ' ' + f1(outR[9][1]) + ' ' + f1(oR[0] + 2) + ' ' + f1(yb - 3.4)
    + ' M' + f1(outL[2][0] + 4) + ' ' + f1(outL[2][1]) + ' C' + f1(outL[6][0] + 4.6) + ' ' + f1(outL[6][1]) + ' ' + f1(outL[9][0] + 4) + ' ' + f1(outL[9][1]) + ' ' + f1(oL[0] - 2) + ' ' + f1(yb - 3.4);
  return (_wigCache[key] = A(d, 'ln', PALC.brown) + A(strands, 'lt'));
}
(function(){
  var L = {
    ko:{'auth.tagline':'너네도 똥싸니', 'auth.notice':'계속하면 이용약관과 개인정보 처리방침에 동의하게 됩니다.', 'room.silentNote':'소리가 안 나면 무음 모드를 확인하세요.'},
    en:{'auth.tagline':"How's everyone's poo status?", 'auth.notice':'By continuing, you agree to the Terms and Privacy Policy.', 'room.silentNote':'No sound? Check silent mode.'},
    ja:{'auth.tagline':'いま、友だちのうんち状況は？', 'auth.notice':'続行すると利用規約とプライバシーポリシーに同意したことになります。', 'room.silentNote':'音が出ない場合はマナーモードを確認してください。'},
    zh:{'auth.tagline':'朋友们现在的便便状况？', 'auth.notice':'继续即表示同意服务条款和隐私政策。', 'room.silentNote':'没有声音？请检查静音模式。'}
  };
  for(var l in L) for(var k in L[l]) I18N[l][k] = L[l][k];
})();
/* stall gauge: a little hand-drawn pill that fills up in poo brown */
var miniGauge = withHand(function(pct){
  var w = Math.max(0, Math.min(100, pct)) / 100 * 33;
  var id = 'mg' + Math.round(pct) ;
  return '<svg class="art mini-g" viewBox="0 0 40 13" width="40" height="13" fill="none" aria-hidden="true">'
    + '<defs><clipPath id="' + id + '"><rect x="3.5" y="2" width="' + w.toFixed(1) + '" height="9"/></clipPath></defs>'
    + A('M7 2.6 C15 2.2 25 2.2 33 2.6 C36.4 2.8 37.8 4.6 37.8 6.6 C37.8 8.6 36.4 10.4 33 10.4 C25 10.8 15 10.8 7 10.4 C3.6 10.2 2.2 8.6 2.2 6.6 C2.2 4.6 3.6 2.8 7 2.6 Z', 'ln', 'var(--bg)')
    + (w > 0 ? '<g clip-path="url(#' + id + ')">' + A('M7 2.6 C15 2.2 25 2.2 33 2.6 C36.4 2.8 37.8 4.6 37.8 6.6 C37.8 8.6 36.4 10.4 33 10.4 C25 10.8 15 10.8 7 10.4 C3.6 10.2 2.2 8.6 2.2 6.6 C2.2 4.6 3.6 2.8 7 2.6 Z', 'fo', '#C98B5A') + '</g>' : '')
    + A('M7 2.6 C15 2.2 25 2.2 33 2.6 C36.4 2.8 37.8 4.6 37.8 6.6 C37.8 8.6 36.4 10.4 33 10.4 C25 10.8 15 10.8 7 10.4 C3.6 10.2 2.2 8.6 2.2 6.6 C2.2 4.6 3.6 2.8 7 2.6 Z', 'ln')
    + '</svg>';
}, .3);
/* 힘주기: a little poo straining, with effort marks */
iconMuscle = function(){
  return '<svg class="art push-ic" viewBox="-6 6 132 104" fill="none" aria-hidden="true">'
    + '<g style="--ink:currentColor">' + pooPaths('none') + '</g>'
    + '<path class="ln" d="M14 30 L4 22 M60 16 L60 4 M106 30 L116 22" style="stroke:currentColor"/>'
    + '</svg>';
};
/* who did what to whom: a speech bubble over the stall it happened to */
function josa(word, a, b){
  var c = String(word || '').charCodeAt(String(word || '').length - 1);
  if(c >= 0xAC00 && c <= 0xD7A3) return word + (((c - 0xAC00) % 28) ? a : b);
  return word + b;
}
function interLine(kind, v){
  var ko = (state.lang || 'ko') === 'ko';
  var me = state.user ? state.user.name : '';
  if(kind === 'knockOut'){
    var line = knockLine(v.msg, v.target);
    return (ko ? '똑똑 ' : 'Knock knock ') + '“' + line + '”';
  }
  if(kind === 'knockIn'){
    var l2 = knockLine(v.msg, v.target || me);
    return (ko ? '똑똑 ' : 'Knock knock ') + v.name + ': “' + l2 + '”';
  }
  if(kind === 'pushOut') return ko ? josa(v.target, '이랑', '랑') + ' 같이 끄응' : 'Pushing with ' + v.target;
  if(kind === 'pushIn') return ko ? josa(v.name, '이', '가') + ' 옆에서 같이 끄응' : v.name + ' pushes with you';
  return '';
}
var BUB = null, _bubT = null;
function stallBubble(userId, text){
  if(state.view !== 'room' || !text) return false;
  var st = document.querySelector('.stall[data-user-id="' + userId + '"]');
  if(!st || !st.offsetWidth) return false;
  BUB = {uid:userId, text:text, until:Date.now() + 2500};
  attachBubble(true);
  if(_bubT) clearTimeout(_bubT);
  _bubT = setTimeout(function(){
    var b = document.querySelector('.stall-bubble');
    if(b){ b.classList.add('out'); setTimeout(function(){ if(b.parentNode) b.parentNode.removeChild(b); }, 260); }
    BUB = null;
  }, 2500);
  return true;
}
/* the room re-renders often (live sync): put the bubble back where it was, without replaying its entrance */
function attachBubble(fresh){
  if(!BUB || Date.now() > BUB.until || state.view !== 'room') return;
  var st = document.querySelector('.stall[data-user-id="' + BUB.uid + '"]');
  if(!st) return;
  var old = document.querySelector('.stall-bubble');
  if(old && !fresh && old.parentNode === st) return;
  if(old) old.parentNode.removeChild(old);
  var b = document.createElement('div');
  b.className = 'stall-bubble' + (fresh ? '' : ' still');
  b.innerHTML = '<span>' + esc(BUB.text) + '</span>';
  st.appendChild(b);
  var r = b.getBoundingClientRect(), vw = window.innerWidth, dx = 0;
  if(r.left < 8) dx = 8 - r.left; else if(r.right > vw - 8) dx = vw - 8 - r.right;
  if(dx) b.style.setProperty('--dx', dx.toFixed(0) + 'px');
  /* cover from the name down to the state row, inside the stall */
  var nm = st.querySelector('.stall-name');
  var top = nm ? nm.offsetTop - 14 : st.offsetHeight * .5;
  var who = st.querySelector('.who');
  /* the drawing box has empty room under the poo; the tail may use it but never reach the poo */
  if(who) top = Math.max(top, who.offsetTop + who.offsetHeight * .86 - 4);
  b.style.top = Math.max(st.offsetHeight * .4, top) + 'px';
  drawBubble(b);
}
/* one hand-drawn outline: rounded box with a little tail pointing up at the drawing */
function drawBubble(b){
  var old = b.querySelector('.bub-skin');
  if(old) old.parentNode.removeChild(old);
  var w = b.offsetWidth, h = b.offsetHeight;
  if(!w || !h) return;
  var r = Math.min(12, h / 2 - 2), m = 2, T = 10;
  var x0 = m, y0 = T, x1 = w - m, y1 = h - m;
  /* tail: leaves the top edge near the left corner, rises, then hooks right toward the drawing */
  var tb = x0 + r + 4, tw = 9, tip = [Math.min(w * .42, tb + 22), y0 - 9];
  var d = 'M' + f1(x0 + r) + ' ' + f1(y0)
    + ' L' + f1(tb) + ' ' + f1(y0) + ' C' + f1(tb - 1) + ' ' + f1(y0 - 5) + ' ' + f1(tb + 4) + ' ' + f1(tip[1] + 1) + ' ' + f1(tip[0]) + ' ' + f1(tip[1])
    + ' C' + f1(tip[0] - 5) + ' ' + f1(tip[1] + 3.6) + ' ' + f1(tb + tw - 1) + ' ' + f1(y0 - 2.6) + ' ' + f1(tb + tw) + ' ' + f1(y0)
    + ' L' + f1(x1 - r) + ' ' + f1(y0) + ' Q' + f1(x1) + ' ' + f1(y0) + ' ' + f1(x1) + ' ' + f1(y0 + r)
    + ' L' + f1(x1) + ' ' + f1(y1 - r) + ' Q' + f1(x1) + ' ' + f1(y1) + ' ' + f1(x1 - r) + ' ' + f1(y1)
    + ' L' + f1(x0 + r) + ' ' + f1(y1) + ' Q' + f1(x0) + ' ' + f1(y1) + ' ' + f1(x0) + ' ' + f1(y1 - r)
    + ' L' + f1(x0) + ' ' + f1(y0 + r) + ' Q' + f1(x0) + ' ' + f1(y0) + ' ' + f1(x0 + r) + ' ' + f1(y0) + ' Z';
  d = handD(d, .8);
  b.insertAdjacentHTML('afterbegin', '<svg class="bub-skin" viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" height="' + h + '" aria-hidden="true">'
    + '<path d="' + d + '" fill="#FFF6D8" stroke="var(--ink)" stroke-width="1.9" stroke-linejoin="round" stroke-linecap="round"/></svg>');
}
(function(){
  var pf = paintFrames;
  paintFrames = function(root){ var r = pf.apply(this, arguments); if(BUB) attachBubble(false); return r; };
})();
/* push gauge: a row of little poos that fill up one by one */
var _pgSlot = null;
function pooGauge(n, goal){
  if(!_pgSlot) _pgSlot = withHand(function(){
    return '<svg class="art" viewBox="-6 14 132 98" fill="none" aria-hidden="true">' + pooPaths('var(--pg-fill, var(--bg))') + '</svg>';
  }, .9)();
  var out = '';
  for(var i=0;i<goal;i++) out += '<span class="pg-slot' + (i < n ? ' on' : '') + '">' + _pgSlot + '</span>';
  return '<div class="poo-gauge" id="push-gauge" role="progressbar" aria-valuemin="0" aria-valuemax="' + goal + '" aria-valuenow="' + n + '">' + out + '</div>';
}
/* ===================== v8.0 =====================
   - scarf & co. wrap the neck at its real width
   - 20 hats, 20 items
   - line weight follows the size a drawing is shown at */

/* neck: measured from the outline itself, so neckwear fits snugly */
var _neckCache = {};
neckOf = function(sh, sx){
  var key = sh.id + '|' + sx;
  if(_neckCache[key]) return _neckCache[key];
  var n = NECK[sh.id] || NECK.classic;
  var all = Object.prototype.toString.call(sh.d) === '[object Array]' ? sh.d : [sh.d];
  var pts = [];
  all.forEach(function(d){ splitSub(d).forEach(function(sub){ samplePath(sub, 1).forEach(function(p){ pts.push([60 + (p[0] - 60) * sx, p[1]]); }); }); });
  var y = n[1], L = Infinity, Rr = -Infinity, cx = n[0] + (n[0] - 60) * (sx - 1);
  pts.forEach(function(p){ if(Math.abs(p[1] - y) < 1.4 && Math.abs(p[0] - cx) < 70){ if(p[0] < L) L = p[0]; if(p[0] > Rr) Rr = p[0]; } });
  var hw = isFinite(L) ? (Rr - L) / 2 - .6 : n[2] * sx;
  var x = isFinite(L) ? (L + Rr) / 2 : cx;
  var R = -Infinity;
  pts.forEach(function(p){ if(p[0] > R) R = p[0]; });
  return (_neckCache[key] = {x:x, y:y, hw:hw, R:R});
};

/* ---------- 10 more hats (hat space: brim near y 0, about ±22 wide) ---------- */
(function(){
  var H = {
    chef: function(){
      return A('M-15 -7 C-23 -8 -24 -21 -15 -22.4 C-14.4 -32 1 -34.4 4.6 -27 C12 -33 25 -25.6 18.6 -16 C23 -13 21.4 -7.4 15 -7 Z', 'ln', PALC.white)
        + A('M-15.4 -7.6 C-15.2 -4.6 -15.2 -1.6 -15.6 1.6 C-5.4 3 5.4 3 15.6 1.4 C15.2 -1.6 15.2 -4.6 15 -7.6 C5 -6.6 -5 -6.6 -15.4 -7.6 Z', 'ln', PALC.white)
        + A('M-6 -9 C-7 -14 -6.4 -19 -4.4 -22 M5.6 -9.4 C6.4 -14 6.2 -18 4.4 -21.6', 'lt');
    },
    tophat: function(){
      return A('M-13.6 -2 C-14.2 -11 -14 -20 -13 -28.4 C-4.4 -30 4.4 -30 13 -28.4 C14 -20 14.2 -11 13.6 -2 Z', 'ln', '#3A3A3A')
        + A('M-13.8 -9.4 C-4.6 -8.4 4.6 -8.4 13.8 -9.4 L13.8 -4 C4.6 -3 -4.6 -3 -13.8 -4 Z', 'ln', PALC.red)
        + A('M-24.6 1.4 C-24.6 -2.6 24.6 -2.6 24.6 1.4 C24.6 4.6 -24.6 4.6 -24.6 1.4 Z', 'ln', '#3A3A3A');
    },
    cowboy: function(){
      return A('M-15.4 -1 C-16.6 -12 -13 -21.4 -6.6 -20 C-3.4 -24.4 3.4 -24.4 6.6 -20 C13 -21.4 16.6 -12 15.4 -1 Z', 'ln', PALC.brown)
        + A('M-29 -5 C-24 3 24 3 29 -5 C27 4.4 14 7.4 0 7.4 C-14 7.4 -27 4.4 -29 -5 Z', 'ln', PALC.brown)
        + A('M-15.2 -5.4 C-5 -3.6 5 -3.6 15.2 -5.4', 'lt')
        + A('M0 -21 C-1.4 -16 -1.4 -11 0 -6.6', 'lt');
    },
    santa: function(){
      return A('M-19.4 -1 C-18.4 -15.6 -7.4 -24.4 5 -23 C15.6 -21.8 22.6 -13 25 -3.6 C21.4 -7.6 16.6 -9.4 12.4 -7.4 C14.6 -5 17 -2.6 19.6 -1 Z', 'ln', PALC.red)
        + A('M-22.4 -2 C-8 -5.2 8 -5.2 22.4 -2 C22.8 .6 22.8 3 22.4 5.2 C8 2.4 -8 2.4 -22.4 5.2 C-22.8 3 -22.8 .6 -22.4 -2 Z', 'ln', PALC.white)
        + A('M25.4 -8 C28.4 -8 29.8 -6 29.6 -3.6 C29.4 -1.2 27.4 .4 25 .2 C22.6 0 21.2 -2 21.4 -4.2 C21.6 -6.4 23 -8 25.4 -8 Z', 'ln', PALC.white);
    },
    hardhat: function(){
      return A('M-18 -1 C-18.4 -13 -9.6 -21 0 -21 C9.6 -21 18.4 -13 18 -1 Z', 'ln', PALC.yellow)
        + A('M-25 -1.6 C-8 -3.4 8 -3.4 25 -1.6 C25.4 .6 25.2 2.6 24.6 4 C8 2.4 -8 2.4 -24.6 4 C-25.2 2.6 -25.4 .6 -25 -1.6 Z', 'ln', PALC.yellow)
        + A('M-3.4 -20.6 C-4 -14 -4 -8 -3.6 -2.4 M3.4 -20.6 C4 -14 4 -8 3.6 -2.4', 'lt');
    },
    halo: function(){
      return A('M0 -30.6 C10.4 -30.6 17 -28 17 -24.8 C17 -21.6 10.4 -19 0 -19 C-10.4 -19 -17 -21.6 -17 -24.8 C-17 -28 -10.4 -30.6 0 -30.6 Z M0 -27.4 C-7.6 -27.4 -11.6 -26.2 -11.6 -24.8 C-11.6 -23.4 -7.6 -22.2 0 -22.2 C7.6 -22.2 11.6 -23.4 11.6 -24.8 C11.6 -26.2 7.6 -27.4 0 -27.4 Z', 'ln', '#FFE07A', ' fill-rule="evenodd"');
    },
    bunny: function(){
      var ear = function(s){
        return A('M' + (s * 3.4) + ' 1 C' + (s * 1.4) + ' -10 ' + (s * 1.6) + ' -30 ' + (s * 8.6) + ' -35.4 C' + (s * 15.6) + ' -31 ' + (s * 14.4) + ' -12 ' + (s * 11.4) + ' 1 Z', 'ln', PALC.white)
          + A('M' + (s * 6.2) + ' -3 C' + (s * 5.4) + ' -12 ' + (s * 5.8) + ' -24 ' + (s * 8.8) + ' -29 C' + (s * 11.6) + ' -24 ' + (s * 11.4) + ' -12 ' + (s * 9.6) + ' -3 Z', 'fo', PALC.pink);
      };
      return ear(-1) + ear(1) + A('M-15 1.4 C-5 -1.6 5 -1.6 15 1.4', 'ln');
    },
    cat: function(){
      return A('M-19.6 1 C-19 -6 -17.6 -12.4 -15.6 -18.4 C-11.4 -14 -7.6 -9.6 -4.4 -5 Z', 'ln', '#6B6B6B')
        + A('M19.6 1 C19 -6 17.6 -12.4 15.6 -18.4 C11.4 -14 7.6 -9.6 4.4 -5 Z', 'ln', '#6B6B6B')
        + A('M-16.4 -3 C-16 -7 -15.4 -10.6 -14.4 -13.6 C-12.2 -11 -10.4 -8.6 -8.8 -6 Z M16.4 -3 C16 -7 15.4 -10.6 14.4 -13.6 C12.2 -11 10.4 -8.6 8.8 -6 Z', 'fo', PALC.pink);
    },
    propeller: function(){
      return A('M-18 1 C-18.4 -11 -9.6 -19 0 -19 C9.6 -19 18.4 -11 18 1 C6 3 -6 3 -18 1 Z', 'ln', PALC.blue)
        + A('M0 -19 C-1.4 -12 -1.6 -5 -1 2 M-9.6 -16 C-12 -10 -12.6 -5 -12 1.4 M9.6 -16 C12 -10 12.6 -5 12 1.4', 'lt')
        + A('M0 -19 C0 -21 0 -23 0 -25', 'ln')
        + A('M-13 -27.4 C-7 -30.4 -2 -27.4 0 -25.4 C2 -27.4 7 -30.4 13 -27.4 C7 -24.4 2 -24 0 -25.4 C-2 -24 -7 -24.4 -13 -27.4 Z', 'ln', PALC.red);
    },
    grad: function(){
      return A('M-14 -10.4 C-14 -6 -14 -2 -14 1.4 C-5 4.4 5 4.4 14 1.4 C14 -2 14 -6 14 -10.4', 'ln', '#3A3A3A')
        + A('M-25.4 -13.4 L0 -22.6 L25.4 -13.4 L0 -4.6 Z', 'ln', '#3A3A3A')
        + A('M0 -13.6 C8 -12.4 15.4 -10.4 19 -5 C19.4 -2.6 19.4 0 19 2.4', 'lt', null, ' stroke="' + PALC.yellow + '"')
        + A('M17 2 L21 2 L21.6 7.4 L16.4 7.4 Z', 'ln', PALC.yellow);
    }
  };
  for(var k in H) HAT_ART[k] = withColour(H[k]);
  var names = {
    chef:['요리사', 'Chef'], tophat:['실크햇', 'Top hat'], cowboy:['카우보이', 'Cowboy'], santa:['산타', 'Santa'], hardhat:['안전모', 'Hard hat'],
    halo:['천사링', 'Halo'], bunny:['토끼귀', 'Bunny'], cat:['고양이귀', 'Cat ears'], propeller:['프로펠러', 'Propeller'], grad:['학사모', 'Grad cap']
  };
  for(var id in names){
    HATS.push({id:id, name:'hat.' + id, isNew:true});
    I18N.ko['hat.' + id] = names[id][0]; I18N.en['hat.' + id] = names[id][1];
  }
})();

/* ---------- 15 more items ---------- */
(function(){
  var NEW = ['necklace', 'tie', 'bandana', 'medal', 'sash', 'bag', 'wings', 'flies', 'plunger', 'umbrella', 'lollipop', 'wand', 'coffee', 'toothbrush', 'icecream'];
  var names = {
    necklace:['진주 목걸이', 'Pearls'], tie:['넥타이', 'Tie'], bandana:['반다나', 'Bandana'], medal:['메달', 'Medal'], sash:['어깨띠', 'Sash'],
    bag:['크로스백', 'Bag'], wings:['날개', 'Wings'], flies:['파리', 'Flies'], plunger:['뚫어뻥', 'Plunger'], umbrella:['우산', 'Umbrella'],
    lollipop:['막대사탕', 'Lollipop'], wand:['요술봉', 'Wand'], coffee:['커피', 'Coffee'], toothbrush:['칫솔', 'Toothbrush'], icecream:['아이스크림', 'Ice cream']
  };
  NEW.forEach(function(a){ ACCS.push(a); I18N.ko['acc.' + a] = names[a][0]; I18N.en['acc.' + a] = names[a][1]; });

  var held = function(R, top){   /* a stick from the poo's right side up to the item */
    return A('M' + f1(R - 3) + ' 84 C' + f1(R + 3) + ' 74 ' + f1(R + 8) + ' ' + f1(top + 18) + ' ' + f1(R + 12) + ' ' + f1(top), 'ln');
  };
  var front = accFront, behind = accBehind;
  accFront = withColour(function(acc, sh, sx){
    var n = neckOf(sh, sx), x = n.x, y = n.y, hw = n.hw, R = n.R, bx = R + 12;
    var i, o;
    switch(acc){
      case 'necklace':
        o = '';
        for(i=0;i<=8;i++){
          var u = i / 8, px = x - hw * .86 + hw * 1.72 * u, py = y + 1 + 7 * Math.sin(Math.PI * u);
          o += A('M' + f1(px) + ' ' + f1(py - 2.3) + ' C' + f1(px + 1.6) + ' ' + f1(py - 2.3) + ' ' + f1(px + 2.3) + ' ' + f1(py - 1.2) + ' ' + f1(px + 2.3) + ' ' + f1(py)
            + ' C' + f1(px + 2.3) + ' ' + f1(py + 1.4) + ' ' + f1(px + 1.4) + ' ' + f1(py + 2.3) + ' ' + f1(px) + ' ' + f1(py + 2.3)
            + ' C' + f1(px - 1.4) + ' ' + f1(py + 2.3) + ' ' + f1(px - 2.3) + ' ' + f1(py + 1.4) + ' ' + f1(px - 2.3) + ' ' + f1(py)
            + ' C' + f1(px - 2.3) + ' ' + f1(py - 1.2) + ' ' + f1(px - 1.6) + ' ' + f1(py - 2.3) + ' ' + f1(px) + ' ' + f1(py - 2.3) + ' Z', 'ln', PAL.white);
        }
        return o;
      case 'tie':
        return A('M' + f1(x - 4) + ' ' + f1(y - 1) + ' L' + f1(x + 4) + ' ' + f1(y - 1) + ' L' + f1(x + 2.6) + ' ' + f1(y + 4.6) + ' L' + f1(x - 2.6) + ' ' + f1(y + 4.6) + ' Z', 'ln', PAL.blue)
          + A('M' + f1(x - 2.6) + ' ' + f1(y + 4.6) + ' L' + f1(x + 2.6) + ' ' + f1(y + 4.6) + ' L' + f1(x + 5) + ' ' + f1(y + 22) + ' L' + f1(x) + ' ' + f1(y + 27) + ' L' + f1(x - 5) + ' ' + f1(y + 22) + ' Z', 'ln', PAL.blue)
          + A('M' + f1(x - 3.4) + ' ' + f1(y + 11) + ' L' + f1(x + 3.8) + ' ' + f1(y + 14) + ' M' + f1(x - 4.4) + ' ' + f1(y + 17.6) + ' L' + f1(x + 4.6) + ' ' + f1(y + 21.2), 'lt', null, ' stroke="' + PAL.yellow + '"');
      case 'bandana':
        return A('M' + f1(x - hw - .6) + ' ' + f1(y - 2) + ' C' + f1(x - hw * .3) + ' ' + f1(y + 2) + ' ' + f1(x + hw * .3) + ' ' + f1(y + 2) + ' ' + f1(x + hw + .6) + ' ' + f1(y - 2)
          + ' C' + f1(x + hw * .5) + ' ' + f1(y + 8) + ' ' + f1(x + 6) + ' ' + f1(y + 16) + ' ' + f1(x) + ' ' + f1(y + 21) + ' C' + f1(x - 6) + ' ' + f1(y + 16) + ' ' + f1(x - hw * .5) + ' ' + f1(y + 8) + ' ' + f1(x - hw - .6) + ' ' + f1(y - 2) + ' Z', 'ln', PAL.red)
          + A('M' + f1(x - 8) + ' ' + f1(y + 5) + ' l.1 0 M' + f1(x + 6) + ' ' + f1(y + 6) + ' l.1 0 M' + f1(x - 1) + ' ' + f1(y + 12) + ' l.1 0 M' + f1(x + 12) + ' ' + f1(y + 2) + ' l.1 0 M' + f1(x - 14) + ' ' + f1(y + 1) + ' l.1 0', 'lt', null, ' stroke="' + PAL.white + '" stroke-width="2.6"');
      case 'medal':
        return A('M' + f1(x - 7) + ' ' + f1(y - 1) + ' L' + f1(x - 1.6) + ' ' + f1(y + 13) + ' M' + f1(x + 7) + ' ' + f1(y - 1) + ' L' + f1(x + 1.6) + ' ' + f1(y + 13), 'ln', null, ' stroke="' + PAL.blue + '"')
          + A('M' + f1(x) + ' ' + f1(y + 12) + ' C' + f1(x + 4.4) + ' ' + f1(y + 12) + ' ' + f1(x + 6.4) + ' ' + f1(y + 15) + ' ' + f1(x + 6.4) + ' ' + f1(y + 18.4) + ' C' + f1(x + 6.4) + ' ' + f1(y + 22) + ' ' + f1(x + 3.6) + ' ' + f1(y + 24.6) + ' ' + f1(x) + ' ' + f1(y + 24.6)
            + ' C' + f1(x - 3.6) + ' ' + f1(y + 24.6) + ' ' + f1(x - 6.4) + ' ' + f1(y + 22) + ' ' + f1(x - 6.4) + ' ' + f1(y + 18.4) + ' C' + f1(x - 6.4) + ' ' + f1(y + 15) + ' ' + f1(x - 4.4) + ' ' + f1(y + 12) + ' ' + f1(x) + ' ' + f1(y + 12) + ' Z', 'ln', PAL.yellow)
          + A('M' + f1(x - 1.6) + ' ' + f1(y + 16.6) + ' L' + f1(x) + ' ' + f1(y + 15.4) + ' L' + f1(x) + ' ' + f1(y + 21.6), 'lt');
      case 'sash':
        return A('M' + f1(x - hw * .8) + ' ' + f1(y - 2) + ' C' + f1(x - hw * .2) + ' ' + f1(y + 8) + ' ' + f1(x + hw * .5) + ' ' + f1(y + 20) + ' ' + f1(x + hw * .95) + ' ' + f1(y + 30)
          + ' L' + f1(x + hw * .95 - 6) + ' ' + f1(y + 34) + ' C' + f1(x + hw * .36) + ' ' + f1(y + 25) + ' ' + f1(x - hw * .4) + ' ' + f1(y + 13) + ' ' + f1(x - hw * .8 - 5) + ' ' + f1(y + 3) + ' Z', 'ln', PAL.yellow)
          + A('M' + f1(x - hw * .2) + ' ' + f1(y + 10) + ' C' + f1(x) + ' ' + f1(y + 13) + ' ' + f1(x + hw * .2) + ' ' + f1(y + 16) + ' ' + f1(x + hw * .4) + ' ' + f1(y + 20), 'lt', null, ' stroke="' + PAL.red + '"');
      case 'bag':
        return A('M' + f1(x - hw * .7) + ' ' + f1(y - 1) + ' C' + f1(x) + ' ' + f1(y + 8) + ' ' + f1(R - 18) + ' ' + f1(y + 16) + ' ' + f1(R - 10) + ' ' + f1(y + 20), 'ln', null, ' stroke="' + PAL.brown + '"')
          + A('M' + f1(R - 19) + ' ' + f1(y + 18) + ' C' + f1(R - 12) + ' ' + f1(y + 17.4) + ' ' + f1(R - 5) + ' ' + f1(y + 17.4) + ' ' + f1(R + 1) + ' ' + f1(y + 18) + ' C' + f1(R + 1.4) + ' ' + f1(y + 23) + ' ' + f1(R + 1.2) + ' ' + f1(y + 28) + ' ' + f1(R + .6) + ' ' + f1(y + 32)
            + ' C' + f1(R - 6) + ' ' + f1(y + 32.6) + ' ' + f1(R - 12) + ' ' + f1(y + 32.6) + ' ' + f1(R - 18.6) + ' ' + f1(y + 32) + ' C' + f1(R - 19.2) + ' ' + f1(y + 28) + ' ' + f1(R - 19.4) + ' ' + f1(y + 23) + ' ' + f1(R - 19) + ' ' + f1(y + 18) + ' Z', 'ln', PAL.brown)
          + A('M' + f1(R - 19) + ' ' + f1(y + 18.4) + ' C' + f1(R - 12) + ' ' + f1(y + 23) + ' ' + f1(R - 6) + ' ' + f1(y + 23) + ' ' + f1(R + 1) + ' ' + f1(y + 18.4), 'lt');
      case 'flies':
        o = '';
        [[R - 6, 22, 1], [R + 8, 36, -1], [x - 30, 30, 1]].forEach(function(f){
          o += A('M' + f1(f[0] - 2.4) + ' ' + f1(f[1] - 1.4) + ' C' + f1(f[0] - 5.4) + ' ' + f1(f[1] - 5.6) + ' ' + f1(f[0] - 1) + ' ' + f1(f[1] - 7) + ' ' + f1(f[0] - .4) + ' ' + f1(f[1] - 2.6)
              + ' M' + f1(f[0] + 1.6) + ' ' + f1(f[1] - 1.8) + ' C' + f1(f[0] + 3) + ' ' + f1(f[1] - 6.6) + ' ' + f1(f[0] + 6.8) + ' ' + f1(f[1] - 4.4) + ' ' + f1(f[0] + 3.2) + ' ' + f1(f[1] - .8), 'lt')
            + A('M' + f1(f[0]) + ' ' + f1(f[1] - 2.2) + ' C' + f1(f[0] + 2.4) + ' ' + f1(f[1] - 2.2) + ' ' + f1(f[0] + 3) + ' ' + f1(f[1]) + ' ' + f1(f[0] + 3) + ' ' + f1(f[1] + .8) + ' C' + f1(f[0] + 3) + ' ' + f1(f[1] + 2.6) + ' ' + f1(f[0] + 1.4) + ' ' + f1(f[1] + 3.4) + ' ' + f1(f[0]) + ' ' + f1(f[1] + 3.4)
              + ' C' + f1(f[0] - 1.4) + ' ' + f1(f[1] + 3.4) + ' ' + f1(f[0] - 3) + ' ' + f1(f[1] + 2.6) + ' ' + f1(f[0] - 3) + ' ' + f1(f[1] + .8) + ' C' + f1(f[0] - 3) + ' ' + f1(f[1]) + ' ' + f1(f[0] - 2.4) + ' ' + f1(f[1] - 2.2) + ' ' + f1(f[0]) + ' ' + f1(f[1] - 2.2) + ' Z', 'ln', 'var(--ink)')
            + A('M' + f1(f[0] + f[2] * 5) + ' ' + f1(f[1] + 6) + ' C' + f1(f[0] + f[2] * 10) + ' ' + f1(f[1] + 9) + ' ' + f1(f[0] + f[2] * 8) + ' ' + f1(f[1] + 14) + ' ' + f1(f[0] + f[2] * 13) + ' ' + f1(f[1] + 16), 'lt', null, ' stroke-dasharray="1.5 3"');
        });
        return o;
      case 'plunger':
        return held(R, 40)
          + A('M' + f1(R + 11.6) + ' 40 L' + f1(R + 12.4) + ' 26', 'ln', null, ' stroke="' + PAL.brown + '" stroke-width="3"')
          + A('M' + f1(bx - 9.6) + ' 26 C' + f1(bx - 9.6) + ' 14.6 ' + f1(bx + 9.6) + ' 14.6 ' + f1(bx + 9.6) + ' 26 C' + f1(bx + 6) + ' 27.6 ' + f1(bx - 6) + ' 27.6 ' + f1(bx - 9.6) + ' 26 Z', 'ln', PAL.red);
      case 'umbrella':
        return A('M' + f1(R - 4) + ' 86 C' + f1(R - 4) + ' 91 ' + f1(R + 2) + ' 91 ' + f1(R + 2) + ' 86 L' + f1(R + 8) + ' 34', 'ln')
          + A('M' + f1(bx - 18) + ' 36 C' + f1(bx - 18) + ' 18 ' + f1(bx + 14) + ' 16 ' + f1(bx + 14) + ' 34 C' + f1(bx + 10) + ' 31 ' + f1(bx + 6) + ' 31 ' + f1(bx + 3) + ' 34.6 C' + f1(bx) + ' 31.4 ' + f1(bx - 4) + ' 31.4 ' + f1(bx - 7) + ' 35 C' + f1(bx - 10) + ' 32 ' + f1(bx - 14.4) + ' 32 ' + f1(bx - 18) + ' 36 Z', 'ln', PAL.blue)
          + A('M' + f1(bx - 2) + ' 20.4 C' + f1(bx - 4) + ' 25 ' + f1(bx - 4.6) + ' 29 ' + f1(bx - 3.6) + ' 32.6', 'lt');
      case 'lollipop':
        return held(R, 44)
          + A('M' + f1(bx) + ' 26 C' + f1(bx + 6) + ' 26 ' + f1(bx + 9.6) + ' 30 ' + f1(bx + 9.6) + ' 35.4 C' + f1(bx + 9.6) + ' 40.6 ' + f1(bx + 5.6) + ' 44.6 ' + f1(bx) + ' 44.6 C' + f1(bx - 5.6) + ' 44.6 ' + f1(bx - 9.6) + ' 40.6 ' + f1(bx - 9.6) + ' 35.4 C' + f1(bx - 9.6) + ' 30 ' + f1(bx - 6) + ' 26 ' + f1(bx) + ' 26 Z', 'ln', PAL.pink)
          + A('M' + f1(bx) + ' 35.4 C' + f1(bx + 2) + ' 34 ' + f1(bx + 3.6) + ' 36.6 ' + f1(bx + 1.6) + ' 38.6 C' + f1(bx - 1.6) + ' 41 ' + f1(bx - 5.6) + ' 37.6 ' + f1(bx - 4) + ' 33.4 C' + f1(bx - 2) + ' 29 ' + f1(bx + 4.4) + ' 29.4 ' + f1(bx + 6.2) + ' 33.6', 'lt');
      case 'wand':
        return held(R, 44)
          + A('M' + f1(bx) + ' 24.6 L' + f1(bx + 3) + ' 31 L' + f1(bx + 10) + ' 31.8 L' + f1(bx + 4.8) + ' 36.4 L' + f1(bx + 6.4) + ' 43.4 L' + f1(bx) + ' 39.8 L' + f1(bx - 6.4) + ' 43.4 L' + f1(bx - 4.8) + ' 36.4 L' + f1(bx - 10) + ' 31.8 L' + f1(bx - 3) + ' 31 Z', 'ln', PAL.yellow);
      case 'coffee':
        return A('M' + f1(R - 2) + ' 64 C' + f1(R + 5) + ' 63.4 ' + f1(R + 12) + ' 63.4 ' + f1(R + 19) + ' 64 C' + f1(R + 18) + ' 72 ' + f1(R + 17) + ' 80 ' + f1(R + 15.6) + ' 87 C' + f1(R + 10) + ' 87.6 ' + f1(R + 6.6) + ' 87.6 ' + f1(R + 1.4) + ' 87 C' + f1(R) + ' 80 ' + f1(R - 1) + ' 72 ' + f1(R - 2) + ' 64 Z', 'ln', PAL.white)
          + A('M' + f1(R - .8) + ' 71 C' + f1(R + 6) + ' 70.4 ' + f1(R + 12) + ' 70.4 ' + f1(R + 17.8) + ' 71 L' + f1(R + 17) + ' 79 C' + f1(R + 11.4) + ' 79.6 ' + f1(R + 5.6) + ' 79.6 ' + f1(R + .4) + ' 79 Z', 'ln', PAL.brown)
          + A('M' + f1(R - 3) + ' 64 C' + f1(R + 5) + ' 62.6 ' + f1(R + 12) + ' 62.6 ' + f1(R + 20) + ' 64 L' + f1(R + 19) + ' 59.6 C' + f1(R + 12) + ' 58.6 ' + f1(R + 5) + ' 58.6 ' + f1(R - 2) + ' 59.6 Z', 'ln', PAL.white)
          + A('M' + f1(R + 6) + ' 54 C' + f1(R + 4) + ' 50 ' + f1(R + 8) + ' 48 ' + f1(R + 6) + ' 44 M' + f1(R + 12) + ' 54 C' + f1(R + 10) + ' 50 ' + f1(R + 14) + ' 48 ' + f1(R + 12) + ' 44', 'lt', null, ' opacity=".5"');
      case 'toothbrush':
        return A('M' + f1(R - 3) + ' 84 C' + f1(R + 2) + ' 70 ' + f1(R + 8) + ' 52 ' + f1(R + 12) + ' 36 L' + f1(R + 16) + ' 37 C' + f1(R + 12) + ' 53 ' + f1(R + 6) + ' 71 ' + f1(R + 1) + ' 85 Z', 'ln', PAL.sky)
          + A('M' + f1(R + 11.6) + ' 36.6 C' + f1(R + 12.6) + ' 32 ' + f1(R + 13.4) + ' 28 ' + f1(R + 14) + ' 24 L' + f1(R + 20) + ' 25.4 C' + f1(R + 19.4) + ' 29.4 ' + f1(R + 18.4) + ' 33.6 ' + f1(R + 17.4) + ' 37.6 Z', 'ln', PAL.white)
          + A('M' + f1(R + 15) + ' 26 L' + f1(R + 14) + ' 35 M' + f1(R + 17.6) + ' 26.6 L' + f1(R + 16.4) + ' 35.6', 'lt');
      case 'icecream':
        return A('M' + f1(bx - 8.4) + ' 40 L' + f1(bx + 8.4) + ' 40 L' + f1(bx + .4) + ' 66 Z', 'ln', '#E2B276')
          + A('M' + f1(bx - 5) + ' 46 L' + f1(bx + 3) + ' 50 M' + f1(bx - 3) + ' 53 L' + f1(bx + 2.4) + ' 55.6 M' + f1(bx + 5) + ' 45 L' + f1(bx - 3) + ' 50', 'lt')
          + A('M' + f1(bx - 9.6) + ' 40.4 C' + f1(bx - 12) + ' 34 ' + f1(bx - 8) + ' 27 ' + f1(bx) + ' 27 C' + f1(bx + 8) + ' 27 ' + f1(bx + 12) + ' 34 ' + f1(bx + 9.6) + ' 40.4 C' + f1(bx + 5) + ' 42.4 ' + f1(bx - 5) + ' 42.4 ' + f1(bx - 9.6) + ' 40.4 Z', 'ln', PAL.pink)
          + A('M' + f1(R - 3) + ' 82 C' + f1(R + 2) + ' 76 ' + f1(bx - 4) + ' 68 ' + f1(bx) + ' 64', 'ln');
    }
    return front(acc, sh, sx);
  });
  accBehind = withColour(function(acc, sh, sx){
    if(acc === 'wings'){
      var n = neckOf(sh, sx), x = n.x, y = n.y, hw = n.hw;
      var w = function(s){
        var x0 = x + s * (hw - 4);
        return A('M' + f1(x0) + ' ' + f1(y + 4) + ' C' + f1(x0 + s * 14) + ' ' + f1(y - 18) + ' ' + f1(x0 + s * 34) + ' ' + f1(y - 22) + ' ' + f1(x0 + s * 38) + ' ' + f1(y - 14)
          + ' C' + f1(x0 + s * 32) + ' ' + f1(y - 10) + ' ' + f1(x0 + s * 36) + ' ' + f1(y - 4) + ' ' + f1(x0 + s * 30) + ' ' + f1(y)
          + ' C' + f1(x0 + s * 26) + ' ' + f1(y + 4) + ' ' + f1(x0 + s * 28) + ' ' + f1(y + 10) + ' ' + f1(x0 + s * 20) + ' ' + f1(y + 12)
          + ' C' + f1(x0 + s * 12) + ' ' + f1(y + 14) + ' ' + f1(x0 + s * 6) + ' ' + f1(y + 12) + ' ' + f1(x0) + ' ' + f1(y + 4) + ' Z', 'ln', PAL.white)
          + A('M' + f1(x0 + s * 10) + ' ' + f1(y - 2) + ' C' + f1(x0 + s * 18) + ' ' + f1(y - 8) + ' ' + f1(x0 + s * 26) + ' ' + f1(y - 10) + ' ' + f1(x0 + s * 32) + ' ' + f1(y - 12), 'lt');
      };
      return w(-1) + w(1);
    }
    return behind(acc, sh, sx);
  });
})();

/* line weight follows how big a drawing is shown: 1.8px at the size used in a stall */
var PEN_REF = 72, PEN_BASE = 1.8;
/* 똥꾸: the preview and every option are drawn at one scale, so lines match */
var KK_H = 96, KK_VB = {x:-16, y:-32, w:152, h:140};
function scalePens(root){
  var list = (root || document).querySelectorAll('svg.poo-svg, svg.wc-svg, svg.item-svg, .ocard svg.art, .stall-preview svg.art, .who-prop svg.art, .stage svg.art');
  for(var i=0;i<list.length;i++){
    var sv = list[i];
    if(sv.closest('.tab, .ib, .mini-g, .pg-slot, .tiny-poo')) continue;
    var r = sv.getBoundingClientRect();
    if(!r.height) continue;
    var vb = sv.viewBox && sv.viewBox.baseVal;
    /* normalise by how much of the viewBox is drawing: poo boxes carry margins for hats */
    var k = r.height / PEN_REF;
    if(sv.classList.contains('poo-svg') && vb && vb.height) k = r.height * (126 / vb.height) / PEN_REF;
    var pen = Math.max(1.3, Math.min(4.2, PEN_BASE * k));
    if(sv.closest('#app[data-view="mypoo"]')) pen = 2;
    sv.style.setProperty('--pen', pen.toFixed(2) + 'px');
  }
}
(function(){
  var pf = paintFrames;
  paintFrames = function(root){ var r = pf.apply(this, arguments); scalePens(root && root.querySelectorAll ? root : document); return r; };
  window.addEventListener('resize', function(){ scalePens(document); });
})();

/* owner mark: a small key after the owner's name in the stall */
function iconKey(){
  return '<svg class="art key-ic" viewBox="0 0 24 14" width="15" height="9" fill="none" aria-hidden="true">'
    + A('M5.4 2.2 C8.2 2.2 9.8 4.4 9.8 7 C9.8 9.6 8.2 11.8 5.4 11.8 C2.6 11.8 1 9.6 1 7 C1 4.4 2.6 2.2 5.4 2.2 Z', 'ln', '#F4C64E')
    + A('M9.8 7 L22 7 M18 7 L18 10.4 M21 7 L21 9.6', 'ln') + '</svg>';
}

/* 'nothing' tiles: a hand-drawn X */
var iconNone = withHand(function(){
  return '<svg class="art none-x" viewBox="0 0 40 40" width="30" height="30" fill="none" aria-hidden="true">' + A('M9 9.4 C16 16.4 23.6 24 31 31 M30.6 9 C23.6 16 16.4 23.6 9.4 31', 'ln') + '</svg>';
}, .8);
/* owner mark, redrawn: a wobbly little key */
iconKey = withHand(function(){
  return '<svg class="art key-ic" viewBox="0 0 30 18" width="20" height="12" fill="none" aria-hidden="true">'
    + A('M7.4 3.4 C10.8 3.2 12.8 5.8 12.6 9 C12.4 12.2 10.2 14.6 7 14.4 C3.8 14.2 1.8 11.8 2 8.8 C2.2 5.6 4.2 3.6 7.4 3.4 Z', 'ln', '#F4C64E')
    + A('M7.2 7.4 C7.9 7.4 8.4 8 8.3 8.8 C8.2 9.6 7.6 10 6.9 9.9', 'lt')
    + A('M12.6 9 C17 8.8 22 8.8 27.6 9.2 M22.4 9.1 C22.6 10.6 22.6 12 22.4 13.4 M26.4 9.2 C26.6 10.4 26.6 11.4 26.4 12.4', 'ln') + '</svg>';
}, .55);

/* mini game toilet paper: a rougher hand */
iconTP = withHand(function(size){
  var w = size || 26;
  return '<svg class="art tp-svg" viewBox="0 0 64 64" width="' + w + '" height="' + w + '" fill="none" aria-hidden="true">'
    + A('M12.4 18 C12 26 12.8 34.4 12.2 42.6 C13 48.4 19.4 51.6 26.6 51 C34 51.4 40.4 47.6 40.4 41.6 C40.8 33.4 39.8 25.8 40.4 17.2', 'ln', 'var(--bg)')
    + A('M26.4 11 C34.4 11.4 40.6 13.6 40.4 17.4 C40 21 33.6 23.8 26 23.4 C18.4 23.6 12.2 21 12.4 17.6 C12.8 13.8 19 10.8 26.4 11 Z', 'ln', 'var(--bg)')
    + A('M26.6 14.6 C29.6 14.8 31.4 16 31 17.6 C30.8 19 28.8 20.2 26 20 C23.4 20 21.6 18.6 22 17.2 C22.4 15.8 24 14.4 26.6 14.6 Z', 'ln', PALC.grey)
    + A('M34.4 49.6 C35.2 53 34.6 57 35.6 60.4 C38.4 59.6 41.6 60.4 44.6 59.6 C43.6 55.4 44 51 42.6 46.4', 'ln', 'var(--bg)')
    + A('M35.6 55.2 C38.2 54.6 40.6 55.8 43.6 55', 'lt')
    + A('M16.4 30.6 C18 31.4 19.4 31.4 21 30.8', 'lt');
}, 1.15);

/* flush: a light blue wave rises through the stall, then drains away */
var FLUSHES = {}, _prevBusy = null;
function flushWave(uid, fresh){
  var st = document.querySelector('.stall[data-user-id="' + uid + '"], .stall[data-owner-id="' + uid + '"]');
  var f = FLUSHES[uid];
  if(!st || !f) return;
  if(st.querySelector('.flush-wave')) return;
  var el = document.createElement('span');
  el.className = 'flush-wave';
  el.style.animationDelay = (-(Date.now() - f.at)) + 'ms';
  el.innerHTML = '<span class="fw-in" style="animation-delay:' + (-(Date.now() - f.at)) + 'ms"><svg viewBox="0 0 200 120" preserveAspectRatio="none" aria-hidden="true">'
    + '<path d="M0 14 C25 4 50 4 75 14 S125 24 150 14 S200 4 200 14 L200 120 L0 120 Z" fill="#CFE4F4"/>'
    + '<path d="M0 14 C25 4 50 4 75 14 S125 24 150 14 S200 4 200 14" fill="none" stroke="var(--ink)" stroke-width="1.6" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg></span>';
  st.insertBefore(el, st.firstChild.nextSibling);
}
function startFlush(uid){
  FLUSHES[uid] = {at:Date.now()};
  setTimeout(function(){ delete FLUSHES[uid]; }, 1700);
  flushWave(uid, true);
}
(function(){
  var pf = paintFrames;
  paintFrames = function(root){
    var r = pf.apply(this, arguments);
    if(state.view === 'room'){
      var now = {}, list = document.querySelectorAll('.stall');
      for(var i=0;i<list.length;i++){
        var u = list[i].getAttribute('data-owner-id');
        if(u && list[i].classList.contains('busy')) now[u] = 1;
      }
      if(_prevBusy && _prevBusy.room === state.roomId){
        for(var k in _prevBusy.set){ if(!now[k] && !FLUSHES[k]) startFlush(k); }
      }
      _prevBusy = {room:state.roomId, set:now};
      for(var f in FLUSHES) flushWave(f);
    } else _prevBusy = null;
    return r;
  };
})();
/* ---------- v8.1: items swapped, a proper plunger, more stall props ---------- */
(function(){
  ['medal', 'sash', 'toothbrush'].forEach(function(a){ var i = ACCS.indexOf(a); if(i >= 0) ACCS.splice(i, 1); });
  ['pinwheel', 'mic', 'bubbletea'].forEach(function(a){ ACCS.push(a); });
  var names = {pinwheel:['바람개비', 'Pinwheel'], mic:['마이크', 'Mic'], bubbletea:['버블티', 'Bubble tea']};
  for(var k in names){ I18N.ko['acc.' + k] = names[k][0]; I18N.en['acc.' + k] = names[k][1]; }
  var prev = accFront;
  accFront = withColour(function(acc, sh, sx){
    var n = neckOf(sh, sx), R = n.R, bx = R + 12;
    if(acc === 'plunger'){
      /* standing next to the poo: red rubber cup on the floor, wooden handle up */
      var px = R + 13;
      return A('M' + f1(px - 1.6) + ' 92 C' + f1(px - 1.8) + ' 76 ' + f1(px - 1.6) + ' 60 ' + f1(px - 1.2) + ' 44 C' + f1(px - 1.2) + ' 42.6 ' + f1(px + 1.6) + ' 42.6 ' + f1(px + 1.6) + ' 44 C' + f1(px + 1.8) + ' 60 ' + f1(px + 1.8) + ' 76 ' + f1(px + 1.6) + ' 92 Z', 'ln', PAL.brown)
        + A('M' + f1(px - 11) + ' 103.6 C' + f1(px - 11.4) + ' 97 ' + f1(px - 6.6) + ' 91.4 ' + f1(px) + ' 91.4 C' + f1(px + 6.6) + ' 91.4 ' + f1(px + 11.4) + ' 97 ' + f1(px + 11) + ' 103.6 C' + f1(px + 4) + ' 104.4 ' + f1(px - 4) + ' 104.4 ' + f1(px - 11) + ' 103.6 Z', 'ln', PAL.red)
        + A('M' + f1(px - 12.6) + ' 103.6 C' + f1(px - 4) + ' 102.4 ' + f1(px + 4) + ' 102.4 ' + f1(px + 12.6) + ' 103.6', 'ln')
        + A('M' + f1(px - 6) + ' 96 C' + f1(px - 4.6) + ' 94.4 ' + f1(px - 3) + ' 93.6 ' + f1(px - 1.4) + ' 93.4', 'lt', null, ' stroke="' + PAL.white + '"');
    }
    if(acc === 'pinwheel'){
      return A('M' + f1(R - 3) + ' 84 C' + f1(R + 3) + ' 72 ' + f1(R + 9) + ' 54 ' + f1(bx) + ' 36', 'ln')
        + A('M' + f1(bx) + ' 36 L' + f1(bx) + ' 22 C' + f1(bx + 6) + ' 22 ' + f1(bx + 9) + ' 27 ' + f1(bx) + ' 36 Z', 'ln', PAL.red)
        + A('M' + f1(bx) + ' 36 L' + f1(bx + 14) + ' 36 C' + f1(bx + 14) + ' 42 ' + f1(bx + 9) + ' 45 ' + f1(bx) + ' 36 Z', 'ln', PAL.yellow)
        + A('M' + f1(bx) + ' 36 L' + f1(bx) + ' 50 C' + f1(bx - 6) + ' 50 ' + f1(bx - 9) + ' 45 ' + f1(bx) + ' 36 Z', 'ln', PAL.blue)
        + A('M' + f1(bx) + ' 36 L' + f1(bx - 14) + ' 36 C' + f1(bx - 14) + ' 30 ' + f1(bx - 9) + ' 27 ' + f1(bx) + ' 36 Z', 'ln', PAL.green);
    }
    if(acc === 'mic'){
      return A('M' + f1(R - 3) + ' 84 C' + f1(R + 2) + ' 74 ' + f1(R + 6) + ' 62 ' + f1(R + 9) + ' 52 L' + f1(R + 15) + ' 54 C' + f1(R + 12) + ' 64 ' + f1(R + 7) + ' 76 ' + f1(R + 1) + ' 86 Z', 'ln', '#555555')
        + A('M' + f1(R + 13) + ' 36 C' + f1(R + 19) + ' 36 ' + f1(R + 22) + ' 41 ' + f1(R + 20.4) + ' 46 C' + f1(R + 19) + ' 51 ' + f1(R + 14) + ' 54 ' + f1(R + 9.4) + ' 52 C' + f1(R + 5) + ' 50 ' + f1(R + 4) + ' 44 ' + f1(R + 6.4) + ' 40 C' + f1(R + 8) + ' 37.4 ' + f1(R + 10.4) + ' 36 ' + f1(R + 13) + ' 36 Z', 'ln', PAL.grey)
        + A('M' + f1(R + 8) + ' 42 C' + f1(R + 12) + ' 43 ' + f1(R + 16) + ' 45 ' + f1(R + 19.6) + ' 47.6 M' + f1(R + 11) + ' 37.4 C' + f1(R + 14) + ' 40 ' + f1(R + 16.4) + ' 43 ' + f1(R + 18) + ' 46', 'lt');
    }
    if(acc === 'bubbletea'){
      var cx = R + 11;
      return A('M' + f1(cx - 9) + ' 58 C' + f1(cx - 3) + ' 57.4 ' + f1(cx + 3) + ' 57.4 ' + f1(cx + 9) + ' 58 C' + f1(cx + 8) + ' 68 ' + f1(cx + 7) + ' 78 ' + f1(cx + 6) + ' 88 C' + f1(cx + 2) + ' 88.6 ' + f1(cx - 2) + ' 88.6 ' + f1(cx - 6) + ' 88 C' + f1(cx - 7) + ' 78 ' + f1(cx - 8) + ' 68 ' + f1(cx - 9) + ' 58 Z', 'ln', '#E9D3B4')
        + A('M' + f1(cx - 4) + ' 83 l.1 0 M' + f1(cx) + ' 85 l.1 0 M' + f1(cx + 3.6) + ' 82.6 l.1 0 M' + f1(cx - 1.6) + ' 80 l.1 0 M' + f1(cx + 2) + ' 79 l.1 0', 'lt', null, ' stroke-width="3.2"')
        + A('M' + f1(cx - 10) + ' 58 C' + f1(cx - 3) + ' 56.6 ' + f1(cx + 3) + ' 56.6 ' + f1(cx + 10) + ' 58 C' + f1(cx + 3) + ' 59.4 ' + f1(cx - 3) + ' 59.4 ' + f1(cx - 10) + ' 58 Z', 'ln', PAL.white)
        + A('M' + f1(cx + 1) + ' 57.6 L' + f1(cx + 5) + ' 44', 'ln', null, ' stroke="' + PAL.pink + '" stroke-width="3"');
    }
    return prev(acc, sh, sx);
  });

  /* stall props: 9 more */
  var pn = {duck:['오리', 'Duck'], candle:['향초', 'Candle'], book:['만화책', 'Comic'], phone:['폰', 'Phone'], cactus:['선인장', 'Cactus'],
    frame:['액자', 'Frame'], lamp:['스탠드', 'Lamp'], tissue:['티슈', 'Tissues'], cup:['양치컵', 'Cup']};
  for(var q in pn){ I18N.ko['prop.' + q] = pn[q][0]; I18N.en['prop.' + q] = pn[q][1]; }
  var prevProp = iconProp;
  iconProp = withHand(withColour(function(kind){
    var o = '<svg class="art prop-svg" viewBox="0 0 28 28" width="24" height="24" fill="none" aria-hidden="true">', z = '</svg>';
    switch(kind){
      case 'duck': return o + A('M7 15.6 C7 12.6 9.4 10.4 12.4 10.8 C12.2 7.2 14.6 4.6 17.8 4.8 C20.6 5 22.2 7.4 21.8 10 C23.6 10 25 10.4 25.6 11 C24.6 12 23 12.4 21.4 12.4 C22.6 14 23.4 16 23.2 18.4 C23 23 19 25.6 14 25.6 C9.4 25.6 6.8 23 6.8 19.6 C5.4 18.8 4.6 17.4 5 15.6 C5.6 16 6.4 16 7 15.6 Z', 'ln', PAL.yellow)
        + A('M18.6 8.2 l.1 0', 'lt', null, ' stroke-width="2"') + A('M11.6 17.4 C13.6 19.6 16.6 19.8 18.6 17.8', 'lt') + z;
      case 'candle': return o + A('M9 12.4 C12.4 12 15.6 12 19 12.4 C19.2 16.8 19.2 21.2 19 25.6 C15.6 25.9 12.4 25.9 9 25.6 C8.8 21.2 8.8 16.8 9 12.4 Z', 'ln', PAL.cream)
        + A('M14 12.2 L14 9.4', 'ln') + A('M14 3.2 C16.4 5.6 16.6 8 14 9.4 C11.4 8 11.6 5.6 14 3.2 Z', 'ln', PAL.yellow) + z;
      case 'book': return o + A('M4.6 9 C8.4 8.4 11.6 9 14 10.6 C16.4 9 19.6 8.4 23.4 9 C23.6 14.4 23.6 19.6 23.4 25 C19.6 24.4 16.4 25 14 26.4 C11.6 25 8.4 24.4 4.6 25 C4.4 19.6 4.4 14.4 4.6 9 Z', 'ln', PAL.white)
        + A('M14 10.6 C14 16 14 21.2 14 26.4', 'ln') + A('M6.8 13.6 C8.6 13.2 10.4 13.4 12 14 M6.8 17 C8.6 16.6 10.4 16.8 12 17.4 M16 14 C17.6 13.4 19.4 13.2 21.2 13.6', 'lt')
        + A('M17.4 18 C18.4 16.6 20.4 16.8 20.6 18.6 C20.8 20.4 18.6 21.4 17.2 20.4 Z', 'ln', PAL.red) + z;
      case 'phone': return o + A('M8.6 5 C8.6 3.8 9.4 3.2 10.6 3.2 L17.6 3.2 C18.8 3.2 19.6 3.8 19.6 5 L19.8 23.8 C19.8 25 19 25.6 17.8 25.6 L10.6 25.6 C9.4 25.6 8.6 25 8.6 23.8 Z', 'ln', '#555555')
        + A('M10.4 6.4 C12.8 6.2 15.4 6.2 17.8 6.4 L17.8 21 C15.4 21.2 12.8 21.2 10.4 21 Z', 'ln', PAL.sky) + A('M13.2 23.4 L15.2 23.4', 'lt') + z;
      case 'cactus': return o + A('M11.6 18.4 C11.4 14 11.4 9.6 11.8 5.6 C12 3.4 16 3.4 16.2 5.6 C16.6 9.6 16.6 14 16.4 18.4 Z', 'ln', PAL.green)
        + A('M11.6 13.4 C9.4 13.6 8 12.4 8 10 C8 8.8 9.8 8.8 9.8 10 C9.8 11 10.4 11.4 11.6 11.4 M16.4 11.4 C18.6 11.6 20 10.4 20 8 C20 6.8 18.2 6.8 18.2 8 C18.2 9 17.6 9.4 16.4 9.4', 'ln')
        + A('M8.4 18.4 C12.2 18.2 15.8 18.2 19.6 18.4 C19.2 20.8 18.8 23.2 18.2 25.6 C15.4 25.9 12.6 25.9 9.8 25.6 C9.2 23.2 8.8 20.8 8.4 18.4 Z', 'ln', PAL.terra) + z;
      case 'frame': return o + A('M5.6 6.4 C11.2 6 16.8 6 22.4 6.4 C22.8 11.8 22.8 17.2 22.4 22.6 C16.8 23 11.2 23 5.6 22.6 C5.2 17.2 5.2 11.8 5.6 6.4 Z', 'ln', PAL.brown)
        + A('M8.4 9.2 C12.2 9 15.8 9 19.6 9.2 L19.6 19.8 C15.8 20 12.2 20 8.4 19.8 Z', 'ln', PAL.sky)
        + A('M9.4 18.6 C11 15.4 12.6 14 14.2 15.8 C15.4 14.6 17 14.8 18.6 18.6', 'lt') + A('M14 6.2 L14 3 M11.6 3 L16.4 3', 'lt') + z;
      case 'lamp': return o + A('M8 12.4 C9.2 8.4 10.6 5.6 12 4 C13.4 3.8 14.6 3.8 16 4 C17.4 5.6 18.8 8.4 20 12.4 C16 12.8 12 12.8 8 12.4 Z', 'ln', PAL.yellow)
        + A('M14 12.6 C14 16.6 14 20.6 14 24', 'ln') + A('M9 25.6 C12.4 24.4 15.6 24.4 19 25.6 Z', 'ln', '#555555') + z;
      case 'tissue': return o + A('M10.6 15 C10.4 11 12 7.4 14.4 5.4 C15.6 8 17.6 9.6 18.4 15 Z', 'ln', PAL.white)
        + A('M5 14.4 C11 14 17 14 23 14.4 C23.4 18.2 23.4 21.8 23 25.6 C17 26 11 26 5 25.6 C4.6 21.8 4.6 18.2 5 14.4 Z', 'ln', PAL.sky) + A('M7.6 20 C11 19.6 17 19.6 20.4 20', 'lt') + z;
      case 'cup': return o + A('M8.4 12 C12.2 11.6 15.8 11.6 19.6 12 C19.2 16.6 18.8 21.2 18.2 25.6 C15.4 25.9 12.6 25.9 9.8 25.6 C9.2 21.2 8.8 16.6 8.4 12 Z', 'ln', PAL.sky)
        + A('M12.4 12 C12.6 8.4 13.2 5.6 14.4 3.4 L16.6 3.8 C15.6 6.4 15 9.2 14.8 12', 'ln', PAL.pink) + A('M14 4 L17.4 4.8', 'lt') + z;
    }
    return prevProp(kind);
  }), .25);
})();
/* ---------- v8.2 ---------- */
(function(){
  /* shapes: twins out */
  for(var i=SHAPES.length-1;i>=0;i--) if(SHAPES[i].id === 'twins') SHAPES.splice(i, 1);
  /* hats: cat ears out */
  for(var j=HATS.length-1;j>=0;j--) if(HATS[j].id === 'cat') HATS.splice(j, 1);
  /* toilets: smart / retro / kid out, ocean / flower in */
  TOILETS = ['basic', 'bidet', 'wood', 'gold', 'fluffy', 'mint', 'black', 'stripe', 'heart', 'ocean', 'flower', 'throne', 'space', 'squat'];
  var tn = {mint:['민트', 'Mint'], black:['블랙', 'Black'], stripe:['줄무늬', 'Stripes'], heart:['하트', 'Heart'], ocean:['바다', 'Ocean'], flower:['꽃', 'Flower'], throne:['왕좌', 'Throne'], space:['우주', 'Space']};
  for(var k in tn){ I18N.ko['wc.' + k] = tn[k][0]; I18N.en['wc.' + k] = tn[k][1]; }
  /* knock lines: 20 each */
  var KL = {
    ko:['{name} 화이팅', '{name} 쾌변해', '똥중호걸 {name}', '잘 쌀 수 있어 {name}', '{name} 한 방에 가자', '시원하게 가자 {name}', '{name} 무사 배출 기원', '끝까지 간다 {name}',
        '{name} 오늘 컨디션 최고', '{name}의 장은 강하다', '믿는다 {name}', '{name} 숨 크게 쉬고', '{name} 천천히, 하지만 확실하게', '전설이 되어라 {name}', '{name} 너만 믿는다',
        '{name} 뒤는 우리가 지킨다', '{name} 오늘은 될 거야', '힘내라 {name} 장 운동', '{name} 쾌변 장인', '{name} 마지막 한 방'],
    en:['Go {name}', 'Smooth one, {name}', '{name}, legend of the stall', 'You got this, {name}', 'One shot, {name}', 'Let it flow, {name}', 'Safe landing, {name}', 'All the way, {name}',
        'Peak form today, {name}', '{name} has iron guts', 'We believe in you, {name}', 'Deep breaths, {name}', 'Slow but sure, {name}', 'Become a legend, {name}', 'All on you, {name}',
        'We got your back, {name}', 'Today is the day, {name}', 'Bowels of steel, {name}', '{name}, master of the flush', 'One last push, {name}'],
    ja:['{name}がんばれ', '{name}快便で', 'トイレの英雄{name}', '{name}ならできる', '{name}一発で', 'すっきりいこう{name}', '{name}無事を祈る', '最後まで{name}',
        '{name}絶好調', '{name}の腸は強い', '信じてる{name}', '{name}深呼吸', 'ゆっくり確実に{name}', '伝説になれ{name}', '{name}だけが頼り',
        '後ろは任せろ{name}', '今日こそ{name}', '腸よ動け{name}', '快便職人{name}', '{name}最後のひと押し'],
    zh:['{name}加油', '{name}顺畅', '厕所英雄{name}', '{name}你可以的', '{name}一次搞定', '痛快点{name}', '祝{name}平安落地', '坚持到底{name}',
        '{name}状态满分', '{name}肠胃最强', '相信你{name}', '{name}深呼吸', '慢慢来{name}', '成为传说吧{name}', '全靠你了{name}',
        '我们挺你{name}', '今天一定行{name}', '肠道加油{name}', '{name}通畅大师', '{name}最后一下']
  };
  for(var l in KL) KL[l].forEach(function(x, i){ I18N[l]['knock.' + i] = x; });
})();
/* push lines: 20 each way, never the same twice in a row */
var PUSH_OUT = {
  ko:['{t}랑 같이 끄응', '{t} 옆에서 힘 보태는 중', '{t}, 같이 간다', '{t}에게 기 전송 중', '{t} 등 뒤에서 끄으응', '{t}랑 호흡 맞추는 중', '{t}, 하나 둘 셋 끄응', '{t} 위해 배에 힘 줌',
      '{t}랑 동시 끄응', '{t}에게 장 운동 전파 중', '{t} 응원 겸 끄응', '{t}, 내 힘까지 가져가', '{t}랑 같이 이겨낸다', '{t} 몫까지 끄응', '{t}에게 기합 송출', '{t}, 지금이야',
      '{t}랑 한마음 끄응', '{t} 위해 한 번 더', '{t}, 마지막까지 같이', '{t}에게 근력 지원'],
  en:['Pushing with {t}', 'Lending {t} a hand', 'Together, {t}', 'Sending {t} strength', 'Hnngh for {t}', 'Breathing with {t}', '1, 2, 3, push {t}', 'Bracing for {t}',
      'Synced push with {t}', 'Good vibes to {t}', 'Cheer-push for {t}', 'Take my strength, {t}', 'We beat this, {t}', 'Pushing for two, {t}', 'Battle cry for {t}', 'Now, {t}!',
      'One mind with {t}', 'Once more for {t}', 'To the end, {t}', 'Backup for {t}'],
  ja:['{t}と一緒にふんっ', '{t}に力を貸す', '{t}、一緒に', '{t}に気を送信中', '{t}のためにふんっ', '{t}と呼吸を合わせる', '{t}、せーの', '{t}のために力む',
      '{t}と同時にふんっ', '{t}に念を送る', '{t}応援ふんっ', '{t}、力を受け取れ', '{t}と乗り越える', '{t}の分までふんっ', '{t}に気合い', '{t}、今だ',
      '{t}と心をひとつに', '{t}のためにもう一回', '{t}、最後まで', '{t}に援軍'],
  zh:['和{t}一起使劲', '帮{t}一把', '{t}，一起', '给{t}传功', '为{t}嗯——', '和{t}同步呼吸', '{t}，一二三', '为{t}用力',
      '和{t}同时使劲', '给{t}加油', '{t}，边喊边使劲', '{t}，拿走我的力气', '和{t}一起扛', '替{t}使劲', '给{t}打气', '{t}，就现在',
      '和{t}一条心', '为{t}再来一次', '{t}，坚持到底', '支援{t}']
};
var PUSH_IN = {
  ko:['{n}가 옆에서 같이 끄응', '{n}가 힘 보태는 중', '{n}에게서 기 도착', '{n}가 등 뒤에서 끄으응', '{n}랑 호흡 맞추는 중', '{n}: 하나 둘 셋 끄응', '{n}가 배에 힘 주는 중', '{n}도 같이 동시 끄응',
      '{n}가 장 운동 전파 중', '{n}의 응원 겸 끄응', '{n}가 자기 힘까지 보냄', '{n}랑 같이 이겨내는 중', '{n}가 내 몫까지 끄응', '{n}의 기합 수신', '{n}: 지금이야', '{n}랑 한마음 끄응',
      '{n}가 한 번 더 힘 줌', '{n}가 끝까지 같이 간대', '{n}의 근력 지원 도착', '{n}가 옆 칸에서 끄응'],
  en:['{n} pushes with you', '{n} lends a hand', 'Strength from {n}', '{n} hnnghs along', 'Breathing with {n}', '{n}: 1, 2, 3, push', '{n} braces for you', '{n} synced push',
      'Good vibes from {n}', '{n} cheer-pushes', '{n} sends all their strength', 'Beating it with {n}', '{n} pushes for two', 'Battle cry from {n}', '{n}: now!', 'One mind with {n}',
      '{n} goes once more', '{n} is with you to the end', 'Backup from {n}', '{n} pushes from next door'],
  ja:['{n}が一緒にふんっ', '{n}が力を貸す', '{n}から気が届いた', '{n}が後ろでふんっ', '{n}と呼吸を合わせる', '{n}：せーの', '{n}が力んでる', '{n}も同時にふんっ',
      '{n}が念を送る', '{n}の応援ふんっ', '{n}が力を全部くれた', '{n}と乗り越える', '{n}が代わりにふんっ', '{n}の気合い受信', '{n}：今だ', '{n}と心をひとつに',
      '{n}がもう一回', '{n}が最後まで一緒', '{n}の援軍到着', '{n}が隣でふんっ'],
  zh:['{n}在旁边一起使劲', '{n}帮你一把', '收到{n}的功力', '{n}在背后嗯——', '和{n}同步呼吸', '{n}：一二三', '{n}在用力', '{n}同时使劲',
      '{n}给你加油', '{n}边喊边使劲', '{n}把力气都给你了', '和{n}一起扛', '{n}替你使劲', '收到{n}的打气', '{n}：就现在', '和{n}一条心',
      '{n}再来一次', '{n}陪你到底', '{n}的支援到了', '{n}在隔壁使劲']
};
var _lastPush = {};
function pushLine(set, key, vars){
  var lang = state.lang && set[state.lang] ? state.lang : 'ko', arr = set[lang];
  var i = Math.floor(Math.random() * arr.length);
  if(i === _lastPush[key]) i = (i + 1 + Math.floor(Math.random() * (arr.length - 1))) % arr.length;
  _lastPush[key] = i;
  var namedT = lang === 'ko' ? josaPick(vars.t || '', arr[i], '{t}') : arr[i];
  var namedN = lang === 'ko' ? josaPick(vars.n || '', namedT, '{n}') : namedT;
  return namedN.replace(/\{t\}/g, vars.t || '').replace(/\{n\}/g, vars.n || '');
}
/* Korean particles after a name: 가/이, 랑/이랑, 에게 stay */
function josaPick(name, line, tag){
  var c = String(name).charCodeAt(String(name).length - 1);
  var bat = c >= 0xAC00 && c <= 0xD7A3 && ((c - 0xAC00) % 28) > 0;
  return line.split(tag + '가').join(tag + (bat ? '이' : '가'))
    .split(tag + '랑').join(tag + (bat ? '이랑' : '랑'));
}
interLine = function(kind, v){
  var lang = state.lang || 'ko';
  var me = state.user ? state.user.name : '';
  var kk = {ko:'똑똑 ', en:'Knock knock ', ja:'コンコン ', zh:'咚咚 '}[lang] || '똑똑 ';
  if(kind === 'knockOut') return kk + '“' + knockLine(v.msg, v.target) + '”';
  if(kind === 'knockIn') return kk + v.name + ': “' + knockLine(v.msg, v.target || me) + '”';
  if(kind === 'pushOut') return pushLine(PUSH_OUT, 'out', {t:v.target});
  if(kind === 'pushIn') return pushLine(PUSH_IN, 'in', {n:v.name});
  return '';
};
/* hats sit on the top tier: per hat a little lift (in poo units, scaled with the shape) */
HAT_BOOST = {bunny:[1.15, -6], propeller:[1.22, -2], grad:[1.22, -6], cowboy:[1.2, -2], tophat:[1.18, -6], chef:[1.22, -2], wizard:[1.22, -2], tp:[1.22, -6], crown:[1.08, -2], cone:[1, -6], hardhat:[1, -6]};
(function(){
  /* email + password accounts (Supabase Auth) */
  var L = {
    ko:{'auth.email':'이메일', 'auth.emailPh':'name@example.com', 'auth.pwPh':'6자 이상', 'auth.nickPh':'홍똥',
        'auth.forgot':'비밀번호를 잊었어요', 'auth.checkMail':'인증 메일을 보냈어요. 메일함에서 링크를 누르면 가입이 끝나요.',
        'auth.resetSent':'재설정 메일을 보냈어요. 메일함을 확인해 주세요.', 'auth.needEmail':'이메일을 먼저 입력해 주세요.',
        'err.bad_email':'이메일 형식을 확인해 주세요.', 'err.bad_password':'비밀번호는 6자 이상.', 'err.bad_name':'닉네임을 입력해 주세요.',
        'err.email_taken':'이미 가입된 이메일이에요.', 'err.bad_login':'이메일 또는 비밀번호가 달라요.', 'err.not_confirmed':'메일 인증을 먼저 끝내 주세요.',
        'settings.email':'이메일'},
    en:{'auth.email':'Email', 'auth.emailPh':'name@example.com', 'auth.pwPh':'6+ characters', 'auth.nickPh':'Poopy',
        'auth.forgot':'Forgot password', 'auth.checkMail':'We sent a confirmation email. Tap the link to finish signing up.',
        'auth.resetSent':'Reset email sent. Check your inbox.', 'auth.needEmail':'Enter your email first.',
        'err.bad_email':'Check the email address.', 'err.bad_password':'Password needs 6+ characters.', 'err.bad_name':'Enter a nickname.',
        'err.email_taken':'That email is already registered.', 'err.bad_login':'Wrong email or password.', 'err.not_confirmed':'Confirm your email first.',
        'settings.email':'Email'},
    ja:{'auth.email':'メール', 'auth.emailPh':'name@example.com', 'auth.pwPh':'6文字以上', 'auth.nickPh':'うんち',
        'auth.forgot':'パスワードを忘れた', 'auth.checkMail':'確認メールを送りました。リンクを押すと登録完了です。',
        'auth.resetSent':'再設定メールを送りました。', 'auth.needEmail':'先にメールを入力して。',
        'err.bad_email':'メールアドレスを確認。', 'err.bad_password':'パスワードは6文字以上。', 'err.bad_name':'ニックネームを入れて。',
        'err.email_taken':'登録済みのメールです。', 'err.bad_login':'メールかパスワードが違います。', 'err.not_confirmed':'先にメール認証を。',
        'settings.email':'メール'},
    zh:{'auth.email':'邮箱', 'auth.emailPh':'name@example.com', 'auth.pwPh':'至少6位', 'auth.nickPh':'便便',
        'auth.forgot':'忘记密码', 'auth.checkMail':'验证邮件已发送，点击邮件中的链接完成注册。',
        'auth.resetSent':'重置邮件已发送，请查收。', 'auth.needEmail':'请先输入邮箱。',
        'err.bad_email':'请检查邮箱格式。', 'err.bad_password':'密码至少6位。', 'err.bad_name':'请输入昵称。',
        'err.email_taken':'该邮箱已注册。', 'err.bad_login':'邮箱或密码错误。', 'err.not_confirmed':'请先完成邮箱验证。',
        'settings.email':'邮箱'}
  };
  for(var l in L) for(var k in L[l]) I18N[l][k] = L[l][k];
  var M = {
    ko:{'auth.sentH':'메일함을 확인해 주세요', 'auth.sentB':'{email}로 인증 메일을 보냈어요. 메일 속 링크를 누르면 바로 로그인돼요.',
        'auth.resend':'메일 다시 보내기', 'auth.resent':'다시 보냈어요.', 'auth.back':'로그인 화면으로'},
    en:{'auth.sentH':'Check your inbox', 'auth.sentB':'We sent a link to {email}. Tap it and you are in.',
        'auth.resend':'Send again', 'auth.resent':'Sent again.', 'auth.back':'Back to log in'},
    ja:{'auth.sentH':'メールを確認してください', 'auth.sentB':'{email} に認証メールを送りました。リンクを押すとそのままログインします。',
        'auth.resend':'もう一度送る', 'auth.resent':'送り直しました。', 'auth.back':'ログイン画面へ'},
    zh:{'auth.sentH':'请查看邮箱', 'auth.sentB':'验证邮件已发送到 {email}，点击邮件中的链接即可直接登录。',
        'auth.resend':'重新发送', 'auth.resent':'已重新发送。', 'auth.back':'返回登录'}
  };
  for(var l2 in M) for(var k2 in M[l2]) I18N[l2][k2] = M[l2][k2];
  var E = {
    ko:{'auth.pwShow':'비밀번호 보기', 'auth.pwHide':'비밀번호 숨기기', 'err.nick_taken':'이미 쓰는 닉네임이에요.',
        'err.mail_limit':'메일을 너무 많이 보냈어요. 잠시 뒤에 다시 해 주세요.', 'err.mail_blocked':'이 주소로는 메일을 보낼 수 없어요. 관리자에게 알려 주세요.',
        'err.signup_off':'지금은 가입을 받지 않아요.'},
    en:{'auth.pwShow':'Show password', 'auth.pwHide':'Hide password', 'err.nick_taken':'That nickname is taken.',
        'err.mail_limit':'Too many emails sent. Try again a bit later.', 'err.mail_blocked':'We cannot send mail to this address yet.',
        'err.signup_off':'Sign-ups are closed right now.'},
    ja:{'auth.pwShow':'パスワードを表示', 'auth.pwHide':'パスワードを隠す', 'err.nick_taken':'そのニックネームは使用中。',
        'err.mail_limit':'メールの送りすぎ。少し待ってから。', 'err.mail_blocked':'このアドレスにはまだ送れません。', 'err.signup_off':'今は登録を受け付けていません。'},
    zh:{'auth.pwShow':'显示密码', 'auth.pwHide':'隐藏密码', 'err.nick_taken':'该昵称已被使用。',
        'err.mail_limit':'邮件发送太频繁，请稍后再试。', 'err.mail_blocked':'暂时无法向该邮箱发送邮件。', 'err.signup_off':'暂不开放注册。'}
  };
  for(var l3 in E) for(var k3 in E[l3]) I18N[l3][k3] = E[l3][k3];
  I18N.ko['tab.friends'] = '똥친'; I18N.ko['friends.title'] = '나의 똥 친구';
  I18N.ko['tab.mypoo'] = '똥꾸'; I18N.ko['mypoo.title'] = '내 똥 꾸미기';
})();
/* ===================== hand: stroke lettering ===================== */
/* a marker writing letters as single strokes, so titles look drawn, not typed */
var GLYPH = {
  ' ': {a:7, d:[]},
  'P': {a:17, d:['M2 20 L2 -7','M2 -6.8 C9 -8.4 14.6 -5.6 14.6 -.8 C14.6 4 9.2 5 2 4.4']},
  'o': {a:14, d:['M7 6.6 C3.6 6.6 2 9.4 2 13.2 C2 17.2 3.8 20 7.2 20 C10.6 20 12.4 17.2 12.4 13.2 C12.4 9.4 10.6 6.6 7 6.6 Z']},
  'r': {a:11, d:['M2.4 20 L2.2 7','M2.2 12.4 C3.4 8.2 6.4 6.4 9.4 7.6']},
  'i': {a:7, d:['M5 8 L4.9 20','M5 2.4 L5.14 2.5']},
  'e': {a:14, d:['M2 13.6 C2 9 4.4 6.6 7.4 6.7 C10.4 6.8 12.2 9.6 11.6 12.8 C11.6 12.8 8 13.4 2.6 13.7 C2.8 17.6 5.6 20.2 8.6 19.2']},
  'n': {a:13, d:['M2.2 20 L2.1 7','M2.1 12 C3.6 7.6 6.6 6.2 9 8 C10.8 9.4 11 13 11 20']},
  'd': {a:14, d:['M11 20 L11.2 -5','M11.2 13.4 C9.6 7.6 6.8 5.6 4.6 7.2 C2.4 8.8 2 12.4 2.4 14.6 C3 17.6 5 20 7.4 19.6 C9.4 19.2 10.6 17 11.1 14.4']},
  't': {a:10, d:['M5 20 L5.2 3 C5.4 -.2 7 -1.6 9 -1.2','M1 8 L9.6 7.4']},
  'g': {a:14, d:['M11 13.4 C11 8.8 9 6.4 6.4 6.8 C3.8 7.2 2 9.8 2 13.2 C2 16.8 3.9 19.8 6.4 19.8 C9 19.8 11 16.8 11 13.2','M11 13.2 L11 21 C11 25.4 9.6 27.6 6.4 27.6 C4.8 27.6 3.6 27 2.8 26.2']},
  's': {a:12, d:['M10 9.4 C8.6 6.8 3.6 6.2 2.4 8.8 C1.2 11.4 4 12.8 6.4 13.6 C9 14.6 11 16.2 9.6 18.4 C8.2 20.6 3 20.4 1.6 17.8']},
  'H': {a:19, d:['M2.4 20 L2.2 -7','M16.6 20.2 L16.4 -6.8','M2.2 6.4 L16.4 5.9']},
  'O': {a:19, d:['M9 -7 C3.4 -7 1 -2 1 6.4 C1 14.4 3.6 20 9.2 20 C14.8 20 17.4 14.4 17.4 6.4 C17.4 -2 15 -7 9 -7 Z']},
  'M': {a:21, d:['M1.4 20 L3.4 -7 L10 8.6 L16.8 -7 L18.8 20']},
  'E': {a:16, d:['M14 -7 L2.6 -6.6 L2.6 20 L14.4 19.8','M2.6 6.4 L12.4 5.9']},
  'Y': {a:18, d:['M1.4 -7 L9 6.6 L17 -7','M9 6.6 L9 20']},
  'S': {a:16, d:['M14 -3.4 C11.6 -7 4.6 -7.4 3 -3.4 C1.4 .6 4.6 4.6 8.4 6.4 C12.4 8.4 15 12.4 13 16 C11 19.8 3.6 19.6 1.4 15.6']},
  '-': {a:9, d:['M1.4 13.8 L8 13.2']},
  '+': {a:15, d:['M7.4 4 L7.2 18','M.6 11.6 L14 11']},
  '.': {a:5, d:['M2.2 18.6 L2.34 18.7']}
};
function hrand(n){
  var x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}
function handW(str){
  var w = 0;
  for(var i=0;i<str.length;i++){
    var g = GLYPH[str.charAt(i)] || GLYPH[' '];
    w += g.a;
  }
  return w;
}
/* handText('Poo-riend', {h:38, sw:2.6, underline:true}) -> inline svg */
function handText(str, opt){
  opt = opt || {};
  var seed = opt.seed || 1;
  var h = opt.h || 20;
  var sw = opt.sw || 2.4;
  var W = handW(str) + 4;
  var VBH = 40;                       /* y: -10 .. 30 */
  var out = '<svg class="hand" viewBox="-2 -10 ' + W + ' ' + VBH + '" width="' + Math.round(h * W / VBH) + '" height="' + h + '" aria-hidden="true" style="--hw:' + sw + 'px;overflow:visible">';
  out += '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">';
  var x = 0;
  for(var i=0;i<str.length;i++){
    var ch = str.charAt(i);
    var g = GLYPH[ch] || GLYPH[' '];
    var r1 = hrand(i + 1 + seed * 13);
    var r2 = hrand(i + 41 + seed * 29);
    var r3 = hrand(i + 97 + seed * 7);
    var dy = (r1 - .5) * 1.5;
    var dx = (r2 - .5) * 1.1;
    var rot = (r3 - .5) * (opt.tilt || 3.2);
    var sc = 1 + (r1 - .5) * .07;
    if(g.d.length){
      out += '<g transform="translate(' + (x + dx).toFixed(2) + ' ' + dy.toFixed(2) + ') rotate(' + rot.toFixed(2) + ' 0 20) scale(' + sc.toFixed(3) + ' 1)">';
      for(var k=0;k<g.d.length;k++){
        out += '<path d="' + g.d[k] + '" vector-effect="non-scaling-stroke"/>';
      }
      out += '</g>';
    }
    x += g.a;
  }
  if(opt.underline){
    out += '<path d="M-3 ' + (29).toFixed(1) + ' C' + (W * .22).toFixed(1) + ' 27.4 ' + (W * .48).toFixed(1) + ' 26.6 ' + (W * .74).toFixed(1) + ' 24.6 S' + (W + 1).toFixed(1) + ' 21.6 ' + (W + 5).toFixed(1) + ' 19.6" vector-effect="non-scaling-stroke"/>';
  }
  out += '</g></svg>';
  return out;
}

function cloudSVG(w){
  return '<svg viewBox="0 0 96 44" width="' + w + '" height="' + Math.round(w * 44 / 96) + '" fill="none" stroke="var(--line-2)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="M20 36 C10.4 36 5 30 10.6 24.4 C7.4 17.6 15.8 12 23 16.4 C26.2 8.6 38.4 8 42.6 15.6 C51.4 13.4 57 20 52.6 26.4 C58.8 28.6 56.6 34.6 49.4 36 Z"/>'
    + '</svg>';
}

/* ===================== hand-drawn frames ===================== */
function srnd(n){
  var x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}
function roundRectPoint(w, h, r, t){
  /* walk the perimeter, return [x, y, nx, ny] */
  var tw = Math.max(0, w - 2 * r), th = Math.max(0, h - 2 * r), arc = Math.PI * r / 2;
  var seg = [tw, arc, th, arc, tw, arc, th, arc];
  var i, acc = 0;
  for(i=0;i<seg.length;i++){
    if(t <= acc + seg[i] + 1e-6){
      var u = t - acc;
      if(i === 0) return [r + u, 0, 0, -1];
      if(i === 1){ var a = -Math.PI/2 + u / r; return [w - r + Math.cos(a) * r, r + Math.sin(a) * r, Math.cos(a), Math.sin(a)]; }
      if(i === 2) return [w, r + u, 1, 0];
      if(i === 3){ var b = u / r; return [w - r + Math.cos(b) * r, h - r + Math.sin(b) * r, Math.cos(b), Math.sin(b)]; }
      if(i === 4) return [w - r - u, h, 0, 1];
      if(i === 5){ var c = Math.PI/2 + u / r; return [r + Math.cos(c) * r, h - r + Math.sin(c) * r, Math.cos(c), Math.sin(c)]; }
      if(i === 6) return [0, h - r - u, -1, 0];
      var d = Math.PI + u / r;
      return [r + Math.cos(d) * r, r + Math.sin(d) * r, Math.cos(d), Math.sin(d)];
    }
    acc += seg[i];
  }
  return [r, 0, 0, -1];
}
function roughRect(w, h, r, seed, amp){
  r = Math.max(0, Math.min(r, Math.min(w, h) / 2));
  var per = 2 * (Math.max(0, w - 2 * r)) + 2 * (Math.max(0, h - 2 * r)) + 2 * Math.PI * r;
  if(per < 8) return '';
  var n = Math.max(14, Math.min(180, Math.round(per / 7)));
  var p1 = srnd(seed) * 6.283, p2 = srnd(seed + 7) * 6.283, p3 = srnd(seed + 13) * 6.283;
  var pts = [];
  for(var i=0;i<n;i++){
    var t = per * i / n;
    var p = roundRectPoint(w, h, r, t);
    var u = i / n;
    var off = amp * (.55 * Math.sin(6.28318 * u * 2 + p1) + .3 * Math.sin(6.28318 * u * 5 + p2) + .15 * Math.sin(6.28318 * u * 9 + p3));
    pts.push([p[0] + p[2] * off, p[1] + p[3] * off]);
  }
  function f(v){ return Math.round(v * 10) / 10; }
  var d = 'M' + f(pts[0][0]) + ' ' + f(pts[0][1]);
  for(var k=1;k<=pts.length;k++){
    var a = pts[k % pts.length], b = pts[(k + 1) % pts.length];
    d += ' Q' + f(a[0]) + ' ' + f(a[1]) + ' ' + f((a[0] + b[0]) / 2) + ' ' + f((a[1] + b[1]) / 2);
  }
  return d + ' Z';
}
var SK_SEL = '.bx,.cnt,.room-flags .tag,.ocard .badge,.card,.room,.wall,.stall,.pooping,.big-poop-btn,.btn,.add-btn,.ocard.on,.room-doors .ocard.on,.frow,.stat,.empty,.panel,.profile-stage,.toast,.lang-grid button,.seg-mini button,.cell.has,.cell.sel,.ib,.x,.cal-nav button,.sw,.rank-card';
var skSeed = 3;
function skRadius(el, w, h){
  var cl = el.className || '';
  if(/btn|add-btn|stat|empty|toast|sw\b|knob|ib\b|lang-grid|seg-mini|cal-nav|\bx\b|swatch/.test(cl)) return Math.min(h / 2, 26);
  if(/cell/.test(cl)) return 10;
  if(/panel/.test(cl)) return window.innerWidth < 900 ? 24 : 30;
  return Math.min(18, Math.min(w, h) / 3);
}
/* v7.1: calmer lines — a slight hand wobble only */
function skAmp(el, w, h){
  var cl = el.className || '';
  if(/btn|add-btn|ib\b|\bx\b|sw\b|knob|lang-grid|seg-mini|swatch|cell/.test(cl)) return .35;
  if(/stall|ocard|stat/.test(cl)) return .5;
  return .7;
}
/* the frame is drawn INSIDE the element's box, so scroll containers never clip it
   and neighbours never overlap it */
function frameD(w, h, r, seed, amp){
  r = Math.max(0, Math.min(r, Math.min(w, h) / 2));
  var per = 2 * Math.max(0, w - 2 * r) + 2 * Math.max(0, h - 2 * r) + 2 * Math.PI * r;
  if(per < 8) return '';
  var n = Math.max(16, Math.min(160, Math.round(per / 8)));
  var p1 = srnd(seed) * 6.283, p2 = srnd(seed + 7) * 6.283;
  var k0 = Math.floor(srnd(seed + 3) * n), over = Math.max(2, Math.round(n * .05));
  var pts = [];
  for(var i=0;i<=n + over;i++){
    var u = ((k0 + i) % n) / n;
    var p = roundRectPoint(w, h, r, per * u);
    var off = amp * (.7 * Math.sin(6.283 * u * 2 + p1) + .3 * Math.sin(6.283 * u * 5 + p2));
    if(i > n) off += amp * .9 * (i - n) / over;
    pts.push([p[0] + p[2] * off, p[1] + p[3] * off]);
  }
  var d = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
  for(var k=1;k<pts.length - 1;k++){
    d += ' Q' + pts[k][0].toFixed(1) + ' ' + pts[k][1].toFixed(1) + ' ' + ((pts[k][0] + pts[k + 1][0]) / 2).toFixed(1) + ' ' + ((pts[k][1] + pts[k + 1][1]) / 2).toFixed(1);
  }
  return d;
}
/* frames: one pen stroke inside the element's box (never clipped, never overlapping a neighbour) */
function skPaint(el){
  if(!el || el.nodeType !== 1) return;
  var old = null;
  for(var i=0;i<el.children.length;i++){ if(el.children[i].classList && el.children[i].classList.contains('skf')) old = el.children[i]; }
  if(old) el.removeChild(old);
  var w = el.offsetWidth, h = el.offsetHeight;
  if(w < 8 || h < 8) return;
  el.classList.add('sk');
  var filled = el.matches('.btn.ink,.toast,.tag.new,.cell.sel') && !el.closest('.room-flags');
  var tint = filled ? '' : el.matches('.stall.busy.m-loose,.pooping.m-loose') ? 'var(--loose-fill)' : el.matches('.stall.busy') ? 'var(--busy-fill)' : el.matches('.stall-bubble') ? '#FFF6D8' : el.matches('.cnt.c') ? '#FFE3A0' : el.matches('.cnt.k') ? '#D6E8F7' : '';
  var sw = 1.9;
  var amp = Math.min(1.3, .55 + Math.min(w, h) / 160);
  if(el.matches('.btn,.big-poop-btn')) amp = Math.max(amp, 1.15);
  if(el.matches('.panel')) amp = Math.min(amp, .7);
  var m = sw / 2 + amp * 1.9 + .6;
  var r = Math.max(2, skRadius(el, w, h) - m);
  var seed = hashSeed((el.className || '') + '|' + (el.getAttribute('data-action') || '') + '|' + (el.getAttribute('data-tab') || el.getAttribute('data-val') || el.getAttribute('data-room') || '') + '|' + Math.round(w / 8) + 'x' + Math.round(h / 8));
  var fill = (filled || tint) ? '<path d="' + roughRect(w - m * 2, h - m * 2, r, seed, amp) + '" fill="' + (tint || 'var(--ink)') + '"' + (tint ? ' class="' + (tint === 'var(--loose-fill)' ? 'tint-loose' : 'tint') + '" style="fill:' + tint + ';stroke:none"' : '') + ' stroke="none" transform="translate(' + m.toFixed(2) + ',' + m.toFixed(2) + ')"/>' : '';
  var d = roughRect(w - m * 2, h - m * 2, r, seed, amp);
  if(!d) return;
  el.insertAdjacentHTML('afterbegin', '<svg class="skf" viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" height="' + h + '" aria-hidden="true">' + fill
    + '<path class="' + (filled ? 'skf-fill' : '') + '" transform="translate(' + m.toFixed(2) + ',' + m.toFixed(2) + ')" d="' + d + '" fill="none" stroke="var(--ink)" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round"/></svg>');
}

function paintFrames(root){
  if(!root || !root.querySelectorAll) return;
  var els = root.querySelectorAll(SK_SEL);
  for(var i=0;i<els.length;i++) skPaint(els[i]);
}
/* ---- sheet: frame must hug the panel's real size, and the panel is re-measured
   when the sheet body, safe area or webfont changes its height ---- */
var sheetRO = null;
function paintSheet(){
  var host = document.getElementById('sheet');
  if(!host) return;
  var panel = host.querySelector('.panel');
  if(!panel) return;
  paintFrames(panel);
  if(sheetRO){ try{ sheetRO.disconnect(); }catch(e){} sheetRO = null; }
  if(typeof ResizeObserver === 'function'){
    sheetRO = new ResizeObserver(function(){
      var p = host.querySelector('.panel');
      if(p) skPaint(p);
    });
    try{ sheetRO.observe(panel); }catch(e){}
  }
}
function repaintAll(){
  paintFrames(document.getElementById('app'));
  paintTabLine(document.querySelector('#tabbar .tab-line'));
  paintSheet();
}
function paintTabLine(el){
  if(!el) return;
  var w = el.offsetWidth || 420;
  var r1 = srnd(11), r2 = srnd(23), r3 = srnd(41);
  var d = 'M0 ' + (5 + r1 * 1.6).toFixed(1)
    + ' C' + (w * .18).toFixed(0) + ' ' + (3.4 + r2).toFixed(1)
    + ' ' + (w * .36).toFixed(0) + ' ' + (5.6 - r3).toFixed(1)
    + ' ' + (w * .54).toFixed(0) + ' ' + (4.4 + r1).toFixed(1)
    + ' S' + (w * .84).toFixed(0) + ' ' + (6.2 - r2).toFixed(1)
    + ' ' + w.toFixed(0) + ' ' + (4.2 + r3).toFixed(1);
  el.innerHTML = '<svg viewBox="0 0 ' + w + ' 10" width="' + w + '" height="10" preserveAspectRatio="none" aria-hidden="true"><path d="' + d + '" fill="none" stroke="var(--ink)" stroke-width="2.1" stroke-linecap="round"/></svg>';
}

/* ===================== icons ===================== */
function iconPooSmall(){
  return '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" stroke="none" aria-hidden="true"><path d="M12.8 3.9 C11.6 5 11.4 6.3 12.3 7 C10 7.3 8.7 8.7 9.4 10.1 C7.2 10.6 6.2 12.3 7.2 13.7 C5.4 14.4 4.8 16.2 6.3 17.2 C8.8 18.9 15.2 18.9 17.7 17.2 C19.2 16.2 18.6 14.4 16.8 13.7 C17.8 12.3 16.8 10.6 14.6 10.1 C15.3 8.7 14 7.3 11.7 7 C12.6 6.3 12.4 5 12.8 3.9 Z"/></svg>';
}
function iconBell(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="M6.2 16.4 L6.6 10.2 C6.8 7.2 8.8 4.8 12 4.8 C15.2 4.8 17.2 7.2 17.4 10.2 L17.8 16.4"/>'
    + '<path d="M4.2 16.6 L19.8 16.2"/>'
    + '<path d="M9.8 19.4 C10.9 20.6 13.1 20.6 14.2 19.4"/>'
    + '</svg>';
}
function iconBack(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.8 4.4 L6.4 12 L15 19.6"/><path d="M6.8 12.1 L19.6 11.7"/></svg>';
}
function iconArrow(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.6 12.2 L18.6 11.8"/><path d="M13 5.4 L19.4 12 L12.8 18.4"/></svg>';
}
function iconCal(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.6 6.4 L20.2 6 L20.4 20.4 L3.4 20.6 Z"/><path d="M3.7 10.8 L20.3 10.5"/><path d="M8 3.2 L8 7.2 M16 3.4 L16 7"/><path d="M6.8 14.4 L9 14.3 M11.6 14.3 L13.8 14.3 M16.2 14.3 L17.6 14.3"/><path d="M7 17.4 L9 17.4 M11.6 17.4 L13.6 17.4"/></svg>';
}
function iconPlus(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" aria-hidden="true"><path d="M12 3.8 L11.8 20.4 M3.6 12.2 L20.4 11.8"/></svg>';
}
function iconClose(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" aria-hidden="true"><path d="M5.4 5.8 L18.6 18.4 M18.4 5.6 L5.6 18.6"/></svg>';
}
function iconDots(){
  return '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5.6" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="18.4" cy="12" r="1.8"/></svg>';
}
function iconHeart(size, filled){
  var w = size || 16;
  return '<svg viewBox="0 0 24 24" width="' + w + '" height="' + w + '" fill="' + (filled ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" aria-hidden="true"><path d="M12 20.4 C4.4 14.8 2.2 9.6 5 6.6 C7.3 4.2 10.7 5 12 7.5 C13.4 4.9 16.9 4.3 19 6.7 C21.8 9.9 19.4 15 12 20.4 Z"/></svg>';
}
function iconFlush(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.2 8.2 L20 7.8"/><path d="M6.2 8.4 L7.6 19.6 L16.6 19.2 L17.8 8.2"/><path d="M9.2 4.4 L15 4.2 L15 8 L9.2 8.2 Z"/><path d="M14.8 3.2 L16.6 5.6"/></svg>';
}
function iconGame(){
  return '<svg viewBox="3.4 4.2 18.4 16.4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.6 8.2 L16.4 8 Q19 8.1 19.6 10.6 L20.5 15 Q20.9 17.4 18.6 17.5 Q17.1 17.5 16.2 16 L15.8 15.3 L8.6 16 Q6.9 16 6 14.5 Q5.1 13 4.8 11.1 Q4.3 8.3 7.6 8.2 Z"/><path d="M7.2 11.4 L9.4 11.4 M8.3 10.3 L8.3 12.5"/><circle cx="15.6" cy="11" r=".9" fill="currentColor" stroke="none"/><circle cx="17.4" cy="13" r=".9" fill="currentColor" stroke="none"/></svg>';
}
function grabLine(){
  return '<svg viewBox="0 0 44 4" width="44" height="4" preserveAspectRatio="none" aria-hidden="true"><path d="M1 2.4 C12 1.2 30 3 43 1.8" fill="none" stroke="var(--line-2)" stroke-width="2" stroke-linecap="round"/></svg>';
}
function floorLine(){
  return '<svg viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true"><path d="M1 6 C40 3.4 80 7.4 120 5 S 180 3 199 6" fill="none" stroke="var(--ink)" stroke-width="1.8" stroke-linecap="round" opacity=".55"/></svg>';
}
function groundArt(){
  var w = 430, i, out = '';
  var wave = 'M0 4.4 C60 1.6 130 7 200 4.2 S 340 1.4 430 4.8';
  out += '<path d="' + wave + ' L430 100 L0 100 Z" fill="var(--soft)" stroke="none"/>';
  out += '<path d="' + wave + '" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round" vector-effect="non-scaling-stroke"/>';
  out += '<g stroke="var(--line-2)" stroke-width="1.5" stroke-linecap="round" vector-effect="non-scaling-stroke">';
  for(i=0;i<15;i++){ var x1 = 8 + i * 29 + (i % 2 ? 6 : 0); out += '<path d="M' + x1 + ' 15 L' + (x1 - 6) + ' 40"/>'; }
  for(i=0;i<15;i++){ var x2 = 21 + i * 29 + (i % 2 ? 0 : 5); out += '<path d="M' + x2 + ' 47 L' + (x2 - 6) + ' 72"/>'; }
  for(i=0;i<15;i++){ var x3 = 10 + i * 29 + (i % 2 ? 4 : 0); out += '<path d="M' + x3 + ' 79 L' + (x3 - 6) + ' 96"/>'; }
  out += '</g>';
  return '<svg viewBox="0 0 ' + w + ' 100" preserveAspectRatio="none" aria-hidden="true">' + out + '</svg>';
}
function skyArt(){
  return '<span class="c1">' + cloudSVG(92) + '</span>'
    + '<span class="c2">' + cloudSVG(72) + '</span>'
    + '<span class="c3">' + cloudSVG(60) + '</span>'
    + '<span class="c4">' + cloudSVG(52) + '</span>'
    + '<span class="c5">' + cloudSVG(44) + '</span>';
}
function shadowArt(){
  return '<svg viewBox="0 0 60 12" aria-hidden="true"><path d="M8 7 C14 3 46 3 52 6.6 C46 10.4 14 10.6 8 7 Z" fill="var(--ink)" opacity=".1"/></svg>';
}

/* ===================== v7.1 icons: door + stall props + nav + game art ===================== */
var DOORS = ['plain', 'wc', 'moon', 'planks', 'window', 'number'];
var PROPS = ['none', 'plant', 'roll', 'news', 'clock', 'spray', 'radio', 'duck', 'candle', 'book', 'phone', 'cactus', 'frame', 'lamp', 'tissue', 'cup'];
/* door, filled with the toilet's colour (--door), decorated by its owner */
/* small things that sit in the corner of a stall */
/* nav: drawn like the sketch — a pen, one pass, a little uneven */
function navHome(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="M2.2 11.8 C5.4 8.6 8.6 5.6 12.2 2.6 C15.6 5.4 18.8 8.4 21.8 11.6"/>'
    + '<path d="M4.8 9.6 C4.6 13.6 4.8 17.4 5 21.2 C9.6 21.4 14.4 21.2 19 21 C19.2 17.2 19.2 13.4 19 9.4"/>'
    + '<path d="M9.8 21.2 C9.8 19 9.8 16.8 10 15 C11.4 14.8 12.8 14.8 14.2 15 C14.4 17 14.4 19 14.2 21.1"/>'
    + '</svg>';
}
function navPoo(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="M6.6 20.8 C3.4 20.8 2.2 18.2 4.2 16.4 C2.8 14 4.8 11.6 7.4 12.2 C6.8 9.2 9.4 7.4 11.8 8.6 C11.4 6.4 12.6 4.4 14.6 3.4 C14.6 5.4 16 6.8 15.4 8.8 C17.8 8.6 19.4 10.8 18.4 12.8 C21.2 13 22.2 16 20.2 17.4 C21.8 19.6 19.8 21 17.2 20.8 C13.6 21 10.2 21 6.6 20.8 Z"/>'
    + '</svg>';
}
function navFriends(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="M8.4 3.4 C5.8 3.4 4.8 6.4 6.2 8.4 C7.4 10 10 9.8 10.8 8 C11.6 6 10.6 3.4 8.2 3.5"/>'
    + '<path d="M2.6 20.8 C2.4 15.6 4.6 12 8.4 12 C11.8 12 13.8 15.2 14 20.6"/>'
    + '<path d="M16.4 5.2 C14.2 5.4 13.6 8.2 15 9.6 C16.4 10.8 18.6 9.8 18.8 7.8 C19 6.2 17.8 5.1 16.3 5.3"/>'
    + '<path d="M13.2 13.6 C14 12.4 15.2 11.8 16.6 11.8 C19.6 11.8 21.4 15 21.4 20.6"/>'
    + '</svg>';
}
var _gearD = null;
function navGear(){
  if(!_gearD){
    /* a hand-drawn flower inside a circle, as in the sketch */
    var pts = [];
    for(var i=0;i<=72;i++){
      var a = i / 72 * Math.PI * 2;
      var r = 6.3 + 1.5 * Math.cos(a * 7) + .25 * Math.sin(a * 3);
      pts.push((12 + r * Math.cos(a)).toFixed(2) + ' ' + (12 + r * Math.sin(a)).toFixed(2));
    }
    _gearD = 'M' + pts.join(' L') + ' Z';
  }
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="M12.2 1.6 C6 1.4 1.8 6.2 1.9 12.2 C2 18 6.4 22.3 12.2 22.2 C18 22.1 22.2 17.6 22.1 11.8 C22 6.2 17.8 1.7 11.8 1.7" stroke-width="1.8"/>'
    + '<path d="' + _gearD + '"/>'
    + '<path d="M12 10.3 C13.2 10.3 13.7 11.2 13.6 12 C13.5 12.9 12.8 13.6 11.9 13.5 C11 13.4 10.4 12.8 10.4 12 C10.4 11 11.1 10.3 12.1 10.4"/>'
    + '</svg>';
}
/* mini game: a proper toilet (tank, lid, seat, bowl, base, handle) and a roll with a hanging sheet */
function iconToilet(){
  return '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="M14.6 4.6 L45.4 4.2 C46.6 4.2 47.2 4.8 47.2 6 L47.4 21.4 L14.4 21.8 L14.2 6.2 C14.2 5 14.6 4.6 14.6 4.6 Z" fill="var(--bg)"/>'
    + '<path d="M38.4 9.6 L43 9.4" stroke-width="2.4"/>'
    + '<path d="M10.4 22 L51.8 21.6 C52.6 21.6 53 22.2 52.8 23 L52.4 25.6 L9.6 26 L9.2 23.4 C9 22.6 9.6 22 10.4 22 Z" fill="var(--bg)"/>'
    + '<path d="M11.4 26 C12.2 36.8 20 44.4 31.6 44.4 C42.8 44.4 50.2 36.6 50.8 25.8" fill="var(--bg)"/>'
    + '<path d="M17.4 29.4 C21 32.4 42 32.2 45 29.2" stroke-width="2" opacity=".5"/>'
    + '<path d="M25.4 43.6 L23.6 55.2 L40 55 L37.8 43.4" fill="var(--bg)"/>'
    + '<path d="M20.6 55.4 L43 55.1" stroke-width="3"/>'
    + '</svg>';
}
function iconTP(size){
  var w = size || 26;
  return '<svg viewBox="0 0 64 64" width="' + w + '" height="' + w + '" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="M11 16.4 L11 41.6 C11 47.6 18.4 51.2 26 51.2 C33.6 51.2 41 47.6 41 41.6 L41 16.4" fill="var(--bg)"/>'
    + '<path d="M11 16.4 C11 10.6 41 10.6 41 16.4 C41 22.2 11 22.2 11 16.4 Z" fill="var(--bg)"/>'
    + '<path d="M26 13.8 C29.6 13.8 30.8 15 30.8 16.4 C30.8 17.8 29.6 19 26 19 C22.4 19 21.2 17.8 21.2 16.4 C21.2 15 22.4 13.8 26 13.8 Z" fill="currentColor"/>'
    + '<path d="M29.8 49.8 L30 60.2 L34.4 58 L39 60.4 L38.8 48.6" fill="var(--bg)" stroke-width="2.6"/>'
    + '<path d="M30.6 55 L32 55 M34 55 L35.4 55 M37.2 55 L38.4 55" stroke-width="1.8"/>'
    + '<path d="M11 30.4 C17.2 33 34.8 33 41 30.4" stroke-width="2" opacity=".45"/>'
    + '</svg>';
}
/* ===================== extra icons ===================== */
function iconJoin(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.4 4.6 L18.8 4.2 L19.2 19.6 L10.6 19.4"/><path d="M3.6 12.2 L14 11.8"/><path d="M10.2 8 L14.2 11.9 L10.4 15.8"/></svg>';
}
function iconCopy(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.4 8.2 L19.6 7.8 L20 20.2 L8.6 20.4 Z"/><path d="M15.6 4.8 L15.4 3.8 L4 4.2 L4.4 16.4 L5.6 16.4"/></svg>';
}
function iconMuscle(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.4 19.6 C4 14 5 9.4 7.6 6.6 L10.2 4.2 L12.4 6.2 L10.4 9 C12.6 8.4 15 9 16.2 10.6 C18.4 9.8 20.4 11.6 20 14.4 C19.4 18.2 15.4 20.4 10.6 20.2 Z"/><path d="M9.2 14.2 C11 12.8 13.4 12.8 15 14"/></svg>';
}
function iconSiren(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.4 18.4 L6.8 11.6 C7 8.2 9.2 6.2 12 6.2 C14.8 6.2 17 8.2 17.2 11.6 L17.6 18.4"/><path d="M4.4 18.6 L19.6 18.2 L19.6 20.6 L4.4 20.8 Z"/><path d="M12 2.2 L12 3.6 M4.2 5 L5.4 6 M19.8 5 L18.6 6"/><path d="M10 11.6 C10.2 10.2 11 9.6 12 9.6"/></svg>';
}

/* ===================== state ===================== */
var PREF_KEY = 'poo-riend-v7-prefs';
var state = {
  lang:'ko',
  theme:'light',
  user:null,
  view:'tabs',
  tab:'home',
  roomId:null,
  rooms:[],
  myPoo:{shape:'classic', thick:1, hat:'none'},
  notifications:[],
  prefs:{autoLogout:'0'},
  best:0,
  pushGoal:30
};
var sheet = null;
var pooTab = 'shape';
var previewMood = 'normal';
var authMode = 'login';
var booted = false;
var liveOn = false;
var clockSkew = 0;
var pendingJoin = null;
function nowS(){ return Date.now() + clockSkew; }

function savePrefs(){
  try{ localStorage.setItem(PREF_KEY, JSON.stringify({lang:state.lang, theme:state.theme, prefs:state.prefs})); }catch(e){}
}
function save(){ savePrefs(); }
function loadPrefs(){
  try{
    var o = JSON.parse(localStorage.getItem(PREF_KEY) || 'null');
    if(o){
      if(o.lang && I18N[o.lang]) state.lang = o.lang;
      if(o.theme === 'dark' || o.theme === 'light') state.theme = o.theme;
      if(o.prefs) state.prefs = {autoLogout:o.prefs.autoLogout || '0'};
      return;
    }
  }catch(e){}
  var nl = (navigator.language || 'ko').slice(0, 2);
  if(I18N[nl]) state.lang = nl;
  try{ if(window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) state.theme = 'dark'; }catch(e){}
}

/* ---------- server ---------- */
function api(method, url, body){
  var o = {method:method, headers:{}, credentials:'same-origin'};
  if(body !== undefined){ o.headers['Content-Type'] = 'application/json'; o.body = JSON.stringify(body); }
  return fetch(url, o).then(function(r){
    return r.json().catch(function(){ return {}; }).then(function(j){
      if(!r.ok){
        var e = new Error(j.error || 'server'); e.code = j.error || 'server'; e.status = r.status;
        if(r.status === 401 && url !== '/api/login' && state.user){ kickOut(); }
        throw e;
      }
      return j;
    });
  }, function(){ var e = new Error('network'); e.code = 'network'; throw e; });
}
function errText(e){
  var k = 'err.' + ((e && e.code) || 'server');
  var s = t(k);
  if(s !== k && !(e && e.code === 'server' && e.raw)) return s;
  return (e && e.raw) ? t('err.server') + ' (' + String(e.raw).slice(0, 120) + ')' : t('err.server');
}
function applyState(s){
  if(!s || !s.user) return;
  state.user = s.user;
  state.rooms = s.rooms || [];
  state.notifications = s.notifications || [];
  state.myPoo = s.user.poo || state.myPoo;
  state.best = s.user.best || 0;
  state.pushGoal = s.pushGoal || 30;
  if(s.serverTime) clockSkew = s.serverTime - Date.now();
  /* keep taps that the server hasn't seen yet */
  if(pushQ && state.roomId){
    var ms = mySession(getRoom(state.roomId));
    if(ms && (ms.mode === 'hard' || ms.mode === 'loose')) ms.push = Math.min(state.pushGoal, ms.push + pushQ);
  }
}
var syncT = null, syncBusy = false, syncAgain = false;
function refresh(){
  if(syncBusy){ syncAgain = true; return Promise.resolve(); }
  syncBusy = true;
  return api('GET', '/api/state').then(function(s){
    applyState(s);
    if(state.view === 'room' && !getRoom(state.roomId)){ state.view = 'tabs'; state.roomId = null; }
    softRender();
  }, function(){}).then(function(){
    syncBusy = false;
    if(syncAgain){ syncAgain = false; scheduleSync(); }
  });
}
function scheduleSync(){
  if(syncT) clearTimeout(syncT);
  syncT = setTimeout(refresh, 120);
}
/* re-render without wiping what the user is typing in a sheet or the open game */
function softRender(){
  var app = document.getElementById('app');
  var keep = app ? app.scrollTop : 0;
  var inner = document.querySelector('#app .flist, #app .ogrid, #app .rooms, #app .set-scroll');
  var keepInner = inner ? inner.scrollTop : 0;
  render();
  if(app) app.scrollTop = keep;
  var inner2 = document.querySelector('#app .flist, #app .ogrid, #app .rooms, #app .set-scroll');
  if(inner2) inner2.scrollTop = keepInner;
  if(sheet && /^(calendar|notify|friendProfile|invite)$/.test(sheet.type)){
    var body = document.querySelector('#sheet .sheet-body');
    var st = body ? body.scrollTop : 0;
    renderSheet();
    var b2 = document.querySelector('#sheet .sheet-body');
    if(b2) b2.scrollTop = st;
  }
  if(MINI.on) miniUpdatePlayer();
}

/* ---------- realtime ---------- */
var es = null, esRetry = null;
function connectLive(){
  if(es){ try{ es.close(); }catch(e){} es = null; }
  if(!state.user || typeof EventSource !== 'function') return;
  es = new EventSource('/api/stream');
  es.onopen = function(){ setLive(true); scheduleSync(); };
  es.onerror = function(){
    setLive(false);
    if(es && es.readyState === 2){
      es = null;
      if(esRetry) clearTimeout(esRetry);
      esRetry = setTimeout(function(){ if(state.user) refresh().then(connectLive); }, 4000);
    }
  };
  es.addEventListener('sync', scheduleSync);
  es.addEventListener('note', function(ev){
    var d = {};
    try{ d = JSON.parse(ev.data); }catch(e){ return; }
    state.notifications.unshift({id:d.id || ('l' + Date.now()), key:d.key, vars:d.vars, at:d.at || Date.now(), read:false});
    updateBell();
    if((d.key === 'n.cheered' || d.key === 'n.knocked') && state.user && stallBubble(state.user.id, interLine(d.key === 'n.knocked' ? 'knockIn' : 'pushIn', d.vars || {}))){ /* shown on my stall */ }
    else toast(noteText(d), d.key === 'n.cheered' || d.key === 'n.knocked');
    playFx(d.fx);
  });
}
function disconnectLive(){
  if(es){ try{ es.close(); }catch(e){} es = null; }
  setLive(false);
}
function setLive(on){
  liveOn = on;
  var el = document.getElementById('live-dot');
  if(el){ el.classList.toggle('off', !on); el.title = on ? t('room.live') : t('live.off'); }
}
function noteText(n){
  if(n.key === 'n.knocked' && n.vars && n.vars.target) return esc(n.vars.name) + ' · ' + esc(knockLine(n.vars.msg, n.vars.target));
  var v = {}, src = n.vars || {};
  for(var k in src){ if(Object.prototype.hasOwnProperty.call(src, k)) v[k] = esc(src[k]); }
  return t(n.key, v);
}
function playFx(fx){
  if(fx === 'knock'){ knockSound(); vibrate([18, 40, 18]); }
  else if(fx === 'cheer'){ cheerSound(); vibrate(25); }
  else if(fx === 'siren'){ sirenSound(); vibrate([80, 60, 80, 60, 160]); quake(); }
  else if(fx === 'relief'){ reliefSound(); vibrate([10, 30, 60]); }
  else if(fx === 'enter'){ plopSound(); }
}
function quake(){ return;   /* v7.1: no screen shake */
}
function quake_unused(){
  var d = document.getElementById('device');
  if(!d) return;
  d.classList.remove('quake'); void d.offsetWidth; d.classList.add('quake');
  setTimeout(function(){ d.classList.remove('quake'); }, 900);
}

function getRoom(id){
  for(var i=0;i<state.rooms.length;i++){ if(state.rooms[i].id === id) return state.rooms[i]; }
  return null;
}
function memberName(room, uid){
  if(!room) return '?';
  for(var i=0;i<room.members.length;i++){ if(room.members[i].id === uid) return room.members[i].name; }
  return '?';
}
function memberPoo(m){
  if(!m) return state.myPoo;
  if(state.user && m.id === state.user.id) return state.myPoo;
  return m.poo || {shape:'classic', thick:1, hat:'none'};
}
function mySession(room){
  if(!room || !state.user) return null;
  for(var i=0;i<room.sessions.length;i++){ if(room.sessions[i].userId === state.user.id) return room.sessions[i]; }
  return null;
}
function isOwner(room){
  return !!(room && state.user && room.ownerId === state.user.id);
}
function unreadCount(){
  var n = 0;
  for(var i=0;i<state.notifications.length;i++){ if(!state.notifications[i].read) n++; }
  return n;
}
function sessionMood(s){
  if(!s) return 'normal';
  if((s.mode === 'hard' || s.mode === 'loose') && s.relieved) return 'normal';
  return s.mode || 'normal';
}
var SUSPECT_SEC = 10 * 60;

/* ===================== views ===================== */
function hueVars(room){
  var h = (room && typeof room.hue === 'number') ? room.hue : null;
  if(h === null) return '--ra:var(--ink); --ra-soft:var(--soft); --door:var(--bg);';
  if(state.theme === 'dark') return '--ra:hsl(' + h + ' 30% 66%); --ra-soft:hsl(' + h + ' 14% 19%); --door:hsl(' + h + ' 18% 26%);';
  return '--ra:hsl(' + h + ' 28% 40%); --ra-soft:hsl(' + h + ' 30% 93%); --door:hsl(' + h + ' 34% 84%);';
}
function roomCard(r){
  var active = r.sessions.length;
  var own = isOwner(r);
  var hard = 0, loose = 0;
  r.sessions.forEach(function(s){ var m = sessionMood(s); if(m === 'hard') hard++; if(m === 'loose') loose++; });
  return '<button class="room" data-action="openRoom" data-room="' + esc(r.id) + '" style="' + hueVars(r) + '">'
    + '<span class="room-door">' + iconDoor(active > 0, r.door) + '</span>'
    + '<span class="room-info">'
    +   '<b class="room-name">' + esc(r.name) + '</b>'
    +   '<span class="room-meta">' + t('home.members', {n:r.members.length})
    +     '<span class="dotsep">·</span>'
    +     (active ? '<span class="live">' + t('home.active', {n:active}) + '</span>' : t('home.idle'))
    +     (own ? '<span class="dotsep">·</span>' + t('home.owner') : '')
    +   '</span>'
    +   ((hard || loose) ? '<span class="room-flags">'
    +     (loose ? '<span class="tag new">' + t('tag.loose') + ' ' + loose + '</span>' : '')
    +     (hard ? '<span class="tag on">' + t('tag.hard') + ' ' + hard + '</span>' : '')
    +   '</span>' : '')
    + '</span>'
    + '<span class="room-side"><span class="room-go">' + iconArrow() + '</span></span>'
    + '</button>';
}

/* every member owns one stall (in join order); the owner decorates it */
function viewRoom(){
  var r = getRoom(state.roomId);
  if(!r) return viewHome();
  var mine = mySession(r);
  var ownerName = memberName(r, r.ownerId);
  var stalls = '';
  for(var i=0;i<r.members.length;i++){
    var mem = r.members[i];
    var uid = mem.id;
    var s = null;
    for(var k=0;k<r.sessions.length;k++){ if(r.sessions[k].userId === uid) s = r.sessions[k]; }
    var isMine = !!(state.user && uid === state.user.id);
    var deco = memberPoo(mem);
    var mood = sessionMood(s);
    var cls = s ? ('busy m-' + mood + (isMine ? ' mine' : '')) : ('free' + (isMine ? ' mine-free' : ''));
    var label = mem.name;
    var counts = stallCounts(s);
    stalls += '<div class="stall ' + cls + '" data-stall="' + i + '" data-owner-id="' + esc(uid) + '" data-user-id="' + esc(s ? uid : '') + '"'
      + ' aria-label="' + esc(label + ' ' + (s ? t('room.using') : t('room.free'))) + '">'
      + counts
      + '<span class="who"><span class="who-art">' + (s ? pooSVG(deco, 62, {mood:mood, noPuddle:true, noBadge:true}) : iconWC(deco.toilet))
      +   (!s && deco.prop && deco.prop !== 'none' ? '<span class="who-prop">' + iconProp(deco.prop) + '</span>' : '') + '</span></span>'
      + (s && (mood === 'hard' || mood === 'loose') ? '<span class="stall-mood">' + iconMood(mood) + '</span>' : '')
      + '<span class="stall-name' + ((s ? label : t('room.stallOf', {name:mem.name})).length > 8 ? ' xlong' : (s ? label : t('room.stallOf', {name:mem.name})).length > 5 ? ' long' : '') + '">' + esc(s ? label : t('room.stallOf', {name:mem.name})) + (uid === r.ownerId ? '<span class="owner-key" title="' + esc(t('room.owner')) + '">' + iconKey() + '</span>' : '') + '</span>'
      + '<span class="stall-sub"' + (s ? ' data-live="' + esc(r.id) + ':' + esc(uid) + '"' : '') + '>'
      +   (s ? dur((nowS() - s.startedAt) / 1000) : t('room.free')) + '</span>'
      + ((s && stallTag(s)) || '<span class="stall-mode ph" aria-hidden="true"></span>')
      + '</div>';
  }
  var action;
  if(mine){
    action = myPanel(r, mine);
  } else {
    action = '<div class="enter-wrap"><button class="big-poop-btn" data-action="enter">'
      + pooSVG(state.myPoo, 64)
      + '<span class="enter-label">' + t('room.enter') + '</span>'
      + '<span class="cap">' + t('room.enterSub') + '</span>'
      + '</button></div>';
  }
  return '<header class="room-top" style="' + hueVars(r) + '">'
    + '<button class="ib" data-action="back" aria-label="' + esc(t('room.back')) + '">' + iconBack() + '</button>'
    + '<div class="room-title"><b>' + esc(r.name) + '</b><span>' + t('room.inRoom', {n:r.members.length, a:r.sessions.length})
    +   (r.ownerId !== state.user.id ? ' · ' + t('room.ownerName', {name:esc(ownerName)}) : '') + '</span></div>'
    + '<span class="live-dot' + (liveOn ? '' : ' off') + '" id="live-dot"></span>'
    + '<button class="ib" data-action="invite" aria-label="' + esc(t('inv.title')) + '">' + iconPlus() + '</button>'
    + '<button class="ib" data-action="calendar" aria-label="' + esc(t('cal.title')) + '">' + iconCal() + '</button>'
    + '<button class="ib" data-action="roomAdmin" aria-label="' + esc(t('room.admin')) + '">' + iconDots() + '</button>'
    + '</header>'
    + '<div class="room-body">'
    +   '<div class="room-left">'
    +     '<div class="wall" style="' + hueVars(r) + '">' + stalls + '</div>'
    +     '<p class="hint">' + t('room.holdHint') + '</p>'
    +   '</div>'
    +   '<div class="room-right">' + action
    +     '<p class="room-code-line">' + t('add.code') + ' ' + esc(r.code) + '</p>'
    +   '</div>'
    + '</div>';
}

/* my poo: big preview on the left (vertically centred), options on the right.
   Tabs 문/소품 switch the preview to my stall. */
/* 똥꾸: two big sections (내 똥 / 내 칸); the option tabs sit in one fixed place */
var kkSec = 'poo';
var KK_TABS = {poo:['shape', 'thick', 'hat', 'acc'], stall:['toilet', 'prop']};
var kkDraft = null;
function kkCfg(){ if(!kkDraft) kkDraft = JSON.parse(JSON.stringify(state.myPoo || {})); return kkDraft; }
function kkDirty(){ return !!kkDraft && JSON.stringify(kkDraft) !== JSON.stringify(state.myPoo); }
function stallPreview(cfg){
  return '<div class="stall-preview">'
    + '<span class="sp-wc">' + iconWC(cfg.toilet) + '</span>'
    + (cfg.prop && cfg.prop !== 'none' ? '<span class="sp-prop">' + iconProp(cfg.prop) + '</span>' : '')
    + '</div>';
}
function ocard(kind, val, on, art, cap, badge){
  return '<button class="ocard nocap' + (on ? ' on' : '') + '" data-action="pick" data-kind="' + kind + '" data-val="' + val + '"'
    + ' aria-label="' + esc(cap) + '" title="' + esc(cap) + '">' + (badge ? '<span class="badge">NEW</span>' : '') + art + '</button>';
}
function viewMyPoo(){
  var cfg = kkCfg();
  if(KK_TABS[kkSec].indexOf(pooTab) < 0) pooTab = KK_TABS[kkSec][0];
  var bare = {shape:cfg.shape, thick:cfg.thick, hat:'none', acc:'none'};
  var grid = '';
  if(pooTab === 'shape'){
    SHAPES.forEach(function(s){ grid += ocard('shape', s.id, cfg.shape === s.id, pooSVG({shape:s.id, thick:cfg.thick}, KK_H, {kk:true}), t('shape.' + s.id)); });
  } else if(pooTab === 'thick'){
    THICKS.forEach(function(x, i){ grid += ocard('thick', i, cfg.thick === i, pooSVG({shape:cfg.shape, thick:i}, KK_H, {kk:true}), t('thick.' + i)); });
  } else if(pooTab === 'hat'){
    HATS.forEach(function(h, i){ grid += ocard('hat', h.id, cfg.hat === h.id, (h.id === 'none' ? '<span class="oc-none">' + iconNone() + '</span>' : '<span class="oc-item">' + itemSVG('hat', h.id, cfg) + '</span>'), h.id === 'none' ? t('mypoo.none') : t(h.name), i >= HATS.length - 5); });
  } else if(pooTab === 'acc'){
    ACCS.forEach(function(a, i){ grid += ocard('acc', a, (cfg.acc || 'none') === a, (a === 'none' ? '<span class="oc-none">' + iconNone() + '</span>' : '<span class="oc-item">' + itemSVG('acc', a, cfg) + '</span>'), t('acc.' + a), i >= ACCS.length - 5); });
  } else if(pooTab === 'toilet'){
    TOILETS.forEach(function(w, i){ grid += ocard('toilet', w, (cfg.toilet || 'basic') === w, '<span class="oc-wc">' + iconWC(w) + '</span>', t('wc.' + w), i >= TOILETS.length - 5); });
  } else {
    PROPS.forEach(function(p, i){ grid += ocard('prop', p, (cfg.prop || 'none') === p, p === 'none' ? '<span class="oc-none">' + iconNone() + '</span>' : '<span class="oc-prop">' + iconProp(p) + '</span>', t('prop.' + p), i >= PROPS.length - 5); });
  }
  var tabs = KK_TABS[kkSec].map(function(k){
    return '<button class="' + (pooTab === k ? 'on' : '') + '" data-action="pooTab" data-tab="' + k + '">' + t('mypoo.' + k) + '</button>';
  }).join('');
  var secs = ['poo', 'stall'].map(function(k){
    return '<button class="kk-sec' + (kkSec === k ? ' on' : '') + '" data-action="kkSec" data-sec="' + k + '">' + t('kk.' + k) + '</button>';
  }).join('');
  return brandRow()
    + '<h1 class="page-h1">' + t('mypoo.title') + '</h1>'
    + '<div class="kk-secs">' + secs + '</div>'
    + '<div class="mypoo-body"><div class="stage">'
    +   (kkSec === 'stall' ? stallPreview(cfg) : pooSVG(cfg, KK_H, {kk:true}))
    +   '<span class="saved" id="saved-hint">' + t('mypoo.saved') + '</span>'
    + '</div>'
    + '<div class="mypoo-pick"><nav class="seg">' + tabs + '</nav>'
    + '<div class="ogrid">' + grid + '</div>'
    + '</div></div>'
    + '<div class="kk-actions">'
    +   '<button class="btn" data-action="kkBack">' + iconBack() + t('kk.back') + '</button>'
    +   '<button class="btn ink" data-action="kkSave"' + (kkDirty() ? '' : ' disabled') + '>' + t('kk.save') + '</button>'
    + '</div>';
}

/* alerts: grouped by day, one line of who + what, a state chip and an icon that shows the state */
var NOTE_KIND = {
  'n.entered':'normal', 'n.enteredHard':'hard', 'n.urgent':'loose', 'n.relieved':'relief', 'n.relievedLoose':'relief',
  'n.cheered':'cheer', 'n.knocked':'knock', 'n.joined':'join', 'n.roomGone':'gone'
};
function noteIcon(kind){
  if(kind === 'normal' || kind === 'hard' || kind === 'loose') return pooSVG({shape:'classic', thick:1, hat:'none'}, 30, {mood:kind, noPuddle:true});
  if(kind === 'relief') return pooSVG({shape:'flat', thick:1, hat:'none'}, 30);
  if(kind === 'knock' || kind === 'join' || kind === 'gone') return '<span class="ni-door">' + iconDoor(false, 'plain') + '</span>';
  if(kind === 'cheer') return '<span class="ni-push">' + iconMuscle() + '</span>';
  return '<span class="ni-push">' + iconMuscle() + '</span>';
}
function relTime(at){
  var m = Math.floor((Date.now() - at) / 60000);
  if(m < 1) return t('time.now');
  if(m < 60) return t('time.min', {n:m});
  var d = new Date(at), n = new Date();
  if(d.toDateString() === n.toDateString()) return t('time.hour', {n:Math.floor(m / 60)});
  return hhmm(at);
}
function dayLabel(at){
  var d = new Date(at), n = new Date();
  var y = new Date(n.getFullYear(), n.getMonth(), n.getDate() - 1);
  if(d.toDateString() === n.toDateString()) return t('time.today');
  if(d.toDateString() === y.toDateString()) return t('time.yesterday');
  return t('cal.dayDetail', {m:d.getMonth() + 1, d:d.getDate()});
}
function noteRow(n){
  var kind = NOTE_KIND[n.key] || 'join';
  var v = n.vars || {};
  var who = '<b>' + esc(v.name || '') + '</b>';
  var what = t('nt.' + kind);
  var extra = '';
  if(kind === 'knock' && v.msg !== undefined && v.target) extra = '<span class="nr-quote">' + esc(knockLine(v.msg, v.target)) + '</span>';
  var chip = '';
  if(kind === 'hard') chip = '<span class="tag on">' + t('tag.hard') + '</span>';
  if(kind === 'loose') chip = '<span class="tag new">' + t('tag.loose') + '</span>';
  if(kind === 'relief') chip = '<span class="tag on">' + t('tag.relief') + '</span>';
  return '<div class="nrow k-' + kind + (n.read ? '' : ' unread') + '">'
    + '<span class="nr-ic">' + noteIcon(kind) + '</span>'
    + '<span class="nr-main"><span class="nr-line">' + (kind === 'gone' ? '' : who + ' ') + what + chip + '</span>'
    +   extra
    +   '<span class="nr-sub">' + esc(v.room || '') + ' · ' + relTime(n.at) + '</span></span>'
    + '<button type="button" class="nr-del" data-action="delNote" data-id="' + esc(String(n.id)) + '" aria-label="' + esc(t('notify.del')) + '">' + iconClose() + '</button>'
    + '</div>';
}
function sheetNotify(){
  if(!state.notifications.length) return sheetHead(t('notify.title')) + '<div class="empty" style="margin-top:12px"><b>' + t('notify.empty') + '</b></div>';
  var out = '', last = '';
  state.notifications.forEach(function(n){
    var dl = dayLabel(n.at);
    if(dl !== last){ out += '<p class="nday">' + dl + '</p>'; last = dl; }
    out += noteRow(n);
  });
  return sheetHead(t('notify.title')) + '<div class="nlist-top"><button type="button" class="btn sm ghost" data-action="delAllNotes">' + t('notify.delAll') + '</button></div><div class="nlist">' + out + '</div>';
}

/* room settings: name + save on one row, colour as calm swatches + a fine slider */
var HUE_SWATCHES = [0, 18, 36, 52, 90, 140, 172, 200, 222, 250, 285, 330];
function sheetRoomAdmin(){
  var r = getRoom(sheet.roomId);
  if(!r) return sheetHead(t('room.admin'));
  var own = isOwner(r);
  if(sheet.hue === undefined) sheet.hue = (typeof r.hue === 'number') ? r.hue : null;
  if(!sheet.door) sheet.door = r.door || 'plain';
  var hue = sheet.hue;
  var head = sheetHead(t('room.admin'), esc(r.name) + ' · ' + t('admin.info', {code:esc(r.code), n:r.members.length}));
  var members = '<p class="sheet-note adm-members"><b>' + t('admin.members') + '</b> · '
    + r.members.map(function(m){ return esc(m.name) + (m.id === r.ownerId ? ' (' + t('home.owner') + ')' : ''); }).join(', ') + '</p>';
  if(!own){
    return head
      + '<p class="sheet-note" style="margin-top:14px">' + t('admin.memberNote', {name:'<b>' + esc(memberName(r, r.ownerId)) + '</b>'}) + ' · ' + t('admin.ownerOnly') + '</p>'
      + members
      + '<div class="sheet-actions">'
      +   '<button class="btn" type="button" data-action="invite">' + t('inv.title') + '</button>'
      +   '<button class="btn danger" type="button" data-action="leaveRoomAsk">' + t('admin.leave') + '</button>'
      + '</div>';
  }
  var prevVars = hue === null ? '--door:var(--bg)' : '--door:hsl(' + hue + ' 34% 84%)';
  return head
    + '<label class="field"><span class="k">' + t('admin.name') + '</span>'
    +   '<span class="name-row"><input id="rn-name" type="text" maxlength="20" autocomplete="off" value="' + esc(r.name) + '">'
    +   '<button class="btn ink sm" type="button" data-action="renameRoom">' + t('admin.rename') + '</button></span></label>'
    + '<p class="err" id="sheet-err"></p>'
    + '<div class="divider"></div>'
    + '<div class="color-sec">'
    +   '<p class="color-k">' + t('admin.doorDesign') + '</p>'
    +   '<div class="room-doors" id="room-doors" style="' + prevVars + '">' + DOORS.map(function(d){
          return '<button type="button" class="ocard nocap' + (sheet.door === d ? ' on' : '') + '" data-action="pickRoomDoor" data-val="' + d + '" aria-label="' + esc(t('door.' + d)) + '"><span class="oc-door">' + iconDoor(false, d, 0) + '</span></button>';
        }).join('') + '</div>'
    +   '<p class="color-k">' + t('admin.color') + '</p>'
    +   '<div class="fine">'
    +     '<button type="button" class="mono-btn' + (hue === null ? ' on' : '') + '" data-action="pickHue" data-hue="none">' + t('admin.mono') + '</button>'
    +     '<input id="hue-input" class="' + (hue === null ? 'off' : '') + '" type="range" min="0" max="359" step="1" value="' + (hue === null ? 28 : hue) + '" aria-label="' + esc(t('admin.color')) + '">'
    +   '</div>'
    +   '<div class="sheet-actions" style="margin-top:14px"><button class="btn ink" type="button" data-action="saveColor">' + t('admin.saveColor') + '</button></div>'
    + '</div>'
    + '<div class="divider"></div>'
    + members
    + '<div class="sheet-actions">'
    +   '<button class="btn" type="button" data-action="invite">' + t('inv.title') + '</button>'
    +   '<button class="btn danger" type="button" data-action="leaveRoomAsk">' + t('admin.leave') + '</button>'
    + '</div>'
    + '<div class="sheet-actions">'
    +   '<button class="btn danger" type="button" data-action="deleteRoomAsk">' + t('admin.delete') + '</button>'
    + '</div>';
}
function saveColor(){
  var r = getRoom(sheet ? sheet.roomId : null);
  if(!r || !isOwner(r)) return;
  var h = sheet.hue === undefined ? r.hue : sheet.hue;
  r.hue = (typeof h === 'number') ? h : null;
  if(sheet.door) r.door = sheet.door;
  render(); renderSheet();
  api('PATCH', '/api/rooms/' + r.id, {hue:r.hue, door:r.door || 'plain'}).then(function(){ toast(t('toast.colorSaved')); }, function(e){ toast(errText(e)); scheduleSync(); });
}

/* knock: a random cheer line for the person inside */
var KNOCK_LINES = 20;
function knockLine(i, name){ return t('knock.' + ((i | 0) % KNOCK_LINES), {name:name}); }
function knock(userId, el){
  var r = getRoom(state.roomId);
  if(!r) return;
  var name = memberName(r, userId);
  var msg = freshKnockLine();
  for(var i=0;i<r.sessions.length;i++){ if(r.sessions[i].userId === userId) r.sessions[i].knocks = (r.sessions[i].knocks || 0) + 1; }
  render();
  var fresh = document.querySelector('.stall[data-user-id="' + userId + '"]');
  if(fresh){ fresh.classList.add('knock'); setTimeout(function(){ fresh.classList.remove('knock'); }, 360); }
  knockSound();
  vibrate([18, 40, 18]);
  if(!stallBubble(userId, interLine('knockOut', {target:name, msg:msg}))) toast(esc(knockLine(msg, name)), true);
  api('POST', '/api/rooms/' + r.id + '/knock', {userId:userId, msg:msg}).then(scheduleSync, function(){});
}

var sentEmail = '', sentPoll = null;
function iconEye(open){
  var eye = '<path d="M2.4 12.2 C5.6 7 8.6 5.2 12 5.2 C15.4 5.2 18.4 7 21.6 12 C18.4 17 15.4 18.8 12 18.8 C8.6 18.8 5.6 17 2.4 12.2 Z"/>'
    + '<path d="M12 9 C13.8 8.9 15 10.3 15 12 C15 13.8 13.7 15.1 12 15 C10.2 15 9 13.7 9 12 C9 10.4 10.3 9.1 12 9 Z"/>';
  return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + eye + (open ? '' : '<path d="M4 20.2 L20.2 3.8"/>') + '</svg>';
}
function viewAuthSent(){
  return '<div class="auth">'
    + '<div class="auth-mark">' + pooSVG({shape:'classic', thick:1}, 104) + '</div>'
    + '<h1 class="auth-title"><span class="auth-wm">Poo-riend</span></h1>'
    + '<p class="auth-tag">' + t('auth.tagline') + '</p>'
    + '<div class="auth-form auth-sent">'
    +   '<p class="sent-h">' + t('auth.sentH') + '</p>'
    +   '<p class="sent-b">' + t('auth.sentB', {email:'<b>' + esc(sentEmail) + '</b>'}) + '</p>'
    +   '<p class="err" id="auth-err" aria-live="polite"></p>'
    +   '<button class="btn ink wide" type="button" data-action="resendMail">' + t('auth.resend') + '</button>'
    +   '<button class="btn ghost wide" type="button" data-action="authBack">' + t('auth.back') + '</button>'
    + '</div></div>';
}
/* waiting for the mail link: once it is opened (here or in another tab) the session appears and we go straight in */
function startSentPoll(){
  if(sentPoll) clearInterval(sentPoll);
  sentPoll = setInterval(function(){
    if(authMode !== 'sent' || state.user){ clearInterval(sentPoll); sentPoll = null; return; }
    api('GET', '/api/state').then(function(s){
      if(s && s.user){ clearInterval(sentPoll); sentPoll = null; authMode = 'login'; afterLogin(s, true); }
    }, function(){});
  }, 3000);
}
function viewAuth(){
  if(authMode === 'sent') return viewAuthSent();
  var su = authMode === 'signup';
  return '<div class="auth">'
    + '<div class="auth-mark">' + pooSVG({shape:'classic', thick:1}, 104) + '</div>'
    + '<h1 class="auth-title"><span class="auth-wm">Poo-riend</span></h1>'
    + '<p class="auth-tag">' + t('auth.tagline') + '</p>'
    + '<form class="auth-form" id="auth-form" autocomplete="on" novalidate>'
    + (su
      ? '<label class="field"><span class="k">' + t('auth.nick') + '</span>'
      +   '<input id="f-nick" type="text" maxlength="10" autocomplete="nickname" placeholder="' + t('auth.nickPh') + '"></label>'
      : '')
    +   '<label class="field"><span class="k">' + t('auth.email') + '</span>'
    +     '<input id="f-email" name="email" type="email" inputmode="email" maxlength="254" autocapitalize="none" autocomplete="' + (su ? 'email' : 'username') + '" spellcheck="false" placeholder="' + t('auth.emailPh') + '"></label>'
    +   '<label class="field"><span class="k">' + t('auth.pw') + '</span>'
    +     '<span class="pw-wrap"><input id="f-pw" name="password" type="password" maxlength="72" autocomplete="' + (su ? 'new-password' : 'current-password') + '" placeholder="' + t('auth.pwPh') + '">'
    +     '<button type="button" class="pw-eye" data-action="pwEye" aria-label="' + esc(t('auth.pwShow')) + '" aria-pressed="false">' + iconEye(false) + '</button></span></label>'
    + (su ? '' : '<button type="button" class="auth-forgot" data-action="forgotPw">' + t('auth.forgot') + '</button>')
    +   '<p class="err" id="auth-err" aria-live="polite"></p>'
    +   '<button class="btn ink wide" type="submit" id="auth-go">' + (su ? t('auth.signup') : t('auth.login')) + '</button>'
    +   '<button class="btn ghost wide" type="button" data-action="authSwitch">' + (su ? t('auth.toLogin') : t('auth.toSignup')) + '</button>'
    +   '<p class="foot">' + t('auth.notice') + '</p>'
    +   '<div class="auth-langs">' + LANGS.map(function(L){
          return '<button type="button" data-action="lang" data-lang="' + L.code + '" class="' + (state.lang === L.code ? 'on' : '') + '">' + L.label + '</button>';
        }).join('') + '</div>'
    + '</form></div>';
}

function viewTabbar(){
  var items = [
    ['home', navHome(), 'HOME', t('tab.home')],
    ['mypoo', navPoo(), 'MY POO', t('tab.mypoo')],
    ['friends', navFriends(), 'Poo-riend', t('tab.friends')],
    ['settings', navGear(), 'Settings', t('tab.settings')]
  ];
  return '<span class="tab-line"></span>'
    + '<div class="side-brand"><span class="wm">Poo-riend</span></div>'
    + items.map(function(it){
    return '<button class="tab' + (state.tab === it[0] ? ' on' : '') + '" data-action="tab" data-tab="' + it[0] + '" aria-label="' + esc(it[3]) + '">'
      + '<span class="t-ic">' + it[1] + '</span><span class="t-lb' + (state.lang === 'en' ? '' : ' loc') + '">' + (state.lang === 'en' ? it[2] : esc(it[3])) + '</span><span class="t-lb2">' + esc(it[3]) + '</span></button>';
  }).join('');
}

function brandRow(){
  return '<header class="hd">'
    + '<div class="wordmark"><span class="wm">Poo-riend</span></div>'
    + '<span class="live-dot' + (liveOn ? '' : ' off') + '" id="live-dot" title="' + esc(liveOn ? t('room.live') : t('live.off')) + '"></span>'
    + '<div class="sp"></div>'
    + '<button class="ib" data-action="notifications" aria-label="' + esc(t('notify.title')) + '">' + iconBell()
    +   '<span class="dot" id="bell-badge" data-n="' + unreadCount() + '">' + (unreadCount() || '') + '</span></button>'
    + '</header>';
}

function myRooms(){ return state.rooms; }
function addButtons(){
  return '<div class="add-row">'
    + '<button class="add-btn" data-action="addRoom"><span class="plus">' + iconPlus() + '</span>' + t('home.add') + '</button>'
    + '<button class="add-btn" data-action="joinRoom"><span class="plus">' + iconJoin() + '</span>' + t('home.join') + '</button>'
    + '</div>';
}
function viewHome(){
  var rooms = myRooms();
  if(!rooms.length){
    return brandRow()
      + '<div class="empty"><b>' + t('home.empty') + '</b><span>' + t('home.emptySub') + '</span></div>'
      + '<div style="height:18px"></div>'
      + addButtons();
  }
  var active = 0;
  rooms.forEach(function(r){ if(r.sessions.length) active++; });
  return brandRow()
    + '<h1 class="page-h1">' + t('home.title') + '</h1>'
    + '<p class="lede">' + t('home.lede', {n:rooms.length, a:active}) + '</p>'
    + '<div class="rooms">' + rooms.map(roomCard).join('') + '</div>'
    + '<div style="height:16px"></div>'
    + addButtons()
    + '<p class="foot">' + t('home.foot') + '</p>';
}

function stallTag(s){
  var mood = sessionMood(s);
  if(mood === 'hard' || mood === 'loose'){
    var pct = Math.round(100 * (s.push || 0) / state.pushGoal);
    return '<span class="stall-mode hard"><span class="sm-t">' + t(mood === 'loose' ? 'tag.loose' : 'tag.hard') + '</span>' + miniGauge(pct) + '</span>';
  }
  if((nowS() - s.startedAt) / 1000 > SUSPECT_SEC) return '<span class="stall-mode">' + t('room.suspect') + '</span>';
  return '';
}

function myPanel(r, mine){
  var mood = sessionMood(mine);
  var el = dur((nowS() - mine.startedAt) / 1000);
  var head = '<div class="timer' + (mood === 'loose' ? ' urgent' : '') + '" id="poop-timer" data-start="' + mine.startedAt + '">' + el + '</div>';
  var foot = '<div class="two">'
    + '<button class="btn" data-action="game">' + iconGame() + t('room.game') + '</button>'
    + '<button class="btn ink flush" data-action="leave" aria-label="' + esc(t('room.flush')) + '">' + iconFlush() + t('room.leave') + '</button>'
    + '</div>';
  var mid = '';
  if((mine.mode === 'hard' || mine.mode === 'loose') && !mine.relieved){
    var pct = Math.round(100 * (mine.push || 0) / state.pushGoal);
    mid = '<p class="sub">' + (mine.mode === 'loose' ? t('room.urgent') : t('mode.hardSub')) + '</p>'
      + pooGauge(mine.push || 0, state.pushGoal)
      + '<p class="gauge-lb" id="push-lb">' + t(mine.mode === 'loose' ? 'room.pushSubLoose' : 'room.pushSub', {n:mine.push || 0, goal:state.pushGoal}) + '</p>'
      + '<button class="btn ink big wide push-btn" data-action="push">' + iconMuscle() + t('room.push') + '</button>'
      + '<div style="height:10px"></div>';
  } else if((mine.mode === 'hard' || mine.mode === 'loose') && mine.relieved){
    mid = '<p class="relief-big">' + t(mine.mode === 'loose' ? 'room.relievedLoose' : 'room.relieved') + '</p><p class="sub">' + t('room.relievedSub') + '</p>';
  } else {
    var long = (nowS() - mine.startedAt) / 1000 > SUSPECT_SEC;
    mid = '<p class="sub">' + (long ? t('room.suspect') + ' · ' : '') + t('room.pooping') + '</p>';
  }
  var modeRow = '';
  if(mine.mode === 'normal'){
    modeRow = '<div class="mode-row">'
      + '<button class="btn sm" data-action="setMode" data-mode="hard">' + t('room.toHard') + '</button>'
      + '<button class="btn sm" data-action="setMode" data-mode="loose">' + t('room.toLoose') + '</button>'
      + '</div>';
  }
  return '<div class="pooping m-' + mood + '">' + head + mid + foot + modeRow
    + '<p class="silent-note">' + t('room.silentNote') + '</p></div>';
}

/* everyone you share a toilet with, merged across toilets by user id */
function allPeople(){
  var map = {}, order = [];
  myRooms().forEach(function(r){
    r.members.forEach(function(m){
      var key = m.id;
      if(!map[key]){ map[key] = {id:m.id, name:m.name, poo:m.poo, isMe:(state.user && m.id === state.user.id), entries:[], rooms:[]}; order.push(key); }
      map[key].entries.push({room:r, uid:m.id});
      if(map[key].rooms.indexOf(r.name) < 0) map[key].rooms.push(r.name);
    });
  });
  var out = order.map(function(k){ return map[k]; });
  out.sort(function(a, b){
    if(a.isMe) return -1;
    if(b.isMe) return 1;
    return 0;
  });
  return out;
}

function personStats(p){
  var count = 0, longest = 0, total = 0, hard = 0, loose = 0, today = 0, badges = {};
  var now = new Date();
  p.entries.forEach(function(e){
    var st = monthStats(e.room, now.getFullYear(), now.getMonth());
    count += (st.counts[e.uid] || 0);
    total += (st.secs[e.uid] || 0);
    hard += (st.hard[e.uid] || 0);
    loose += (st.loose[e.uid] || 0);
    if(st.longest[e.uid] && st.longest[e.uid].seconds > longest) longest = st.longest[e.uid].seconds;
    if(st.topCount && st.topCount.userId === e.uid) badges.poo = true;
    if(st.topLong && st.topLong.userId === e.uid) badges.long = true;
    if(st.topHard && st.topHard.userId === e.uid) badges.hard = true;
    if(st.topLoose && st.topLoose.userId === e.uid) badges.loose = true;
    e.room.records.forEach(function(rec){
      if(rec.userId !== e.uid) return;
      var d = new Date(rec.start);
      if(d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate()) today++;
    });
  });
  return {count:count, longest:longest, total:total, hard:hard, loose:loose, today:today, badges:badges};
}
function badgeTags(st){
  var b = '';
  if(st.badges.poo) b += '<span class="tag on">' + t('badge.poo') + '</span>';
  if(st.badges.long) b += '<span class="tag">' + t('badge.long') + '</span>';
  if(st.badges.hard) b += '<span class="tag">' + t('badge.hard') + '</span>';
  if(st.badges.loose) b += '<span class="tag">' + t('badge.loose') + '</span>';
  if(st.today >= 3) b += '<span class="tag new">' + t('tag.looseToday', {n:st.today}) + '</span>';
  return b;
}

/* ===================== 이달의 랭킹 board =====================
   rows: [{id, name, poo, count, longest, hard, loose}] */
var RANKS = [
  {k:'poo',  key:'count',   mood:'normal', title:'rank.poo',   sub:'rank.pooSub',   unit:function(v){ return t('fp.countUnit', {n:v}); }},
  {k:'long', key:'longest', mood:'normal', title:'rank.long',  sub:'rank.longSub',  unit:function(v){ return dur(v); }, stink:true},
  {k:'hard', key:'hard',    mood:'hard',   title:'rank.hard',  sub:'rank.hardSub',  unit:function(v){ return t('fp.countUnit', {n:v}); }},
  {k:'loose',key:'loose',   mood:'loose',  title:'rank.loose', sub:'rank.looseSub', unit:function(v){ return t('fp.countUnit', {n:v}); }}
];
function rankBoard(rows, clickable){
  var cards = RANKS.map(function(R){
    var list = rows.filter(function(r){ return r[R.key] > 0; }).sort(function(a, b){ return b[R.key] - a[R.key]; });
    var top = list[0];
    var head = '<p class="rk-title">' + t(R.title) + '</p><p class="rk-sub">' + t(R.sub) + '</p>';
    if(!top){
      return '<div class="rank-card k-' + R.k + ' none">' + head
        + '<div class="rk-win">' + pooSVG({shape:'classic', thick:1}, 58, {mood:R.mood, noPuddle:true}) + '</div>'
        + '<b class="rk-name">—</b><span class="rk-val">' + t('rank.none') + '</span></div>';
    }
    var rest = list.slice(1, 3).map(function(r, i){
      return '<li><i>' + (i + 2) + '</i><span>' + esc(r.name) + '</span><em>' + R.unit(r[R.key]) + '</em></li>';
    }).join('');
    var tag = clickable ? 'button' : 'div';
    return '<' + tag + ' class="rank-card k-' + R.k + '"' + (clickable ? ' data-action="friendProfile" data-uid="' + esc(top.id) + '"' : '') + '>' + head
      + '<div class="rk-win">' + pooSVG(top.poo || {shape:'classic', thick:1}, 58, {mood:R.mood, stink:!!R.stink, noPuddle:true}) + '</div>'
      + '<b class="rk-name"><span class="rk-medal">1</span>' + esc(top.name) + '</b>'
      + '<span class="rk-val">' + R.unit(top[R.key]) + '</span>'
      + (rest ? '<ol class="rk-rest">' + rest + '</ol>' : '<ol class="rk-rest"><li class="solo">' + t('rank.solo') + '</li></ol>')
      + '</' + tag + '>';
  }).join('');
  return '<div class="rank-board">' + cards + '</div>';
}
function friendRows(){
  return allPeople().map(function(p){
    var st = personStats(p);
    return {id:p.id, name:p.name, poo:p.isMe ? state.myPoo : p.poo, count:st.count, longest:st.longest, hard:st.hard, loose:st.loose};
  });
}
function roomRows(r, y, m){
  var st = monthStats(r, y, m);
  return r.members.map(function(mem){
    return {id:mem.id, name:mem.name, poo:memberPoo(mem), count:st.counts[mem.id] || 0,
      longest:st.longest[mem.id] ? st.longest[mem.id].seconds : 0, hard:st.hard[mem.id] || 0, loose:st.loose[mem.id] || 0};
  });
}

function viewFriends(){
  var people = allPeople();
  if(!people.length){
    return brandRow() + '<h1 class="page-h1">' + t('friends.title') + '</h1>'
      + '<div class="empty" style="margin-top:16px"><b>' + t('home.empty') + '</b><span>' + t('home.emptySub') + '</span></div>';
  }
  var rows = people.map(function(p){
    var st = personStats(p);
    var poo = p.isMe ? state.myPoo : (p.poo || {shape:'classic', thick:1, hat:'none'});
    var badges = badgeTags(st);
    return '<button class="frow" data-action="friendProfile" data-uid="' + esc(p.id) + '">'
      + '<span class="favo">' + pooSVG(poo, 46, {seed:hashSeed(p.id)}) + '</span>'
      + '<span class="finfo"><span class="fname">' + esc(p.name) + (p.isMe ? '<span class="me">' + t('badge.you') + '</span>' : '') + '</span>'
      +   '<span class="fsub">' + esc(p.rooms.join(' · ')) + ' · ' + (st.count ? t('fp.countUnit', {n:st.count}) : t('friends.empty')) + '</span></span>'
      + (badges ? '<span class="fbadges">' + badges + '</span>' : '')
      + '</button>';
  }).join('');
  return brandRow()
    + '<h1 class="page-h1">' + t('friends.title') + '</h1>'
    + '<p class="rank-h">' + t('rank.title') + '</p>'
    + rankBoard(friendRows(), true)
    + '<p class="rank-h">' + t('friends.lede') + '</p>'
    + '<div class="flist">' + rows + '</div>';
}

function viewSettings(){
  var u = state.user || {email:'', name:'-'};
  var https = location.protocol === 'https:';
  var langs = LANGS.map(function(L){
    return '<button data-action="lang" data-lang="' + L.code + '" class="' + (state.lang === L.code ? 'on' : '') + '">' + L.label + '</button>';
  }).join('');
  var segs = [['0', t('settings.off')], ['5', t('settings.min', {n:5})], ['10', t('settings.min', {n:10})], ['30', t('settings.min', {n:30})]]
    .map(function(p){
      return '<button data-action="autoLogout" data-min="' + p[0] + '" class="' + (state.prefs.autoLogout === p[0] ? 'on' : '') + '">' + p[1] + '</button>';
    }).join('');
  return brandRow()
    + '<div class="set-scroll">'
    + '<h1 class="page-h1">' + t('settings.title') + '</h1>'
    + '<div class="set-sec"><p class="h">' + t('settings.account') + '</p><section class="card" style="padding:0">'
    +   '<div class="row"><div class="lbl"><span>' + t('settings.nick') + '</span><b>' + esc(u.name || '-') + '</b></div>'
    +     '<button class="btn sm ghost" data-action="renameMe">' + t('settings.rename') + '</button></div>'
    +   '<div class="row"><div class="lbl"><span>' + t('settings.email') + '</span></div><div class="val">' + esc(u.email || '-') + '</div></div>'
    + '</section></div>'
    + '<div class="set-sec"><p class="h">' + t('settings.display') + '</p><section class="card" style="padding:0">'
    +   '<div class="row"><div class="lbl"><b>' + t('settings.myPoo') + '</b><span>' + t('mypoo.lede') + '</span></div>'
    +     '<button class="ib" data-action="goPoo" aria-label="' + esc(t('settings.myPoo')) + '">' + iconArrow() + '</button></div>'
    +   '<div class="row"><div class="lbl"><b>' + t('settings.dark') + '</b></div>'
    +     '<button class="sw" role="switch" aria-checked="' + (state.theme === 'dark' ? 'true' : 'false') + '" data-action="toggleDark" aria-label="' + esc(t('settings.dark')) + '"><span class="knob"></span></button></div>'
    +   '<div class="row" style="padding-bottom:8px"><div class="lbl"><b>' + t('settings.lang') + '</b></div></div>'
    +   '<div class="lang-grid">' + langs + '</div>'
    + '</section></div>'
    + '<div class="set-sec"><p class="h">' + t('settings.security') + '</p><section class="card" style="padding:0">'
    +   '<div class="row"><div class="lbl"><b>' + t('settings.conn') + '</b><span>' + (https ? t('settings.connHttps') : t('settings.connPlain')) + '</span></div>'
    +     '<div class="val">' + (https ? 'HTTPS' : 'HTTP') + '</div></div>'
    +   '<div class="row" style="padding-bottom:8px"><div class="lbl"><b>' + t('settings.autoLogout') + '</b></div></div>'
    +   '<div class="seg-mini">' + segs + '</div>'
    + '</section></div>'
    + '<div class="set-sec"><p class="h">' + t('settings.data') + '</p><section class="card" style="padding:0">'
    +   '<div class="row"><div class="lbl"><b>' + t('settings.delete') + '</b><span>' + t('settings.deleteSub') + '</span></div>'
    +     '<button class="btn sm danger" data-action="deleteMeAsk">' + t('settings.delete') + '</button></div>'
    + '</section></div>'
    + '<div style="height:18px"></div>'
    + '<button class="btn wide" data-action="logoutAsk">' + t('settings.logout') + '</button>'
    + '<p class="foot">' + t('settings.about') + '</p>'
    + '</div>';
}

function viewBoot(){
  return '<div class="auth"><div class="auth-mark">' + pooSVG({shape:'classic', thick:1}, 104) + '</div>'
    + '<h1 class="auth-title"><span class="auth-wm">Poo-riend</span></h1></div>';
}

/* ===================== render ===================== */
function render(){
  document.documentElement.setAttribute('data-theme', state.theme);
  document.documentElement.setAttribute('lang', state.lang);
  var meta = document.querySelector('meta[name="theme-color"]');
  if(meta) meta.setAttribute('content', state.theme === 'dark' ? '#0C0C0C' : '#FFFFFF');
  var app = document.getElementById('app');
  var tab = document.getElementById('tabbar');
  var dev = document.getElementById('device');
  if(!app || !tab) return;
  if(!booted){
    app.innerHTML = viewBoot(); tab.innerHTML = '';
    if(dev) dev.classList.add('no-tabs');
    return;
  }
  if(!state.user){
    app.innerHTML = viewAuth();
    tab.innerHTML = '';
    if(dev) dev.classList.add('no-tabs');
    paintFrames(app);
    return;
  }
  if(state.view === 'room' && !getRoom(state.roomId)){
    state.view = 'tabs'; state.roomId = null;
  }
  var html;
  if(state.view === 'room') html = viewRoom();
  else if(state.tab === 'home') html = viewHome();
  else if(state.tab === 'mypoo') html = viewMyPoo();
  else if(state.tab === 'friends') html = viewFriends();
  else html = viewSettings();
  app.innerHTML = html;
  app.setAttribute('data-view', state.view === 'room' ? 'room' : state.tab);
  tab.innerHTML = state.view === 'room' ? '' : viewTabbar();
  if(dev) dev.classList.toggle('no-tabs', state.view === 'room');
  paintFrames(app);
  paintTabLine(tab.querySelector('.tab-line'));
  updateLive();
}

function updateLive(){
  var nodes = document.querySelectorAll('[data-live]');
  for(var i=0;i<nodes.length;i++){
    var key = nodes[i].getAttribute('data-live') || '';
    var parts = key.split(':');
    var r = getRoom(parts[0]);
    if(!r) continue;
    var s = null;
    for(var j=0;j<r.sessions.length;j++){ if(r.sessions[j].userId === parts[1]) s = r.sessions[j]; }
    if(!s) continue;
    nodes[i].textContent = dur((nowS() - s.startedAt) / 1000);
  }
  var timer = document.getElementById('poop-timer');
  if(timer){
    var st = parseInt(timer.getAttribute('data-start') || '0', 10);
    timer.textContent = dur((nowS() - st) / 1000);
  }
}

/* ===================== toast ===================== */
var toastTimer = null, toastHide = null;
function toast(msg){
  var layer = document.getElementById('toast-layer');
  if(!layer) return;
  layer.innerHTML = '<div class="toast"><span>' + msg + '</span></div>';
  paintFrames(layer);
  if(toastTimer) clearTimeout(toastTimer);
  if(toastHide) clearTimeout(toastHide);
  toastTimer = setTimeout(function(){
    var el = layer.querySelector('.toast');
    if(el) el.classList.add('out');
    toastHide = setTimeout(function(){ layer.innerHTML = ''; }, 240);
  }, 2400);
}
function updateBell(){
  var b = document.getElementById('bell-badge');
  if(!b) return;
  var n = unreadCount();
  b.textContent = n ? String(n) : '';
  b.setAttribute('data-n', String(n));
}
/* ===================== sound ===================== */
var actx = null, audioUnlocked = false;
function audioCtx(){
  try{
    if(!actx){
      var AC = window.AudioContext || window.webkitAudioContext;
      if(!AC) return null;
      actx = new AC();
    }
    if(actx.state === 'suspended' && actx.resume) actx.resume();
    return actx;
  }catch(e){ return null; }
}
/* iOS Safari starts audio only inside a real touch: warm the context on the first one */
function unlockAudio(){
  var ctx = audioCtx();
  if(!ctx) return;
  try{
    if(ctx.state === 'suspended' && ctx.resume) ctx.resume();
    if(!audioUnlocked){
      var b = ctx.createBuffer(1, 2, ctx.sampleRate);
      var s = ctx.createBufferSource();
      s.buffer = b;
      s.connect(ctx.destination);
      s.start(0);
      audioUnlocked = true;
    }
  }catch(e){}
}
function audioReady(){
  var ctx = audioCtx();
  if(!ctx) return null;
  try{ if(ctx.state === 'suspended' && ctx.resume) ctx.resume(); }catch(e){}
  return ctx;
}
/* short noise bed with a decaying tail */
function noiseBuf(ctx, dur, decay){
  var len = Math.max(1, Math.floor(ctx.sampleRate * dur));
  var buf = ctx.createBuffer(1, len, ctx.sampleRate);
  var d = buf.getChannelData(0);
  for(var i=0;i<len;i++){ d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay); }
  return buf;
}
function toneAt(ctx, dest, at, freq, to, dur1, vol, type){
  try{
    var o = ctx.createOscillator();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, at);
    if(to) o.frequency.exponentialRampToValueAtTime(to, at + dur1);
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, at);
    g.gain.exponentialRampToValueAtTime(vol || 0.18, at + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0008, at + dur1);
    o.connect(g); g.connect(dest);
    o.start(at); o.stop(at + dur1 + 0.03);
  }catch(e){}
}
function tone(freq, to, dur1, vol, type){
  var ctx = audioCtx();
  if(!ctx) return;
  try{ toneAt(ctx, ctx.destination, ctx.currentTime, freq, to, dur1, vol, type); }catch(e){}
}
/* toilet flush: handle click, water rush, gurgling bubbles, tank refill */
function flushSound(){
  var ctx = audioReady();
  if(!ctx) return;
  try{
    var t0 = ctx.currentTime + 0.02;
    var out = ctx.createGain();
    out.gain.value = 0.95;
    out.connect(ctx.destination);

    /* 1. the handle + first splash */
    var clk = ctx.createBufferSource();
    clk.buffer = noiseBuf(ctx, 0.1, 2.4);
    var clkF = ctx.createBiquadFilter(); clkF.type = 'highpass'; clkF.frequency.value = 2400;
    var clkG = ctx.createGain();
    clkG.gain.setValueAtTime(0.0001, t0);
    clkG.gain.exponentialRampToValueAtTime(0.26, t0 + 0.006);
    clkG.gain.exponentialRampToValueAtTime(0.0008, t0 + 0.1);
    clk.connect(clkF); clkF.connect(clkG); clkG.connect(out);
    clk.start(t0); clk.stop(t0 + 0.12);

    /* 2. the rush of water, sweeping down */
    var rush = ctx.createBufferSource();
    rush.buffer = noiseBuf(ctx, 2.1, 0.9);
    var bp = ctx.createBiquadFilter();
    bp.type = 'bandpass'; bp.Q.value = 0.9;
    bp.frequency.setValueAtTime(2600, t0 + 0.02);
    bp.frequency.exponentialRampToValueAtTime(520, t0 + 1.25);
    bp.frequency.exponentialRampToValueAtTime(300, t0 + 2.0);
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.62, t0 + 0.09);
    g.gain.exponentialRampToValueAtTime(0.34, t0 + 0.75);
    g.gain.exponentialRampToValueAtTime(0.0008, t0 + 1.95);
    rush.connect(bp); bp.connect(g); g.connect(out);
    rush.start(t0); rush.stop(t0 + 2.1);

    /* 2b. low swirl under the rush */
    toneAt(ctx, out, t0 + 0.05, 190, 95, 1.5, 0.10, 'sine');

    /* 3. gurgling bubbles */
    for(var i=0;i<12;i++){
      var at = t0 + 0.14 + Math.random() * 1.15;
      var f = 220 + Math.random() * 620;
      toneAt(ctx, out, at, f, f * (1.4 + Math.random() * 0.5), 0.05 + Math.random() * 0.06, 0.05 + Math.random() * 0.05, 'sine');
    }

    /* 4. the tank refilling */
    var hiss = ctx.createBufferSource();
    hiss.buffer = noiseBuf(ctx, 1.5, 0.55);
    var hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 2100;
    var hg = ctx.createGain();
    hg.gain.setValueAtTime(0.0001, t0 + 0.9);
    hg.gain.exponentialRampToValueAtTime(0.10, t0 + 1.35);
    hg.gain.exponentialRampToValueAtTime(0.0008, t0 + 2.35);
    hiss.connect(hp); hp.connect(hg); hg.connect(out);
    hiss.start(t0 + 0.9); hiss.stop(t0 + 2.4);

    /* 5. last drop */
    toneAt(ctx, out, t0 + 1.42, 540, 170, 0.13, 0.12, 'sine');
  }catch(e){}
}
function knockSound(){ tone(190, 72, 0.12, 0.32, 'triangle'); setTimeout(function(){ tone(180, 70, 0.12, 0.28, 'triangle'); }, 180); }
function plopSound(){ tone(520, 150, 0.14, 0.2); }
/* ---- v7 gimmick sounds ---- */
function cheerSound(){ tone(880, 1320, 0.09, 0.1, 'sine'); setTimeout(function(){ tone(1175, 1568, 0.1, 0.09, 'sine'); }, 90); }
/* 변비: a grunt that climbs as the meter fills */
function gruntSound(p){
  var k = Math.min(1, (p || 0) / (state.pushGoal || 30));
  tone(95 + k * 70, 70 + k * 50, 0.13, 0.22, 'sawtooth');
}
/* 변비 탈출: a low 'bbong' then a little sparkle */
function reliefSound(){
  var ctx = audioReady();
  if(!ctx) return;
  try{
    var t0 = ctx.currentTime + 0.02;
    var o = ctx.createOscillator(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(150, t0);
    o.frequency.exponentialRampToValueAtTime(58, t0 + 0.5);
    var lfo = ctx.createOscillator(); lfo.frequency.value = 26;
    var lg = ctx.createGain(); lg.gain.value = 18;
    lfo.connect(lg); lg.connect(o.frequency);
    var lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 520;
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.42, t0 + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0008, t0 + 0.55);
    o.connect(lp); lp.connect(g); g.connect(ctx.destination);
    o.start(t0); lfo.start(t0); o.stop(t0 + 0.6); lfo.stop(t0 + 0.6);
    toneAt(ctx, ctx.destination, t0 + 0.55, 1318, 1760, 0.12, 0.08, 'sine');
    toneAt(ctx, ctx.destination, t0 + 0.68, 1760, 2637, 0.16, 0.07, 'sine');
  }catch(e){}
}
/* 설사 경보: two-tone siren */
function sirenSound(){
  var ctx = audioReady();
  if(!ctx) return;
  try{
    var t0 = ctx.currentTime + 0.02;
    var o = ctx.createOscillator(); o.type = 'triangle';
    for(var i=0;i<4;i++){
      o.frequency.setValueAtTime(i % 2 ? 620 : 860, t0 + i * 0.28);
    }
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.16, t0 + 0.03);
    g.gain.setValueAtTime(0.16, t0 + 1.0);
    g.gain.exponentialRampToValueAtTime(0.0008, t0 + 1.14);
    o.connect(g); g.connect(ctx.destination);
    o.start(t0); o.stop(t0 + 1.2);
  }catch(e){}
}
/* 꾸르륵: low filtered noise with a wobbling sine under it */
function rumbleSound(){
  var ctx = audioReady();
  if(!ctx) return;
  try{
    var t0 = ctx.currentTime + 0.02;
    var n = ctx.createBufferSource(); n.buffer = noiseBuf(ctx, 0.9, 0.7);
    var lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 240; lp.Q.value = 6;
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.5, t0 + 0.12);
    g.gain.exponentialRampToValueAtTime(0.0008, t0 + 0.9);
    n.connect(lp); lp.connect(g); g.connect(ctx.destination);
    n.start(t0); n.stop(t0 + 0.92);
    for(var i=0;i<4;i++) toneAt(ctx, ctx.destination, t0 + i * 0.16, 120 + Math.random() * 60, 70 + Math.random() * 30, 0.14, 0.09, 'sine');
  }catch(e){}
}

/* ===================== stats ===================== */
function monthStats(room, y, m){
  var counts = {}, secs = {}, longest = {}, hard = {}, loose = {}, totalSec = 0, totalN = 0;
  for(var i=0;i<room.records.length;i++){
    var rec = room.records[i];
    var d = new Date(rec.start);
    if(d.getFullYear() !== y || d.getMonth() !== m) continue;
    counts[rec.userId] = (counts[rec.userId] || 0) + 1;
    secs[rec.userId] = (secs[rec.userId] || 0) + rec.seconds;
    if(rec.kind === 'hard') hard[rec.userId] = (hard[rec.userId] || 0) + 1;
    if(rec.kind === 'loose') loose[rec.userId] = (loose[rec.userId] || 0) + 1;
    totalSec += rec.seconds;
    totalN++;
    if(!longest[rec.userId] || rec.seconds > longest[rec.userId].seconds){
      longest[rec.userId] = {seconds:rec.seconds, start:rec.start};
    }
  }
  function top(map){
    var best = null;
    for(var k in map){
      if(Object.prototype.hasOwnProperty.call(map, k) && (!best || map[k] > best.count)) best = {userId:k, count:map[k]};
    }
    return best;
  }
  var topLong = null, uid;
  for(uid in longest){
    if(Object.prototype.hasOwnProperty.call(longest, uid)){
      if(!topLong || longest[uid].seconds > topLong.seconds) topLong = {userId:uid, seconds:longest[uid].seconds};
    }
  }
  return {counts:counts, secs:secs, longest:longest, hard:hard, loose:loose,
    topCount:top(counts), topLong:topLong, topHard:top(hard), topLoose:top(loose), totalSec:totalSec, totalN:totalN};
}

/* ===================== sheets ===================== */
function setSheetErr(msg){
  var e = document.getElementById('sheet-err');
  if(e) e.textContent = msg;
}
var SHEET_BODY_MARK = '@@SHEETBODY@@';
function sheetHead(title, sub){
  return '<div class="grab">' + grabLine() + '</div>'
    + '<div class="sheet-h"><div><h2>' + title + '</h2>'
    + (sub ? '<div class="sub">' + sub + '</div>' : '') + '</div>'
    + '<button type="button" class="x" data-action="closeSheet" aria-label="' + esc(t('common.close')) + '">' + iconClose() + '</button></div>'
    + SHEET_BODY_MARK;
}

function sheetAddRoom(){
  return sheetHead(t('add.title'))
    + '<form class="sheet-form" id="add-room-form" novalidate>'
    + '<label class="field"><span class="k">' + t('add.name') + '</span>'
    +   '<input id="nr-name" type="text" maxlength="20" autocomplete="off" placeholder="' + t('add.placeholder') + '"></label>'
    + '<p class="sheet-note">' + t('add.note') + '</p>'
    + '<p class="err" id="sheet-err"></p>'
    + '<div class="sheet-actions">'
    +   '<button class="btn ghost" type="button" data-action="closeSheet">' + t('common.cancel') + '</button>'
    +   '<button class="btn ink" type="submit">' + t('add.create') + '</button>'
    + '</div></form>'
    + '<div class="divider" style="margin:22px 0 6px"></div>'
    + '<button class="btn wide" type="button" data-action="joinRoom">' + iconJoin() + t('add.or') + '</button>';
}
function sheetJoin(){
  return sheetHead(t('add.joinTitle'))
    + '<form class="sheet-form" id="join-form" novalidate>'
    + '<label class="field"><span class="k">' + t('add.code') + '</span>'
    +   '<input id="jn-code" type="text" maxlength="12" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="' + t('add.codePh') + '" value="' + esc(sheet.code || '') + '"></label>'
    + '<p class="err" id="sheet-err"></p>'
    + '<div class="sheet-actions">'
    +   '<button class="btn ghost" type="button" data-action="closeSheet">' + t('common.cancel') + '</button>'
    +   '<button class="btn ink" type="submit">' + t('add.join') + '</button>'
    + '</div></form>';
}
function inviteLink(r){ return location.origin + location.pathname + '?join=' + encodeURIComponent(r.code); }
function sheetInvite(){
  var r = getRoom(sheet.roomId);
  if(!r) return sheetHead(t('inv.title'));
  return sheetHead(t('inv.title'), esc(r.name))
    + '<p class="sheet-note" style="margin-top:10px">' + t('inv.sub') + '</p>'
    + '<div class="code-big">' + esc(r.code) + '</div>'
    + '<p class="sheet-note link-line">' + esc(inviteLink(r)) + '</p>'
    + '<div class="sheet-actions">'
    +   '<button class="btn" type="button" data-action="copyInvite">' + iconCopy() + t('inv.copy') + '</button>'
    +   (navigator.share ? '<button class="btn ink" type="button" data-action="shareInvite">' + t('inv.share') + '</button>' : '')
    + '</div>';
}
function sheetMode(){
  var seed = hashSeed(state.user.id);
  var opts = ['normal', 'hard', 'loose'].map(function(md){
    return '<button class="mode-card m-' + md + '" type="button" data-action="enterMode" data-mode="' + md + '">'
      + '<span class="mc-poo' + (md !== 'normal' ? ' mc-icon' : '') + '">' + (md === 'normal' ? pooSVG(state.myPoo, 70, {seed:seed, noPuddle:true}) : iconMood(md)) + '</span>'
      + '<span class="mc-t"><b>' + t('mode.' + md) + '</b><span>' + t('mode.' + md + 'Sub') + '</span></span>'
      + '</button>';
  }).join('');
  return sheetHead(t('mode.title'), t('mode.sub')) + '<div class="mode-list">' + opts + '</div>';
}
function sheetRename(){
  return sheetHead(t('name.title'))
    + '<form class="sheet-form" id="rename-form" novalidate>'
    + '<label class="field"><span class="k">' + t('auth.nick') + '</span>'
    +   '<input id="me-name" type="text" maxlength="10" autocomplete="off" value="' + esc(state.user.name) + '"></label>'
    + '<p class="err" id="sheet-err"></p>'
    + '<div class="sheet-actions">'
    +   '<button class="btn ghost" type="button" data-action="closeSheet">' + t('common.cancel') + '</button>'
    +   '<button class="btn ink" type="submit">' + t('name.save') + '</button>'
    + '</div></form>';
}

function kindMark(kind){
  if(kind === 'hard') return '<span class="cd ring"></span>';
  if(kind === 'loose') return '<span class="cd tri"></span>';
  return '<span class="cd"></span>';
}
function sheetCalendar(){
  var r = getRoom(sheet.roomId);
  if(!r) return sheetHead(t('cal.title')) + '<p class="sheet-note">—</p>';
  var y = sheet.y, m = sheet.m;
  var st = monthStats(r, y, m);
  var now = new Date();
  var first = new Date(y, m, 1).getDay();
  var days = new Date(y, m + 1, 0).getDate();
  var dows = t('cal.dows').split(',');
  var dowHtml = dows.map(function(d){ return '<div class="cal-dow">' + d + '</div>'; }).join('');
  var cells = '';
  for(var b=0;b<first;b++) cells += '<div class="cell"></div>';
  for(var d=1;d<=days;d++){
    var dsec = 0, kinds = [];
    for(var k=0;k<r.records.length;k++){
      var dt = new Date(r.records[k].start);
      if(dt.getFullYear() === y && dt.getMonth() === m && dt.getDate() === d){ kinds.push(r.records[k].kind || 'normal'); dsec += r.records[k].seconds; }
    }
    var c = kinds.length;
    var isToday = now.getFullYear() === y && now.getMonth() === m && now.getDate() === d;
    var cls = 'cell' + (c ? ' has' : '') + (isToday ? ' today' : '') + (sheet.day === d ? ' sel' : '');
    /* show the special ones first so a 변비/설사 day is visible even with many records */
    kinds.sort(function(a, b2){ var o = {loose:0, hard:1, normal:2}; return o[a] - o[b2]; });
    var dots = '';
    for(var q=0;q<c;q++) dots += iconTinyPoo();
    cells += '<div class="' + cls + '"' + (c ? ' data-action="calDay" data-day="' + d + '" role="button" tabindex="0"' : '') + '>'
      + '<span class="d">' + d + '</span><span class="dots">' + dots + '</span>'
      + '</div>';
  }
  function nm(x){ return x ? esc(memberName(r, x.userId)) : '—'; }
  var detail = '';
  if(sheet.day){
    var recs = r.records.filter(function(rec){
      var dt = new Date(rec.start);
      return dt.getFullYear() === y && dt.getMonth() === m && dt.getDate() === sheet.day;
    }).sort(function(a, b2){ return a.start - b2.start; });
    var rows = recs.length ? recs.map(function(rec){
      return '<div class="rec"><span class="who">' + esc(memberName(r, rec.userId)) + '</span>'
        + '<span class="kind k-' + (rec.kind || 'normal') + '">' + kindMark(rec.kind) + t('kind.' + (rec.kind || 'normal')) + '</span>'
        + '<span>' + dur(rec.seconds) + '</span>'
        + '<span class="when">' + hhmm(rec.start) + '</span></div>';
    }).join('') : '<p class="sheet-note">' + t('cal.empty') + '</p>';
    detail = '<div class="day-detail"><h3>' + t('cal.dayDetail', {m:m + 1, d:sheet.day}) + '</h3>' + rows + '</div>';
  }
  return sheetHead(t('cal.title'), esc(r.name))
    + '<div class="cal-top">'
    +   '<span class="cal-month">' + t('cal.month', {y:y, m:m + 1}) + '</span>'
    +   '<div class="cal-nav">'
    +     '<button type="button" data-action="calPrev" aria-label="prev">' + iconBack() + '</button>'
    +     '<button type="button" data-action="calNext" aria-label="next" style="transform:scaleX(-1)">' + iconBack() + '</button>'
    +   '</div></div>'
    + '<div class="cal-grid">' + dowHtml + cells + '</div>'
    + '<p class="rank-h">' + t('rank.titleMonth', {m:m + 1}) + '</p>'
    + rankBoard(roomRows(r, y, m), false)
    + '<p class="sheet-note" style="text-align:center;margin-top:12px">' + t('cal.total', {n:st.totalN, t:durText(st.totalSec)}) + '</p>'
    + detail;
}

function sheetConfirm(){
  var kind = sheet.kind;
  var r = sheet.roomId ? getRoom(sheet.roomId) : null;
  var title = '', body = '';
  if(kind === 'logout'){ title = t('confirm.logoutTitle'); body = t('confirm.logoutBody'); }
  else if(kind === 'deleteMe'){ title = t('confirm.deleteMeTitle'); body = t('confirm.deleteMeBody'); }
  else if(kind === 'deleteRoom'){ title = t('confirm.deleteTitle'); body = t('confirm.deleteBody', {name:'<b>' + esc(r ? r.name : '') + '</b>'}); }
  else if(kind === 'leaveRoom'){ title = t('confirm.leaveTitle'); body = t('confirm.leaveBody', {name:'<b>' + esc(r ? r.name : '') + '</b>'}); }
  var danger = kind !== 'logout';
  return sheetHead(title)
    + '<p class="sheet-note" style="font-size:11px;color:var(--ink-2);margin-top:10px">' + body + '</p>'
    + '<div class="sheet-actions" style="margin-top:22px">'
    +   '<button class="btn ghost" type="button" data-action="closeSheet">' + t('confirm.no') + '</button>'
    +   '<button class="btn ' + (danger ? 'danger' : 'ink') + '" type="button" data-action="confirmYes">' + t('confirm.yes') + '</button>'
    + '</div>';
}

function sheetFriendProfile(){
  var people = allPeople();
  var p = null;
  for(var i=0;i<people.length;i++){ if(people[i].id === sheet.uid) p = people[i]; }
  if(!p) return sheetHead(t('friends.title'));
  var poo = p.isMe ? state.myPoo : (p.poo || {shape:'classic', thick:1, hat:'none'});
  var st = personStats(p);
  var badges = badgeTags(st);
  var hatTxt = hatName(poo.hat);
  return sheetHead(p.isMe ? t('mypoo.title') : esc(p.name), p.isMe ? t('badge.you') : '')
    + '<div class="profile-stage">' + pooSVG(poo, 150, {boil:true, seed:hashSeed(p.id)}) + '</div>'
    + '<div class="profile-name">' + esc(p.name) + '</div>'
    + '<div class="profile-rooms">' + esc(p.rooms.join(' · ')) + ' · ' + t('fp.rooms', {n:p.rooms.length}) + '</div>'
    + (badges ? '<div class="chips">' + badges + '</div>' : '')
    + '<div class="stats">'
    +   '<div class="stat"><b>' + st.count + '</b><span>' + t('fp.count') + '</span></div>'
    +   '<div class="stat"><b>' + (st.longest ? dur(st.longest) : '—') + '</b><span>' + t('fp.longest') + '</span></div>'
    +   '<div class="stat"><b>' + (st.total ? durText(st.total) : '—') + '</b><span>' + t('fp.total') + '</span></div>'
    +   '<div class="stat"><b>' + st.hard + '</b><span>' + t('kind.hard') + '</span></div>'
    +   '<div class="stat"><b>' + st.loose + '</b><span>' + t('kind.loose') + '</span></div>'
    +   '<div class="stat"><b>' + Math.max(0, st.count - st.hard - st.loose) + '</b><span>' + t('kind.normal') + '</span></div>'
    + '</div>'
    + '<p class="sheet-note" style="text-align:center;margin-top:14px">'
    +   t('mypoo.shape') + ' ' + t('shape.' + poo.shape) + ' · ' + t('thick.' + poo.thick) + ' · ' + hatTxt
    + '</p>'
    + '<div class="sheet-actions" style="margin-top:20px">'
    +   '<button class="btn" type="button" data-action="closeSheet">' + t('common.close') + '</button>'
    + '</div>';
}

function renderSheet(){
  var host = document.getElementById('sheet');
  if(!host) return;
  if(!sheet){ host.innerHTML = ''; host.classList.remove('open'); host.setAttribute('aria-hidden', 'true'); return; }
  var body = '';
  if(sheet.type === 'addRoom') body = sheetAddRoom();
  else if(sheet.type === 'join') body = sheetJoin();
  else if(sheet.type === 'invite') body = sheetInvite();
  else if(sheet.type === 'mode') body = sheetMode();
  else if(sheet.type === 'rename') body = sheetRename();
  else if(sheet.type === 'calendar') body = sheetCalendar();
  else if(sheet.type === 'notify') body = sheetNotify();
  else if(sheet.type === 'confirm') body = sheetConfirm();
  else if(sheet.type === 'roomAdmin') body = sheetRoomAdmin();
  else if(sheet.type === 'friendProfile') body = sheetFriendProfile();
  host.classList.add('open');
  host.setAttribute('aria-hidden', 'false');
  var cut = body.indexOf(SHEET_BODY_MARK);
  var head = cut >= 0 ? body.slice(0, cut) : '';
  var rest = cut >= 0 ? body.slice(cut + SHEET_BODY_MARK.length) : body;
  var livePanel = host.querySelector('.panel');
  if(livePanel && host.getAttribute('data-type') === sheet.type){
    livePanel.querySelector('.sheet-head').innerHTML = head;
    livePanel.querySelector('.sheet-body').innerHTML = rest;
    livePanel.classList.add('still');
    paintSheet();
    return;
  }
  host.setAttribute('data-type', sheet.type);
  host.innerHTML = '<div class="backdrop" data-action="closeSheet"></div>'
    + '<div class="panel" role="dialog" aria-modal="true">'
    +   '<div class="sheet-head">' + head + '</div>'
    +   '<div class="sheet-body">' + rest + '</div>'
    + '</div>';
  paintSheet();
  if(/^(addRoom|join|rename)$/.test(sheet.type)){
    var inp = host.querySelector('input');
    if(inp) setTimeout(function(){ try{ inp.focus(); }catch(e){} }, 140);
  }
}
function openSheet(type, opts){
  sheet = {type:type};
  if(opts){ for(var k in opts){ if(Object.prototype.hasOwnProperty.call(opts, k)) sheet[k] = opts[k]; } }
  if(type === 'calendar'){
    var now = new Date();
    sheet.y = now.getFullYear();
    sheet.m = now.getMonth();
    sheet.day = null;
  }
  if(type === 'notify'){
    state.notifications.forEach(function(n){ n.read = true; });
    updateBell();
    api('POST', '/api/notifications/read', {}).catch(function(){});
  }
  renderSheet();
}
function closeSheet(){
  sheet = null;
  var host = document.getElementById('sheet');
  if(host){ host.innerHTML = ''; host.classList.remove('open'); host.setAttribute('aria-hidden', 'true'); }
}
function calShift(dir){
  if(!sheet) return;
  var m = sheet.m + dir, y = sheet.y;
  if(m < 0){ m = 11; y--; }
  if(m > 11){ m = 0; y++; }
  sheet.m = m; sheet.y = y; sheet.day = null;
  renderSheet();
}
function openDay(d){
  if(!sheet) return;
  sheet.day = (sheet.day === d) ? null : d;
  renderSheet();
}

/* ===================== actions (server) ===================== */
function busy(el, on){ if(el){ if(on) el.setAttribute('disabled', ''); else el.removeAttribute('disabled'); } }
function afterLogin(s, greet){
  applyState(s);
  state.view = 'tabs'; state.tab = 'home'; state.roomId = null;
  render();
  connectLive();
  armIdle();
  var app = document.getElementById('app');
  if(app) app.scrollTop = 0;
  if(greet) toast(t('toast.entered', {name:esc(state.user.name)}));
  if(pendingJoin){ var c = pendingJoin; pendingJoin = null; joinByCode(c); }
}
/* Auth backend. With Supabase, set window.POO_AUTH = {signUp, signIn, resetPassword}
   (each returns a Promise). signUp/signIn resolve to the app state ({user, rooms, ...})
   or to {needsConfirm:true}; reject with an Error whose .code is one of the err.* keys. */
function authCall(kind, body){
  var B = window.POO_AUTH;
  if(B && typeof B[kind] === 'function') return B[kind](body);
  var url = {signUp:'/api/signup', signIn:'/api/login', resetPassword:'/api/reset', resend:'/api/resend'}[kind];
  return api('POST', url, body);
}
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function submitAuth(){
  var g = function(id){ var e = document.getElementById(id); return e ? e.value : ''; };
  var errEl = document.getElementById('auth-err');
  var btn = document.getElementById('auth-go');
  var su = authMode === 'signup';
  var email = g('f-email').trim().toLowerCase(), pw = g('f-pw');
  var body = {email:email, password:pw};
  errEl.classList.remove('ok');
  if(su){
    body.name = g('f-nick').trim();
    if(!body.name){ errEl.textContent = t('err.bad_name'); return; }
  }
  if(!EMAIL_RE.test(email)){ errEl.textContent = t('err.bad_email'); return; }
  if(pw.length < 6){ errEl.textContent = t('err.bad_password'); return; }
  errEl.textContent = '';
  busy(btn, true);
  authCall(su ? 'signUp' : 'signIn', body).then(function(s){
    if(s && s.needsConfirm){
      busy(btn, false);
      sentEmail = email; authMode = 'sent'; render();
      startSentPoll();
      return;
    }
    afterLogin(s, true);
  }, function(e){
    errEl.textContent = errText(e);
    busy(btn, false);
  });
}
function forgotPw(){
  var errEl = document.getElementById('auth-err');
  var fe = document.getElementById('f-email');
  var email = fe ? fe.value.trim().toLowerCase() : '';
  errEl.classList.remove('ok');
  if(!EMAIL_RE.test(email)){ errEl.textContent = t('auth.needEmail'); if(fe) fe.focus(); return; }
  authCall('resetPassword', {email:email}).then(function(){
    errEl.textContent = t('auth.resetSent'); errEl.classList.add('ok');
  }, function(e){ errEl.textContent = errText(e); });
}
function kickOut(){
  disconnectLive();
  closeSheet(); closeGame();
  state.user = null; state.rooms = []; state.notifications = [];
  state.view = 'tabs'; state.tab = 'home'; state.roomId = null;
  render();
}
function openRoom(id){
  if(!getRoom(id)) return;
  state.roomId = id;
  state.view = 'room';
  render();
  var app = document.getElementById('app');
  if(app) app.scrollTop = 0;
}
function backToTabs(){
  flushPush();
  state.view = 'tabs';
  state.roomId = null;
  render();
  var app = document.getElementById('app');
  if(app) app.scrollTop = 0;
}
function enterStall(mode){
  var r = getRoom(state.roomId);
  if(!r || !state.user) return;
  if(mySession(r)){ toast(t('err.already_in')); return; }
  closeSheet();
  /* optimistic: sit down now, the server confirms through sync */
  var stall = 0;
  for(var mi=0;mi<r.members.length;mi++){ if(r.members[mi].id === state.user.id) stall = mi; }
  r.sessions.push({userId:state.user.id, stall:stall, startedAt:nowS(), mode:mode, push:0, cheers:0, knocks:0, relieved:false});
  if(mode === 'loose'){ sirenSound(); vibrate([60, 40, 60]); }
  else plopSound();
  render();
  toast(t('toast.pooping', {name:esc(state.user.name)}));
  api('POST', '/api/rooms/' + r.id + '/enter', {mode:mode}).then(scheduleSync, function(e){ toast(errText(e)); scheduleSync(); });
}
function leaveStall(){
  var r = getRoom(state.roomId);
  if(!r || !state.user) return;
  var mine = mySession(r);
  if(!mine) return;
  flushPush();
  var sec = Math.max(1, (nowS() - mine.startedAt) / 1000);
  var loose = mine.mode === 'loose';
  r.sessions = r.sessions.filter(function(x){ return x !== mine; });
  unlockAudio();
  flushSound();
  if(loose) setTimeout(flushSound, 1100);   /* 설사는 두 번 내린다 */
  vibrate(30);
  render();
  toast(t('room.leaveDone', {t:dur(sec)}) + (loose ? ' · ×2' : ''));
  api('POST', '/api/rooms/' + r.id + '/flush', {}).then(scheduleSync, function(){ scheduleSync(); });
}
function setMode(mode){
  var r = getRoom(state.roomId), mine = mySession(r);
  if(!mine) return;
  mine.mode = mode; mine.push = 0; mine.relieved = false;
  if(mode === 'loose'){ sirenSound(); quake(); } else gruntSound(0);
  render();
  api('POST', '/api/rooms/' + r.id + '/mode', {mode:mode}).then(scheduleSync, scheduleSync);
}
/* 변비 힘주기: count taps locally, send them in small batches */
var pushQ = 0, pushT = null;
function doPush(btn){
  var r = getRoom(state.roomId), mine = mySession(r);
  if(!mine || (mine.mode !== 'hard' && mine.mode !== 'loose') || mine.relieved) return;
  mine.push = Math.min(state.pushGoal, (mine.push || 0) + 1);
  pushQ++;
  gruntSound(mine.push);
  vibrate(12);
  var pct = Math.round(100 * mine.push / state.pushGoal);
  var slots = document.querySelectorAll('#push-gauge .pg-slot');
  if(slots.length){
    var k = Math.min(slots.length, mine.push) - 1;
    for(var q=0;q<slots.length;q++) slots[q].classList.toggle('on', q <= k);
    if(slots[k]){ slots[k].classList.remove('pop'); void slots[k].offsetWidth; slots[k].classList.add('pop'); }
  }
  var lb = document.getElementById('push-lb');
  if(lb) lb.textContent = t(mine.mode === 'loose' ? 'room.pushSubLoose' : 'room.pushSub', {n:mine.push, goal:state.pushGoal});
  var me = document.querySelector('.stall.mine');
  if(me){ me.classList.remove('strain'); void me.offsetWidth; me.classList.add('strain'); }
  if(btn){ btn.classList.remove('pump'); void btn.offsetWidth; btn.classList.add('pump'); }
  if(mine.push >= state.pushGoal){
    mine.relieved = true;
    flushPush();
    render();
  } else if(!pushT){
    pushT = setTimeout(flushPush, 450);
  }
}
function flushPush(){
  if(pushT){ clearTimeout(pushT); pushT = null; }
  if(!pushQ || !state.roomId) return;
  var n = pushQ, rid = state.roomId;
  pushQ = 0;
  api('POST', '/api/rooms/' + rid + '/push', {n:n}).catch(function(){});
}
function spawnHearts(el){
  if(!el) return;
  for(var i=0;i<4;i++){
    var h = document.createElement('span');
    h.className = 'heart-fly';
    h.textContent = '+';
    h.style.setProperty('--dx', (Math.random() * 46 - 23) + 'px');
    h.style.setProperty('--rot', (Math.random() * 30 - 15) + 'deg');
    h.style.left = (34 + Math.random() * 32) + '%';
    h.style.animationDelay = (i * 70) + 'ms';
    el.appendChild(h);
    (function(node){
      setTimeout(function(){ if(node.parentNode) node.parentNode.removeChild(node); }, 1150);
    })(h);
  }
}
function cheer(userId){
  var r = getRoom(state.roomId);
  if(!r) return;
  var s = null;
  for(var i=0;i<r.sessions.length;i++){ if(r.sessions[i].userId === userId) s = r.sessions[i]; }
  if(!s) return;
  s.cheers = (s.cheers || 0) + 1;
  if((s.mode === 'hard' || s.mode === 'loose') && !s.relieved) s.push = Math.min(state.pushGoal, (s.push || 0) + 3);
  var name = memberName(r, userId);
  render();
  spawnHearts(document.querySelector('.stall[data-user-id="' + userId + '"]'));
  vibrate(25);
  cheerSound();
  if(!stallBubble(userId, interLine('pushOut', {target:name}))) toast(t('room.cheer', {name:esc(name)}), true);
  api('POST', '/api/rooms/' + r.id + '/cheer', {userId:userId}).then(scheduleSync, scheduleSync);
}
function createRoom(){
  var input = document.getElementById('nr-name');
  var name = input ? input.value.trim() : '';
  if(!name){ setSheetErr(t('add.err')); if(input) input.focus(); return; }
  api('POST', '/api/rooms', {name:name}).then(function(res){
    closeSheet();
    return refresh().then(function(){ openRoom(res.id); toast(t('add.done')); });
  }, function(e){ setSheetErr(errText(e)); });
}
function joinByCode(code){
  return api('POST', '/api/rooms/join', {code:code}).then(function(res){
    closeSheet();
    return refresh().then(function(){ openRoom(res.id); toast(t('add.joined')); });
  }, function(e){
    if(sheet && sheet.type === 'join') setSheetErr(errText(e));
    else toast(errText(e));
  });
}
function renameRoom(){
  var r = getRoom(sheet ? sheet.roomId : null);
  var input = document.getElementById('rn-name');
  if(!r || !isOwner(r) || !input) return;
  var name = input.value.trim();
  if(!name){ setSheetErr(t('add.err')); input.focus(); return; }
  r.name = name.slice(0, 20);
  render(); renderSheet();
  api('PATCH', '/api/rooms/' + r.id, {name:name}).then(function(){ toast(t('toast.renamed')); scheduleSync(); }, function(e){ toast(errText(e)); scheduleSync(); });
}
function deleteRoom(){
  var r = getRoom(sheet ? sheet.roomId : null);
  if(!r || !isOwner(r)) return;
  closeSheet();
  state.rooms = state.rooms.filter(function(x){ return x !== r; });
  if(state.roomId === r.id){ state.roomId = null; state.view = 'tabs'; }
  render();
  api('DELETE', '/api/rooms/' + r.id, {}).then(function(){ toast(t('toast.roomDeleted')); scheduleSync(); }, function(e){ toast(errText(e)); scheduleSync(); });
}
function leaveRoom(){
  var r = getRoom(sheet ? sheet.roomId : null);
  if(!r) return;
  closeSheet();
  state.rooms = state.rooms.filter(function(x){ return x !== r; });
  state.roomId = null; state.view = 'tabs';
  render();
  api('POST', '/api/rooms/' + r.id + '/leave', {}).then(function(){ toast(t('toast.roomLeft')); scheduleSync(); }, function(e){ toast(errText(e)); scheduleSync(); });
}
var pooSaveT = null;
function queuePooSave(){
  if(pooSaveT) clearTimeout(pooSaveT);
  pooSaveT = setTimeout(function(){
    pooSaveT = null;
    api('PUT', '/api/me/poo', state.myPoo).catch(function(e){ toast(errText(e)); });
  }, 350);
}
function copyText(s){
  if(navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(s);
  return new Promise(function(res, rej){
    var ta = document.createElement('textarea');
    ta.value = s; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try{ document.execCommand('copy'); res(); }catch(e){ rej(e); }
    document.body.removeChild(ta);
  });
}

function handleAction(a, el){
  switch(a){
    case 'authSwitch': {
      var keepId = (document.getElementById('f-email') || {}).value || '';
      authMode = authMode === 'login' ? 'signup' : 'login';
      render();
      var fi = document.getElementById('f-email'); if(fi) fi.value = keepId;
      break;
    }
    case 'forgotPw': forgotPw(); break;
    case 'pwEye': {
      var pin = document.getElementById('f-pw');
      if(pin){
        var show = pin.type === 'password';
        pin.type = show ? 'text' : 'password';
        el.setAttribute('aria-pressed', show ? 'true' : 'false');
        el.setAttribute('aria-label', t(show ? 'auth.pwHide' : 'auth.pwShow'));
        el.innerHTML = iconEye(show);
      }
      break;
    }
    case 'authBack': authMode = 'login'; render(); {
      var fe2 = document.getElementById('f-email'); if(fe2) fe2.value = sentEmail;
    } break;
    case 'resendMail': {
      var er2 = document.getElementById('auth-err');
      busy(el, true);
      authCall('resend', {email:sentEmail}).then(function(){
        busy(el, false);
        if(er2){ er2.textContent = t('auth.resent'); er2.classList.add('ok'); }
      }, function(e){ busy(el, false); if(er2){ er2.classList.remove('ok'); er2.textContent = errText(e); } });
      break;
    }
    case 'tab':
      kkDraft = null;
      state.tab = el.getAttribute('data-tab');
      state.view = 'tabs';
      closeSheet();
      render();
      document.getElementById('app').scrollTop = 0;
      break;
    case 'goPoo':
      state.tab = 'mypoo'; state.view = 'tabs'; render();
      document.getElementById('app').scrollTop = 0;
      break;
    case 'openRoom': openRoom(el.getAttribute('data-room')); break;
    case 'back': backToTabs(); break;
    case 'enter': unlockAudio(); openSheet('mode'); break;
    case 'enterMode': enterStall(el.getAttribute('data-mode')); break;
    case 'setMode': setMode(el.getAttribute('data-mode')); break;
    case 'push': doPush(el); break;
    case 'leave': leaveStall(); break;
    case 'game': openGame(); break;
    case 'addRoom': openSheet('addRoom'); break;
    case 'joinRoom': openSheet('join'); break;
    case 'invite': openSheet('invite', {roomId:state.roomId || (sheet && sheet.roomId)}); break;
    case 'copyInvite': {
      var r1 = getRoom(sheet && sheet.roomId);
      if(r1) copyText(inviteLink(r1)).then(function(){ toast(t('inv.copied')); }, function(){ toast(r1.code); });
      break;
    }
    case 'shareInvite': {
      var r2 = getRoom(sheet && sheet.roomId);
      if(r2 && navigator.share) navigator.share({title:'Poo-riend', text:t('inv.text', {room:r2.name, code:r2.code}), url:inviteLink(r2)}).catch(function(){});
      break;
    }
    case 'calendar': openSheet('calendar', {roomId:state.roomId}); break;
    case 'notifications': openSheet('notify'); break;
    case 'roomAdmin': openSheet('roomAdmin', {roomId:state.roomId, hue:undefined, door:null}); break;
    case 'renameRoom': renameRoom(); break;
    case 'saveColor': saveColor(); break;
    case 'deleteRoomAsk': openSheet('confirm', {kind:'deleteRoom', roomId:sheet.roomId}); break;
    case 'leaveRoomAsk': openSheet('confirm', {kind:'leaveRoom', roomId:sheet.roomId}); break;
    case 'friendProfile': openSheet('friendProfile', {uid:el.getAttribute('data-uid')}); break;
    case 'renameMe': openSheet('rename'); break;
    case 'closeSheet': closeSheet(); break;
    case 'pooTab':
      pooTab = el.getAttribute('data-tab');
      render();
      break;
    case 'delNote': {
      var nid = el.getAttribute('data-id');
      state.notifications = state.notifications.filter(function(n){ return String(n.id) !== nid; });
      var row = el.closest('.nrow');
      if(row){ row.parentNode.removeChild(row); }
      if(!state.notifications.length) renderSheet();
      updateBell();
      if(!/^l/.test(nid)) api('DELETE', '/api/notifications/' + encodeURIComponent(nid), {}).catch(function(){});
      else scheduleSync();
      break;
    }
    case 'delAllNotes':
      state.notifications = [];
      renderSheet(); updateBell();
      api('DELETE', '/api/notifications', {}).catch(function(){});
      break;
    case 'kkSec':
      kkSec = el.getAttribute('data-sec');
      pooTab = KK_TABS[kkSec][0];
      render();
      break;
    case 'pickRoomDoor': {
      sheet.door = el.getAttribute('data-val');
      var opts = document.querySelectorAll('#room-doors .ocard');
      for(var oi=0;oi<opts.length;oi++){
        var was = opts[oi].classList.contains('on'), now = opts[oi] === el;
        if(was === now) continue;
        opts[oi].classList.toggle('on', now);
        if(now) skPaint(opts[oi]);
        else { var f = opts[oi].querySelector('.skf'); if(f) f.parentNode.removeChild(f); }
      }
      break;
    }
    case 'pickHue': {
      /* only the 무채색 toggle uses this now */
      var mb = document.querySelector('.mono-btn'), hi = document.getElementById('hue-input'), rd = document.getElementById('room-doors');
      if(sheet.hue === null){
        sheet.hue = parseInt(hi ? hi.value : 28, 10) || 0;
        if(mb) mb.classList.remove('on');
        if(hi) hi.classList.remove('off');
        if(rd) rd.style.setProperty('--door', 'hsl(' + sheet.hue + ' 34% 84%)');
      } else {
        sheet.hue = null;
        if(mb) mb.classList.add('on');
        if(hi) hi.classList.add('off');
        if(rd) rd.style.setProperty('--door', 'var(--bg)');
      }
      break;
    }
    case 'previewMood':
      previewMood = el.getAttribute('data-mood');
      render();
      if(previewMood === 'hard') gruntSound(10);
      else if(previewMood === 'loose') rumbleSound();
      break;
    case 'pick': {
      var kind = el.getAttribute('data-kind');
      var val = el.getAttribute('data-val');
      var np = kkCfg();
      if(kind === 'shape') np.shape = normShape(val);
      else if(kind === 'thick') np.thick = normThick(val);
      else if(kind === 'toilet') np.toilet = TOILETS.indexOf(val) >= 0 ? val : 'basic';
      else if(kind === 'prop') np.prop = PROPS.indexOf(val) >= 0 ? val : 'none';
      else if(kind === 'acc') np.acc = ACCS.indexOf(val) >= 0 ? val : 'none';
      else np.hat = hatById(val).id;
      var grid = document.querySelector('#app .ogrid');
      var keepScroll = grid ? grid.scrollTop : 0;
      render();
      var g2 = document.querySelector('#app .ogrid');
      if(g2) g2.scrollTop = keepScroll;
      break;
    }
    case 'kkSave': {
      if(!kkDraft) break;
      state.myPoo = JSON.parse(JSON.stringify(kkDraft));
      if(state.user) state.user.poo = state.myPoo;
      if(MINI.on) miniUpdatePlayer();
      queuePooSave();
      render();
      toast(t('mypoo.saved'));
      break;
    }
    case 'kkBack':
      kkDraft = null;
      state.tab = 'home'; state.view = 'tabs';
      render();
      break;
    case 'lang': {
      var typed = null;
      if(!state.user){
        typed = {};
        ['f-email', 'f-pw', 'f-nick'].forEach(function(id){ var e = document.getElementById(id); if(e) typed[id] = e.value; });
      }
      state.lang = el.getAttribute('data-lang');
      savePrefs(); render();
      if(sheet) renderSheet();
      if(typed){
        for(var id in typed){ var e2 = document.getElementById(id); if(e2) e2.value = typed[id]; }
      }
      break;
    }
    case 'toggleDark':
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      savePrefs(); render();
      if(sheet) renderSheet();
      break;
    case 'autoLogout':
      state.prefs.autoLogout = el.getAttribute('data-min') || '0';
      savePrefs(); render(); armIdle();
      break;
    case 'logoutAsk': openSheet('confirm', {kind:'logout'}); break;
    case 'deleteMeAsk': openSheet('confirm', {kind:'deleteMe'}); break;
    case 'confirmYes':
      if(sheet && sheet.kind === 'logout'){ closeSheet(); doLogout(false); }
      else if(sheet && sheet.kind === 'deleteMe'){
        closeSheet();
        api('DELETE', '/api/me', {}).then(function(){ kickOut(); toast(t('settings.delete')); }, function(e){ toast(errText(e)); });
      }
      else if(sheet && sheet.kind === 'deleteRoom'){ deleteRoom(); }
      else if(sheet && sheet.kind === 'leaveRoom'){ leaveRoom(); }
      break;
    case 'calPrev': calShift(-1); break;
    case 'calNext': calShift(1); break;
    case 'calDay': openDay(parseInt(el.getAttribute('data-day'), 10)); break;
    default: break;
  }
}
/* long press / double tap on stalls */
var press = {el:null, timer:null, long:false, x:0, y:0};
function clearPress(){ if(press.timer) clearTimeout(press.timer); press.timer = null; }
document.addEventListener('pointerdown', function(e){
  if(!state.user || state.view !== 'room') return;
  var tgt = e.target;
  if(!tgt || !tgt.closest) return;
  var el = tgt.closest('.stall.busy');
  if(!el) return;
  var uid = el.getAttribute('data-user-id');
  if(!uid || uid === state.user.id) return;
  clearPress();
  press.el = el; press.long = false; press.x = e.clientX; press.y = e.clientY;
  press.timer = setTimeout(function(){
    press.long = true;
    if(press.el) cheer(uid);
  }, 520);
}, {passive:true});
document.addEventListener('pointerup', function(e){
  if(!press.el) return;
  clearPress();
  var el = press.el, uid = el.getAttribute('data-user-id');
  var wasLong = press.long;
  press.el = null;
  if(wasLong) return;
  if(Math.abs(e.clientX - press.x) > 12 || Math.abs(e.clientY - press.y) > 12) return;
  var now = Date.now();
  var last = parseInt(el.getAttribute('data-last-tap') || '0', 10);
  if(now - last < 330){
    el.setAttribute('data-last-tap', '0');
    knock(uid, el);
  } else {
    el.setAttribute('data-last-tap', String(now));
  }
}, {passive:true});
document.addEventListener('pointercancel', function(){ clearPress(); press.el = null; }, {passive:true});
document.addEventListener('pointermove', function(e){
  if(!press.el) return;
  if(Math.abs(e.clientX - press.x) > 14 || Math.abs(e.clientY - press.y) > 14){ clearPress(); press.el = null; }
}, {passive:true});
document.addEventListener('contextmenu', function(e){
  if(e.target && e.target.closest && e.target.closest('.stall')) e.preventDefault();
});
/* ===================== mini game (toilet run) ===================== */
var MINI = {
  on:false, raf:null, last:0, W:360, H:320,
  speed:200, dist:0, score:0, lives:3, over:false,
  py:0, vy:0, inv:0, obs:[], items:[], el:null, stage:null,
  nextObs:0, nextItem:0, grace:0, lvl:0, runState:null, coyote:0
};
/* v5 jump feel: 낮은 중력 + 높은 초속도 = 높고 넓은 포물선
   이론값 꼭대기 = jump^2 / (2*grav) ≈ 215px, 체공 = 2*jump/grav ≈ 1.05s
   (프레임 단위 적분에서 조금 깎여 실제 꼭대기 ≈ 195~208px, 체공 ≈ 0.96~1.04s) */
var GG = {
  grav:1560, jump:820, plX:0, plW:68, plH:68, ground:40,
  obsW:60, obsH:56, tpW:46, tpBox:44,
  apex:215, hitMargin:0.15
};

function gameBest(){ return state.best || 0; }

function buildGame(){
  var host = document.getElementById('game');
  if(!host) return null;
  host.innerHTML = '<div class="g-wrap">'
    + '<div class="g-head">'
    +   '<div class="t"><b>' + t('game.title') + '</b><span>' + t('game.sub') + '</span></div>'
    +   '<button class="x" data-action="closeGame" aria-label="' + esc(t('common.close')) + '">' + iconClose() + '</button>'
    + '</div>'
    + '<div class="g-hud">'
    +   '<div class="g-lives" id="g-lives"></div>'
    +   '<div class="g-hud-r">'
    +     '<div class="g-score" id="g-score">0<em>' + t('game.best') + ' ' + gameBest() + '</em></div>'
    +   '</div>'
    + '</div>'
    + '<div class="stage-g" id="g-stage">'
    +   '<div class="gsky">' + skyArt() + '</div>'
    +   '<div class="gground">' + groundArt() + '</div>'
    +   '<div class="g-shadow" id="g-shadow">' + shadowArt() + '</div>'
    +   '<div class="g-poo run" id="g-player"><span class="g-fly f1">' + flySVG() + '</span><span class="g-fly f2">' + flySVG() + '</span><div class="g-poo-in">' + pooSVG(state.myPoo, 68, {seed:state.user ? hashSeed(state.user.id) : 1}) + '</div></div>'
    +   '<div class="g-over" id="g-over"><div class="bx">'
    +     '<span class="g-over-art">' + iconWC('basic') + '</span>'
    +     '<b>' + t('game.over') + '</b>'
    +     '<p class="s">' + t('game.score') + ' <em id="g-final">0</em> · ' + t('game.best') + ' <em id="g-best">' + gameBest() + '</em></p>'
    +     '<button class="btn ink" data-action="gameRestart">' + t('game.restart') + '</button>'
    +   '</div></div>'
    + '</div>'
    + '<div class="g-foot">'
    +   '<p class="hint">' + t('game.hint') + '</p>'
    +   '<button class="btn sm" data-action="closeGame">' + t('common.close') + '</button>'
    + '</div>'
    + '</div>';
  host.classList.add('open');
  host.setAttribute('aria-hidden', 'false');
  paintFrames(host);
  return host;
}
function miniLives(){
  var box = document.getElementById('g-lives');
  if(!box) return;
  var n = Math.min(3, MINI.lives);
  var html = '';
  for(var i=0;i<n;i++) html += '<span class="lf" style="color:var(--ink)">' + iconHeart(17, true) + '</span>';
  if(MINI.lives > 3) html += '<span class="lf" style="color:var(--ink)">' + iconTP(19) + '</span>';
  for(var j=n;j<3;j++) html += '<span class="lf" style="color:var(--line-2)">' + iconHeart(17, false) + '</span>';
  box.innerHTML = html;
}
function miniHud(){
  var s = document.getElementById('g-score');
  if(s) s.innerHTML = MINI.score + '<em>' + t('game.best') + ' ' + gameBest() + '</em>';
}
function miniClearWorld(){
  var i;
  for(i=0;i<MINI.obs.length;i++){ if(MINI.obs[i].el && MINI.obs[i].el.parentNode) MINI.obs[i].el.parentNode.removeChild(MINI.obs[i].el); }
  for(i=0;i<MINI.items.length;i++){ if(MINI.items[i].el && MINI.items[i].el.parentNode) MINI.items[i].el.parentNode.removeChild(MINI.items[i].el); }
  MINI.obs = []; MINI.items = [];
}
function miniReset(){
  miniClearWorld();
  MINI.speed = 200; MINI.dist = 0; MINI.score = 0; MINI.lives = 3; MINI.lvl = 0;
  MINI.py = 0; MINI.vy = 0; MINI.inv = 0; MINI.over = false; MINI.last = 0;
  MINI.coyote = 0; MINI.boost = 0; MINI.puffT = 0; MINI.mile = 1;
  MINI.nextObs = 1.3; MINI.nextItem = 1.9; MINI.grace = 1.3;
  var st = document.getElementById('g-stage');
  if(st){
    MINI.stage = st;
    MINI.W = st.clientWidth || 360;
    MINI.H = st.clientHeight || 320;
    GG.plX = Math.round(MINI.W * .18);
    st.style.setProperty('--plx', GG.plX + 'px');
  }
  var pl = document.getElementById('g-player');
  if(pl){
    pl.style.transform = 'translate3d(0,0,0)';
    pl.classList.add('run');
  }
  MINI.runState = 'run';
  var over = document.getElementById('g-over');
  if(over) over.classList.remove('on');
  var sh = document.getElementById('g-shadow');
  if(sh) sh.style.opacity = '1';
  miniLives(); miniHud();
}
function miniUpdatePlayer(){
  var pl = document.querySelector('#g-player .g-poo-in');
  if(pl) pl.innerHTML = pooSVG(state.myPoo, 68, {seed:state.user ? hashSeed(state.user.id) : 1});
}
function miniJump(){
  if(!MINI.on || MINI.over) return;
  if(MINI.py <= 1 || MINI.coyote > 0){
    MINI.vy = GG.jump;
    MINI.py = Math.max(MINI.py, 1);
    MINI.coyote = 0;
    tone(440, 680, 0.08, 0.07, 'sine');
  }
}
/* v5: 점프 높이를 손을 뗀 시점에 깎지 않는다 (짧은 탭도 200px 포물선 유지) */
function miniCut(){ /* no-op: 높이 고정 */ }
function spawnToilet(x){
  var el = document.createElement('div');
  el.className = 'g-obs';
  el.innerHTML = iconToilet(GAME_TOILETS[Math.floor(Math.random() * GAME_TOILETS.length)]);
  el.style.transform = 'translate3d(' + x.toFixed(1) + 'px,0,0)';
  MINI.stage.appendChild(el);
  MINI.obs.push({x:x, w:GG.obsW, h:GG.obsH, el:el});
}
function obsNear(x, gap){
  for(var i=0;i<MINI.obs.length;i++){
    var o = MINI.obs[i];
    if(o.x < x + gap && o.x + o.w > x - gap) return true;
  }
  return false;
}
function spawnTP(x, kind){
  kind = kind || 'tp';
  var el = document.createElement('div');
  el.className = 'g-item ' + kind;
  el.innerHTML = kind === 'potato' ? iconPotato(GG.tpW) : iconTP(GG.tpW);
  el.style.transform = 'translate3d(' + x.toFixed(1) + 'px,0,0)';
  MINI.stage.appendChild(el);
  MINI.items.push({x:x, el:el, kind:kind});
}
function gapDist(){ return 480 - 190 * MINI.lvl; }
function spawnPattern(){
  var t = MINI.lvl, r = Math.random(), n = 1;
  var p3 = t > 0.62 ? (t - 0.62) / 0.38 * 0.30 : 0;
  var p2 = t < 0.12 ? 0 : Math.min(0.55, 0.16 + (t - 0.12) * 0.95);
  if(r < p3) n = 3;
  else if(r < p3 + p2) n = 2;
  var base = MINI.W + 46;
  for(var i=0;i<n;i++) spawnToilet(base + i * (GG.obsW + 10));
  MINI.nextObs = (gapDist() + (n - 1) * (GG.obsW + 10)) / MINI.speed;
}
function miniHit(){
  if(MINI.inv > 0 || MINI.over || MINI.boost > 0) return;
  gamePop(popLine('hit'), 'hit');
  MINI.lives--;
  MINI.inv = 1.1;
  var pl = document.getElementById('g-player');
  if(pl){ pl.classList.remove('hit'); void pl.offsetWidth; pl.classList.add('hit'); }
  tone(180, 90, 0.2, 0.2, 'square');
  vibrate(40);
  miniLives();
  if(MINI.lives <= 0) miniOver();
}
function miniOver(){
  MINI.over = true;
  MINI.on = false;
  if(MINI.raf) cancelAnimationFrame(MINI.raf);
  MINI.raf = null;
  MINI.last = 0;
  var newBest = false;
  if(MINI.score > gameBest()){ state.best = MINI.score; newBest = true; api('PUT', '/api/me/best', {score:MINI.score}).catch(function(){}); }
  var over = document.getElementById('g-over');
  if(over){ over.classList.add('on'); paintFrames(over); }
  var s = document.querySelector('#g-over .s');
  if(s) s.innerHTML = (newBest ? t('game.newBest') + ' · ' : '')
    + t('game.score') + ' <em>' + MINI.score + '</em> · ' + t('game.best') + ' <em>' + gameBest() + '</em>';
  var pl = document.getElementById('g-player');
  if(pl){ pl.classList.remove('run'); pl.classList.add('hit'); }
  miniHud();
  tone(320, 120, 0.35, 0.18, 'sine');
}
function miniLoop(ts){
  if(!MINI.on || MINI.over) return;
  if(!MINI.last) MINI.last = ts;
  var dt = (ts - MINI.last) / 1000;
  MINI.last = ts;
  if(dt > 0.05) dt = 0.05;
  if(dt < 0) dt = 0;

  /* --- progressive difficulty: speed and gap both move with distance --- */
  MINI.lvl = Math.min(1, MINI.dist / 9000);
  MINI.speed = 200 + 240 * Math.pow(MINI.lvl, 0.8);
  MINI.dist += MINI.speed * dt;
  var sc = Math.floor(MINI.dist / 12);
  if(sc !== MINI.score){ MINI.score = sc; miniHud(); }
  if(MINI.score >= MINI.mile * 150){ MINI.mile++; gamePop(popLine('mile'), 'mile'); }
  if(MINI.boost > 0){
    MINI.boost -= dt; MINI.puffT -= dt;
    if(MINI.puffT <= 0){ MINI.puffT = .09; gamePuff(); }
    if(MINI.boost <= 0){ var bp = document.getElementById('g-player'); if(bp) bp.classList.remove('boost'); }
  }

  if(MINI.inv > 0) MINI.inv -= dt;
  if(MINI.coyote > 0) MINI.coyote -= dt;

  /* --- player --- */
  MINI.vy -= GG.grav * dt;
  MINI.py += MINI.vy * dt;
  if(MINI.py <= 0){ MINI.py = 0; MINI.vy = 0; MINI.coyote = 0; }
  var pl = document.getElementById('g-player');
  if(pl){
    pl.style.transform = 'translate3d(0,' + (-MINI.py).toFixed(1) + 'px,0)';
    var running = MINI.py <= 1 && !MINI.over;
    if(running !== (MINI.runState === 'run')){
      MINI.runState = running ? 'run' : 'air';
      if(running) pl.classList.add('run'); else pl.classList.remove('run');
    }
    pl.style.opacity = (MINI.inv > 0 && Math.floor(MINI.inv * 12) % 2 === 0) ? '.55' : '1';
  }
  var sh = document.getElementById('g-shadow');
  if(sh){
    var k = Math.max(0, 1 - MINI.py / GG.apex);
    sh.style.transform = 'scale(' + (0.55 + 0.45 * k).toFixed(2) + ',1)';
    sh.style.opacity = (0.35 + 0.65 * k).toFixed(2);
  }

  /* hitbox: 스프라이트보다 15% 안쪽 — 그림에 살짝 닿은 정도로는 억울하게 죽지 않는다 */
  var M = GG.hitMargin;
  var pB = MINI.py, pT = MINI.py + GG.plH;
  var pL = GG.plX + GG.plW * M, pR = GG.plX + GG.plW * (1 - M);

  /* --- spawns --- */
  if(MINI.grace > 0){
    MINI.grace -= dt;
  } else {
    MINI.nextObs -= dt;
    if(MINI.nextObs <= 0) spawnPattern();
  }
  MINI.nextItem -= dt;
  if(MINI.nextItem <= 0){
    if(!obsNear(MINI.W + 40, 96)) spawnTP(MINI.W + 40, (MINI.dist > 900 && Math.random() < .3) ? 'potato' : 'tp');
    MINI.nextItem = 2.4 + Math.random() * 1.4;
  }

  /* --- obstacles --- */
  var i;
  for(i = MINI.obs.length - 1; i >= 0; i--){
    var o = MINI.obs[i];
    o.x -= MINI.speed * dt;
    if(o.el) o.el.style.transform = 'translate3d(' + o.x.toFixed(1) + 'px,0,0)';
    if(o.x + o.w < -30){
      if(o.el && o.el.parentNode) o.el.parentNode.removeChild(o.el);
      MINI.obs.splice(i, 1);
      continue;
    }
    if(pR > o.x + o.w * M && pL < o.x + o.w * (1 - M) && pB < o.h * (1 - M)) miniHit();
  }

  /* --- toilet paper: spawned once, only removed after it passes, never re-created --- */
  for(i = MINI.items.length - 1; i >= 0; i--){
    var it = MINI.items[i];
    it.x -= MINI.speed * dt;
    if(it.el) it.el.style.transform = 'translate3d(' + it.x.toFixed(1) + 'px,0,0)';
    if(it.x + GG.tpW < -40){
      if(it.el && it.el.parentNode) it.el.parentNode.removeChild(it.el);
      MINI.items.splice(i, 1);
      continue;
    }
    if(pR > it.x + 4 && pL < it.x + GG.tpBox - 2 && pB < GG.tpBox + 18){
      if(it.el && it.el.parentNode) it.el.parentNode.removeChild(it.el);
      MINI.items.splice(i, 1);
      if(it.kind === 'potato'){
        MINI.boost = 2.4; MINI.dist += 120;
        var pb = document.getElementById('g-player'); if(pb) pb.classList.add('boost');
        gamePop(popLine('potato'), 'potato');
        tone(140, 70, 0.28, 0.22, 'sawtooth');
        continue;
      }
      gamePop(popLine('tp'), 'tp');
      if(MINI.lives < 4){
        MINI.lives++;
        miniLives();
        toast(t('toast.life'));
        tone(700, 1050, 0.12, 0.14, 'sine');
      } else {
        MINI.dist += 72;
        tone(760, 1100, 0.1, 0.12, 'sine');
      }
      continue;
    }
  }

  MINI.raf = requestAnimationFrame(miniLoop);
}
function openGame(){
  if(!state.user) return;
  if(MINI.raf) cancelAnimationFrame(MINI.raf);
  MINI.raf = null;
  document.body.classList.add('gaming');
  buildGame();
  miniReset();
  MINI.on = true;
  var stage = document.getElementById('g-stage');
  if(stage){
    stage.addEventListener('pointerdown', function(e){
      if(e.target && e.target.closest && e.target.closest('[data-action]')) return;
      miniJump();
    });
    stage.addEventListener('pointerup', function(){ miniCut(); });
    stage.addEventListener('pointercancel', function(){ miniCut(); });
    stage.addEventListener('pointerleave', function(){ miniCut(); });
  }
  MINI.raf = requestAnimationFrame(miniLoop);
}
function closeGame(){
  MINI.on = false;
  document.body.classList.remove('gaming');
  if(MINI.raf) cancelAnimationFrame(MINI.raf);
  MINI.raf = null;
  miniClearWorld();
  var host = document.getElementById('game');
  if(host){ host.innerHTML = ''; host.classList.remove('open'); host.setAttribute('aria-hidden', 'true'); }
}
function miniRestart(){
  if(MINI.raf) cancelAnimationFrame(MINI.raf);
  MINI.raf = null;
  var over = document.getElementById('g-over');
  if(over) over.classList.remove('on');
  miniReset();
  MINI.on = true;
  MINI.last = 0;
  MINI.raf = requestAnimationFrame(miniLoop);
}
document.addEventListener('visibilitychange', function(){
  if(!document.hidden) MINI.last = 0;
});

/* ===================== session ===================== */
var idleTimer = null;
function armIdle(){
  if(idleTimer){ clearTimeout(idleTimer); idleTimer = null; }
  if(!state.user) return;
  var mins = parseInt(state.prefs.autoLogout, 10) || 0;
  if(!mins) return;
  idleTimer = setTimeout(function(){ if(state.user) doLogout(true); }, mins * 60 * 1000);
}
function doLogout(auto){
  flushPush();
  api('POST', '/api/logout', {}).catch(function(){});
  kickOut();
  if(idleTimer){ clearTimeout(idleTimer); idleTimer = null; }
  var app = document.getElementById('app');
  if(app) app.scrollTop = 0;
  toast(auto ? t('settings.autoLogout') : t('settings.logout'));
}

/* ===================== global listeners ===================== */
['pointerdown','touchstart','touchend','click','keydown'].forEach(function(ev){
  var once = function(){
    unlockAudio();
    window.removeEventListener(ev, once, true);
  };
  window.addEventListener(ev, once, {capture:true, passive:true});
});
document.addEventListener('click', function(e){
  var tgt = e.target;
  if(!tgt || !tgt.closest) return;
  var el = tgt.closest('[data-action]');
  if(!el || el.hasAttribute('disabled')) return;
  var a = el.getAttribute('data-action');
  if(a === 'closeGame'){ closeGame(); return; }
  if(a === 'gameRestart'){ miniRestart(); return; }
  if(el.classList.contains('sw')){
    /* let the knob slide across before the screen is redrawn */
    if(el._sliding) return;
    el._sliding = true;
    el.setAttribute('aria-checked', el.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
    setTimeout(function(){ handleAction(a, el); }, 240);
    return;
  }
  handleAction(a, el);
});
document.addEventListener('input', function(e){
  var tgt = e.target;
  if(!tgt || tgt.id !== 'hue-input') return;
  var v = parseInt(tgt.value, 10) || 0;
  if(sheet) sheet.hue = v;
  var txt = document.getElementById('hue-text');
  if(txt) txt.textContent = v + '°';
  var rd = document.getElementById('room-doors');
  if(rd) rd.style.setProperty('--door', 'hsl(' + v + ' 34% 84%)');
  tgt.classList.remove('off');
  var mb = document.querySelector('.mono-btn'); if(mb) mb.classList.remove('on');
});
document.addEventListener('submit', function(e){
  var id = e.target && e.target.id;
  if(id === 'auth-form'){ e.preventDefault(); submitAuth(); }
  else if(id === 'add-room-form'){ e.preventDefault(); createRoom(); }
  else if(id === 'join-form'){ e.preventDefault(); var c = document.getElementById('jn-code'); joinByCode(c ? c.value : ''); }
  else if(id === 'rename-form'){
    e.preventDefault();
    var inp = document.getElementById('me-name');
    var name = inp ? inp.value.trim() : '';
    if(!name){ setSheetErr(t('err.bad_name')); return; }
    api('PUT', '/api/me/name', {name:name}).then(function(){ closeSheet(); return refresh(); }, function(er){ setSheetErr(errText(er)); });

  }
});
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    if(MINI.on || document.getElementById('game').classList.contains('open')){ closeGame(); return; }
    if(sheet) closeSheet();
  }
  if((e.key === ' ' || e.key === 'ArrowUp') && MINI.on){
    var over = document.getElementById('g-over');
    if(over && over.classList.contains('on')) miniRestart();
    else miniJump();
    e.preventDefault();
  }
  if(state.user) armIdle();
});
document.addEventListener('pointerdown', function(){
  if(state.user) armIdle();
}, {passive:true});
var resizeT = null;
window.addEventListener('resize', function(){
  if(MINI.on){
    var st = document.getElementById('g-stage');
    if(st){ MINI.W = st.clientWidth || MINI.W; MINI.H = st.clientHeight || MINI.H; }
  }
  if(resizeT) clearTimeout(resizeT);
  resizeT = setTimeout(repaintAll, 120);
});
document.addEventListener('visibilitychange', function(){
  if(!document.hidden && state.user){ scheduleSync(); if(!es) connectLive(); }
  if(document.hidden) flushPush();
});

/* ===================== tick / init ===================== */
function tick(){
  updateLive();
  /* 설사: random rumbles while you sit */
  if(state.user && state.view === 'room'){
    var mine = mySession(getRoom(state.roomId));
    if(mine && mine.mode === 'loose' && Math.random() < 0.12){
      rumbleSound(); vibrate([30, 30, 50]);
      var z = document.getElementById('rumble-zone');
      if(z){
        var s = document.createElement('span');
        s.className = 'rumble-pop';
        s.textContent = t('room.rumble');
        s.style.left = (10 + Math.random() * 60) + '%';
        z.appendChild(s);
        setTimeout(function(){ if(s.parentNode) s.parentNode.removeChild(s); }, 1600);
      }
      var me = document.querySelector('.stall.mine');
      if(me){ me.classList.remove('knock'); void me.offsetWidth; me.classList.add('knock'); }
    }
  }
}
function init(){
  loadPrefs();
  var qs = new URLSearchParams(location.search);
  if(qs.get('join')){
    pendingJoin = qs.get('join');
    try{ history.replaceState(null, '', location.pathname); }catch(e){}
  }
  render();
  api('GET', '/api/state').then(function(s){
    booted = true;
    afterLogin(s, false);
  }, function(){
    booted = true;
    state.user = null;
    if(pendingJoin) authMode = 'signup';
    render();
  });
  setInterval(tick, 1000);
  if(document.fonts && document.fonts.ready){
    document.fonts.ready.then(function(){
      setTimeout(repaintAll, 20);
      setTimeout(repaintAll, 320);
    });
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

})();

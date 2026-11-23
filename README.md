# Poo-riend v7 · 서버판

친구들과 "뒷간"을 만들어 지금 누가 똥 싸는 중인지 실시간으로 공유하는 웹앱. PC/모바일 둘 다 지원 (모바일은 홈 화면에 추가하면 앱처럼 뜸).

## 구성
- `server.js` — Node 22.13+ 내장 기능만 사용 (npm 설치 없음)
  - `node:http` API + 정적 파일
  - `node:sqlite` DB (`DATA_DIR/poo-riend.db`)
  - Server-Sent Events 실시간 푸시 (입장·급똥 경보·응원·노크·변비 탈출)
  - 비밀번호 scrypt 해시, httpOnly 쿠키 세션, 로그인 시도 제한
  - 데모 봇 3명 (접속자가 있을 때만 알아서 들락날락)
- `public/` — 프론트엔드 (index.html + app.js), 손글씨 폰트 자체 호스팅 (Gaegu, Gochi Hand · SIL OFL)

## 로컬 실행
```bash
node -v          # 22.13 이상
npm start        # http://localhost:3000
```
같은 와이파이의 폰에서 `http://<PC IP>:3000` 으로 접속하면 PC↔폰 실시간 테스트 가능.

## 기믹
- **입장 시 상태 선택**: 쾌변 / 변비 / 설사
- **변비**: 끙 게이지 30을 "힘주기!" 연타로 채워야 뚫림. 친구가 길게 눌러 응원하면 +3. 땀·핏대 표정.
- **설사**: 들어가는 순간 뒷간 멤버 전원에게 🚨 급똥 경보 (사이렌+진동+화면 흔들림). 앉아 있는 동안 랜덤 "꾸르륵", 물은 두 번 내림. 흘러내리는 표정.
- 쾌변으로 10분 넘으면 "변비 의심" 표시, 하루 3번 이상이면 친구 목록에 "오늘 N번" 태그
- 달력: ● 쾌변 · ○ 변비 · ▲ 설사, 이달의 변비왕/설사왕

## 배포 (실제 서버로 띄우기)
DB가 파일이라 **영구 디스크(볼륨)가 붙는 곳**에 올려야 기록이 안 날아감.

### Railway (추천, 가장 간단)
1. 이 폴더를 GitHub 저장소로 push
2. railway.app → New Project → Deploy from GitHub repo
3. 서비스 → Settings → Volumes → Add Volume, mount path `/data`
4. Variables에 `DATA_DIR=/data` 추가
5. Settings → Networking → Generate Domain → `https://xxx.up.railway.app` 으로 접속

### Fly.io
```bash
fly launch --no-deploy        # Dockerfile 자동 인식
fly volumes create data --size 1
# fly.toml 에 추가:  [mounts] source="data" destination="/data"
fly deploy
```

### Render
Dockerfile로 Web Service 생성 → Disk 추가(mount `/data`, 유료 플랜) → env `DATA_DIR=/data`.
무료 플랜은 디스크가 없어서 재시작마다 데이터가 초기화됨 (데모용으로만).

## 참고
- HTTPS 배포 환경에서만 쿠키에 `Secure`가 붙고, iOS에서 홈 화면 추가가 제대로 동작함
- 아이폰은 무음 모드에서 효과음이 안 나고, 진동 API를 지원하지 않음 (안드로이드는 진동 O)
- 데모(게스트) 계정은 3일간 접속이 없으면 자동 삭제

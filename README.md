<div align="center">
  <img src="https://github.com/WallyPfister/transcendence/blob/main/img/ping-pong.png" height="128px" alt="Transcendence" >
  <h1>Transcendence</h1>
  <p> Socket based online pong game </p>
</div>
</br>

## 🎬 Preview
![](https://github.com/WallyPfister/transcendence/blob/main/img/signup.gif?raw=true)
</br></br></br>

## 📝 Notion
[🍀sokim](https://pouncing-elbow-0a4.notion.site/Transcendence-954e7670eea04363a9752ae0fa667050)

</br>

## 🚧 Structure
```
./
├── frontend/
│   ├── public/       # index
│   │   └── img/      # image files
│   └── src/
│       ├── Game/     # game page
│       ├── Login/    # login and auth page
│       ├── Main/     # game queue, chat, friend list
│       ├── Profile/  # user stats and history
│       ├── Rank/     # all users leaderboard
│       ├── Signup/   # signup page
│       ├── Socket/   # handle multi-page socket events
│       ├── Util/     # custom axios
│       └── Verify/   # 2fa code verification
└── backend/
    ├── prisma/       # database
    └── src/
        ├── auth/     # authentication for login
        ├── channel/  # socket based chat
        ├── config/   # environment variables
        ├── game/     # control game queue
        ├── member/   # manange members
        ├── pong/     # draw game canvas
        └── prisma/   # prisma ORM
```

</br>

## ❓ Usage

### 🖐️ Clone
```
$ git clone https://github.com/WallyPfister/transcendence.git
```

### 🖐️ Execute
```
$ make # Run containers in the background mode
```
```
$ make dev  # See what is happening in the containers
```

</br>

## 💫 Features

### Login
![flowchart](https://github.com/WallyPfister/transcendence/blob/main/img/flowchart/transcendence-login.drawio.png)

- 42-Oauth API를 통한 1차 인증
- nodemailer를 이용하여 전송한 이메일 코드로 2차 인증
- 로컬 스토리지에 JWT Access Token이 존재하는 경우 바로 로그인
- JWT Access Token이 만료된 경우 Refresh Token을 통해 재발급

</br>

## 🌷 Commit Rules
```[type] : title body #(issue number)```

### Commit Type v1.0 (~23/05/14)
- [FEAT] : 새로운 기능의 추가
- [MODIFY] : 기능 수정
- [FIX] : 버그 수정
- [DOCS] : 문서 수정
- [STYLE] : CSS 변경
- [REFACTOR] : 코드 리팩토링
- [MERGE] : 풀리퀘스트 머지
- [TEST] : 테스트 코드 작성

</br>

## 🚀 Contributers
[🐿hyunjcho](https://github.com/highjcho) | [🧸sojoo](https://github.com/zoovely) | [🪐sunghkim](https://github.com/K-SeongHun) | [🍀sokim](https://github.com/S0YKIM) | [🔭yachoi](https://github.com/yangsonchoi)

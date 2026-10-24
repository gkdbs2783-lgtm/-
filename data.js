/* =========================================================
 ✏️ 여기만 고치면 내용이 바뀝니다. (1회차 차주한 휴대폰 · 갤럭시 S 스타일)
   - STORY.paragraphs 가 비어 있으면 페이지를 열자마자 휴대폰 화면이 뜹니다. (본문을 넣으면 [[ ]] 로 감싼 글자를 눌러 열기)
   - 지금 들어 있는 내용은 화면 확인용 임시 내용입니다.
   ========================================================= */

window.STORY = {
  title: "",
  paragraphs: []   // 비워 두면 페이지를 열자마자 휴대폰 화면
};

window.PHONE = {
  owner: "한마루",
  today: "2026-10-24",
  time: "23:48:20",
  battery: 56,
  wallpaper: "img/wallpaper.jpg",

  /* 연락처: 이름 순으로 자동 정렬 */
  contacts: [
    { name: "싸가지", number: "011-9172-5512" },
    { name: "강차나 주무관님", number: "017-331-3307" },
    { name: "남요석 주무관님", number: "010-6612-9500" },
    { name: "고덕만 팀장님", number: "02-534-2213" },
    { name: "윤지원 주무관님", number: "016-247-4128" },
    { name: "김이박 주무관님", number: "010-4826-8261" },
    { name: "엄마", number: "011-708-1004" }
  ],

  /* 통화 기록 (위에서부터 최신). dir: in 받은 · out 건 · missed 부재중 */
  calls: [
    { name: "싸가지", dir: "missed", seen: true, when: "3월 6일 오후 10:14" },
    { name: "엄마", dir: "missed", seen: true, when: "2012. 1. 17. 오후 11:08" },
    { name: "엄마", dir: "missed", seen: true, when: "2011. 12. 17. 오전 3:12" },
    { name: "강차나 주무관님", dir: "missed", seen: true, when: "2011. 12. 9. 오후 11:47" },
    { name: "고덕만 팀장님", dir: "missed", seen: true, when: "2011. 11. 21. 오후 10:30" },
    { name: "싸가지", dir: "missed", seen: true, when: "2010. 4. 17. 오후 5:20" },
    { name: "엄마", dir: "missed", seen: true, when: "2010. 4. 17. 오후 4:47" },
    { name: "윤지원 주무관님", dir: "missed", seen: true, when: "2010. 4. 17. 오후 4:05" },
    { name: "남요석 주무관님", dir: "missed", seen: true, when: "2010. 4. 17. 오후 3:44" },
    { name: "고덕만 팀장님", dir: "missed", seen: true, when: "2010. 4. 17. 오후 3:38" },
    { name: "엄마", dir: "missed", seen: true, when: "2010. 4. 17. 오후 2:14" },
    { name: "김이박 주무관님", dir: "missed", seen: true, when: "2010. 4. 17. 오후 2:13" },
    { name: "강차나 주무관님", dir: "missed", seen: true, when: "2010. 4. 17. 오후 2:13" },
    { name: "싸가지", dir: "missed", seen: true, when: "2010. 4. 17. 오후 2:11" }
  ],

  /* 전화를 걸면 나오는 대사 (이름이나 번호로 연결) */
  callScripts: {
    "싸가지": {
      ringMs: 5000,
      lines: ["야, 한마루.", "어디냐고. 출근 안 하냐?", "그따구로 할 거면 관두지 그래, 그냥?"],
      again: { ringMs: 2500, lines: ["…하아.", "…그만 좀 해."] }
    },
    "강차나 주무관님": {
      ringMs: 6000,
      lines: ["훈련 안 와요?"],
      again: { ringMs: 2500, lines: ["기다릴 테니까 늦어도 와요."] }
    },
    "엄마": {
      ringMs: 6000,
      lines: ["한마루, 괜찮아?"],
      again: { ringMs: 2500, lines: ["가서 좀 쉬어."] }
    }
  },

  /* 문자 (위에서부터 최신 대화방). msgs: me:true 가 내가 보낸 것 */
  messages: [
    {
      name: "싸가지",
      unread: 21,
      msgs: [
        { date: "2026년 10월 22일 목요일" },
        { text: "살아는 있냐?", time: "오후 6:42" },
        { text: "신경 쓰이게 진짜 뭐하자는 건지", time: "오후 6:43" }
      ]
    }
  ],

  /* 음성사서함(소리샘, 키패드 1번 길게): 들어 있는 메시지 순서 */
  voicemailBox: ["싸가지"],

  /* 메모 */
  memos: [
    {
      date: "2018.04.03",
      text: "오늘 할 것:\n- 전화 걸기\n- 음성사서함 듣기(키패드 1번 길게)\n- 문자 답장 보내기"
    }
  ],

  /* 일정 */
  events: [
    { date: "2018-03-07", time: "10:00", title: "000" },
    { date: "2018-03-08", time: "10:00", title: "00" },
    { date: "2018-03-12", time: "14:00", title: "00000" },
    { date: "2018-04-17", time: "", title: "000" },
    { date: "2018-09-02", time: "", title: "0000" }
  ],

  /* 알람 */
  alarms: [
    { time: "오전 6:30", label: "알람", on: true, repeat: "월~금" },
    { time: "오전 7:00", label: "알람", on: false, repeat: "매일" }
  ],

  /* 메시지 답장: replies[k] = k번째로 보냈을 때 오는 답(여러 통). block: n번째 메시지부터 차단 팝업 + 전송 불가.
     loop: replies 를 다 쓴 뒤 보낼 때마다 하나씩. 목록에 없는 사람(세상을 떠난 사람 등)은 답이 오지 않음 */
  msgReplies: {
    "싸가지": {
      replies: [["너 지금 대체 어디 있는 건데?"]],
      loop: ["보고 있으니까 계속 해.", "찾으러 갈 테니까, 숨만 붙어 있어.", "한마루."],
      call: {
        after: 6000,
        sound: "audio/pant.mp3",
        firstAt: 1600,
        lines: [
          { text: "한마루?", ms: 3000 },
          { text: "너 대체…", ms: 3200 },
          { text: "연락도 안 받고 어디서 뭘 하고 있는 거냐고.", ms: 3600 },
          { text: "……", me: true, ms: 3600 },
          { text: "……", ms: 3200 },
          { text: "…너 누구야?", ms: 2800 },
          { text: "한마루 휴대폰은 어떻게—", ms: 1500 }
        ]
      }
    }
  },

  /* 음악 */
  music: [
    {
      title: "20180307",
      artist: "",
      sound: "audio/0307_1.mp3",
      lines: [
        { at: 5000, who: "한마루", text: "개새끼들아, 배후가 누구냐고." },
        { at: 9500, who: "?", text: "어차피 가실건데 알아서 뭐하게?" },
        { at: 13800, who: "?", text: "그러게, 왜 주제를 모르고 나댔어." },
        { at: 18500, who: "한마루", text: "씨발, 별 같잖은…" }
      ]
    },
    { title: "20180307(2)", artist: "", sound: "audio/0307_2.mp3" }
  ],

  /* 갤러리: 앨범 → 사진. img 를 비우면 색 자리표시 + 설명 */
  gallery: [
    { album: "카메라", photos: [ { caption: "선우이든" }, { caption: "메뉴얼" }, { caption: "처방 병원 목록" }, { caption: "가족" } ] }
  ],

  portal: {
    name: "네이버",
    url: "m.naver.com",
    bookmarks: [
      { title: "네이버", url: "m.naver.com" },
      { title: "다음", url: "m.daum.net" }
    ],
    news: [],
    trends: [],
    comments: []
  }
};

var naver_id_login = new naver_id_login(
  "_Bz0QIIPqcH1PJ3NCi5I",
  "http://localhost:8787/login/callback"
);
var state = naver_id_login.getUniqState();
naver_id_login.setButton("green", 1, 72);
naver_id_login.setDomain("http://localhost:8787");
naver_id_login.setState(state);
naver_id_login.init_naver_id_login("http://localhost:8787/login/sociallogin");

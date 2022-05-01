const REST_API_KEY = "b63554c973887655ec84eab3ce874263";
const REDIRECT_URI_LOGIN = "http://localhost:3000/oauth/kakao/login";
const REDIRECT_URI_SIGNUP = "http://localhost:3000/oauth/kakao/signup";
const KAKAO_AUTH_URL_LOGIN = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI_LOGIN}&response_type=code`;
const KAKAO_AUTH_URL_SIGNUP = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI_SIGNUP}&response_type=code`;
const CLIENT_SECRET = "GGCNo6jyFvKyXsnHyBFDldelLSquaoSK"
const LOGOUT_REDIRECT_URI = "http://localhost:3000/"
const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`

export {REST_API_KEY, REDIRECT_URI_LOGIN, REDIRECT_URI_SIGNUP, KAKAO_AUTH_URL_LOGIN, KAKAO_AUTH_URL_SIGNUP, CLIENT_SECRET, LOGOUT_REDIRECT_URI, KAKAO_LOGOUT_URL}
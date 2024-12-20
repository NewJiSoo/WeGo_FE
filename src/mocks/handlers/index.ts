import login from './auth/login';
import signup from './auth/signup';
import popularTravel from './travel/popularTravel';
import popularReview from './review/popularReview';
import popularUser from './user/popularUser';
import resetPassword from './auth/resetPassword';
import findPassword from './auth/findPassword';
import deleteAccount from './auth/deleteAccount';
import editProfile from './user/editProfile';
import travelDetail from './travel/travelDetail';
import travelDetailReview from './review/travelDetailReview';
// import travelList from './travel/travelList';
import travelListInfinity from './travel/travelListInfinity';
import createTravel from './travel/createTravel';
import getUserInfo from './user/getUserInfo';
import upcommingTravel from './travel/mypage/upcommingTravel';
import pastTravel from './travel/mypage/pastTravel';
import mySelfTravel from './travel/mypage/mySelfTravel';
import checkedTravel from './travel/mypage/checkedTravel';
import writableTravel from './travel/mypage/writableTravel';
import myReview from './travel/mypage/myReview';
import reviewList from './review/reviewList';
import CreateReview from './review/createReview';

export const handlers = [
  ...reviewList,
  myReview,
  pastTravel,
  checkedTravel,
  writableTravel,
  mySelfTravel,
  upcommingTravel,
  // auth
  login,
  ...signup,
  // 메인
  ...popularTravel,
  ...popularReview,
  ...popularUser,
  // 회원 정보 수정
  ...resetPassword,
  findPassword,
  ...deleteAccount,
  editProfile,
  // 여행
  ...travelDetail,
  ...travelDetailReview,
  // ...travelList,
  ...travelListInfinity,
  // 여행 등록
  createTravel,
  getUserInfo,
  // 리뷰
  CreateReview,
];

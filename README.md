# Today's weather

세계 도시의 현재 날씨 🏖 를 표시해주자!

---

## 프로젝트 시작 전 유의사항

.env 파일에 REACT_APP_API_KEY 라는 키값으로 Open Weather API 키 값을 넣어주세요!

---

## 프로젝트 폴더 & 파일 구조

여러 화면에서 사용하는 컴포넌트는 components에, 페이지별로 해당 페이지에만 사용되는 컴포넌트는 해당 페이지 아래에 정의

#### components 
  
여러 화면에서 사용되는 UI 요소를 공통 컴포넌트로 빼고 관리하는 폴더

#### enums

프로젝트에서 사용되는 enum 값을 모아두는 폴더

#### interface

프로젝트에서 사용되는 interface 들을 모아두는 폴더

- city.ts : city 관련 interface들
- weather.ts : weather 관련 interface들

#### pages

url 경로 별로 페이지 관리하는 폴더

- detail : 도시 상세 페이지
- list : 도시 리스트 페이지

#### api.ts

프로젝트에서 사용되는 API를 모아두는 파일
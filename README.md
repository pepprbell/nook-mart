# Nook Mart

Nook Mart는 닌텐도 동물의 숲(Animal Crossing)에서 잡을 수 있는 생물들의 가격과 정보를 기반으로 한 가상의 쇼핑몰입니다.

사용 데이터 출처: [Nookipedia](https://api.nookipedia.com/doc)

<br>

[Nook Mart 바로가기](https://nook-mart.vercel.app/)

<br>

## 주요 기능

#### 1. 상품 정보 확인

- **물고기, 곤충 등 상품의 목록을 확인**하고 이를 **가격 순으로 정렬**할 수 있습니다.

![](./image/cate1.gif)

- 선택한 **상품의 상세 정보를 열람**할 수 있습니다.

![](./image/cate2.gif)

<br>

#### 2. 장바구니 담기

- 선택한 **상품을 장바구니에 담**을 수 있습니다.

![](./image/cart1.gif)

- 장바구니에 담은 **상품을 확인**하고, **주문 수정이나 삭제**를 할 수 있습니다.

![](./image/cart2.gif)

<br>



## 기술 스택

#### Front End

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?Style=flat&logo=React&logoColor=61DAFB) ![React Router](https://img.shields.io/badge/React_router-^18.2.0-CA4245?Style=flat&logo=React Router&logoColor=CA4245) ![Vite](https://img.shields.io/badge/Vite-^4.4.5-646CFF?Style=flat&logo=Vite&logoColor=646CFF)



#### Hosting

![](./image/vercel.png)



## 설치 방법

#### Git

```bash
git clone "https://lab.ssafy.com/s04-ai-speech-sub3/s04p23b104.git"
```

<br>

#### Front End

* FE module install

```bash
npm i
```

* FE `.env` template

```
VITE_ACNH_KEY=[Nookipedia api key]
```

<br>

#### 실행

* Front End 실행 스크립트

```bash
npm run dev
```

<br>
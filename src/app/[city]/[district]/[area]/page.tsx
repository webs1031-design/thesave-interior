import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Partners from "../../../../components/Partners";

const PHONE_DISPLAY = "010-2269-8352";
const PHONE_LINK = "01022698352";

const validDistricts = [
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
  "송파구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구",
];

const portfolio = [
  {
    id: "junggu",
    title: "서울 중구 40평형 아파트 전체인테리어",
    location: "서울 중구",
    category: "주거 전체인테리어",
    size: "40평형",
    image: "/images/junggu-apartment-40.png",
    district: "중구",
    area: "",
  },
  {
    id: "cheongun",
    title: "종로구 청운동 20평형 매장 전체인테리어",
    location: "서울 종로구 청운동",
    category: "상업 전체인테리어",
    size: "20평형",
    image: "/images/cheongun-store-20.png",
    district: "종로구",
    area: "청운동",
  },
  {
    id: "yeoksam",
    title: "강남구 역삼동 35평형 사무실 전체인테리어",
    location: "서울 강남구 역삼동",
    category: "상업 전체인테리어",
    size: "35평형",
    image: "/images/yeoksam-office-35.png",
    district: "강남구",
    area: "역삼동",
  },
  {
    id: "jamsil",
    title: "송파구 잠실동 32평형 아파트 전체인테리어",
    location: "서울 송파구 잠실동",
    category: "주거 전체인테리어",
    size: "32평형",
    image: "/images/jamsil-apartment-32.png",
    district: "송파구",
    area: "잠실동",
  },
  {
    id: "seongsu",
    title: "성동구 성수동 25평형 매장 전체인테리어",
    location: "서울 성동구 성수동",
    category: "상업 전체인테리어",
    size: "25평형",
    image: "/images/seongsu-store-25.png",
    district: "성동구",
    area: "성수동",
  },
  {
    id: "mapo",
    title: "마포구 45평형 사무실 전체인테리어",
    location: "서울 마포구",
    category: "상업 전체인테리어",
    size: "45평형",
    image: "/images/mapo-office-45.png",
    district: "마포구",
    area: "",
  },
];

const heroTitleTemplates = [
  (area: string) => `${area} 인테리어,\n공간 전체를 새롭게`,
  (area: string) => `${area} 전체인테리어,\n생활 방식부터 설계합니다`,
  (area: string) => `${area} 인테리어업체,\n공간의 쓰임을 다시 봅니다`,
  (area: string) => `${area} 주거 인테리어,\n동선과 수납까지 한 번에`,
  (area: string) => `${area} 상업 인테리어,\n운영 흐름부터 계획합니다`,
  (area: string) => `${area} 전체인테리어,\n구조와 기능을 함께 바꿉니다`,
  (area: string) => `${area} 인테리어,\n보이는 디자인 그 이상`,
  (area: string) => `${area} 공간 리뉴얼,\n전체 흐름을 다시 설계합니다`,
  (area: string) => `${area} 인테리어업체,\n주거와 상업을 목적에 맞게`,
  (area: string) => `${area} 전체인테리어,\n공간 사용법부터 달라집니다`,
  (area: string) => `${area} 아파트·상가 인테리어,\n공간마다 다른 해답`,
  (area: string) => `${area} 인테리어,\n현장 조건에 맞춘 전체 계획`,
  (area: string) => `${area} 전체인테리어,\n디자인과 실용성을 함께`,
  (area: string) => `${area} 주거·상업 인테리어,\n처음부터 전체를 봅니다`,
  (area: string) => `${area} 인테리어,\n공간의 역할을 다시 정리합니다`,
  (area: string) => `${area} 전체인테리어,\n생활과 운영을 더 편리하게`,
  (area: string) => `${area} 인테리어업체,\n공간 전체의 균형을 맞춥니다`,
  (area: string) => `${area} 인테리어,\n공정까지 연결해 계획합니다`,
];

const introTemplates = [
  (district: string, area: string) =>
    `${district} ${area}에서 전체인테리어를 계획한다면 먼저 공간을 어떻게 사용할지 정리하는 것이 좋습니다. 디자인 이미지를 고르는 것보다 생활 동선, 운영 방식, 기존 구조를 함께 살펴야 실제 공간에 맞는 방향을 세울 수 있습니다.`,
  (district: string, area: string) =>
    `${area} 인테리어는 같은 면적이라도 공간의 용도와 현재 구조에 따라 계획이 달라집니다. ${district} ${area} 현장의 벽체, 설비, 채광과 이동 흐름을 확인한 뒤 필요한 전체 공정을 연결해 계획합니다.`,
  (district: string, area: string) =>
    `${district} ${area}의 아파트나 주택, 매장과 사무실을 새롭게 바꿀 때는 예쁜 마감보다 공간의 목적을 먼저 정하는 과정이 중요합니다. 사용 방식에 맞춰 디자인과 기능을 한 방향으로 정리합니다.`,
  (district: string, area: string) =>
    `${area} 전체인테리어는 각각의 공간을 따로 꾸미는 작업이 아니라 현관부터 내부 공간, 주요 설비와 마감까지 전체 흐름을 맞추는 과정입니다. ${district} ${area}의 현장 조건을 기준으로 공사 범위를 구체화합니다.`,
  (district: string, area: string) =>
    `인테리어를 준비할 때 가장 먼저 확인할 것은 원하는 분위기보다 현재 공간의 상태입니다. ${district} ${area} 현장의 구조와 설비, 사용 목적을 바탕으로 주거 또는 상업공간 전체의 방향을 계획합니다.`,
  (district: string, area: string) =>
    `${area}에서 공간을 새롭게 구성하려면 디자인, 기능, 수납, 동선과 공사 순서를 서로 연결해서 봐야 합니다. 더세이브인테리어는 ${district} ${area}의 전체 공간을 대상으로 필요한 공정을 함께 계획합니다.`,
  (district: string, area: string) =>
    `${district} ${area} 전체인테리어는 기존 공간에서 불편했던 점을 정리하는 것부터 시작할 수 있습니다. 주거공간은 생활 편의성을, 상업공간은 운영 효율을 기준으로 공간 전체의 역할을 다시 구성합니다.`,
  (district: string, area: string) =>
    `${area}의 인테리어 방향을 정할 때는 평수 하나만으로 판단하기 어렵습니다. 건물 형태와 기존 배치, 필요한 설비, 이용 인원까지 확인해야 ${district} ${area} 현장에 맞는 전체 계획을 세울 수 있습니다.`,
  (district: string, area: string) =>
    `공간을 오래 편리하게 사용하려면 마감재 선택 이전에 동선과 기능을 먼저 정리해야 합니다. ${district} ${area}의 주거·상업 전체인테리어는 실제 사용 장면을 기준으로 공간 구성을 검토합니다.`,
  (district: string, area: string) =>
    `${area} 인테리어를 준비하고 있다면 현재 공간에서 유지할 부분과 새롭게 바꿀 부분을 구분하는 과정이 필요합니다. ${district} ${area}의 구조와 목적에 맞춰 전체 공사의 우선순위를 정리합니다.`,
  (district: string, area: string) =>
    `${district} ${area}의 전체인테리어는 디자인 콘셉트만 정한다고 끝나지 않습니다. 공간별 역할, 이동 경로, 설비와 마감이 서로 어울리도록 전체 공정을 하나의 계획으로 연결합니다.`,
  (district: string, area: string) =>
    `${area} 공간을 바꾸는 목적이 생활 개선인지, 매장 운영인지, 업무 환경 개선인지에 따라 인테리어의 기준도 달라집니다. ${district} ${area} 현장의 사용 목적부터 확인해 전체 방향을 잡습니다.`,
];

const residentialTemplates = [
  (area: string) =>
    `${area} 아파트 전체인테리어는 거실과 주방의 연결, 침실의 독립성, 가족 수에 맞는 수납을 함께 살펴봅니다. 자주 사용하는 공간의 이동 거리를 줄이고 집 전체가 자연스럽게 이어지도록 계획합니다.`,
  (area: string) =>
    `${area} 주거 전체인테리어에서는 가족마다 다른 생활 패턴을 먼저 확인합니다. 주방 사용 빈도, 거실 활용 방식, 수납량과 침실 구성을 기준으로 필요한 공간의 우선순위를 정리합니다.`,
  (area: string) =>
    `${area}의 빌라와 주택은 기존 구조를 어디까지 활용할지 판단하는 과정이 중요합니다. 유지할 부분과 변경할 부분을 나누고 채광, 수납, 이동 동선을 함께 검토해 전체 공간을 구성합니다.`,
  (area: string) =>
    `${area} 아파트나 오피스텔은 한정된 면적 안에서 공간 활용도가 중요합니다. 불필요한 동선을 줄이고 수납과 가구 배치를 고려해 실제 생활이 편해지는 전체인테리어를 계획합니다.`,
  (area: string) =>
    `${area} 주거공간을 새롭게 할 때는 거실만 넓어 보이게 만드는 것보다 주방, 침실, 현관과 수납의 연결이 중요합니다. 가족이 매일 사용하는 순서를 기준으로 공간 전체를 바라봅니다.`,
  (area: string) =>
    `${area} 주택 전체인테리어는 공간별 용도를 분명하게 나누면서도 이동이 불편하지 않도록 계획합니다. 생활 습관과 필요한 기능을 기준으로 공용공간과 개인공간의 균형을 맞춥니다.`,
  (area: string) =>
    `${area}의 집 인테리어는 현재 생활에서 불편한 점을 찾는 것부터 시작합니다. 부족한 수납, 답답한 동선, 활용도가 낮은 공간을 확인하고 전체 배치와 마감을 함께 정리합니다.`,
  (area: string) =>
    `${area} 아파트 전체인테리어에서는 주방과 거실의 관계, 침실별 사용 목적, 현관과 팬트리 같은 수납공간까지 한 번에 검토합니다. 집 전체의 사용성을 높이는 방향으로 계획합니다.`,
  (area: string) =>
    `${area} 주거 인테리어는 가족 구성원이 실제로 머무는 시간과 공간을 기준으로 계획하면 더 실용적입니다. 생활의 중심이 되는 공간과 조용히 분리할 공간을 나누어 전체 구성을 정리합니다.`,
  (area: string) =>
    `${area}의 아파트·빌라·주택 전체인테리어는 디자인 톤을 통일하면서도 각 공간의 기능을 놓치지 않는 것이 중요합니다. 수납, 조명, 가구 배치와 이동 흐름을 함께 검토합니다.`,
];

const commercialTemplates = [
  (area: string) =>
    `${area} 매장 전체인테리어는 고객이 입구에서 상품이나 서비스 공간까지 자연스럽게 이동하도록 동선을 계획합니다. 직원의 업무 구역과 고객 구역을 구분해 운영 효율도 함께 고려합니다.`,
  (area: string) =>
    `${area} 상가 전체인테리어는 업종에 따라 필요한 공간 구성이 크게 달라집니다. 판매, 상담, 대기, 조리, 업무 등 실제 운영 과정에 필요한 구역을 먼저 나눈 뒤 디자인 방향을 정합니다.`,
  (area: string) =>
    `${area} 사무실 전체인테리어에서는 업무 집중 공간과 회의, 휴게, 이동 공간의 균형이 중요합니다. 근무 인원과 업무 방식을 기준으로 좌석과 공용공간을 효율적으로 배치합니다.`,
  (area: string) =>
    `${area} 카페나 음식점 인테리어는 고객 좌석만큼 작업 동선과 설비 배치가 중요합니다. 주문부터 제조, 서빙과 정리까지 실제 운영 순서를 고려해 전체 공간을 구성합니다.`,
  (area: string) =>
    `${area} 상업공간은 브랜드 분위기를 보여주는 디자인과 현장의 운영 편의성이 함께 맞아야 합니다. 고객에게 보이는 구역과 직원이 사용하는 구역의 역할을 구분해 계획합니다.`,
  (area: string) =>
    `${area} 매장 인테리어는 첫인상만 강조하기보다 고객이 머무는 과정 전체를 살펴야 합니다. 입구, 메인 공간, 결제나 상담 공간, 직원 동선을 서로 방해하지 않도록 구성합니다.`,
  (area: string) =>
    `${area}의 상가·사무실 전체인테리어는 업종, 이용 인원, 필요한 설비와 수납량을 기준으로 계획합니다. 공간을 보기 좋게 만드는 것과 실제 운영이 편리한 구성을 함께 고려합니다.`,
  (area: string) =>
    `${area} 상업 인테리어에서는 제한된 면적을 어떻게 나눌지가 중요합니다. 고객이 사용하는 공간과 작업·보관 공간의 비율을 조정해 영업 방식에 맞는 전체 구성을 계획합니다.`,
  (area: string) =>
    `${area} 사무공간이나 매장은 실제 업무 순서를 기준으로 배치하면 불필요한 이동을 줄일 수 있습니다. 필요한 설비와 가구 위치까지 고려해 공간 전체의 흐름을 정리합니다.`,
  (area: string) =>
    `${area} 상가 전체인테리어는 디자인 콘셉트와 함께 운영 방식이 반영되어야 합니다. 고객 경험, 직원의 작업 효율, 필요한 설비 조건을 기준으로 전체 공정의 방향을 정합니다.`,
];

const guideTitles = [
  "생활 동선에서 계획을 시작합니다",
  "운영 방식에 맞춰 공간을 나눕니다",
  "기존 구조를 살펴 공사 범위를 정합니다",
  "수납과 공간 활용도를 함께 봅니다",
  "디자인보다 먼저 공간의 역할을 정합니다",
  "현장 조건에 따라 공정 순서를 계획합니다",
  "집 전체의 연결감을 고려합니다",
  "고객과 직원의 동선을 따로 봅니다",
  "유지할 부분과 바꿀 부분을 구분합니다",
  "공간별 우선순위를 먼저 정리합니다",
  "조명·수납·가구 배치까지 함께 봅니다",
  "공간 사용 목적에 맞는 전체 계획이 필요합니다",
  "생활과 업무의 불편을 먼저 찾습니다",
  "면적보다 실제 사용 방식을 중요하게 봅니다",
  "공간의 첫인상과 실용성을 함께 계획합니다",
  "전체 공정이 자연스럽게 이어져야 합니다",
];

type GuideMode = {
  title: (area: string) => string;
  paragraphs: Array<(district: string, area: string) => string>;
};

const guideModes: GuideMode[] = [
  {
    title: (area) => `${area} 아파트·주택 인테리어는 생활 패턴부터`,
    paragraphs: [
      (district, area) =>
        `${district} ${area}의 집을 전체적으로 바꾸려면 먼저 가족이 하루 동안 어떤 공간을 자주 사용하는지 살펴보는 것이 좋습니다. 현관에서 거실과 주방으로 이어지는 이동, 침실 사용 방식, 물건을 보관하는 위치를 정리하면 필요한 공사 범위도 더 분명해집니다.`,
      (_district, area) =>
        `${area} 주거공간에서는 수납이 부족한 이유가 단순히 수납장이 적어서가 아니라 배치가 생활 동선과 맞지 않기 때문일 수 있습니다. 현관, 주방, 거실과 침실 주변의 수납을 사용 순서에 맞춰 배치하는 방식으로 공간 활용도를 높일 수 있습니다.`,
      (_district, area) =>
        `거실과 주방은 가족이 가장 자주 오가는 공간인 만큼 서로의 관계가 중요합니다. ${area} 아파트 전체인테리어에서는 조리와 식사, 휴식이 자연스럽게 이어질 수 있도록 가구 위치와 조명, 마감의 방향을 함께 검토합니다.`,
      (district, area) =>
        `${district} ${area} 현장의 기존 구조가 모두 변경되어야 하는 것은 아닙니다. 활용할 수 있는 벽체나 설비는 유지하고 불편을 만드는 부분을 중심으로 변경 범위를 정하면 전체 공사의 목적이 더 명확해집니다.`,
      (_district, area) =>
        `${area}의 집 전체를 새롭게 계획할 때는 한 공간만 강조하기보다 현관부터 각 방까지 분위기와 기능이 이어지도록 만드는 것이 중요합니다. 더세이브인테리어는 부분 시공이 아닌 전체인테리어를 기준으로 공간을 계획합니다.`,
    ],
  },
  {
    title: (area) => `${area} 매장 인테리어는 고객 동선과 운영 효율부터`,
    paragraphs: [
      (_district, area) =>
        `${area} 매장 전체인테리어는 고객이 입구를 지나 어떤 순서로 공간을 이용하는지 그려보는 것부터 시작할 수 있습니다. 상품을 보는 곳, 상담하는 곳, 결제하는 곳이 자연스럽게 연결되면 공간을 이용하는 흐름도 단순해집니다.`,
      (district, area) =>
        `${district} ${area}의 상업공간은 같은 면적이라도 업종에 따라 필요한 구역이 다릅니다. 고객에게 넓게 보여야 하는 부분과 직원이 효율적으로 일해야 하는 부분을 나누고, 필요한 설비와 수납 위치를 함께 정리해야 합니다.`,
      (_district, area) =>
        `${area} 상가 인테리어에서는 브랜드가 전달하려는 분위기도 중요하지만 실제 영업 과정에서 불편하지 않은지가 함께 고려되어야 합니다. 고객 동선과 직원 동선이 자주 겹치는 구간을 줄이면 운영 효율을 높이는 데 도움이 됩니다.`,
      (_district, area) =>
        `카페나 음식점이라면 주문과 제조, 서빙과 정리의 순서를, 매장이라면 진입과 관람, 상담과 결제의 흐름을 살펴봅니다. ${area} 현장의 업종에 맞춰 공간별 우선순위를 다르게 계획할 수 있습니다.`,
      (_district, area) =>
        `더세이브인테리어는 ${area} 상업공간의 일부만 변경하는 방식보다 전체 공간의 디자인과 기능, 설비와 동선을 함께 계획하는 전체인테리어를 진행합니다.`,
    ],
  },
  {
    title: (area) => `${area} 인테리어는 기존 구조를 읽는 것부터`,
    paragraphs: [
      (district, area) =>
        `${district} ${area}에서 전체인테리어를 준비할 때는 완성된 디자인을 먼저 정하기보다 현재 공간을 정확히 보는 과정이 필요합니다. 벽체 위치와 창호, 천장 높이, 설비와 채광 조건은 실제로 가능한 공간 구성에 영향을 줍니다.`,
      (_district, area) =>
        `${area} 현장에서 유지할 수 있는 구조와 반드시 바꿔야 하는 구조를 구분하면 공사 방향이 선명해집니다. 기존 공간의 장점을 살리면서 사용하기 불편했던 부분을 개선하는 방식으로 계획을 구체화할 수 있습니다.`,
      (_district, area) =>
        `주거공간에서는 가족의 생활 동선과 수납을, 상업공간에서는 고객과 직원의 이동과 업무 흐름을 기준으로 구조를 검토합니다. 같은 구조라도 사용하는 목적에 따라 공간을 나누는 방식은 달라질 수 있습니다.`,
      (district, area) =>
        `${district} ${area} 전체인테리어에서는 철거, 설비, 전기, 목공, 마감처럼 서로 연결되는 공정을 한 번에 고려해야 합니다. 앞선 공정의 결정이 뒤의 마감과 가구 배치에 영향을 줄 수 있기 때문입니다.`,
      (_district, area) =>
        `${area} 인테리어의 목표는 단순히 새것처럼 보이게 만드는 것이 아니라 실제 사용이 편해지도록 공간 전체를 다시 정리하는 데 있습니다.`,
    ],
  },
  {
    title: (area) => `${area} 사무실 인테리어는 업무 방식에 맞춰`,
    paragraphs: [
      (_district, area) =>
        `${area} 사무실 전체인테리어를 계획할 때는 직원 수와 좌석 수만 확인하기보다 실제 업무가 어떤 방식으로 이루어지는지 살펴보는 것이 중요합니다. 개인 집중 업무와 협업, 회의와 휴게가 필요한 비율에 따라 공간 구성이 달라질 수 있습니다.`,
      (district, area) =>
        `${district} ${area} 사무공간에서 부서 간 이동이 잦다면 서로 가까운 위치에 배치하고, 집중이 필요한 업무 공간은 이동이 많은 통로와 분리하는 방식으로 동선을 정리할 수 있습니다.`,
      (_district, area) =>
        `회의실, 탕비공간, 수납과 복합기 위치 같은 공용공간은 여러 사람이 함께 사용하기 때문에 접근성이 중요합니다. ${area} 사무실의 업무 흐름을 기준으로 공용구역의 위치를 계획합니다.`,
      (_district, area) =>
        `조명과 전기, 통신 설비 역시 가구 배치 이후에 따로 생각하기보다 처음 공간을 구성할 때 함께 검토하는 것이 좋습니다. 좌석 배치와 장비 사용 위치가 정해져야 필요한 설비도 구체화할 수 있습니다.`,
      (_district, area) =>
        `더세이브인테리어는 ${area} 사무실을 일부 구역만 바꾸는 부분인테리어보다 업무 공간 전체의 흐름을 함께 계획하는 전체인테리어를 진행합니다.`,
    ],
  },
  {
    title: (area) => `${area} 주택 인테리어는 공간별 역할을 분명하게`,
    paragraphs: [
      (_district, area) =>
        `${area} 주택은 아파트와 달리 층이나 공간별 역할이 더 다양할 수 있어 전체적인 이동 흐름을 먼저 정리하는 것이 좋습니다. 가족이 함께 사용하는 공간과 개인 공간의 위치를 나누고 각 공간의 연결 관계를 살펴봅니다.`,
      (district, area) =>
        `${district} ${area} 주택 전체인테리어에서는 현재 구조에서 활용도가 낮은 공간이 어디인지 확인합니다. 넓지만 사용하지 않는 구역과 좁아서 불편한 구역을 비교해 실제 생활에 맞는 공간 비율을 계획할 수 있습니다.`,
      (_district, area) =>
        `주방과 식사 공간, 거실이 서로 멀리 떨어져 있다면 생활 동선이 길어질 수 있습니다. ${area} 현장의 구조를 기준으로 자주 사용하는 공간 사이의 이동을 단순하게 만드는 방향을 검토합니다.`,
      (_district, area) =>
        `수납은 공간마다 따로 추가하기보다 생활 단계별로 필요한 위치를 정하는 것이 효율적입니다. 외출용품은 현관 가까이, 생활용품은 공용공간 주변처럼 실제 사용 위치에 맞춰 구성할 수 있습니다.`,
      (_district, area) =>
        `${area} 주택 전체인테리어는 공간 하나의 변화보다 집 전체의 기능과 분위기가 연결되도록 계획하는 데 초점을 둡니다.`,
    ],
  },
  {
    title: (area) => `${area} 카페·음식점 인테리어는 작업 흐름까지`,
    paragraphs: [
      (_district, area) =>
        `${area} 카페나 음식점 인테리어는 고객이 보는 공간과 직원이 일하는 공간이 동시에 잘 작동해야 합니다. 좌석 수만 늘리기보다 주문, 제조, 서빙과 정리 과정에서 동선이 겹치지 않도록 구역을 나누는 것이 중요합니다.`,
      (district, area) =>
        `${district} ${area} 현장에서는 주방이나 바, 세척 공간처럼 설비가 집중되는 구역의 위치가 전체 배치에 큰 영향을 줍니다. 필요한 장비와 급배수, 전기 조건을 확인한 뒤 좌석과 통로를 계획합니다.`,
      (_district, area) =>
        `고객 입장에서는 입구에서 메뉴를 확인하고 주문한 뒤 좌석으로 이동하는 과정이 자연스러워야 합니다. ${area} 상업 인테리어는 이런 이용 흐름과 매장의 분위기를 함께 고려합니다.`,
      (_district, area) =>
        `직원이 반복해서 이동하는 거리가 길면 영업 중 불편이 커질 수 있습니다. 보관, 준비, 제조, 전달의 순서를 기준으로 작업공간을 배치하면 실제 운영에 맞는 구성을 만들 수 있습니다.`,
      (_district, area) =>
        `더세이브인테리어는 ${area} 카페·음식점의 디자인뿐 아니라 설비, 동선과 공간 역할을 함께 연결하는 전체인테리어를 진행합니다.`,
    ],
  },
  {
    title: (area) => `${area} 전체인테리어는 수납 계획도 처음부터`,
    paragraphs: [
      (_district, area) =>
        `${area} 인테리어에서 수납은 마지막에 남는 공간에 넣기보다 초기 계획부터 필요한 양과 위치를 정하는 것이 좋습니다. 주거공간과 상업공간 모두 물건의 종류와 사용 빈도에 따라 적절한 위치가 달라집니다.`,
      (district, area) =>
        `${district} ${area}의 주거공간이라면 계절용품, 생활용품, 주방용품처럼 자주 사용하는 정도에 따라 수납 위치를 나눌 수 있습니다. 필요한 물건을 사용하는 장소 가까이에 배치하면 생활 동선도 단순해집니다.`,
      (_district, area) =>
        `매장이나 사무실에서는 고객에게 보여야 하는 물건과 직원이 관리해야 하는 물건을 구분하는 것이 중요합니다. ${area} 상업공간의 보관량과 업무 흐름을 기준으로 수납과 작업 공간의 비율을 정합니다.`,
      (_district, area) =>
        `수납장이 많아도 통로를 좁게 만들거나 채광을 막으면 공간이 답답해질 수 있습니다. 전체 면적 안에서 이동 공간과 수납 공간의 균형을 맞추는 과정이 필요합니다.`,
      (_district, area) =>
        `${area} 전체인테리어는 디자인, 수납, 가구와 동선을 따로 보지 않고 실제 사용성을 기준으로 하나의 계획 안에서 정리합니다.`,
    ],
  },
  {
    title: (area) => `${area} 인테리어는 조명과 가구 배치까지 함께`,
    paragraphs: [
      (_district, area) =>
        `${area} 공간의 인상은 마감재만으로 결정되지 않습니다. 같은 공간이라도 조명의 위치와 밝기, 가구 배치에 따라 넓어 보이거나 답답하게 느껴질 수 있어 전체인테리어 단계에서 함께 검토하는 것이 좋습니다.`,
      (district, area) =>
        `${district} ${area} 주거공간은 휴식, 식사, 작업처럼 공간마다 필요한 조명의 성격이 다릅니다. 가구가 놓일 위치를 기준으로 조명과 스위치, 콘센트 계획을 함께 정리할 수 있습니다.`,
      (_district, area) =>
        `${area} 매장이나 사무실은 상품, 안내, 업무 공간의 목적에 따라 필요한 밝기와 조명 방식이 달라질 수 있습니다. 고객에게 강조할 영역과 직원이 편하게 일해야 하는 영역을 나누어 계획합니다.`,
      (_district, area) =>
        `가구 크기와 배치가 확정되지 않은 상태에서 전기와 조명 위치를 먼저 정하면 실제 사용 시 불편이 생길 수 있습니다. 전체 공간 계획 안에서 서로 연결해 결정하는 것이 중요합니다.`,
      (_district, area) =>
        `더세이브인테리어는 ${area} 공간의 마감뿐 아니라 조명, 가구 배치와 동선까지 함께 고려하는 전체인테리어를 진행합니다.`,
    ],
  },
  {
    title: (area) => `${area} 인테리어는 공정 순서를 함께 봐야 합니다`,
    paragraphs: [
      (district, area) =>
        `${district} ${area} 전체인테리어는 여러 공정이 이어지는 작업이기 때문에 결과만큼 진행 순서도 중요합니다. 철거 이후 설비와 전기, 목공과 마감이 어떻게 연결되는지 처음부터 정리해야 불필요한 재작업을 줄일 수 있습니다.`,
      (_district, area) =>
        `${area} 현장의 기존 상태에 따라 먼저 손봐야 할 부분이 달라질 수 있습니다. 구조 변경이 필요한지, 설비 위치를 이동해야 하는지, 기존 마감을 어디까지 철거할지 확인한 뒤 공사 범위를 정합니다.`,
      (_district, area) =>
        `주거공간은 생활 편의와 마감 완성도가 중요하고, 상업공간은 영업 일정과 설비 조건까지 함께 고려해야 합니다. 공간의 목적에 따라 공정의 우선순위를 다르게 계획할 수 있습니다.`,
      (_district, area) =>
        `마감재나 가구처럼 눈에 보이는 부분만 먼저 정하면 뒤에서 필요한 설비 작업과 충돌할 수 있습니다. ${area} 전체인테리어는 보이지 않는 기초 공정부터 최종 마감까지 연결해서 계획합니다.`,
      (_district, area) =>
        `${area} 인테리어 상담에서는 원하는 스타일과 함께 현재 공간 상태, 공사 희망 일정, 필요한 기능을 알려주면 전체 공정 방향을 정리하는 데 도움이 됩니다.`,
    ],
  },
  {
    title: (area) => `${area} 공간은 면적보다 사용 방식이 중요합니다`,
    paragraphs: [
      (_district, area) =>
        `${area} 인테리어는 평수가 크다고 항상 여유로운 것도, 작다고 반드시 답답한 것도 아닙니다. 같은 면적이라도 통로의 위치와 가구 배치, 공간을 나누는 방식에 따라 실제 사용감은 크게 달라질 수 있습니다.`,
      (district, area) =>
        `${district} ${area} 주거공간에서는 가족이 자주 사용하는 장소에 면적을 더 배분하고 사용 빈도가 낮은 구역을 효율적으로 정리하는 방식으로 전체 구성을 계획할 수 있습니다.`,
      (_district, area) =>
        `${area} 상업공간은 매출이나 업무와 직접 연결되는 핵심 공간이 무엇인지 먼저 정하는 것이 좋습니다. 고객 공간, 작업 공간, 창고와 통로의 비율을 운영 방식에 맞춰 조정합니다.`,
      (_district, area) =>
        `불필요하게 넓은 통로나 사용하지 않는 코너가 있다면 공간의 역할을 다시 정할 수 있습니다. 반대로 꼭 필요한 이동 폭과 작업 공간은 확보해야 실제 사용이 편리합니다.`,
      (_district, area) =>
        `더세이브인테리어는 ${area} 현장의 면적 자체보다 그 공간을 어떻게 사용할 것인지에 초점을 맞춰 전체인테리어 방향을 계획합니다.`,
    ],
  },
  {
    title: (area) => `${area} 전체인테리어는 유지와 변경을 구분해서`,
    paragraphs: [
      (district, area) =>
        `${district} ${area} 현장을 전체인테리어한다고 해서 모든 요소를 무조건 새로 바꿀 필요는 없습니다. 현재 상태가 좋고 새로운 계획과 잘 맞는 부분은 활용하고, 불편하거나 전체 방향과 맞지 않는 부분을 중심으로 변경 범위를 정할 수 있습니다.`,
      (_district, area) =>
        `${area} 주거공간에서는 기존 창호, 문, 바닥이나 수납의 상태를 살펴보고 새롭게 구성할 공간과 연결되는지를 확인합니다. 유지 여부에 따라 공사 범위와 순서도 달라질 수 있습니다.`,
      (_district, area) =>
        `상가나 사무실에서는 기존 설비와 천장, 조명이나 바닥의 활용 가능성을 검토합니다. 업종이 바뀌거나 공간 사용법이 크게 달라진다면 필요한 변경 범위도 커질 수 있습니다.`,
      (_district, area) =>
        `유지할 부분과 철거할 부분을 처음부터 구분하면 공간의 새로운 디자인도 더 구체적으로 계획할 수 있습니다. ${area} 현장의 상태를 기준으로 전체 공정의 우선순위를 정합니다.`,
      (_district, area) =>
        `${area} 전체인테리어는 단순히 새 마감으로 덮는 것이 아니라 현재 공간을 분석하고 필요한 변화에 집중해 전체 기능을 다시 정리하는 과정입니다.`,
    ],
  },
  {
    title: (area) => `${area} 인테리어는 상담 전에 우선순위를 정해보세요`,
    paragraphs: [
      (_district, area) =>
        `${area} 전체인테리어 상담을 준비할 때는 원하는 사진을 많이 모으는 것보다 반드시 바꾸고 싶은 부분과 유지하고 싶은 부분을 먼저 정리하면 도움이 됩니다. 공간의 목적과 우선순위가 분명할수록 전체 방향을 구체화하기 쉽습니다.`,
      (district, area) =>
        `${district} ${area} 주거공간이라면 수납 부족, 주방 동선, 방 구성이나 분위기처럼 현재 가장 불편한 점을 적어볼 수 있습니다. 가족 구성원의 요구를 함께 확인하면 필요한 공간 변화도 정리됩니다.`,
      (_district, area) =>
        `${area} 상업공간이라면 고객 수, 직원 수, 필요한 장비와 보관량, 운영 시간처럼 실제 영업 조건을 알려주는 것이 좋습니다. 이러한 정보가 공간 배치와 설비 계획에 직접 연결됩니다.`,
      (_district, area) =>
        `공사 희망 일정과 현재 공간의 사용 여부도 중요한 조건입니다. 이사나 입주, 매장 오픈처럼 정해진 일정이 있다면 전체 공정 순서를 계획할 때 함께 검토해야 합니다.`,
      (_district, area) =>
        `더세이브인테리어는 ${area}의 부분인테리어가 아닌 전체인테리어를 진행하며, 공간 종류와 평수, 현재 상태와 원하는 방향을 바탕으로 상담을 시작합니다.`,
    ],
  },
  {
    title: (area) => `${area} 인테리어는 공간의 첫인상과 실용성을 함께`,
    paragraphs: [
      (_district, area) =>
        `${area} 인테리어에서 첫인상은 중요하지만 실제 사용이 불편하면 공간의 만족도가 오래가기 어렵습니다. 현관이나 매장 입구처럼 처음 보이는 구역과 안쪽의 생활·업무 공간이 자연스럽게 연결되도록 계획하는 것이 좋습니다.`,
      (district, area) =>
        `${district} ${area} 주거공간은 집에 들어왔을 때 느껴지는 분위기와 함께 신발, 외투, 생활용품을 정리하는 기능이 필요합니다. 첫 공간부터 실제 생활을 고려하면 집 전체의 동선이 더 편해질 수 있습니다.`,
      (_district, area) =>
        `${area} 매장에서는 입구에서 브랜드가 전달되면서도 고객이 어디로 이동해야 하는지 쉽게 이해할 수 있어야 합니다. 시선을 끄는 요소와 이동 통로, 상품이나 상담 공간의 위치를 함께 계획합니다.`,
      (_district, area) =>
        `보이는 디자인과 실제 기능은 서로 따로 정하는 것이 아니라 하나의 공간 계획 안에서 맞춰야 합니다. 조명, 마감, 가구와 수납도 사용 목적에 맞게 연결됩니다.`,
      (_district, area) =>
        `${area} 전체인테리어는 공간의 분위기와 기능 중 하나만 선택하는 것이 아니라 두 요소가 균형을 이루도록 전체 구성을 계획합니다.`,
    ],
  },
  {
    title: (area) => `${area} 인테리어는 공간별 우선순위가 다릅니다`,
    paragraphs: [
      (_district, area) =>
        `${area} 전체인테리어를 계획할 때 모든 공간에 같은 기준을 적용하기보다 각 공간에서 가장 중요한 기능이 무엇인지 정하는 것이 좋습니다. 생활의 중심이 되는 곳과 보조 역할을 하는 곳의 우선순위는 다를 수 있습니다.`,
      (district, area) =>
        `${district} ${area} 주거공간에서는 거실과 주방을 중심으로 계획할 수도 있고, 가족 구성에 따라 침실과 수납이 더 중요한 기준이 될 수도 있습니다. 실제 생활에서 불편한 부분부터 우선순위를 정합니다.`,
      (_district, area) =>
        `${area} 상업공간은 업종에 따라 고객 좌석, 진열, 상담, 조리 또는 업무 공간의 중요도가 달라집니다. 핵심 기능에 필요한 면적을 먼저 확보한 뒤 나머지 공간을 조정합니다.`,
      (_district, area) =>
        `우선순위가 정리되면 마감과 조명, 가구와 설비 계획도 일관된 방향으로 연결하기 쉬워집니다. 한정된 면적 안에서 꼭 필요한 기능이 제대로 작동하도록 구성합니다.`,
      (_district, area) =>
        `더세이브인테리어는 ${area} 현장의 사용 목적과 우선순위를 확인해 공간 전체를 대상으로 인테리어 계획을 정리합니다.`,
    ],
  },
  {
    title: (area) => `${area} 전체인테리어는 공간의 연결감까지`,
    paragraphs: [
      (_district, area) =>
        `${area} 전체인테리어는 각 방이나 구역이 예쁘게 완성되는 것만큼 서로 자연스럽게 이어지는지가 중요합니다. 마감 색상과 소재, 조명과 가구의 분위기가 공간마다 지나치게 단절되지 않도록 전체 기준을 정합니다.`,
      (district, area) =>
        `${district} ${area}의 아파트나 주택에서는 현관에서 거실, 주방과 침실로 이어지는 흐름을 고려합니다. 공간별 개성은 유지하면서도 집 전체가 하나의 분위기로 느껴지도록 계획할 수 있습니다.`,
      (_district, area) =>
        `${area} 상가나 사무실 역시 입구와 메인 공간, 보조 공간의 디자인이 서로 연결되어야 이용자가 공간의 성격을 쉽게 이해할 수 있습니다. 브랜드나 업무 환경에 맞는 공통 기준을 정합니다.`,
      (_district, area) =>
        `연결감은 디자인뿐 아니라 기능에서도 필요합니다. 자주 오가는 공간 사이의 거리를 줄이고 필요한 수납과 설비를 적절한 위치에 배치하면 실제 사용도 더 편리해집니다.`,
      (_district, area) =>
        `${area} 전체인테리어는 공간 하나씩 따로 시공하기보다 디자인과 기능, 동선과 공정을 하나의 계획으로 연결해 진행합니다.`,
    ],
  },
  {
    title: (area) => `${area} 인테리어는 생활과 운영의 불편을 줄이는 방향으로`,
    paragraphs: [
      (_district, area) =>
        `${area} 인테리어의 시작점은 새롭게 보이는 공간보다 현재 공간에서 반복되는 불편을 찾는 데 있을 수 있습니다. 이동이 복잡한 곳, 물건을 둘 곳이 부족한 곳, 활용하지 못하는 공간을 정리하면 바꿔야 할 방향이 선명해집니다.`,
      (district, area) =>
        `${district} ${area} 주거공간에서는 요리할 때의 이동, 외출 준비, 세탁과 수납처럼 매일 반복되는 생활을 살펴봅니다. 자주 발생하는 불편을 줄이는 방향으로 공간 배치를 검토합니다.`,
      (_district, area) =>
        `${area} 상업공간에서는 고객 대기, 직원 이동, 상품 보관이나 장비 사용처럼 영업 중 반복되는 행동이 중요합니다. 실제 운영에서 자주 겹치거나 막히는 동선을 찾아 전체 배치를 정리합니다.`,
      (_district, area) =>
        `이렇게 사용상의 불편을 먼저 확인하면 디자인 선택도 목적에 맞게 정리할 수 있습니다. 보기 좋은 요소가 실제 공간 기능을 방해하지 않도록 전체 기준을 맞춥니다.`,
      (_district, area) =>
        `더세이브인테리어는 ${area} 공간의 현재 사용 방식과 개선할 점을 기준으로 주거·상업 전체인테리어를 계획합니다.`,
    ],
  },
];

const processSets = [
  [
    {
      number: "01",
      title: "상담 접수",
      description:
        "현장 위치와 공간 종류, 대략적인 평수와 원하는 전체인테리어 방향을 확인합니다.",
    },
    {
      number: "02",
      title: "현장 확인",
      description:
        "기존 구조와 설비, 공간의 상태와 실제 공사 조건을 확인합니다.",
    },
    {
      number: "03",
      title: "방향 설정",
      description:
        "주거 또는 상업공간의 사용 목적에 맞춰 전체적인 공간 방향을 정리합니다.",
    },
    {
      number: "04",
      title: "견적 협의",
      description:
        "전체 공사 범위와 필요한 공정을 기준으로 견적과 일정을 협의합니다.",
    },
    {
      number: "05",
      title: "전체 시공",
      description:
        "공정 순서와 현장 상황을 확인하면서 전체인테리어를 진행합니다.",
    },
    {
      number: "06",
      title: "최종 확인",
      description:
        "공사 완료 후 주요 시공 부분과 마감 상태를 최종적으로 확인합니다.",
    },
  ],

  [
    {
      number: "01",
      title: "공간 상담",
      description:
        "현재 공간의 용도와 위치, 면적, 원하는 분위기와 공사 일정을 확인합니다.",
    },
    {
      number: "02",
      title: "현장 분석",
      description:
        "구조와 동선, 기존 설비와 공사에 필요한 현장 조건을 살펴봅니다.",
    },
    {
      number: "03",
      title: "공간 계획",
      description:
        "전체 공간의 디자인과 기능이 연결될 수 있도록 방향을 계획합니다.",
    },
    {
      number: "04",
      title: "범위 확정",
      description:
        "필요한 전체 공정과 공사 순서, 일정과 견적 내용을 구체화합니다.",
    },
    {
      number: "05",
      title: "현장 진행",
      description:
        "정해진 계획에 따라 각 공정을 순차적으로 진행하고 현장을 관리합니다.",
    },
    {
      number: "06",
      title: "완료 점검",
      description:
        "전체 공간의 마감과 주요 시공 부분을 확인한 뒤 최종 점검합니다.",
    },
  ],

  [
    {
      number: "01",
      title: "초기 문의",
      description:
        "지역과 평수, 주거 또는 상업공간 여부와 원하는 공사 방향을 확인합니다.",
    },
    {
      number: "02",
      title: "조건 확인",
      description:
        "실제 현장의 구조와 설비, 공간별 사용 조건을 확인합니다.",
    },
    {
      number: "03",
      title: "전체 구성",
      description:
        "공간의 목적과 이용 방식에 맞춰 전체적인 디자인과 기능을 구성합니다.",
    },
    {
      number: "04",
      title: "세부 협의",
      description:
        "공사 범위와 필요한 공정, 진행 일정과 견적 내용을 협의합니다.",
    },
    {
      number: "05",
      title: "시공 관리",
      description:
        "전체 공정이 자연스럽게 이어지도록 순서에 맞춰 현장을 진행합니다.",
    },
    {
      number: "06",
      title: "마감 점검",
      description:
        "시공 완료 후 공간 전체의 마감과 주요 부분을 확인합니다.",
    },
  ],
];

const faqQuestionTemplates = [
  (area: string) => `${area}에서 전체인테리어 상담이 가능한가요?`,
  (area: string) => `${area} 아파트 전체인테리어도 진행하나요?`,
  (area: string) => `${area} 상가·매장 전체인테리어도 가능한가요?`,
  (area: string) => `${area} 사무실 전체인테리어도 진행하나요?`,
  (area: string) => `${area} 주택 전체인테리어 상담도 가능한가요?`,
  (area: string) => `${area} 인테리어 상담은 어떤 순서로 시작하나요?`,
  (area: string) => `${area} 전체인테리어 공사 범위는 어떻게 정하나요?`,
  (area: string) => `${area} 인테리어 상담 전에 무엇을 준비하면 되나요?`,
];

const ctaTemplates = [
  (area: string) =>
    `${area} 전체인테리어를 준비하고 있다면 공간 종류와 평수를 알려주세요.`,
  (area: string) =>
    `${area} 주거·상업 전체인테리어 상담은 전화 또는 문자로 시작할 수 있습니다.`,
  (area: string) =>
    `${area} 공간을 전체적으로 새롭게 계획하고 있다면 현재 상태와 원하는 방향을 알려주세요.`,
  (area: string) =>
    `${area} 인테리어 현장의 위치와 공간 용도를 알려주시면 상담에 도움이 됩니다.`,
  (area: string) =>
    `${area} 아파트·주택·매장·사무실 전체인테리어가 필요하다면 공간 정보를 남겨주세요.`,
  (area: string) =>
    `${area} 전체인테리어의 공사 범위와 일정이 궁금하다면 현재 공간부터 확인해보세요.`,
  (area: string) =>
    `${area} 인테리어 상담 시 평수, 공간 종류, 희망 일정과 원하는 분위기를 알려주세요.`,
  (area: string) =>
    `${area}에서 전체 공간을 새롭게 바꾸려면 전화 또는 문자로 상담을 시작해보세요.`,
];

function stableHash(value: string) {
  let hash = 0;

  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }

  return hash;
}

function pick<T>(items: T[], seed: number, offset = 0): T {
  return items[(seed + offset * 7919) % items.length];
}

function getPortfolio(district: string, area: string) {
  const seed = stableHash(`${district}-${area}`);

  return [...portfolio].sort((a, b) => {
    const aAreaMatch =
      a.district === district &&
      a.area &&
      (a.area === area ||
        area.startsWith(a.area.replace(/[0-9]가$/, "")) ||
        a.area.startsWith(area.replace(/[0-9]가$/, "")))
        ? 2
        : 0;

    const bAreaMatch =
      b.district === district &&
      b.area &&
      (b.area === area ||
        area.startsWith(b.area.replace(/[0-9]가$/, "")) ||
        b.area.startsWith(area.replace(/[0-9]가$/, "")))
        ? 2
        : 0;

    if (aAreaMatch !== bAreaMatch) {
      return bAreaMatch - aAreaMatch;
    }

    const aDistrictMatch = a.district === district ? 1 : 0;
    const bDistrictMatch = b.district === district ? 1 : 0;

    if (aDistrictMatch !== bDistrictMatch) {
      return bDistrictMatch - aDistrictMatch;
    }

    return (
      stableHash(`${area}-${a.id}-${seed}`) -
      stableHash(`${area}-${b.id}-${seed}`)
    );
  });
}

type PageProps = {
  params: Promise<{
    city: string;
    district: string;
    area: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city, district, area } = await params;

  const decodedCity = decodeURIComponent(city);
  const decodedDistrict = decodeURIComponent(district);
  const decodedArea = decodeURIComponent(area);

  if (
    decodedCity !== "서울" ||
    !validDistricts.includes(decodedDistrict) ||
    !decodedArea
  ) {
    return {
      title: "더세이브인테리어",
    };
  }

  const seed = stableHash(
    `${decodedCity}-${decodedDistrict}-${decodedArea}-metadata`,
  );

  const titleTemplates = [
    `${decodedArea} 인테리어업체 | 아파트·매장 전체인테리어`,
    `${decodedArea} 전체인테리어 | 집·주택·상가·사무실`,
    `${decodedArea} 인테리어 | 주거·상업 공간 전체 시공`,
    `${decodedArea} 아파트 인테리어 | 상가·매장·사무실`,
    `${decodedArea} 주거·상업 인테리어 | 더세이브인테리어`,
    `${decodedArea} 인테리어업체 | 집·아파트·주택·매장`,
    `${decodedArea} 전체인테리어 업체 | 주거·상업 공간`,
    `${decodedArea} 매장·아파트 인테리어 | 전체인테리어`,
    `${decodedArea} 집·상가 인테리어 | 전체 공간 리뉴얼`,
    `${decodedArea} 사무실·주택 인테리어 | 전체인테리어`,
    `${decodedArea} 인테리어 상담 | 아파트·상가 전체공사`,
    `${decodedArea} 전체인테리어 상담 | 주거·상업 전문`,
    `${decodedArea} 인테리어 전문 | 집·매장·사무실 전체시공`,
    `${decodedArea} 아파트·주택 인테리어 | 매장·상가 시공`,
    `${decodedArea} 상업·주거 인테리어 | 전체 공간 계획`,
    `${decodedArea} 인테리어업체 | 공간 전체 디자인·시공`,
    `${decodedArea} 전체인테리어 | 생활·운영 동선 맞춤 계획`,
    `${decodedArea} 인테리어 | 현장 조건에 맞춘 전체공사`,
  ];

  const descriptionTemplates = [
    `${decodedDistrict} ${decodedArea} 전체인테리어 상담. 아파트·빌라·주택·오피스텔 주거공간과 상가·매장·카페·음식점·사무실 상업공간을 전체적으로 계획합니다.`,
    `${decodedArea} 인테리어업체를 찾고 있다면 주거와 상업공간의 구조, 동선, 수납과 사용 목적을 함께 확인해 전체인테리어 방향을 상담합니다.`,
    `${decodedDistrict} ${decodedArea} 아파트·주택·매장·사무실 전체인테리어. 현재 공간의 구조와 필요한 기능을 확인하고 디자인과 공정을 함께 계획합니다.`,
    `${decodedArea} 주거·상업 인테리어 상담. 집과 아파트는 생활 동선을, 매장과 사무실은 운영 흐름을 기준으로 공간 전체의 방향을 계획합니다.`,
    `${decodedArea} 전체인테리어는 공간 일부가 아닌 전체 디자인, 기능, 동선과 공정을 함께 봅니다. 아파트·주택·상가·매장·사무실 상담이 가능합니다.`,
    `${decodedDistrict} ${decodedArea} 인테리어 상담. 공간의 용도와 평수, 기존 구조와 희망 일정을 확인해 주거 또는 상업 전체인테리어 범위를 계획합니다.`,
    `${decodedArea} 아파트 인테리어부터 상가·매장·사무실 인테리어까지. 실제 사용 방식과 현장 조건에 맞춰 전체 공간의 구성과 공정을 상담합니다.`,
    `${decodedArea} 집·주택·상업공간 전체인테리어. 수납과 이동 동선, 설비와 공간별 역할을 검토해 생활과 운영이 편리한 방향으로 계획합니다.`,
    `${decodedDistrict} ${decodedArea} 전체인테리어 업체 더세이브인테리어. 주거공간과 상업공간의 목적에 따라 공간 배치와 전체 공사 방향을 상담합니다.`,
    `${decodedArea} 인테리어를 준비한다면 유지할 부분과 변경할 부분, 필요한 설비와 동선을 함께 확인하세요. 공간 전체를 대상으로 인테리어를 계획합니다.`,
    `${decodedArea} 주택·아파트·상가·사무실 전체인테리어. 디자인만 바꾸는 것이 아니라 공간 사용 방식과 공정의 연결까지 함께 검토합니다.`,
    `${decodedArea} 전체인테리어 상담은 현장 위치, 공간 종류, 평수와 원하는 방향을 바탕으로 시작합니다. 주거와 상업공간 전체 시공을 계획합니다.`,
  ];

  const title = pick(titleTemplates, seed, 1);
  const description = pick(descriptionTemplates, seed, 2);
  const canonical = `https://interior.thesavecompany.com/${encodeURIComponent(
    decodedCity,
  )}/${encodeURIComponent(decodedDistrict)}/${encodeURIComponent(decodedArea)}`;

  return {
    title,
    description,
    keywords: [
      `${decodedArea} 인테리어`,
      `${decodedArea} 인테리어업체`,
      `${decodedArea} 전체인테리어`,
      `${decodedArea} 아파트 인테리어`,
      `${decodedArea} 아파트 전체인테리어`,
      `${decodedArea} 상가 인테리어`,
      `${decodedArea} 매장 인테리어`,
      `${decodedArea} 집 인테리어`,
      `${decodedArea} 주택 인테리어`,
      `${decodedArea} 사무실 인테리어`,
      `${decodedArea} 주거 인테리어`,
      `${decodedArea} 상업 인테리어`,
      `${decodedDistrict} 인테리어`,
      "더세이브인테리어",
    ],
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { city, district, area } = await params;

  const decodedCity = decodeURIComponent(city);
  const decodedDistrict = decodeURIComponent(district);
  const decodedArea = decodeURIComponent(area);

  if (
    decodedCity !== "서울" ||
    !validDistricts.includes(decodedDistrict) ||
    !decodedArea
  ) {
    notFound();
  }

  const seed = stableHash(
    `${decodedCity}-${decodedDistrict}-${decodedArea}`,
  );

  const heroTitle = pick(heroTitleTemplates, seed)(decodedArea);
  const heroLines = heroTitle.split("\n");

  const intro = pick(introTemplates, seed, 1)(
    decodedDistrict,
    decodedArea,
  );

  const residentialText = pick(
    residentialTemplates,
    seed,
    2,
  )(decodedArea);

  const commercialText = pick(
    commercialTemplates,
    seed,
    3,
  )(decodedArea);

  const guideTitle = pick(guideTitles, seed, 4);

  const guideMode = pick(guideModes, seed, 5);
  const guideModeTitle = guideMode.title(decodedArea);
  const guideParagraphs = guideMode.paragraphs.map((paragraph) =>
    paragraph(decodedDistrict, decodedArea),
  );

  const selectedProcess = pick(processSets, seed, 7);

  const selectedPortfolio = getPortfolio(
    decodedDistrict,
    decodedArea,
  );

  const ctaText = pick(
    ctaTemplates,
    seed,
    8,
  )(decodedArea);

  const localPortfolio =
    selectedPortfolio[0].district === decodedDistrict &&
    (selectedPortfolio[0].area === decodedArea ||
      selectedPortfolio[0].area === "");

  const faqs = [
    {
      question: pick(
        faqQuestionTemplates,
        seed,
        1,
      )(decodedArea),
      answer: `네. 서울 ${decodedDistrict} ${decodedArea}의 주거 및 상업공간을 대상으로 전체인테리어 상담을 진행합니다. 실제 시공 가능 범위와 필요한 공정은 현장 조건을 확인한 뒤 안내합니다.`,
    },
    {
      question: pick(
        faqQuestionTemplates,
        seed,
        2,
      )(decodedArea),
      answer:
        "아파트, 빌라, 주택, 오피스텔 등의 주거공간 전체인테리어를 진행합니다. 가족 구성과 생활 동선, 수납과 공간 활용을 함께 고려합니다.",
    },
    {
      question: pick(
        faqQuestionTemplates,
        seed,
        3,
      )(decodedArea),
      answer:
        "상가, 매장, 카페, 음식점, 사무실 등 상업공간 전체인테리어도 진행합니다. 업종과 운영 방식에 맞춰 전체 공간을 계획합니다.",
    },
    {
      question: "부분인테리어도 진행하나요?",
      answer:
        "더세이브인테리어는 공간의 일부만 시공하는 부분인테리어는 진행하지 않으며, 공간 전체의 디자인과 공정을 함께 계획하는 전체인테리어를 진행합니다.",
    },
    {
      question: `${decodedArea} 인테리어 상담 시 무엇을 알려주면 되나요?`,
      answer:
        "현장 주소 또는 위치, 공간 종류, 대략적인 평수, 현재 상태와 원하는 공사 일정 및 인테리어 방향을 알려주시면 상담에 도움이 됩니다.",
    },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${decodedArea} 전체인테리어`,
    serviceType: "주거 및 상업 전체인테리어",
    provider: {
      "@type": "LocalBusiness",
      name: "더세이브인테리어",
      telephone: PHONE_DISPLAY,
      url: "https://interior.thesavecompany.com",
      areaServed: "서울",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `서울 ${decodedDistrict} ${decodedArea}`,
    },
    url: `https://interior.thesavecompany.com/${encodeURIComponent(
      decodedCity,
    )}/${encodeURIComponent(decodedDistrict)}/${encodeURIComponent(decodedArea)}`,
  };

  return (
    <main className="min-h-screen bg-[#0b0b0b] pb-20 text-white md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0b0b]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="block">
            <p className="text-xl font-black tracking-tight sm:text-2xl">
              더세이브인테리어
            </p>

            <p className="mt-1 text-[11px] font-medium tracking-[0.15em] text-white/45">
              THE SAVE INTERIOR
            </p>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="#service"
              className="hidden text-sm font-semibold text-white/60 transition hover:text-white lg:block"
            >
              전체인테리어
            </a>

            <a
              href="#portfolio"
              className="hidden text-sm font-semibold text-white/60 transition hover:text-white lg:block"
            >
              시공사례
            </a>

            <a
              href={`sms:${PHONE_LINK}`}
              className="hidden rounded-full border border-white/20 px-5 py-3 text-sm font-bold transition hover:bg-white/5 sm:inline-flex"
            >
              문자상담
            </a>

            <a
              href={`tel:${PHONE_LINK}`}
              className="rounded-full bg-[#d7b37a] px-5 py-3 text-sm font-black text-black transition hover:opacity-90"
            >
              전화상담
            </a>
          </div>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="border-b border-white/10 bg-[#0e0e0e]">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/40">
            <Link href="/" className="transition hover:text-white">
              홈
            </Link>

            <span>›</span>

            <Link
              href={`/${encodeURIComponent("서울")}`}
              className="transition hover:text-white"
            >
              서울
            </Link>

            <span>›</span>

            <Link
              href={`/${encodeURIComponent(
                "서울",
              )}/${encodeURIComponent(decodedDistrict)}`}
              className="transition hover:text-white"
            >
              {decodedDistrict}
            </Link>

            <span>›</span>

            <span className="font-black text-[#d7b37a]">
              {decodedArea} 인테리어
            </span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,179,122,0.20),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_30%)]" />

        <div className="relative mx-auto grid min-h-[700px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <div className="inline-flex rounded-full border border-[#d7b37a]/30 bg-[#d7b37a]/10 px-4 py-2">
              <p className="text-xs font-black tracking-[0.18em] text-[#d7b37a]">
                {decodedArea} TOTAL INTERIOR
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              {heroLines[0]}
              <br />
              <span className="text-[#d7b37a]">
                {heroLines[1]}
              </span>
            </h1>

            <p className="mt-7 text-xl font-black text-white/85">
              {decodedArea} 주거 · 상업 전체인테리어
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/55">
              {intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_LINK}`}
                className="rounded-full bg-[#d7b37a] px-7 py-4 text-sm font-black text-black transition hover:opacity-90"
              >
                전화상담 {PHONE_DISPLAY}
              </a>

              <a
                href={`sms:${PHONE_LINK}`}
                className="rounded-full border border-white/20 px-7 py-4 text-sm font-black transition hover:bg-white/5"
              >
                문자로 상담하기
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-lg font-black text-[#d7b37a]">
                  {decodedArea}
                </p>
                <p className="mt-1 text-xs text-white/45">
                  지역 인테리어
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-lg font-black text-[#d7b37a]">
                  주거
                </p>
                <p className="mt-1 text-xs text-white/45">
                  전체인테리어
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-lg font-black text-[#d7b37a]">
                  상업
                </p>
                <p className="mt-1 text-xs text-white/45">
                  전체인테리어
                </p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <a
            href={`tel:${PHONE_LINK}`}
            className="group relative block overflow-hidden rounded-[38px] border border-white/10 bg-[#151515] shadow-2xl"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={selectedPortfolio[0].image}
                alt={selectedPortfolio[0].title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="text-xs font-black tracking-[0.18em] text-[#d7b37a]">
                  INTERIOR PORTFOLIO
                </p>

                <p className="mt-3 text-2xl font-black leading-9">
                  {selectedPortfolio[0].title}
                </p>

                <p className="mt-3 text-sm text-white/55">
                  사진 클릭 → 전화상담
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* AREA SUMMARY */}
      <section className="border-y border-white/10 bg-[#101010] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-[28px] border border-white/10 bg-[#151515] p-7">
              <p className="text-xs font-black tracking-[0.18em] text-[#d7b37a]">
                LOCATION
              </p>

              <h2 className="mt-4 text-2xl font-black">
                서울 {decodedDistrict} {decodedArea}
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                {guideTitle}. {decodedArea}의 주거 및 상업공간을 대상으로
                전체인테리어 상담을 진행합니다.
              </p>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-[#151515] p-7">
              <p className="text-xs font-black tracking-[0.18em] text-[#d7b37a]">
                RESIDENTIAL
              </p>

              <h2 className="mt-4 text-2xl font-black">
                주거 전체인테리어
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                아파트 · 빌라 · 주택 · 오피스텔 등
                공간 전체를 대상으로 진행합니다.
              </p>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-[#151515] p-7">
              <p className="text-xs font-black tracking-[0.18em] text-[#d7b37a]">
                COMMERCIAL
              </p>

              <h2 className="mt-4 text-2xl font-black">
                상업 전체인테리어
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                상가 · 매장 · 카페 · 음식점 · 사무실 등
                상업공간 전체를 계획합니다.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section id="service" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[34px] border border-white/10 bg-[#151515] p-8 sm:p-10">
              <p className="text-xs font-black tracking-[0.2em] text-[#d7b37a]">
                RESIDENTIAL INTERIOR
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {decodedArea} 주거 전체인테리어
              </h2>

              <p className="mt-6 leading-8 text-white/55">
                {residentialText}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "아파트 전체인테리어",
                  "빌라 전체인테리어",
                  "주택 전체인테리어",
                  "오피스텔 전체인테리어",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm font-bold text-white/65"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[34px] border border-white/10 bg-[#151515] p-8 sm:p-10">
              <p className="text-xs font-black tracking-[0.2em] text-[#d7b37a]">
                COMMERCIAL INTERIOR
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {decodedArea} 상업 전체인테리어
              </h2>

              <p className="mt-6 leading-8 text-white/55">
                {commercialText}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  "상가 전체인테리어",
                  "매장 전체인테리어",
                  "카페 전체인테리어",
                  "음식점 전체인테리어",
                  "사무실 전체인테리어",
                  "쇼룸 전체인테리어",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm font-bold text-white/65"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* GUIDE */}
      <section className="border-y border-white/10 bg-[#101010] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
                {decodedArea} INTERIOR GUIDE
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                {guideModeTitle}
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/40">
                {decodedDistrict} {decodedArea}의 공간 종류와 사용 목적을
                기준으로 전체인테리어를 준비할 때 확인할 내용을
                정리했습니다.
              </p>
            </div>

            <div className="space-y-6 text-base leading-8 text-white/55">
              {guideParagraphs.map((paragraph, index) => (
                <p key={`${decodedArea}-guide-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
                INTERIOR PORTFOLIO
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                {decodedArea}에서 참고할
                <br />
                전체인테리어 사례
              </h2>

              <p className="mt-6 leading-8 text-white/55">
                주거와 상업공간의 다양한 전체인테리어 사례를
                확인해보세요. 관심 있는 사진을 누르면 바로
                전화상담으로 연결됩니다.
              </p>
            </div>

            <a
              href={`tel:${PHONE_LINK}`}
              className="w-fit rounded-full border border-[#d7b37a]/40 bg-[#d7b37a]/10 px-6 py-3 text-sm font-black text-[#d7b37a] transition hover:bg-[#d7b37a] hover:text-black"
            >
              {decodedArea} 인테리어 상담
            </a>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {selectedPortfolio.map((item) => {
              const exactArea =
                item.district === decodedDistrict &&
                item.area === decodedArea;

              const sameDistrict =
                item.district === decodedDistrict;

              return (
                <a
                  key={item.id}
                  href={`tel:${PHONE_LINK}`}
                  className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#151515] transition hover:-translate-y-1 hover:border-[#d7b37a]/50"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {exactArea && (
                      <div className="absolute left-4 top-4 rounded-full bg-[#d7b37a] px-3 py-2 text-xs font-black text-black">
                        {decodedArea} 사례
                      </div>
                    )}

                    {!exactArea && sameDistrict && (
                      <div className="absolute left-4 top-4 rounded-full border border-[#d7b37a]/40 bg-black/60 px-3 py-2 text-xs font-black text-[#d7b37a] backdrop-blur">
                        {decodedDistrict} 참고사례
                      </div>
                    )}

                    {!sameDistrict && (
                      <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-xs font-black backdrop-blur">
                        참고 시공사례
                      </div>
                    )}

                    <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#d7b37a] text-lg text-black">
                      ☎
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-black text-[#d7b37a]">
                      {item.location}
                    </p>

                    <h3 className="mt-2 text-xl font-black leading-8">
                      {item.title}
                    </h3>

                    <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
                      <span className="text-sm text-white/45">
                        {item.category} · {item.size}
                      </span>

                      <span className="shrink-0 text-xs font-black text-[#d7b37a]">
                        전화상담 →
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {!localPortfolio && (
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm leading-7 text-white/45">
                위 이미지는 다양한 전체인테리어 공간을 참고하기 위한
                사례 이미지이며, {decodedArea} 현장은 실제 공간 구조와
                상담 내용에 따라 별도로 계획됩니다.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-white/10 bg-[#101010] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
            PROCESS
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            {decodedArea} 전체인테리어 진행 과정
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/55">
            전체인테리어는 여러 공정이 서로 연결되어 있기 때문에
            현장 조건을 확인하고 전체적인 방향과 진행 순서를
            정하는 과정이 중요합니다.
          </p>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {selectedProcess.map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-white/10 bg-[#151515] p-7"
              >
                <p className="text-sm font-black text-[#d7b37a]">
                  {item.number}
                </p>

                <h3 className="mt-5 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <Partners />

      {/* CONTACT */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[38px] bg-[#d7b37a] p-8 text-black sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <p className="text-sm font-black tracking-[0.18em]">
                  {decodedArea} INTERIOR CONSULTING
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  {decodedArea} 전체인테리어,
                  <br />
                  상담부터 시작하세요
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-black/65">
                  {ctaText} 현장 위치와 공간 종류, 대략적인 평수와
                  원하는 전체인테리어 방향을 알려주시면 상담에
                  도움이 됩니다.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${PHONE_LINK}`}
                  className="flex min-h-20 items-center justify-between rounded-2xl bg-black px-6 text-white transition hover:opacity-85"
                >
                  <div>
                    <p className="text-xs font-bold text-white/50">
                      전화상담
                    </p>

                    <p className="mt-1 text-xl font-black">
                      {PHONE_DISPLAY}
                    </p>
                  </div>

                  <span className="text-2xl">☎</span>
                </a>

                <a
                  href={`sms:${PHONE_LINK}`}
                  className="flex min-h-20 items-center justify-between rounded-2xl border-2 border-black/20 bg-white/30 px-6 transition hover:bg-white/50"
                >
                  <div>
                    <p className="text-xs font-bold text-black/50">
                      문자상담
                    </p>

                    <p className="mt-1 text-lg font-black">
                      문자로 문의하기
                    </p>
                  </div>

                  <span className="text-2xl">✉</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-white/10 bg-[#101010] py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
              {decodedArea} FAQ
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              {decodedArea} 인테리어 상담 안내
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqs.map((faq, index) => (
              <article
                key={`${faq.question}-${index}`}
                className="rounded-3xl border border-white/10 bg-[#151515] p-7"
              >
                <div className="flex gap-4">
                  <p className="font-black text-[#d7b37a]">
                    Q{index + 1}.
                  </p>

                  <div>
                    <h3 className="text-lg font-black">
                      {faq.question}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/55">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black text-[#d7b37a]">
                {decodedDistrict} INTERIOR
              </p>

              <p className="mt-2 text-xl font-black">
                {decodedDistrict} 다른 지역도 확인하세요
              </p>
            </div>

            <Link
              href={`/${encodeURIComponent(
                "서울",
              )}/${encodeURIComponent(decodedDistrict)}`}
              className="w-fit rounded-full border border-white/15 px-6 py-3 text-sm font-black transition hover:border-[#d7b37a] hover:text-[#d7b37a]"
            >
              {decodedDistrict} 지역 전체보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Link href="/" className="text-xl font-black">
                더세이브인테리어
              </Link>

              <p className="mt-3 text-sm text-white/45">
                {decodedArea} 주거 전체인테리어 · 상업 전체인테리어
              </p>

              <a
                href={`tel:${PHONE_LINK}`}
                className="mt-3 inline-block text-sm font-black text-[#d7b37a]"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-xs text-white/25">
                서울 {decodedDistrict} {decodedArea}
              </p>

              <p className="mt-2 text-xs text-white/25">
                THE SAVE INTERIOR
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE FIXED CONTACT */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0b0b0b]/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
          <a
            href={`tel:${PHONE_LINK}`}
            className="flex min-h-14 items-center justify-center rounded-xl bg-[#d7b37a] text-sm font-black text-black"
          >
            ☎ 전화상담
          </a>

          <a
            href={`sms:${PHONE_LINK}`}
            className="flex min-h-14 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-sm font-black text-white"
          >
            ✉ 문자상담
          </a>
        </div>
      </div>
    </main>
  );
}
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Partners from "@/components/Partners";

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
  (area: string) => `${area} 인테리어업체,\n공간의 쓰임부터 다시 설계합니다`,
  (area: string) => `${area} 전체인테리어,\n생활 동선을 새롭게 정리합니다`,
  (area: string) => `${area} 인테리어,\n아파트부터 매장까지 전체 시공`,
  (area: string) => `${area} 주거 인테리어,\n생활 방식에 맞춘 공간 계획`,
  (area: string) => `${area} 상업 인테리어,\n운영 효율을 고려한 전체 설계`,
  (area: string) => `${area} 인테리어업체,\n구조와 기능을 먼저 봅니다`,
  (area: string) => `${area} 전체인테리어,\n부분이 아닌 공간 전체를`,
  (area: string) => `${area} 인테리어,\n집과 일터의 흐름을 바꿉니다`,
  (area: string) => `${area} 아파트 인테리어,\n수납과 동선까지 함께`,
  (area: string) => `${area} 매장 인테리어,\n고객과 직원의 움직임까지`,
  (area: string) => `${area} 인테리어업체,\n현장 조건에 맞는 전체 계획`,
  (area: string) => `${area} 전체인테리어,\n디자인과 사용성을 함께`,
  (area: string) => `${area} 주거·상업 인테리어,\n공간 목적에 맞춰 다르게`,
  (area: string) => `${area} 인테리어,\n구조·동선·마감까지 한 번에`,
  (area: string) => `${area} 집·사무실 인테리어,\n실제 사용성을 중심으로`,
  (area: string) => `${area} 아파트·상가 인테리어,\n전체 공간을 하나의 흐름으로`,
  (area: string) => `${area} 인테리어업체,\n공사 범위부터 꼼꼼하게`,
  (area: string) => `${area} 전체인테리어,\n현장부터 완성까지 전체 관리`,
];

const introTemplates = [
  (district: string, area: string) =>
    `${district} ${area}에서 전체인테리어를 계획할 때는 디자인 이미지보다 현재 구조와 실제 사용 방식을 먼저 확인하는 것이 중요합니다. 주거와 상업공간의 목적을 구분하고 공간 전체가 자연스럽게 연결되도록 계획합니다.`,
  (district: string, area: string) =>
    `${area}의 공간은 같은 평수라도 구조와 용도에 따라 필요한 공정이 달라집니다. ${district} ${area} 현장의 기존 상태와 동선, 사용 목적을 확인한 뒤 전체인테리어의 범위와 순서를 정리합니다.`,
  (district: string, area: string) =>
    `${district} ${area}에서 아파트, 주택, 매장, 상가, 사무실 전체인테리어를 준비한다면 먼저 공간을 어떻게 사용할지 생각해야 합니다. 생활과 운영에 필요한 기능을 기준으로 디자인과 공정을 함께 구성합니다.`,
  (district: string, area: string) =>
    `${area} 전체인테리어는 마감재만 바꾸는 작업이 아니라 공간의 구조, 기능, 동선과 분위기를 다시 정리하는 과정입니다. 더세이브인테리어는 ${district} ${area} 현장의 조건을 기준으로 전체 방향을 상담합니다.`,
  (district: string, area: string) =>
    `${district} ${area}의 주거와 상업공간은 면적뿐 아니라 채광, 설비, 출입구와 내부 배치까지 서로 다릅니다. 획일적인 시공보다 현장의 특성을 확인하고 공간 전체의 사용성을 높이는 방향으로 계획합니다.`,
  (district: string, area: string) =>
    `${area} 인테리어를 준비할 때는 보기 좋은 디자인과 실제 사용 편의성을 함께 봐야 합니다. ${district} ${area}의 아파트·집·주택과 매장·상가·사무실을 공간 목적에 맞춰 전체적으로 계획합니다.`,
  (district: string, area: string) =>
    `${district} ${area} 전체인테리어는 현재 공간에서 유지할 부분과 새롭게 바꿀 부분을 구분하는 것부터 시작합니다. 생활 동선이나 운영 동선을 확인하고 필요한 공정을 하나의 흐름으로 연결합니다.`,
  (district: string, area: string) =>
    `${area}의 집이나 사업장 인테리어는 공간을 사용하는 사람의 움직임을 기준으로 보면 방향을 잡기 쉽습니다. ${district} ${area} 현장에 맞춰 구조와 수납, 업무 공간과 고객 공간을 전체적으로 검토합니다.`,
  (district: string, area: string) =>
    `${district} ${area}에서 인테리어업체를 찾고 있다면 평수만으로 견적을 비교하기보다 공사 범위와 현장 조건을 함께 확인하는 것이 좋습니다. 더세이브인테리어는 부분 시공이 아닌 전체인테리어를 중심으로 상담합니다.`,
  (district: string, area: string) =>
    `${area} 공간을 새롭게 바꿀 때는 각 방이나 구역을 따로 보는 것보다 서로 연결되는 동선과 기능을 함께 보는 것이 중요합니다. ${district} ${area}의 주거·상업 공간을 전체적인 관점에서 계획합니다.`,
];

const residentialTemplates = [
  (area: string) =>
    `${area} 아파트·빌라·주택·오피스텔은 가족 구성과 생활 패턴을 기준으로 거실, 주방, 침실, 수납공간의 관계를 함께 봅니다. 집 전체가 자연스럽게 연결되도록 생활 동선 중심으로 계획합니다.`,
  (area: string) =>
    `${area} 주거 전체인테리어는 자주 이동하는 동선과 필요한 수납량, 가족별 공간 사용 방식을 먼저 확인합니다. 공간 전체의 분위기와 기능이 균형을 이룰 수 있도록 구성합니다.`,
  (area: string) =>
    `${area} 아파트 인테리어는 평수만으로 방향을 정하기보다 현재 평면과 가족의 생활 습관을 함께 보는 것이 중요합니다. 주방과 거실, 침실과 수납이 연결되는 흐름을 전체적으로 설계합니다.`,
  (area: string) =>
    `${area} 주거공간에서는 편안함과 실제 사용성이 핵심입니다. 거실의 개방감, 주방의 활용도, 침실 구성과 수납을 하나의 흐름으로 정리해 전체인테리어를 계획합니다.`,
  (area: string) =>
    `${area} 집 인테리어는 보기 좋은 마감뿐 아니라 매일 사용하는 동선과 수납이 편리해야 합니다. 가족의 생활 방식에 맞춰 공간별 기능을 나누고 전체 분위기를 자연스럽게 연결합니다.`,
  (area: string) =>
    `${area} 주택 전체인테리어에서는 층별 또는 공간별 역할과 이동 경로를 함께 확인합니다. 기존 구조를 살릴 부분과 변경할 부분을 구분해 생활 편의성을 높이는 방향으로 계획합니다.`,
  (area: string) =>
    `${area} 오피스텔과 소형 주거공간은 한정된 면적 안에서 수납과 동선의 효율이 중요합니다. 사용 빈도가 높은 공간을 중심으로 기능을 정리하고 전체 공간을 간결하게 구성합니다.`,
  (area: string) =>
    `${area} 주거 인테리어는 가족마다 필요한 공간이 다르기 때문에 정해진 답이 없습니다. 현재 구조와 생활 습관을 확인해 거실, 주방, 침실, 수납의 우선순위를 다르게 계획합니다.`,
];

const commercialTemplates = [
  (area: string) =>
    `${area}의 상가, 매장, 카페, 음식점, 사무실은 업종과 운영 방식에 따라 필요한 구조가 달라집니다. 고객 이동 경로와 직원 업무 동선, 공간이 전달해야 하는 분위기를 함께 고려합니다.`,
  (area: string) =>
    `${area} 상업 전체인테리어에서는 디자인과 실제 운영 편의성을 함께 봅니다. 입구에서 내부로 이어지는 고객 동선과 작업공간, 좌석 또는 업무공간의 배치를 전체적으로 계획합니다.`,
  (area: string) =>
    `${area} 매장 인테리어는 방문객이 처음 공간을 마주하는 순간부터 이용을 마칠 때까지의 흐름이 중요합니다. 업종 특성과 브랜드 분위기, 직원의 업무 효율을 반영해 공간 전체를 구성합니다.`,
  (area: string) =>
    `${area} 상업공간은 같은 면적이라도 카페, 음식점, 매장, 사무실에 따라 필요한 설비와 공간 배치가 달라집니다. 실제 운영 방식을 확인한 뒤 전체인테리어 방향을 구체화합니다.`,
  (area: string) =>
    `${area} 사무실 인테리어는 직원의 업무 흐름과 회의, 휴식, 수납 등 기능을 구분해 계획합니다. 업무 효율과 방문객의 첫인상을 함께 고려해 전체 공간을 정리합니다.`,
  (area: string) =>
    `${area} 카페·음식점 인테리어는 고객 좌석뿐 아니라 주문, 조리, 이동, 수납처럼 운영에 필요한 동선을 함께 봐야 합니다. 업종에 맞는 기능을 기준으로 공간을 구성합니다.`,
  (area: string) =>
    `${area} 상가 전체인테리어는 입구, 메인 공간, 보조 공간의 역할을 나누고 고객이 자연스럽게 이동할 수 있도록 배치하는 것이 중요합니다. 실제 영업 방식에 맞춰 전체 흐름을 계획합니다.`,
  (area: string) =>
    `${area} 매장·사무실 공간은 브랜드 이미지와 실제 업무 기능을 동시에 만족해야 합니다. 보여지는 영역과 작업 영역을 구분하면서도 전체 분위기가 끊기지 않도록 설계합니다.`,
];

const guideTitles = [
  "공간의 구조를 먼저 확인합니다",
  "같은 평수라도 계획은 달라집니다",
  "실제 사용하는 동선을 생각합니다",
  "전체 공간의 연결성이 중요합니다",
  "사용 목적에서 인테리어가 시작됩니다",
  "현장 조건에 맞는 계획이 필요합니다",
];

const guideParagraphTemplates = [
  (district: string, area: string) =>
    `${district} ${area}에서 인테리어를 준비할 때는 원하는 디자인 스타일과 함께 현재 공간이 가진 조건을 살펴야 합니다. 벽체와 설비, 창호와 채광, 기존 공간의 배치에 따라 필요한 전체 공정이 달라질 수 있기 때문입니다.`,

  (district: string, area: string) =>
    `${area}의 전체인테리어는 공간을 사용하는 사람에게 필요한 기능을 파악하는 과정이 중요합니다. 주거공간이라면 가족의 생활 패턴을, 상업공간이라면 고객과 직원의 움직임을 기준으로 전체 공간을 바라볼 필요가 있습니다.`,

  (district: string, area: string) =>
    `${district} ${area}의 현장이 같은 평수라고 하더라도 기존 구조와 공간의 용도에 따라 필요한 공사는 서로 다를 수 있습니다. 따라서 현장의 상태를 확인하고 전체 공사의 범위와 순서를 정하는 과정이 중요합니다.`,

  (district: string, area: string) =>
    `${area} 인테리어는 각각의 공간을 개별적으로 꾸미는 것보다 거실과 주방, 매장과 작업공간처럼 서로 연결되는 구역의 관계를 함께 계획하면 공간의 완성도를 높일 수 있습니다.`,
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
  (area: string) => `${area} 상가나 매장 전체인테리어도 가능한가요?`,
  (area: string) => `${area} 인테리어 상담은 어떻게 시작하나요?`,
];

const ctaTemplates = [
  (area: string) =>
    `${area} 전체인테리어를 준비하고 있다면 공간 종류와 평수를 알려주세요.`,
  (area: string) =>
    `${area} 주거·상업 전체인테리어 상담은 전화 또는 문자로 시작할 수 있습니다.`,
  (area: string) =>
    `${area} 공간을 전체적으로 새롭게 계획하고 있다면 상담해보세요.`,
  (area: string) =>
    `${area} 인테리어 현장의 위치와 공간 용도를 알려주시면 상담에 도움이 됩니다.`,
];

const metadataTitleTemplates = [
  (district: string, area: string) => `${area} 인테리어업체 | 아파트·주택 전체인테리어`,
  (district: string, area: string) => `${area} 전체인테리어 | 매장·상가·사무실 공간설계`,
  (district: string, area: string) => `${area} 아파트 인테리어업체 | 집·주택 전체시공`,
  (district: string, area: string) => `${area} 매장 인테리어업체 | 상가·사무실 전체공사`,
  (district: string, area: string) => `${area} 주거 인테리어 | 아파트·집·주택 공간설계`,
  (district: string, area: string) => `${area} 상업 인테리어 | 매장·카페·사무실 전체시공`,
  (district: string, area: string) => `${area} 인테리어업체 | ${district} 주거·상업 전체시공`,
  (district: string, area: string) => `${area} 전체인테리어 | 생활동선·운영동선 맞춤설계`,
  (district: string, area: string) => `${area} 집 인테리어 | 아파트·오피스텔 전체공사`,
  (district: string, area: string) => `${area} 상가 인테리어 | 매장·사무실 공간 전체설계`,
  (district: string, area: string) => `${area} 인테리어 | 주거와 상업 공간 전체시공`,
  (district: string, area: string) => `${area} 인테리어업체 | 구조·동선·마감 전체계획`,
  (district: string, area: string) => `${area} 아파트·매장 인테리어 | 전체공사 상담`,
  (district: string, area: string) => `${area} 주택·사무실 인테리어 | 공간맞춤 전체시공`,
  (district: string, area: string) => `${area} 전체인테리어업체 | 집·상가·사무실 상담`,
  (district: string, area: string) => `${area} 인테리어 | 부분이 아닌 공간 전체 시공`,
  (district: string, area: string) => `${area} 인테리어업체 | 현장 맞춤 주거·상업 설계`,
  (district: string, area: string) => `${area} 전체인테리어 | 아파트·매장 공간 리뉴얼`,
];

const metadataDescriptionTemplates = [
  (district: string, area: string) =>
    `서울 ${district} ${area} 인테리어업체. 아파트·집·주택의 생활 동선과 매장·상가·사무실의 운영 동선을 구분해 공간 전체를 계획합니다. 현장 구조와 공사 범위를 확인해 전체인테리어 방향을 상담합니다.`,
  (district: string, area: string) =>
    `${area} 전체인테리어를 준비한다면 평수보다 먼저 공간의 용도와 현재 구조를 확인하세요. ${district} ${area}의 아파트·주택·매장·사무실을 사용 목적에 맞춰 전체적으로 설계하고 시공합니다.`,
  (district: string, area: string) =>
    `${district} ${area} 인테리어업체를 찾는 분을 위한 안내입니다. 집·아파트·주택은 생활 편의성을, 매장·상가·사무실은 운영 효율을 중심으로 전체 공간의 공사 범위와 방향을 계획합니다.`,
  (district: string, area: string) =>
    `서울 ${area} 아파트·주택 인테리어와 매장·사무실 인테리어 상담. 현재 공간의 구조, 동선, 수납과 사용 목적을 확인하고 부분 시공이 아닌 전체인테리어 중심으로 진행합니다.`,
  (district: string, area: string) =>
    `${area} 인테리어는 같은 면적이라도 공간 용도와 건물 구조에 따라 달라집니다. ${district}의 집·아파트·주택부터 매장·상가·사무실까지 현장에 맞는 전체 시공 계획을 상담합니다.`,
  (district: string, area: string) =>
    `${area} 인테리어업체 더세이브인테리어. 서울 ${district} 지역의 주거·상업 공간을 대상으로 구조와 기능, 생활동선과 운영동선을 확인해 전체인테리어 공사 범위를 정리합니다.`,
  (district: string, area: string) =>
    `${area} 집·아파트 전체인테리어는 수납과 생활 흐름을, 매장·상가·사무실 전체인테리어는 고객과 직원의 움직임을 중심으로 계획합니다. ${district} ${area} 현장 상담이 가능합니다.`,
  (district: string, area: string) =>
    `${district} ${area} 주거·상업 인테리어 안내. 공간에서 유지할 부분과 새롭게 바꿀 부분을 구분하고 아파트·주택·매장·사무실의 구조와 동선을 전체적으로 다시 구성합니다.`,
  (district: string, area: string) =>
    `${area} 전체인테리어는 디자인 선택 전에 현장 구조와 공사 조건을 확인하는 것이 중요합니다. 서울 ${district} ${area}의 집·아파트·주택·상가·매장·사무실 전체 공사를 상담합니다.`,
  (district: string, area: string) =>
    `${area} 아파트·오피스텔·주택과 매장·카페·사무실 인테리어를 공간 목적에 맞게 계획합니다. ${district} ${area}의 구조와 사용 방식을 확인해 전체 공간의 기능과 분위기를 함께 정리합니다.`,
  (district: string, area: string) =>
    `${area} 인테리어업체 상담 전 공간 종류, 면적, 현재 상태와 공사 일정을 알려주세요. ${district} ${area}의 주거와 상업공간을 대상으로 전체인테리어 범위와 진행 방향을 구체적으로 안내합니다.`,
  (district: string, area: string) =>
    `${area} 매장·상가 인테리어와 아파트·집 인테리어는 필요한 동선이 다릅니다. 서울 ${district} ${area} 현장의 실제 사용 장면을 기준으로 구조, 기능, 마감의 전체 흐름을 계획합니다.`,
];

const editorialAngles = [
  `공간의 첫인상보다 실제 생활과 운영 동선을 먼저 살펴보는 방식`,
  `기존 구조와 설비 조건을 확인한 뒤 필요한 공정의 우선순위를 정하는 방식`,
  `집과 아파트는 생활 편의성을, 매장과 사무실은 운영 효율을 중심으로 보는 방식`,
  `마감재 선택보다 전체 공간의 연결성과 사용 목적을 먼저 정리하는 방식`,
  `주거공간은 수납과 이동을, 상업공간은 고객과 직원의 흐름을 함께 고려하는 방식`,
  `같은 평수라도 건물 형태와 공간 용도에 맞춰 계획을 달리하는 방식`,
  `부분적인 변화보다 공간 전체의 디자인과 기능이 자연스럽게 이어지도록 보는 방식`,
  `현장 상태와 공사 일정, 공간 사용 목적을 함께 확인해 전체 방향을 구체화하는 방식`,
  `아파트·주택·집과 매장·상가·사무실의 서로 다른 사용 목적을 구분해 계획하는 방식`,
  `공사 후 실제 사용 장면을 기준으로 동선과 공간 배치를 검토하는 방식`,
  `수납과 이동 경로를 함께 조정해 생활공간의 사용성을 높이는 방식`,
  `고객이 머무는 구역과 직원이 일하는 구역을 구분해 상업공간을 구성하는 방식`,
  `채광과 개방감, 가구 배치까지 실제 생활 장면을 기준으로 검토하는 방식`,
  `업종의 운영 순서를 따라 입구부터 작업공간까지 동선을 정리하는 방식`,
  `기존 공간의 장점을 살리면서 불편한 부분을 전체 흐름 속에서 개선하는 방식`,
  `공간별 기능은 구분하되 전체 분위기는 하나의 방향으로 연결하는 방식`,
];

function stableHash(value: string) {
  let hash = 0;

  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }

  return hash;
}

function pick<T>(items: T[], seed: number, offset = 0): T {
  return items[(seed + offset) % items.length];
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

  const title = pick(metadataTitleTemplates, seed)(
    decodedDistrict,
    decodedArea,
  );

  const description = pick(
    metadataDescriptionTemplates,
    seed,
    1,
  )(decodedDistrict, decodedArea);

  return {
    title: { absolute: title },
    description,
    keywords: [
      `${decodedArea} 인테리어`,
      `${decodedArea} 인테리어업체`,
      `${decodedArea} 전체인테리어`,
      `${decodedArea} 집 인테리어`,
      `${decodedArea} 아파트 인테리어`,
      `${decodedArea} 주택 인테리어`,
      `${decodedArea} 상가 인테리어`,
      `${decodedArea} 매장 인테리어`,
      `${decodedArea} 사무실 인테리어`,
      `${decodedArea} 주거 인테리어`,
      `${decodedArea} 상업 인테리어`,
      `${decodedDistrict} 인테리어`,
      "더세이브인테리어",
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ko_KR",
      siteName: "더세이브인테리어",
    },
    twitter: {
      card: "summary_large_image",
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

  const guideParagraph1 = pick(
    guideParagraphTemplates,
    seed,
    5,
  )(decodedDistrict, decodedArea);

  const guideParagraph2 = pick(
    guideParagraphTemplates,
    seed,
    6,
  )(decodedDistrict, decodedArea);

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

  const editorialAngle = pick(
    editorialAngles,
    seed,
    9,
  );

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
    name: `${decodedArea} 인테리어업체 더세이브인테리어`,
    serviceType: [
      "전체인테리어",
      "아파트 인테리어",
      "집 인테리어",
      "주택 인테리어",
      "매장 인테리어",
      "상가 인테리어",
      "사무실 인테리어",
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: decodedArea },
      { "@type": "AdministrativeArea", name: decodedDistrict },
      { "@type": "AdministrativeArea", name: "서울" },
    ],
    provider: {
      "@type": "Organization",
      name: "더세이브인테리어",
    },
    description: `서울 ${decodedDistrict} ${decodedArea}의 집, 아파트, 주택, 매장, 상가, 사무실 등 주거·상업공간 전체인테리어 상담`,
  };

  return (
    <main className="min-h-screen bg-[#0b0b0b] pb-20 text-white md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
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

            <p className="mt-4 max-w-2xl border-l-2 border-[#d7b37a] pl-5 text-sm font-semibold leading-7 text-white/45 sm:text-base">
              이 페이지에서는 {editorialAngle}을 중심으로 {decodedArea}의
              전체인테리어 방향을 확인합니다.
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
                {decodedArea}의 주거 및 상업공간을 대상으로
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
                {decodedArea} 인테리어,
                <br />
                {guideTitle}
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-white/55">
              <p>{guideParagraph1}</p>

              <p>{residentialText}</p>

              <p>{commercialText}</p>

              <p>{guideParagraph2}</p>

              <p>
                더세이브인테리어는 부분인테리어는 진행하지 않습니다.
                하나의 공간만 별도로 바꾸는 방식보다 공간 전체의 디자인,
                기능, 동선과 필요한 공정을 함께 계획하는
                전체인테리어를 진행합니다.
              </p>
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
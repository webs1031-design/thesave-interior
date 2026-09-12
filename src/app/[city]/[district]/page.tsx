import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Partners from "../../../components/Partners";

const SITE_URL = "https://interior.thesavecompany.com";

const PHONE_DISPLAY = "010-2269-8352";
const PHONE_LINK = "01022698352";

type DistrictData = {
  intro: string;
  residential: string;
  commercial: string;
  focus: string;
  feature: string;
  cta: string;
  faq: string;
  areas: string[];
};

const districtData: Record<string, DistrictData> = {
  강남구: {
    intro:
      "강남구는 대단지 아파트와 고급 주거공간, 업무시설과 상업시설이 함께 형성된 지역입니다. 공간의 외형뿐 아니라 실제 사용 목적과 동선을 고려한 전체적인 계획이 중요합니다.",
    residential:
      "강남구의 아파트와 주거공간은 거실·주방의 연결, 수납 계획, 가족 구성에 따른 방 배치와 생활 동선을 함께 살펴 전체 공간의 균형을 계획합니다.",
    commercial:
      "역삼·삼성·청담·논현 등 다양한 상권과 업무지역의 특성을 고려해 매장, 사무실, 카페, 상가의 운영 목적에 맞는 전체인테리어를 계획합니다.",
    focus: "주거 완성도와 상업공간의 브랜드 경험을 함께 고려",
    feature: "아파트 · 사무실 · 매장 · 상가",
    cta: "강남구 전체인테리어를 계획하고 있다면 공간의 위치와 평수를 알려주세요.",
    faq:
      "강남구는 주거공간과 업무·상업공간이 다양하기 때문에 현장의 용도와 구조를 먼저 확인한 뒤 전체 공사 방향을 계획합니다.",
    areas: [
      "역삼동",
      "개포동",
      "청담동",
      "삼성동",
      "대치동",
      "신사동",
      "논현동",
      "압구정동",
      "세곡동",
      "자곡동",
      "율현동",
      "일원동",
      "수서동",
      "도곡동",
    ],
  },

  강동구: {
    intro:
      "강동구는 아파트 주거지역과 생활형 상권이 고르게 형성되어 있어 가족 생활을 위한 주거공간과 지역 고객을 대상으로 하는 상업공간의 목적을 구분해 접근하는 것이 중요합니다.",
    residential:
      "고덕·명일·상일·암사 등 주거지역의 생활 패턴을 고려해 주방과 거실, 침실, 수납공간이 자연스럽게 연결되는 전체인테리어를 계획합니다.",
    commercial:
      "천호·길동·성내동 등의 상업공간은 고객 접근성과 내부 이동 흐름, 업종별 운영 방식을 고려해 매장 전체의 구성을 계획합니다.",
    focus: "생활 중심의 주거 동선과 실용적인 상업공간 구성",
    feature: "아파트 · 주택 · 매장 · 음식점",
    cta: "강동구 주거 또는 상업공간의 전체 변화를 계획하고 있다면 상담해보세요.",
    faq:
      "강동구 전체인테리어는 현장 구조와 공간 사용 목적을 확인하고 생활 또는 영업 동선을 기준으로 전체 공정을 계획합니다.",
    areas: [
      "강일동",
      "고덕동",
      "길동",
      "둔촌동",
      "명일동",
      "상일동",
      "성내동",
      "암사동",
      "천호동",
    ],
  },

  강북구: {
    intro:
      "강북구는 공동주택과 단독·다가구 주택, 생활밀착형 상업시설이 함께 분포해 기존 공간의 구조를 정확히 파악한 뒤 전체인테리어 방향을 정하는 과정이 중요합니다.",
    residential:
      "기존 주택과 공동주택은 공간별 면적과 수납, 채광과 이동 경로를 확인해 제한된 공간을 효율적으로 활용하는 전체 계획을 세웁니다.",
    commercial:
      "수유·미아 지역을 중심으로 형성된 생활상권은 업종과 고객 이용 방식에 맞춰 매장 내부의 기능과 분위기를 함께 구성합니다.",
    focus: "기존 구조를 활용한 효율적인 공간 재구성",
    feature: "아파트 · 빌라 · 주택 · 생활형 매장",
    cta: "강북구 공간의 구조와 평수를 알려주시면 전체인테리어 상담을 진행할 수 있습니다.",
    faq:
      "기존 건물의 구조와 설비 상태가 공간마다 다르므로 현장을 확인한 뒤 필요한 전체 공정의 범위를 정하는 것이 중요합니다.",
    areas: ["미아동", "번동", "수유동", "우이동"],
  },

  강서구: {
    intro:
      "강서구는 대규모 주거지역과 마곡 업무지구, 공항 주변 상권이 함께 발달해 주거와 업무·상업공간의 성격이 뚜렷하게 구분되는 지역입니다.",
    residential:
      "마곡·등촌·가양·화곡 등 다양한 주거공간은 가족 구성과 생활 동선을 중심으로 수납과 주방, 거실의 연결성을 계획합니다.",
    commercial:
      "마곡 업무지역과 발산·화곡 상권은 사무공간의 업무 효율 또는 매장의 고객 경험을 기준으로 전체 공간을 설계합니다.",
    focus: "주거 편의성과 업무·상업공간의 기능적 구성",
    feature: "아파트 · 오피스텔 · 사무실 · 상가",
    cta: "강서구에서 전체인테리어가 필요한 공간의 종류와 면적을 알려주세요.",
    faq:
      "강서구는 주거지역과 업무지역의 공간 목적이 다르기 때문에 현장의 실제 사용 방식에 맞춰 전체인테리어 방향을 구분합니다.",
    areas: [
      "가양동",
      "개화동",
      "공항동",
      "과해동",
      "내발산동",
      "등촌동",
      "마곡동",
      "방화동",
      "염창동",
      "오곡동",
      "오쇠동",
      "외발산동",
      "화곡동",
    ],
  },

  관악구: {
    intro:
      "관악구는 주거 밀집지역과 대학가·역세권 상권이 함께 자리해 주거공간에서는 효율적인 공간 활용을, 상업공간에서는 업종과 고객 흐름을 고려하는 것이 중요합니다.",
    residential:
      "아파트와 빌라, 다세대 주거공간은 실제 생활에 필요한 수납과 동선을 중심으로 공간 전체의 활용도를 높이는 방향을 계획합니다.",
    commercial:
      "신림·봉천 일대의 매장과 음식점, 카페 등은 고객 유입과 좌석·서비스 동선을 고려해 상업공간 전체를 구성합니다.",
    focus: "제한된 면적을 효율적으로 활용하는 전체 공간 계획",
    feature: "빌라 · 아파트 · 카페 · 음식점",
    cta: "관악구 전체인테리어 상담은 공간 종류와 대략적인 평수부터 알려주세요.",
    faq:
      "관악구의 주거 및 상업공간은 면적 활용이 중요한 경우가 많아 수납과 이동 동선을 함께 검토합니다.",
    areas: ["봉천동", "신림동", "남현동"],
  },

  광진구: {
    intro:
      "광진구는 아파트와 주택가, 대학가와 건대입구·구의·자양 상권이 함께 형성되어 공간의 이용자와 목적에 따른 맞춤형 전체 계획이 필요합니다.",
    residential:
      "자양·광장·구의 등의 주거공간은 가족 생활과 수납, 주방과 거실의 사용 방식을 고려해 편안한 주거환경을 계획합니다.",
    commercial:
      "건대입구와 대학가 주변 상업공간은 고객의 첫인상과 이동 흐름, 업종 특성을 반영해 공간 전체의 분위기를 구성합니다.",
    focus: "주거의 편안함과 상업공간의 명확한 콘셉트",
    feature: "아파트 · 주택 · 매장 · 카페",
    cta: "광진구 공간을 새롭게 계획하고 있다면 현장 위치와 용도를 알려주세요.",
    faq:
      "광진구 전체인테리어는 주거인지 상업공간인지에 따라 필요한 기능과 동선을 구분해 계획합니다.",
    areas: [
      "광장동",
      "구의동",
      "군자동",
      "능동",
      "자양동",
      "중곡동",
      "화양동",
    ],
  },

  구로구: {
    intro:
      "구로구는 주거지역과 디지털 업무지구, 전통적인 생활상권이 함께 있어 주거와 사무·상업공간의 기능을 명확하게 설정하는 것이 중요합니다.",
    residential:
      "구로·개봉·고척 등의 주거공간은 가족 생활에 필요한 공간 배치와 수납, 주방 및 거실 활용을 중심으로 계획합니다.",
    commercial:
      "구로디지털단지와 업무지역의 사무실은 업무 효율과 회의·공용공간의 흐름을 고려하고, 상가는 업종별 고객 동선을 중심으로 구성합니다.",
    focus: "생활공간과 업무공간의 기능을 명확하게 구분",
    feature: "아파트 · 사무실 · 상가 · 매장",
    cta: "구로구 전체인테리어가 필요한 현장의 용도와 면적을 알려주세요.",
    faq:
      "구로구는 업무시설과 주거시설의 공간 특성이 크게 다르므로 사용 목적을 기준으로 전체 설계 방향을 잡습니다.",
    areas: [
      "가리봉동",
      "개봉동",
      "고척동",
      "구로동",
      "궁동",
      "신도림동",
      "오류동",
      "온수동",
      "천왕동",
      "항동",
    ],
  },

  금천구: {
    intro:
      "금천구는 주거지역과 가산디지털단지의 업무시설이 공존해 실용적인 주거공간과 효율적인 업무공간에 대한 접근이 필요한 지역입니다.",
    residential:
      "독산·시흥 등의 주거공간은 실제 생활에 필요한 수납과 동선, 공간별 기능을 정리해 전체적인 사용 편의성을 높이는 방향을 계획합니다.",
    commercial:
      "가산동의 사무실과 상업시설은 인원 구성, 업무 방식, 회의 및 휴게공간의 필요성을 확인해 공간 전체를 구성합니다.",
    focus: "실용적인 주거공간과 업무 효율 중심의 사무공간",
    feature: "아파트 · 빌라 · 사무실 · 업무공간",
    cta: "금천구 인테리어 상담은 현장의 사용 목적과 평수를 알려주시면 됩니다.",
    faq:
      "금천구 상업·업무공간은 실제 근무 인원과 업무 흐름을 파악하면 보다 적합한 전체 공간 계획이 가능합니다.",
    areas: ["가산동", "독산동", "시흥동"],
  },

  노원구: {
    intro:
      "노원구는 대단지 아파트가 밀집한 대표적인 주거지역으로 가족 구성과 생활 패턴에 맞는 주거 전체인테리어의 비중이 높은 지역입니다.",
    residential:
      "상계·중계·하계·월계 등 아파트 주거공간은 거실과 주방의 연결, 가족별 침실, 수납과 생활 동선을 중심으로 전체 공간을 계획합니다.",
    commercial:
      "역세권과 주거지역 주변의 상가는 지역 고객의 이용 패턴과 업종 특성을 고려해 실용적인 상업공간을 구성합니다.",
    focus: "가족 생활 중심의 아파트 전체 공간 구성",
    feature: "아파트 · 학원 · 매장 · 생활상가",
    cta: "노원구 아파트 또는 상업공간 전체인테리어 상담을 받아보세요.",
    faq:
      "노원구 아파트 전체인테리어는 가족 구성과 기존 평면을 기준으로 수납, 동선, 공간별 사용 목적을 함께 확인합니다.",
    areas: ["공릉동", "상계동", "월계동", "중계동", "하계동"],
  },

  도봉구: {
    intro:
      "도봉구는 아파트와 주택이 함께 형성된 주거 중심 지역으로 기존 구조를 살펴 생활 편의성을 높이는 전체인테리어 계획이 중요합니다.",
    residential:
      "창동·쌍문·방학·도봉의 주거공간은 공간별 면적과 가족의 생활 방식을 고려해 수납과 이동 동선을 효율적으로 정리합니다.",
    commercial:
      "역세권과 주거지역의 생활형 상업공간은 고객 이용 방식과 업종 운영에 필요한 기능을 중심으로 전체 공간을 계획합니다.",
    focus: "생활 편의성과 공간 활용도를 높이는 주거 계획",
    feature: "아파트 · 빌라 · 주택 · 생활상가",
    cta: "도봉구 전체인테리어를 계획한다면 현장의 위치와 공간 유형을 알려주세요.",
    faq:
      "도봉구의 기존 주거공간은 구조와 설비 상태를 먼저 확인하고 필요한 전체 공사의 범위를 정합니다.",
    areas: ["도봉동", "방학동", "쌍문동", "창동"],
  },

  동대문구: {
    intro:
      "동대문구는 오래된 주거지역과 신축 공동주택, 대학가와 상업지역이 함께 있어 건물 연식과 공간 목적을 함께 살펴야 합니다.",
    residential:
      "답십리·전농·장안 등의 주거공간은 기존 구조와 설비를 확인하면서 현대적인 생활 방식에 맞는 전체 공간 구성을 계획합니다.",
    commercial:
      "청량리·회기·이문 등 상권과 대학가 주변의 상업공간은 유동 고객과 업종 특성을 고려해 매장 전체의 기능과 분위기를 설계합니다.",
    focus: "기존 공간의 조건을 반영한 현대적인 재구성",
    feature: "아파트 · 주택 · 매장 · 음식점",
    cta: "동대문구 전체인테리어 현장의 위치와 현재 상태를 알려주세요.",
    faq:
      "건물 연식과 기존 설비에 따라 필요한 공정이 달라질 수 있어 현장 확인 후 전체 공사 방향을 계획합니다.",
    areas: [
      "답십리동",
      "신설동",
      "용두동",
      "이문동",
      "장안동",
      "전농동",
      "제기동",
      "청량리동",
      "회기동",
      "휘경동",
    ],
  },

  동작구: {
    intro:
      "동작구는 아파트와 주택가, 대학가와 역세권 상권이 조화를 이루는 지역으로 생활환경과 상권 특성에 맞는 공간 계획이 필요합니다.",
    residential:
      "사당·상도·흑석 등 주거공간은 가족의 생활 동선과 수납, 주방과 거실의 사용 방식을 기준으로 전체 공간을 구성합니다.",
    commercial:
      "노량진과 사당 등 유동인구가 많은 지역의 상업공간은 고객 접근성과 내부 이동, 업종별 운영 효율을 함께 고려합니다.",
    focus: "생활 동선과 역세권 상업공간의 효율적인 구성",
    feature: "아파트 · 주택 · 학원 · 매장",
    cta: "동작구에서 전체인테리어가 필요하다면 공간의 용도와 평수를 알려주세요.",
    faq:
      "동작구 주거와 상업공간은 이용자의 생활 또는 고객 동선을 먼저 파악해 전체 공간의 방향을 정합니다.",
    areas: [
      "노량진동",
      "대방동",
      "동작동",
      "본동",
      "사당동",
      "상도동",
      "신대방동",
      "흑석동",
    ],
  },

  마포구: {
    intro:
      "마포구는 주거지역과 오피스, 카페·음식점·매장 등 다양한 상업공간이 밀집해 공간의 개성과 실제 운영 효율을 함께 고려해야 하는 지역입니다.",
    residential:
      "공덕·아현·상암 등의 주거공간은 가족 생활과 수납, 주방과 거실의 연결성을 중심으로 편안하고 정돈된 전체 공간을 계획합니다.",
    commercial:
      "홍대·합정·연남·망원 등 상권에서는 브랜드 콘셉트와 고객 경험, 좌석 및 서비스 동선을 고려한 상업 전체인테리어가 중요합니다.",
    focus: "브랜드 개성과 실제 운영 효율을 함께 담는 공간",
    feature: "아파트 · 카페 · 음식점 · 사무실",
    cta: "마포구 주거 또는 상업공간의 전체인테리어 방향을 상담해보세요.",
    faq:
      "마포구 상업공간은 업종과 브랜드 이미지가 다양하므로 고객이 공간을 이용하는 흐름까지 함께 고려합니다.",
    areas: [
      "공덕동",
      "구수동",
      "노고산동",
      "당인동",
      "대흥동",
      "도화동",
      "동교동",
      "마포동",
      "망원동",
      "상수동",
      "상암동",
      "서교동",
      "성산동",
      "신공덕동",
      "신수동",
      "아현동",
      "연남동",
      "염리동",
      "용강동",
      "중동",
      "창전동",
      "토정동",
      "하중동",
      "합정동",
      "현석동",
    ],
  },

  서대문구: {
    intro:
      "서대문구는 아파트와 주택가, 대학가와 도심 접근성이 좋은 상권이 함께 있어 공간별 이용 목적에 맞춘 전체적인 구성이 필요합니다.",
    residential:
      "북아현·홍제·남가좌 등 주거공간은 생활 동선과 수납, 가족 구성에 맞춰 각 공간의 기능을 자연스럽게 연결합니다.",
    commercial:
      "신촌·창천 일대와 대학가 주변 상업공간은 고객층과 업종의 성격을 반영해 매장의 분위기와 운영 동선을 함께 계획합니다.",
    focus: "주거의 실용성과 대학가 상권의 공간 개성",
    feature: "아파트 · 주택 · 카페 · 매장",
    cta: "서대문구 전체인테리어 상담은 위치와 공간 종류부터 알려주세요.",
    faq:
      "서대문구는 주거와 대학가 상권의 공간 특성이 다르기 때문에 사용 목적을 먼저 구분해 계획합니다.",
    areas: [
      "남가좌동",
      "냉천동",
      "대신동",
      "대현동",
      "미근동",
      "북가좌동",
      "북아현동",
      "신촌동",
      "연희동",
      "영천동",
      "옥천동",
      "창천동",
      "천연동",
      "충정로2가",
      "충정로3가",
      "합동",
      "현저동",
      "홍은동",
      "홍제동",
    ],
  },

  서초구: {
    intro:
      "서초구는 아파트와 고급 주거공간, 사무실과 전문서비스 업종의 상업공간이 고르게 분포해 완성도와 기능성을 함께 고려하는 전체인테리어가 중요합니다.",
    residential:
      "반포·잠원·방배·서초 등 주거공간은 가족의 생활 방식과 수납, 주방과 거실의 연결, 마감의 통일성을 고려해 전체 공간을 계획합니다.",
    commercial:
      "서초·양재 등 업무지역의 사무실과 상업공간은 방문객과 직원 동선, 업무 특성과 공간의 신뢰감을 함께 고려합니다.",
    focus: "정돈된 디자인과 기능성을 균형 있게 구성",
    feature: "아파트 · 사무실 · 상가 · 전문업종 공간",
    cta: "서초구 전체인테리어를 준비한다면 현장의 구조와 원하는 방향을 상담해보세요.",
    faq:
      "서초구 전체인테리어는 디자인의 통일성과 실제 사용 편의성을 함께 고려해 공간 전체를 계획합니다.",
    areas: [
      "내곡동",
      "반포동",
      "방배동",
      "서초동",
      "신원동",
      "양재동",
      "염곡동",
      "우면동",
      "원지동",
      "잠원동",
    ],
  },

  성동구: {
    intro:
      "성동구는 아파트 주거지역과 성수동을 중심으로 한 업무·브랜드·상업공간이 함께 성장해 주거와 상업 인테리어의 성격이 다양합니다.",
    residential:
      "옥수·금호·행당 등 주거공간은 가족의 생활 동선과 수납, 거실과 주방의 연결을 중심으로 편안한 전체 공간을 계획합니다.",
    commercial:
      "성수동의 매장, 쇼룸, 카페, 사무공간은 브랜드가 전달하고자 하는 분위기와 고객의 공간 경험을 함께 고려해 구성합니다.",
    focus: "편안한 주거와 브랜드 중심 상업공간의 균형",
    feature: "아파트 · 쇼룸 · 매장 · 사무실",
    cta: "성동구의 주거 또는 상업공간을 전체적으로 바꾸고 싶다면 상담해보세요.",
    faq:
      "성동구는 주거공간뿐 아니라 성수동의 다양한 상업·브랜드 공간이 있어 목적에 맞는 별도의 공간 전략이 필요합니다.",
    areas: [
      "금호동1가",
      "금호동2가",
      "금호동3가",
      "금호동4가",
      "도선동",
      "마장동",
      "사근동",
      "상왕십리동",
      "성수동1가",
      "성수동2가",
      "송정동",
      "옥수동",
      "용답동",
      "응봉동",
      "하왕십리동",
      "행당동",
      "홍익동",
    ],
  },

  성북구: {
    intro:
      "성북구는 아파트와 단독·다가구 주택, 대학가와 생활상권이 함께 형성되어 기존 건물의 특성과 생활 방식에 맞춘 공간 재구성이 중요합니다.",
    residential:
      "길음·돈암·정릉·종암 등의 주거공간은 가족 구성과 기존 구조를 살펴 수납과 이동 동선을 효율적으로 정리합니다.",
    commercial:
      "성신여대와 대학가 주변의 매장·카페·음식점은 주요 고객층과 업종 특성을 고려해 상업공간의 분위기와 기능을 함께 계획합니다.",
    focus: "기존 주거구조 개선과 생활상권에 맞는 공간 구성",
    feature: "아파트 · 주택 · 카페 · 매장",
    cta: "성북구 전체인테리어가 필요한 공간의 현재 상태와 평수를 알려주세요.",
    faq:
      "성북구는 다양한 연식의 주거건물이 있어 기존 구조와 설비 상태를 확인하는 과정이 중요합니다.",
    areas: [
      "길음동",
      "돈암동",
      "동선동1가",
      "동선동2가",
      "동선동3가",
      "동선동4가",
      "동선동5가",
      "동소문동1가",
      "동소문동2가",
      "동소문동3가",
      "동소문동4가",
      "동소문동5가",
      "동소문동6가",
      "동소문동7가",
      "보문동1가",
      "보문동2가",
      "보문동3가",
      "보문동4가",
      "보문동5가",
      "보문동6가",
      "보문동7가",
      "삼선동1가",
      "삼선동2가",
      "삼선동3가",
      "삼선동4가",
      "삼선동5가",
      "상월곡동",
      "석관동",
      "성북동",
      "성북동1가",
      "안암동1가",
      "안암동2가",
      "안암동3가",
      "안암동4가",
      "안암동5가",
      "장위동",
      "정릉동",
      "종암동",
      "하월곡동",
    ],
  },

  송파구: {
    intro:
      "송파구는 대규모 아파트 주거지역과 잠실을 중심으로 한 상업·업무시설이 함께 발달해 주거의 생활 품질과 상업공간의 운영 효율을 함께 고려할 수 있는 지역입니다.",
    residential:
      "잠실·문정·가락·오금 등 아파트와 주거공간은 가족 구성과 생활 패턴을 기준으로 주방, 거실, 침실과 수납을 하나의 흐름으로 계획합니다.",
    commercial:
      "잠실과 문정, 송파 주요 상권의 매장과 사무공간은 고객 접근성, 직원 동선과 업종의 성격을 반영해 전체 공간을 구성합니다.",
    focus: "아파트 생활 품질과 상업·업무공간의 효율을 함께 고려",
    feature: "아파트 · 매장 · 사무실 · 상가",
    cta: "송파구 전체인테리어 상담은 공간 위치와 평수를 알려주시면 됩니다.",
    faq:
      "송파구는 대단지 아파트와 대형 상권이 함께 있어 주거와 상업공간의 목적에 따라 서로 다른 전체 계획이 필요합니다.",
    areas: [
      "가락동",
      "거여동",
      "마천동",
      "문정동",
      "방이동",
      "삼전동",
      "석촌동",
      "송파동",
      "신천동",
      "오금동",
      "잠실동",
      "장지동",
      "풍납동",
    ],
  },

  양천구: {
    intro:
      "양천구는 목동을 중심으로 아파트 주거지역과 교육·생활상권이 발달해 가족 중심의 주거공간과 지역 생활형 상업공간의 구성이 중요합니다.",
    residential:
      "목동·신정·신월의 주거공간은 가족 구성과 자녀의 생활, 수납, 주방과 거실 활용을 고려해 전체 공간의 편의성을 계획합니다.",
    commercial:
      "주거지역과 교육시설 주변의 학원, 매장, 생활상가는 이용자 특성과 내부 동선을 고려해 기능적인 공간을 구성합니다.",
    focus: "가족 생활 중심 주거공간과 교육·생활상권 구성",
    feature: "아파트 · 학원 · 매장 · 생활상가",
    cta: "양천구 전체인테리어가 필요하다면 공간 종류와 면적을 알려주세요.",
    faq:
      "양천구 주거공간은 가족의 실제 생활과 수납 요구를 확인해 공간별 기능을 계획하는 것이 중요합니다.",
    areas: ["목동", "신월동", "신정동"],
  },

  영등포구: {
    intro:
      "영등포구는 여의도 업무지구와 대규모 주거단지, 전통 상권이 함께 있어 사무실·상업공간과 주거공간의 요구가 다양하게 나타납니다.",
    residential:
      "당산·문래·신길 등 주거공간은 가족 생활과 수납, 공간 연결성을 고려해 편안하고 실용적인 전체인테리어를 계획합니다.",
    commercial:
      "여의도와 영등포의 사무실·상업공간은 업무 인원과 방문객, 회의·공용공간, 고객 동선을 고려해 기능적으로 구성합니다.",
    focus: "주거 편의성과 도심 업무공간의 효율적인 설계",
    feature: "아파트 · 사무실 · 상가 · 매장",
    cta: "영등포구 주거 또는 업무공간 전체인테리어를 상담해보세요.",
    faq:
      "영등포구의 사무실 인테리어는 실제 근무 인원과 업무 방식, 방문객 동선을 확인한 뒤 공간을 구성합니다.",
    areas: [
      "당산동",
      "당산동1가",
      "당산동2가",
      "당산동3가",
      "당산동4가",
      "당산동5가",
      "당산동6가",
      "대림동",
      "도림동",
      "문래동1가",
      "문래동2가",
      "문래동3가",
      "문래동4가",
      "문래동5가",
      "문래동6가",
      "신길동",
      "양평동",
      "양평동1가",
      "양평동2가",
      "양평동3가",
      "양평동4가",
      "양평동5가",
      "양평동6가",
      "양화동",
      "여의도동",
      "영등포동",
      "영등포동1가",
      "영등포동2가",
      "영등포동3가",
      "영등포동4가",
      "영등포동5가",
      "영등포동6가",
      "영등포동7가",
      "영등포동8가",
    ],
  },

  용산구: {
    intro:
      "용산구는 아파트와 고급 주거공간, 오래된 주택, 오피스와 개성 있는 상업공간이 공존해 공간마다 서로 다른 접근이 필요한 지역입니다.",
    residential:
      "한남·이촌·서빙고 등 주거공간은 생활 동선과 수납, 공간의 개방감과 마감의 통일성을 고려해 전체적인 주거환경을 계획합니다.",
    commercial:
      "이태원·한남·용산 일대의 매장과 카페, 사무공간은 브랜드 정체성과 방문 고객의 공간 경험을 고려해 전체 콘셉트를 구성합니다.",
    focus: "주거의 완성도와 개성 있는 상업공간의 조화",
    feature: "아파트 · 주택 · 카페 · 매장",
    cta: "용산구 전체인테리어를 계획 중이라면 공간의 위치와 용도를 알려주세요.",
    faq:
      "용산구는 건물 유형과 연식이 다양해 현장별 구조와 설비를 확인한 뒤 전체인테리어 방향을 정하는 것이 중요합니다.",
    areas: [
      "갈월동",
      "남영동",
      "도원동",
      "동빙고동",
      "동자동",
      "문배동",
      "보광동",
      "산천동",
      "서계동",
      "서빙고동",
      "신계동",
      "신창동",
      "용문동",
      "용산동1가",
      "용산동2가",
      "용산동3가",
      "용산동4가",
      "용산동5가",
      "용산동6가",
      "원효로1가",
      "원효로2가",
      "원효로3가",
      "원효로4가",
      "이촌동",
      "이태원동",
      "주성동",
      "청암동",
      "청파동1가",
      "청파동2가",
      "청파동3가",
      "한강로1가",
      "한강로2가",
      "한강로3가",
      "한남동",
      "효창동",
      "후암동",
    ],
  },

  은평구: {
    intro:
      "은평구는 아파트와 주택, 신도시형 주거지역과 기존 생활상권이 함께 형성되어 가족 생활과 공간 활용을 고려한 주거 전체인테리어 수요가 다양한 지역입니다.",
    residential:
      "진관·불광·응암·녹번 등 주거공간은 가족 구성과 생활 동선을 기준으로 거실, 주방, 침실과 수납공간을 전체적으로 계획합니다.",
    commercial:
      "연신내와 불광 등 생활상권의 매장과 음식점, 카페는 지역 고객의 이용 방식과 업종 운영에 맞춰 공간을 구성합니다.",
    focus: "가족 생활과 지역 생활상권에 맞춘 실용적 공간",
    feature: "아파트 · 주택 · 매장 · 음식점",
    cta: "은평구 주거 또는 상업공간의 전체인테리어 상담을 받아보세요.",
    faq:
      "은평구는 신축 공동주택과 기존 주택이 함께 있어 건물과 공간의 현재 조건을 먼저 확인합니다.",
    areas: [
      "갈현동",
      "구산동",
      "녹번동",
      "대조동",
      "불광동",
      "수색동",
      "신사동",
      "역촌동",
      "응암동",
      "증산동",
      "진관동",
    ],
  },

  종로구: {
    intro:
      "종로구는 전통적인 건축물과 주택, 도심 업무시설, 개성 있는 매장과 상업공간이 공존해 건물의 기존 특성과 새로운 사용 목적을 함께 고려해야 합니다.",
    residential:
      "청운·효자·평창·부암 등 주거공간은 기존 건축의 구조와 생활 방식, 채광과 공간 연결성을 확인해 전체적인 주거환경을 계획합니다.",
    commercial:
      "광화문·종로·서촌·북촌 일대의 매장과 사무공간은 건물 특성과 상권의 분위기, 브랜드 콘셉트를 함께 고려해 공간을 구성합니다.",
    focus: "기존 건축의 특성과 새로운 공간 목적의 조화",
    feature: "주택 · 매장 · 사무실 · 카페",
    cta: "종로구 전체인테리어는 현장 위치와 건물 형태를 알려주시면 상담에 도움이 됩니다.",
    faq:
      "종로구는 오래된 건축물과 다양한 형태의 공간이 많아 기존 구조와 설비를 충분히 확인한 뒤 전체 공사를 계획해야 합니다.",
    areas: [
      "가회동",
      "견지동",
      "경운동",
      "계동",
      "공평동",
      "관수동",
      "관철동",
      "관훈동",
      "교남동",
      "교북동",
      "구기동",
      "궁정동",
      "권농동",
      "낙원동",
      "내수동",
      "내자동",
      "누상동",
      "누하동",
      "당주동",
      "도렴동",
      "돈의동",
      "동숭동",
      "명륜1가",
      "명륜2가",
      "명륜3가",
      "명륜4가",
      "묘동",
      "무악동",
      "봉익동",
      "부암동",
      "사간동",
      "사직동",
      "삼청동",
      "서린동",
      "세종로",
      "소격동",
      "송월동",
      "송현동",
      "수송동",
      "숭인동",
      "신교동",
      "신문로1가",
      "신문로2가",
      "신영동",
      "안국동",
      "연건동",
      "연지동",
      "예지동",
      "옥인동",
      "와룡동",
      "운니동",
      "원남동",
      "원서동",
      "이화동",
      "익선동",
      "인사동",
      "인의동",
      "장사동",
      "재동",
      "적선동",
      "종로1가",
      "종로2가",
      "종로3가",
      "종로4가",
      "종로5가",
      "종로6가",
      "중학동",
      "창성동",
      "창신동",
      "청운동",
      "청진동",
      "체부동",
      "충신동",
      "통의동",
      "통인동",
      "팔판동",
      "평동",
      "평창동",
      "필운동",
      "행촌동",
      "혜화동",
      "홍지동",
      "홍파동",
      "화동",
      "효자동",
      "효제동",
      "훈정동",
    ],
  },

  중구: {
    intro:
      "서울 중구는 도심 업무시설과 상업시설, 주거공간이 밀집한 지역으로 제한된 공간을 효율적으로 활용하면서도 공간 목적을 명확하게 표현하는 전체인테리어가 중요합니다.",
    residential:
      "신당·황학·중림 등 주거공간은 가족의 생활과 수납, 주방과 거실의 연결성을 고려해 편안하고 효율적인 전체 공간을 계획합니다.",
    commercial:
      "명동·을지로·충무로 등 도심 상업지역은 고객 유입과 업무 동선, 매장 또는 사무공간의 정체성을 고려해 전체 구성을 계획합니다.",
    focus: "도심 공간의 효율성과 상업공간의 명확한 목적",
    feature: "아파트 · 사무실 · 매장 · 상가",
    cta: "서울 중구 전체인테리어가 필요하다면 공간의 위치와 평수를 알려주세요.",
    faq:
      "중구는 도심 건물과 상업시설의 형태가 다양해 현장 접근 조건과 기존 구조를 함께 확인하는 것이 중요합니다.",
    areas: [
      "광희동1가",
      "광희동2가",
      "남대문로1가",
      "남대문로2가",
      "남대문로3가",
      "남대문로4가",
      "남대문로5가",
      "남산동1가",
      "남산동2가",
      "남산동3가",
      "남창동",
      "남학동",
      "다동",
      "만리동1가",
      "만리동2가",
      "명동1가",
      "명동2가",
      "무교동",
      "무학동",
      "묵정동",
      "방산동",
      "봉래동1가",
      "봉래동2가",
      "북창동",
      "산림동",
      "삼각동",
      "서소문동",
      "소공동",
      "수표동",
      "수하동",
      "순화동",
      "신당동",
      "쌍림동",
      "예관동",
      "예장동",
      "오장동",
      "을지로1가",
      "을지로2가",
      "을지로3가",
      "을지로4가",
      "을지로5가",
      "을지로6가",
      "을지로7가",
      "의주로1가",
      "의주로2가",
      "인현동1가",
      "인현동2가",
      "입정동",
      "장교동",
      "장충동1가",
      "장충동2가",
      "저동1가",
      "저동2가",
      "정동",
      "주교동",
      "주자동",
      "중림동",
      "초동",
      "충무로1가",
      "충무로2가",
      "충무로3가",
      "충무로4가",
      "충무로5가",
      "충정로1가",
      "태평로1가",
      "태평로2가",
      "필동1가",
      "필동2가",
      "필동3가",
      "황학동",
      "회현동1가",
      "회현동2가",
      "회현동3가",
      "흥인동",
    ],
  },

  중랑구: {
    intro:
      "중랑구는 아파트와 빌라, 주택이 고르게 분포한 주거지역과 생활상권이 함께 있어 실용성과 공간 활용도를 중심으로 한 전체인테리어가 중요합니다.",
    residential:
      "면목·상봉·신내·중화 등의 주거공간은 가족 생활과 수납, 공간별 이동 흐름을 확인해 일상에서 편리한 전체 공간을 계획합니다.",
    commercial:
      "상봉과 면목 등 생활상권의 매장, 음식점, 카페는 지역 고객의 이용 패턴과 업종 운영에 필요한 기능을 중심으로 구성합니다.",
    focus: "실생활에 필요한 기능과 공간 활용도를 우선한 계획",
    feature: "아파트 · 빌라 · 매장 · 음식점",
    cta: "중랑구 전체인테리어가 필요한 공간의 종류와 면적을 알려주세요.",
    faq:
      "중랑구 주거공간은 실제 가족의 생활 방식과 필요한 수납량을 확인하면 더욱 효율적인 전체 공간 계획이 가능합니다.",
    areas: [
      "망우동",
      "면목동",
      "묵동",
      "상봉동",
      "신내동",
      "중화동",
    ],
  },
};

const portfolio = [
  {
    id: "junggu",
    title: "서울 중구 40평형 아파트 전체인테리어",
    location: "서울 중구",
    category: "주거 전체인테리어",
    size: "40평형",
    image: "/images/junggu-apartment-40.png",
    match: ["중구"],
  },
  {
    id: "cheongun",
    title: "종로구 청운동 20평형 매장 전체인테리어",
    location: "서울 종로구 청운동",
    category: "상업 전체인테리어",
    size: "20평형",
    image: "/images/cheongun-store-20.png",
    match: ["종로구"],
  },
  {
    id: "yeoksam",
    title: "강남구 역삼동 35평형 사무실 전체인테리어",
    location: "서울 강남구 역삼동",
    category: "상업 전체인테리어",
    size: "35평형",
    image: "/images/yeoksam-office-35.png",
    match: ["강남구"],
  },
  {
    id: "jamsil",
    title: "송파구 잠실동 32평형 아파트 전체인테리어",
    location: "서울 송파구 잠실동",
    category: "주거 전체인테리어",
    size: "32평형",
    image: "/images/jamsil-apartment-32.png",
    match: ["송파구"],
  },
  {
    id: "seongsu",
    title: "성동구 성수동 25평형 매장 전체인테리어",
    location: "서울 성동구 성수동",
    category: "상업 전체인테리어",
    size: "25평형",
    image: "/images/seongsu-store-25.png",
    match: ["성동구"],
  },
  {
    id: "mapo",
    title: "마포구 45평형 사무실 전체인테리어",
    location: "서울 마포구",
    category: "상업 전체인테리어",
    size: "45평형",
    image: "/images/mapo-office-45.png",
    match: ["마포구"],
  },
];

const heroTitles = [
  (district: string) => `${district} 인테리어업체,\n생활 동선을 다시 설계합니다`,
  (district: string) => `${district} 전체인테리어,\n집과 일터의 흐름을 바꿉니다`,
  (district: string) => `${district} 주거 인테리어,\n생활 방식에 맞춰 전체를 계획합니다`,
  (district: string) => `${district} 상업 인테리어,\n운영 동선부터 공간을 설계합니다`,
  (district: string) => `${district} 인테리어,\n아파트부터 매장까지 한 번에`,
  (district: string) => `${district} 인테리어업체,\n구조와 기능부터 차근차근`,
  (district: string) => `${district} 전체인테리어,\n공간의 목적을 먼저 봅니다`,
  (district: string) => `${district} 인테리어,\n주거와 상업을 다르게 설계합니다`,
  (district: string) => `${district} 아파트·주택 인테리어,\n생활 중심으로 다시 구성합니다`,
  (district: string) => `${district} 매장·사무실 인테리어,\n운영 효율을 공간에 담습니다`,
  (district: string) => `${district} 인테리어업체,\n전체 공간의 연결성을 만듭니다`,
  (district: string) => `${district} 전체인테리어,\n현장 조건에 맞춰 설계합니다`,
  (district: string) => `${district} 인테리어,\n디자인보다 사용성을 먼저`,
  (district: string) => `${district} 공간 리뉴얼,\n처음부터 끝까지 전체인테리어`,
  (district: string) => `${district} 주거·상업 인테리어,\n공간마다 다른 답을 찾습니다`,
  (district: string) => `${district} 인테리어업체,\n아파트·상가·사무실 맞춤 계획`,
  (district: string) => `${district} 전체인테리어,\n구조·동선·마감까지 함께`,
  (district: string) => `${district} 인테리어,\n공간의 쓰임을 새롭게 정리합니다`,
  (district: string) => `${district} 집·매장 인테리어,\n생활과 운영을 함께 고려합니다`,
  (district: string) => `${district} 인테리어업체,\n현장부터 전체 공정을 설계합니다`,
  (district: string) => `${district} 전체인테리어,\n공간 활용도를 높이는 방향으로`,
  (district: string) => `${district} 인테리어,\n주거는 편안하게 상업은 효율적으로`,
  (district: string) => `${district} 아파트·사무실 인테리어,\n공간 목적에 맞춘 전체 시공`,
  (district: string) => `${district} 인테리어업체,\n부분이 아닌 전체를 봅니다`,
  (district: string) => `${district} 전체인테리어,\n실제 사용하는 사람을 중심으로`,
];

const residentialHeadings = [
  (district: string) => `${district} 주거 전체인테리어`,
  (district: string) => `${district} 아파트·주택 전체인테리어`,
  (district: string) => `${district} 생활공간 전체인테리어`,
  (district: string) => `${district} 주거공간을 새롭게`,
];

const commercialHeadings = [
  (district: string) => `${district} 상업 전체인테리어`,
  (district: string) => `${district} 매장·사무실 전체인테리어`,
  (district: string) => `${district} 상업공간 인테리어`,
  (district: string) => `${district} 비즈니스 공간 전체인테리어`,
];

const guideHeadings = [
  "공간의 구조부터 확인합니다",
  "디자인보다 먼저 사용 목적을 봅니다",
  "전체 공간의 연결성을 생각합니다",
  "현장 조건에 맞는 공사 계획이 중요합니다",
  "같은 평수라도 공간의 답은 다릅니다",
];

const processSets = [
  [
    ["01", "상담", "위치와 공간 종류, 평수, 공사 목적과 원하는 방향을 확인합니다."],
    ["02", "현장 확인", "기존 구조와 설비, 동선과 실제 공사 조건을 확인합니다."],
    ["03", "전체 계획", "공간 전체의 디자인과 기능, 필요한 공정을 정리합니다."],
    ["04", "견적 협의", "전체 공사 범위와 일정에 맞춰 세부 내용을 협의합니다."],
    ["05", "시공 진행", "정해진 계획을 기준으로 공정 순서에 맞춰 시공합니다."],
    ["06", "최종 점검", "완료 후 주요 마감과 공간 전체의 상태를 확인합니다."],
  ],
  [
    ["01", "공간 파악", "현장 위치와 면적, 현재 공간의 상태와 사용 목적을 확인합니다."],
    ["02", "방문 확인", "현장을 살펴 구조와 설비, 공사에 필요한 조건을 파악합니다."],
    ["03", "방향 설정", "생활 또는 영업 목적에 맞는 전체 공간 방향을 설정합니다."],
    ["04", "공사 계획", "필요한 공정과 진행 순서, 전체 일정을 구체적으로 정리합니다."],
    ["05", "현장 시공", "공정 간 연결을 확인하며 전체 시공을 순차적으로 진행합니다."],
    ["06", "마감 확인", "전체 공사 후 마감과 주요 시공 부분을 최종 확인합니다."],
  ],
  [
    ["01", "초기 문의", "공간 유형과 평수, 지역과 원하는 전체인테리어 방향을 확인합니다."],
    ["02", "조건 분석", "현장의 구조와 설비, 공간 활용 조건을 직접 살펴봅니다."],
    ["03", "설계 방향", "주거 또는 상업공간의 이용 방식에 맞춰 방향을 구체화합니다."],
    ["04", "범위 확정", "전체 공사에 필요한 작업과 일정, 견적 범위를 협의합니다."],
    ["05", "공정 관리", "각 공정이 자연스럽게 이어질 수 있도록 현장을 진행합니다."],
    ["06", "완료 점검", "마감 상태와 공간의 전체적인 완성도를 마지막으로 확인합니다."],
  ],
];

const faqQuestionSets = [
  (district: string) => `${district} 전체 지역에서 상담할 수 있나요?`,
  (district: string) => `${district} 아파트와 상가 모두 가능한가요?`,
  (district: string) => `${district} 인테리어 상담은 어떻게 시작하나요?`,
];

const metaTitleLeads = [
  (district: string) => `${district} 인테리어업체`,
  (district: string) => `${district} 전체인테리어`,
  (district: string) => `${district} 아파트 인테리어업체`,
  (district: string) => `${district} 주택 인테리어업체`,
  (district: string) => `${district} 매장 인테리어업체`,
  (district: string) => `${district} 사무실 인테리어업체`,
  (district: string) => `${district} 주거 인테리어업체`,
  (district: string) => `${district} 상업 인테리어업체`,
  (district: string) => `${district} 집 인테리어`,
  (district: string) => `${district} 상가 인테리어`,
  (district: string) => `${district} 주거·상업 인테리어`,
  (district: string) => `${district} 공간 전체인테리어`,
] as const;

const metaTitleTails = [
  "아파트·주택·매장·사무실 전체시공",
  "집·아파트·상가 공간 전체 설계",
  "주거공간과 상업공간 맞춤 전체시공",
  "생활동선과 운영동선을 고려한 공간설계",
  "아파트·빌라·주택부터 상가·사무실까지",
  "현장 구조에 맞춘 주거·상업 전체인테리어",
  "매장·카페·사무실과 주거공간 전체시공",
  "공간 구조·동선·마감까지 전체 계획",
  "집·주택·매장·상가 전체인테리어 상담",
  "주거와 상업 공간을 목적에 맞게 설계",
  "아파트·오피스텔·매장·사무실 전체공사",
  "부분시공이 아닌 공간 전체인테리어",
] as const;

const metaDescriptionTemplates = [
  (district: string, feature: string) =>
    `${district} 인테리어업체 더세이브인테리어. ${feature}을 중심으로 아파트·집·주택과 매장·상가·사무실의 전체인테리어를 상담합니다. 현장 구조와 공간 목적을 확인해 전체 공사 방향을 계획합니다.`,
  (district: string, feature: string) =>
    `${district} 전체인테리어를 준비한다면 공간의 용도와 동선부터 확인하세요. ${feature}을 비롯해 아파트·주택·매장·사무실 등 주거와 상업공간의 전체 설계 및 시공을 안내합니다.`,
  (district: string, feature: string) =>
    `${district} 아파트·주택 인테리어부터 매장·상가·사무실 인테리어까지. ${feature}을 고려해 생활공간과 운영공간의 쓰임에 맞는 전체인테리어 방향을 계획합니다.`,
  (district: string, feature: string) =>
    `${district} 인테리어 상담 페이지입니다. ${feature}을 바탕으로 집·아파트·주택의 생활 동선과 매장·상가·사무실의 운영 동선을 구분해 공간 전체를 설계합니다.`,
  (district: string, feature: string) =>
    `${district} 주거·상업 인테리어업체를 찾는다면 현장 상태와 공간 목적을 먼저 확인해야 합니다. ${feature}과 함께 구조, 동선, 수납, 운영 효율을 전체 공사 범위에 반영합니다.`,
  (district: string, feature: string) =>
    `${district} 집·아파트·매장·사무실 전체인테리어 상담. ${feature}을 포함해 현재 구조에서 유지할 부분과 새롭게 구성할 부분을 나누고 전체 시공 방향을 정리합니다.`,
  (district: string, feature: string) =>
    `${district} 상가·매장 인테리어와 아파트·주택 인테리어를 공간 성격에 맞춰 진행합니다. ${feature}을 기준으로 디자인과 기능이 자연스럽게 연결되도록 전체 공정을 계획합니다.`,
  (district: string, feature: string) =>
    `${district} 인테리어업체 더세이브인테리어는 ${feature}을 고려해 주거와 상업공간을 각각 다른 기준으로 설계합니다. 아파트·집·주택·매장·상가·사무실 전체인테리어 상담이 가능합니다.`,
  (district: string, feature: string) =>
    `${district} 전체인테리어는 같은 평수라도 공간 용도와 기존 구조에 따라 계획이 달라집니다. ${feature}을 확인하고 주거공간과 상업공간의 공사 범위와 진행 순서를 현장에 맞춰 정리합니다.`,
  (district: string, feature: string) =>
    `${district} 인테리어를 계획할 때는 디자인 이미지보다 실제 사용성과 공사 조건이 중요합니다. ${feature}을 바탕으로 아파트·주택·매장·사무실 전체 공간의 방향을 상담합니다.`,
  (district: string, feature: string) =>
    `${district} 주거 전체인테리어와 상업 전체인테리어 안내. ${feature}을 중심으로 집·아파트·주택의 생활 편의성과 매장·상가·사무실의 운영 효율을 함께 검토합니다.`,
  (district: string, feature: string) =>
    `${district} 인테리어업체 상담 전 공간 종류와 면적, 현재 구조를 확인해보세요. ${feature}을 고려해 아파트·주택·상가·매장·사무실의 전체 시공 범위를 구체적으로 계획합니다.`,
] as const;

const editorialAngles = [
  "기존 구조와 설비 상태를 먼저 확인해 불필요한 변경을 줄이는 계획",
  "가족의 생활 동선과 수납을 중심으로 주거공간의 연결성을 정리하는 방식",
  "고객 동선과 직원 업무 흐름을 함께 고려하는 상업공간 구성",
  "공간의 첫인상과 실제 사용 편의성을 함께 맞추는 전체인테리어 계획",
  "주방·거실·침실처럼 서로 연결되는 공간의 관계를 우선하는 주거 설계",
  "매장·상가·사무실의 운영 목적에 맞춰 기능과 분위기를 함께 정리하는 방식",
  "같은 평수라도 현장 구조와 사용 목적에 따라 공사 범위를 달리 보는 접근",
  "마감재 선택보다 공간의 목적과 동선을 먼저 정리하는 전체공간 계획",
  "주거와 상업공간을 구분해 실제 이용자의 움직임을 기준으로 설계하는 방식",
  "현재 공간에서 유지할 요소와 새롭게 구성할 요소를 나눠 전체 방향을 잡는 계획",
  "디자인 이미지보다 현장 조건과 사용성을 먼저 확인하는 인테리어 접근",
  "전체 공정이 자연스럽게 이어지도록 설계·공사 순서를 함께 보는 방식",
  "수납과 이동 경로를 함께 정리해 생활공간의 효율을 높이는 방식",
  "고객이 머무는 공간과 직원이 일하는 공간의 역할을 구분하는 상업공간 계획",
  "채광과 개방감, 가구 배치까지 실제 사용 장면을 기준으로 검토하는 접근",
  "공간별 기능을 나누되 전체 분위기는 하나의 흐름으로 연결하는 설계 방식",
] as const;

const localGuideLeadTemplates = [
  (district: string) => `${district}에서 전체인테리어를 준비할 때 먼저 확인할 것`,
  (district: string) => `${district} 인테리어 계획을 현장 기준으로 정리하는 방법`,
  (district: string) => `${district} 주거·상업공간을 전체적으로 바꿀 때의 기준`,
  (district: string) => `${district} 인테리어업체 상담 전 체크할 공간 조건`,
  (district: string) => `${district} 전체인테리어에서 구조와 동선을 함께 보는 이유`,
  (district: string) => `${district} 아파트·주택 인테리어에서 생활동선을 보는 방법`,
  (district: string) => `${district} 매장·사무실 인테리어에서 운영동선을 정리하는 기준`,
  (district: string) => `${district} 인테리어 공사 범위를 정하기 전에 확인할 사항`,
  (district: string) => `${district} 공간을 전체적으로 바꿀 때 순서를 잡는 방법`,
  (district: string) => `${district} 주거와 상업 인테리어를 다르게 계획해야 하는 이유`,
  (district: string) => `${district} 전체인테리어 상담 전에 준비하면 좋은 정보`,
  (district: string) => `${district} 인테리어에서 디자인보다 먼저 볼 현장 조건`,
] as const;

const ctaHeadings = [
  (district: string) => `${district} 전체인테리어, 현장 정보부터 알려주세요`,
  (district: string) => `${district} 공간을 새롭게 바꿀 계획이 있으신가요?`,
  (district: string) => `${district} 주거·상업 인테리어 상담을 시작하세요`,
  (district: string) => `${district} 인테리어, 구조와 용도부터 함께 확인합니다`,
  (district: string) => `${district} 아파트·매장 전체인테리어 상담`,
  (district: string) => `${district} 집·사무실 인테리어 계획을 상담하세요`,
  (district: string) => `${district} 전체 공간 시공, 방문 상담부터 시작합니다`,
  (district: string) => `${district} 인테리어 공사 범위를 함께 정리해드립니다`,
  (district: string) => `${district} 공간 목적에 맞는 전체인테리어 상담`,
  (district: string) => `${district} 주거와 상업공간, 각각 맞는 방향으로`,
] as const;

function stableHash(value: string) {
  let hash = 0;

  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }

  return hash;
}

function pick<T>(items: readonly T[], seed: number, offset = 0): T {
  const mixed = stableHash(
    `${seed}|${offset}|${items.length}|the-save-interior-district`,
  );
  return items[mixed % items.length];
}

function getPortfolio(district: string) {
  const seed = stableHash(district);

  return [...portfolio].sort((a, b) => {
    const aLocal = a.match.includes(district) ? 1 : 0;
    const bLocal = b.match.includes(district) ? 1 : 0;

    if (aLocal !== bLocal) {
      return bLocal - aLocal;
    }

    return (
      stableHash(`${district}-${a.id}-${seed}`) -
      stableHash(`${district}-${b.id}-${seed}`)
    );
  });
}

type PageProps = {
  params: Promise<{
    city: string;
    district: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city, district } = await params;

  const decodedCity = decodeURIComponent(city);
  const decodedDistrict = decodeURIComponent(district);
  const data = districtData[decodedDistrict];

  if (decodedCity !== "서울" || !data) {
    return {
      title: "더세이브인테리어",
      robots: { index: false, follow: false },
    };
  }

  const seed = stableHash(`metadata|${decodedCity}|${decodedDistrict}`);
  const titleLead = pick(metaTitleLeads, seed, 1)(decodedDistrict);
  const titleTail = pick(metaTitleTails, seed, 2);
  const metaTitle = `${titleLead} | ${titleTail}`;
  const metaDescription = pick(metaDescriptionTemplates, seed, 3)(
    decodedDistrict,
    data.feature,
  );

  const canonicalUrl = `${SITE_URL}/${encodeURIComponent(
    "서울",
  )}/${encodeURIComponent(decodedDistrict)}`;

  return {
    title: { absolute: metaTitle },
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      `${decodedDistrict} 인테리어`,
      `${decodedDistrict} 인테리어업체`,
      `${decodedDistrict} 전체인테리어`,
      `${decodedDistrict} 집 인테리어`,
      `${decodedDistrict} 아파트 인테리어`,
      `${decodedDistrict} 주택 인테리어`,
      `${decodedDistrict} 상가 인테리어`,
      `${decodedDistrict} 매장 인테리어`,
      `${decodedDistrict} 사무실 인테리어`,
      `${decodedDistrict} 주거 인테리어`,
      `${decodedDistrict} 상업 인테리어`,
      "서울 인테리어업체",
      "더세이브인테리어",
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "website",
      locale: "ko_KR",
      siteName: "더세이브인테리어",
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
    },
  };
}

export default async function DistrictPage({ params }: PageProps) {
  const { city, district } = await params;

  const decodedCity = decodeURIComponent(city);
  const decodedDistrict = decodeURIComponent(district);

  const data = districtData[decodedDistrict];

  if (decodedCity !== "서울" || !data) {
    notFound();
  }

  const seed = stableHash(decodedDistrict);

  const heroTitle = pick(heroTitles, seed)(decodedDistrict);
  const residentialHeading = pick(
    residentialHeadings,
    seed,
    1,
  )(decodedDistrict);

  const commercialHeading = pick(
    commercialHeadings,
    seed,
    2,
  )(decodedDistrict);

  const guideHeading = pick(guideHeadings, seed, 3);
  const selectedProcess = pick(processSets, seed, 4);
  const selectedPortfolio = getPortfolio(decodedDistrict);
  const editorialAngle = pick(editorialAngles, seed, 10);
  const localGuideLead = pick(localGuideLeadTemplates, seed, 11)(
    decodedDistrict,
  );
  const ctaHeading = pick(ctaHeadings, seed, 12)(decodedDistrict);

  const heroLines = heroTitle.split("\n");

  const faqQuestions = [
    pick(faqQuestionSets, seed)(decodedDistrict),
    "부분인테리어도 진행하나요?",
    `${decodedDistrict}에서 어떤 공간의 전체인테리어가 가능한가요?`,
    "상담할 때 무엇을 알려주면 되나요?",
  ];

  const faqAnswers = [
    `${decodedDistrict}의 주거 및 상업공간을 대상으로 상담을 진행합니다. ${data.faq}`,
    "더세이브인테리어는 부분적인 공사보다 공간 전체를 하나의 방향으로 계획하는 전체인테리어를 전문으로 진행하며 부분인테리어는 진행하지 않습니다.",
    `${data.feature} 등을 중심으로 공간 전체의 인테리어를 진행할 수 있습니다. 실제 가능 범위와 필요한 공정은 현장 조건을 확인한 뒤 상담합니다.`,
    "현장 위치, 공간 종류, 대략적인 평수, 현재 상태와 원하는 공사 일정 및 인테리어 방향을 알려주시면 상담에 도움이 됩니다.",
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${decodedDistrict} 인테리어업체 더세이브인테리어`,
    serviceType: [
      "전체인테리어",
      "집 인테리어",
      "아파트 인테리어",
      "주택 인테리어",
      "매장 인테리어",
      "상가 인테리어",
      "사무실 인테리어",
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "서울" },
      { "@type": "AdministrativeArea", name: decodedDistrict },
    ],
    provider: {
      "@type": "Organization",
      name: "더세이브인테리어",
    },
    description: `${decodedDistrict}의 집·아파트·주택 등 주거공간과 매장·상가·사무실 등 상업공간 전체인테리어 상담`,
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
              href="#area"
              className="hidden text-sm font-semibold text-white/60 transition hover:text-white lg:block"
            >
              {decodedDistrict} 지역
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
              서울 인테리어
            </Link>

            <span>›</span>

            <span className="font-bold text-[#d7b37a]">
              {decodedDistrict} 인테리어
            </span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,179,122,0.19),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_30%)]" />

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <div className="inline-flex rounded-full border border-[#d7b37a]/30 bg-[#d7b37a]/10 px-4 py-2">
              <p className="text-xs font-black tracking-[0.18em] text-[#d7b37a]">
                {decodedDistrict.toUpperCase()} TOTAL INTERIOR
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
              {decodedDistrict} 주거 · 상업 전체인테리어
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/55">
              {data.intro} 이 페이지에서는 {editorialAngle}을 중심으로
              {decodedDistrict}의 집·아파트·주택 등 주거공간과
              매장·상가·사무실 등 상업공간 전체인테리어를 안내합니다.
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
                <p className="text-xl font-black text-[#d7b37a]">
                  {decodedDistrict}
                </p>
                <p className="mt-1 text-xs text-white/45">
                  서울 지역 상담
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xl font-black text-[#d7b37a]">
                  주거
                </p>
                <p className="mt-1 text-xs text-white/45">
                  전체인테리어
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xl font-black text-[#d7b37a]">
                  상업
                </p>
                <p className="mt-1 text-xs text-white/45">
                  전체인테리어
                </p>
              </div>
            </div>
          </div>

          {/* HERO PORTFOLIO */}
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

      {/* LOCAL CHARACTER */}
      <section className="border-y border-white/10 bg-[#101010] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-[28px] border border-white/10 bg-[#151515] p-7">
              <p className="text-xs font-black tracking-[0.16em] text-[#d7b37a]">
                AREA
              </p>

              <h2 className="mt-4 text-2xl font-black">
                {decodedDistrict} 공간 특성
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                {data.focus}
              </p>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-[#151515] p-7">
              <p className="text-xs font-black tracking-[0.16em] text-[#d7b37a]">
                SPACE
              </p>

              <h2 className="mt-4 text-2xl font-black">
                주요 공간
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                {data.feature}
              </p>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-[#151515] p-7">
              <p className="text-xs font-black tracking-[0.16em] text-[#d7b37a]">
                SERVICE
              </p>

              <h2 className="mt-4 text-2xl font-black">
                전체인테리어
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/50">
                부분적인 시공이 아닌 공간 전체의 디자인과 기능,
                동선 및 공정을 함께 계획합니다.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* RESIDENTIAL / COMMERCIAL */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[34px] border border-white/10 bg-[#151515] p-8 sm:p-10">
              <p className="text-xs font-black tracking-[0.2em] text-[#d7b37a]">
                RESIDENTIAL
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {residentialHeading}
              </h2>

              <p className="mt-6 leading-8 text-white/55">
                {data.residential}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "아파트 전체인테리어",
                  "빌라 전체인테리어",
                  "주택 전체인테리어",
                  "오피스텔 전체인테리어",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/65"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-[34px] border border-white/10 bg-[#151515] p-8 sm:p-10">
              <p className="text-xs font-black tracking-[0.2em] text-[#d7b37a]">
                COMMERCIAL
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                {commercialHeading}
              </h2>

              <p className="mt-6 leading-8 text-white/55">
                {data.commercial}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "상가 전체인테리어",
                  "매장 전체인테리어",
                  "카페 전체인테리어",
                  "음식점 전체인테리어",
                  "사무실 전체인테리어",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/65"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* AREA / DONG */}
      <section
        id="area"
        className="border-y border-white/10 bg-[#101010] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
              {decodedDistrict.toUpperCase()} AREA
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              {decodedDistrict} 동별 인테리어
            </h2>

            <p className="mt-6 leading-8 text-white/55">
              {decodedDistrict} 안에서도 주거 형태와 건물 구조, 상권과
              공간의 사용 목적은 동마다 달라질 수 있습니다. 원하는 지역을
              선택하면 해당 동의 전체인테리어 정보를 확인할 수 있습니다.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {data.areas.map((area, index) => (
              <Link
                key={area}
                href={`/${encodeURIComponent("서울")}/${encodeURIComponent(
                  decodedDistrict,
                )}/${encodeURIComponent(area)}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-[#d7b37a]/50 hover:bg-[#d7b37a]/5"
              >
                <p className="text-xs font-black text-[#d7b37a]/55">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-3 text-base font-black group-hover:text-[#d7b37a]">
                  {area}
                </p>

                <p className="mt-2 text-xs text-white/35">
                  {area} 인테리어
                </p>

                <p className="mt-4 text-xs font-bold text-white/40 group-hover:text-white/70">
                  지역 보기 →
                </p>
              </Link>
            ))}
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
                {decodedDistrict}에서 참고할
                <br />
                전체인테리어 사례
              </h2>

              <p className="mt-6 leading-8 text-white/55">
                주거와 상업 전체인테리어의 다양한 공간 구성을 확인해보세요.
                사진을 누르면 바로 전화상담으로 연결됩니다.
              </p>
            </div>

            <a
              href={`tel:${PHONE_LINK}`}
              className="w-fit rounded-full border border-[#d7b37a]/40 bg-[#d7b37a]/10 px-6 py-3 text-sm font-black text-[#d7b37a] transition hover:bg-[#d7b37a] hover:text-black"
            >
              {decodedDistrict} 시공상담
            </a>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {selectedPortfolio.map((item) => (
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

                  {item.match.includes(decodedDistrict) && (
                    <div className="absolute left-4 top-4 rounded-full bg-[#d7b37a] px-3 py-2 text-xs font-black text-black">
                      {decodedDistrict} 지역 사례
                    </div>
                  )}

                  {!item.match.includes(decodedDistrict) && (
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
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL GUIDE */}
      <section className="border-y border-white/10 bg-[#101010] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
                LOCAL INTERIOR GUIDE
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                {localGuideLead}
                <br />
                <span className="text-[#d7b37a]">{guideHeading}</span>
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-white/55">
              <p>
                {data.intro} 전체인테리어를 준비할 때는 원하는 이미지뿐
                아니라 현재 공간의 구조와 실제 사용 목적을 함께 살펴야
                합니다.
              </p>

              <p>
                주거공간의 경우 {data.residential} 따라서 가족 구성,
                필요한 수납량과 각 공간의 이용 방식을 상담 단계에서
                구체적으로 확인하는 것이 좋습니다.
              </p>

              <p>
                상업공간에서는 {data.commercial} 고객이 공간에 들어와
                이동하고 머무르는 과정과 직원이 실제로 업무를 수행하는
                흐름을 함께 고려하면 공간의 기능성을 높일 수 있습니다.
              </p>

              <p>
                {decodedDistrict}에서는 {editorialAngle}을 기준으로 공간을
                살펴봅니다. 집·아파트·주택은 생활 방식과 수납, 이동 동선을,
                매장·상가·사무실은 고객 경험과 실제 운영 흐름을 함께 확인해
                전체인테리어의 범위와 방향을 정리합니다.
              </p>

              <p>
                더세이브인테리어는 부분인테리어가 아닌 전체인테리어를
                진행합니다. 한 공간만 별도로 변경하기보다 전체 공간의
                디자인과 기능, 필요한 공정이 자연스럽게 연결될 수 있도록
                현장 조건을 확인한 뒤 계획합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
            PROCESS
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            {decodedDistrict} 전체인테리어 진행
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {selectedProcess.map(([number, title, description]) => (
              <article
                key={number}
                className="rounded-3xl border border-white/10 bg-[#151515] p-7"
              >
                <p className="text-sm font-black text-[#d7b37a]">
                  {number}
                </p>

                <h3 className="mt-5 text-xl font-black">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <Partners />

      {/* CTA */}
      <section className="border-y border-white/10 bg-[#101010] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[38px] bg-[#d7b37a] p-8 text-black sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <p className="text-sm font-black tracking-[0.18em]">
                  {decodedDistrict.toUpperCase()} INTERIOR CONSULTING
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                  {ctaHeading}
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-black/65">
                  {data.cta} 현장 주소와 공간 종류, 대략적인 평수, 현재 구조와
                  원하는 전체인테리어 방향을 알려주시면 {decodedDistrict} 현장에
                  필요한 공사 범위를 확인하는 데 도움이 됩니다.
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
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
              {decodedDistrict.toUpperCase()} FAQ
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              {decodedDistrict} 인테리어 상담 안내
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqQuestions.map((question, index) => (
              <article
                key={question}
                className="rounded-3xl border border-white/10 bg-[#151515] p-7"
              >
                <div className="flex gap-4">
                  <p className="font-black text-[#d7b37a]">
                    Q{index + 1}.
                  </p>

                  <div>
                    <h3 className="text-lg font-black">
                      {question}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/55">
                      {faqAnswers[index]}
                    </p>
                  </div>
                </div>
              </article>
            ))}
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
                {decodedDistrict} 주거 전체인테리어 · 상업 전체인테리어
              </p>

              <a
                href={`tel:${PHONE_LINK}`}
                className="mt-3 inline-block text-sm font-black text-[#d7b37a]"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="text-left sm:text-right">
              <Link
                href={`/${encodeURIComponent("서울")}`}
                className="text-xs font-bold text-white/45 transition hover:text-white"
              >
                서울 지역 전체보기
              </Link>

              <p className="mt-3 text-xs text-white/25">
                THE SAVE INTERIOR
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE CONTACT */}
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
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const PHONE_DISPLAY = "010-2269-8352";
const PHONE_LINK = "01022698352";

const districts = [
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
    title: "서울 중구 40평형 아파트 전체인테리어",
    location: "서울 중구",
    category: "주거 전체인테리어",
    size: "40평형",
    image: "/images/junggu-apartment-40.png",
  },
  {
    title: "종로구 청운동 20평형 매장 전체인테리어",
    location: "서울 종로구 청운동",
    category: "상업 전체인테리어",
    size: "20평형",
    image: "/images/cheongun-store-20.png",
  },
  {
    title: "강남구 역삼동 35평형 사무실 전체인테리어",
    location: "서울 강남구 역삼동",
    category: "상업 전체인테리어",
    size: "35평형",
    image: "/images/yeoksam-office-35.png",
  },
  {
    title: "송파구 잠실동 32평형 아파트 전체인테리어",
    location: "서울 송파구 잠실동",
    category: "주거 전체인테리어",
    size: "32평형",
    image: "/images/jamsil-apartment-32.png",
  },
  {
    title: "성동구 성수동 25평형 매장 전체인테리어",
    location: "서울 성동구 성수동",
    category: "상업 전체인테리어",
    size: "25평형",
    image: "/images/seongsu-store-25.png",
  },
  {
    title: "마포구 45평형 사무실 전체인테리어",
    location: "서울 마포구",
    category: "상업 전체인테리어",
    size: "45평형",
    image: "/images/mapo-office-45.png",
  },
];

const residentialSpaces = [
  "아파트 전체인테리어",
  "빌라 전체인테리어",
  "주택 전체인테리어",
  "오피스텔 전체인테리어",
];

const commercialSpaces = [
  "상가 전체인테리어",
  "매장 전체인테리어",
  "카페 전체인테리어",
  "음식점 전체인테리어",
  "사무실 전체인테리어",
  "쇼룸 전체인테리어",
  "학원 전체인테리어",
  "미용실 전체인테리어",
];

const process = [
  {
    number: "01",
    title: "상담",
    description:
      "서울 내 현장 위치와 공간 종류, 면적, 원하는 분위기와 공사 일정을 확인합니다.",
  },
  {
    number: "02",
    title: "현장 확인",
    description:
      "공간의 구조와 기존 설비, 이동 동선과 현장 조건을 확인해 전체 공사의 기준을 정합니다.",
  },
  {
    number: "03",
    title: "공간 계획",
    description:
      "주거 또는 상업공간의 목적에 맞춰 전체 디자인과 공간 활용 방향을 구체화합니다.",
  },
  {
    number: "04",
    title: "견적 · 일정",
    description:
      "전체 공사 범위와 필요한 공정을 정리하고 현장에 맞는 견적과 진행 일정을 협의합니다.",
  },
  {
    number: "05",
    title: "전체 시공",
    description:
      "정해진 계획을 기준으로 전체 공정을 순서에 맞춰 진행하고 현장을 관리합니다.",
  },
  {
    number: "06",
    title: "완료 확인",
    description:
      "공사가 완료되면 주요 시공 부분과 마감 상태를 확인하고 전체 공간을 최종 점검합니다.",
  },
];

const faqs = [
  {
    question: "서울 전체 지역에서 인테리어 상담이 가능한가요?",
    answer:
      "네. 더세이브인테리어는 강남구, 서초구, 송파구, 마포구, 용산구, 종로구 등 서울 25개 구를 대상으로 전체인테리어 상담을 진행합니다.",
  },
  {
    question: "아파트와 상가 인테리어를 모두 진행하나요?",
    answer:
      "네. 아파트, 빌라, 주택, 오피스텔 등의 주거 전체인테리어와 상가, 매장, 카페, 음식점, 사무실 등의 상업 전체인테리어를 진행합니다.",
  },
  {
    question: "부분인테리어도 가능한가요?",
    answer:
      "더세이브인테리어는 부분적인 시공보다 공간 전체의 설계와 공정을 함께 계획하는 전체인테리어를 중심으로 진행하며 부분인테리어는 진행하지 않습니다.",
  },
  {
    question: "상담할 때 어떤 내용을 알려주면 되나요?",
    answer:
      "현장 주소 또는 지역, 공간 종류, 대략적인 평수, 원하는 공사 일정과 인테리어 방향을 알려주시면 상담 진행에 도움이 됩니다.",
  },
];

type PageProps = {
  params: Promise<{
    city: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city } = await params;
  const decodedCity = decodeURIComponent(city);

  if (decodedCity !== "서울") {
    return {
      title: "더세이브인테리어",
    };
  }

  return {
    title: "서울 인테리어업체 | 주거·상업 전체인테리어 더세이브인테리어",
    description:
      "서울 인테리어업체 더세이브인테리어. 서울 25개 구 아파트, 빌라, 주택, 오피스텔 주거 전체인테리어와 상가, 매장, 카페, 음식점, 사무실 상업 전체인테리어 상담.",
    keywords: [
      "서울 인테리어",
      "서울 인테리어업체",
      "서울 전체인테리어",
      "서울 아파트 인테리어",
      "서울 상가 인테리어",
      "서울 매장 인테리어",
      "서울 사무실 인테리어",
      "서울 주거 인테리어",
      "서울 상업 인테리어",
      "더세이브인테리어",
    ],
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city } = await params;
  const decodedCity = decodeURIComponent(city);

  if (decodedCity !== "서울") {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] pb-20 text-white md:pb-0">
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
              href="#district"
              className="hidden text-sm font-semibold text-white/60 transition hover:text-white lg:block"
            >
              서울 지역
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
          <div className="flex items-center gap-2 text-xs text-white/40">
            <Link href="/" className="transition hover:text-white">
              홈
            </Link>
            <span>›</span>
            <span className="font-bold text-[#d7b37a]">서울 인테리어</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,179,122,0.20),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_30%)]" />

        <div className="relative mx-auto grid min-h-[690px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <div className="inline-flex rounded-full border border-[#d7b37a]/30 bg-[#d7b37a]/10 px-4 py-2">
              <p className="text-xs font-black tracking-[0.2em] text-[#d7b37a]">
                SEOUL INTERIOR
              </p>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              서울 인테리어,
              <br />
              <span className="text-[#d7b37a]">
                공간 전체를 설계합니다
              </span>
            </h1>

            <p className="mt-7 text-xl font-black text-white/85">
              서울 주거 · 상업 전체인테리어 전문
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/55">
              서울의 아파트, 빌라, 주택, 오피스텔부터 상가, 매장,
              카페, 음식점, 사무실까지 공간의 용도와 구조를 고려한
              전체인테리어를 진행합니다. 부분적인 공사가 아닌 공간 전체의
              디자인과 동선, 마감의 연결성을 함께 계획합니다.
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
                <p className="text-2xl font-black text-[#d7b37a]">25개 구</p>
                <p className="mt-1 text-xs text-white/45">서울 지역 상담</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-black text-[#d7b37a]">주거</p>
                <p className="mt-1 text-xs text-white/45">전체인테리어</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-black text-[#d7b37a]">상업</p>
                <p className="mt-1 text-xs text-white/45">전체인테리어</p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <a
            href={`tel:${PHONE_LINK}`}
            className="group relative block overflow-hidden rounded-[38px] border border-white/10 bg-[#161616] shadow-2xl"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/junggu-apartment-40.png"
                alt="서울 40평형 아파트 전체인테리어"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="text-xs font-black tracking-[0.18em] text-[#d7b37a]">
                  RESIDENTIAL INTERIOR
                </p>

                <p className="mt-3 text-2xl font-black">
                  서울 40평형 아파트
                  <br />
                  전체인테리어
                </p>

                <p className="mt-3 text-sm text-white/55">
                  사진 클릭 → 전화상담
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* SEOUL DISTRICTS */}
      <section
        id="district"
        className="border-y border-white/10 bg-[#101010] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
              SEOUL 25 DISTRICTS
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              서울 지역별 인테리어
            </h2>

            <p className="mt-6 leading-8 text-white/55">
              서울은 같은 도시 안에서도 주거 형태와 상권, 건물 구조가
              지역마다 다릅니다. 원하는 지역을 선택하면 해당 지역의
              주거 전체인테리어와 상업 전체인테리어 정보를 확인할 수 있습니다.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {districts.map((district, index) => (
              <Link
                key={district}
                href={`/${encodeURIComponent("서울")}/${encodeURIComponent(
                  district,
                )}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-[#d7b37a]/50 hover:bg-[#d7b37a]/5"
              >
                <p className="text-xs font-black text-[#d7b37a]/60">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-3 text-lg font-black text-white group-hover:text-[#d7b37a]">
                  {district}
                </p>

                <p className="mt-2 text-xs text-white/35">
                  {district} 인테리어업체
                </p>

                <p className="mt-4 text-xs font-bold text-white/40 group-hover:text-white/70">
                  지역 페이지 보기 →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
              TOTAL INTERIOR
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              서울 전체인테리어 전문
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/55">
              공간의 일부분만 바꾸는 방식이 아니라 전체 공간의 디자인,
              기능과 동선을 함께 고려합니다.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[32px] border border-white/10 bg-[#151515] p-8 sm:p-10">
              <p className="text-xs font-black tracking-[0.2em] text-[#d7b37a]">
                RESIDENTIAL
              </p>

              <h3 className="mt-4 text-3xl font-black">
                서울 주거 전체인테리어
              </h3>

              <p className="mt-5 leading-8 text-white/55">
                가족 구성과 생활 패턴, 수납과 이동 동선, 공간별 사용 목적을
                고려해 집 전체를 하나의 방향으로 계획합니다.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {residentialSpaces.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm font-bold text-white/65"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[32px] border border-white/10 bg-[#151515] p-8 sm:p-10">
              <p className="text-xs font-black tracking-[0.2em] text-[#d7b37a]">
                COMMERCIAL
              </p>

              <h3 className="mt-4 text-3xl font-black">
                서울 상업 전체인테리어
              </h3>

              <p className="mt-5 leading-8 text-white/55">
                업종과 운영 방식, 고객의 이동 경로와 직원의 업무 동선을
                고려해 공간 전체의 디자인과 기능을 계획합니다.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {commercialSpaces.map((item) => (
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

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="border-y border-white/10 bg-[#101010] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
                SEOUL PORTFOLIO
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                서울 인테리어 시공사례
              </h2>

              <p className="mt-6 leading-8 text-white/55">
                주거와 상업공간의 다양한 전체인테리어 사례를 확인해보세요.
                관심 있는 사진을 누르면 바로 전화상담으로 연결됩니다.
              </p>
            </div>

            <a
              href={`tel:${PHONE_LINK}`}
              className="w-fit rounded-full border border-[#d7b37a]/40 bg-[#d7b37a]/10 px-6 py-3 text-sm font-black text-[#d7b37a] transition hover:bg-[#d7b37a] hover:text-black"
            >
              시공상담 {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolio.map((item) => (
              <a
                key={item.title}
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-xs font-black backdrop-blur">
                    {item.category}
                  </div>

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

                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-sm text-white/45">
                      {item.category} · {item.size}
                    </span>

                    <span className="text-xs font-black text-[#d7b37a]">
                      전화상담 →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
                SEOUL INTERIOR GUIDE
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                서울 인테리어는
                <br />
                현장에 맞는 계획부터
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-white/55">
              <p>
                서울에서 전체인테리어를 계획할 때는 디자인만 보는 것보다
                현재 공간의 구조와 건물 조건, 사용 목적을 함께 확인하는 것이
                중요합니다. 아파트와 빌라 같은 주거공간은 가족의 생활 방식과
                수납, 주방과 거실의 연결, 침실 구성 등 실제 생활에 필요한
                요소를 기준으로 전체 공간을 계획해야 합니다.
              </p>

              <p>
                상가나 매장, 카페, 음식점, 사무실 같은 상업공간은 고객의
                이동 동선과 직원의 업무 흐름, 업종에 필요한 설비와 공간
                구성을 함께 고려해야 합니다. 같은 평수의 공간이라도 어떤
                업종으로 사용하는지에 따라 필요한 구조와 인테리어 방향이
                달라질 수 있습니다.
              </p>

              <p>
                더세이브인테리어는 서울 25개 구의 주거 및 상업공간을
                대상으로 전체인테리어 상담을 진행합니다. 부분적인 시공이
                아니라 공간 전체를 대상으로 공사 방향을 계획하고 현장의
                조건에 맞춰 필요한 공정과 일정을 확인합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-white/10 bg-[#101010] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
            PROCESS
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            서울 전체인테리어 진행 과정
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-white/10 bg-[#151515] p-7"
              >
                <p className="text-sm font-black text-[#d7b37a]">
                  {item.number}
                </p>

                <h3 className="mt-5 text-xl font-black">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[38px] bg-[#d7b37a] p-8 text-black sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <p className="text-sm font-black tracking-[0.18em]">
                  SEOUL INTERIOR CONSULTING
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  서울 전체인테리어
                  <br />
                  상담이 필요하신가요?
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-black/65">
                  서울 지역, 공간 종류, 평수와 원하는 인테리어 방향을
                  알려주세요. 전화 또는 문자로 상담하실 수 있습니다.
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
      <section className="border-t border-white/10 bg-[#101010] py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              서울 인테리어 상담 전 확인
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-[#151515] p-7"
              >
                <div className="flex gap-4">
                  <p className="font-black text-[#d7b37a]">
                    Q{index + 1}.
                  </p>

                  <div>
                    <h3 className="text-lg font-black">{faq.question}</h3>

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

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Link href="/" className="text-xl font-black">
                더세이브인테리어
              </Link>

              <p className="mt-3 text-sm text-white/45">
                서울 주거 전체인테리어 · 상업 전체인테리어 전문
              </p>

              <a
                href={`tel:${PHONE_LINK}`}
                className="mt-3 inline-block text-sm font-black text-[#d7b37a]"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-xs text-white/30">
                THE SAVE INTERIOR
              </p>

              <Link
                href="/"
                className="mt-3 inline-block text-xs font-bold text-white/45 transition hover:text-white"
              >
                메인으로 돌아가기
              </Link>
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
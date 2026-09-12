import Image from "next/image";
import Link from "next/link";
import Partners from "../components/Partners";

const PHONE_DISPLAY = "010-2269-8352";
const PHONE_LINK = "01022698352";

const services = [
  {
    label: "RESIDENTIAL",
    title: "주거 전체인테리어",
    description:
      "아파트, 빌라, 주택, 오피스텔 등 주거공간 전체를 하나의 방향으로 설계하고 시공합니다. 생활 동선과 공간 활용, 디자인과 마감의 연결성을 함께 고려해 전체적인 완성도를 높입니다.",
    items: [
      "아파트 전체인테리어",
      "빌라 전체인테리어",
      "주택 전체인테리어",
      "오피스텔 전체인테리어",
    ],
  },
  {
    label: "COMMERCIAL",
    title: "상업 전체인테리어",
    description:
      "상가, 매장, 카페, 음식점, 사무실 등 상업공간 전체를 업종과 운영 목적에 맞춰 설계합니다. 고객 동선과 공간 활용, 브랜드 분위기까지 고려해 처음부터 끝까지 진행합니다.",
    items: [
      "상가 전체인테리어",
      "매장 전체인테리어",
      "카페 전체인테리어",
      "음식점 전체인테리어",
      "사무실 전체인테리어",
    ],
  },
];

const portfolio = [
  {
    title: "서울 중구 40평형 아파트 전체인테리어",
    category: "주거 전체인테리어",
    size: "40평형",
    image: "/images/junggu-apartment-40.png",
    alt: "서울 중구 40평형 아파트 전체인테리어",
  },
  {
    title: "종로구 청운동 20평형 매장 전체인테리어",
    category: "상업 전체인테리어",
    size: "20평형",
    image: "/images/cheongun-store-20.png",
    alt: "종로구 청운동 20평형 매장 전체인테리어",
  },
  {
    title: "강남구 역삼동 35평형 사무실 전체인테리어",
    category: "상업 전체인테리어",
    size: "35평형",
    image: "/images/yeoksam-office-35.png",
    alt: "강남구 역삼동 35평형 사무실 전체인테리어",
  },
  {
    title: "송파구 잠실동 32평형 아파트 전체인테리어",
    category: "주거 전체인테리어",
    size: "32평형",
    image: "/images/jamsil-apartment-32.png",
    alt: "송파구 잠실동 32평형 아파트 전체인테리어",
  },
  {
    title: "성동구 성수동 25평형 매장 전체인테리어",
    category: "상업 전체인테리어",
    size: "25평형",
    image: "/images/seongsu-store-25.png",
    alt: "성동구 성수동 25평형 매장 전체인테리어",
  },
  {
    title: "마포구 45평형 사무실 전체인테리어",
    category: "상업 전체인테리어",
    size: "45평형",
    image: "/images/mapo-office-45.png",
    alt: "마포구 45평형 사무실 전체인테리어",
  },
];

const process = [
  {
    number: "01",
    title: "초기 상담",
    description:
      "공간 종류와 위치, 면적, 원하는 분위기, 공사 일정과 전체인테리어 방향을 확인합니다.",
  },
  {
    number: "02",
    title: "현장 확인",
    description:
      "실제 현장의 기존 구조와 설비, 동선, 공사 조건 등을 확인해 시공 기준을 잡습니다.",
  },
  {
    number: "03",
    title: "디자인 · 견적",
    description:
      "현장과 요청사항을 바탕으로 전체 공간의 디자인 방향과 공사 범위, 견적을 구체화합니다.",
  },
  {
    number: "04",
    title: "전체 시공",
    description:
      "전체 공정을 순서에 맞게 진행하면서 공정 간 연결과 현장 일정을 체계적으로 관리합니다.",
  },
  {
    number: "05",
    title: "최종 확인",
    description:
      "전체 공사가 완료되면 마감 상태와 주요 시공 부분을 확인하고 완성된 공간을 최종 점검합니다.",
  },
];

const strengths = [
  {
    number: "01",
    title: "전체 공간 중심",
    description:
      "부분적인 시공이 아닌 공간 전체의 디자인과 기능, 동선을 함께 고려하는 전체인테리어를 진행합니다.",
  },
  {
    number: "02",
    title: "주거 · 상업 전문",
    description:
      "생활을 위한 주거공간과 운영을 위한 상업공간의 차이를 고려해 공간 성격에 맞는 방향을 계획합니다.",
  },
  {
    number: "03",
    title: "현장 맞춤 설계",
    description:
      "같은 면적이라도 구조와 사용 목적은 다릅니다. 실제 현장을 확인한 뒤 공간에 맞는 계획을 세웁니다.",
  },
  {
    number: "04",
    title: "서울 집중 운영",
    description:
      "서울 지역을 중심으로 주거 전체인테리어와 상업 전체인테리어 상담 및 시공을 진행합니다.",
  },
];

const residentialSpaces = [
  "아파트",
  "빌라",
  "단독주택",
  "다가구주택",
  "오피스텔",
];

const commercialSpaces = [
  "상가",
  "매장",
  "카페",
  "음식점",
  "사무실",
  "쇼룸",
  "학원",
  "미용실",
];

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

const faqs = [
  {
    question: "더세이브인테리어는 어떤 인테리어를 진행하나요?",
    answer:
      "서울을 중심으로 아파트, 빌라, 주택, 오피스텔 등의 주거 전체인테리어와 상가, 매장, 카페, 음식점, 사무실 등의 상업 전체인테리어를 진행합니다.",
  },
  {
    question: "부분인테리어도 진행하나요?",
    answer:
      "더세이브인테리어는 공간 전체의 디자인과 공정을 함께 계획하는 전체인테리어를 전문으로 진행하며 부분인테리어는 진행하지 않습니다.",
  },
  {
    question: "서울 어느 지역에서 상담할 수 있나요?",
    answer:
      "강남구, 송파구, 서초구, 마포구, 용산구를 비롯한 서울 25개 구를 대상으로 상담을 진행합니다.",
  },
  {
    question: "주거와 상업 인테리어를 모두 진행하나요?",
    answer:
      "네. 주거공간과 상업공간은 사용 목적과 필요한 동선이 다르기 때문에 각각의 공간 특성에 맞춰 전체인테리어 방향을 계획합니다.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] pb-20 text-white md:pb-0">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0b0b]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/">
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
              className="hidden text-sm font-semibold text-white/65 transition hover:text-white lg:block"
            >
              서비스
            </a>

            <a
              href="#portfolio"
              className="hidden text-sm font-semibold text-white/65 transition hover:text-white lg:block"
            >
              시공사례
            </a>

            <a
              href="#area"
              className="hidden text-sm font-semibold text-white/65 transition hover:text-white lg:block"
            >
              서울 지역
            </a>

            <a
              href={`sms:${PHONE_LINK}`}
              className="hidden rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/5 sm:inline-flex"
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

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,179,122,0.20),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_28%)]" />

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#d7b37a]/30 bg-[#d7b37a]/10 px-4 py-2">
              <p className="text-xs font-black tracking-[0.22em] text-[#d7b37a]">
                SEOUL TOTAL INTERIOR
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              공간 전체를 바꾸는
              <br />
              <span className="text-[#d7b37a]">서울 전체인테리어</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-bold leading-8 text-white/85 sm:text-xl">
              주거 전체인테리어 · 상업 전체인테리어 전문
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-white/55">
              아파트·빌라·주택·오피스텔부터
              상가·매장·카페·음식점·사무실까지.
              더세이브인테리어는 공간 전체의 디자인과 동선을 함께 계획하는
              전체인테리어를 진행합니다.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_LINK}`}
                className="inline-flex items-center justify-center rounded-full bg-[#d7b37a] px-7 py-4 text-sm font-black text-black transition hover:opacity-90"
              >
                전화상담 {PHONE_DISPLAY}
              </a>

              <a
                href={`sms:${PHONE_LINK}`}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/5"
              >
                문자로 상담하기
              </a>
            </div>

            <p className="mt-5 text-sm text-white/40">
              전화번호를 누르면 바로 상담 연결이 가능합니다.
            </p>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-black text-[#d7b37a]">서울</p>
                <p className="mt-1 text-xs text-white/50">25개 구 운영</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-black text-[#d7b37a]">주거</p>
                <p className="mt-1 text-xs text-white/50">전체인테리어</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-black text-[#d7b37a]">상업</p>
                <p className="mt-1 text-xs text-white/50">전체인테리어</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-[#d7b37a]/10 blur-3xl" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[38px] border border-white/10 bg-gradient-to-br from-[#2b261e] via-[#171717] to-[#080808] p-6 shadow-2xl">
              <div className="flex h-full flex-col justify-between rounded-[30px] border border-white/10 bg-black/20 p-7 sm:p-9">
                <div>
                  <p className="text-xs font-black tracking-[0.22em] text-[#d7b37a]">
                    THE SAVE INTERIOR
                  </p>

                  <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
                    일부가 아닌
                    <br />
                    공간 전체를
                    <br />
                    설계합니다
                  </h2>
                </div>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm font-black text-[#d7b37a]">
                      RESIDENTIAL
                    </p>
                    <p className="mt-2 text-lg font-bold">
                      주거 전체인테리어
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/45">
                      아파트 · 빌라 · 주택 · 오피스텔
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm font-black text-[#d7b37a]">
                      COMMERCIAL
                    </p>
                    <p className="mt-2 text-lg font-bold">
                      상업 전체인테리어
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/45">
                      상가 · 매장 · 카페 · 음식점 · 사무실
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section
        id="service"
        className="border-t border-white/10 bg-[#101010] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
              OUR SERVICE
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              주거와 상업,
              <br />
              전체 공간을 완성합니다
            </h2>

            <p className="mt-6 text-base leading-8 text-white/55">
              더세이브인테리어는 공간 전체의 연결성과 완성도를 중요하게
              생각합니다. 주거와 상업공간의 목적과 구조를 확인하고
              전체인테리어 방향을 계획합니다.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-[32px] border border-white/10 bg-[#161616] p-8 transition hover:border-[#d7b37a]/40 sm:p-10"
              >
                <p className="text-xs font-black tracking-[0.2em] text-[#d7b37a]">
                  {service.label}
                </p>

                <h3 className="mt-4 text-3xl font-black">{service.title}</h3>

                <p className="mt-5 leading-8 text-white/55">
                  {service.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
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

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                인테리어 시공사례
              </h2>

              <p className="mt-6 leading-8 text-white/55">
                주거와 상업공간의 다양한 전체인테리어 사례를 확인해보세요.
                관심 있는 공간 사진을 누르면 바로 전화상담으로 연결됩니다.
              </p>
            </div>

            <a
              href={`tel:${PHONE_LINK}`}
              className="inline-flex w-fit items-center justify-center rounded-full border border-[#d7b37a]/40 bg-[#d7b37a]/10 px-6 py-3 text-sm font-black text-[#d7b37a] transition hover:bg-[#d7b37a] hover:text-black"
            >
              시공 상담 {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolio.map((item) => (
              <a
                key={item.title}
                href={`tel:${PHONE_LINK}`}
                className="group block overflow-hidden rounded-[28px] border border-white/10 bg-[#141414] transition hover:-translate-y-1 hover:border-[#d7b37a]/50"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-2 text-xs font-black text-white backdrop-blur">
                    {item.category}
                  </div>

                  <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#d7b37a] text-lg text-black shadow-lg">
                    ☎
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black leading-8 text-white">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2 text-sm text-white/45">
                      <span>{item.category}</span>
                      <span>·</span>
                      <span>{item.size}</span>
                    </div>

                    <span className="text-xs font-black text-[#d7b37a]">
                      사진 클릭 → 전화상담
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STRENGTH */}
      <section className="border-y border-white/10 bg-[#101010] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
                TOTAL INTERIOR
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                더세이브는
                <br />
                전체인테리어에
                <br />
                집중합니다
              </h2>

              <p className="mt-6 max-w-md leading-8 text-white/55">
                공간 전체를 하나의 콘셉트와 계획으로 연결해 디자인과 기능,
                동선의 균형을 고려합니다.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((strength) => (
                <article
                  key={strength.number}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <p className="text-sm font-black text-[#d7b37a]">
                    {strength.number}
                  </p>

                  <h3 className="mt-5 text-xl font-black">
                    {strength.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {strength.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPACE */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
              INTERIOR SPACE
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              어떤 공간을 인테리어하나요?
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-[#161616] p-8 sm:p-10">
              <p className="text-xs font-black tracking-[0.2em] text-[#d7b37a]">
                HOME
              </p>

              <h3 className="mt-4 text-3xl font-black">
                주거 전체인테리어
              </h3>

              <p className="mt-5 leading-8 text-white/55">
                가족 구성과 생활 방식, 수납, 동선과 공간 활용을 고려해
                주거공간 전체의 방향을 계획합니다.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {residentialSpaces.map((space) => (
                  <div
                    key={space}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm font-bold text-white/70"
                  >
                    {space}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-[#161616] p-8 sm:p-10">
              <p className="text-xs font-black tracking-[0.2em] text-[#d7b37a]">
                BUSINESS
              </p>

              <h3 className="mt-4 text-3xl font-black">
                상업 전체인테리어
              </h3>

              <p className="mt-5 leading-8 text-white/55">
                업종 특성과 고객 동선, 직원의 업무 효율, 브랜드 분위기를
                고려해 상업공간 전체를 계획합니다.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {commercialSpaces.map((space) => (
                  <div
                    key={space}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm font-bold text-white/70"
                  >
                    {space}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-white/10 bg-[#101010] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
              PROCESS
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              전체인테리어 진행 과정
            </h2>

            <p className="mt-6 leading-8 text-white/55">
              전체인테리어는 각 공정이 서로 연결되기 때문에 처음부터 전체적인
              방향을 정하고 순서에 맞춰 진행하는 것이 중요합니다.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-3xl border border-white/10 bg-[#141414] p-6"
              >
                <p className="text-sm font-black text-[#d7b37a]">
                  {step.number}
                </p>

                <h3 className="mt-5 text-xl font-black">{step.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEOUL AREA */}
      <section id="area" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
              SEOUL AREA
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              서울 전체인테리어
            </h2>

            <p className="mt-6 leading-8 text-white/55">
              더세이브인테리어는 서울을 중심으로 운영합니다. 서울 25개 구의
              주거 전체인테리어와 상업 전체인테리어 상담을 진행하며 현장과
              공간 조건에 맞춰 전체적인 공사 방향을 계획합니다.
            </p>

            <Link
              href="/서울"
              className="mt-7 inline-flex rounded-full border border-[#d7b37a]/40 bg-[#d7b37a]/10 px-6 py-3 text-sm font-black text-[#d7b37a] transition hover:bg-[#d7b37a] hover:text-black"
            >
              서울 지역 전체보기 →
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {districts.map((district) => (
              <Link
                key={district}
                href={`/서울/${district}`}
                className="group block rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center transition hover:-translate-y-1 hover:border-[#d7b37a]/50 hover:bg-[#d7b37a]/5"
              >
                <p className="text-sm font-black text-white/75 transition group-hover:text-[#d7b37a]">
                  {district} 인테리어
                </p>

                <p className="mt-2 text-xs text-white/30 transition group-hover:text-white/55">
                  지역 페이지 보기 →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <Partners />

      {/* CONTACT */}
      <section
        id="consult"
        className="border-t border-white/10 bg-[#101010] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[38px] bg-[#d7b37a] p-8 text-black sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <p className="text-sm font-black tracking-[0.18em]">
                  THE SAVE INTERIOR
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                  서울 전체인테리어,
                  <br />
                  상담부터 시작하세요
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-black/65">
                  주거 또는 상업공간의 위치와 면적, 공간 종류와 원하는
                  인테리어 방향을 알려주시면 상담을 진행할 수 있습니다.
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
                  className="flex min-h-20 items-center justify-between rounded-2xl border-2 border-black/20 bg-white/30 px-6 text-black transition hover:bg-white/50"
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
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              상담 전 확인하세요
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-[#141414] p-7"
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
              <p className="text-xl font-black">더세이브인테리어</p>

              <p className="mt-3 text-sm text-white/45">
                서울 주거 전체인테리어 · 상업 전체인테리어 전문
              </p>

              <a
                href={`tel:${PHONE_LINK}`}
                className="mt-3 inline-block text-sm font-bold text-[#d7b37a]"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <p className="text-xs text-white/30">
              THE SAVE INTERIOR
            </p>
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
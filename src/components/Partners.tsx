import Image from "next/image";

const partners = [
  {
    name: "SK매직",
    image: "/images/100.PNG",
  },
  {
    name: "SK브로드밴드",
    image: "/images/101.PNG",
  },
  {
    name: "바인그룹",
    image: "/images/102.PNG",
  },
  {
    name: "네이버",
    image: "/images/103.PNG",
  },
  {
    name: "MTS해원",
    image: "/images/104.PNG",
  },
  {
    name: "동구전자",
    image: "/images/105.PNG",
  },
] as const;

export default function Partners() {
  return (
    <section className="border-y border-white/10 bg-[#101010] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black tracking-[0.22em] text-[#d7b37a]">
            THE SAVE PARTNERS
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            더세이브 파트너사
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/55">
            더세이브와 함께하는 파트너사를 소개합니다.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="group flex min-h-[130px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-[#d7b37a]/50 sm:min-h-[160px] sm:p-6"
            >
              <div className="relative h-20 w-full sm:h-24">
                <Image
                  src={partner.image}
                  alt={`${partner.name} 로고`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-contain transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-white/35">
          파트너사 로고 및 상표의 권리는 각 회사에 있습니다.
        </p>
      </div>
    </section>
  );
}

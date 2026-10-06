import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import {
  BookingForm,
  BookingProvider,
  BookRoomLink,
} from "@/components/booking";
import { AutoScroller } from "@/components/auto-scroller";
import { FallingLeaves } from "@/components/leaves";
import { Lightbox } from "@/components/lightbox";
import { RevealOnScroll } from "@/components/reveal";
import { img } from "@/lib/images";
import { SITE, type RoomName } from "@/lib/site";

const rooms: {
  name: RoomName;
  image: StaticImageData;
  alt: string;
  position?: string;
  desc: string;
  tags: string[];
  price: string;
}[] = [
  {
    name: "Phòng đôi ban công",
    image: img.phongDoiBanCong,
    alt: "Phòng đôi sàn gỗ xương cá, cửa kính mở ra ban công nhìn đồi",
    position: "object-[center_72%]",
    desc: "Hợp cặp đôi và khách công tác.",
    tags: ["1 giường đôi", "Ban công", "Smart TV"],
    price: "450.000đ",
  },
  {
    name: "Phòng 2 giường",
    image: img.phong2Giuong,
    alt: "Phòng hai giường đôi với đầu giường gỗ chạm",
    desc: "Vừa cho gia đình có trẻ nhỏ.",
    tags: ["2 giường đôi", "Cửa sổ", "Ấm đun nước"],
    price: "650.000đ",
  },
  {
    name: "Phòng 3 giường",
    image: img.phong3Giuong,
    alt: "Phòng ba giường rộng, nhiều ánh sáng",
    desc: "Dành cho nhóm bạn, đại gia đình.",
    tags: ["3 giường đôi", "Cửa sổ lớn", "Bàn trà"],
    price: "850.000đ",
  },
  {
    name: "Phòng áp mái gỗ thông",
    image: img.phongApMai,
    alt: "Phòng áp mái trần gỗ thông, cửa vòm nhìn ra thành phố",
    desc: "Tầng cao nhất, nhìn ra phố và núi.",
    tags: ["1 giường đôi", "Trần gỗ", "View phố"],
    price: "550.000đ",
  },
];

const branches = [
  {
    name: "Ngọc Sang 1",
    image: img.matTienNgay,
    alt: "Mặt tiền Ngọc Sang 1 trên Đường 3/2",
    position: "object-[center_40%]",
    desc: "Ngay trung tâm, gần chợ và Hồ Xuân Hương.",
    address: "20 Đường 3/2, P. Xuân Hương",
  },
  {
    name: "Ngọc Sang 2 – Xuân Bình",
    image: img.xuanBinhVilla,
    alt: "Mặt tiền villa trắng cổng vàng của chi nhánh Xuân Bình",
    desc: "Villa có sân, phòng ban công nhìn ra đồi.",
    address: "12 Mai Anh Đào, P. Lâm Viên",
  },
  {
    name: "Ngọc Sang 3 – Tùng Lâm",
    image: img.phongGoThong,
    alt: "Phòng đôi ốp gỗ thông tại chi nhánh Tùng Lâm",
    desc: "Yên tĩnh, giá mềm nhất trong ba chi nhánh.",
    address: "45 Ankroet, khu Tùng Lâm",
  },
];

const discoveries = [
  {
    title: "Hồ và đồi thông",
    desc: "Sáng sớm ngắm sương trên mặt hồ",
    image: img.daLatHoDoiThong,
    alt: "Những căn nhà mái dốc bên hồ, phía sau là đồi thông Đà Lạt",
  },
  {
    title: "Làng ven hồ",
    desc: "Góc chụp ảnh đẹp nhất buổi chiều",
    image: img.daLatVenHo,
    alt: "Dãy nhà gỗ mái nhọn nằm sát mép hồ",
  },
  {
    title: "Dạo phố trung tâm",
    desc: "Cà phê, chợ đêm ngay gần khách sạn",
    image: img.matTienPho,
    alt: "Con phố trung tâm Đà Lạt trước cửa Ngọc Sang Hotel",
  },
];

const gallery = [
  {
    src: img.phongGiaDinh,
    alt: "Phòng gia đình hai giường, sàn gỗ xương cá",
    caption: "Phòng cho cả nhà",
    tilt: "-rotate-2",
  },
  {
    src: img.phongViewPho,
    alt: "Phòng đôi nhìn ra thành phố qua cửa kính",
    caption: "Sáng sương ngoài cửa",
    tilt: "rotate-[1.5deg]",
  },
  {
    src: img.phongApMaiBanCong,
    alt: "Phòng áp mái ốp gỗ có ban công riêng",
    caption: "Góc áp mái gỗ thông",
    tilt: "-rotate-1",
  },
  {
    src: img.matTienDem,
    alt: "Ngọc Sang Hotel sáng đèn buổi tối",
    caption: "Ngọc Sang lên đèn",
    tilt: "rotate-2",
  },
  {
    src: img.leTan,
    alt: "Quầy lễ tân Ngọc Sang Hotel",
    caption: "Lễ tân đón bạn",
    tilt: "-rotate-[1.5deg]",
  },
  {
    src: img.phong2Giuong,
    alt: "Phòng hai giường đôi với đầu giường gỗ chạm",
    caption: "Giường gỗ chạm tay",
    tilt: "rotate-1",
  },
];

const arrow = <span aria-hidden="true">→</span>;

const testimonials = [
  {
    name: "Minh Anh",
    from: "TP. Hồ Chí Minh",
    text: "Phòng sạch, thơm mùi gỗ. Đi bộ vài phút là ra chợ đêm, rất tiện.",
  },
  {
    name: "Quốc Huy",
    from: "Đà Nẵng",
    text: "Đặt qua Zalo được trả lời ngay. Khách sạn trang trí phòng kỷ niệm rất chu đáo.",
  },
  {
    name: "Gia đình chị Thảo",
    from: "Hà Nội",
    text: "Phòng 3 giường rộng, cả nhà ở thoải mái. Lễ tân chỉ đường và thuê xe giúp.",
  },
];

const faqs = [
  {
    q: "Giờ nhận phòng và trả phòng là khi nào?",
    a: "Nhận phòng từ 14:00, trả phòng trước 12:00. Nhận sớm hoặc trả muộn tuỳ tình trạng phòng, bạn báo trước để lễ tân sắp xếp.",
  },
  {
    q: "Chính sách đặt cọc và huỷ phòng như thế nào?",
    a: "Đặt cọc 30% để giữ phòng. Huỷ miễn phí trước ngày nhận phòng 3 ngày; dịp lễ, Tết áp dụng chính sách riêng.",
  },
  {
    q: "Có chỗ đậu xe không?",
    a: "Xe máy để miễn phí tại cả ba chi nhánh. Ô tô đậu trong sân ở Xuân Bình và Tùng Lâm; Ngọc Sang 1 có bãi gửi cách 100 m.",
  },
  {
    q: "Khách sạn có nhận trang trí phòng không?",
    a: "Có. Bạn báo dịp cần trang trí khi đặt phòng để khách sạn chuẩn bị trước.",
  },
  {
    q: "Từ khách sạn ra chợ Đà Lạt bao xa?",
    a: "Ngọc Sang 1 cách chợ Đà Lạt khoảng 4 phút đi bộ, cách Hồ Xuân Hương khoảng 8 phút.",
  },
];

function Icon({
  size,
  stroke = "#1F3D2F",
  width = 1.5,
  className,
  children,
}: {
  size: number;
  stroke?: string;
  width?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

const pinPath = (
  <>
    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.800-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.500" />
  </>
);
const phonePath = (
  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
);
const clockPath = (
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </>
);

function Heading({
  no,
  label,
  children,
}: {
  no: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className="ns-eyebrow">
        <span>{no}</span>
        <i />
        <span>{label}</span>
      </div>
      <h2 className="ns-h2">{children}</h2>
    </>
  );
}

function Wordmark() {
  return (
    <span className="flex items-center gap-3">
      <Image
        src={img.logo}
        alt=""
        sizes="48px"
        className="size-12 rounded-full object-cover ring-1 ring-gold/60"
      />
      <span className="flex flex-col leading-[1.05]">
        <span className="font-display text-2xl font-semibold tracking-[0.04em] uppercase">
          Ngọc Sang
        </span>
        <span className="self-end font-script text-[26px] leading-none text-gold-soft">
          Đà Lạt
        </span>
      </span>
    </span>
  );
}

// Đường gợn sóng nối hai section: tô bằng màu nền của section nằm phía dưới
// (hoặc phía trên khi lật bằng `flip`).
function Wave({ className, flip }: { className: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`ns-wave block h-[clamp(24px,4vw,56px)] w-full ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path
        className="ns-wave-back"
        fill="currentColor"
        opacity="0.45"
        d="M0 38 C 200 0 420 70 720 34 C 1020 -2 1240 60 1440 22 V90 H0 Z"
      />
      <path
        fill="currentColor"
        d="M0 56 C 240 100 480 8 720 44 C 960 80 1200 14 1440 50 V90 H0 Z"
      />
    </svg>
  );
}

// Ảnh phong cảnh Đà Lạt làm nền cho section, hiện rõ nét. Lớp phủ tối chỉ
// đậm ở phía trên để tiêu đề trắng đọc được; mép section là sóng màu kem.
function Backdrop({
  src,
  position = "",
  noBottomEdge,
}: {
  src: StaticImageData;
  position?: string;
  noBottomEdge?: boolean;
}) {
  return (
    <>
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        quality={100}
        className={`object-cover ${position}`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,41,31,0.55)_0%,rgba(22,41,31,0.12)_42%,rgba(22,41,31,0.06)_100%)]" />
      <Wave flip className="absolute inset-x-0 -top-px text-cream" />
      {!noBottomEdge && (
        <Wave className="absolute inset-x-0 -bottom-px text-cream" />
      )}
    </>
  );
}

function PineBranch({ flip }: { flip?: boolean }) {
  return (
    <svg
      width="64"
      height="28"
      viewBox="0 0 64 28"
      fill="none"
      stroke="#5E7F63"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
      className={`shrink-0 max-[559px]:hidden ${flip ? "-scale-x-100" : ""}`}
    >
      <path d="M2 14h60" />
      <path d="M14 14l-7-8M24 14l-7-9M34 14l-7-9M44 14l-7-8M54 14l-6-7" />
      <path d="M14 14l-7 8M24 14l-7 9M34 14l-7 9M44 14l-7 8M54 14l-6 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <BookingProvider>
      <RevealOnScroll />
      <Lightbox />
      <FallingLeaves />
      <section
        id="top"
        className="ns-onphoto relative overflow-hidden bg-deep text-white"
      >
        <Image
          src={img.heroHoangHon}
          alt="Phòng áp mái gỗ thông, cửa vòm mở ra ban công nhìn hoàng hôn trên phố núi Đà Lạt"
          fill
          preload
          sizes="100vw"
          quality={100}
          placeholder="blur"
          className="ns-kenburns object-cover object-[38%_45%] nav:object-[center_45%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,41,31,0.68)_0%,rgba(22,41,31,0.34)_36%,rgba(22,41,31,0)_66%)]" />
        <div className="absolute inset-0 bg-deep/30 nav:hidden" />

        <header className="relative z-2">
          <div className="ns-container flex items-center justify-between gap-5 py-[18px]">
            <a href="#top" aria-label="Ngọc Sang Đà Lạt – về đầu trang">
              <Wordmark />
            </a>
            <nav
              aria-label="Điều hướng chính"
              className="hidden gap-[30px] text-[15px] font-medium nav:flex"
            >
              <a href="#gioi-thieu">Giới thiệu</a>
              <a href="#phong">Phòng nghỉ</a>
              <a href="#trai-nghiem">Trải nghiệm</a>
              <a href="#hinh-anh">Hình ảnh</a>
              <a href="#lien-he">Liên hệ</a>
            </nav>
            <div className="flex items-center gap-3.5">
              <a
                href={`tel:${SITE.phone}`}
                className="hidden min-h-11 items-center text-[15px] font-semibold whitespace-nowrap min-[481px]:inline-flex"
              >
                {SITE.phoneDisplay}
              </a>
              <a className="ns-btn" href="#dat-phong">
                Đặt phòng
              </a>
            </div>
          </div>
        </header>

        <div className="ns-container flex items-end justify-between gap-8 pt-[clamp(40px,7vw,96px)] pb-[clamp(72px,9vw,130px)]">
          <div className="ns-rise max-w-[700px]">
            <h1 className="font-display [text-shadow:0_2px_18px_rgba(22,41,31,0.6)] leading-[1.15] font-medium">
              <span className="block text-[clamp(34px,5vw,60px)] text-balance">
                Một chốn nghỉ giữa lòng Đà Lạt
              </span>
              <span className="mt-1 block font-script text-[clamp(44px,6.4vw,82px)] leading-[1.05] font-normal text-gold-soft">
                ấm cúng và gần phố
              </span>
            </h1>
            <p className="mt-5 max-w-[30em] text-[clamp(15px,1.5vw,17px)] text-[#EEF1EA]">
              Hệ thống khách sạn Ngọc Sang có ba chi nhánh tại Đà Lạt. Phòng gỗ
              ấm, ban công nhìn phố núi, đi bộ 4 phút tới chợ Đà Lạt.
            </p>
          </div>
          <div className="mb-10 hidden w-[190px] shrink-0 rotate-[4deg] rounded-md bg-cream px-[18px] py-5 text-center font-script text-[30px] leading-[1.15] text-forest shadow-[0_18px_30px_-16px_rgba(0,0,0,0.6)] nav:block">
            Mở cửa ban công là thấy Đà Lạt.
          </div>
        </div>
        <Wave className="absolute inset-x-0 -bottom-px z-1 text-cream" />
      </section>

      <div className="ns-paper">
        <div className="ns-reveal ns-container flex items-center justify-center gap-3.5 pt-[clamp(16px,2.5vw,28px)]">
          <PineBranch />
          <div className="flex items-center justify-center gap-x-[clamp(8px,3vw,32px)] rounded-full bg-forest px-[clamp(16px,4vw,40px)] py-2.5 font-script text-[clamp(20px,3.2vw,36px)] leading-[1.2] whitespace-nowrap text-cream">
            <span>Trung tâm</span>
            <span className="text-gold" aria-hidden="true">
              +
            </span>
            <span>Sạch sẽ</span>
            <span className="text-gold" aria-hidden="true">
              +
            </span>
            <span>Ấm cúng</span>
          </div>
          <PineBranch flip />
        </div>

        <section
          id="gioi-thieu"
          className="pt-[clamp(28px,4vw,48px)] pb-[clamp(20px,3vw,36px)]"
        >
          <div className="ns-container flex flex-wrap items-center gap-[clamp(32px,6vw,80px)]">
            <div className="ns-reveal min-w-0 flex-[1_1_380px]">
              <Heading no="01" label="Về Ngọc Sang">
                Ở trung tâm, đi đâu cũng gần
              </Heading>
              <p className="mt-3.5 max-w-[32em] text-muted">
                Ngọc Sang đón khách du lịch, cặp đôi, gia đình và khách công tác
                tại ba chi nhánh ở Đà Lạt. Phòng sạch, thông tin rõ ràng, đặt
                phòng nhanh qua điện thoại hoặc Zalo.
              </p>
              <div className="mt-7 grid grid-cols-3 gap-3 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <Icon size={40}>{pinPath}</Icon>
                  <div className="text-sm leading-[1.3] font-semibold sm:text-base">
                    Gần chợ Đà Lạt
                  </div>
                  <div className="text-[12.5px] leading-snug text-muted sm:text-sm">
                    Đi bộ 4 phút từ Ngọc Sang 1
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Icon size={40}>
                    <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
                    <path d="M3 15h18" />
                    <path d="M6 10V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3" />
                    <path d="M4 18v2M20 18v2" />
                  </Icon>
                  <div className="text-sm leading-[1.3] font-semibold sm:text-base">
                    Phòng gỗ ấm cúng
                  </div>
                  <div className="text-[12.5px] leading-snug text-muted sm:text-sm">
                    Nội thất gỗ, nhiều phòng có ban công
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Icon size={40}>{clockPath}</Icon>
                  <div className="text-sm leading-[1.3] font-semibold sm:text-base">
                    Lễ tân 24/24
                  </div>
                  <div className="text-[12.5px] leading-snug text-muted sm:text-sm">
                    Hỗ trợ đặt tour, thuê xe máy
                  </div>
                </div>
              </div>
            </div>
            <div className="ns-reveal relative min-w-0 flex-[1_1_380px] pr-[clamp(20px,4vw,44px)] pb-[clamp(28px,4vw,48px)]">
              <Image
                src={img.leTan}
                alt="Quầy lễ tân Ngọc Sang Hotel"
                sizes="(min-width: 860px) 560px, 100vw"
                className="ns-zoomable aspect-4/3 w-full rounded-[36px] object-cover"
              />
              <div className="absolute right-0 bottom-0 w-[34%] rotate-[4deg] bg-white px-2 pt-2 pb-[22px] shadow-[0_16px_30px_-14px_rgba(22,41,31,0.55)]">
                <Image
                  src={img.matTienNgay}
                  alt="Mặt tiền Ngọc Sang Hotel trên Đường 3/2"
                  sizes="200px"
                  className="ns-zoomable aspect-3/4 w-full object-cover object-[center_40%]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        id="phong"
        className="ns-onphoto relative overflow-hidden bg-deep py-[clamp(64px,8vw,116px)]"
      >
        <Backdrop src={img.anhNen5} position="object-[center_45%]" />
        <div className="ns-container relative">
          <Heading no="02" label="Phòng nghỉ">
            Phòng cho mọi chuyến đi
          </Heading>
          <AutoScroller className="ns-scroller mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto max-nav:pb-2 nav:grid nav:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] nav:gap-[22px] nav:overflow-visible">
            {rooms.map((room, i) => (
              <article
                key={room.name}
                style={{ transitionDelay: `${i * 80}ms` }}
                className="ns-reveal flex flex-col overflow-hidden rounded-[14px] border border-line bg-white shadow-[0_14px_28px_-24px_rgba(22,41,31,0.5)] max-nav:w-[82%] max-nav:shrink-0 max-nav:snap-start min-[560px]:max-nav:w-[46%]"
              >
                <Image
                  src={room.image}
                  alt={room.alt}
                  sizes="(min-width: 860px) 300px, 100vw"
                  className={`ns-zoomable ns-zoom aspect-16/10 w-full object-cover ${room.position ?? ""}`}
                />
                <div className="flex grow flex-col gap-2.5 px-[18px] pt-4 pb-[18px]">
                  <h3 className="text-lg font-semibold">{room.name}</h3>
                  <div className="text-sm text-muted">{room.desc}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {room.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-sage px-2.5 py-[3px] text-[13px] text-forest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                    <span className="flex flex-col text-[13px] leading-tight text-muted">
                      Từ / đêm
                      <strong className="text-[17px] font-semibold text-wine">
                        {room.price}
                      </strong>
                    </span>
                    <BookRoomLink room={room.name} />
                  </div>
                </div>
              </article>
            ))}
          </AutoScroller>
        </div>
      </section>

      <section id="trai-nghiem" className="ns-paper ns-section">
        <div className="ns-container">
          <Heading no="03" label="Trải nghiệm">
            Những khoảnh khắc đáng nhớ
          </Heading>
          <div className="mt-6 flex flex-wrap items-center gap-[clamp(28px,5vw,64px)]">
            <div className="ns-reveal relative min-w-0 flex-[1_1_340px] pr-[clamp(16px,3vw,36px)] pb-[clamp(16px,2vw,24px)]">
              <Image
                src={img.trangTriPhong}
                alt="Giường trang trí cánh hoa hồng, khăn xếp thiên nga và bóng bay"
                sizes="(min-width: 860px) 560px, 100vw"
                className="ns-zoomable aspect-16/10 w-full rounded-2xl object-cover object-[center_68%]"
              />
              <div className="absolute right-0 bottom-0 w-[30%] rotate-[5deg] bg-white px-1.5 pt-1.5 pb-4 shadow-[0_14px_26px_-12px_rgba(22,41,31,0.55)]">
                <Image
                  src={img.phongViewPho}
                  alt="Phòng đôi nhìn ra thành phố qua cửa kính"
                  sizes="180px"
                  className="ns-zoomable aspect-square w-full object-cover"
                />
              </div>
            </div>
            <div className="grid min-w-0 flex-[1_1_360px] grid-cols-2 gap-2.5 sm:gap-3.5">
              {[
                {
                  title: "Trang trí phòng theo dịp",
                  desc: "Kỷ niệm, sinh nhật, cầu hôn",
                  icon: (
                    <path d="M12 20s-7-4.400-7-9.500A3.900 3.900 0 0 1 12 8a3.900 3.900 0 0 1 7 2.500C19 15.600 12 20 12 20z" />
                  ),
                },
                {
                  title: "Đi bộ ra chợ đêm",
                  desc: "4 phút từ Ngọc Sang 1",
                  icon: (
                    <>
                      <path d="M4 10h16l-1.500-5h-13z" />
                      <path d="M5 10v9h14v-9" />
                      <path d="M10 19v-5h4v5" />
                    </>
                  ),
                },
                {
                  title: "Ngắm phố núi từ ban công",
                  desc: "Sáng có sương, tối lên đèn",
                  icon: (
                    <>
                      <path d="M3 19l6-9 4 5 3-4 5 8z" />
                      <circle cx="17" cy="6" r="2" />
                    </>
                  ),
                },
                {
                  title: "Đặt tour, thuê xe máy",
                  desc: "Lễ tân hỗ trợ và chỉ đường",
                  icon: (
                    <>
                      <circle cx="6" cy="17" r="3" />
                      <circle cx="18" cy="17" r="3" />
                      <path d="M6 17l4-8h4l4 8" />
                      <path d="M13 6h3" />
                    </>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="ns-reveal flex flex-col gap-1.5 rounded-[14px] border border-sage-line bg-sage p-3.5 sm:p-5"
                >
                  <Icon size={34}>{item.icon}</Icon>
                  <div className="text-sm leading-[1.3] font-semibold sm:text-base">
                    {item.title}
                  </div>
                  <div className="text-[12.5px] leading-snug text-muted sm:text-sm">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="chi-nhanh"
        className="ns-onphoto relative overflow-hidden bg-deep py-[clamp(64px,8vw,116px)]"
      >
        <Backdrop
          src={img.anhNen6}
          position="object-[center_55%]"
          noBottomEdge
        />
        <div className="ns-container relative">
          <Heading no="04" label="Chi nhánh">
            Ba địa chỉ tại Đà Lạt
          </Heading>
          <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[22px]">
            {branches.map((branch, i) => (
              <article
                key={branch.name}
                style={{ transitionDelay: `${i * 80}ms` }}
                className="ns-reveal flex items-center gap-4 rounded-[14px] border border-line bg-white p-3.5"
              >
                <Image
                  src={branch.image}
                  alt={branch.alt}
                  sizes="104px"
                  className={`ns-zoomable h-[136px] w-[104px] shrink-0 rounded-[10px] object-cover ${branch.position ?? ""}`}
                />
                <div className="flex min-w-0 flex-col gap-1.5">
                  <h3 className="text-lg font-semibold">{branch.name}</h3>
                  <div className="text-sm text-muted">{branch.desc}</div>
                  <div className="text-sm font-medium">{branch.address}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="ns-torn">
        <div className="ns-torn-rim" />
        <section
          id="da-lat"
          className="ns-onphoto relative overflow-hidden text-white"
        >
          <div className="ns-torn-top absolute inset-0 bg-deep">
            <Image
              src={img.anhNen7}
              alt="Hồ Xuân Hương buổi sáng, nhà thuỷ tạ và hàng thông bên bờ hồ"
              fill
              sizes="100vw"
              quality={100}
              className="object-cover object-[center_50%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,41,31,0.8)_0%,rgba(22,41,31,0.4)_48%,rgba(22,41,31,0.1)_100%)]" />
          </div>
          <div className="ns-container relative flex flex-wrap items-center gap-[clamp(28px,5vw,64px)] py-[clamp(72px,10vw,140px)]">
            <div className="ns-reveal min-w-0 flex-[1_1_320px]">
              <div className="text-[13px] font-medium tracking-[0.22em] text-gold-soft uppercase">
                Trải nghiệm Đà Lạt
              </div>
              <h2 className="mt-3 font-display text-[clamp(34px,4.6vw,56px)] leading-[1.1] font-semibold">
                Đà Lạt
                <br />
                đang chờ bạn
              </h2>
              <p className="mt-4 max-w-[26em] text-[#EEF1EA]">
                Hồ, đồi thông và phố đêm đều cách khách sạn một quãng ngắn. Lễ
                tân sẵn sàng gợi ý lịch trình cho bạn.
              </p>
              <a
                href={SITE.zalo}
                target="_blank"
                rel="noopener"
                className="ns-btn mt-6 gap-2.5 rounded-full bg-cream px-6 text-forest"
              >
                Nhờ lễ tân gợi ý lịch trình {arrow}
              </a>
            </div>
            <div className="grid min-w-0 flex-[1.3_1_420px] grid-cols-2 items-start nav:grid-cols-3 gap-4">
              {discoveries.map((d, i) => (
                <article
                  key={d.title}
                  style={{ transitionDelay: `${i * 90}ms` }}
                  className={`ns-reveal overflow-hidden rounded-[14px] bg-cream text-ink shadow-[0_22px_40px_-22px_rgba(0,0,0,0.75)] ${i === 1 ? "nav:mt-8" : ""} ${i === 2 ? "max-nav:col-span-2" : ""}`}
                >
                  <Image
                    src={d.image}
                    alt={d.alt}
                    sizes="(min-width: 860px) 220px, 50vw"
                    className={`ns-zoomable ns-zoom aspect-4/3 w-full object-cover ${i === 2 ? "max-nav:aspect-16/7" : ""}`}
                  />
                  <div className="px-4 pt-3 pb-4">
                    <h3 className="font-display text-lg font-semibold text-forest">
                      {d.title}
                    </h3>
                    <div className="mt-1 text-[13.5px] leading-snug text-muted">
                      {d.desc}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <Wave className="absolute inset-x-0 -bottom-px text-cream" />
        </section>
      </div>

      <div className="ns-paper">
        <section id="hinh-anh" className="ns-section">
          <div className="ns-container">
            <div className="ns-reveal text-center">
              <div className="ns-eyebrow justify-center">
                <span>06</span>
                <i />
                <span>Hình ảnh</span>
              </div>
              <h2 className="ns-h2">Một góc Đà Lạt của Ngọc Sang</h2>
            </div>
            <div className="mx-auto mt-8 grid max-w-[900px] grid-cols-2 gap-x-[clamp(14px,3vw,36px)] gap-y-[clamp(26px,4vw,44px)] nav:grid-cols-3">
              {gallery.map((shot, i) => (
                <figure
                  key={shot.caption}
                  style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                  className={`ns-reveal ns-polaroid relative bg-white px-[clamp(7px,1vw,11px)] pt-[clamp(7px,1vw,11px)] pb-2 shadow-[0_18px_30px_-16px_rgba(22,41,31,0.55)] ${shot.tilt}`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-3 left-1/2 h-6 w-[34%] -translate-x-1/2 -rotate-2 bg-[#E6CF95]/90 shadow-sm"
                  />
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    sizes="(min-width: 860px) 280px, 46vw"
                    className="ns-zoomable aspect-[5/4] w-full object-cover"
                  />
                  <figcaption className="pt-1.5 text-center font-script text-[clamp(20px,2.6vw,28px)] leading-[1.25] text-forest">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-5 flex justify-center">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener"
                className="ns-link inline-flex min-h-11 items-center gap-2.5 rounded-full border-[1.5px] border-forest px-6 text-[15px] font-semibold"
              >
                Xem thêm hình ảnh {arrow}
              </a>
            </div>
          </div>
        </section>

        <section className="ns-section">
          <div className="ns-container">
            <Heading no="07" label="Cảm nhận khách">
              Khách nói gì về Ngọc Sang?
            </Heading>
            <AutoScroller className="ns-scroller mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto rounded-[22px] bg-sage p-[clamp(14px,2vw,22px)] nav:grid nav:grid-cols-3 nav:gap-4 nav:overflow-visible">
              {testimonials.map((t, i) => (
                <figure
                  key={t.name}
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="ns-reveal flex flex-col gap-3 rounded-xl bg-cream p-5 max-nav:w-[86%] max-nav:shrink-0 max-nav:snap-center min-[560px]:max-nav:w-[46%]"
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest font-display text-lg font-semibold text-gold-soft"
                    >
                      {t.name.replace("Gia đình chị ", "")[0]}
                    </span>
                    <figcaption className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold">{t.name}</span>
                      <span className="text-[13px] text-muted">
                        <span
                          className="text-gold"
                          role="img"
                          aria-label="5 trên 5 sao"
                        >
                          ★★★★★
                        </span>{" "}
                        · {t.from}
                      </span>
                    </figcaption>
                  </div>
                  <blockquote className="text-[15px] text-muted">
                    {t.text}
                  </blockquote>
                </figure>
              ))}
            </AutoScroller>
          </div>
        </section>
      </div>

      <section className="ns-onphoto relative overflow-hidden bg-black py-[clamp(64px,8vw,116px)]">
        <Image
          src={img.daLatVeDem}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <Wave flip className="absolute inset-x-0 -top-px text-cream" />
        <Wave className="absolute inset-x-0 -bottom-px text-deep" />
        <div className="ns-container relative flex flex-col gap-[clamp(32px,4.5vw,56px)]">
          <div className="ns-reveal">
            <div className="ns-eyebrow">
              <span>08</span>
              <i />
              <span>Hỏi đáp</span>
            </div>
            <h2 className="ns-h2">Những câu hỏi thường gặp</h2>
            <div className="mt-5 flex flex-col gap-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="ns-faq rounded-[10px] border border-line bg-white"
                >
                  <summary className="flex min-h-[52px] items-center justify-between gap-3 px-4 py-2 text-[15px] font-medium">
                    <span>{faq.q}</span>
                    <span
                      className="ns-plus text-[22px] leading-none text-wine"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-[15px] text-muted">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div
            id="khoi-dat-phong"
            className="ns-reveal ns-ondark rounded-[28px] border border-white/15 bg-black/55 p-[clamp(20px,3vw,36px)] text-[#F4EFE2] backdrop-blur-sm"
          >
            <div className="ns-eyebrow text-mist">
              <span>09</span>
              <i className="bg-mist!" />
              <span>Đặt phòng</span>
            </div>
            <h2 className="ns-h2 text-white">Gửi yêu cầu đặt phòng</h2>
            <BookingForm />
          </div>
        </div>
      </section>

      <footer
        id="lien-he"
        className="ns-ondark ns-footer bg-deep pt-4 text-[14.5px] text-mist"
      >
        <div className="ns-container grid gap-x-10 gap-y-7 nav:grid-cols-[1.1fr_1.2fr_1.3fr]">
          <div className="flex flex-col items-start gap-3">
            <div className="text-white">
              <Wordmark />
            </div>
            <span>Khách sạn, dịch vụ lưu trú tại Đà Lạt</span>
            <div className="flex flex-wrap gap-x-5">
              {[
                ["Facebook", SITE.facebook],
                ["Messenger", SITE.messenger],
                ["Zalo", SITE.zalo],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-11 items-center text-[#F4EFE2] underline"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="font-display text-lg font-semibold text-white">
              Liên hệ
            </div>
            <div className="flex gap-2.5">
              <Icon
                size={18}
                stroke="#D9B25A"
                width={1.8}
                className="mt-[3px] shrink-0"
              >
                {pinPath}
              </Icon>
              <span>{SITE.address}</span>
            </div>
            <div className="flex gap-2.5">
              <Icon
                size={18}
                stroke="#D9B25A"
                width={1.8}
                className="mt-[3px] shrink-0"
              >
                {phonePath}
              </Icon>
              <span>
                SĐT / Zalo:{" "}
                <a
                  href={`tel:${SITE.phone}`}
                  className="font-semibold text-white underline"
                >
                  {SITE.phoneDisplay}
                </a>
              </span>
            </div>
            <div className="flex gap-2.5">
              <Icon
                size={18}
                stroke="#D9B25A"
                width={1.8}
                className="mt-[3px] shrink-0"
              >
                {clockPath}
              </Icon>
              <span>{SITE.checkTime}</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-sage">
            <iframe
              src={SITE.mapsEmbed}
              title="Bản đồ Ngọc Sang Hotel, 20 Đường 3/2, Đà Lạt"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[170px] w-full border-0"
            />
            <a
              href={SITE.maps}
              target="_blank"
              rel="noopener"
              className="absolute right-2 bottom-2 rounded-lg bg-white px-3 py-1.5 text-[13px] font-semibold text-forest! shadow-md"
            >
              Mở Google Maps {arrow}
            </a>
          </div>
        </div>
        <div className="ns-container mt-6 border-t border-white/10 pt-4 text-[13.5px]">
          © 2026 {SITE.name}
        </div>
      </footer>

      <a
        className="ns-btn fixed right-6 bottom-6 z-30 hidden size-16 rounded-full border-[3px] border-white bg-[#0A63D8] p-0 text-base shadow-[0_12px_24px_-10px_rgba(0,0,0,0.55)] nav:flex"
        href={SITE.zalo}
        target="_blank"
        rel="noopener"
        aria-label="Nhắn Zalo cho Ngọc Sang"
      >
        Zalo
      </a>

      <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-line bg-white px-3 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom,0px))] font-semibold shadow-[0_-10px_24px_-18px_rgba(22,41,31,0.5)] nav:hidden">
        <a
          href={`tel:${SITE.phone}`}
          className="flex min-h-[50px] flex-[1_1_0] items-center justify-center rounded-xl border-[1.5px] border-forest text-forest"
        >
          Gọi
        </a>
        <a
          href={SITE.zalo}
          target="_blank"
          rel="noopener"
          className="flex min-h-[50px] flex-[1_1_0] items-center justify-center rounded-xl border-[1.5px] border-forest text-forest"
        >
          Zalo
        </a>
        <a
          href="#dat-phong"
          className="flex min-h-[50px] flex-[2_1_0] items-center justify-center rounded-xl bg-wine text-white"
        >
          Đặt phòng
        </a>
      </div>
    </BookingProvider>
  );
}

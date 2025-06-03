import Link from "next/link";
import { notFound } from "next/navigation";
import ImageCarousel from "@/components/image-carousel";
import { ReactNode } from "react";
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Dapatkan data koleksi berdasarkan slug
  const collection = collections[params.slug];
  
  // Jika koleksi tidak ditemukan, kembalikan metadata default
  if (!collection) {
    return {
      title: "Collection Not Found | Secret Couture 2025",
      description: "The requested fashion collection could not be found",
    };
  }
  
  // Kembalikan metadata yang sesuai dengan koleksi
  return {
    title: `${collection.title} | Secret Couture 2025`,
    description: `${collection.description} - Fashion collection by SMKN 1 Kota Bekasi students`,
    keywords: `${collection.title.toLowerCase()}, fashion collection, ${collection.subtitle}, Secret Couture, SMKN 1 Bekasi`,
    openGraph: {
      title: `${collection.title} | Secret Couture 2025`,
      description: collection.description,
      images: collection.images.length > 0 ? [{ url: collection.images[0] }] : [],
    },
  };
}


interface Collection {
  title: string;
  description: string;
  icon: ReactNode;
  background: string;
  images: string[];
  texts: string[];
  designers: string[];
  subtitle: string;
  quote: string;
  finalImages: string[];
}

const collections: Record<string, Collection> = {
  aahar: {
    title: "AAHAR",
    description: "Cerita lembut dari rasa dan rupa",
    icon: (
      <svg viewBox="0 0 24 24" className="w-20 h-20 fill-white">
        <path d="M12 2C8 2 5 5 5 9c0 2 1 4 2 5l5 6 5-6c1-1 2-3 2-5 0-4-3-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" />
      </svg>
    ),
    background: "linear-gradient(45deg, #FFB6C1, #FF69B4)",
    images: [
      "/images/SMKN 1 BEKASI 24.jpg",
      "/images/SMKN 1 BEKASI 9.jpg",
      "/images/SMKN 1 BEKASI 47.jpg",
      "/images/SMKN 1 BEKASI 59.jpg",
      "/images/SMKN 1 BEKASI 50.jpg",
      "/images/SMKN 1 BEKASI 68.jpg",
    ],
    texts: [
      "Siluet lurus dengan layering ringan serta butiran payet pada desain wanita menciptakan kesan flowy dan anggun",
      "Potongan tunik panjang pada desain pria memberi sentuhan modern namun tetap harmonis",
      "Desain yang longgar dan sopan menunjukkan penghargaan terhadap nilai kesantunan",
      "Sentuhan motif etnik pada bagian tertentu yang memperkuat unsur tradisional",
      "",
      "",
    ],
    designers: ["Nawal", "Ita", "Intan", "Nuha", "Nadine", "Nabila. N", "Bianca", "Brineth"],
    subtitle: "Selendang Mayang",
    quote: "Sebuah tafsiran visual dari kuliner tradisional khas Kota Bekasi – Cerita lembut dari rasa dan rupa.",
    finalImages: [
      "/images/SMKN 1 BEKASI 1212.jpg",
      "/images/SMKN 1 BEKASI 935.jpg",
      "/images/SMKN 1 BEKASI 923.jpg",
      "/images/SMKN 1 BEKASI 956.jpg",
      "/images/SMKN 1 BEKASI 943.jpg",
      "/images/SMKN 1 BEKASI 1200.jpg",
      "/images/SMKN 1 BEKASI 976.jpg",
      "/images/SMKN 1 BEKASI 972.jpg",
      "/images/SMKN 1 BEKASI 956.jpg",
      "/images/SMKN 1 BEKASI 117.jpg",
      "/images/SMKN 1 BEKASI 144.jpg",
      "/images/SMKN 1 BEKASI 113.jpg",
      "/images/SMKN 1 BEKASI 105.jpg",
      "/images/SMKN 1 BEKASI 93.jpg",
      "/images/SMKN 1 BEKASI 77.jpg",
    ],
  },
  harsa: {
    title: "HARSA",
    description: "Ceria dalam warna, dinamis dalam bentuk",
    icon: (
      <svg viewBox="0 0 24 24" className="w-20 h-20 fill-white">
        <path d="M12 2l-2 4-2-1 1 3-3-1 2 3-3 0 3 2-2 2 3-1-1 3 2-1 2 4 2-4 2 1-1-3 3 1-2-2 3-2-3 0 2-3-3 1 1-3-2 1z" />
      </svg>
    ),
    background: "linear-gradient(45deg, #87CEEB, #00BFFF)",
    images: [
      "/images/SMKN 1 BEKASI 764.jpg",
      "/images/SMKN 1 BEKASI 648.jpg",
      "/images/SMKN 1 BEKASI 671.jpg",
      "/images/SMKN 1 BEKASI 720.jpg",
      "/images/SMKN 1 BEKASI 762.jpg",
      "/images/SMKN 1 BEKASI 753.jpg",
      "/images/SMKN 1 BEKASI 740.jpg",
      "/images/SMKN 1 BEKASI 623.jpg",
      "/images/SMKN 1 BEKASI 637.jpg",
      "/images/SMKN 1 BEKASI 662.jpg",
    ],
    texts: [
      "Kesan ombak pada kolam renang diterjemahkan melalui desain pada obi belt",
      "Penerapan teknik couching stitch pada bagian tali obi",
      "Penggambaran kolam renang dengan atap lancip dituangkan pada lengan",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    designers: ["Dwi", "Salsabila", "Chandraning", "Reva. M", "Fatimah", "Fernanda", "Tania"],
    subtitle: "Go! Wet",
    quote: "Lahir dari keceriaan dan warna - warni Go! Wet Waterpark – Ceria dalam warna, dinamis dalam bentuk.",
    finalImages: [
      "/images/SMKN 1 BEKASI 511.jpg",
      "/images/SMKN 1 BEKASI 508.jpg",
      "/images/SMKN 1 BEKASI 576.jpg",
      "/images/SMKN 1 BEKASI 485.jpg",
      "/images/SMKN 1 BEKASI 476.jpg",
      "/images/SMKN 1 BEKASI 527.jpg",
      "/images/SMKN 1 BEKASI 394.jpg",
      "/images/SMKN 1 BEKASI 424.jpg",
      "/images/SMKN 1 BEKASI 442.jpg",
      "/images/SMKN 1 BEKASI 435.jpg",
    ],
  },
  niskala: {
    title: "NISKALA",
    description: "Kontras warna, futuristik di tiap siluet desain",
    icon: (
      <svg viewBox="0 0 24 24" className="w-20 h-20 fill-white">
        <path d="M12 2L2 20h20L12 2zm0 4l6 12H6l6-12z" />
      </svg>
    ),
    background: "linear-gradient(45deg, #9370DB, #DDA0DD)",
    images: [
      "/images/SMKN 1 BEKASI 287.jpg",
      "/images/SMKN 1 BEKASI 306.jpg",
      "/images/SMKN 1 BEKASI 349.jpg",
      "/images/SMKN 1 BEKASI 356.jpg",
      "/images/SMKN 1 BEKASI 333.jpg",
      "/images/SMKN 1 BEKASI 319.jpg",
      "/images/SMKN 1 BEKASI 296.jpg",
      "/images/SMKN 1 BEKASI 281.jpg",
      "/images/SMKN 1 BEKASI 368.jpg",
      "/images/SMKN 1 BEKASI 342.jpg",
    ],
    texts: [
      "Menghadirkan nuansa urban yang edgy dan progresif",
      "Detail patchwork dan saku geometris menegaskan kesan bertumpuk dan bersudut tajam",
      "Garis siluet yang tegas serta sudut tajam pada cape dan kerah",
      "Patchwork pada bagian badan belakang memberikan kesan multidimensi",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    designers: ["Nadya", "Sarah", "Syahdiah", "Khayrah", "Melda", "Sabila", "Lijah", "Keysyah"],
    subtitle: "Landmark Summarecon",
    quote: "Bangunan arsitektur di persimpangan bundaran pusat Kota Bekasi, Landmark Summarecon – Kontras warna, futuristik di tiap siluet desain.",
    finalImages: [
      "/images/SMKN 1 BEKASI 155.jpg",
      "/images/SMKN 1 BEKASI 199.jpg",
      "/images/SMKN 1 BEKASI 191.jpg",
      "/images/SMKN 1 BEKASI 183.jpg",
      "/images/SMKN 1 BEKASI 239.jpg",
      "/images/SMKN 1 BEKASI 276.jpg",
      "/images/SMKN 1 BEKASI 259.jpg",
      "/images/SMKN 1 BEKASI 244.jpg",
      "/images/SMKN 1 BEKASI 268.jpg",
      "/images/SMKN 1 BEKASI 228.jpg",
    ],
  },
  renjana: {
    title: "RENJANA",
    description: "Sentuhan irama budaya pada balutan kain",
    icon: (
      <svg viewBox="0 0 24 24" className="w-20 h-20 fill-white">
        <path d="M12 2C8 2 5 5 5 9v6c0 2 1 4 3 5l4 1 4-1c2-1 3-3 3-5V9c0-4-3-7-7-7zm-3 8c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zm6 0c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zm-3 6c-2 0-4-1-4-3h8c0 2-2 3-4 3z" />
      </svg>
    ),
    background: "linear-gradient(45deg, #DC143C, #FF69B4)",
    images: [
      "/images/SMKN 1 BEKASI 1148.jpg",
      "/images/SMKN 1 BEKASI 1134.jpg",
      "/images/SMKN 1 BEKASI 1156.jpg",
      "/images/SMKN 1 BEKASI 1178.jpg",
      "/images/SMKN 1 BEKASI 1124.jpg",
      "/images/SMKN 1 BEKASI 898.jpg",
      "/images/SMKN 1 BEKASI 900.jpg",
    ],
    texts: [
      "Kerah menjadi elemen utama dalam desain ini dengan menggunakan rekayasa pola kerah pita",
      "Titik fokus desain terdapat di bagian kemeja depan berbentuk segitiga meruncing sebagai aksen dari penerapan rekayasa pola – Pattern magic",
      "Anyaman sebagai hiasan yang terinspirasi dari harnet atau jaring jaring konde seorang penari",
      "Lengan berbentuk kubah yang menciptakan kesan megah dan unik yang mencerminkan arsitektur khas Betawi",
      "",
      "",
      "",
      "",
    ],
    designers: ["Indriyani", "Tasya", "Andin", "Valda", "Nabila. A", "Safa", "Syifa", "Desi"],
    subtitle: "Tari Lenggang Bekasi",
    quote: "Segala yang hidup, bergerak, dan bermakna, menyatu dalam satu tarian – Sentuhan irama budaya pada balutan kain.",
    finalImages: [
      "/images/SMKN 1 BEKASI 819.jpg",
      "/images/SMKN 1 BEKASI 808.jpg",
      "/images/SMKN 1 BEKASI 853.jpg",
      "/images/SMKN 1 BEKASI 884.jpg",
      "/images/SMKN 1 BEKASI 1034.jpg",
      "/images/SMKN 1 BEKASI 1007.jpg",
      "/images/SMKN 1 BEKASI 980.jpg",
      "/images/SMKN 1 BEKASI 1030.jpg",
      "/images/SMKN 1 BEKASI 1064.jpg",
      "/images/SMKN 1 BEKASI 1096.jpg",
      "/images/SMKN 1 BEKASI 1083.jpg",
      "/images/SMKN 1 BEKASI 1073.jpg",
      "/images/SMKN 1 BEKASI 1050.jpg",
    ],
  },
};

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = collections[slug as keyof typeof collections];

  if (!collection) {
    notFound();
  }

  // Define image and text for single wide image section based on slug
  const singleImageMap: Record<string, { image: string; text: string }> = {
    aahar: {
      image: "/images/SMKN 1 BEKASI 137.jpg",
      text: "Keanggunan tradisional dengan sentuhan modern melalui teknik payet",
    },
    harsa: {
      image: "/images/SMKN 1 BEKASI 581.jpg",
      text: "Teknik couching stitch pada cape memberikan kesan gelombang yang ada di <em>Go! Wet</em>",
    },
    niskala: {
      image: "/images/SMKN 1 BEKASI 191.jpg",
      text: "Penerjemahan bentuk piramida pada <strong>Landmark Summarecon</strong> pada teknik patchwork",
    },
    renjana: {
      image: "/images/SMKN 1 BEKASI 1016.jpg",
      text: "Pengambilan warna cerah sebagai ciri khas kostum tarian yang identik dengan warna – warna yang cerah",
    },
  };

  // Define intro text and image for paragraph section based on slug
  const introMap: Record<string, { image: string; text: string }> = {
    aahar: {
      image: "/images/SMKN 1 BEKASI 31.jpg",
      text: `<strong>Selendang Mayang</strong> – Koleksi busana dengan nama sub tema <strong>AAHAR</strong>. Mengambil inspirasi dari makanan tradisional khas Bekasi yang memiliki tampilan warna – warna cerah dengan penerjemahan yang mendalam. <strong>Selendang Mayang</strong> diartikan sebagai simbol kelembutan, keceriaan, dan kehangatan yang tercermin dari susunan warna lapisannya: putih dari santan, merah muda dan hijau dari sirup dan adonan kue, serta siraman gula merah dan potongan daun pandan. Makna ini diterjemahkan ke dalam desain busana melalui pemilihan palet warna pastel seperti putih, merah muda, hijau muda untuk memberikan kesan feminin, anggun, dan lembut. Filosofi bentuk selendang yang panjang, lemas, dan bergerak gemulai diwujudkan dalam siluet busana yang luwes dan berlapis, mencerminkan kebebasan dan kelembutan gerak perempuan. Setiap elemen warna dan tekstur dalam busana dirancang untuk mencerminkan karakter dan keindahan sajian tradisional ini, sehingga menghasilkan tampilan yang tidak hanya estetis tetapi juga penuh makna budaya.<br /><br />Secara bentuk, koleksi ini terdiri dari berbagai unsur visual yang mendukung interpretasi sub temanya. Rok A-<em>line</em> dengan potongan setengah lingkaran digunakan untuk menciptakan kesan anggun dan pergerakan yang dinamis, selaras dengan filosofi kebebasan dari bentuk selendang. Blus wanita diberi kerutan di bagian pinggang agar menampilkan siluet ramping dan <em>feminim</em>, sementara <em>obi belt</em> dengan bentuk huruf V di bagian depan melambangkan potongan daun pandan sebagai ciri khas sajian <strong>Selendang Mayang</strong>. Teknik <em>patchwork</em> dan motif bertumpuk pada dada menggambarkan lapisan kue dan diperkuat dengan penempatan payet tabur di sekitar kerah yang merepresentasikan es batu, santan, dan gula merah. Hiasan payet menjuntai menjadi penegas simbolik dari bentuk selendang yang lebar dan gemulai. Selain itu, terdapat <em>layering</em> pada busana dan saku bertumpuk yang terinspirasi dari bentuk kue lapis menambah kekayaan visual sekaligus memperkuat kesan tradisional yang dihadirkan dalam balutan gaya modern.`,
    },
    harsa: {
      image: "/images/SMKN 1 BEKASI 709.jpg",
      text: `<strong>Go! Wet</strong> – Dalam koleksi bernama <strong>HARSA</strong> yang terinspirasi dari keceriaan dan dinamika wisata air di Kota Bekasi. Nama <strong>HARSA</strong> sendiri bermakna kegembiraan, sesuai dengan suasana penuh tawa, ceria, dan energi yang dirasakan saat bermain di tempat tersebut. Wahana ikonik seperti Go! Wave menjadi sumber utama eksplorasi visual yang diambil dari bentuk perosotan yang meliuk-liuk dan ombak air, diadaptasikan secara kreatif ke dalam desain busana. Warna – warna perosotan disalurkan melalui pemilihan bahan berwarna cerah yang menyimbolkan semangat bermain dan kebebasan berekspresi. Gaya <em>feminim casual</em> menjadi benang merah yang menyatukan seluruh koleksi, memberikan kesan ringan, segar, dan penuh semangat layaknya atmosfer di wisata bermain air.<br /><br />Berbagai bentuk busana dalam koleksi ini hadir dengan detail dan teknik yang mencerminkan karakteristik <strong>Go! Wet</strong>. Teknik <em>couching stitch</em> digunakan secara konsisten untuk menggambarkan bentuk perosotan dan ombak, baik pada manset, <em>obi belt</em>, celana, hingga <em>outer</em>. Rok bergelombang, <em>cape</em> dengan tali melingkar, serta lengan bishop menggambarkan gerakan air yang dinamis dan bebas. Beberapa desain juga mengusung gaya <em>sporty</em> yang terinspirasi dari kolam Go! Sport, ditunjukkan melalui siluet yang lebih tegas, kerah dan manset berbentuk segitiga, serta celana dengan aksen gelombang. Aksen tersembunyi dalam rok, detail <em>layering</em>, dan pemanfaatan bentuk segitiga pada bagian atasan menambah dimensi bentuk sekaligus menyimbolkan struktur atap wahana air. Keseluruhan koleksi menyatukan elemen ceria, <em>feminim</em>, dan fungsional dalam harmoni visual yang merepresentasikan semangat eksploratif serta keseruan dari pengalaman bermain air di <strong>Go! Wet</strong>.`,
    },
    niskala: {
      image: "/images/SMKN 1 BEKASI 335.jpg",
      text: `<strong>Landmark Summarecon</strong> – Sebuah karya arsitektur diadaptasi menjadi koleksi busana. <strong>NISKALA</strong> terinspirasi dari Landmark Pyramid Summarecon Bekasi, sebuah ikon arsitektur modern yang terletak di pusat kota Bekasi sebagai <em>entry statement</em>. Arti <strong>NISKALA</strong> yang merujuk pada kata “kuat, kokoh dan tahan banting” diterjemahkan melalui permainan rupa, struktur, dan refleksi cahaya yang menggambarkan kesan tak terjamah namun nyata. Interpretasi ini diwujudkan melalui teknik <em>fabric burn</em> yang menciptakan tekstur berongga menyerupai sisi piramida, serta siluet tajam yang menyerupai sudut – sudut bangunan tersebut. Warna – warna berani seperti merah, ungu, biru, hijau neon, dan kuning digunakan untuk merepresentasikan sistem pencahayaan <em>color kinetic</em> yang memancarkan lebih dari 300 lampu, menciptakan kesan dinamis, futuristik, dan artistik layaknya cahaya kota di malam hari.<br /><br />Koleksi ini terdiri dari berbagai bentuk busana dengan karakter yang unik namun saling terhubung secara visual dan konseptual. Terdapat potongan kemeja dengan bagian belakang menyerupai bentuk piramida, rok dengan struktur mengerucut, <em>cape</em>, mantel pinggang, serta celana berongga yang mengusung teknik <em>fabric burn</em>. Siluet asimetris, detail kerah dengan sudut tajam, dan permainan <em>patchwork</em> serta pencampuran motif seperti polkadot dan bintang turut memperkaya tampilan, menghadirkan kesan bertumpuk dan multidimensi. Gaya <em>art of beat</em> yang diusung tampil melalui detail saku geometris, kerah rebah, serta penggabungan warna terang dan gelap dalam satu koleksi, menghasilkan busana yang tak hanya <em>eye catching</em> tetapi juga mencerminkan keberanian dan kebebasan berekspresi dalam menghadirkan dimensi yang tak terlihat namun terasa—itulah esensi <strong>NISKALA</strong>.`,
    },
    renjana: {
      image: "/images/SMKN 1 BEKASI 1110.jpg",
      text: `<strong>Tari Lenggang Bekasi</strong> – Diberi nama <strong>RENJANA</strong> yang berarti hasrat (yang menyala) untuk menggambarkan inspirasi dari koleksi ini, kata <strong>RENJANA</strong> sendiri juga bermakna rasa yang membara dalam hati—sebuah emosi mendalam yang menjadi benang merah dalam penciptaan busana. Sebuah tarian tradisional dengan gerakan anggun, luwes, dan penuh ekspresi yang merefleksikan semangat perempuan Bekasi yang lincah, percaya diri, dan penuh energi. Warna-warna cerah yang biasa digunakan dalam kostum tari menjadi simbol dari keceriaan, kreativitas, serta keberanian berekspresi. Maka dari itu, koleksi ini memilih palet warna seperti magenta, pink, kuning mustard, ungu taro, biru royal, hingga cokelat kemerahan untuk mencerminkan dinamika gerak dan suasana khas tarian. Di sisi lain, semangat budaya lokal diangkat melalui motif batik Bekasi, kain tenun, serta elemen khas seperti ornamen jaring konde, yang memberikan lapisan makna pada setiap busana.<br /><br />Koleksi ini tidak hanya menjadi bentuk estetika semata, tetapi juga cerminan nilai-nilai tradisi yang hidup sejalan dengan perkembangan modern. Inspirasi dari <strong>Tari Lenggang Bekasi</strong> diterjemahkan ke dalam berbagai bentuk busana yang mengutamakan siluet anggun dan struktur luwes. Gerakan tangan penari diadaptasi melalui potongan lengan lonceng, <em>puff sleeves</em>, hingga teknik <em>pattern magic</em> berbentuk pita yang menjuntai di bagian dada atau lengan, menciptakan kesan teatrikal dan dramatis. Struktur tubuh yang bebas bergerak tercermin dalam bentuk <em>A-line</em> pada gaun, rok kubah, tunik panjang, dan bawahan kulot yang lebar. Beberapa busana menampilkan detail kubah sebagai representasi dari lekuk arsitektur lokal, sementara detail anyaman di sisi busana melambangkan filosofi kebersamaan dalam budaya Bekasi. Penggunaan kerah pita, potongan asimetris, hingga desain berlapis menjadi elemen visual yang tidak hanya mencolok, tetapi juga sarat makna. Melalui perpaduan teknik modern dan warisan budaya, koleksi ini menyampaikan bagaimana tradisi dapat diolah kembali menjadi karya kontemporer yang tetap menghormati akar budayanya.`,
    },
  };

  // Define second paragraph image and text
  const secondParagraphMap: Record<string, { image: string; text: string }> = {
    aahar: {
      image: "/images/SMKN 1 BEKASI 903.jpg",
      text: `Aahar<br />Selendang Mayang<br /><br /><strong>By:</strong> Nawal, Ita, Intan, Nuha, Nadine, Nabila. N, Bianca, Brineth<br /><em>"Sebuah tafsiran visual dari kuliner tradisional khas Kota Bekasi – Cerita lembut dari rasa dan rupa"</em>`,
    },
    harsa: {
      image: "/images/SMKN 1 BEKASI 453.jpg",
      text: `Harsa<br />Go! Wet</><br /><br /><strong>By:</strong> Dwi, Salsabila, Chandraning, Reva. M, Fatimah, Fernanda, Tania</><br /><em>"Lahir dari keceriaan dan warna - warni Go! Wet Waterpark – Ceria dalam warna, dinamis dalam bentuk."</em>`,
    },
    niskala: {
      image: "/images/SMKN 1 BEKASI 181.jpg",
      text: `Niskala</><br />Landmark Summarecon<br /><br /><strong>By:</strong> Nadya, Sarah, Syahdiah, Khayrah, Melda, Sabila, Lijah, Keysyah<br /><em>"Bangunan arsitektur di persimpangan bundaran pusat Kota Bekasi, Landmark Summarecon – Kontras warna, futuristik di tiap siluet desain."</em>`,
    },
    renjana: {
      image: "/images/SMKN 1 BEKASI 890.jpg",
      text: `Renjana<br />Tari Lenggang Bekasi<br /><br /><strong>By:</strong> Indriyani, Tasya, Andin, Valda, Nabila. A, Safa, Syifa, Desi<br /><em>"Segala yang hidup, bergerak, dan bermakna, menyatu dalam satu tarian – Sentuhan irama budaya pada balutan kain."</em>`,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f0f4f8] text-gray-800">
      {/* Logo section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 py-6 sm:py-8 bg-white shadow-sm">
        <img
          src="/images/Logo-sekolah.png"
          alt="SMKN 1 Kota Bekasi Logo"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-light tracking-widest text-gray-800">
            Secret Couture
          </h1>
        </div>
        <img
          src="/images/Logo-acara.jpg"
          alt="Secret Couture Logo"
          className="w-12 h-10 sm:w-16 sm:h-12 object-contain"
        />
      </div>

      {/* Collection header */}
      <div className="relative py-12 sm:py-16 md:py-24 px-4 sm:px-6" style={{ background: collection.background }}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 sm:mb-8">{collection.icon}</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase tracking-widest font-extrabold text-white mb-4 sm:mb-6">
            {collection.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light text-white/90 max-w-3xl mx-auto mb-6 sm:mb-10">
            {collection.description}
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/95 mb-4 sm:mb-6">
            {collection.subtitle}
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl italic text-white/80 max-w-4xl mx-auto">
            {collection.quote}
          </p>
        </div>
      </div>

      {/* Main content layout */}
      <div className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Intro paragraph - Horizontal layout for larger screens, stacked for mobile */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8">
              {/* Text */}
              <div className="flex-1">
                <p
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: introMap[slug].text }}
                />
              </div>
              {/* Portrait image */}
              <div className="flex-shrink-0 w-full lg:w-[24rem]">
                <img
                  src={introMap[slug].image}
                  alt={`${collection.title} intro`}
                  className="w-full h-[24rem] sm:h-[30rem] lg:h-[36rem] rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Designers and Carousel section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-20">
            {/* Image carousel */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <ImageCarousel images={collection.images} texts={collection.texts} />
            </div>
          </div>

          {/* Additional content sections */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {/* Single wide image section */}
            <div className="w-full">
              <img
                src={singleImageMap[slug].image}
                alt={`${collection.title} highlight`}
                className={`w-full h-[16rem] sm:h-[20rem] md:h-[24rem] rounded-2xl object-cover mb-4 sm:mb-6 hover:shadow-xl transition-all duration-300 ${
                  slug === "niskala" ? "object-[center_40%]" : ""
                }`}
                style={slug === "niskala" ? { objectFit: "cover", objectPosition: "center 40%" } : {}}
              />
              <div className="text-center">
                <p
                  className="text-sm sm:text-base text-gray-600 max-w-xl sm:max-w-2xl mx-auto"
                  dangerouslySetInnerHTML={{ __html: singleImageMap[slug].text }}
                />
              </div>
            </div>

            {/* Second paragraph */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12">
              <div className="lg:col-span-5">
                <img
                  src={secondParagraphMap[slug].image}
                  alt={`${collection.title} secondary`}
                  className="w-full h-[16rem] sm:h-[20rem] md:h-[24rem] rounded-2xl object-cover hover:shadow-xl transition-all duration-300"
                />
              </div>
              <div className="lg:col-span-7 flex items-center">
                <div className="space-y-4 w-full">
                  <p
                    className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6"
                    dangerouslySetInnerHTML={{ __html: secondParagraphMap[slug].text }}
                  />
                </div>
              </div>
            </div>

            {/* Final carousel */}
            <div className="w-full bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg">
              <ImageCarousel images={collection.finalImages} texts={collection.finalImages.map(() => "")} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation - Responsive */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 py-8 sm:py-10 border-t border-gray-200 bg-white px-4">
        <Link
          href="/designers"
          className="text-base sm:text-lg font-medium text-gray-600 cursor-pointer hover:text-[#b8860b] transition-colors duration-300 text-center"
        >
          Designer
        </Link>
        <Link
          href="/"
          className="text-base sm:text-lg font-medium text-gray-800 hover:text-[#b8860b] transition-colors duration-300 text-center"
        >
          Home
        </Link>
      </div>

      {/* Footer */}
      <footer className="py-6 sm:py-8 text-center bg-gradient-to-t from-[#f0f4f8] to-white">
        <p className="text-sm sm:text-base text-gray-600">© Secret Couture 2025</p>
      </footer>
    </div>
  );
}
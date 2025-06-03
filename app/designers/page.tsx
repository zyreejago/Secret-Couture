import Link from 'next/link'
import type { Metadata } from "next"



export const metadata: Metadata = {
  title: "Designers | Secret Couture 2025",
  description: "Meet the talented student designers behind Secret Couture 2025 fashion collection from SMKN 1 Kota Bekasi",
  keywords: "fashion designers, student designers, SMKN 1 Bekasi, fashion design, Secret Couture",
  
}
export default function DesignersPage() {
  const designerGroups = {
    "Designer AAHAR": [
      { name: "Nawal Ahda Anjani", photo: "/images/Nawal Ahda Anjani.jpg", username: "@nnwallll___" },
      { name: "Ita Kumala", photo: "/images/Ita kumala.JPG", username: "@itkmlaa" },
      { name: "Nuha Shafiyah", photo: "/images/Nuha Shafiyah_.jpg", username: "@nhanuha" },
      { name: "Intan", photo: "/images/Intan_.jpg", username: "@21intannn_" },
      { name: "Nadine Alfiana", photo: "/images/nadine alfiana.jpg", username: "@nadinealfiana_" },
      { name: "Bianca Aisyah Sagie", photo: "/images/Bianca Aisyah Sagie.jpg", username: "@bian.aisyah" },
      { name: "Nabila Novitariyani", photo: "/images/blank.jpg", username: "@_sftzzbilla" },
      { name: "Brinneth Princess Gloria", photo: "/images/blank.jpg", username: "@inetth.g" },
    ],
    "Designer HARSA": [
      { name: "Dwi Aulia Rizqy", photo: "/images/Dwi Aulia Rizqy.JPG", username: "@dwirzyy_" },
      { name: "Chandraning Sekar Ayudya", photo: "/images/CHANDRANING SEKAR AYUDYA.jpg", username: "@chca.chase" },
      { name: "Reva Maulida", photo: "/images/Reva maulida.jpg", username: "@miicassaaa" },
      { name: "Fatimah Azzahra", photo: "/images/Fatimah Azzahra.jpg", username: "@ftmahazzhra18" },
      { name: "Fernanda Putri", photo: "/images/Fernanda Putri.jpg", username: "@_nanptrii_" },
      { name: "Refa Al Mukti", photo: "/images/Refa Al Mukti.jpg", username: "@_partyn3xtdoorrr" },
      { name: "Salsabila Fauziyah", photo: "/images/SALSABILA FAUZIYAH_.jpg", username: "@limozzii" },
      { name: "Tania Kristiani Sinaga", photo: "/images/blank.jpg", username: "@taniakristian" },
    ],
    "Designer NISKALA": [
      { name: "S. Nadya Aliya Rifa", photo: "/images/S. Nadya Aliya Rifa_.jpg", username: "@yoitvess" },
      { name: "Syahdiah Noviasari", photo: "/images/Syahdiah Noviasari.jpg", username: "@nvriables" },
      { name: "Sabila Fitriani", photo: "/images/Sabila Fitriani_.jpg", username: "@sfrneirs" },
      { name: "Sarah Aulia", photo: "/images/Sarah Aulia.jpg", username: "@saraaulli" },
      { name: "Khayrah Assegaf", photo: "/images/Khayrah Assegaf.jpg", username: "@khayr.ahearty" },
      { name: "Melda Meilansyah", photo: "/images/Melda meilansyah.jpg", username: "@meldamlnsy" },
      { name: "Keysyah Aulia", photo: "/images/KEYSYAH AULIA.jpg", username: "@vachakeiy" },
      { name: "Siti Kholijah", photo: "/images/Siti Kholijah.jpg", username: "@lizaakyrin" },
    ],
    "Designer RENJANA": [
      { name: "Indryani Elisabet Sinaga", photo: "/images/Indryani Elisabet Sinaga.jpg", username: "@indriyani._02" },
      { name: "Safa Sakinah", photo: "/images/Safa Sakinah.jpg", username: "@esefaalx_" },
      { name: "Nabila Aryani", photo: "/images/Nabila A.jpg", username: "@bilgreen47" },
      { name: "Tasya Rahma Pratiwi", photo: "/images/Tasya Rahma Pratiwi.jpg", username: "@tasyarah15" },
      { name: "Syifa Aulia Az Zahra", photo: "/images/Syifa Aulia Az Zahra_.jpg", username: "@sipaaa_aull" },
      { name: "Valda Zabrina", photo: "/images/valda zabrina.jpg", username: "@qddaaz" },
      { name: "Andini Kumalasari", photo: "/images/Andini Kumalasari.jpg", username: "@chaandiin" },
      { name: "Desi Trihastuti", photo: "/images/Desi Trihastuti_.jpg", username: "@desitrias_" },
    ],
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" 
      style={{
        backgroundImage: 'url("/images/Foto kelas.jpg")',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Semi-transparent overlay untuk readability */}
      <div className="min-h-screen bg-white/80 backdrop-blur-sm">
        {/* Header dengan logo */}
        <div className="bg-white/90 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-6 py-6">
            <img src="/images/Logo-sekolah.png" alt="SMKN 1 Kota Bekasi Logo" className="w-10 h-10" />
            <div className="text-center">
              <h1 className="text-xl font-light tracking-wider text-black">Secret Couture</h1>
            </div>
            <img src="/images/Logo-acara.jpg" alt="Secret Couture Logo" className="w-15 h-10" />
          </div>
        </div>

        {/* Main content */}
        <div className="px-4 py-8">
          <h1 className="text-4xl uppercase tracking-wider text-center mb-16 font-light text-black">Designers</h1>

          <div className="max-w-6xl mx-auto">
            {Object.entries(designerGroups).map(([groupName, designers], groupIndex) => (
              <div key={groupIndex} className="mb-20">
                <h2 className="text-2xl uppercase tracking-wide mb-12 text-center text-purple-600 font-light">
                  {groupName}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {designers.map((designer, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-200 shadow-lg">
                        <img
                          src={designer.photo || "/images/blank.jpg"}
                          alt={designer.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <h3 className="text-base font-light text-center mb-1 text-black">
                        {designer.name || "Unknown Designer"}
                      </h3>
                      {designer.username ? (
                        <a
                          href={`https://instagram.com/${designer.username.replace("@", "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-purple-600 hover:underline"
                        >
                          {designer.username}
                        </a>
                      ) : (
                        <span className="text-sm text-gray-400">No username</span>
                      )}
                      <p className="text-xs text-gray-500 mt-1">{groupName}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/"
              className="text-xl uppercase tracking-wider hover:text-purple-600 transition-colors duration-300 font-light text-black"
            >
              Home
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-6 text-center border-t border-gray-300 bg-white/90 backdrop-blur-sm">
          <p className="text-sm opacity-70 text-black">© Secret Couture 2025</p>
        </footer>
      </div>
    </div>
  )
}
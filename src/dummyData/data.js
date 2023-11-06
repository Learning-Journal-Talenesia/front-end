const type = [
  "h1-h6",
  "p",
  "ol",
  "image",
  "textarea",
  "journey",
  "emote",
  "habit",
  "new_habit",
  "reward",
  "calendar",
  "checkbox",
];

const dummyData = {
  id: 1,
  name: "Kelas Intensif - Cepat Kerja Jadi Admin Perkantoran",
  themes: [
    {
      id: 0,
      name: "Tema 0: Sesi Perkenalan",
      journal: [
        [
          {
            type: "h1",
            content: ["Apa saja isi jurnal ini?"],
          },
          {
            type: "p",
            content: [
              "Jurnal belajar ini bertujuan untuk membantu kamu untuk merefleksikan perjalanan belajar di fullstack bersama Talenesia. Jurnal ini berisi beberapa pertanyaan yang perlu dijawab. Tenang, tidak ada penilaian dari jawaban di jurnal ini. semua jawaban adalah benar.",
            ],
          },
          {
            type: "h3",
            content: ["Jurnal ini berisi:"],
          },
          {
            type: "ol",
            content: [
              "Tujuan belajar di fullstack",
              "Habit Tracker",
              "Pertanyaan reflektif",
              "Checklist tugas",
              "Checklist Behaviour",
              "Catatan yang bisa digunakan untuk mencatat materi",
            ],
          },
        ],
        [
          {
            type: "h1",
            content: [
              "Taukah kamu? Menulis jurnal adalah rahasia sukses mereka.",
            ],
          },
          {
            type: "image",
            content: ["link", "3xs", "Oprah Winfrey"],
          },
          {
            type: "p",
            content: [
              "Oprah tumbuh dari keluarga yang miskin dan tidak punya banyak kesempatan mendapat akses pendidikan yang baik. Namun, dari menuliskan pemikiran, perasaan, dan pengalaman pahitnya, ia malah bisa melihat dengan jeli kelemahan diri. Hal ini mendorong dia untuk terus belajar dan bertumbuh.",
            ],
          },
          {
            type: "image",
            content: ["link", "3xs", "BJ Habibie"],
          },
          {
            type: "p",
            content: [
              "Siapa yang tidak kenal ilmuwan dan presiden Indonesia yang telah banyak mencetak sejarah ini. Beliau juga memiliki kebiasaan menulis jurnal. Bahkan menulis jurnal membantu dia untuk bangkit dan memiliki semangat hidup saat dirinya terpuruk pasca kepergian Ibu Ainun Habibie",
            ],
          },
        ],
        [{ type: "journey", content: [""] }],
        [
          { type: "h1", content: ["Cara Mengisi Jurnal"] },
          {
            type: "ol",
            content: [
              "Jurnal ini disusun sesuai dengan tema pembelajaran di kelas",
              "Jurnal boleh diisi kapan saja, namun pastikan sudah mengisi tema jurnal di setiap tema sebelum tema baru dimulai di sesi kelas",
              "Tidak isi jurnal yang lebih baik, lebih buruk, benar, maupun salah. Tulisan kalian juga tidak dinilai. Semua yang kamu tuliskan adalah benar dan valid karena sesuai dengan pikiran dan perasaanmu.",
              "Jurnal ini milikmu pribadi yang berisi rahasiamu, kamu boleh menceritakan apa yang kamu tuliskan kepada teman-teman agar saling belajar. Tetapi jika tidak nyaman, kamu boleh menuliskan dijurnalmu saja",
              "Jurnal juga membantu kamu dalam memantau  proses  pengerjaan dan pengumpulan tugas",
              "Mentormu akan selalu siap untuk membantumu mengisi jurnal jika kamu mengalami kebingungan",
              "Dalam jurnal juga terdapat catatan kosong yang bisa digunakan mencatat materi pembelajaran",
            ],
          },
        ],
        [
          {
            type: "h1",
            content: [
              "Selamat, Kamu telah satu langkah mencapai perubahan hidup dengan mendaftar fullstack admin!",
            ],
          },
        ],
        [
          {
            type: "h1",
            content: ["Mari Kita Siapkan Bekal Perjalanan"],
          },
        ],
        [
          {
            type: "image",
            content: [
              "link",
              "sm",
              "Yang Pertama, yuk kita tes minat bakat di website Talenesia.com",
            ],
          },
        ],
        [
          {
            type: "textarea",
            content: [
              "Setelah tes potensi, aku baru tau kalo potensi aku adalah",
            ],
          },
          { type: "textarea", content: ["Kemudian, tipe kerja aku adalah"] },
          {
            type: "textarea",
            content: [
              "Insight yang aku dapatkan setelah memahami potensi dan tipe kerjaku adalah",
            ],
          },
        ],
        [
          {
            type: "p",
            content: ["Dari hasil tes ini, apa yang kamu rasakan?"],
          },
          {
            type: "emote",
            content: [
              "FaFaceGrin",
              "FaFaceSmileBeam",
              "FaFaceRollingEyes",
              "FaFaceFrownOpen",
              "FaFaceFrown",
            ],
          },
          {
            type: "textarea",
            content: ["mengapa kamu memilih gambar itu?"],
          },
          {
            type: "textarea",
            content: [
              "Apa yang ingin kamu tanyakan ke kakak mentor terkait hasil tes ini?",
            ],
          },
        ],
        [
          {
            type: "h1",
            content: [
              "Setelah mengenal potensi diri, yuk kita rencanakan lebih detail lagi agar fullstack ini sukses",
            ],
          },
        ],
        [
          {
            type: "textarea",
            content: ["Apa tujuanmu mengikuti program ini?"],
          },
          {
            type: "p",
            content: [
              "Ale adalah salah satu peserta program pelatihan admin. Ale awalnya sangat bersemangat mengikuti kelas karena merasa ini akan merubah hidup Ale. Tapi ternyata Ale tidak serius mengerjakan tugas, tidak bertanya ketika tidak paham. Akhirnya Ale tetap saja kesulitan mendapat kerja.",
            ],
          },
          {
            type: "p",
            content: [
              "Seperti ale, setiap orang pasti punya kebiasaan yang menghambatnya untuk belajar maksimal. Tidak usah malu, orang pada umumnya memiliki kebiasaan buruk. Apa kebiasaan yang menghambatmu untuk belajar maksimal?",
            ],
          },
          {
            type: "textarea",
            content: ["Silahkan tulis disini"],
          },
        ],
        [
          {
            type: "p",
            content: [
              "Jangan khawatir, kita selalu bisa mengganti kebiasaan buruk kita dengan kebiasaan pengganti. Ale yang biasanya tidak serius mengerjakan tugas, mencoba membagi tugas menjadi bagian-bagian yang terasa lebih mudah. Ale pun menjadi lebih semangat dan serius mengerjakan tugas.",
            ],
          },
          {
            type: "habit",
            content: [],
          },
          {
            type: "p",
            content: [
              "Tips: kamu bisa minta saran kepada mentor atau teman kelompokmu jika butuh ide untuk mengisi halaman ini",
            ],
          },
        ],
        [
          {
            type: "p",
            content: [
              "Dari banyaknya rencana yang akan dilakukan, pilih maksimal tiga hal yang akan kamu  terapkan selama mengikuti kelas kelas intensif ini",
            ],
          },
          {
            type: "new_habit",
            content: [],
          },
          {
            type: "p",
            content: [
              "Apa hadiah ingin kamu berikan ke diri sendiri kalo kamu berhasil melakukan kebiasaan baik sampai kelas ini berakhir?",
            ],
          },
          {
            type: "reward",
            content: [],
          },
        ],
        [
          {
            type: "p",
            content: [
              "Supaya kebiasaan baik ini bisa menempel di dirimu, yuk kita terapkan secara disiplin setiap hari! Berikan tanda jika kamu telah menerapkan kebiasaan tersebut setiap hari.",
            ],
          },
          {
            type: "p",
            content: [
              "Jika ada yang hari terlewat, jangan khawatir, lanjut saja terus. Kunci disiplin adalah, kamu tetap konsisten membuka kalender ini setiap hari meskipun kamu gagal atau berhasil menerapkan kebiasaan baru itu.",
            ],
          },
          {
            type: "calendar",
            content: [""],
          },
        ],
      ],
    },
    {
      id: 1,
      name: "Tema 1: Berkarir Sebagai Admin",
      journal: [
        [{ type: "journey", content: [""] }],
        [
          {
            type: "p",
            content: [
              "Gambar mana yang paling menggambarkan perasaanmu mengikuti kelas pertama?",
            ],
          },
          {
            type: "emote",
            content: [
              "FaFaceGrin",
              "FaFaceSmileBeam",
              "FaFaceRollingEyes",
              "FaFaceFrownOpen",
              "FaFaceFrown",
            ],
          },
          { type: "textarea", content: ["Mengapa kamu memilih gambar itu?"] },
        ],
        [
          {
            type: "textarea",
            content: [
              "Apa hal yang paling menarik dari topik pembelajaran “berkarir sebagai admin”?",
            ],
          },
          {
            type: "textarea",
            content: [
              "Setelah belajar berkarir sebagai admin, apa hal yang membuatmu tertarik untuk belajar lagi tentang profesi admin?",
            ],
          },
        ],
        [
          {
            type: "p",
            content: [
              "Sebelum mengikuti kelas ini, salah satu peserta bernama Ale sudah pernah belajar mengenai profesi menjadi admin. Sayangnya beberapa bulan kemudian ia lupa apa yang dipelajari karena tidak pernah mempraktekkannya.",
            ],
          },
          {
            type: "p",
            content: [
              "Supaya belajarmu tidak sia-sia seperti Ale, materi apa saja yang akan kamu praktekkan? Bagaimana kamu akan mempraktekkannya?",
            ],
          },
          {
            type: "textarea",
            content: ["Silahkan tulis disini"],
          },
        ],
        [
          {
            type: "textarea",
            content: [
              "Coba ingat-ingat lagi masa sekolah dulu. Biasanya, hal apa saja yang membuatmu semangat untuk belajar?",
            ],
          },
          {
            type: "textarea",
            content: ["Hal apa saja yang biasanya membuat kamu malas belajar?"],
          },
          {
            type: "textarea",
            content: [
              "Kira-kira jika kemalasan kembali menyerang, apa yang kamu lakukan agar bisa kembali semangat belajar?",
            ],
          },
          {
            type: "p",
            content: [
              "Tips: kamu bisa minta saran kepada mentor atau teman kelompokmu jika butuh ide untuk mengisi halaman ini",
            ],
          },
        ],
      ],
    },
    {
      id: 2,
      name: "Tema 2: Persiapan keahlian sebagai admin",
      journal: [
        [{ type: "journey", content: [] }],
        [
          {
            type: "p",
            content: [
              "Bagaimana perasaanmu saat mengikuti kelas Persiapan Keahlian Sebagai Admin?",
            ],
          },
          {
            type: "emote",
            content: [
              "FaFaceGrin",
              "FaFaceSmileBeam",
              "FaFaceRollingEyes",
              "FaFaceFrownOpen",
              "FaFaceFrown",
            ],
          },
          { type: "textarea", content: ["Mengapa kamu memilih gambar itu?"] },
        ],
        [
          {
            type: "textarea",
            content: ["Apa saja materi yang menurut kamu masih membingungkan?"],
          },
          {
            type: "p",
            content: [
              "Ale mengalami kebingungan dengan rumus-rumus excel. Meskipun sudah diberikan contoh beberapa kali, Ale tetap saja kesulitan dalam menuliskan rumus Excel. Tetapi Ale tidak ingin menyerah. Ia menonton ulang video pembelajaran dan meminta bantuan mentor.",
            ],
          },
          {
            type: "p",
            content: [
              "Apa yang akan kamu lakukan untuk memahami hal-hal kamu masih merasa bingung?",
            ],
          },
          {
            type: "textarea",
            content: ["Silahkan tulis disini"],
          },
        ],
      ],
    },
    {
      id: 3,
      name: "Tema 3: Mengerjakan Tugas-Tugas  Administratif",
      journal: [
        [{ type: "journey", content: [] }],
        [
          {
            type: "p",
            content: [
              "Bagaimana perasaanmu saat mengikuti kelas Mengerjakan tugas-tugas administratif?",
            ],
          },
          {
            type: "emote",
            content: [
              "FaFaceGrin",
              "FaFaceSmileBeam",
              "FaFaceRollingEyes",
              "FaFaceFrownOpen",
              "FaFaceFrown",
            ],
          },
          { type: "textarea", content: ["Mengapa kamu memilih gambar itu?"] },
        ],
        [
          {
            type: "p",
            content: [
              "Bersama Talenesia, minggu ini Ale belajar membuat database barang-barang yang ada di kantor. Setelah Ale tahu cara membuat database, Ale bertekad untuk menerapkan dalam kegiatan sehari-hari. Ia pun membuat database untuk mendata stok bahan makanan di rumahnya agar terpantau tanggal kadaluarsa bahan tersebut.",
            ],
          },
          {
            type: "p",
            content: [
              "Setelah mempelajari berbagai tugas administrasi, apa yang akan kamu terapkan di kegiatan sehari-hari untuk meningkatkan keterampilanmu?",
            ],
          },
          { type: "textarea", content: ["Silahkan tulis disini"] },
        ],
        [
          {
            type: "p",
            content: ["Tandai mana saja yang sesuai dengan keadaanmu."],
          },
          {
            type: "checkbox",
            content: [
              "Aku sudah berani berpendapat di dalam kelas",
              "Aku sudah berani bertanya dalam group mentoring",
              "Aku sudah berani mengungkapkan pendapatku kepada di group mentoring",
              "Aku sudah berani mengungkapkan pendapatku kepada mentor",
            ],
          },
          {
            type: "textarea",
            content: [
              "Jika ada poin yang belum kamu lakukan, coba refleksikan mengapa kamu belum melakukannya?",
            ],
          },
          {
            type: "textarea",
            content: [
              "Apa yang bisa lakukan untuk mengatasi hambatan tersebut?",
            ],
          },
        ],
        [
          {
            type: "textarea",
            content: [
              "Apa pendapat yang sudah kamu sampaikan ke dalam kelas / sesi kelompok?",
            ],
          },
          {
            type: "textarea",
            content: ["Bagaimana respon orang lain atas pendapatmu?"],
          },
          {
            type: "textarea",
            content: ["apa yang kamu sukai dari caramu menyampaikan pendapat?"],
          },
          {
            type: "textarea",
            content: [
              "apa yang masih ingin kamu perbaiki dari caramu menyampaikan pendapat?",
            ],
          },
        ],
      ],
    },
    {
      id: 4,
      name: "Tema 4: Pengelolaan dan Pengorganisiran Aktivitas Kantor",
      journal: [[{ type: "journey", content: [] }]],
    },
    {
      id: 5,
      name: "Tema 5: Mengurus Sarana dan Prasarana Kantor",
      journal: [[{ type: "journey", content: [] }]],
    },
    {
      id: 6,
      name: "Tema 6: Mengurus keuangan operasional kantor",
      journal: [[{ type: "journey", content: [] }]],
    },
    {
      id: 7,
      name: "Tema 7: Membantu Kegiatan HR",
      journal: [[{ type: "journey", content: [] }]],
    },
    {
      id: 8,
      name: "Tema 8: Persiapan Kerja",
      journal: [[{ type: "journey", content: [] }]],
    },
  ],
};

export default dummyData;

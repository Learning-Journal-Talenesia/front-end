const type = {
  1: "Informasi",
  2: "Soal",
};

// 1
const data_type = {
  1: "Heading-Paragraph",
  2: "Heading-OList",
  3: "Center",
};

// 2
const question_type = {
  0: "Paragraph",
  1: "Textarea",
  2: "Emote",
  3: "Table",
  4: "Calendar",
  5: "Memantau Tugas",
};

const dummyData = {
  kelas_id: 1,
  name: "Kelas Intensif - Admin Perkantoran",
  tema: [
    {
      tema_id: 0,
      name: "Learning Journal",
      journal: [
        {
          type: 1,
          data: [
            {
              data_type: 1,
              heading: "Apa saja isi jurnal ini?",
              content:
                "Jurnal belajar ini bertujuan untuk membantu kamu untuk merefleksikan perjalanan belajar di fullstack bersama Talenesia. Jurnal ini berisi beberapa pertanyaan yang perlu dijawab. Tenang, tidak ada penilaian dari jawaban di jurnal ini. semua jawaban adalah benar.",
            },
            {
              data_type: 2,
              heading: "Jurnal ini berisi:",
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
        },
        {
          type: 1,
          data: [
            {
              data_type: 2,
              heading: "Cara Mengisi Jurnal",
              content: [
                "Jurnal ini disusun sesuai dengan tema pembelajaran di kelas",
                "Jurnal boleh diisi kapan saja, namun pastikan sudah mengisi tema jurnal di setiap tema sebelum tema baru dimulai di sesi kelas",
                "Tidak isi jurnal yang lebih baik, lebih buruk, benar, maupun salah. Tulisan kalian juga tidak dinilai. Semua yang kamu tuliskan adalah benar dan valid karena sesuai dengan pikiran dan perasaanmu.",
                "Jurnal ini milikmu pribadi yang berisi rahasiamu, kamu boleh menceritakan apa yang kamu tuliskan kepada teman-teman agar saling belajar. Tetapi jika tidak nyaman, kamu boleh menuliskan dijurnalmu saja",
                "Jurnal juga membantu kamu dalam memantau proses pengerjaan dan pengumpulan tugas",
                "Mentormu akan selalu siap untuk membantumu mengisi jurnal jika kamu mengalami kebingungan",
                "Dalam jurnal juga terdapat catatan kosong yang bisa digunakan mencatat materi pembelajaran",
              ],
            },
          ],
        },
        {
          type: 1,
          data: [
            {
              data_type: 3,
              heading:
                "Selamat, Kamu telah satu langkah mencapai perubahan hidup dengan mendaftar Pelatihan Intensif!",
            },
          ],
        },
        {
          type: 1,
          data: [
            {
              data_type: 3,
              heading: "Mari Kita Siapkan Bekal Perjalanan",
            },
          ],
        },
        {
          type: 1,
          data: [
            {
              data_type: 3,
              heading: "Yang Pertama, Yuk Kita tes Minat Bakat di Website",
              content: "https://talenesia.com/cek-bakat",
            },
          ],
        },
        {
          type: 2,
          data: [
            {
              question_type: 1,
              text: "Setelah tes potensi, aku baru tau kalo potensi aku adalah.",
            },
            {
              question_type: 1,
              text: "Kemudian, tipe kerja aku adalah",
            },
            {
              question_type: 1,
              text: "Insight yang aku dapatkan setelah memahami potensi dan tipe kerjaku adalah",
            },
          ],
        },
        {
          type: 2,
          data: [
            {
              question_type: 2,
              text: "Dari hasil tes ini, apa yang kamu rasakan?",
              emote: [
                "FaFaceGrin",
                "FaFaceSmileBeam",
                "FaFaceRollingEyes",
                "FaFaceFrownOpen",
                "FaFaceFrown",
              ],
            },
            {
              question_type: 1,
              text: "Mengapa kamu memilih gambar itu?",
            },
            {
              question_type: 1,
              text: "Apa yang ingin kamu tanyakan ke kakak mentor terkait hasil tes ini?",
            },
          ],
        },
        {
          type: 1,
          data: [
            {
              data_type: 3,
              heading:
                "Setelah Mengenal Potensi Diri, Yuk Kita Rencanakan Lebih Detail Lagi Agar Fullstack Ini Sukses",
            },
          ],
        },
        {
          type: 2,
          data: [
            {
              question_type: 1,
              text: "Apa tujuanmu mengikuti program ini?",
            },
            {
              question_type: 0,
              text: "Ale adalah salah satu peserta program pelatihan admin. Ale awalnya sangat bersemangat mengikuti kelas karena merasa ini akan merubah hidup Ale. Tapi ternyata Ale tidak serius mengerjakan tugas, tidak bertanya ketika tidak paham. Akhirnya Ale tetap saja kesulitan mendapat kerja.",
            },
            {
              question_type: 1,
              text: "Seperti ale, setiap orang pasti punya kebiasaan yang menghambatnya untuk belajar maksimal. Tidak usah malu, orang pada umumnya memiliki kebiasaan buruk. Apa kebiasaan yang menghambatmu untuk belajar maksimal?",
            },
          ],
        },
        {
          type: 2,
          data: [
            {
              question_type: 0,
              text: "Jangan khawatir, kita selalu bisa mengganti kebiasaan buruk kita dengan kebiasaan pengganti. Ale yang biasanya tidak serius mengerjakan tugas, mencoba membagi tugas menjadi bagian-bagian yang terasa lebih mudah. Ale pun menjadi lebih semangat dan serius mengerjakan tugas.",
            },
            {
              question_type: 3,
              text: "Tuliskan kebiasaan-kebiasaanmu yang ingin kamu ubah",
              question: [
                "Kebiasaan Buruk yang ingin diubah",
                "Kebiasaan pengganti",
              ],
              cell_type: ["textarea", "textarea"],
              row_count: 3,
            },
          ],
        },
        {
          type: 2,
          data: [
            {
              question_type: 0,
              text: "Supaya kebiasaan baik ini bisa menempel di dirimu, yuk kita terapkan secara disiplin setiap hari! Caranya adalah silahkan berikan tanda bintang jika kamu telah berhasil menerapkan kebiasaan tersebut di hari tersebut.",
            },
            {
              question_type: 0,
              text: "Jika ada yang hari terlewat, jangan khawatir, lanjut saja terus. Kunci disiplin adalah, kamu tetap konsisten membuka kalender ini setiap hari meskipun kamu gagal atau berhasil menerapkan kebiasaan baru itu",
            },
            {
              question_type: 4,
              text: "Yuk, berikan tanda bintangnya ya di setiap hari kamu berhasil melakukan kebiasaan baru itu!",
            },
          ],
        },
      ],
    },
    {
      tema_id: 1,
      name: "Tema 1: Berkarir Sebagai Admin",
      journal: [
        {
          type: 2,
          data: [
            {
              question_type: 5,
              task: ["Belajar cara belajar", "Belajar cara belajar"],
            },
          ],
        },
        {
          type: 2,
          data: [
            {
              question_type: 2,
              text: "Gambar mana yang paling menggambarkan perasaanmu mengikuti kelas pertama?",
              emote: [
                "FaFaceGrin",
                "FaFaceSmileBeam",
                "FaFaceRollingEyes",
                "FaFaceFrownOpen",
                "FaFaceFrown",
              ],
            },
            {
              question_type: 1,
              text: "Mengapa kamu memilih gambar itu?",
            },
          ],
        },
        {
          type: 2,
          data: [
            {
              question_type: 1,
              text: "Apa hal yang paling menarik dari topik pembelajaran “berkarir sebagai admin”?",
            },
            {
              question_type: 1,
              text: "Setelah belajar berkarir sebagai admin, apa hal yang membuatmu tertarik untuk belajar lagi tentang profesi admin?",
            },
            {
              question_type: 0,
              text: "Sebelum mengikuti kelas ini, salah satu peserta bernama Ale sudah pernah belajar mengenai profesi menjadi admin. Sayangnya beberapa bulan kemudian ia lupa apa yang dipelajari karena tidak pernah mempraktekkannya.",
            },
            {
              question_type: 1,
              text: "Supaya belajarmu tidak sia-sia seperti Ale, materi apa saja yang akan kamu praktekkan? Bagaimana kamu akan mempraktekkannya?",
            },
          ],
        },
        {
          type: 2,
          data: [
            {
              question_type: 1,
              text: "Coba ingat-ingat lagi masa sekolah dulu. Biasanya, hal apa saja yang membuatmu semangat untuk belajar?",
            },
            {
              question_type: 1,
              text: "Hal apa saja yang biasanya membuat kamu malas belajar?",
            },
            {
              question_type: 1,
              text: "Kira-kira jika kemalasan kembali menyerang, apa yang kamu lakukan agar bisa kembali semangat belajar?",
            },
          ],
        },
      ],
    },
    {
      tema_id: 2,
      name: "Tema 2: Persiapan Keahlian Sebagai Admin",
    },
    {
      tema_id: 3,
      name: "Tema 3: Mengerjakan Tugas-Tugas Administratif",
    },
  ],
};

export default dummyData;

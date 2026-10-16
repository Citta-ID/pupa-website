// Homepage copy, EN and ID side by side so staff can review translations easily.
import type { Lang } from './ui';

export const home: Record<Lang, any> = {
  en: {
    metaTitle: 'PUPA Center — Life Skills & Work Readiness for Neurodivergent Young Adults | Tangerang',
    metaDescription:
      'PUPA Center helps neurodivergent young adults in Tangerang build life skills, work readiness, and community access through the Mandiri, Karya, and Access programs.',
    eyebrow: 'Alam Sutera, Tangerang · Indonesia',
    heroTitle: 'A Future Where Neurodivergent Young Adults Live a Life That Matters.',
    heroLede:
      'PUPA Center is a learning center where autistic and other neurodivergent young adults build daily living skills, work skills, and real connections to jobs and community.',
    ctaVisit: 'Get to know PUPA',
    ctaPrograms: 'Explore our programs',
    doorwaysTitle: 'How Can We Help You Today?',
    doorwaysLede: 'Choose the path that fits you. Each one takes you straight to the information you need.',
    doorways: [
      { title: 'For Families', body: 'Learn how our programs work, what a typical day looks like, and how to enroll your young adult. It starts with a conversation, then a free visit to our center.', link: 'See how enrollment works', routeKey: 'enrollment' },
      { title: 'For Donors & Partners', body: 'Your support funds scholarships, training materials, and job placements. See where donations go and how companies can partner with us.', link: 'See ways to give', routeKey: 'donate' },
      { title: 'For Volunteers', body: 'Share your skills as a class mentor, workshop leader, or event helper. We will match your time and experience to a role that fits.', link: 'See volunteer roles', routeKey: 'getInvolved' },
    ],
    programsTitle: 'One Journey, Three Stages',
    programsLede:
      'Our programs are a sequence. Learners build independence first, then work skills, then step into jobs and community life. Each learner moves at their own pace.',
    stages: [
      { tag: 'Stage 1 · Life skills', name: 'Mandiri', body: 'Daily living skills: self-care, cooking, money handling, using transport, and communication for everyday situations.', link: 'Learn about Mandiri', anchor: '#mandiri' },
      { tag: 'Stage 2 · Work readiness', name: 'Karya', body: 'Vocational training and workplace habits: following instructions, working in a team, and practicing real production tasks.', link: 'Learn about Karya', anchor: '#karya' },
      { tag: 'Stage 3 · Employment', name: 'Access', body: 'Supported internships, job placement with partner companies, and ongoing coaching in the workplace and community.', link: 'Learn about Access', anchor: '#access' },
    ],
    pathNotePrefix: 'Alongside the main journey, ',
    pathNoteLink: 'extracurricular classes',
    pathNoteSuffix: ' — art, dance, sport, and social clubs — help learners explore interests and build friendships.',
    impactTitle: 'PUPA at a Glance',
    impactLede: 'A structured pathway for neurodivergent young adults.',
    stats: [
      { tag: 'Age range', num: '16–25', label: 'Young adults we support' },
      { tag: 'Core programs', num: '3', label: 'Mandiri, Karya, and Access — one journey' },
      { tag: 'Schedule', num: '5 days', label: 'Structured activities, Monday to Friday' },
    ],
    storyTitle: 'Growth Journeys',
    storyQuote: '“Kyle was invited to continue with the company as a contract worker — and after graduating from PUPA Center, he remains employed there today.”',
    storyAttribution: '— From Kyle\u2019s growth journey',
    storyCta: 'Read more growth journeys',
    bannerQuote: 'Recognized for their potential, not defined by limitations.',
    donateTitle: 'Help a Young Adult Reach Independence',
    donateLede:
      'Donations fund program scholarships, training materials, and job coaching. Every contribution goes directly to learner support, and we publish how funds are used.',
    donateCta: 'Donate now',
  },
  id: {
    metaTitle: 'PUPA Center — Kecakapan Hidup & Kesiapan Kerja untuk Anak Muda Neurodivergen | Tangerang',
    metaDescription:
      'PUPA Center membantu anak muda neurodivergen di Tangerang membangun kecakapan hidup, kesiapan kerja, dan akses ke komunitas melalui program Mandiri, Karya, dan Access.',
    eyebrow: 'Alam Sutera, Tangerang · Indonesia',
    heroTitle: 'Mewujudkan Masa Depan agar Individu Neurodivergen Menjalani Hidup yang Bermakna.',
    heroLede:
      'PUPA Center adalah pusat pembelajaran tempat anak muda autistik dan neurodivergen lainnya membangun kecakapan hidup sehari-hari, keterampilan kerja, serta koneksi nyata menuju dunia kerja dan komunitas.',
    ctaVisit: 'Kenalan dengan PUPA',
    ctaPrograms: 'Lihat program kami',
    doorwaysTitle: 'Apa Yang Bisa Kami Bantu Hari Ini?',
    doorwaysLede: 'Pilih jalur yang sesuai untuk Anda. Setiap jalur langsung menuju informasi yang Anda butuhkan.',
    doorways: [
      { title: 'Untuk Keluarga', body: 'Pelajari cara kerja program kami, seperti apa kegiatan sehari-hari, dan cara mendaftarkan anak Anda. Semuanya dimulai dari percakapan, lalu kunjungan gratis ke pusat kami.', link: 'Lihat cara pendaftaran', routeKey: 'enrollment' },
      { title: 'Untuk Donatur & Mitra', body: 'Dukungan Anda mendanai beasiswa, materi pelatihan, dan penempatan kerja. Lihat ke mana donasi digunakan dan bagaimana perusahaan dapat bermitra dengan kami.', link: 'Lihat cara berdonasi', routeKey: 'donate' },
      { title: 'Untuk Relawan', body: 'Bagikan keahlian Anda sebagai mentor kelas, pemandu lokakarya, atau pendamping acara. Kami akan mencocokkan waktu dan pengalaman Anda dengan peran yang sesuai.', link: 'Lihat peran relawan', routeKey: 'getInvolved' },
    ],
    programsTitle: 'Satu Perjalanan, Tiga Tahap',
    programsLede:
      'Program kami tersusun sebagai satu rangkaian. Peserta membangun kemandirian terlebih dahulu, lalu keterampilan kerja, kemudian melangkah ke dunia kerja dan kehidupan komunitas. Setiap peserta melangkah sesuai ritmenya masing-masing.',
    stages: [
      { tag: 'Tahap 1 · Kecakapan hidup', name: 'Mandiri', body: 'Keterampilan hidup sehari-hari: merawat diri, memasak, mengelola uang, menggunakan transportasi, dan berkomunikasi dalam situasi sehari-hari.', link: 'Kenali program Mandiri', anchor: '#mandiri' },
      { tag: 'Tahap 2 · Kesiapan kerja', name: 'Karya', body: 'Pelatihan vokasional dan kebiasaan kerja: mengikuti instruksi, bekerja dalam tim, dan berlatih tugas produksi yang nyata.', link: 'Kenali program Karya', anchor: '#karya' },
      { tag: 'Tahap 3 · Pekerjaan', name: 'Access', body: 'Magang dengan pendampingan, penempatan kerja di perusahaan mitra, dan pembinaan berkelanjutan di tempat kerja dan komunitas.', link: 'Kenali program Access', anchor: '#access' },
    ],
    pathNotePrefix: 'Di samping perjalanan utama, ',
    pathNoteLink: 'kelas ekstrakurikuler',
    pathNoteSuffix: ' — seni, tari, olahraga, dan klub sosial — membantu peserta menggali minat dan membangun persahabatan.',
    impactTitle: 'PUPA Secara Sekilas',
    impactLede: 'Jalur terstruktur bagi anak muda neurodivergen.',
    stats: [
      { tag: 'Rentang usia', num: '16–25', label: 'Anak muda yang kami dampingi' },
      { tag: 'Program inti', num: '3', label: 'Mandiri, Karya, dan Access — satu perjalanan' },
      { tag: 'Jadwal', num: '5 hari', label: 'Kegiatan terstruktur, Senin–Jumat' },
    ],
    storyTitle: 'Kisah Pertumbuhan',
    storyQuote: '“Kyle diundang untuk melanjutkan di perusahaan mitra sebagai karyawan kontrak — dan setelah lulus dari PUPA Center, ia tetap bekerja di sana hingga hari ini.”',
    storyAttribution: '— Dari kisah pertumbuhan Kyle',
    storyCta: 'Baca kisah pertumbuhan lainnya',
    bannerQuote: 'Dikenali karena potensinya, bukan dinilai dari keterbatasannya.',
    donateTitle: 'Bantu Anak Muda Mencapai Kemandirian',
    donateLede:
      'Donasi mendanai beasiswa program, materi pelatihan, dan pendampingan kerja. Setiap kontribusi langsung digunakan untuk mendukung peserta, dan kami mempublikasikan penggunaan dana.',
    donateCta: 'Donasi sekarang',
  },
  ko: {
    metaTitle: 'PUPA Center — 신경다양성 청년을 위한 생활 기술과 취업 준비 | 탕에랑',
    metaDescription:
      'PUPA 센터는 인도네시아 탕에랑에서 Mandiri, Karya, Access 프로그램을 통해 신경다양성 청년들이 생활 기술, 취업 준비, 지역사회 참여를 키워 가도록 돕습니다.',
    eyebrow: '인도네시아 탕에랑, 알람 수테라',
    heroTitle: '신경다양성 청년이 의미 있는 삶을 살아가는 미래를 만듭니다.',
    heroLede:
      'PUPA 센터는 자폐를 포함한 신경다양성 청년들이 일상생활 기술과 직업 기술을 익히고, 일자리와 지역사회로 실제로 연결되도록 돕는 배움의 공간입니다.',
    ctaVisit: 'PUPA 알아보기',
    ctaPrograms: '프로그램 살펴보기',
    doorwaysTitle: '오늘 어떤 도움이 필요하신가요?',
    doorwaysLede: '알맞은 길을 선택하세요. 각 항목은 필요한 정보로 바로 안내합니다.',
    doorways: [
      { title: '가족을 위해', body: '프로그램 운영 방식과 하루 일과, 등록 절차를 알아보세요. 먼저 대화로 시작하고, 이어서 센터를 무료로 방문하실 수 있습니다.', link: '등록 절차 보기', routeKey: 'enrollment' },
      { title: '후원자·파트너를 위해', body: '여러분의 후원은 장학금, 교육 자료, 일자리 연계에 쓰입니다. 후원금의 사용처와 기업 파트너십 방법을 확인하세요.', link: '후원 방법 보기', routeKey: 'donate' },
      { title: '자원봉사자를 위해', body: '수업 멘토, 워크숍 리더, 행사 도우미로 재능을 나눠 주세요. 시간과 경험에 맞는 역할을 찾아 드립니다.', link: '봉사 역할 보기', routeKey: 'getInvolved' },
    ],
    programsTitle: '하나의 여정, 세 단계',
    programsLede:
      '우리의 프로그램은 하나의 연속된 과정입니다. 참여자는 먼저 자립을, 다음으로 직업 기술을 익히고, 마지막으로 일터와 지역사회로 나아갑니다. 각자 자신의 속도로 나아갑니다.',
    stages: [
      { tag: '1단계 · 생활 기술', name: 'Mandiri', body: '일상생활 기술: 자기 관리, 요리, 돈 관리, 대중교통 이용, 일상 속 의사소통.', link: 'Mandiri 알아보기', anchor: '#mandiri' },
      { tag: '2단계 · 취업 준비', name: 'Karya', body: '직업 훈련과 업무 습관: 지시 따르기, 팀으로 일하기, 실제 생산 과제 연습.', link: 'Karya 알아보기', anchor: '#karya' },
      { tag: '3단계 · 고용', name: 'Access', body: '지원이 함께하는 인턴십, 파트너 기업 취업 연계, 일터와 지역사회에서의 지속적인 코칭.', link: 'Access 알아보기', anchor: '#access' },
    ],
    pathNotePrefix: '주요 과정과 함께, ',
    pathNoteLink: '방과후 활동',
    pathNoteSuffix: ' — 미술, 무용, 스포츠, 소셜 클럽 — 을 통해 참여자들은 관심사를 탐색하고 우정을 쌓아 갑니다.',
    impactTitle: '한눈에 보는 PUPA',
    impactLede: '신경다양성 청년을 위한 체계적인 성장 경로.',
    stats: [
      { tag: '연령대', num: '16–25', label: '우리가 지원하는 청년들 (세)' },
      { tag: '핵심 프로그램', num: '3', label: 'Mandiri, Karya, Access — 하나의 여정' },
      { tag: '일정', num: '주 5일', label: '월요일부터 금요일까지 체계적 활동' },
    ],
    storyTitle: '성장 이야기',
    storyQuote: '“Kyle은 회사로부터 계약직으로 계속 일해 달라는 제안을 받았고, PUPA 센터를 졸업한 지금도 그곳에서 일하고 있습니다.”',
    storyAttribution: '— Kyle의 성장 이야기에서',
    storyCta: '더 많은 성장 이야기 읽기',
    bannerQuote: '한계로 정의되지 않고, 잠재력으로 인정받습니다.',
    donateTitle: '한 청년의 자립을 도와주세요',
    donateLede:
      '후원금은 프로그램 장학금, 교육 자료, 취업 코칭에 사용됩니다. 모든 기부는 참여자 지원에 직접 쓰이며, 사용 내역을 투명하게 공개합니다.',
    donateCta: '지금 후원하기',
  },
};

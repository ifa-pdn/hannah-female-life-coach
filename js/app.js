// Overflow hidden when navigations open (Mobile)

const navbar = document.querySelector(".nav__bars");
const navlist = document.querySelector(".nav__list");
const page = document.querySelector(".page");

navbar.addEventListener("click", function () {
  this.classList.toggle("is-active");
  navlist.classList.toggle("is-active");
  page.classList.toggle("lock");
});

// Back to top button

const headerSection = document.querySelector(".header");
const heroSection = document.querySelector(".hero");
const triggerHeight = headerSection.offsetHeight + heroSection.offsetHeight;
const backToTopBtn = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > triggerHeight) {
    backToTopBtn.classList.add("active");
  } else {
    backToTopBtn.classList.remove("active");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Bilingual languages EN/JP

const texts = {
  en: {
    mainTitle: "Hannah Female Life Coach",
    navHome: "Home",
    navAbout: "About",
    navContact: "Contact",
    navBlog: "Blog",
    heroTitle: "Join the Community of Happy Working Women",
    heroDescription:
      "Supporting working women to find clarity, confidence, and balance in their personal and professional lives—together, at your own pace.",
    bookNow: "Book Now",
    coachingIntro:
      "Are you a woman ready to unlock your full potential and achieve your dreams? Look no further! As a passionate life coach and entrepreneur, I'm dedicated to guiding you on your journey to success and fulfillment.",
    coachingCard1Ttile: "Holistic Empowerment",
    coachingCard2Ttile: "Goal-Oriented Coaching",
    coachingCard3Ttile: "Mastering the Mindset",
    coachingCard1Text:
      "I believe in addressing all aspects of life to achieve true balance and happiness. Together, we'll work on personal development, career advancement, relationships, and self-care.",
    coachingCard2Text:
      "Whether you're striving for career advancement, starting your own business, or seeking personal growth, I'll help you set clear, achievable goals and develop actionable plans to reach them.",
    coachingCard3Text:
      "Success starts from within. Through mindset coaching and positive psychology techniques, we'll overcome limiting beliefs and cultivate a mindset for success.",
    founderTitle: "A Message from Hannah Parker",
    founderMessage:
      "Life's Journey Is An Ongoing Process, And Our Subscription Ensures You Have A Reliable Partner Every Step Of The Way. Regular Sessions Keep You Accountable And Motivated For Sustained Progress.",
    founderRole: "Health and Wellness Coach",
    statsTitle: "Growing Together",
    statsLabel1: "Awards & Recognition",
    statsLabel2: "Members",
    statsLabel3: "Initiatives",
    statsLabel4: "Yearly events",
    statsDescription:
      "Whether you’re a seasoned health coach or just starting, it offers a hassle-free solution to create a compelling online presence and elevate your coaching business.",
    membershipTitle: "Join Hannah’s Club Now",
    membershipDescription:
      "Ready to take the first step towards a life of purpose, passion, and empowerment? Let's embark on this transformative journey together. Schedule your complimentary consultation today and let's make your dreams a reality!",
    membershipLink: "Learn more about membership",
    benefitsTitle: "How This Supports Your Growth",
    benefitsItem1:
      "Acquire creative expertise to reach your personal and career objectives.",
    benefitsItem2:
      "Progress and enhance your abilities at your preferred speed.",
    benefitsItem3: "Transform from a novice to an expert within a few hours.",
    benefitsItem4:
      "Engage with a worldwide community of inquisitive and imaginative individuals.",
    reviewsTitle: "Reviews",
    reviewText1:
      "The sessions were structured yet flexible. Hannah’s approach feels practical, warm, and easy to follow.",
    reviewText2:
      "Hannah helped me gain clarity and confidence during a very uncertain phase of my life. Her guidance felt calm, thoughtful, and genuinely supportive.",
    reviewText3:
      "Each session with Hannah gave me a new perspective. I felt listened to, understood, and encouraged to grow at my own pace.",
    reviewText4:
      "Working with Hannah was a grounding experience. She creates a safe space to reflect, set goals, and move forward with intention.",
    reviewText5:
      "Hannah’s coaching helped me reconnect with myself and build healthier boundaries. I feel more confident in my decisions now.",
    role: "Member",
    bookingTitle: "Book an appointment",
    bookingDescription:
      "Ready to take the first step towards a life of purpose, passion, and empowerment? Let's embark on this transformative journey together. Schedule your complimentary consultation today and let's make your dreams a reality!",
    bookingLabelName: "Your full Name*",
    bookingLabelEmail: "Your email address*",
    bookingLabelMessage: "Your message*",
    bookingSubmitBtn: "Book a Free Consultation",
    footerHeading1: "Quick links",
    footerHeading2: "About",
    footerHeading3: "Help Centre",
    footerLink1: "Home",
    footerLink2: "About Us",
    footerLink3: "Offers",
    footerLink4: "Service",
    footerLink5: "Contact Us",
    footerLink6: "How is work",
    footerLink7: "Our packages",
    footerLink8: "Promotions",
    footerLink9: "Service",
    footerLink10: "Refer a friend",
    footerLink11: "Payments",
    footerLink12: "Shipping",
    footerLink13: "Product returns",
    footerLink14: "FAQs",
    footerLink15: "Other Issues",
  },
  jp: {
    mainTitle: "ハンナ 女性向けライフコーチ",
    navHome: "ホーム",
    navAbout: "プロフィール",
    navContact: "コンタクト",
    navBlog: "ブログ",
    heroTitle: "働く女性のためのコミュニティに参加しませんか",
    heroDescription:
      "仕事に向き合う女性が、自分らしさと自信を取り戻し、心地よいバランスで前に進むための、あたたかなコミュニティです。",
    bookNow: "今すぐ予約",
    coachingIntro:
      "自分の可能性を最大限に引き出し、理想の人生を歩みたいと感じている女性へ。ライフコーチであり起業家でもある私は、あなたが自信と充実感を持って前に進めるよう、心を込めてサポートします。",
    coachingCard1Ttile: "ホリスティックな自己成長",
    coachingCard2Ttile: "目標達成型コーチング",
    coachingCard3Ttile: "マインドセットを整える",
    coachingCard1Text:
      "本当のバランスと幸せを手に入れるためには、人生のさまざまな側面に目を向けることが大切だと考えています。自己成長、キャリア、人間関係、セルフケアまで、あなたの人生全体を一緒に整えていきます。",
    coachingCard2Text:
      "キャリアアップや起業、個人的な成長など、どんな目標であっても大丈夫。明確で現実的な目標を設定し、行動に移せるプランを一緒に作っていきます。",
    coachingCard3Text:
      "成功は内面から始まります。マインドセットコーチングとポジティブ心理学を通して、思い込みや不安を手放し、自分を信じて前に進める心の土台を育てます。",
    founderTitle: "ハンナ・パーカーからのメッセージ",
    founderMessage:
      "人生の旅は、常に続いていくプロセスです。私たちのサブスクリプションは、その道のりを一歩一歩進むあなたに寄り添う、信頼できるパートナーでありたいと考えています。定期的なセッションを通して、前向きな行動と継続的な成長をサポートします",
    founderRole: "ヘルス＆ウェルネスコーチ",
    statsTitle: "共に成長していく",
    statsLabel1: "受賞・実績",
    statsLabel2: "メンバー数",
    statsLabel3: "取り組み",
    statsLabel4: "年間イベント数",
    statsDescription:
      "経験豊富なコーチの方も、これから始める方も。このコミュニティは、オンラインでの存在感を高め、あなたのコーチング活動を無理なく広げていくためのサポートを提供します。",
    membershipTitle: "ハンナのクラブに参加しませんか",
    membershipDescription:
      "目的と情熱を持った人生へ、一歩踏み出してみませんか。この変化の旅を、私たちと一緒に歩んでいきましょう。まずは無料のコンサルテーションから、お気軽にご相談ください。",
    membershipLink: "メンバーシップについて詳しく見る",
    benefitsTitle: "あなたの成長を支えるポイント",
    benefitsItem1:
      "自分自身やキャリアの目標に近づくための、実践的なスキルと視点を身につけられます。",
    benefitsItem2:
      "自分のペースを大切にしながら、無理なくスキルアップを目指せます。",
    benefitsItem3:
      "初心者の方でも、基礎から着実に成長できる環境が整っています。",
    benefitsItem4:
      "世界中の志を持つ仲間とつながり、学び合えるコミュニティに参加できます。",
    reviewsTitle: "お客様の声",
    reviewText1:
      "セッションはしっかりと構成されていながらも柔軟で、ハンナさんのアプローチは実践的で温かく、とても取り組みやすかったです。",
    reviewText2:
      "人生の先が見えず不安だった時期に、ハンナさんのサポートで自分に向き合うことができ、少しずつ自信を取り戻すことができました。落ち着いた、思いやりのあるアドバイスが印象的でした。",
    reviewText3:
      "毎回のセッションで新しい気づきがあり、話をしっかりと聞いてもらえていると感じました。自分のペースで成長していいんだと思えるようになりました。",
    reviewText4:
      "ハンナさんとのコーチングは、心を落ち着かせてくれる時間でした。安心して振り返り、目標を整理し、前に進むための環境を作ってくれます。",
    reviewText5:
      "自分自身と向き合い、健全な境界線を築くことの大切さに気づかせてくれました。今では、自分の選択に自信を持てるようになっています。",
    role: "メンバー",
    bookingTitle: "無料相談のご予約",
    bookingDescription:
      "  目的と情熱を持った人生へ、一歩踏み出してみませんか。この変化の旅を、私たちと一緒に始めましょう。まずは無料相談から、お気軽にご予約ください。",
    bookingLabelName: "お名前（フルネーム）*",
    bookingLabelEmail: "メールアドレス*",
    bookingLabelMessage: "メッセージ*",
    bookingSubmitBtn: "無料相談を予約する",
    footerHeading1: "クイックリンク",
    footerHeading2: "サービスについて",
    footerHeading3: "ヘルプセンター",
    footerLink1: "ホーム",
    footerLink2: "私たちについて",
    footerLink3: "提供内容",
    footerLink4: "サービス",
    footerLink5: "お問い合わせ",
    footerLink6: "ご利用の流れ",
    footerLink7: "プラン・料金",
    footerLink8: "キャンペーン",
    footerLink9: "サービス内容",
    footerLink10: "お友達紹介",
    footerLink11: "お支払いについて",
    footerLink12: "サービス提供について",
    footerLink13: "キャンセル・返金",
    footerLink14: "よくある質問",
    footerLink15: "その他のお問い合わせ",
  },
};

let currentLang = "en";
const languageToggleBtn = document.querySelector(".language");

languageToggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "jp" : "en";
  languageToggleBtn.textContent = currentLang === "en" ? "JP" : "EN";

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.dataset.key;
    el.textContent = texts[currentLang][key];
  });
});

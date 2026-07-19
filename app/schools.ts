export type School = {
  id: string;
  name: string;
  short: string;
  location: string;
  grades: string;
  type: string;
  founded?: number;
  students: string;
  boardingRate: string;
  internationalRate: string;
  courseCount: string;
  campusArea: string;
  tuition: string;
  classSize: string;
  updated: string;
  verified: boolean;
  tags: string[];
  summary: string;
  sourceUrl: string;
  sourceName: string;
  referenceRank: number;
  application?: {
    cycle: string;
    deadline: string;
    platform: string;
    international: string;
    testing: string;
    interview: string;
    materials: string[];
    sourceUrl: string;
    verifiedOn: string;
  };
  academics?: {
    catalogYear: string;
    overview: string;
    sourceUrl: string;
    verifiedOn: string;
    totalCourses: string;
    departments: {
      name: string;
      description: string;
      courses: {
        code: string;
        title: string;
        level: string;
        description: string;
      }[];
    }[];
  };
};

const FINDING_SCHOOL_REFERENCE =
  "https://www.findingschool.com/cn/ranking/fs-boarding-ranking";

const featuredSchools: School[] = [
  {
    id: "andover",
    name: "Phillips Academy Andover",
    short: "PA",
    location: "Andover, Massachusetts",
    grades: "9–12, PG",
    type: "男女合校 · 寄宿/走读",
    founded: 1778,
    students: "1,169",
    boardingRate: "75%",
    internationalRate: "18%",
    courseCount: "300+",
    campusArea: "500 英亩",
    tuition: "$79,800",
    classSize: "13",
    updated: "2026-07-18",
    verified: true,
    tags: ["Need-blind", "100% need met", "FS 参考 #1"],
    summary:
      "实行 need-blind 录取并满足 100% 经核定的经济需求。学校提供 300 门课程，平均班级人数 13 人。",
    sourceUrl: "https://www.andover.edu/about",
    sourceName: "学校官网 · Fast Facts",
    referenceRank: 1,
    application: {
      cycle: "Fall 2027",
      deadline: "2027年2月1日",
      platform: "Gateway to Prep Schools + Andover Applicant Portal",
      international:
        "就读于美国以外、且学校并非全英文授课的国际申请人，需提交 TOEFL iBT、IELTS 或 Duolingo English Test。官网给出的录取生常见参考线为 TOEFL 100、IELTS 7.5、DET 135。国际生可申请助学金。",
      testing:
        "所有申请人必须提交 SSAT Upper Level、ISEE Upper Level、PSAT、SAT 或 ACT 中的一项；成绩须按官网学校代码由考试机构发送。",
      interview:
        "提交 Gateway Candidate Profile 后进入 Andover Portal 预约，可选校园面试、线上面试或录制回答；面试持续至1月。另需提交短视频回答。",
      materials: [
        "Candidate Profile、Essay Response、已评分写作样本和短视频回答",
        "家长陈述、当前学年成绩及此前两个学年成绩",
        "校长/升学顾问、现任英语教师、现任数学教师及个人推荐信",
        "可选：特长推荐信、艺术/体育补充材料及其他补充文件",
      ],
      sourceUrl: "https://www.andover.edu/admission/apply",
      verifiedOn: "2026-07-18",
    },
    academics: {
      catalogYear: "2026–27",
      totalCourses: "300+",
      verifiedOn: "2026-07-19",
      sourceUrl: "https://www.andover.edu/files/CourseOfStudy.pdf",
      overview:
        "以通识教育为核心，采用三学期制。课程从基础序列延伸至 500/600 级高级选修、独立研究与跨学科项目；多数课程强调研讨、写作、实验或作品集。",
      departments: [
        {
          name: "英语与写作",
          description: "核心序列由阅读、写作逐步过渡到批判性分析，高年级可进入专题文学与创意写作。",
          courses: [
            { code: "ENG100A–C", title: "The Reader", level: "9年级 · 三学期核心课", description: "通过跨体裁文本训练精读、课堂讨论、批判思考与反复修改写作，逐步理解文本如何生成意义。" },
            { code: "ENG200A–C", title: "The Writer", level: "10年级 · 三学期核心课", description: "从个人随笔、诗歌与小说写作切入，强调写作过程、同伴反馈、修订以及分析性论证。" },
            { code: "ENG300A–C", title: "The Critical Thinker", level: "11年级 · 三学期核心课", description: "整合精读、语境研究和批评理论，分析文学中的权力、身份与社会结构，为高级选修和大学写作做准备。" },
          ],
        },
        {
          name: "历史与社会科学",
          description: "涵盖世界史、美国史、经济学和地区研究，强调一手资料、论证写作与独立研究。",
          courses: [
            { code: "HSS100A–B", title: "World History", level: "9年级核心课", description: "以全球视角研究不同社会的形成、交流与权力关系，建立史料阅读和历史论证能力。" },
            { code: "HSS300A–C", title: "The United States", level: "美国史核心序列", description: "跨三个学期研究美国政治、社会和文化发展，通过多元史料讨论国家叙事及其争议。" },
            { code: "HSS600", title: "History Research Seminar", level: "600级 · 高级研究", description: "学生提出原创问题，完成资料搜集、史学回顾和长篇研究论文，接受研讨式同行反馈。" },
          ],
        },
        {
          name: "数学与计算机科学",
          description: "从代数、几何和微积分延伸到高等数学、算法、人工智能与自主系统。",
          courses: [
            { code: "MTH650A–B", title: "Multivariable Calculus", level: "600级 · 高等数学", description: "研究多变量函数、偏导数、重积分和向量分析，面向已完成单变量微积分的学生。" },
            { code: "CSC561", title: "Machine Learning", level: "500级 · 高级选修", description: "介绍机器学习模型、训练与评估方法，并讨论数据选择、偏差和实际应用中的限制。" },
            { code: "CSC571", title: "Autonomous Systems", level: "500级 · 项目课程", description: "结合编程、传感器和控制逻辑构建自主系统，通过迭代测试解决真实环境中的导航与决策问题。" },
          ],
        },
        {
          name: "自然科学与研究",
          description: "生物、化学和物理均设置实验序列，并提供面向高年级的校内研究课程。",
          courses: [
            { code: "BIO600A–B", title: "Independent Laboratory Research in Biology", level: "600级 · 独立实验研究", description: "在教师指导下设计生物学研究问题，完成实验、数据分析和科学表达，强调长期独立工作。" },
            { code: "CHM610/620", title: "Organic Chemistry", level: "600级 · 大学水平", description: "围绕有机分子的结构、反应机制与合成展开，配合进阶内容和实验技术训练。" },
            { code: "PHY530", title: "Astronomy Research", level: "500级 · 观测研究", description: "使用校内天文台望远镜、穹顶与 CCD 相机，学习天体观测、摄影测量和研究项目方法。" },
          ],
        },
        {
          name: "艺术、设计与媒介",
          description: "课程连接创作方法、艺术史、数字制作与作品集发展，并利用校内美术馆和考古资源。",
          courses: [
            { code: "ART225", title: "Visual Studies", level: "9年级基础课", description: "以绘画、拼贴、摄影、影像和陶土等媒介训练视觉素养、艺术思维与表达能力。" },
            { code: "ART301", title: "Architecture I", level: "300级 · 设计基础", description: "通过物件、家具与建筑尺度项目学习研究型设计、制图、3D 建模、激光切割和实体模型制作。" },
            { code: "ART520", title: "Advanced Digital Art", level: "500级 · 高级工作室", description: "在数字图像、动态图形或交互媒介中深化个人创作方向，并形成可展示的高级作品集。" },
          ],
        },
        {
          name: "世界语言与文化",
          description: "提供中文、法语、德语、日语、俄语、西班牙语、拉丁语和古希腊语的多级序列。",
          courses: [
            { code: "CHI540A–C", title: "Introduction to Chinese Literature", level: "500级 · 高级中文", description: "以中文阅读和讨论文学文本，在提升语言能力的同时理解作品的历史与文化语境。" },
            { code: "FRE521–523", title: "Francophone Civilizations, Literatures, Cultures, and Cinemas", level: "500级 · 法语文化研究", description: "通过文学、电影与文化材料研究法语世界，持续训练口语、写作和跨文化分析。" },
            { code: "SPA501", title: "Taking the Streets", level: "500级 · 西语专题", description: "研究拉丁美洲与美国的艺术和社会运动，分析公共空间、视觉文化与政治表达的关系。" },
          ],
        },
      ],
    },
  },
  {
    id: "exeter",
    name: "Phillips Exeter Academy",
    short: "PEA",
    location: "Exeter, New Hampshire",
    grades: "9–12, PG",
    type: "男女合校 · 寄宿/走读",
    founded: 1781,
    students: "1,099",
    boardingRate: "81%",
    internationalRate: "待核验",
    courseCount: "450+",
    campusArea: "700 英亩",
    tuition: "$71,797",
    classSize: "12",
    updated: "2026-07-18",
    verified: true,
    tags: ["Need-blind", "Harkness", "FS 参考 #2"],
    summary:
      "以 Harkness 圆桌教学闻名，强调学生主导的讨论式学习。2025–26 学年共有 1,099 名学生，其中 892 名寄宿生。",
    sourceUrl: "https://exeter.edu/about/",
    sourceName: "学校官网 · About Exeter",
    referenceRank: 2,
    application: {
      cycle: "下一申请周期（官网将于夏季开放）",
      deadline: "1月15日",
      platform: "Gateway to Prep Schools + Exeter Applicant Portal",
      international:
        "官网明确国际生与美国本土学生采用相同申请流程，申请费均为60美元。录取后，需办理 I-20/F-1 的学生由学校自5月初起联系并启动文件流程；官网当前未列出额外英语能力考试要求。",
      testing:
        "申请9年级必须提交 SSAT Upper Level 或 ISEE Upper Level；申请10或11年级须提交 SSAT、ISEE、PSAT/NMSQT、SAT、PreACT 或 ACT 中的一项。成绩时效及递交方式以官网说明为准。",
      interview:
        "所有申请人必须面试，可选校园面谈、线上交流或按学校问题录制视频；每人仅可完成一次，须在1月15日前完成。",
      materials: [
        "Gateway Candidate Profile",
        "学生文书和家长陈述（在 Exeter Applicant Portal 提交）",
        "现任校长/升学顾问、英语教师、数学教师推荐信",
        "由熟悉申请人的成人提交个人品格与社区影响推荐信",
        "由原学校通过 Gateway 直接递交当前及上一学年成绩单",
      ],
      sourceUrl: "https://exeter.edu/admissions/apply/",
      verifiedOn: "2026-07-18",
    },
    academics: {
      catalogYear: "2026–27",
      totalCourses: "450+",
      verifiedOn: "2026-07-19",
      sourceUrl: "https://exeter.edu/app/uploads/2026/03/PEA-COI-26-27_Web_3.2.2026.pdf",
      overview:
        "课程以 Harkness 圆桌讨论为核心，在广度要求之外提供大量高级专题、实验研究、跨学科项目与校外学习。学校不以 AP 课程为主体，许多课程达到或超过大学先修水平。",
      departments: [
        {
          name: "英语与创意写作",
          description: "四年英语序列持续训练阅读、讨论和写作，高年级从文学专题、戏剧到数字媒介均有选择。",
          courses: [
            { code: "ENG100/210/220", title: "9th-Grade English", level: "9年级核心序列", description: "通过诗歌、小说、戏剧和短篇作品建立精读、Harkness 讨论与写作基础。" },
            { code: "ENG410/420/430", title: "11th-Grade English", level: "11年级核心序列", description: "写作由个人叙事转向思想分析，强化复杂文本阅读、证据使用和独立论点表达。" },
            { code: "ENG534", title: "What Artifice; Whose Intelligence?", level: "高年级专题", description: "以文学与文化文本审视人工智能的想象、权力和伦理问题，讨论技术如何改变创作与人的价值。" },
          ],
        },
        {
          name: "历史与全球研究",
          description: "强调一手资料、Harkness 讨论和研究写作，选题跨越全球地区、性别、环境与法律。",
          courses: [
            { code: "HIS200", title: "The World in the 20th Century", level: "200级 · 世界史", description: "围绕帝国、战争、革命、民族国家与全球化理解20世纪，并训练比较历史分析。" },
            { code: "HIS410/420/430", title: "United States History", level: "美国史三学期序列", description: "从殖民时期延伸至当代，分别研究内战前、1861–1941及1941年至今的美国发展。" },
            { code: "HIS587", title: "Salem Witch Trials: A Global History", level: "高年级专题", description: "以1692年塞勒姆审巫案为核心，结合全球史研究巫术、社会排斥、司法与群体恐慌。" },
          ],
        },
        {
          name: "数学与计算机科学",
          description: "数学课程强调板书展示与共同推理，计算机课程兼顾软件构建、算法及技术社会责任。",
          courses: [
            { code: "MAT610/620", title: "Multivariable Calculus", level: "600级 · 高等数学", description: "研究多元微积分、向量函数和坐标变换，强调证明、几何理解与严谨表达。" },
            { code: "CSC505", title: "Data Structures and Algorithms", level: "500级 · 高级计算机", description: "分析常用数据结构和算法的设计、正确性与效率，通过程序实现比较不同解决方案。" },
            { code: "CSC506", title: "Mobile App Development", level: "500级 · 应用开发", description: "围绕移动端产品设计与编程完成应用项目，整合界面、数据、测试与迭代开发。" },
          ],
        },
        {
          name: "实验科学",
          description: "学生通过观察、测量、实验与数据解释学习科学，高级课程可进入研究型实验。",
          courses: [
            { code: "BIO670", title: "Biology Research", level: "高级研究 · 需申请", description: "参与真实生物研究流程，学习分子生物学、显微成像或生物信息学，并完成课外实验工作。" },
            { code: "CHE460", title: "Organic Chemistry", level: "高年级 · 有先修要求", description: "研究有机化合物结构和反应，并在实验中合成、纯化常见材料，讨论化学与可持续性的交叉。" },
            { code: "PHY640", title: "Quantum Mechanics", level: "600级 · 高级物理", description: "在现代物理和微积分基础上研究量子理论的数学框架及其对微观世界的解释。" },
          ],
        },
        {
          name: "跨学科与创新",
          description: "把科学、设计、人文和社会影响连接起来，以项目、原型和现实议题为主要学习方式。",
          courses: [
            { code: "INT455", title: "Principles of Engineering and Design", level: "跨学科项目课", description: "采用工程设计流程识别问题、快速制作原型、收集反馈并改进解决方案。" },
            { code: "INT553", title: "Social Innovation", level: "高年级跨学科", description: "分析社会创新案例，研究社区需求并设计兼顾可行性、伦理和长期影响的方案。" },
            { code: "INT579", title: "Bioethics", level: "高年级跨学科", description: "通过生命科学案例学习伦理原则和论证，讨论医学、研究与公共政策中的艰难选择。" },
          ],
        },
        {
          name: "艺术、音乐与语言",
          description: "艺术课程连接传统工作室与数字媒介，音乐和现代语言提供创作、表演及文化研究路径。",
          courses: [
            { code: "ART409", title: "Advanced Digital Art + Design", level: "高级视觉艺术", description: "使用数字媒介深化视觉概念、设计方法和个人表达，发展系列作品与展示能力。" },
            { code: "MUS206", title: "Musical Structure and Songwriting", level: "音乐创作", description: "通过分析歌曲结构并进行短篇创作，学习旋律、和声、节奏和作品修改。" },
            { code: "SPA590", title: "The Hispanic World Through Its Music", level: "高级西班牙语专题", description: "通过西语世界的音乐现象研究身份、社会与政治语境，同时强化听说和文化分析。" },
          ],
        },
      ],
    },
  },
  {
    id: "lawrenceville",
    name: "The Lawrenceville School",
    short: "LVS",
    location: "Lawrenceville, New Jersey",
    grades: "9–12, PG",
    type: "男女合校 · 寄宿/走读",
    founded: 1810,
    students: "待同步",
    boardingRate: "待同步",
    internationalRate: "待同步",
    courseCount: "待同步",
    campusArea: "待同步",
    tuition: "待同步",
    classSize: "待同步",
    updated: "等待首次核验",
    verified: false,
    tags: ["House System", "Harkness", "FS 参考 #3"],
    summary: "已建立学校档案，等待从学校官网与 NCES 官方数据源同步。",
    sourceUrl: "https://www.lawrenceville.org/",
    sourceName: "学校官网",
    referenceRank: 3,
  },
  {
    id: "choate",
    name: "Choate Rosemary Hall",
    short: "CRH",
    location: "Wallingford, Connecticut",
    grades: "9–12, PG",
    type: "男女合校 · 寄宿/走读",
    founded: 1890,
    students: "待同步",
    boardingRate: "待同步",
    internationalRate: "待同步",
    courseCount: "待同步",
    campusArea: "待同步",
    tuition: "待同步",
    classSize: "待同步",
    updated: "等待首次核验",
    verified: false,
    tags: ["Signature Programs", "跨学科", "FS 参考 #4"],
    summary: "已建立学校档案，等待从学校官网与 NCES 官方数据源同步。",
    sourceUrl: "https://www.choate.edu/",
    sourceName: "学校官网",
    referenceRank: 4,
  },
  {
    id: "hotchkiss",
    name: "The Hotchkiss School",
    short: "THS",
    location: "Lakeville, Connecticut",
    grades: "9–12, PG",
    type: "男女合校 · 寄宿/走读",
    founded: 1891,
    students: "待同步",
    boardingRate: "待同步",
    internationalRate: "待同步",
    courseCount: "待同步",
    campusArea: "待同步",
    tuition: "待同步",
    classSize: "待同步",
    updated: "等待首次核验",
    verified: false,
    tags: ["Lakeville", "环境教育", "FS 参考 #8"],
    summary: "已建立学校档案，等待从学校官网与 NCES 官方数据源同步。",
    sourceUrl: "https://www.hotchkiss.org/",
    sourceName: "学校官网",
    referenceRank: 8,
  },
  {
    id: "deerfield",
    name: "Deerfield Academy",
    short: "DA",
    location: "Deerfield, Massachusetts",
    grades: "9–12, PG",
    type: "男女合校 · 寄宿/走读",
    founded: 1797,
    students: "待同步",
    boardingRate: "待同步",
    internationalRate: "待同步",
    courseCount: "待同步",
    campusArea: "待同步",
    tuition: "待同步",
    classSize: "待同步",
    updated: "等待首次核验",
    verified: false,
    tags: ["传统寄宿", "社区文化", "FS 参考 #10"],
    summary: "已建立学校档案，等待从学校官网与 NCES 官方数据源同步。",
    sourceUrl: "https://deerfield.edu/",
    sourceName: "学校官网",
    referenceRank: 10,
  },
];

type PendingSeed = {
  rank: number;
  name: string;
  state: string;
  grades: string;
  gender?: "男女合校" | "女校" | "男校";
};

const pendingSeeds: PendingSeed[] = [
  { rank: 5, name: "Groton School", state: "Massachusetts", grades: "8–12" },
  { rank: 6, name: "Middlesex School", state: "Massachusetts", grades: "9–12" },
  { rank: 7, name: "St. Paul's School", state: "New Hampshire", grades: "9–12" },
  { rank: 9, name: "Concord Academy", state: "Massachusetts", grades: "9–12" },
  { rank: 11, name: "The Webb Schools", state: "California", grades: "9–12" },
  { rank: 12, name: "Milton Academy", state: "Massachusetts", grades: "9–12" },
  { rank: 13, name: "Cate School", state: "California", grades: "9–12" },
  { rank: 14, name: "The Thacher School", state: "California", grades: "9–12" },
  { rank: 15, name: "Peddie School", state: "New Jersey", grades: "9–12, PG" },
  { rank: 16, name: "St. Andrew's School, DE", state: "Delaware", grades: "9–12" },
  { rank: 17, name: "The Taft School", state: "Connecticut", grades: "9–12, PG" },
  { rank: 18, name: "Suffield Academy", state: "Connecticut", grades: "9–12, PG" },
  { rank: 19, name: "St. Mark's School", state: "Massachusetts", grades: "9–12" },
  { rank: 20, name: "Episcopal High School", state: "Virginia", grades: "9–12" },
  { rank: 21, name: "St. Stephen's Episcopal School TX", state: "Texas", grades: "8–12" },
  { rank: 22, name: "Emma Willard School", state: "New York", grades: "9–12", gender: "女校" },
  { rank: 23, name: "Dana Hall School", state: "Massachusetts", grades: "9–12", gender: "女校" },
  { rank: 24, name: "Blair Academy", state: "New Jersey", grades: "9–12, PG" },
  { rank: 25, name: "Kent School", state: "Connecticut", grades: "9–12, PG" },
  { rank: 26, name: "The Loomis Chaffee School", state: "Connecticut", grades: "9–12, PG" },
  { rank: 27, name: "The Hill School", state: "Pennsylvania", grades: "9–12, PG" },
  { rank: 28, name: "Western Reserve Academy", state: "Ohio", grades: "9–12, PG" },
  { rank: 29, name: "The Pennington School", state: "New Jersey", grades: "8–12" },
  { rank: 30, name: "St. George's School", state: "Rhode Island", grades: "9–12" },
  { rank: 31, name: "Mercersburg Academy", state: "Pennsylvania", grades: "9–12, PG" },
  { rank: 32, name: "Williston Northampton School", state: "Massachusetts", grades: "9–12, PG" },
  { rank: 33, name: "Georgetown Preparatory School", state: "Maryland", grades: "9–12", gender: "男校" },
  { rank: 34, name: "The Stony Brook School", state: "New York", grades: "7–12" },
  { rank: 35, name: "Northfield Mount Hermon School", state: "Massachusetts", grades: "9–12, PG" },
  { rank: 36, name: "Lake Forest Academy", state: "Illinois", grades: "9–12" },
  { rank: 37, name: "Westtown School", state: "Pennsylvania", grades: "9–12" },
  { rank: 38, name: "Stevenson School", state: "California", grades: "9–12" },
  { rank: 39, name: "Berkshire School", state: "Massachusetts", grades: "9–12, PG" },
  { rank: 40, name: "Culver Academies", state: "Indiana", grades: "9–12" },
  { rank: 41, name: "The Governor's Academy", state: "Massachusetts", grades: "9–12" },
  { rank: 42, name: "The Madeira School", state: "Virginia", grades: "9–12", gender: "女校" },
  { rank: 43, name: "Saint Andrew's School", state: "Florida", grades: "9–12" },
  { rank: 44, name: "Westminster School", state: "Connecticut", grades: "9–12, PG" },
  { rank: 45, name: "Tabor Academy", state: "Massachusetts", grades: "9–12" },
  { rank: 46, name: "Princeton International School of Mathematics and Science", state: "New Jersey", grades: "9–12" },
  { rank: 47, name: "George School", state: "Pennsylvania", grades: "9–12" },
  { rank: 48, name: "The Cambridge School of Weston", state: "Massachusetts", grades: "9–12, PG" },
  { rank: 49, name: "Brooks School", state: "Massachusetts", grades: "9–12" },
  { rank: 50, name: "Pomfret School", state: "Connecticut", grades: "9–12, PG" },
  { rank: 51, name: "North Broward Preparatory School", state: "Florida", grades: "6–12" },
  { rank: 52, name: "The Hun School of Princeton", state: "New Jersey", grades: "9–12, PG" },
  { rank: 53, name: "Miss Porter's School", state: "Connecticut", grades: "9–12", gender: "女校" },
  { rank: 54, name: "The Athenian School", state: "California", grades: "9–12" },
  { rank: 55, name: "Virginia Episcopal School", state: "Virginia", grades: "9–12" },
  { rank: 56, name: "The Bolles School", state: "Florida", grades: "9–12" },
  { rank: 57, name: "Woodberry Forest School", state: "Virginia", grades: "9–12", gender: "男校" },
  { rank: 58, name: "Kimball Union Academy", state: "New Hampshire", grades: "9–12, PG" },
  { rank: 59, name: "Cranbrook Schools", state: "Michigan", grades: "9–12" },
  { rank: 60, name: "Cushing Academy", state: "Massachusetts", grades: "9–12, PG" },
  { rank: 61, name: "Holderness School", state: "New Hampshire", grades: "9–12, PG" },
  { rank: 62, name: "Windermere Preparatory School", state: "Florida", grades: "7–12" },
  { rank: 63, name: "'Iolani School", state: "Hawaii", grades: "9–12" },
  { rank: 64, name: "The Ethel Walker School", state: "Connecticut", grades: "7–12, PG", gender: "女校" },
  { rank: 65, name: "Baylor School", state: "Tennessee", grades: "9–12" },
  { rank: 66, name: "The Village School", state: "Texas", grades: "6–12" },
  { rank: 67, name: "Woodside Priory School", state: "California", grades: "9–12" },
  { rank: 68, name: "Shady Side Academy", state: "Pennsylvania", grades: "9–12, PG" },
  { rank: 69, name: "Thomas Jefferson School", state: "Missouri", grades: "7–12" },
  { rank: 70, name: "Millbrook School", state: "New York", grades: "9–12" },
  { rank: 71, name: "Westover School", state: "Connecticut", grades: "9–12", gender: "女校" },
  { rank: 72, name: "The Grier School", state: "Pennsylvania", grades: "7–12", gender: "女校" },
  { rank: 73, name: "Canterbury School", state: "Connecticut", grades: "9–12, PG" },
  { rank: 74, name: "Portsmouth Abbey School", state: "Rhode Island", grades: "9–12" },
  { rank: 75, name: "The Masters School", state: "New York", grades: "9–12" },
  { rank: 76, name: "Avon Old Farms School", state: "Connecticut", grades: "9–12, PG", gender: "男校" },
  { rank: 76, name: "Elite Preparatory Academy", state: "New Jersey", grades: "6–12" },
  { rank: 78, name: "Saint Mary's School", state: "North Carolina", grades: "9–12", gender: "女校" },
  { rank: 79, name: "Fountain Valley School of Colorado", state: "Colorado", grades: "9–12" },
  { rank: 80, name: "Chaminade College Preparatory School", state: "Missouri", grades: "6–12", gender: "男校" },
  { rank: 81, name: "San Domenico School", state: "California", grades: "9–12" },
  { rank: 82, name: "Indian Springs School", state: "Alabama", grades: "8–12" },
  { rank: 83, name: "Wilbraham & Monson Academy", state: "Massachusetts", grades: "9–12, PG" },
  { rank: 84, name: "McCallie School", state: "Tennessee", grades: "9–12", gender: "男校" },
  { rank: 85, name: "Lawrence Academy", state: "Massachusetts", grades: "9–12" },
  { rank: 86, name: "Wayland Academy", state: "Wisconsin", grades: "9–12, PG" },
  { rank: 87, name: "Saint James School", state: "Maryland", grades: "8–12" },
  { rank: 88, name: "Wyoming Seminary", state: "Pennsylvania", grades: "9–12, PG" },
  { rank: 89, name: "Cheshire Academy", state: "Connecticut", grades: "9–12, PG" },
  { rank: 90, name: "Darlington School", state: "Georgia", grades: "9–12, PG" },
  { rank: 91, name: "The Frederick Gunn School", state: "Connecticut", grades: "9–12, PG" },
  { rank: 92, name: "The Storm King School", state: "New York", grades: "8–12" },
  { rank: 93, name: "Santa Catalina School", state: "California", grades: "9–12", gender: "女校" },
  { rank: 94, name: "Worcester Academy", state: "Massachusetts", grades: "9–12, PG" },
  { rank: 95, name: "Oregon Episcopal School", state: "Oregon", grades: "9–12" },
  { rank: 96, name: "Justin-Siena High School", state: "California", grades: "9–12" },
  { rank: 97, name: "The MacDuffie School", state: "Massachusetts", grades: "6–12, PG" },
  { rank: 98, name: "CATS Academy Boston", state: "Massachusetts", grades: "8–12, PG" },
  { rank: 99, name: "Asheville School", state: "North Carolina", grades: "9–12" },
  { rank: 100, name: "The Webb School", state: "Tennessee", grades: "7–12" },
];

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function initials(name: string) {
  const ignored = new Set(["the", "of", "and", "school", "academy"]);
  const letters = name
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((word) => !ignored.has(word.toLowerCase()))
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  return letters || name.slice(0, 3).toUpperCase();
}

const pendingSchools: School[] = pendingSeeds.map((seed) => ({
  id: slugify(seed.name),
  name: seed.name,
  short: initials(seed.name),
  location: seed.state,
  grades: seed.grades,
  type: `${seed.gender ?? "男女合校"} · 寄宿/走读`,
  students: "待核验",
  boardingRate: "待核验",
  internationalRate: "待核验",
  courseCount: "待核验",
  campusArea: "待核验",
  tuition: "待核验",
  classSize: "待核验",
  updated: "等待官方同步",
  verified: false,
  tags: [`FS 2026 #${seed.rank}`, seed.state, seed.gender ?? "男女合校"],
  summary:
    "已纳入 School Bank 学校目录。当前仅依据 FindingSchool 2026 寄宿学校榜建立索引；学费、学生规模、申请政策等事实字段将在学校官网逐项核验后发布。",
  sourceUrl: FINDING_SCHOOL_REFERENCE,
  sourceName: "FindingSchool 2026 寄宿榜 · 目录参考（非官方）",
  referenceRank: seed.rank,
}));

export const schools: School[] = [...featuredSchools, ...pendingSchools].sort(
  (a, b) => a.referenceRank - b.referenceRank || a.name.localeCompare(b.name),
);

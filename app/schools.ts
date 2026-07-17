export type School = {
  id: string;
  name: string;
  short: string;
  location: string;
  grades: string;
  type: string;
  founded?: number;
  students: string;
  boarding: string;
  tuition: string;
  aid: string;
  classSize: string;
  updated: string;
  verified: boolean;
  tags: string[];
  summary: string;
  sourceUrl: string;
  sourceName: string;
  referenceRank: number;
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
    students: "1,150±",
    boarding: "待同步",
    tuition: "$79,800",
    aid: "$29.9M",
    classSize: "13",
    updated: "2026-07-15",
    verified: true,
    tags: ["Need-blind", "100% need met", "FS 参考 #1"],
    summary:
      "实行 need-blind 录取并满足 100% 经核定的经济需求。学校提供 300 门课程，平均班级人数 13 人。",
    sourceUrl: "https://www.andover.edu/about",
    sourceName: "学校官网 · Fast Facts",
    referenceRank: 1,
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
    boarding: "892",
    tuition: "$71,797",
    aid: "$29M",
    classSize: "12",
    updated: "2026-07-15",
    verified: true,
    tags: ["Need-blind", "Harkness", "FS 参考 #2"],
    summary:
      "以 Harkness 圆桌教学闻名，强调学生主导的讨论式学习。2025–26 学年共有 1,099 名学生，其中 892 名寄宿生。",
    sourceUrl: "https://exeter.edu/about/",
    sourceName: "学校官网 · About Exeter",
    referenceRank: 2,
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
    boarding: "待同步",
    tuition: "待同步",
    aid: "待同步",
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
    boarding: "待同步",
    tuition: "待同步",
    aid: "待同步",
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
    boarding: "待同步",
    tuition: "待同步",
    aid: "待同步",
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
    boarding: "待同步",
    tuition: "待同步",
    aid: "待同步",
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
  boarding: "待核验",
  tuition: "待核验",
  aid: "待核验",
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

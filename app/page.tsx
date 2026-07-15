"use client";

import { useMemo, useState } from "react";

type School = {
  id: string; name: string; short: string; location: string; grades: string;
  type: string; founded: number; students: string; boarding: string;
  tuition: string; aid: string; classSize: string; updated: string;
  verified: boolean; tags: string[]; summary: string; sourceUrl: string; sourceName: string;
};

const schools: School[] = [
  { id:"exeter", name:"Phillips Exeter Academy", short:"PEA", location:"Exeter, New Hampshire", grades:"9–12, PG", type:"男女合校 · 寄宿/走读", founded:1781, students:"1,099", boarding:"892", tuition:"$71,797", aid:"$29M", classSize:"12", updated:"2026-07-15", verified:true, tags:["Need-blind","Harkness","450+ 课程"], summary:"以 Harkness 圆桌教学闻名，强调学生主导的讨论式学习。2025–26 学年共有 1,099 名学生，其中 892 名寄宿生。", sourceUrl:"https://exeter.edu/about/", sourceName:"学校官网 · About Exeter" },
  { id:"andover", name:"Phillips Academy Andover", short:"PA", location:"Andover, Massachusetts", grades:"9–12, PG", type:"男女合校 · 寄宿/走读", founded:1778, students:"1,150±", boarding:"待同步", tuition:"$79,800", aid:"$29.9M", classSize:"13", updated:"2026-07-15", verified:true, tags:["Need-blind","100% need met","18% 国际生"], summary:"实行 need-blind 录取并满足 100% 经核定的经济需求。学校提供 300 门课程，平均班级人数 13 人。", sourceUrl:"https://www.andover.edu/about", sourceName:"学校官网 · Fast Facts" },
  { id:"choate", name:"Choate Rosemary Hall", short:"CRH", location:"Wallingford, Connecticut", grades:"9–12, PG", type:"男女合校 · 寄宿/走读", founded:1890, students:"待同步", boarding:"待同步", tuition:"待同步", aid:"待同步", classSize:"待同步", updated:"等待首次核验", verified:false, tags:["Signature Programs","跨学科","艺术"], summary:"已建立学校档案，等待采集器首次从学校官网与 NCES 官方数据源同步。", sourceUrl:"https://www.choate.edu/", sourceName:"学校官网" },
  { id:"hotchkiss", name:"The Hotchkiss School", short:"THS", location:"Lakeville, Connecticut", grades:"9–12, PG", type:"男女合校 · 寄宿/走读", founded:1891, students:"待同步", boarding:"待同步", tuition:"待同步", aid:"待同步", classSize:"待同步", updated:"等待首次核验", verified:false, tags:["Lakeville","环境教育","艺术"], summary:"已建立学校档案，等待采集器首次从学校官网与 NCES 官方数据源同步。", sourceUrl:"https://www.hotchkiss.org/", sourceName:"学校官网" },
  { id:"deerfield", name:"Deerfield Academy", short:"DA", location:"Deerfield, Massachusetts", grades:"9–12, PG", type:"男女合校 · 寄宿/走读", founded:1797, students:"待同步", boarding:"待同步", tuition:"待同步", aid:"待同步", classSize:"待同步", updated:"等待首次核验", verified:false, tags:["传统寄宿","社区文化","领导力"], summary:"已建立学校档案，等待采集器首次从学校官网与 NCES 官方数据源同步。", sourceUrl:"https://deerfield.edu/", sourceName:"学校官网" },
  { id:"lawrenceville", name:"The Lawrenceville School", short:"LVS", location:"Lawrenceville, New Jersey", grades:"9–12, PG", type:"男女合校 · 寄宿/走读", founded:1810, students:"待同步", boarding:"待同步", tuition:"待同步", aid:"待同步", classSize:"待同步", updated:"等待首次核验", verified:false, tags:["House System","Harkness","新泽西"], summary:"已建立学校档案，等待采集器首次从学校官网与 NCES 官方数据源同步。", sourceUrl:"https://www.lawrenceville.org/", sourceName:"学校官网" },
];

const tabs = ["核心数据", "申请信息", "学术课程", "校园生活", "官方来源"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState("exeter");
  const [activeTab, setActiveTab] = useState("核心数据");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [saved, setSaved] = useState<string[]>(["exeter"]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return schools.filter(s => (!q || [s.name,s.location,s.short,...s.tags].join(" ").toLowerCase().includes(q)) && (!verifiedOnly || s.verified));
  }, [query, verifiedOnly]);
  const selected = schools.find(s => s.id === selectedId) ?? schools[0];
  const toggleSave = (id:string) => setSaved(v => v.includes(id) ? v.filter(x => x !== id) : [...v,id]);

  return <main className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark">SB</div><div><strong>School Bank</strong><span>美国私校官方数据库</span></div></div>
      <nav className="side-nav" aria-label="主导航">
        <button className="active"><span>⌕</span> 学校数据库</button>
        <button><span>⇄</span> 学校对比 <b>2</b></button>
        <button><span>☆</span> 我的收藏 <b>{saved.length}</b></button>
        <button><span>◫</span> 顾问报告</button>
      </nav>
      <div className="sidebar-section"><p>数据中心</p><button><span>↻</span> 数据更新</button><button><span>✓</span> 来源审核</button><button><span>⌁</span> 字段管理</button></div>
      <div className="source-health"><div className="health-head"><span>数据源状态</span><b>94%</b></div><div className="health-bar"><i /></div><small>2 个来源已核验 · 4 个待同步</small></div>
      <div className="profile"><div className="avatar">K</div><div><strong>Kelly 顾问</strong><span>专业版工作区</span></div><button aria-label="设置">•••</button></div>
    </aside>

    <section className="workspace">
      <header className="topbar"><div><h1>学校数据库</h1><p>只呈现可追溯至学校官网或政府数据库的信息</p></div><div className="top-actions"><button className="ghost-btn">导出报告</button><button className="primary-btn">＋ 添加学校</button></div></header>
      <section className="search-panel">
        <label className="searchbox"><span>⌕</span><input aria-label="搜索学校" value={query} onChange={e=>setQuery(e.target.value)} placeholder="搜索学校名称、城市、州或特色项目…"/><kbd>⌘ K</kbd></label>
        <div className="filter-row"><button>学校类型⌄</button><button>年级范围⌄</button><button>所在州⌄</button><button>寄宿比例⌄</button><button>学费区间⌄</button><label className="verified-toggle"><input type="checkbox" checked={verifiedOnly} onChange={e=>setVerifiedOnly(e.target.checked)}/>仅看已核验</label></div>
      </section>

      <div className="content-grid">
        <section className="school-list" aria-label="学校列表">
          <div className="list-head"><span>共 {filtered.length} 所学校</span><button>默认排序⌄</button></div>
          <div className="cards">
            {filtered.map(s => <button key={s.id} className={`school-card ${selected.id===s.id?"selected":""}`} onClick={()=>setSelectedId(s.id)}>
              <div className="school-monogram">{s.short}</div><div className="school-card-main"><div className="school-title-row"><h2>{s.name}</h2>{s.verified?<span className="verified-badge">✓ 已核验</span>:<span className="pending-badge">待同步</span>}</div><p>⌖ {s.location}</p><div className="compact-stats"><span><small>年级</small>{s.grades}</span><span><small>学生</small>{s.students}</span><span><small>寄宿学费</small>{s.tuition}</span></div><div className="tag-row">{s.tags.map(t=><i key={t}>{t}</i>)}</div></div><span className="chevron">›</span>
            </button>)}
            {!filtered.length && <div className="empty-state">没有匹配的学校。试试学校英文名、城市或州。</div>}
          </div>
        </section>

        <aside className="detail-panel">
          <div className="detail-hero"><div className="detail-mark">{selected.short}</div><div className="detail-heading"><div className="eyebrow">{selected.type}</div><h2>{selected.name}</h2><p>⌖ {selected.location} · 创立于 {selected.founded}</p></div><button className={`save-btn ${saved.includes(selected.id)?"saved":""}`} onClick={()=>toggleSave(selected.id)} aria-label="收藏学校">{saved.includes(selected.id)?"★":"☆"}</button></div>
          <div className="freshness"><div><span className={selected.verified?"live-dot":"pending-dot"}/>{selected.verified?"官方来源已核验":"等待首次官方同步"}</div><span>更新：{selected.updated}</span></div>
          <div className="tabs" role="tablist">{tabs.map(t=><button key={t} className={activeTab===t?"active":""} onClick={()=>setActiveTab(t)} role="tab">{t}</button>)}</div>
          <div className="detail-body">
            {activeTab==="核心数据" && <><p className="summary">{selected.summary}</p><div className="metric-grid"><article><span>学生总数</span><strong>{selected.students}</strong><small>当前公开学年</small></article><article><span>寄宿学生</span><strong>{selected.boarding}</strong><small>学校官方口径</small></article><article><span>寄宿学费</span><strong>{selected.tuition}</strong><small>2026–27 学年</small></article><article><span>平均班级</span><strong>{selected.classSize}</strong><small>名学生</small></article><article><span>年度助学金</span><strong>{selected.aid}</strong><small>总额</small></article><article><span>开设年级</span><strong>{selected.grades}</strong><small>官方项目范围</small></article></div><section className="advisor-note"><div className="note-icon">i</div><div><strong>顾问提示</strong><p>学费、申请截止日期与标化政策每年可能变化。发送给家庭前，请打开官方来源完成二次核验。</p></div></section></>}
            {activeTab==="申请信息" && <div className="info-section"><h3>申请信息结构</h3><div className="timeline-row"><span>01</span><div><strong>申请轮次与截止日期</strong><p>按入学年份保存历史版本，变更时自动提示。</p></div></div><div className="timeline-row"><span>02</span><div><strong>考试与语言要求</strong><p>区分 required、recommended、optional 与 waived。</p></div></div><div className="timeline-row"><span>03</span><div><strong>面试、文书与推荐信</strong><p>直接链接学校官方申请说明与申请平台。</p></div></div></div>}
            {activeTab==="学术课程" && <div className="info-section"><h3>学术与课程</h3><p>课程目录、特色项目、教学方法、师生比、班级规模和毕业要求将在这里按学年归档，并保留原始 PDF 或官网链接。</p></div>}
            {activeTab==="校园生活" && <div className="info-section"><h3>寄宿与校园生活</h3><p>包含宿舍体系、周末安排、国际生支持、体育艺术、健康中心、机场交通与校园安全等顾问高频信息。</p></div>}
            {activeTab==="官方来源" && <div className="source-list"><a href={selected.sourceUrl} target="_blank" rel="noreferrer"><div className="source-icon">W</div><div><strong>{selected.sourceName}</strong><span>{selected.sourceUrl}</span></div><b>打开 ↗</b></a><a href="https://nces.ed.gov/surveys/pss/privateschoolsearch/" target="_blank" rel="noreferrer"><div className="source-icon gov">US</div><div><strong>NCES Private School Search</strong><span>美国教育部官方私校数据库</span></div><b>打开 ↗</b></a><div className="source-rule"><span>核验规则</span><p>学校官网优先；政府数据库用于身份、地址和规模交叉验证；第三方排名不作为事实字段来源。</p></div></div>}
          </div>
          <footer className="detail-footer"><button className="ghost-btn">加入对比</button><a className="primary-btn" href={selected.sourceUrl} target="_blank" rel="noreferrer">查看学校官网 ↗</a></footer>
        </aside>
      </div>
    </section>
  </main>;
}

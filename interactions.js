
/* Quiet, accessible interactions. No frameworks, external APIs, or tracking. */
(() => {
  'use strict';
  const stages = {
    materials: {
      kicker: '01 / ELECTRICAL MATERIALS',
      title: '電材銷售｜商品與通路',
      text: '接觸過開關、插座、住宅用火災警報器、斷路器等商品，也負責代理店、工程通路、商品推廣與市場調查。這段經歷奠定了產品與市場的基礎，期間也曾擔任營業課長，參與團隊管理。'
    },
    development: {
      kicker: '02 / BUSINESS DEVELOPMENT',
      title: '開發業務｜跨商品提案',
      text: '從單一商品擴展到跨商品提案，思考不同商材如何對應客戶需求與建築現場的應用。工作重心逐漸從「介紹產品」延伸到「理解需求與提出方案」。'
    },
    systems: {
      kicker: '03 / SYSTEM SOLUTIONS',
      title: '系統商材｜現在的工作',
      text: '目前主要負責 F2W、HA、電子鎖等建築系統商材，連結日本 BU、代理店與專案現場。比起單一商品，更需要把技術、商業條件與實際使用情境一起考量。'
    }
  };
  const aiProjects = {
  "credit": {
    "kicker": "01 / BUSINESS × AI",
    "title": "債權主檔",
    "text": "將分散的債權資訊、額度條件與出貨前檢核整合成管理工具，讓日常判斷更有依據。",
    "features": "整合債權餘額、信用額度及出貨檢核，提供額度試算與管理總覽。",
    "purpose": "降低人工比對與重複計算，讓額度判斷有一致的基準及追蹤方式。",
    "practice": "出貨前確認可用額度，評估超額情況及追加額度需求，作為內部確認與決策的輔助。",
    "flow": [
      "資料整合",
      "條件檢核",
      "額度試算",
      "決策輔助"
    ]
  },
  "builders": {
    "kicker": "02 / RISK × OBSERVATION",
    "title": "建商變化預警模型",
    "text": "從公開資訊與風險訊號出發，建立持續觀察建商變化的個人分析專案。",
    "features": "彙整公開事件、追蹤建商動態及異常訊號，建立風險觀察與歷史紀錄。",
    "purpose": "減少重要資訊的漏報，將零散事件轉為可持續更新、比較的觀察資料。",
    "practice": "觀察合作對象及產業動態，當異常訊號出現時，作為進一步查證與風險評估的起點，而非信用判定。",
    "flow": [
      "公開資訊",
      "訊號追蹤",
      "交叉查證",
      "風險觀察"
    ]
  },
  "kuma": {
    "kicker": "03 / CREATIVITY × INTERACTION",
    "title": "Kuma OS 桌面女友",
    "text": "從個人興趣出發，探索桌面介面、角色互動與使用體驗，將創意轉化為可操作的作品。",
    "features": "以桌面角色與互動介面為核心，研究畫面呈現、操作流程及互動回饋的設計。",
    "purpose": "探索 AI 如何協助個人將想法轉為原型，並透過反覆調整改善使用體驗。",
    "practice": "作為個人介面設計與互動開發的實驗場，測試構想、觀察操作體驗，再逐步修正設計。",
    "flow": [
      "創意構想",
      "介面設計",
      "互動原型",
      "體驗改善"
    ]
  },
  "lock": {
    "kicker": "04 / SERVICE × AI · 2026 MVP",
    "title": "B2B 電子鎖 AI 營運管理儀錶板",
    "text": "2026 年 AI 應用競賽作品。以新商品導入期的售服與案件管理需求為出發點，將營運資料整合成可操作的 MVP。",
    "features": "整合案件進度、售服紀錄、費用與異常資訊；以 Excel 規則篩選搭配 AI 摘要、待辦及改善建議。",
    "purpose": "減少重複整理及漏追，建立可持續追蹤、人工確認與改善回饋的管理方式。",
    "practice": "用模擬資料展示案件優先度、售服異常及月報整理。AI 輔助判讀，資料不足標示需確認，最終由人員複核。",
    "flow": [
      "案件匯入",
      "規則篩選",
      "AI 摘要",
      "人工確認"
    ]
  }
};
  const works = [
    {src:'assets/design.svg',title:'Coffee Grinder｜包裝設計',desc:'從平面視覺到盒型設計，曾實際製作成盒子供朋友使用。本站目前先以示意圖展示。'},
    {src:'assets/space.svg',title:'SUS 架｜空間與結構',desc:'研究尺寸、結構、動線與收納邏輯，再親自組裝並逐步優化。本站目前先以示意圖展示。'},
    {src:'assets/surface-renovation.svg',title:'家具與空間改造｜表面更新',desc:'利用家具貼皮、磁磚貼皮與油漆等方式，研究如何保留既有結構、調整材質與色彩，讓空間在不大幅更換家具的情況下產生新的視覺效果。本站目前以概念示意圖展示。'}
  ];
  function animateContent(box) {
    box.classList.remove('is-changing');
    void box.offsetWidth;
    box.classList.add('is-changing');
  }
  function setupTimeline() {
    const buttons = [...document.querySelectorAll('[data-stage]')];
    const box = document.getElementById('timeline-detail');
    if (!buttons.length || !box) return;
    const kicker = document.getElementById('stage-kicker');
    const title = document.getElementById('stage-title');
    const text = document.getElementById('stage-text');
    buttons.forEach((btn) => btn.addEventListener('click', () => {
      const stage = stages[btn.dataset.stage];
      if (!stage) return;
      buttons.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
      kicker.textContent = stage.kicker;
      title.textContent = stage.title;
      text.textContent = stage.text;
      animateContent(box);
    }));
  }
  function setupAI() {
    (function setupAI(doc,projects,animate){
 const buttons=[...doc.querySelectorAll('[data-ai]')],box=doc.getElementById('ai-detail');if(!buttons.length||!box)return;
 const fields={kicker:doc.getElementById('ai-kicker'),title:doc.getElementById('ai-title'),text:doc.getElementById('ai-text'),features:doc.getElementById('ai-features'),purpose:doc.getElementById('ai-purpose'),practice:doc.getElementById('ai-practice')};
 const flow=[...box.querySelectorAll('[data-ai-flow]')];
 function select(btn,withAnimation){const p=projects[btn.dataset.ai];if(!p)return;buttons.forEach(b=>{b.setAttribute('aria-selected',String(b===btn));b.tabIndex=b===btn?0:-1});Object.keys(fields).forEach(k=>{if(fields[k])fields[k].textContent=p[k]});flow.forEach((e,i)=>{e.textContent=p.flow[i]||''});if(withAnimation)animate(box)}
 buttons.forEach((btn,index)=>{btn.addEventListener('click',()=>select(btn,true));btn.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?buttons.length-1:(index+(e.key==='ArrowLeft'?-1:1)+buttons.length)%buttons.length;buttons[next].focus();buttons[next].click()})});select(buttons.find(b=>b.getAttribute('aria-selected')==='true')||buttons[0],false);
})(document,aiProjects,animateContent);
  }

  function setupGallery() {
    const buttons = [...document.querySelectorAll('[data-gallery-index]')];
    const dialog = document.getElementById('work-gallery-modal');
    if (!buttons.length || !dialog || typeof dialog.showModal !== 'function') return;
    const img = document.getElementById('gallery-view-image');
    const title = document.getElementById('gallery-view-title');
    const desc = document.getElementById('gallery-view-description');
    const counter = document.getElementById('gallery-counter');
    let current = 0;
    let opener = null;
    function show(index){
      current=(index+works.length)%works.length;
      const entry=works[current];
      img.src=entry.src;
      img.alt=entry.title + '示意圖';
      title.textContent=entry.title;
      desc.textContent=entry.desc;
      counter.textContent=(current+1)+' / '+works.length;
    }
    buttons.forEach(btn => btn.addEventListener('click',() => {
      opener=btn; show(Number(btn.dataset.galleryIndex));
      dialog.showModal();
    }));
    document.getElementById('gallery-close')?.addEventListener('click',()=>dialog.close());
    document.getElementById('gallery-prev')?.addEventListener('click',()=>show(current-1));
    document.getElementById('gallery-next')?.addEventListener('click',()=>show(current+1));
    dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
    dialog.addEventListener('close',()=>opener?.focus());
    document.addEventListener('keydown',e=>{
      if(!dialog.open)return;
      if(e.key==='ArrowLeft')show(current-1);
      if(e.key==='ArrowRight')show(current+1);
    });
  }
  function setupInterests(){
    const cards=[...document.querySelectorAll('.interest[data-interest]')];
    const imgOne=document.getElementById('interest-photo-one');
    const imgTwo=document.getElementById('interest-photo-two');
    const labelOne=document.getElementById('interest-caption-one');
    const labelTwo=document.getElementById('interest-caption-two');
    const gallery=document.getElementById('lifestyle-preview');
    if(!cards.length||!imgOne||!imgTwo||!gallery)return;
    const previews={
      overview:[
        {src:'assets/wardrobe-display.webp',alt:'衣物、包款與收納架的個人空間陳列',caption:'男裝與包款陳列'},
        {src:'assets/bag-detail.webp',alt:'個人拍攝的男士皮革包款',caption:'皮革包款'}
      ],
      japan:[
        {src:'assets/japan-select.webp',alt:'日本 IKEDA SELECT 選物店招牌照片',caption:'日本選物'},
        {src:'assets/textile-editorial.svg',alt:'男裝布料紋理及低彩度配色概念插畫',caption:'材質與配色（示意）'}
      ],
      reading:[
        {src:'assets/lifestyle-reading.svg',alt:'閱讀書本的概念插畫，尚無實際照片',caption:'閱讀（插畫）'},
        {src:'assets/lifestyle-ideas.svg',alt:'閱讀筆記與思考的概念插畫，尚無實際照片',caption:'思考（插畫）'}
      ],
      exercise:[
        {src:'assets/jump-rope.webp',alt:'本人曾長期使用的木柄競技跳繩實拍',caption:'陪伴八年的競技跳繩'},
        {src:'assets/fitness-history.webp',alt:'2018 年 10 月個人歷史體脂率紀錄圖表',caption:'2018 年 10 月｜身體數據紀錄'}
      ],
      home:[
        {src:'assets/sus-plan-2018.webp',alt:'2018 年 10 月 SUS 架配置規劃原圖',caption:'2018 年｜SUS 架配置規劃'},
        {src:'assets/room-style.webp',alt:'個人房間空間配置參考照片',caption:'居家配置'}
      ]
    };
    let current='overview';
    function updateGallery(key){
      if(key===current||!previews[key])return;
      current=key;
      const [first,second]=previews[key];
      imgOne.src=first.src;
      imgOne.alt=first.alt;
      imgTwo.src=second.src;
      imgTwo.alt=second.alt;
      labelOne.textContent=first.caption;
      labelTwo.textContent=second.caption;
      gallery.classList.remove('is-updating');
      void gallery.offsetWidth;
      gallery.classList.add('is-updating');
    }
    cards.forEach(card=>card.addEventListener('toggle',()=>{
      if(card.open){
        cards.filter(other=>other!==card&&other.open).forEach(other=>{other.open=false;});
      }
      const active=cards.find(other=>other.open);
      updateGallery(active?.dataset.interest||'overview');
    }));
  }
  function init(){
    setupTimeline();
    setupAI();
    setupGallery();
    setupInterests();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();

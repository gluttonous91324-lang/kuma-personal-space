
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
    credit: {
      kicker: '01 / BUSINESS × AI',
      title: '債權主檔',
      text: '將分散的債權資訊、額度條件與出貨前檢核整合在同一個管理架構。對我而言，AI 的價值之一，是讓繁雜的工作更容易被確認與追蹤。'
    },
    builders: {
      kicker: '02 / RISK × OBSERVATION',
      title: '建商變化預警模型',
      text: '從建商動態、公開事件與風險訊號出發，研究如何持續觀察並提早發現值得注意的變化。它是一個持續調整的個人分析專案。'
    },
    kuma: {
      kicker: '03 / CREATIVITY × INTERACTION',
      title: 'Kuma OS 桌面女友',
      text: '純粹從興趣出發的桌面互動作品。喜歡研究介面、操作方式與體驗，讓腦中覺得有趣的想法成為可以實際使用的東西。'
    }
  };
  const works = [
    {src:'assets/design.svg',title:'Coffee Grinder｜包裝設計',desc:'從平面視覺到盒型設計，曾實際製作成盒子供朋友使用。本站目前先以示意圖展示。'},
    {src:'assets/space.svg',title:'SUS 架｜空間與結構',desc:'研究尺寸、結構、動線與收納邏輯，再親自組裝並逐步優化。本站目前先以示意圖展示。'},
    {src:'assets/bags.svg',title:'選物與生活美感',desc:'留意男裝、包款與日式包裝的材質、線條、比例與整體氣氛。本站目前先以示意圖展示。'}
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
    const buttons = [...document.querySelectorAll('[data-ai]')];
    const box = document.getElementById('ai-detail');
    if (!buttons.length || !box) return;
    const kicker = document.getElementById('ai-kicker');
    const title = document.getElementById('ai-title');
    const text = document.getElementById('ai-text');
    buttons.forEach((btn,index) => {
      btn.addEventListener('click', () => {
        const project = aiProjects[btn.dataset.ai];
        if (!project) return;
        buttons.forEach(b => {b.setAttribute('aria-selected',String(b===btn)); b.tabIndex = b===btn?0:-1});
        kicker.textContent = project.kicker;
        title.textContent = project.title;
        text.textContent = project.text;
        animateContent(box);
      });
      btn.addEventListener('keydown',e => {
        if (!['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return;
        e.preventDefault();
        const next = e.key==='Home'?0:e.key==='End'?buttons.length-1:(index+(e.key==='ArrowLeft'?-1:1)+buttons.length)%buttons.length;
        buttons[next].focus();
        buttons[next].click();
      });
    });
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
        {src:'assets/bags.svg',alt:'選物與包款概念示意',caption:'選物與穿搭'},
        {src:'assets/space.svg',alt:'居家空間與收納概念示意',caption:'空間與設計'}
      ],
      japan:[
        {src:'assets/lifestyle-japan.svg',alt:'日本旅行與折紙概念插畫',caption:'日本旅行'},
        {src:'assets/lifestyle-city.svg',alt:'日本城市街景與選物空間插畫',caption:'城市與選物'}
      ],
      reading:[
        {src:'assets/lifestyle-reading.svg',alt:'閱讀書本的概念插畫',caption:'閱讀'},
        {src:'assets/lifestyle-ideas.svg',alt:'閱讀筆記與思考的概念插畫',caption:'思考與筆記'}
      ],
      exercise:[
        {src:'assets/lifestyle-rope.svg',alt:'跳繩運動的概念插畫',caption:'跳繩'},
        {src:'assets/lifestyle-training.svg',alt:'核心訓練的概念插畫',caption:'核心訓練'}
      ],
      home:[
        {src:'assets/lifestyle-home.svg',alt:'SUS 收納架的構造插畫',caption:'SUS 收納'},
        {src:'assets/space.svg',alt:'模組化居家空間概念示意',caption:'居家配置'}
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

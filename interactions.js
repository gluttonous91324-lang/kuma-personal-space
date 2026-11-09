
/* Quiet, accessible interactions. No frameworks, external APIs, or tracking. */
(() => {
  'use strict';
  const stages = {
    learn: {
      kicker: 'BEFORE 2010 / FOUNDATION',
      title: '日文背景與日本留學',
      text: '東吳大學日文系畢業，服完兵役後赴日本留學一年。這段經驗成為日後與日本團隊合作、理解不同工作文化的重要背景。'
    },
    materials: {
      kicker: '2010.05 / PANASONIC',
      title: '電材部門｜約 11 年',
      text: '2010 年 5 月加入 Panasonic，從一般開關、插座等電材商品接觸市場與代理店，也歷經業務管理工作。累積產品、通路與客戶需求的基礎。'
    },
    development: {
      kicker: 'NEXT CHAPTER / DEVELOPMENT',
      title: '開發業務｜約 1 年',
      text: '從個別商品走向全商品提案，嘗試用更寬的角度理解建築相關需求。這段經歷讓工作視野不再只侷限於單一產品。'
    },
    systems: {
      kicker: 'NOW / SYSTEM SOLUTIONS',
      title: '系統商材｜近 4 年',
      text: '目前主要接觸 F2W、HA、電子鎖等建築系統商材，連結日本 BU、代理店與專案現場。把商品、技術與實際使用情境連起來，是現在的工作重點。'
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
    const cards=[...document.querySelectorAll('.interest')];
    cards.forEach(card=>card.addEventListener('toggle',()=>{
      if(card.open)cards.filter(other=>other!==card).forEach(other=>other.open=false);
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

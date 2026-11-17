import React, {useRef,useState} from 'react';
import {art,starterItems,icons} from './data.js';

function Icon({name,size=20}){return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{__html:icons[name]||''}}/>}
const price=n=>n===0?'Free':'€'+n;
const designColors=[
 {name:'Moss',hex:'#34634A',note:'Actions & trust'},
 {name:'Sage',hex:'#BED0BE',note:'Quiet support'},
 {name:'Cream',hex:'#F7F5EF',note:'Breathing room'},
 {name:'Ink',hex:'#28362D',note:'Easy reading'},
 {name:'Clay',hex:'#BC7D60',note:'Human warmth'},
];
const designImages=[
 {type:'chair',alt:'Sunlit wooden chair with a houseplant in a warm Nordic interior',caption:'Objects with a story',reason:'Furniture can be useful for years, not just seasons. I want the everyday beauty of pre-loved things to come first.'},
 {type:'lamp',alt:'Cream-colored vintage desk lamp against a neutral wall',caption:'Useful, everyday finds',reason:'I chose familiar, practical objects and quiet backdrops because finding something secondhand should feel considered and inviting.'},
 {type:'knitwear',alt:'Folded warm brown knitted sweater on a wooden surface',caption:'A softer kind of shopping',reason:'Natural textures and softer colors make the idea of reuse feel personal and welcoming rather than preachy.'},
];
const journeyInsights=[
 {title:'What might help someone discover?',detail:'A short search field, useful categories and prices visible on cards. I want to test whether students can find an everyday essential without feeling lost.'},
 {title:'What might make a choice feel safe?',detail:'Honest condition labels, pickup area and a simple confirmation. In testing, I would ask what trust information is still missing.'},
 {title:'What might encourage a handover?',detail:'A short listing form and approachable language. I want to learn which fields are truly necessary before asking someone to post an item.'},
];
function DesignStory({onExplore,onGive,onReserve}){
 const [flipped,setFlipped]=useState(null);
 const [activeColor,setActiveColor]=useState(designColors[0]);
 const [demoSaved,setDemoSaved]=useState(false);
 const [demoQuery,setDemoQuery]=useState('');
 const [demoCategory,setDemoCategory]=useState('All items');
 const [activeJourney,setActiveJourney]=useState(0);
 const needsDarkText=['Sage','Cream','Clay'].includes(activeColor.name);
 const sampleMatches=['Lamp','Chair','Books'].filter(x=>(demoCategory==='All items'||(demoCategory==='Home'&&x==='Lamp')||(demoCategory==='Furniture'&&x==='Chair'))&&x.toLowerCase().includes(demoQuery.toLowerCase()));
 return <section className="design-story" id="design-story" aria-labelledby="story-heading">
  <div className="story-wrap">
   <div className="story-mast"><div className="story-mark">kierto<span>.</span></div><span>LAHTI / FINLAND</span></div>
   <div className="story-intro">
    <div className="story-kicker">01 / THE DESIGN DIRECTION</div>
    <h2 id="story-heading">A second life for things.<br/><em>A better start for someone else.</em></h2>
    <p>I'm exploring how a secondhand marketplace could feel thoughtful, calm and easy to use. I started with a Nordic-inspired visual direction that gives everyday objects room to shine.</p>
   </div>
   <div className="story-moodboard">
    {designImages.map((item,i)=><figure className={'story-image story-image-'+i} key={item.type}>
     <button className={'story-flip-card '+(flipped===i?'is-flipped':'')} onClick={()=>setFlipped(flipped===i?null:i)} aria-pressed={flipped===i} aria-label={(flipped===i?'Show artwork for ':'Read my design reason for ')+item.caption}>
      <span className="story-flip-inner">
       <span className="story-flip-front"><span className={'story-photo-slice story-photo-'+i}><img src={import.meta.env.BASE_URL+'kierto-moodboard-reference.png'} alt={item.alt} loading="lazy"/></span><span className="flip-hint">↻ Flip to see why</span></span>
       <span className="story-flip-back"><span className="flip-back-number">DESIGN NOTE / 0{i+1}</span><strong>{item.caption}</strong><span>{item.reason}</span><small>↶ Back to object</small></span>
      </span>
     </button>
     <figcaption><span>0{i+1}</span>{item.caption}</figcaption>
    </figure>)}
   </div>
   <div className="story-colors" aria-label="KIERTO color palette">
    {designColors.map(c=><button className={'story-color '+(activeColor.name===c.name?'is-active':'')} key={c.name} onClick={()=>setActiveColor(c)} aria-pressed={activeColor.name===c.name}>
     <span className="story-swatch" style={{background:c.hex}}/>
     <strong>{c.name}</strong><small>{c.hex}</small><span>{c.note}</span>
    </button>)}
   </div>
   <div className="palette-preview" aria-live="polite">
    <div className="palette-preview-copy"><span>INTERACTIVE COLOR STUDY</span><strong>{activeColor.name} <small>{activeColor.hex}</small></strong><p>{activeColor.note}. Choose any color above to preview how it behaves in a UI element.</p></div>
    <div className="palette-preview-sample" style={{background:activeColor.hex,color:needsDarkText?'#28362D':'#FFFFFF'}}><Icon name="heart" size={19}/><span>Give it another life</span><span>↗</span></div>
   </div>
   <p className="story-manifesto">I want KIERTO to feel like a <strong>premium Nordic circular-living service</strong>—not a generic secondhand marketplace or an environmental dashboard.</p>
   <div className="story-rule"/>

   <div className="story-heading-row">
    <div><div className="story-kicker">02 / THE INTERFACE SYSTEM</div><h2>Small details.<br/><em>Clear decisions.</em></h2></div>
    <p>My approach is to give every action a purpose: gentle contrast, generous spacing, readable labels and just enough visual warmth.</p>
   </div>
   <div className="system-grid">
    <article className="system-card system-card-wide">
     <div className="system-meta"><span>01</span><span>BUTTONS & ACTIONS</span></div>
     <h3>One clear next step.</h3>
     <p>Primary actions stand out. Secondary actions stay available without competing.</p>
     <div className="system-buttons">
      <button className="system-main-button" onClick={onReserve}>Reserve this item <span>↗</span></button>
      <button className="system-outline-button" onClick={onExplore}>Explore the collection ↗</button>
     </div>
     <div className="system-footnote">These controls open the working prototype above.</div>
    </article>
    <article className="system-card">
     <div className="system-meta"><span>02</span><span>CARDS & CONTENT</span></div>
     <h3>Information at a glance.</h3>
     <div className="system-product">
      <img src={art('lamp')} alt="Illustrated vintage table lamp" loading="lazy"/>
      <div><small>GOOD CONDITION</small><strong>Table lamp</strong><span>City center · Lahti</span><b>€ 8</b></div>
      <button onClick={()=>setDemoSaved(!demoSaved)} aria-pressed={demoSaved} className={'system-heart '+(demoSaved?'is-saved':'')} aria-label={demoSaved?'Remove example from favorites':'Save example to favorites'}><Icon name="heart" size={18}/></button>
     </div>
     <div className="system-footnote" aria-live="polite">{demoSaved?'♥ Saved to your sample favorites':'Tap the heart to try the saved state.'}</div>
    </article>
    <article className="system-card">
     <div className="system-meta"><span>03</span><span>FILTERS & INPUTS</span></div>
     <h3>Find what matters.</h3>
     <label className="system-search"><Icon name="search" size={18}/><input value={demoQuery} onChange={e=>setDemoQuery(e.target.value)} placeholder="Search these sample items" aria-label="Try the example design-system search"/></label>
     <div className="system-chips">{['All items','Home','Furniture'].map(c=><button className={demoCategory===c?'selected':''} onClick={()=>setDemoCategory(c)} aria-pressed={demoCategory===c} key={c}>{c}</button>)}</div>
     <p className="system-footnote" aria-live="polite">{sampleMatches.length?sampleMatches.join(' · ')+' — '+sampleMatches.length+' example result'+(sampleMatches.length>1?'s':''):'No sample matches. Try another search.'}</p>
    </article>
   </div>

   <div className="story-type-row">
    <div className="story-type-card">
     <div className="story-kicker">03 / TYPE & HIERARCHY</div>
     <p className="story-display">A little more <em>meaning.</em></p>
     <div className="story-type-label">Georgia · Editorial headlines</div>
     <p className="story-sans">Every item deserves a clear description.</p>
     <div className="story-type-label">Clean sans-serif · Everyday information</div>
    </div>
    <div className="story-icon-card">
     <div className="story-kicker">04 / ICONS & FEEDBACK</div>
     <h3>Familiar, not fussy.</h3>
     <div className="story-icon-grid">{['home','search','heart','plus','shield','user'].map(name=><div key={name}><Icon name={name} size={26}/><small>{name}</small></div>)}</div>
     <p>Consistent strokes and friendly feedback help people recognize actions before they need to read instructions.</p>
    </div>
   </div>
   <div className="story-rule"/>

   <div className="story-heading-row">
    <div><div className="story-kicker">05 / THE EXPERIENCE</div><h2>Find it.<br/><em>Love it. Pass it on.</em></h2></div>
    <p>I started with two journeys: finding something useful, and giving something away. Both are simulated in this prototype so I can explore the flow before building a real service.</p>
   </div>
   <div className="story-journey">
    {[['search','Discover','Browse local finds and filter by the things you need.'],['heart','Choose','Read the details, save favorites and try a pickup preference.'],['plus','Pass it on','Offer an item another person might be happy to use.']].map(([icon,title,description],i)=><button className={'journey-step '+(activeJourney===i?'is-active':'')} key={title} onClick={()=>setActiveJourney(i)} aria-pressed={activeJourney===i}><span className="journey-number">0{i+1}</span><span className="journey-icon"><Icon name={icon} size={25}/></span><strong>{title}</strong><span>{description}</span></button>)}
   </div>
   <div className="journey-insight" aria-live="polite"><span>DESIGN HYPOTHESIS / 0{activeJourney+1}</span><strong>{journeyInsights[activeJourney].title}</strong><p>{journeyInsights[activeJourney].detail}</p></div>
   <div className="story-research">
    <div><div className="story-kicker">06 / MY NEXT STEPS</div><h2>Design is a question<br/><em>I'm still exploring.</em></h2><p>This is a portfolio concept. I haven't conducted formal student interviews or usability tests yet, so I don't want to turn assumptions into findings.</p></div>
    <ol><li>Talk with students about how they find and give away things.</li><li>Test the search, reservation and listing journeys.</li><li>Improve trust, safety and accessibility using feedback.</li><li>Document iterations and reusable components in Figma.</li></ol>
   </div>
   <footer className="story-footer">
    <div><strong>kierto<span>.</span></strong><p>Good things deserve a second story.</p><small>Independent UI/UX portfolio concept · Sabnam Pariyar · Lahti, Finland</small></div>
    <div className="story-footer-links"><button onClick={onExplore}>Back to interactive demo ↑</button><button onClick={onGive}>Try giving an item ↗</button><a href="https://github.com/sabnumpariyar-png/KIERTO-Lahti" target="_blank" rel="noreferrer">Project & UX case study ↗</a></div>
   </footer>
  </div>
 </section>;
}
export default function App(){
 const [items,setItems]=useState(starterItems);
 const [page,setPage]=useState('discover');
 const [selected,setSelected]=useState(starterItems[0]);
 const [category,setCategory]=useState('All');
 const [query,setQuery]=useState('');
 const [saved,setSaved]=useState([]);
 const [reservations,setReservations]=useState([]);
 const [offers,setOffers]=useState([]);
 const [pickup,setPickup]=useState('Tomorrow');
 const [notice,setNotice]=useState('');
 const timer=useRef();const scroll=useRef(null);
 const tell=msg=>{setNotice(msg);clearTimeout(timer.current);timer.current=setTimeout(()=>setNotice(''),3200)};
 const go=to=>{setPage(to);if(scroll.current)scroll.current.scrollTop=0};
 const open=p=>{setSelected(p);go('detail')};
 const favorite=p=>{const exists=saved.includes(p.id);setSaved(s=>exists?s.filter(x=>x!==p.id):[...s,p.id]);tell(exists?'Removed from saved items':'Saved to your list')};
 const filtered=items.filter(p=>(category==='All'||p.category===category)&&(p.title+' '+p.place+' '+p.category).toLowerCase().includes(query.toLowerCase()));
 const reserve=()=>{setReservations(rs=>rs.some(r=>r.id===selected.id)?rs:[{...selected,pickup},...rs]);go('activity');tell('Demo reservation saved. Nice find!')};
 const showPrototype=to=>{go(to);document.getElementById('prototype')?.scrollIntoView({behavior:'smooth',block:'start'})};
 const addItem=e=>{e.preventDefault();const f=new FormData(e.currentTarget);const title=String(f.get('title')||'').trim();if(!title){tell('Please enter an item name');return}const types={Home:'lamp',Furniture:'chair',Electronics:'monitor',Clothing:'scarf',Sports:'mat',Books:'books',Hobbies:'paints',Transport:'bicycle'};const item={id:Date.now(),title,price:0,type:types[f.get('category')]||'lamp',category:f.get('category'),condition:f.get('condition'),place:f.get('place'),desc:f.get('desc')||'An item looking for a new home.',owner:'You'};setItems(a=>[item,...a]);setOffers(a=>[item,...a]);setQuery('');setCategory('All');go('discover');tell('Sample listing added!')};
 const ProductCard=({p})=><article className="product"><div className="pic"><button className="full-card-button" onClick={()=>open(p)} aria-label={'View '+p.title}><img src={art(p.type)} alt={'Illustration of '+p.title} loading="lazy"/></button><button className={'heart '+(saved.includes(p.id)?'active':'')} onClick={()=>favorite(p)} aria-label={'Save '+p.title}><Icon name="heart" size={17}/></button></div><div className="info" onClick={()=>open(p)} role="button" tabIndex={0} onKeyDown={e=>{if(e.key==='Enter')open(p)}}><div className="condition">{p.condition}</div><h4>{p.title}</h4><span className="muted">{p.place.split(' · ')[0]}</span><div className="metafoot"><span className="price">{price(p.price)}</span><span className="mini-note">↗</span></div></div></article>;
 return <>
 <div className="appstage" id="prototype">
  <aside className="editorial"><div className="eyebrow">Portfolio concept · Lahti, Finland</div><h1>Good things<br/>deserve a<br/><em>second story.</em></h1><p>A circular campus marketplace, built to help students give away, discover and pick up pre-loved things with less friction and more trust.</p><div className="rule"/><div className="meta"><b>01 / Mobile-first UX</b><span>Independent student concept</span></div><a className="story-jump" href="#design-story">Explore the design story <span>↓</span></a></aside>
  <main className="shell" aria-label="KIERTO Lahti interactive prototype"><div className="statusbar"><span>9:41</span><span>▴  ▰  ▮</span></div>
   <header className="top"><div><div className="logo">kierto<span className="dot">.</span></div><div className="topsmall">A SECOND LIFE IN LAHTI</div></div><div className="topright"><button className="roundbtn" onClick={()=>go('activity')} aria-label="Saved items"><Icon name="heart" size={18}/></button><a className="roundbtn story-nav-link" href="#design-story" aria-label="Scroll down to design direction and design system" title="Explore the design story"><span className="notify"/><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v15M6 13l6 6 6-6"/></svg></a></div></header>
   <section className="scroller" ref={scroll} aria-live="polite">
    {page==='discover'&&<div className="pad screenfade"><div className="hello">HELLO, LAHTI! ✳</div><h1 className="headline">Find something<br/><em>worth keeping.</em></h1><label className="search"><Icon name="search" size={20}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search pre-loved treasures" aria-label="Search listings"/></label><div className="banner"><div className="btext"><div className="over">CIRCULAR LIVING</div><h2>Less new.<br/>More meaning.</h2><p>Good things find<br/>good people.</p></div><div className="art"><img src={art('plant')} alt="Decorative plant"/></div></div><div className="sectionrow"><h3>Explore the collection</h3><small>{filtered.length} items</small></div><div className="chips">{['All','Home','Furniture','Electronics','Clothing','Sports','Books','Hobbies','Transport'].map(c=><button key={c} onClick={()=>setCategory(c)} className={'chip '+(category===c?'active':'')}>{c}</button>)}</div><div style={{height:18}}/><div className="gridcards">{filtered.length?filtered.map(p=><ProductCard key={p.id} p={p}/>):<div className="empty" style={{gridColumn:'span 2'}}>No matching items. Try another search or category.</div>}</div><p style={{fontSize:10,color:'#9ca69b',lineHeight:1.5,paddingTop:19}}>Illustrative listings for a student UX prototype. No real reservations or payments.</p></div>}
    {page==='detail'&&<div className="screenfade"><div className="detailhero"><img src={art(selected.type)} alt={'Illustration of '+selected.title}/><button className="backcircle" onClick={()=>go('discover')} aria-label="Back"><Icon name="arrow" size={19}/></button><div className="overpic">♻ Pre-loved</div></div><div className="detailcontent"><div className="condition">{selected.category} · {selected.condition}</div><h2 className="detailtitle">{selected.title}</h2><div className="detailprice">{price(selected.price)}</div><p className="detaildesc">{selected.desc}</p><div className="facts"><div className="fact"><small>ITEM CONDITION</small><b>{selected.condition}</b></div><div className="fact"><small>PICKUP LOCATION</small><b>{selected.place.split(' · ')[0]}</b></div></div><div className="owner"><div className="avatar">{selected.owner.charAt(0)}</div><div><strong>Offered by {selected.owner}</strong><small>Member of the Lahti community · sample</small></div></div><button className="primary full" onClick={()=>go('reserve')}>Reserve this item →</button><p className="hint" style={{textAlign:'center'}}>Free campus-friendly exchange · prototype only</p></div></div>}
    {page==='reserve'&&<div className="screenfade"><div className="pagehead"><button className="back" onClick={()=>go('detail')}>← Back to item</button><h1>Make it yours.</h1><p>Choose a preferred pickup day. The owner would confirm the arrangement in a real service.</p></div><div className="pad"><div className="panel"><div className="reservationitem"><img src={art(selected.type)} alt={selected.title}/><div><span>{selected.condition}</span><strong>{selected.title}</strong><div className="price">{price(selected.price)}</div></div></div><div className="separator"/><div className="tinytitle">Preferred pickup day</div><div className="picker">{['Today','Tomorrow','Weekend'].map(d=><button key={d} className={pickup===d?'active':''} onClick={()=>setPickup(d)}>{d}</button>)}</div><div className="tinytitle">Pickup area</div><p className="hint">{selected.place}<br/>Exact meeting details would be shared after confirmation.</p></div><div className="safe"><Icon name="shield" size={21}/><span>Meet in a public place and check the item before exchanging it. This demo does not contact a seller.</span></div><button className="primary full" onClick={reserve}>Confirm demo reservation →</button><p className="hint" style={{textAlign:'center'}}>No payment or account needed in this prototype.</p></div></div>}
    {page==='give'&&<div className="screenfade"><div className="pagehead"><span className="eyebrow" style={{fontSize:9}}>GIVE IT ANOTHER LIFE</span><h1>Pass it forward.</h1><p>Someone in Lahti could give your item a wonderful next chapter.</p></div><form className="pad" onSubmit={addItem} style={{paddingTop:8}}><div className="photobox"><Icon name="camera" size={30}/><span>Photo preview · illustrative for this demo</span></div><div className="field"><label htmlFor="itemname">What are you giving?</label><input required id="itemname" name="title" maxLength="60" placeholder="e.g. Bedside lamp"/></div><div className="field"><label htmlFor="itemcat">Category</label><select id="itemcat" name="category">{['Home','Furniture','Electronics','Clothing','Sports','Books','Hobbies','Transport'].map(a=><option key={a}>{a}</option>)}</select></div><div className="field"><label htmlFor="itemcondition">Condition</label><select id="itemcondition" name="condition">{['Very good','Good condition','Like new','Fair'].map(a=><option key={a}>{a}</option>)}</select></div><div className="field"><label htmlFor="itemplace">Pickup area</label><select id="itemplace" name="place">{['LAB Campus · Lahti','City center · Lahti','Mukkula · Lahti','Laune · Lahti'].map(a=><option key={a}>{a}</option>)}</select></div><div className="field"><label htmlFor="itemdesc">A little description</label><textarea id="itemdesc" name="desc" maxLength="280" placeholder="What makes it special? Any signs of use?"/></div><div className="safe"><Icon name="heart" size={20}/><span>Keep it friendly and honest. Clear item conditions help build trust.</span></div><button type="submit" className="primary full">Publish sample listing →</button><p className="hint" style={{textAlign:'center'}}>Listings are kept only inside this local demo session.</p></form></div>}
    {page==='activity'&&<div className="screenfade"><div className="pagehead"><span className="eyebrow" style={{fontSize:9}}>YOUR CIRCULAR JOURNEY</span><h1>Little actions.<br/>Real possibility.</h1><p>Keep track of things you love, things you give, and items reserved.</p></div><div className="pad"><div className="counter"><div className="stat"><strong>{reservations.length}</strong><small>Reserved</small></div><div className="stat"><strong>{saved.length}</strong><small>Saved</small></div><div className="stat"><strong>{offers.length}</strong><small>Given</small></div></div><div className="sectionrow"><h3>My activity</h3><small>{reservations.length+offers.length} entries</small></div><div className="activitylist">{(!reservations.length&&!offers.length)?<div className="empty">Your second-story journey begins here.<br/>Discover an item or share something you no longer use.</div>:<>{reservations.map(r=><div className="activity" key={'r'+r.id}><img src={art(r.type)} alt=""/><div><span className="flag">DEMO RESERVED</span><h3>{r.title}</h3><small>Preferred pickup: {r.pickup} · Awaiting confirmation</small></div></div>)}{offers.map(r=><div className="activity" key={'o'+r.id}><img src={art(r.type)} alt=""/><div><span className="flag">YOUR LISTING</span><h3>{r.title}</h3><small>Visible in this demo session</small></div></div>)}</>}</div><div className="sectionrow"><h3>Saved items</h3><small>{saved.length} items</small></div><div className="gridcards">{saved.length?items.filter(p=>saved.includes(p.id)).map(p=><ProductCard key={p.id} p={p}/>):<div className="empty" style={{gridColumn:'span 2'}}>Tap ♡ on an item to keep it here.</div>}</div></div></div>}
   </section>
   <nav className="bottom" aria-label="Main navigation">{[['discover','home','Explore'],['activity','heart','Saved'],['give','plus','Give'],['activity','user','My Kierto']].map(([id,icon,caption],i)=><button key={caption} className={'nav '+((page===id||((page==='detail'||page==='reserve')&&i===0))?'active':'')} onClick={()=>go(id)} aria-label={caption}><Icon name={icon} size={21}/><span>{caption}</span></button>)}</nav>
   {notice&&<div className="toast show" role="status">{notice}</div>}
  </main>
 </div>
 <DesignStory onExplore={()=>showPrototype('discover')} onGive={()=>showPrototype('give')} onReserve={()=>showPrototype('reserve')}/>
 </>;
}

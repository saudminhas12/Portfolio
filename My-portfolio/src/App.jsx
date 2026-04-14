import { useState } from "react";

const INFO = { name:"Saud Minhas", title:"Full Stack Developer", email:"minhassaud96@gmail.com", phone:"0309-6448993", location:"Lahore, Pakistan", github:"https://github.com/saudminhas12" };

const SKILLS = { Frontend:["HTML","CSS","Bootstrap","Tailwind","JavaScript","jQuery","React"], Backend:["PHP","Laravel","SQL"] };

// ── YOUR PROJECTS — HOW TO EDIT: ─────────────────────────────────────────────
// To CHANGE → edit the values inside any { } below
// To ADD    → copy one line, paste it after, and update the values
// To REMOVE → delete that whole line (and its trailing comma)
// num  = number shown on the card  |  name = card title  |  url = GitHub link
// tags = tech used (shown as pills) |  desc = one-line description
const PROJECTS = [
  { num:"01", name:"Project",   url:"https://github.com/saudminhas12/Project-11", tags:["HTML","CSS Advance"], desc:"Responsive landing page with HTML and CSS"  },
  { num:"02", name:"Project",   url:"https://github.com/saudminhas12/Project-16", tags:["React"], desc:"Live Exchange rate with REACT"},
  { num:"03", name:"Project",   url:"https://github.com/saudminhas12/Project-20", tags:["PHP","Bootstrap"], desc:"News Portal with PHP and Bootstrap"  },
];``

// ── COLOURS — change these hex codes to restyle the whole site ────────────────
const IND = "#6366f1"; // indigo  — used for links, highlights, frontend badges
const ROS = "#f43f5e"; // rose    — used for backend skill badges
const MUT = "#8888aa"; // muted   — used for secondary/grey text
const HUG = "#040463"; // hugo   — a very dark shade, used for card bg on hover and nav bg

// ── BADGE COMPONENT — a small coloured pill, used for skills and project tags ─
// label = the text inside  |  color = the colour of the pill
const Badge = ({label, color}) =>
 <span style={{fontSize:12, padding:"3px 12px", borderRadius:20, fontWeight:600, background:color+"22", color, border:`1px solid ${color}44`}}>{label}</span>;

// ── CARD COMPONENT — one project card that glows and links to GitHub on click ─
function Card({p}) {
  const [h, setH] = useState(false); // h = true when mouse is hovering over this card

  return (
    // The whole card is a link — clicking it opens the GitHub repo in a new tab
    <a href={p.url} target="_blank" rel="noopener noreferrer"
      onMouseEnter={()=>setH(true)}  // set h to true when mouse enters
      onMouseLeave={()=>setH(false)} // set h to false when mouse leaves
      style={{display:"block", textDecoration:"none", borderRadius:12, padding:"0.9rem", transition:"all 0.3s",
        background: h ? "#1e1e2e" : "#17171f",           // lighter bg on hover
        border:     `1px solid ${h ? HUG : "#2a2a38"}`,  // indigo border on hover
        boxShadow:  h ? `20px 10px 20px ${IND}33` : "none"}}> {/* glow effect on hover */}

      {/* Top row: project number on the left, arrow icon on the right */}
      <div    style={{display:"flex", justifyContent:"space-between", marginBottom:8}}>
        <span style={{fontSize:11, color:IND, fontWeight:700}}>{p.num}</span> {/* e.g. "01" */}
        <span style={{color: h ? IND : MUT}}>↗</span> {/* arrow turns indigo on hover */}
      </div>

      <p style={{fontWeight:700, color:"#f1f0ff", marginBottom:6}}>{p.name}</p>   {/* project title */}
      <p style={{fontSize:13, color:MUT, lineHeight:1.6, marginBottom:12}}>{p.desc}</p> {/* description */}

      {/* Loop through tags array and render a Badge for each technology */}
      <div style={{display:"flex", gap:6, flexWrap:"wrap"}}>
        {p.tags.map(t => <Badge key={t} label={t} color={IND}/>)}
      </div>
    </a>
  );
}

// ── MAIN PORTFOLIO PAGE ───────────────────────────────────────────────────────
export default function Portfolio() {

  // go(id) — smoothly scrolls the page to whichever section matches that id
  const go = id => document.getElementById(id)?.scrollIntoView({behavior:"smooth"});

  // D — a reusable border string so we don't repeat "1px solid #2a2a38" everywhere
  const D = "1px solid #2a2a38";

  return (
    // Outer wrapper — sets the dark background and default text colour for the whole page
    <div style={{background:"#0f0f13", minHeight:"100vh", color:"#f1f0ff", fontFamily:"'Segoe UI',sans-serif"}}>

      {/* Global CSS reset — removes default browser margins and enables smooth scrolling */}
      <style>{`*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}`}</style>

      {/* ── NAV — sticks to the top, blurs content behind it ── */}
      <nav style={{position:"sticky", top:0, zIndex:99, backdropFilter:"blur(12px)", background:"#0f0f13ee", borderBottom:D, padding:"1rem 2rem", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        {/* Left side: first name + indigo dot */}
        <strong style={{fontSize:17}}>{INFO.name.split(" ")[0]}<span style={{color:IND}}>.</span></strong>
        <div style={{display:"flex", gap:"1.5rem", alignItems:"center"}}>
          {/* Loop through section names — creates one scroll button per section */}
          {["projects","skills","contact"].map(id =>
            <button key={id} onClick={()=>go(id)} style={{background:"none", border:"none", cursor:"pointer", color:MUT, fontSize:14, textTransform:"capitalize"}}>{id}</button>)}
          {/* GitHub button — opens profile in a new tab */}
          <a href={INFO.github} target="_blank" rel="noopener noreferrer" style={{background:IND, color:"#fff", padding:"7px 16px", borderRadius:8, fontSize:13, fontWeight:600, textDecoration:"none"}}>GitHub</a>
        </div>
      </nav>

      {/* Page content — centred with a max width of 820px */}
      <div style={{maxWidth:820, margin:"0 auto", padding:"0 1.5rem 4rem"}}>

        {/* ── HERO — first section visitors see ── */}
        <section style={{padding:"5rem 0 3rem", borderBottom:D}}>
          {/* Green pill badge — the dot + "Open to opportunities" text */}
          <div style={{display:"inline-flex", alignItems:"center", gap:8, marginBottom:"1.5rem", background:"#22c55e18", border:"1px solid #22c55e44", padding:"5px 14px", borderRadius:20}}>
            <span style={{width:7, height:7, borderRadius:"50%", background:"#22c55e", display:"inline-block"}}/> {/* green dot */}
            <span style={{fontSize:12, color:"#22c55e", fontWeight:600}}>Open to opportunities</span>
          </div>
          {/* Main headline — clamp() makes font size scale with screen width */}
          <h1 style={{fontSize:"clamp(34px,6vw,58px)", fontWeight:900, lineHeight:1.1, marginBottom:"1rem"}}>Hi, I'm {INFO.name}.<br/><span style={{color:IND}}>I build the full web.</span></h1>
          {/* Subtitle — pulls title and location from INFO */}
          <p style={{color:MUT, fontSize:15, lineHeight:1.8, maxWidth:500, marginLeft:130, marginBottom:"2rem"}}>{INFO.title} · {INFO.location}. Building clean interfaces and solid backends.</p>
          {/* Two CTA buttons — both scroll to a different section */}
          <div style={{display:"flex", gap:12}}>
            <button onClick={()=>go("projects")} style={{background:IND, color:"#fff", border:"none", marginLeft:240, padding:"12px 24px", borderRadius:8, cursor:"pointer", fontWeight:700, fontSize:14}}>View Projects</button>
            <button onClick={()=>go("contact")}  style={{background:"transparent", color:"#f1f0ff", border:D, padding:"12px 24px", borderRadius:8, cursor:"pointer", fontSize:14}}>Contact Me</button>
          </div>
        </section>

        {/* ── PROJECTS — loops PROJECTS array and renders a Card for each ── */}
        <section id="projects" style={{padding:"3.5rem 0", borderBottom:D}}>
          <h2 style={{fontSize:24, fontWeight:800, marginBottom:"0.3rem"}}>Projects</h2>
          <p style={{color:MUT, fontSize:13, marginBottom:"1.5rem"}}>Click any card to view on GitHub.</p>
          {/* CSS grid — auto-fills columns, each at least 230px wide */}
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))", gap:14}}>
            {PROJECTS.map(p => <Card key={p.num} p={p}/>)} {/* one Card per project */}
          </div>
          {/* Link to all repos — appends ?tab=repositories to the GitHub profile URL */}
          <p style={{marginTop:"1.25rem", textAlign:"center"}}><a href={`${INFO.github}?tab=repositories`} target="_blank" rel="noopener noreferrer" style={{fontSize:13, color:MUT}}>See all repos →</a></p>
        </section>

        {/* ── SKILLS — loops SKILLS object, Frontend=indigo, Backend=rose ── */}
        <section id="skills" style={{padding:"3.5rem 0", borderBottom:D}}>
          <h2 style={{fontSize:24, fontWeight:800, marginBottom:"1.5rem"}}>Skills</h2>
          {/* Object.entries turns { Frontend:[...], Backend:[...] } into pairs we can loop */}
          {Object.entries(SKILLS).map(([type, list]) => (
            <div key={type} style={{marginBottom:"1.25rem"}}>
              <p style={{fontSize:11, fontWeight:700, color:MUT, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:8}}>{type}</p> {/* "FRONTEND" or "BACKEND" label */}
              <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
                {list.map(s => <Badge key={s} label={s} color={type==="Frontend" ? IND : ROS}/>)} {/* indigo for frontend, rose for backend */}
              </div>
            </div>
          ))}
        </section>

        {/* ── CONTACT — four info cards in a responsive grid ── */}
        <section id="contact" style={{padding:"3.5rem 0"}}>
          <h2 style={{fontSize:24, fontWeight:800, marginBottom:"1.5rem"}}>Contact</h2>
          {/* Each item: [icon, label, display value, href link] — href=null means no link */}
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))", gap:12}}>
            {[["📧","Email",INFO.email,`mailto:${INFO.email}`], ["📞","Phone",INFO.phone,`tel:${INFO.phone}`], ["📍","Location",INFO.location,null], ["💻","GitHub","saudminhas12",INFO.github]]
              .map(([icon, label, val, href]) => (
              <div key={label} style={{background:"#17171f", border:D, borderRadius:10, padding:"1.1rem"}}>
                <div style={{fontSize:20, marginBottom:6}}>{icon}</div> {/* emoji icon */}
                <div style={{fontSize:11, color:MUT, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:4}}>{label}</div> {/* e.g. "EMAIL" */}
                {/* If href exists → render as a clickable link, otherwise → plain text */}
                {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{fontSize:13, color:IND, wordBreak:"break-all"}}>{val}</a>
                      : <span style={{fontSize:13}}>{val}</span>}
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── FOOTER ── */}
      <footer style={{borderTop:D, padding:"1.25rem", textAlign:"center", fontSize:13, color:MUT}}>© 2026 {INFO.name} · Built with React</footer>

    </div>
  );
}
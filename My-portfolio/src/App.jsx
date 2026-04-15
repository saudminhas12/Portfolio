import { useState } from "react";

const INFO = { name:"Saud Minhas", title:"Full Stack Developer", email:"minhassaud96@gmail.com", phone:"0309-6448993", location:"Lahore, Pakistan", github:"https://github.com/saudminhas12" };

const SKILLS = { Frontend:["HTML","CSS","Bootstrap","Tailwind","JavaScript","jQuery","React"], Backend:["PHP","Laravel","SQL"]};

const PROJECTS = [
  { num:"01", name:"Project",   url:"https://github.com/saudminhas12/Project-11", tags:["HTML","CSS Advance"], desc:"Responsive landing page with HTML and CSS"  },
  { num:"02", name:"Project",   url:"https://github.com/saudminhas12/Project-16", tags:["React"], desc:"Live Exchange rate with REACT"},
  { num:"03", name:"Project",   url:"https://github.com/saudminhas12/Project-20", tags:[,"PHP","Bootstrap"], desc:"News Portal with PHP and Bootstrap"  },
];``

const IND = "#6366f1"; 
const ROS = "#f43f5e"; 
const MUT = "#8888aa"; 
const HUG = "#040463"; 

const Badge = ({label, color}) =>
  <span style={{fontSize:12, padding:"3px 12px", borderRadius:20, fontWeight:600, background:color+"22", color, border:`1px solid ${color}44`}}>{label}</span>;

function Card({p}) {
  const [h, setH] = useState(false); 

  return (
    
    <a href={p.url} target="_blank" rel="noopener noreferrer"
      onMouseEnter={()=>setH(true)}  
      onMouseLeave={()=>setH(false)} 
      style={{display:"block", textDecoration:"none", borderRadius:12, padding:"0.9rem", transition:"all 0.3s",
        background: h ? "#1e1e2e" : "#17171f",          
        border:     `1px solid ${h ? HUG : "#2a2a38"}`,  
        boxShadow:  h ? `10px 5px 20px ${IND}26` : "none"}}> 

    
      <div    style={{display:"flex", justifyContent:"space-between", marginBottom:8}}>
        <span style={{fontSize:11, color:IND, fontWeight:700}}>{p.num}</span> 
        <span style={{color: h ? IND : MUT}}>↗</span> 
      </div>

      <p style={{fontWeight:700, color:"#f1f0ff", marginBottom:6}}>{p.name}</p> 
      <p style={{fontSize:13, color:MUT, lineHeight:1.6, marginBottom:12}}>{p.desc}</p>

      <div style={{display:"flex", gap:6, flexWrap:"wrap"}}>
        {p.tags.map(t => <Badge key={t} label={t} color={IND}/>)}
      </div>
    </a>
  );
}

export default function Portfolio() {

  const go = id => document.getElementById(id)?.scrollIntoView({behavior:"smooth"});

  const D = "1px solid #2a2a38";

  return (
  
    <div style={{background:"#0c0c12", minHeight:"100vh", color:"#f1f0ff", fontFamily:"'Segoe UI',sans-serif"}}>

      
      <style>{`*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}`}</style>

      
      <nav style={{position:"sticky", top:0, zIndex:99, backdropFilter:"blur(4px)", background:"#0f0f13ee", borderBottom: "3px solid #2a2a38" , padding:"1rem 2rem", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
      
        <strong style={{fontSize:25}}>{INFO.name.split(" ")[0]}<span style={{color:IND}}>.</span></strong>
        <div style={{display:"flex", gap:"1.5rem", alignItems:"center"}}> 
         
          {["projects","skills","contact"].map(id =>
            <button key={id} onClick={()=>go(id)} style={{background:"none", border:"none", color: MUT, cursor:"pointer",  fontSize:14, textDecoration:"none", textTransform:"capitalize"}}>{id}</button>)}
         
          <a href={INFO.github} target="_blank" rel="noopener noreferrer" style={{background:IND, color:"#fff", padding:"7px 16px", borderRadius:8, fontSize:13, fontWeight:600, textDecoration:"none"}}>GitHub</a>
        </div>
      </nav>

      <div style={{maxWidth:820, margin:"0 auto", padding:"0 1.5rem 4rem"}}>

        <section style={{padding:"5rem 0 3rem", borderBottom:D}}>
          
          <div style={{display:"flex", justifyContent:"center"}}>
          <div style={{display:"inline-flex", alignItems:"center", gap:8, marginBottom:"1.5rem", background:"#22c55e18", border:"1px solid #22c55e44", padding:"5px 14px", borderRadius:20}}>
            <span style={{width:5, height:5, borderRadius:"50%", background:"#22c55e", display:"inline-block"}}/>
            <span style={{fontSize:12, color:"#22c55e", fontWeight:600}}>Open to opportunities</span>
          </div>
          </div>
          
          <h1 style={{textAlign:"center",fontSize:"clamp(34px,6vw,58px)", fontWeight:900, lineHeight:1.1, marginBottom:"1rem"}}>Hi, I'm {INFO.name}.<br/><span style={{color:IND}}>I build the full web.</span></h1>
          
          <p style={{ textAlign:"center", color:MUT, fontSize:15, lineHeight:1.8, maxWidth:500, marginLeft:130, marginBottom:"2rem"}}>{INFO.title} · {INFO.location}. Building clean interfaces and solid backends.</p>
         
          <div style={{display:"flex", gap:12}}>
            <button onClick={()=>go("projects")} style={{background:IND, color:"#fff", border:"none", marginLeft:240, padding:"12px 24px", borderRadius:8, cursor:"pointer", fontWeight:700, fontSize:14}}>View Projects</button>
            <button onClick={()=>go("contact")}  style={{background:"transparent", color:"#f1f0ff", border:D, padding:"12px 24px", borderRadius:8, cursor:"pointer", fontSize:14}}>Contact Me</button>
          </div>
        </section>

        
        <section id="projects" style={{padding:"3.5rem 0", borderBottom:D}}>
          <h2 style={{fontSize:24, fontWeight:800, marginBottom:"0.3rem"}}>Projects</h2>
          <p style={{color:MUT, fontSize:13, marginBottom:"1.5rem"}}>Click any card to view on GitHub.</p>
          
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))", gap:14}}>
            {PROJECTS.map(p => <Card key={p.num} p={p}/>)} 
          </div>
          
          <p style={{marginTop:"1.25rem", textAlign:"center"}}><a href={`${INFO.github}?tab=repositories`} target="_blank" rel="noopener noreferrer" style={{fontSize:13, color:MUT}}>See all repos →</a></p>
        </section>
 
        
        <section id="skills" style={{padding:"3.5rem 0", borderBottom:D}}>
          <h2 style={{fontSize:24, fontWeight:800, marginBottom:"1.5rem"}}>Skills</h2>
          
          {Object.entries(SKILLS).map(([type, list]) => (
            <div key={type} style={{marginBottom:"1.25rem"}}>
              <p style={{fontSize:11, fontWeight:700, color:MUT, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:8}}>{type}</p> 
              <div style={{display:"flex", flexWrap:"wrap", gap:8}}>
                {list.map(s => <Badge key={s} label={s} color={type==="Frontend" ? IND : ROS}/>)} 
            </div>
          ))}
        </section>

      
        <section id="contact" style={{padding:"3.5rem 0"}}>
          <h2 style={{fontSize:24, fontWeight:800, marginBottom:"1.5rem"}}>Contact</h2>
          
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))", gap:12}}>
            {[["📧","Email",INFO.email,`mailto:${INFO.email}`], ["📞","Phone",INFO.phone,`tel:${INFO.phone}`], ["📍","Location",INFO.location,null], ["💻","GitHub","saudminhas12",INFO.github]]
              .map(([icon, label, val, href]) => (
              <div key={label} style={{background:"#17171f", border:D, borderRadius:10, padding:"1.1rem"}}>
                <div style={{fontSize:20, marginBottom:6}}>{icon}</div> {/* emoji icon */}
                <div style={{fontSize:11, color:MUT, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:4}}>{label}</div> {/* e.g. "EMAIL" */}
               
                {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{fontSize:13, color:IND, wordBreak:"break-all"}}>{val}</a>
                      : <span style={{fontSize:13}}>{val}</span>}
              </div>
            ))}
          </div>
        </section>

      </div>
      
      <footer style={{borderTop:D, padding:"1.25rem", textAlign:"center", fontSize:13, color:MUT}}>© 2026 {INFO.name} · Built with React</footer>

    </div>
  );
}

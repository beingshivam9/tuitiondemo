import classroom1 from "../assets/classroom1.jpg"
import classroom2 from "../assets/classroom2.jpg"
import classroom3 from "../assets/classroom3.jpg"

import topper1 from "../assets/topper1.jpg"
import topper2 from "../assets/topper2.jpg"

import teacher from "../assets/teacher.jpg"

function Home() {

const whatsappLink = "https://wa.me/917992283208?text=Hello%20I%20want%20to%20know%20about%20admissions"

return (
<div style={{ background:"#141414", color:"white", minHeight:"100vh" }}>


{/* HERO */}

<section style={{ padding:"70px 20px", textAlign:"center", background:"#000" }}>

<h1 style={{ fontSize:"36px", color:"#E50914" }}>
RANJIT'S ACADEMY
</h1>

<p style={{ maxWidth:"700px", margin:"10px auto", lineHeight:"1.6" }}>
A trusted tuition institute helping students master Mathematics
and Science through conceptual clarity, disciplined practice
and personalized academic mentoring.
</p>

<p style={{marginTop:"10px"}}>
📞 <a href="tel:+917992283208" style={{color:"white"}}>+91 7992283208</a>
</p>

<a href={whatsappLink} target="_blank">
<button style={ctaButton}>
Admissions Open
</button>
</a>

</section>



{/* CLASSROOM */}

<section style={{ padding:"40px 20px" }}>

<h2 style={{ marginBottom:"20px" }}>
Our Classroom Environment
</h2>

<div style={grid}>

<img src={classroom1} style={imageStyle} />

<img src={classroom2} style={imageStyle} />

<img src={classroom3} style={imageStyle} />

</div>

</section>



{/* COURSES */}

<section style={{ padding:"40px 20px" }}>

<h2 style={{ marginBottom:"25px" }}>
Courses Offered
</h2>

<div style={grid}>

<div style={card}>
<h3>Class 8 – 10 Foundation</h3>
<p>
Strong conceptual foundation in Mathematics and Science
with regular tests and doubt-solving sessions.
</p>
</div>

<div style={card}>
<h3>Class 11 – 12 Boards</h3>
<p>
Comprehensive preparation for board examinations
in Physics, Chemistry and Mathematics.
</p>
</div>

<div style={card}>
<h3>JEE Foundation</h3>
<p>
Logical thinking, numerical solving techniques
and competitive exam level practice.
</p>
</div>

</div>

</section>



{/* TOPPERS */}

<section style={{ padding:"40px 20px" }}>

<h2>Student Achievements</h2>

<p style={{marginTop:"10px"}}>
Our students consistently achieve outstanding academic
results with many scoring above 90% in board exams.
</p>

<div style={{...grid, marginTop:"20px"}}>

<img src={topper1} style={imageStyle} />

<img src={topper2} style={imageStyle} />

</div>

</section>



{/* TEACHER */}

<section style={{ padding:"40px 80px" }}>

<h2>Meet the Teacher</h2>

<div style={{marginTop:"20px", ...grid}}>

<img src={teacher} style={imageStyle} />

<div style={card}>

<p>
With over a decade of teaching experience,
our faculty focuses on concept clarity,
disciplined practice and individual attention
so every student can achieve academic excellence.
</p>

</div>

</div>

</section>



{/* CONTACT */}

<section style={{ padding:"40px 20px", textAlign:"center" }}>

<h2>Contact & Admissions</h2>

<p style={{marginTop:"10px"}}>
For admissions, demo classes or course details please contact us.
</p>

<p style={{marginTop:"15px"}}>
📞 <a href="tel:+917992283208" style={{color:"white"}}>+91 7992283208</a>
</p>

<p>
📧 <a href="mailto:shiiivam196@gmail.com" style={{color:"white"}}>
shiiivam196@gmail.com
</a>
</p>

<p style={{marginTop:"15px"}}>
📍 F -1, Paradise Apartment, Third Floor A 6 , A Wing  
Opposite SIES College, Nerul East, Sector 3  
Navi Mumbai, Maharashtra 40070
</p>

<a href="https://share.google/u8oa9WDd73xJRRUaX" target="_blank">
<button style={ctaButton}>
Open in Google Maps
</button>
</a>

<br/><br/>

<a href={whatsappLink} target="_blank">
<button style={ctaButton}>
Chat on WhatsApp
</button>
</a>

</section>



{/* FLOATING WHATSAPP BUTTON */}

<a
href={whatsappLink}
target="_blank"
style={{
position:"fixed",
right:"20px",
bottom:"90px",
background:"#25D366",
color:"white",
padding:"14px 16px",
borderRadius:"50px",
fontWeight:"bold",
textDecoration:"none",
boxShadow:"0 4px 10px rgba(0,0,0,0.3)"
}}
>
WhatsApp
</a>


</div>
)
}



const grid = {
display:"grid",
gridTemplateColumns:"repeat(auto-fit, minmax(220px,1fr))",
gap:"20px"
}

const card = {
background:"#1f1f1f",
padding:"20px",
borderRadius:"8px",
lineHeight:"1.6"
}

const imageStyle = {
width:"100%",
height:"200px",
objectFit:"cover",
borderRadius:"6px"
}

const ctaButton = {
marginTop:"20px",
padding:"12px 28px",
background:"#E50914",
border:"none",
color:"white",
borderRadius:"6px",
cursor:"pointer"
}

export default Home
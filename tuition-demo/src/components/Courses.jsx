function Courses() {

const whatsappLink = "https://wa.me/917992283208?text=Hello%20I%20want%20to%20know%20about%20course%20details"

return (
<div style={{background:"#141414", color:"white", minHeight:"100vh", padding:"40px 20px"}}>

<h1 style={{color:"#E50914", textAlign:"center"}}>
Our Courses
</h1>

<p style={{textAlign:"center", maxWidth:"700px", margin:"10px auto"}}>
We provide structured academic programs designed to help students
build strong conceptual foundations and achieve excellent results
in school examinations and competitive tests.
</p>



{/* CLASS 8-10 */}

<div style={courseCard}>

<h2>Class 8 – 10 Foundation Program</h2>

<p>
This program focuses on strengthening the fundamental concepts
of Mathematics and Science. Students receive systematic
training, concept explanations and practice exercises
aligned with school curriculum.
</p>

<ul>
<li>Concept-based teaching</li>
<li>Regular practice worksheets</li>
<li>Weekly tests and performance review</li>
<li>Doubt-solving sessions</li>
<li>Preparation for board exams</li>
</ul>

</div>



{/* CLASS 11-12 */}

<div style={courseCard}>

<h2>Class 11 – 12 Board Preparation</h2>

<p>
Designed for students preparing for board examinations in
Physics, Chemistry and Mathematics. The program emphasizes
deep conceptual understanding and numerical problem solving.
</p>

<ul>
<li>Detailed theory explanation</li>
<li>Board exam focused preparation</li>
<li>Numerical problem solving</li>
<li>Mock tests and revisions</li>
<li>Individual student attention</li>
</ul>

</div>



{/* JEE */}

<div style={courseCard}>

<h2>JEE Foundation Course</h2>

<p>
This course prepares students for engineering entrance
examinations through logical thinking development and
advanced problem solving techniques.
</p>

<ul>
<li>Advanced numerical practice</li>
<li>Competitive exam strategies</li>
<li>Conceptual clarity sessions</li>
<li>Speed and accuracy improvement</li>
<li>Regular evaluation tests</li>
</ul>

</div>



{/* CTA */}

<div style={{textAlign:"center", marginTop:"40px"}}>

<h3>Interested in joining?</h3>

<p>Contact us for admission details or demo classes.</p>

<a href={whatsappLink} target="_blank">
<button style={ctaButton}>
Chat on WhatsApp
</button>
</a>

</div>

</div>
)
}



const courseCard = {
background:"#1f1f1f",
padding:"25px",
borderRadius:"8px",
marginTop:"30px",
lineHeight:"1.6"
}

const ctaButton = {
marginTop:"15px",
padding:"12px 28px",
background:"#E50914",
border:"none",
color:"white",
borderRadius:"6px",
cursor:"pointer"
}

export default Courses
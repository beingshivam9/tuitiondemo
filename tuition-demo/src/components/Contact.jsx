function Contact() {

const whatsappLink = "https://wa.me/917992283208?text=Hello%20I%20want%20to%20know%20about%20admissions"

return (

<div style={{background:"#141414", color:"white", minHeight:"100vh", padding:"40px 20px"}}>

<h1 style={{color:"#E50914", textAlign:"center"}}>
Contact & Admissions
</h1>

<p style={{textAlign:"center", maxWidth:"700px", margin:"10px auto"}}>
For admissions, demo classes, or course inquiries,
please contact us using the details below.
</p>



{/* CONTACT INFO */}

<div style={card}>

<h2>Contact Details</h2>

<p>
📞 Phone:  
<a href="tel:+917992283208" style={link}>
+91 7992283208
</a>
</p>

<p>
📧 Email:  
<a href="mailto:shiiivam196@gmail.com" style={link}>
shiiivam196@gmail.com
</a>
</p>

</div>



{/* ADDRESS */}

<div style={card}>

<h2>Institute Address</h2>

<p>
F-1, Paradise Apartment, Third Floor A-6, A Wing  
Opposite SIES College  
Nerul East, Sector 3  
Navi Mumbai, Maharashtra 40070
</p>

<a href="https://share.google/u8oa9WDd73xJRRUaX" target="_blank">

<button style={ctaButton}>
Open in Google Maps
</button>

</a>

</div>



{/* WHATSAPP */}

<div style={{textAlign:"center", marginTop:"40px"}}>

<h3>Quick Admission Enquiry</h3>

<p>Click below to chat instantly on WhatsApp.</p>

<a href={whatsappLink} target="_blank">

<button style={ctaButton}>
Chat on WhatsApp
</button>

</a>

</div>

</div>
)
}



const card = {
background:"#1f1f1f",
padding:"25px",
borderRadius:"8px",
marginTop:"30px",
lineHeight:"1.6"
}

const link = {
color:"#E50914",
textDecoration:"none",
marginLeft:"5px"
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

export default Contact
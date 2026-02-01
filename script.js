  // Modern auto-sliding testimonials
const tTrack = document.getElementById('testimonialTrack');
if(tTrack){
  let tIndex = 0;
  const cards = tTrack.children.length;
  const slide = () =>{
    const width = tTrack.children[0].offsetWidth + 32;
    tIndex = (tIndex + 1) % cards;
    tTrack.style.transform = `translateX(-${tIndex * width}px)`;
  }
  setInterval(slide, 4000);
}
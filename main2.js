console.log("Legion's Ad-Block brought to you by Recte | recte.cc")
setInterval(()=>{
  document.querySelectorAll('.banner-container,[id^="kour-io_"]').forEach(e=>e.remove())
},1000);
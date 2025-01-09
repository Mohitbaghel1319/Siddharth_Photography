const headText = document.querySelector('#head-text h1');

let servicesArray = ["Pre wedding ", "Wedding Matrimony shoot", "Baby shoot", "Fashion shoot", "Product photography", "Food photography", "Ring ceremony", "Vlog shoot", "Event podcast", "Indoor shoot"]

let galleryData = [
    {src:"https://plus.unsplash.com/premium_photo-1682096067532-3e89ab323ebf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFufGVufDB8MXwwfHx8MA%3D%3D"},
    {src:"https://plus.unsplash.com/premium_photo-1682090842887-ce74633ad05a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFufGVufDB8MXwwfHx8MA%3D%3D"},
    {src:"https://images.unsplash.com/photo-1567001134409-70042ed1b41c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbnxlbnwwfDF8MHx8fDA%3D"},
    {src:"https://plus.unsplash.com/premium_photo-1670745084868-7b4f727cc934?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZGlhbnxlbnwwfDF8MHx8fDA%3D"},
    {src:"https://images.unsplash.com/flagged/photo-1566192215649-67347425f492?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGluZGlhbnxlbnwwfDF8MHx8fDA%3D"},
    {src:"https://plus.unsplash.com/premium_photo-1676179690742-bb3d1f9a641f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D"},
    {src:"https://images.unsplash.com/photo-1556763298-45dd094af54e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D"},
    {src:"https://images.unsplash.com/photo-1597840662268-226a09bc49f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D"},
    {src:"https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D"},
    {src:"https://images.unsplash.com/photo-1530244683770-bb7dc36bf7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D"},
]

function gallery(data){
    const gallery = document.querySelector('#gallary');
    data.map((elem)=>{
        gallery.innerHTML += `<div class="md:h-60 md:w-60 w-36 h-36 bg-red-200 overflow-hidden">
                                <img class="h-full w-full object-cover" src="${elem.src}" alt="">
                            </div>`
    });
}

let subText = headText.textContent.split(' ');
headText.innerHTML = ""

for(i=0; i < subText.length; i++){
    headText.innerHTML += `<span>${subText[i]} </span>`
}

function heroSec(){
    let tl = gsap.timeline();
    let mm = gsap.matchMedia();

    // Desktop animations
    mm.add("(min-width: 601px)", () => {
        tl.from('#logo',{
            scale:0,
            opacity:0,
            x:-200,
            duration:0.5,
            stagger:0.2,
        })
        tl.from('ul li',{
            y:-100,
            duration:0.4,
            stagger:0.2,
        })
        tl.from('#head-text h1 span',{
            opacity:0,
            duration:1,
            stagger:0.2,
        })
        tl.from('#head-text p',{
            scale:0,
            opacity:0,
            // y:500,
            duration:0.5,
            stagger:0.15,
        })
        tl.from('#img_1',{
            left:-320,
            opacity:0,
            scale:0,
            rotate:'360deg',
            duration:0.4,
        })
        tl.from('#img_3',{
            right:-320,
            opacity:0,
            scale:0,
            rotate:'360deg',
            duration:0.4,
        })
        tl.from('#img_2',{
            top:-400,
            duration:0.4,
        });

        //testomonial
        // gsap.to('#testomonial > div',{
        //     x:-700,
        //     duration:1,
        //     scrollTrigger:{
        //         trigger:'#testomonial-cont',
        //         scroll: 'body' ,
        //         start:'top 0%',
        //         end:'top -180%',
        //         markers:true,
        //         scrub:2,
        //         pin:true
        //     }
        // });
    });
    

    // Mobile animations.........
    mm.add("(max-width: 600px)", () => {
        tl.from('#logo',{
            scale:0,
            opacity:0,
            x:-200,
            duration:0.5,
        })
        tl.from('ul li',{
            x:150,
            duration:0.4,
            stagger:0.2,
        })
        tl.from('#head-text h1 span',{
            opacity:0,
            duration:1,
            stagger:0.2,
        })
        tl.from('#head-text p',{
            scale:0,
            opacity:0,
            // y:500,
            duration:0.5,
            stagger:0.15,
        })
        tl.from('#img_1',{
            left:-320,
            opacity:0,
            scale:0,
            rotate:'360deg',
            duration:0.4,
        })
        tl.from('#img_3',{
            right:-320,
            opacity:0,
            scale:0,
            rotate:'360deg',
            duration:0.4,
        })
        tl.from('#img_2',{
            top:-400,
            duration:0.4,
        })

        //testomonial
        // gsap.to('#testomonial > div',{
        //     x:-700,
        //     duration:1,
        //     scrollTrigger:{
        //         trigger:'#testomonial-cont',
        //         scroll: 'body' ,
        //         start:'top 15%',
        //         end:'top -180%',
        //         markers:true,
        //         scrub:2,
        //         pin:true
        //     }
        // });
    });

}
function servicesAnim(){

    gsap.from('#page1 .service-head',{
        y:-200,
        duration:1,
        scrollTrigger:{
            trigger:'#page1 .service-head',
            scroll: 'body' ,
            start:'top 70%',
            end:'top 50%',
            // markers:true,
            scrub:2
        }
    });
    gsap.from('#page1 img',{
        x:-200,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:'#page1 img',
            scroll: 'body' ,
            start:'top 70%',
            end:'top 30%',
            // markers:true,
            scrub:2
        }
    });
    gsap.from('#page1 .wed-head',{
        y:300,
        scale:0,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:'#page1 .wed-head',
            scroll: 'body' ,
            start:'top 120%',
            end:'top 80%',
            // markers:true,
            scrub:2
        }
    });
    gsap.from('#page1 p',{
        x:600,
        scale:0,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:'#page1 p',
            scroll: 'body' ,
            start:'top 100%',
            end:'top 80%',
            // markers:true,
            scrub:2
        }
    });

    // page2 Animation start
   
    gsap.from('#page2 img',{
        x:400,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:'#page2 img',
            scroll: 'body' ,
            start:'top 60%',
            end:'top 40%',
            // markers:true,
            scrub:2
        }
    });
    gsap.from('#page2 .wed-head',{
        y:-300,
        scale:0,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:'#page2 .wed-head',
            scroll: 'body' ,
            start:'top 70%',
            end:'top 50%',
            // markers:true,
            scrub:2
        }
    });
    gsap.from('#page2 p',{
        y:-100,
        scale:0,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:'#page2 p',
            scroll: 'body' ,
            start:'top 70%',
            end:'top 50%',
            // markers:true,
            scrub:2
        }
    });

    // page 3 start
    gsap.from('#page3 img',{
        x:-200,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:'#page3 img',
            scroll: 'body' ,
            start:'top 70%',
            end:'top 30%',
            // markers:true,
            scrub:2
        }
    });
    gsap.from('#page3 .wed-head',{
        y:300,
        scale:0,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:'#page3 .wed-head',
            scroll: 'body' ,
            start:'top 120%',
            end:'top 100%',
            // markers:true,
            scrub:2
        }
    });
    gsap.from('#page3 p',{
        x:600,
        scale:0,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:'#page3 p',
            scroll: 'body' ,
            start:'top 100%',
            end:'top 80%',
            // markers:true,
            scrub:2
        }
    });

    //testomonial
    gsap.to('#testomonial > div',{
        x:-710,
        duration:1,
        scrollTrigger:{
            trigger:'#testomonial-cont',
            scroll: 'body' ,
            start:'top 10%',
            end:'top -180%',
            // markers:true,
            scrub:2,
            pin:true
        }
    });
}

heroSec();
servicesAnim();
gallery(galleryData);

gsap.from('#gallary div',{
            y:400,
            opacity:0,
            // scale:0
            stagger:0.2,
            scrollTrigger:'#gallary'
        });
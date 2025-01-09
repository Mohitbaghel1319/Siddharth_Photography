let galleryDiv = document.querySelector("#photo-gallery");

let galleryImages = [
    {src:"assets/img/1.jpg"},
    {src:"assets/img/3.jpg"},
    {src:"assets/img/4.jpg"},
    {src:"assets/img/5.jpg"},
    {src:"assets/img/6.jpg"},
    {src:"assets/img/7.jpg"},
    {src:"assets/img/8.jpg"},
    {src:"assets/img/9.jpg"},
    {src:"assets/img/10.jpg"},
    {src:"assets/img/2.jpg"},
]
let allGalleryImages = [
    [
        {src:"assets/img/1.jpg"},
        {src:"assets/img/3.jpg"},
        {src:"assets/img/4.jpg"},
        {src:"assets/img/5.jpg"},
        {src:"assets/img/6.jpg"},
        {src:"assets/img/7.jpg"},
        {src:"assets/img/8.jpg"},
        {src:"assets/img/9.jpg"},
        {src:"assets/img/10.jpg"},
        {src:"assets/img/2.jpg"},
    ],
    [
        {src:"https://images.unsplash.com/photo-1556763298-45dd094af54e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1567001134409-70042ed1b41c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbnxlbnwwfDF8MHx8fDA%3D"},
        {src:"https://plus.unsplash.com/premium_photo-1670745084868-7b4f727cc934?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZGlhbnxlbnwwfDF8MHx8fDA%3D"},
        {src:"https://plus.unsplash.com/premium_photo-1676179690742-bb3d1f9a641f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1530244683770-bb7dc36bf7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1597840662268-226a09bc49f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D"},
        {src:"https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D"},
        {src:"https://plus.unsplash.com/premium_photo-1682096067532-3e89ab323ebf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFufGVufDB8MXwwfHx8MA%3D%3D"},
        {src:"https://plus.unsplash.com/premium_photo-1682090842887-ce74633ad05a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFufGVufDB8MXwwfHx8MA%3D%3D"},
        {src:"https://images.unsplash.com/flagged/photo-1566192215649-67347425f492?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGluZGlhbnxlbnwwfDF8MHx8fDA%3D"},
    ]
]
function gallery2(data){
    const gallery2 = document.querySelector('#gallery');
    data.map((elem)=>{
        gallery2.innerHTML += `<div class="md:h-60 md:w-60 w-36 h-36 bg-red-200 overflow-hidden category">
                                <img class="h-full w-full object-cover" src="${elem.src}" alt="">
                            </div>`
    });
}

gallery2(galleryImages);
// preWedding();

let category = document.querySelectorAll('.image-div');
category.forEach((imageBox, index) => {
    imageBox.addEventListener("click",() => {
        window.scrollTo({
            top: 0, // Scroll to the top
            behavior: "smooth", // Smooth scrolling effect
          });
        galleryDiv.innerHTML = '';
        let count = Math.floor(allGalleryImages[`${index}`].length/3);
        let imgcount = 0;
        for(i=0; i<count; i++){
            let clmsDiv = document.createElement('div');
            clmsDiv.classList = "clms";
            let photoDiv = document.createElement('div');
            photoDiv.classList = "photo";
            galleryDiv.appendChild(clmsDiv);
            clmsDiv.appendChild(photoDiv);
            for(j=0; j<3; j++){
                photoDiv.innerHTML += `<img src="${allGalleryImages[`${index}`][imgcount].src}" alt="">`
                imgcount++;
            }
        }
    })
})

// category.forEach(function preWedding(){
//     count = Math.floor(galleryImages.length/3)
//     imgcount = 0;
//     for(i=0; i<count; i++){
//         let clmsDiv = document.createElement('div');
//         clmsDiv.classList = "clms";
//         let photoDiv = document.createElement('div');
//         photoDiv.classList = "photo";
//         galleryDiv.appendChild(clmsDiv);
//         clmsDiv.appendChild(photoDiv);
//         for(j=0; j<3; j++){
//             photoDiv.innerHTML += `<img src="${galleryImages[imgcount].src}" alt="">`
//             imgcount++;
//         }
//     }
// })
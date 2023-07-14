let productBtn=document.querySelectorAll('.product')
let productInfo=document.querySelector('.product-preview')
let productPre=document.querySelectorAll('.preview')

productBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        let productId=btn.getAttribute('data-id')
        productPre.forEach((product)=>{
            let previewId=product.getAttribute('data-target')
            if(productId==previewId){
                productInfo.classList.add('active-preview')
                product.classList.add('active')
            }
        })
    })
})

let cross=document.querySelectorAll('.fa-close')

cross.forEach((cross)=>{
    cross.addEventListener('click',()=>{
        productPre.forEach((product)=>{
            productInfo.classList.remove('active-preview')
            product.classList.remove('active')
        })
        
    })
})

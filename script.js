let roundButton=document.querySelector('.round1')
let contentSection=document.querySelector('.content')
let count=document.querySelector('#number')
let inputText=document.querySelector('input')
let bodyContent=document.querySelector('body')
let title=document.querySelector('.title')
let themeImage=document.querySelector('.title img')
let main=document.querySelector('main')
let array1=[]

// roundbutton click
roundButton.addEventListener('click',()=>{
    // creating div
    let div
    div=document.createElement('div')
    div.className='addtodo'
    div.innerHTML=`
        <div class="round"><img src="" class="tick"></div>
        <p>${inputText.value}</p>
        <img src="images/icon-cross.svg" alt="" class='xmark'>
    `
    contentSection.appendChild(div)
    inputText.value=''
    

    // identifying length
    let num1=contentSection.querySelectorAll('.addtodo')
    count.innerHTML=num1.length


    // hover status
    num1.forEach(n=>{
        n.addEventListener('mouseenter',()=>{
            n.classList.add('live')
        })
        n.addEventListener('mouseleave',()=>{
            n.classList.remove('live')
        })
    })
    

    let arrayDiv=Array.from(num1)
    console.log(arrayDiv)
    
    // tick mark
    let round=div.querySelectorAll('.round')
    let image=div.querySelectorAll('.tick')
    let para=div.querySelectorAll('p')
    
    round.forEach((ro,index)=>{
        ro.addEventListener('click',()=>{
            let currIndex=index
            let parrent=ro.parentNode
            // let num4=arrayDiv.indexOf(parrent)
            array1.push(currIndex)
            ro.style.background='linear-gradient(to right bottom, hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
            image[currIndex].src='images/icon-check.svg'
            para[currIndex].style.color='hsl(237, 14%, 26%)'
            para[currIndex].style.textDecoration='line-through'
            console.log(array1)
            console.log(currIndex)
            // console.log(parrent)
        })
    })
    

    // remove the div
    let img=div.querySelectorAll('.xmark')
    img.forEach((i)=>{
        i.addEventListener('click',()=>{
            const parentDiv = i.parentNode
            contentSection.removeChild(parentDiv)
            num1=contentSection.querySelectorAll('.addtodo')
            count.innerHTML=num1.length
        })
    })

    // footer content
    // let active=document.querySelectorAll('.footer .active p')
    // active.forEach((p,index)=>{
    //     p.addEventListener('click',()=>{
            
    //         let arrayDiv=Array.from(num1)
    //         if(index===0)
    //         {
    //             console.log('y')
    //         }
    //         else if(index===1)
    //         {
    //             let num3=arrayDiv.filter((x, xindex)=>{
    //                 return !array1.includes(xindex)
    //             })
    //             console.log(num3)
    //         }
            
    //         // console.log(num3)
    //     })
    // })
    let cover=document.querySelector('.cover')

    // theme changing
    themeImage.addEventListener('click',()=>{
        title.classList.toggle('light')
        bodyContent.classList.toggle('light1')
        bodyContent.classList.toggle('light2')
        bodyContent.classList.toggle('light4')
        main.classList.toggle('light3')
        cover.classList.toggle('li')
        // div.classList.toggle('light5')
    })
})


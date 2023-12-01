const progress=document.querySelector('.progress'),
      input=document.querySelector('input')
      input.addEventListener('change',()=>{
        let value=parseInt(input.value)
        if(value>=0 && value<=100){
            console.log(value)
            console.log(typeof(value))
            progress.style.width=`${value}%`
        }
        // else if(typeof(value)!==typeof(0)){
        //     console.log('not a number')
        //     alert(`pls insert a number`)
        // }
      
        else{
            console.log('invalid')
            alert(`invalid: your value should be (0-100) only `)
        }
      })
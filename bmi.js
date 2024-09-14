const height=document.getElementById('height')
const weight=document.getElementById('weight')
const bmivalue=document.getElementById('bmi-value')
const bmistatus=document.getElementById('bmi-status')
const btn=document.getElementById('calculate-bmi')
const clear=document.getElementById('clearbutton')
btn.addEventListener('click',function(){
   if(height.value=='' || weight.value=='')
   {
      alert('enter ')
      return
    } else{
      let heightvalue= height.value
      let weightvalue= weight.value
      let heightincm=heightvalue/100
      let bmi=weightvalue/(heightincm*heightincm)
      bmi=bmi.toFixed(2)
      document.querySelector("#bmi-value").innerHTML=bmi
      if (bmi<=16.4)
            document.querySelector("#bmi-status").innerHTML=' Underweight '
        else if(bmi>=18.5||bmi<=24.9)
          document.querySelector("#bmi-status").innerHTML=' Normal '
        else if(bmi>=25.0||bmi<=39.9)
          document.querySelector("#bmi-status").innerHTML=' Above Weight ' 
        else if(bmi>=40.0)
          document.querySelector("#bmi-status").innerHTML= ' Obese'
}
 })
 clear.addEventListener('click',function(){
   location.reload()})

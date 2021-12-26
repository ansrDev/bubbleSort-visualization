let arr = Array(6,2,3,4,5,1,9,20,21)
let bar = []
// const bar = document.querySelectorAll(".bar");
const barWrapper = document.querySelector(".bar-wrapper");
for(let i = 0; i < arr.length;i++){
  let barEl = document.createElement("div")
  barEl.classList.add("bar")
  bar.push(barEl)
  barWrapper.appendChild(barEl)
}

const swapBar = function(arr1,arr2){
  let tmp = arr1.style.left;
  arr1.style.left = arr2.style.left;
  arr2.style.left = tmp
  arr1.style.transform = "translateY(40px)"
  arr2.style.transform = "translateY(40px)"
  setTimeout(()=>{
  arr1.style.transform = "translateY(0)"
  arr2.style.transform = "translateY(0)"
  },100)
}

const delay = function(time = 1000){
  return new Promise((res)=>{
    setTimeout(()=>{
      res()
    },time)
  })
}

// algoritma bubble sort

const bubbleSort = async function(arr){

for(let i = 0; i < arr.length-1;i++){
  for(let j = 0;j < arr.length - i - 1;j++){
    bar[j].classList.add("highlight")
    bar[j+1].classList.add("highlight")
    await delay()
    if(arr[j] > arr[j+1]){
      swapBar(bar[j],bar[j+1])
      let tmp = arr[j]
      arr[j] = arr[j+1]
      arr[j+1] = tmp
    }
    await delay()
    bar[j].classList.remove("highlight")
    bar[j+1].classList.remove("highlight")
  }
}
}

bar.forEach((e,i)=>{
  e.setAttribute("data-id",i)
  e.style.height = (arr[i]*10)+"px"
  e.style.left = i * 40 + "px";
  e.textContent = arr[i]
})
console.log(arr)
bubbleSort(arr)
console.log(arr)















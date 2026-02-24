let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewcount = document.getElementById('interviewcount');
let rejectedcount = document.getElementById('rejectedcount');

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

const allcardsection = document.getElementById('allcard');
const mainContainer = document.querySelector('main')


function calculatecount(){
    total.innerText = allcardsection.children.length
    interviewcount.innerText = interviewList.length
    rejectedcount.innerText = rejectedList.length
}
calculatecount()

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-500','text-white')
    interviewFilterBtn.classList.remove('bg-blue-500','text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500','text-white')

    allFilterBtn.classList.add('bg-white','text-black')
    interviewFilterBtn.classList.add('bg-white','text-black')
    rejectedFilterBtn.classList.add('bg-white','text-black')

    const selected = document.getElementById(id)
    // console.log(selected);
    
    selected.classList.remove('bg-white','text-black')
    selected.classList.add('bg-blue-500','text-white')
}

mainContainer.addEventListener('click', function(event){
    
})
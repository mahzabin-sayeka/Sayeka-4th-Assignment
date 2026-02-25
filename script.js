let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'


let total = document.getElementById('total');
let interviewcount = document.getElementById('interviewcount');
let rejectedcount = document.getElementById('rejectedcount');

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

const allcardsection = document.getElementById('allcard');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')


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
    currentStatus = id
    // console.log(selected);
    
    selected.classList.remove('bg-white','text-black')
    selected.classList.add('bg-blue-500','text-white')

    if(id == 'interview-filter-btn'){
        allcardsection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderInterview()
    }
    else if(id=='all-filter-btn'){
        allcardsection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    }
    else if(id == 'rejected-filter-btn'){
        allcardsection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderRejected()
    }

}

mainContainer.addEventListener('click', function(event){

    // interview part

    if(event.target.classList.contains('btn-interview')){
        const parentNode = event.target.closest('.card1');
    const companyName = parentNode.querySelector('.company-name').innerText
    const jobTitle = parentNode.querySelector('.job-title').innerText
    const location = parentNode.querySelector('.location').innerText
    const time = parentNode.querySelector('.time').innerText
    const salary = parentNode.querySelector('.salary').innerText
    const applyBtn = parentNode.querySelector('.apply-button').innerText
    const interviewBtn = parentNode.querySelector('.btn-interview').innerText
    const rejectedBtn = parentNode.querySelector('.btn-rejected').innerText
    
    parentNode.querySelector('.apply-button').innerText = 'Interview'

    const cardInfo={
        companyName,
        jobTitle,
        location,
        time,
        salary,
        applyBtn:'Interview',
        interviewBtn,
        rejectedBtn
    }

     const companyExist = interviewList.find(item=> item.companyName == cardInfo.companyName)
     
       

     if(!companyExist){
        interviewList.push(cardInfo)
     }
     rejectedList = rejectedList.filter(item=> item.companyName != cardInfo.companyName)

    calculatecount()

    if (currentStatus == 'rejected-filter-btn'){
        renderRejected()
    }

    // renderInterview()

    }

    // rejected part

    else if(event.target.classList.contains('btn-rejected')){
        const parentNode = event.target.closest('.card1');
    const companyName = parentNode.querySelector('.company-name').innerText
    const jobTitle = parentNode.querySelector('.job-title').innerText
    const location = parentNode.querySelector('.location').innerText
    const time = parentNode.querySelector('.time').innerText
    const salary = parentNode.querySelector('.salary').innerText
    const applyBtn = parentNode.querySelector('.apply-button').innerText
    const interviewBtn = parentNode.querySelector('.btn-interview').innerText
    const rejectedBtn = parentNode.querySelector('.btn-rejected').innerText
    
    parentNode.querySelector('.apply-button').innerText = 'Rejected'

    const cardInfo={
        companyName,
        jobTitle,
        location,
        time,
        salary,
        applyBtn:'Rejected',
        interviewBtn,
        rejectedBtn
    }

     const companyExist = rejectedList.find(item=> item.companyName == cardInfo.companyName)
     
       

     if(!companyExist){
        rejectedList.push(cardInfo)
     }
    interviewList = interviewList.filter(item=> item.companyName != cardInfo.companyName)
    
    if(currentStatus = "interview-filter-btn"){
        renderInterview();
    }


    calculatecount()

    // renderRejected()

    }

})

function renderInterview(){
    filterSection.innerHTML = '';

    for(let interview of interviewList){
          console.log(interview)
        let div = document.createElement('div')
        div.className = 'card1'
        div.innerHTML = `
            <div class="card1 bg-white  mt-10 p-6  rounded-lg flex justify-between">
                        <div>
                            <div>
                              <h2 class="company-name text-xl font-bold text-gray-900">${interview.companyName}</h2>
                              <p class="job-title text-gray-600 font-medium mt-1 pb-4">${interview.jobTitle}</p>
                            </div>
                           
                             <div> 
                                <p>
                                    <span class="location text-gray-700">${interview.location}</span>
                                    <span>•</span>
                                    <span  class="time text-gray-700">${interview.time}</span>
                                    <span>•</span>
                                    <span class="salary text-gray-700">${interview.salary}</span>
                                </p>
                           
                            </div>

                            <div class="mt-4">
                                <button class="apply-button px-3 py-1 text-xs font-bold  bg-blue-50 text-black rounded"> ${interview.applyBtn}
                                </button>
                            </div>

                          <p class="mt-4 text-sm text-gray-700 "> Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>

                             <div class="mt-6 flex gap-3">
                               <button class="btn-interview px-5 py-2 text-xs font-bold text-green-700 border-2 border-green-600 rounded">INTERVIEW </button>

                               <button class="btn-rejected px-5 py-2 text-xs font-bold uppercase tracking-widest text-red-700 border-2 border-red-600 rounded "> REJECTED </button>
                            </div>
                        </div>
                            
                        <div>
                            <button class="btn-delete"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                        `
        filterSection.appendChild(div)
    }
}


function renderRejected(){
    filterSection.innerHTML = '';

    for(let reject of rejectedList){
          
        let div = document.createElement('div')
        div.className = 'card1'
        div.innerHTML = `
            <div class="card1 bg-white  mt-10 p-6  rounded-lg flex justify-between">
                        <div>
                            <div>
                              <h2 class="company-name text-xl font-bold text-gray-900">${reject.companyName}</h2>
                              <p class="job-title text-gray-600 font-medium mt-1 pb-4">${reject.jobTitle}</p>
                            </div>
                           
                             <div> 
                                <p>
                                    <span class="location text-gray-700">${reject.location}</span>
                                    <span>•</span>
                                    <span  class="time text-gray-700">${reject.time}</span>
                                    <span>•</span>
                                    <span class="salary text-gray-700">${reject.salary}</span>
                                </p>
                           
                            </div>

                            <div class="mt-4">
                                <button class="apply-button px-3 py-1 text-xs font-bold  bg-blue-50 text-black rounded"> ${reject.applyBtn}
                                </button>
                            </div>

                          <p class="mt-4 text-sm text-gray-700 "> Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>

                             <div class="mt-6 flex gap-3">
                               <button class="btn-interview px-5 py-2 text-xs font-bold text-green-700 border-2 border-green-600 rounded">INTERVIEW </button>

                               <button class="btn-rejected px-5 py-2 text-xs font-bold uppercase tracking-widest text-red-700 border-2 border-red-600 rounded "> REJECTED </button>
                            </div>
                        </div>
                            
                        <div>
                            <button class="btn-delete"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                        `
        filterSection.appendChild(div)
    }
}

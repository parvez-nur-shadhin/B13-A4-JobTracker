// Heading Counting And Buttons Functionality

// list array
let interviewList = [];
let rejectedList = [];

// Counting Numbers
const totalCount = getElementValues('total-counting');
const interviewCount = getElementValues('interview-counting');
const rejectedCount = getElementValues('rejected-counting');

let allJobCards = document.getElementById('all-job-cards');

// Toggling Buttons
const allBtn = getElementOnly('all-btn');
const interviewBtn = getElementOnly('interview-btn');
const rejectedBtn = getElementOnly('rejected-btn');


function finalCount(){
    document.getElementById('total-counting').innerText = allJobCards.children.length;
};
finalCount();


function toggleStyle(id){
    allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    const clickedBtn = getElementOnly(id);
    clickedBtn.classList.add('bg-[#3B82F6]', 'text-white');
}

// body container 
const bodyContainer = getElementOnly('body-container');
bodyContainer.addEventListener('click', function(event){
    const parentNode = event.target.parentNode.parentNode;
    const companyName = document.querySelector('.company').innerText;
    const positionName = document.querySelector('.position').innerText;
    const locationName = document.querySelector('.location').innerText;
    const descriptionName = document.querySelector('.description').innerText;
    
    // creating object
    let cardInformation = {
        companyName, 
        positionName, 
        locationName, 
        descriptionName
    }

    const plantExists = interviewList.find(item => item.companyName === cardInformation.companyName);
    if(!plantExists){
        interviewList.push(cardInformation);
    }
})

function renderInterview(){
    
}


// Heading Counting And Buttons Functionality

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


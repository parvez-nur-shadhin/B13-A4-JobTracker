// Heading Counting And Buttons Functionality

// list array
let interviewList = [];
let rejectedList = [];

// Counting Numbers
const totalCount = getElementValues("total-counting");
const interviewCount = getElementValues("interview-counting");
const rejectedCount = getElementValues("rejected-counting");

let allJobCards = document.getElementById("all-job-cards");
let filteredSection = document.getElementById('filtered-Section');

// Toggling Buttons
const allBtn = getElementOnly("all-btn");
const interviewBtn = getElementOnly("interview-btn");
const rejectedBtn = getElementOnly("rejected-btn");

function finalCount() {
  document.getElementById("total-counting").innerText =
    allJobCards.children.length;
  document.getElementById('interview-counting').innerText = filteredSection.children.length;  
}
finalCount();

function toggleStyle(id) {
  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedBtn.classList.remove("bg-[#3B82F6]", "text-white");

  const clickedBtn = getElementOnly(id);
  clickedBtn.classList.add("bg-[#3B82F6]", "text-white");

  if (id === "interview-btn") {
    const sectionJobCard = document.getElementById("all-job-cards");
    sectionJobCard.classList.add("hidden");
    const sectionFiltered = document.getElementById("filtered-Section");
    sectionFiltered.classList.remove("hidden");
  }
  if (id === "all-btn") {
    const sectionJobCard = document.getElementById("all-job-cards");
    sectionJobCard.classList.remove("hidden");
    const sectionFiltered = document.getElementById("filtered-Section");
    sectionFiltered.classList.add("hidden");
  }
}

// body container
const bodyContainer = getElementOnly("body-container");

bodyContainer.addEventListener("click", function (event) {
  // Interview Button Clicked
  if (event.target.classList.contains("interview-button")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".company").innerText;
    const positionName = parentNode.querySelector(".position").innerText;
    const locationName = parentNode.querySelector(".location").innerText;
    const descriptionName = parentNode.querySelector(".description").innerText;

    const status = parentNode.querySelector(".badge");
    status.innerHTML = "";
    status.innerHTML = `
     <button class="bg-success px-[12px] py-[8px] cursor-pointer rounded-md text-[0.875rem] font-medium">Interview</button>
    `;

    // creating object
    let cardInformation = {
      companyName,
      positionName,
      locationName,
      status,
      descriptionName,
    };

    const plantExists = interviewList.find(
      (item) => item.companyName === cardInformation.companyName,
    );

    if (!plantExists) {
      interviewList.push(cardInformation);
    }
    renderInterview();
    finalCount();
  }
});

function renderInterview() {
  // Pulling Filtered Section and emptying it
  const filterSection = getElementOnly("filtered-Section");
  filterSection.innerHTML = "";

  for (let interview of interviewList) {
    // creating new div
    let div = document.createElement("div");
    div.classList.add(
      "card-container",
      "bg-[#FFFFFF]",
      "space-y-5",
      "p-[24px]",
      "rounded-lg",
      "mt-[10px]",
    );
    div.innerHTML = `
            <div class="flex justify-between">
                <div>
                    <h1 class="company text-[#002C5C] text-[1.125rem]">${interview.companyName}</h1>
                    <p class="position text-[#64748B]">${interview.positionName}</p>
                </div>
                <div>
                    <button class="btn rounded-full p-3"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
            <p class="location text-[#64748B] mt-[20px] mb-[20px]">${interview.locationName}</p>
            <div class ="badge">
                <button class="bg-success px-[12px] py-[8px] cursor-pointer rounded-md text-[0.875rem] font-medium">Interview</button>
            </div>
            <p class="description">${interview.descriptionName}</p>
            <div class="flex flex-row gap-[10px]">
                <button id="interview-btn" class="btn btn-outline btn-success">Interview</button>
                <button id="rejected-btn" class="btn btn-outline btn-error">Rejected</button>
            </div>
    `;
    filterSection.appendChild(div);
  }
}

// Heading Counting And Buttons Functionality

// list array
let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

// Counting Numbers
const totalCount = getElementValues("total-counting");
const interviewCount = getElementValues("interview-counting");
const rejectedCount = getElementValues("rejected-counting");

let allJobCards = document.getElementById("all-job-cards");
let filteredSection = document.getElementById("filtered-Section");

// Toggling Buttons
const allBtn = getElementOnly("all-btn");
const interviewBtn = getElementOnly("interview-btn");
const rejectedBtn = getElementOnly("rejected-btn");

function finalCount() {
  document.getElementById("total-counting").innerText =
    allJobCards.children.length;
  document.getElementById("interview-counting").innerText =
    interviewList.length;
  document.getElementById("rejected-counting").innerText = rejectedList.length;
  document.getElementById("job-counter").innerText =
    allJobCards.children.length;
}
finalCount();

function toggleStyle(id) {
  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedBtn.classList.remove("bg-[#3B82F6]", "text-white");

  const clickedBtn = getElementOnly(id);
  currentStatus = id;
  console.log(currentStatus);
  clickedBtn.classList.add("bg-[#3B82F6]", "text-white");

  if (id === "interview-btn") {
    const sectionJobCard = document.getElementById("all-job-cards");
    sectionJobCard.classList.add("hidden");
    const sectionFiltered = document.getElementById("filtered-Section");
    sectionFiltered.classList.remove("hidden");
    renderInterview();
  }
  if (id === "all-btn") {
    const sectionJobCard = document.getElementById("all-job-cards");
    sectionJobCard.classList.remove("hidden");
    const sectionFiltered = document.getElementById("filtered-Section");
    sectionFiltered.classList.add("hidden");
  }
  if (id === "rejected-btn") {
    const sectionJobCard = document.getElementById("all-job-cards");
    sectionJobCard.classList.add("hidden");
    const sectionFiltered = document.getElementById("filtered-Section");
    sectionFiltered.classList.remove("hidden");
    renderRejected();
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
    rejectedList = rejectedList.filter(
      (item) => item.companyName != cardInformation.companyName,
    );

    if (currentStatus === "rejected-btn") {
      renderRejected();
    }

    finalCount();
  } else if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".company").innerText.trim();
    const positionName = parentNode.querySelector(".position").innerText;
    const locationName = parentNode.querySelector(".location").innerText;
    const descriptionName = parentNode.querySelector(".description").innerText;

    const status = parentNode.querySelector(".badge");
    status.innerHTML = "";
    status.innerHTML = `
     <button class="bg-error px-[12px] py-[8px] cursor-pointer rounded-md text-[0.875rem] font-medium">rejected</button>
    `;

    // creating object
    let cardInformation = {
      companyName,
      positionName,
      locationName,
      status,
      descriptionName,
    };

    const plantExists = rejectedList.find(
      (item) => item.companyName === cardInformation.companyName,
    );

    if (!plantExists) {
      rejectedList.push(cardInformation);
    }

    interviewList = interviewList.filter(
      (item) => item.companyName != cardInformation.companyName,
    );

    if (currentStatus === "interview-btn") {
      renderInterview();
    }

    finalCount();
  }
  if (event.target.classList.contains("delete-button")) {
    const card = event.target.parentNode.parentNode.parentNode;
    const companyName = card.querySelector(".company").innerText.trim();
    const pNode = event.target.parentNode.parentNode.parentNode;
    pNode.remove();
    interviewList = interviewList.filter(
      (item) => item.companyName !== companyName,
    );
    rejectedList = rejectedList.filter(
      (item) => item.companyName !== companyName,
    );

    finalCount();

    if (currentStatus === "interview-btn") {
      renderInterview();
    }
    if (currentStatus === "rejected-btn") {
      renderRejected();
    }
  }
});

//  render Interview
function renderInterview() {
  // Pulling Filtered Section and emptying it
  const filterSection = getElementOnly("filtered-Section");
  filterSection.innerHTML = "";

  if (interviewList.length === 0) {
    filterSection.innerHTML = `
    <div id="if-empty" class="flex flex-col items-center justify-center gap-5 px-[30px] py-[110px] mt-3 bg-white rounded-md">
          <img width = "100px" height = "100px" src="./jobs.png" alt="if-empty">
          <div class="flex flex-col gap-[5px] justify-center items-center">
            <h1 class="text-[1.5rem] font-semibold">No jobs available</h1>
            <p class="text-[#64748]">Check back soon for new job opportunities</p>
          </div>
    </div>
    `;
    return;
  }

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
                    <button class="delete-button btn rounded-full p-3"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
            <p class="location text-[#64748B] mt-[20px] mb-[20px]">${interview.locationName}</p>
            <div class ="badge">
                <button class="bg-success px-[12px] py-[8px] cursor-pointer rounded-md text-[0.875rem] font-medium">Interview</button>
            </div>
            <p class="description">${interview.descriptionName}</p>
            <div class="flex flex-row gap-[10px]">
                <button id="interview-btn" class="interview-button btn btn-outline btn-success">Interview</button>
                <button id="rejected-btn" class="rejected-btn btn btn-outline btn-error">Rejected</button>
            </div>
    `;
    filterSection.appendChild(div);
  }
}
// render Rejected
function renderRejected() {
  // Pulling Filtered Section and emptying it
  const filterSection = getElementOnly("filtered-Section");
  filterSection.innerHTML = "";

  if (rejectedList.length === 0) {
    filterSection.innerHTML = `
    <div id="if-empty" class="flex flex-col items-center justify-center gap-5 px-[30px] py-[110px] mt-3 bg-white rounded-md">
          <img width = "100px" height = "100px" src="./jobs.png" alt="if-empty">
          <div class="flex flex-col gap-[5px] justify-center items-center">
            <h1 class="text-[1.5rem] font-semibold">No jobs available</h1>
            <p class="text-[#64748]">Check back soon for new job opportunities</p>
          </div>
    </div>
    `;
    return;
  }

  for (let rejected of rejectedList) {
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
                    <h1 class="company text-[#002C5C] text-[1.125rem]">${rejected.companyName}</h1>
                    <p class="position text-[#64748B]">${rejected.positionName}</p>
                </div>
                <div>
                    <button class="delete-button btn rounded-full p-3"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
            <p class="location text-[#64748B] mt-[20px] mb-[20px]">${rejected.locationName}</p>
            <div class ="badge">
                <button class="bg-error px-[12px] py-[8px] cursor-pointer rounded-md text-[0.875rem] font-medium">Rejected</button>
            </div>
            <p class="description">${rejected.descriptionName}</p>
            <div class="flex flex-row gap-[10px]">
                <button id="interview-btn" class="interview-button btn btn-outline btn-success">Interview</button>
                <button id="rejected-btn" class="rejected-btn btn btn-outline btn-error">Rejected</button>
            </div>
    `;
    filterSection.appendChild(div);
  }
}

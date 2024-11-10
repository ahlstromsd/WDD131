document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1;

    const registrationForm = document.getElementById("registration-form");
    const addParticipantButton = document.getElementById("add"); // updated ID to "add"
    const summaryElement = document.getElementById("summary");

    // Function to create participant template
    function participantTemplate(count) {
        return `
            <section class="participant${count}">
                <p>Participant ${count}</p>
                <div class="item">
                    <label for="fname${count}"> First Name<span>*</span></label>
                    <input id="fname${count}" type="text" name="fname${count}" required />
                </div>
                <div class="item activities">
                    <label for="activity${count}">Activity #<span>*</span></label>
                    <input id="activity${count}" type="text" name="activity${count}" />
                </div>
                <div class="item">
                    <label for="fee${count}">Fee ($)<span>*</span></label>
                    <input id="fee${count}" type="number" name="fee${count}" />
                </div>
                <div class="item">
                    <label for="date${count}">Desired Date <span>*</span></label>
                    <input id="date${count}" type="date" name="date${count}" />
                </div>
                <div class="item">
                    <p>Grade</p>
                    <select name="grade${count}">
                        <option value="" disabled selected>Select Grade</option>
                        <option value="1">1st</option>
                        <option value="2">2nd</option>
                        <option value="3">3rd</option>
                        <option value="4">4th</option>
                        <option value="5">5th</option>
                        <option value="6">6th</option>
                        <option value="7">7th</option>
                        <option value="8">8th</option>
                        <option value="9">9th</option>
                        <option value="10">10th</option>
                        <option value="11">11th</option>
                        <option value="12">12th</option>
                    </select>
                </div>
            </section>
        `;
    }

    // Event listener to add participant
    addParticipantButton.addEventListener("click", () => {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addParticipantButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
    });
});

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]"); // Get all fee inputs
        feeElements = [...feeElements]; // Convert NodeList to Array for easy summing

        // Sum up all fees, converting each value to a number (or default to 0 if empty)
        return feeElements.reduce((total, feeElement) => total + (parseFloat(feeElement.value) || 0), 0);
    }


    function successTemplate(info) {
        return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.totalFees.toFixed(2)} in fees.`;
    }
    

// Form submission event listener
registrationForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the page from reloading

    const total = totalFees(); // Calculate the total fees
    const adultName = document.querySelector("input[name='fname1']").value; // Get the first participant's name

    // Display the success message
    summaryElement.innerHTML = successTemplate({
        name: adultName,
        participants: participantCount,
        totalFees: total,
    });

    // Log to check the hide functionality
    console.log("Hiding form and showing summary");

    // Hide the form and show the summary
    registrationForm.classList.add("hide");
    summaryElement.classList.remove("hide");
    registrationForm.style.display = 'none'; // Hide form directly
});

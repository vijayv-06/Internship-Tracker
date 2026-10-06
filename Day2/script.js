const studentInput = document.getElementById("studentInput");
const addBtn = document.getElementById("addBtn");
const studentList = document.getElementById("studentList");


// Add student when button is clicked
addBtn.addEventListener("click", function () {

    // Get the value from input
    const studentName = studentInput.value.trim();

    // Check empty input
    if (studentName === "") {
        alert("Please enter a student name!");
        return;
    }

    // Create a new <li>
    const li = document.createElement("li");

    // Add student name
    li.textContent = "👤 " + studentName;

    // Add <li> to <ul>
    studentList.appendChild(li);

    // Clear input
    studentInput.value = "";

    // Focus input again
    studentInput.focus();
});


// Press Enter to add student
studentInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        addBtn.click();
    }

});
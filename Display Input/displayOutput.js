display = () => {
    //display the inpuuted value
    document.getElementById('submitBtn').addEventListener('click', () => {
        ['fullname', 'birthday', 'age', 'gender', 'address'].forEach(id => {
            document.getElementById(`${id}-disp`).textContent = document.getElementById(id).value;
        });
    });

    //when click the close botton the inputted value will remove
    document.getElementById('closeBtn').addEventListener('click', () => {
        ['fullname', 'birthday', 'age', 'gender', 'address'].forEach(id => document.getElementById(id).value = '');
    });
}

calculateAge = () => {
    document.getElementById('birthday').addEventListener('input', function() {
        const birthday = new Date(this.value); // Get the selected date
        const today = new Date(); // Get today's date
        let age = today.getFullYear() - birthday.getFullYear(); // Calculate the age
    
        // Adjust if birthday hasn't occurred yet this year
        const month = today.getMonth();
        if (month < birthday.getMonth() || (month === birthday.getMonth() && today.getDate() < birthday.getDate())) {
            age--; // Subtract 1 if the birthday hasn't happened yet this year
        }
    
        // Set the calculated age in the age input field
        document.getElementById('age').value = age;
    });    
}
calculateAge();
display();
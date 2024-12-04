document.getElementById('bodyFatForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseFloat(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const neck = parseFloat(document.getElementById('neck').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const hip = gender === 'female' ? parseFloat(document.getElementById('hip').value) : 0;

    // Calculate body fat percentage
    let bodyFatPercentage;
    if (gender === 'male') {
        bodyFatPercentage = 86.010 * Math.log10(waist - neck) 
                          - 70.041 * Math.log10(height) 
                          + 36.76;
    } else {
        bodyFatPercentage = 163.205 * Math.log10(waist + hip - neck) 
                          - 97.684 * Math.log10(height) 
                          - 78.387;
    }

    // Display the result
    alert(`Your estimated body fat percentage is: ${bodyFatPercentage.toFixed(2)}%`);
});

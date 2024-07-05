// Function to fetch data based on country code and update HTML
async function fetchData(countryCode) {
    try {
      const response = await fetch(`http://localhost:3000/${countryCode}`); // Replace with your server URL if different
      const data = await response.json();
  
      // Update HTML elements with fetched data
      document.getElementById('countryName').textContent = data.country;
      document.getElementById('confirmedCases').textContent = data.confirmed;
      document.getElementById('recoveredCases').textContent = data.recovered;
      document.getElementById('criticalCases').textContent = data.critical;
      document.getElementById('deaths').textContent = data.deaths;
  
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error on the client side
      document.getElementById('output').innerHTML = 'Error fetching data. Please try again later.';
    }
  }
  
  // Example: Fetch data when form is submitted
  document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userInput = document.getElementById('countryInput').value;
    fetchData(userInput);
  });
  
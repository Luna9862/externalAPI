// Function to fetch data based on country code and update HTML
async function fetchData(countryCode) {
    try {
      const response = await fetch(`http://localhost:3000/${countryCode}`); // Replace with your server URL if different
      const data = await response.json();
  
      // Update HTML elements with fetched data
      document.getElementById('countryName').textContent = data[0].country;
      document.getElementById('confirmedCases').textContent = data[0].confirmed;
      document.getElementById('recoveredCases').textContent = data[0].recovered;
      document.getElementById('criticalCases').textContent = data[0].critical;
      document.getElementById('deaths').textContent = data[0].deaths;
  
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
  
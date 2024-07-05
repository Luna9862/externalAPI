// Import necessary modules
const express = require('express');
const axios = require('axios');
const app = express();

const cors=require("cors");
// Middleware to parse JSON bodies
app.use(express.json());

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

// const getCodes = {
//   method: 'GET',
//   url: 'https://covid-19-data.p.rapidapi.com/help/countries',
//   params: {format: 'json'},
//   headers: {
//     'x-rapidapi-key': '78143c1135msh28cc00266004ba8p18dd9djsn5fa9def049f4',
//     'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
//   }
// };

const options = {
  method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/country/code',
  params: {
    format: 'json',
    code: 'it'
  },
  headers: {
    'x-rapidapi-key': '78143c1135msh28cc00266004ba8p18dd9djsn5fa9def049f4',
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
  }
};

// Route to fetch user data from an external API
app.get('/:id', async (req, res) => {
  try {
    options.params.code = req.params.id; // Set the country code dynamically
    // Making a GET request using axios
    const response = await axios.request(options);
    // Sending the response data back to the client
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Error handling if the API call fails
    res.status(500).json({ message: 'Error fetching data' });
  }
});

// app.get('/getCodes', async (req, res) => {
//   try {
//           // Making a GET request using axios
//       const response = await axios.request(getCodes)
//       // Sending the response data back to the client
//       res.json(response.data);
//   } catch (error) {
//       // Error handling if the API call fails
//       res.status(500).json({ message: 'Error fetching data' });
//   }
// });
const PORT = 3000;
// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
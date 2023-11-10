const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.set('voice_code', 'en-US-1');
encodedParams.set('text', 'hello, what is your name?');
encodedParams.set('speed', '1.00');
encodedParams.set('pitch', '1.00');
encodedParams.set('output_type', 'audio_url');

const options = {
  method: 'POST',
  url: 'https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'ebd5981251msh141424cb24d2713p1851e9jsn5688d16701f0',
    'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
  },
  data: encodedParams,
};

const test = async () => {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
const redis = require('redis');
const client = redis.createClient();

// Function to set a new school value in Redis
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

// Function to display the value of a school from Redis
function displaySchoolValue(schoolName) {
  client.get(schoolName, function(err, reply) {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    console.log(reply); // This will display the value for the schoolName key
  });
}

// Testing the functions
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

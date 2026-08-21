
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
 
let requestCount = 0;
 
app.get('/', (req, res) => {
  requestCount++;
  res.json({
    message: 'Hello from your DevOps project!',
    hostname: require('os').hostname(), // useful later: shows WHICH pod answered
    requestCount
  });
});
 
// Kubernetes will call this to check if the app is alive
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});
 
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

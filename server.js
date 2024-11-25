
const express = require('express');
const path = require('path');
const ApiService = require('./servers/api');
const ChecklistEvaluator = require('./servers/checklistEvaluator');
const checklistRules = require('./config/rules');

const app = express();
const port = process.env.PORT || 3000;

const apiService = new ApiService('http://qa-gb.api.dynamatix.com:3100/api');
const evaluator = new ChecklistEvaluator(checklistRules);

app.use(express.static('public'));



app.get('/api/evaluate/:applicationId', async (req, res) => {
    const applicationId = req.params.applicationId;

    try {
        const applicationData = await apiService.getApplicationById(applicationId); // Ensure this method exists and works correctly
        if (!applicationData) {
            return res.status(404).json({ error: 'Application not found' });
        }

        // Evaluate checklist rules here and send response
        const results = evaluator.evaluateAll(applicationData);
        res.json(results);
    } catch (error) {
        console.error("Error fetching application data:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Checklist system running on port ${port}`);
});
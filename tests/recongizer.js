const {classifier} = require("../controllers/intent_recognizer.controller")
// Test the classifier
const testData = [
  "Can I book an appointment for next week?",
  "Tell me about the hospitals in this area",
  "book my appointment",
  "book a meeting to my doctor asap",
  "Who made this AI ?",
  "dada, book an appointment !!"
  // later on we'll be having a separate test dataset
];

testData.forEach((query) => {
  const intent = classifier.classify(query);
  console.log(`Query: "${query}" => Intent: ${intent}`);
});

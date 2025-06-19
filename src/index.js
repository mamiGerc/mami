function authenticateUser(username, password) {
  return username === 'user' && password === 'password';
}

function addEntry(entry, entries) {
  entries.push(entry);
  return entries;
}

function calculateBudget(entries) {
  return entries.reduce((sum, e) => sum + (e.amount || 0), 0);
}

module.exports = { authenticateUser, addEntry, calculateBudget };

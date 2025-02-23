const votes = { JavaScript: 0, Python: 0, Java: 0, "C++": 0 };

function vote(option) {
  votes[option]++;
  renderResults();
}

function undoVote(option) {
  if (votes[option] > 0) {
    votes[option]--;
    
  }
  renderResults();

}


function renderResults() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";



  for (let option in votes) {
    const percent = (votes[option] / totalVotes()) * 100 || 0;
    resultsDiv.innerHTML += `
            <div>
                <strong>${option} - ${votes[option]} votes</strong>
                <div class="result-bar" style="width: ${percent}%; background: #4caf50;"></div>
            </div>
        `;
  }
}



function totalVotes() {
  return Object.values(votes).reduce((a, b) => a + b, 0);
}







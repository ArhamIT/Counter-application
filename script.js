// script.js
document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter');
    const parityDisplay = document.getElementById('parity');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const resetButton = document.getElementById('reset');
    const historyList = document.getElementById('history-list');

    let counter = 0;
    let history = [];

    function updateDisplay() {
        counterDisplay.textContent = counter;
        parityDisplay.textContent = counter % 2 === 0 ? 'Even' : 'Odd';
        counterDisplay.className = counter % 2 === 0 ? 'even' : 'odd';
        updateHistory();
    }

    function updateHistory() {
        const listItem = document.createElement('li');
        listItem.textContent = counter;
        listItem.classList.add('history-item');
        historyList.appendChild(listItem);
        history.push(counter);
        animateHistoryItem(listItem);
    }

    function animateHistoryItem(item) {
        requestAnimationFrame(() => {
            item.style.transform = 'translateX(0)';
            item.style.opacity = '1';
        });
    }

    incrementButton.addEventListener('click', () => {
        counter++;
        updateDisplay();
    });

    decrementButton.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            updateDisplay();
        }
    });

    resetButton.addEventListener('click', () => {
        counter = 0;
        updateDisplay();
    });

    updateDisplay();  // Initial display update
});

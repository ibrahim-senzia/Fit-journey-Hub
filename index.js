// JavaScript for Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        // Update button text based on mode
        darkModeToggle.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });
});

function showPlan() {
    const goal = document.getElementById('goal').value;
    let plan;
    let tips = '';

    switch (goal) {
        case 'weightLoss':
            plan = `
                <h3>Your Weight Loss Plan</h3>
                <ul>
                    <li>Daily 30 minutes of cardio exercises.</li>
                    <li>Low-calorie meal plan with high fiber intake.</li>
                    <li>Hydration: Drink at least 8 glasses of water daily.</li>
                </ul>
            `;
            tips = `
                <h4>Tips for Success:</h4>
                <ul>
                    <li>Combine cardio with strength training for optimal results.</li>
                    <li>Monitor your calorie intake and make adjustments as needed.</li>
                    <li>Stay consistent and be patient with your progress.</li>
                </ul>
            `;
            break;
        case 'muscleGain':
            plan = `
                <h3>Your Muscle Gain Plan</h3>
                <ul>
                    <li>Strength training 4 times a week.</li>
                    <li>High-protein diet including lean meats and legumes.</li>
                    <li>Ensure 7-8 hours of sleep for muscle recovery.</li>
                </ul>
            `;
            tips = `
                <h4>Tips for Success:</h4>
                <ul>
                    <li>Incorporate compound exercises for overall muscle growth.</li>
                    <li>Track your workouts and progressively increase weights.</li>
                    <li>Consider protein supplements if necessary.</li>
                    <li>Keep track of your progress with a workout log.</li>
                </ul>
            `;
            break;
        case 'endurance':
            plan = `
                <h3>Your Endurance Plan</h3>
                <ul>
                    <li>Long-distance running or cycling 3 times a week.</li>
                    <li>Balanced diet with a focus on complex carbs.</li>
                    <li>Regular stretching and flexibility exercises.</li>
                </ul>
            `;
            tips = `
                <h4>Tips for Success:</h4>
                <ul>
                    <li>Gradually increase your distance or time to build endurance.</li>
                    <li>Stay hydrated before, during, and after exercise.</li>
                    <li>Incorporate interval training to improve performance.</li>
                </ul>
            `;
            break;
        default:
            plan = 'Please select a valid fitness goal.';
    }

    document.getElementById('planResult').innerHTML = plan + tips;
}

function startSession() {
    const sessionOutput = `
        <h3>Virtual Training Session</h3>
        <p>Welcome! Your virtual training session has started. Follow the live instructions provided.</p>
        <p>Ensure you have a workout area set up and stay hydrated!</p>
    `;
    document.getElementById('sessionOutput').innerHTML = sessionOutput;
}

function trackProgress() {
    const progress = document.getElementById('progressInput').value;
    if (progress) {
        document.getElementById('progressOutput').innerHTML = `
            <h3>Progress Recorded</h3>
            <p>Your progress of ${progress} units has been successfully recorded. Keep up the great work!</p>
        `;
    } else {
        document.getElementById('progressOutput').innerHTML = `
            <h3>Invalid Input</h3>
            <p>Please enter a valid progress value.</p>
        `;
    }
}

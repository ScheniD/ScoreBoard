Soccer Scoreboard

A simple, modern soccer scoreboard web application with light/dark theme toggling, score increment buttons, and a reset function.

Overview

This project showcases a minimal yet stylish scoreboard for tracking the scores of two teams: “Home” and “Away.” It provides:
	•	A +1 Goal button for each team to increment their score.
	•	A Reset Score button to set both scores back to zero.
	•	A Theme Switch button that toggles between light and dark themes.
	•	A soccer-themed background fetched from an external image URL (Unsplash).

Features
	1.	Incremental Scoring
Each team has a button that adds one point (goal) to their score.
	2.	Score Reset
A reset button sets both scores to zero, making it easy to start a new match.
	3.	Light/Dark Mode
Users can switch between light and dark themes. The background and color scheme adjust accordingly.
	4.	Responsive Design
The scoreboard container is designed to be responsive, ensuring a clean layout on various screen sizes.

Technologies
	•	HTML: Provides the structure of the page.
	•	CSS: Used for styling, including the background images, layout, and theme colors.
	•	JavaScript: Adds interactivity for incrementing and resetting scores, and for toggling themes.

Installation
	1.	Clone or download this repository to your local machine.
	2.	Open index.html in your preferred web browser.

No additional build steps are required—just open the file and it should run.

Usage
	1.	Open index.html in a web browser.
	2.	Increment Score: Click the “+1” button under either “Home” or “Away” to add one goal.
	3.	Reset Score: Click the “Reset Score” button to set both scores to zero.
	4.	Toggle Theme: Click the “Dark Theme” or “Light Theme” button (depending on the current mode) to switch between light and dark themes.

Customization
	1.	Background Images
	•	By default, the page uses two external Unsplash image URLs:
	•	Light Mode: https://source.unsplash.com/1600x900/?soccer
	•	Dark Mode: https://source.unsplash.com/1600x900/?soccer,night
	•	You can replace these URLs in style.css with any other image links.
	2.	Colors and Fonts
	•	The colors for buttons, text, and backgrounds can be changed in style.css.
	•	You can replace the font family with any preferred web font.
	3.	Team Names
	•	Change “Home” and “Away” in index.html to your desired team names.

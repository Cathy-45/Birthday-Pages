# Birthday-Page

# Richard's Birthday Surprise Webpage

[Webpage screenshot](https://github.com/Cathy-45/Birthday-Pages/blob/c99f76d791927193b553455cd9fe6628bdd6157b/Happy%20Birthday!.jpeg)

Welcome to the source code for a special birthday webpage created for Richard MacFarlane! This project is a heartfelt gift, featuring a personalized message, a slideshow of memories, a love letter pop-up, red heart confetti, a shimmering card effect, and an embedded Apple Music player for "No Strings" by Ed Sheeran—his dedicated song. Built with HTML, CSS, and JavaScript, this webpage is designed to celebrate his birthday on July 27, 2025, with love and creativity.

## Overview

- **Purpose**: A romantic and interactive birthday surprise for Richard.
- **Features**:
  - Custom birthday message and header.
  - Slideshow of personal photos.
  - Pop-up love letter with a personal note.
  - Red heart confetti animation on page load and button click.
  - Shimmering card effect for a magical touch.
  - Apple Music embed for "No Strings" to play his dedicated song.
- **Technologies**: HTML, CSS (with animations), JavaScript (with JSConfetti library).
- **Hosted**: Deployed via GitHub Pages (URL: [https://yourusername.github.io/birthday-page](https://yourusername.github.io/birthday-page)).

## Setup Instructions

To run this project locally or customize it, follow these steps:

1. **Clone the Repository**:

   - Open a terminal and run:
     ```bash
     git clone https://github.com/yourusername/birthday-page.git
     ```
   - Replace `yourusername` with your GitHub username.

2. **Install Dependencies**:

   - No additional dependencies are required beyond a web browser, but for development, install [Visual Studio Code](https://code.visualstudio.com/) and the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.

3. **Prepare Files**:

   - Place your personal photos (e.g., `image1.jpg`, `image2.jpg`, `image3.jpg`) in the project folder.
   - Ensure the Apple Music embed works with your iTunes purchase (no local file needed).

4. **Run Locally**:

   - Open the project folder in VS Code.
   - Right-click `index.html` and select "Open with Live Server" to preview the webpage.
   - Test the slideshow, confetti, love letter, and music player.

5. **Customize**:
   - Edit `index.html` to change the name in `<h1 id="birthdayHeader">` and the love letter in `<p id="loveLetter">`.
   - Add more photos by duplicating `<div class="slide">` blocks in `index.html`.
   - Modify `styles.css` to adjust colors or the shimmer effect.

## Usage

- **Open the Webpage**: Visit the deployed URL (or open `index.html` locally) to experience the surprise.
- **Interact**:
  - Click "Celebrate!" to trigger red heart confetti.
  - Click "Open me" to view a personal message.
  - Click the Apple Music player to start "No Strings" (autoplay may require interaction due to browser policies).
- **Note**: The shimmer effect enhances the card’s appearance, and the confetti animates on load and button click.

## Deployment

- The webpage is hosted on GitHub Pages. To update:
  1. Make changes in VS Code.
  2. Commit and push to the repository:
     ```bash
     git add .
     git commit -m "Update for Richard's birthday"
     git push origin main
     ```
  - The live site will update automatically.

## Personal Note

This webpage is a labor of love, crafted with care for Richard’s 52nd birthday on July 27, 2025. The "No Strings" song, red hearts, and shimmering card reflect our unbreakable bond. I hope this surprise brings a smile to your face, my love! 💖

- Created by: [Catherine Sichone]
- Date: July 20, 2025

## License

This project is for personal use only. Feel free to fork or adapt it, but please respect the privacy of the content.

## Acknowledgments

- Inspired by Richard’s dedication of "No Strings" by Ed Sheeran.
- Thanks to the JSConfetti library for the heart animation: [https://www.jsconfetti.com](https://www.jsconfetti.com).

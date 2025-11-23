# Portfolio - Aayush Bhatta

This is a personal portfolio website designed for Aayush Bhatta, hosted via GitHub Pages.

## 📂 Structure
- `index.html`: Landing page with hero section.
- `about.html`: Education, Experience, Skills, and Volunteering.
- `projects.html`: Detailed view of engineering projects and research.
- `publications.html`: List of academic publications and conference proceedings.
- `cv.html`: A web-friendly CV view and download button.
- `assets/`: Contains CSS, JS, and images.

## 🚀 How to Deploy on GitHub Pages

1. **Clone or Download** this folder.
2. **Add your CV**:
   - Rename your PDF resume to `cv.pdf`.
   - Place it inside the `assets/` folder.
3. **Add your Image**:
   - Place a square photo of yourself in `assets/images/`.
   - Update the `<div class="img-placeholder">` in `index.html` to an `<img>` tag:
     ```html
     <img src="assets/images/your-photo.jpg" alt="Aayush Bhatta" style="border-radius: 50%; width: 300px;">
     ```
4. **Upload to GitHub**:
   - Create a new repository (e.g., `portfolio`).
   - Push these files to the `main` branch.
5. **Activate Pages**:
   - Go to Repository Settings -> Pages.
   - Select Source: `Deploy from a branch`.
   - Select Branch: `main` / folder `root`.
   - Save.

## 🛠 Updates
To update content, simply edit the HTML text within the specific `.html` files. No compilation or build process is required.
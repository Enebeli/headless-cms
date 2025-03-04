# Jay Blogs - Headless CMS Integration

This project integrates Directus, a headless CMS, to fetch and display blog posts dynamically on a simple HTML page.

## Project Overview
Jay Blogs is a basic blog application that retrieves and displays posts stored in Directus, a headless CMS. The web page dynamically loads blog content, including titles, images, content, and publication dates.

## Technologies Used
- **HTML** - Structure of the webpage
- **CSS** - Styling for the blog
- **JavaScript** - Fetching and rendering blog posts dynamically
- **Directus** - Headless CMS for managing content

## Setup and Installation

### 1. Clone the Repository
Open up repository in git desktop and clone

### 2. Install Dependencies
This project does not require additional dependencies as it runs purely on HTML, CSS, and JavaScript.

### 3. Configure Directus CMS
- Create a Directus project.
- Set up a collection named **jay_blogs**.
- Add the following fields to the collection:
  - `Title` (Input) - The title of the blog post
  - `Content` (Textarea) - The body of the blog post
  - `Image` (File) - An optional image for the post
  - `Date_created` (Datetime) - Automatically generated creation date
- Ensure API access is enabled for the collection.

---

## Running the Project Locally
1. Open the `index.html` file in a web browser.
2. The script (`scripts.js`) fetches data from Directus and displays the posts on the webpage.

---

## Directus CMS Integration

The JavaScript file (`scripts.js`) fetches posts from Directus using the API endpoint:
```js
const API_URL = "https://headless-cms.directus.app/items/jay_blogs";
```
The image URLs are constructed dynamically:
```js
const IMAGE_BASE_URL = "https://headless-cms.directus.app/assets/";
```
Each post includes:
- **Title**
- **Image** (if available)
- **Content**
- **Formatted date**

---

## Testing Procedures
1. **Check API Response**
   - Open the browser console (`F12` > Console) and check the logs to verify API response.
2. **Ensure Image URLs are Correct**
   - Open an image URL in the browser to confirm it is accessible.
3. **Check for Errors**
   - Any API errors or issues will be logged in the browser console.

---

## Troubleshooting
- **No Data Displayed?**
  - Ensure the Directus collection **jay_blogs** has published posts.
  - Verify API access is public.
  - Check the API response in the console.

- **Images Not Showing?**
  - Confirm the `Image` field stores file IDs.
  - Ensure the correct `assets` URL is being generated.
  - Test image URL separately in the browser.

---

## Author
Jay Blogs
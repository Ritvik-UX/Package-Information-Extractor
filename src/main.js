import Source from './fetching.js';
const dropDown = document.getElementById("language-dropdown");
const searchButton = document.getElementById("package-search-button");
const input = document.getElementById("package-search-input");
searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const dropDown_value = dropDown.value;
    // Clear Storage Before Sending Request
    try {
        chrome.storage.sync.clear();
        chrome.storage.sync.remove("stored_response");
    }
    catch (error) {
        console.error("Couldn't clear storage");
    }
    // Fetch Data Based on The Language
    if (dropDown_value === "javascript" || dropDown_value === "python" || dropDown_value === "rust") {
        new Source(input.value, dropDown_value).fetch_data();
    }
});
// Compile Command: tsc -t ES2022 main.ts
// Compile Command: tsc -t ES2022 template.ts
// EsLint:          npx eslint .

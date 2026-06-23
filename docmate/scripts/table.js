const tbody = document.getElementById("tablebody");
const mainTitle = document.getElementById("title");
const mainSubtitle = document.getElementById("subtitle");
const documents = [
    { title: "Format Your JEE Documents Easily", subtitle: "Select and compress your required JEE documents. All compression and formatting is executed locally inside your browser, ensuring 100% privacy and security.", info: "Select and compress your required JEE documents. All compression and formatting is executed locally inside your browser, ensuring 100% privacy and security." },
    { name: "Birthproof", id: "birthproof", type: "PDF", instructions: "Upload your scanned/digital Birth Certificate as PDF.", output: "Less than 200KB", format: "PDF" },
    { name: "Photo", id: "photo", type: "IMAGE", instructions: "Upload neatly cropped passport photo of any format (PNG, JPG, JPEG, WebP, etc.).", output: "Less than 100KB", format: "JPG/JPEG" },
    { name: "Signature", id: "signature", type: "IMAGE", instructions: "Upload neatly cropped signature of any format (PNG, JPG, JPEG, WebP, etc.).", output: "Less than 100KB", format: "JPG/JPEG" }
    // add more here
];
let acceptedFormats = "";
documents.forEach((doc, i) => {
    if (i === 0) {
        mainTitle.textContent = doc.title;
        mainSubtitle.textContent = doc.subtitle;
    } else {
        if (doc.type === "IMAGE") {
            acceptedFormats = "image/*";
        } else {
            acceptedFormats = ".pdf";
        }
        const row = `<tr id="${doc.id}" data-serial="${i}">
                        <td class="col-sl" data-label="SL. NO">${i}</td>
                        <td class="col-doc" data-label="Document">
                            <div class="doc-name-container">
                                <span class="doc-name">${doc.name}</span>
                                <span class="doc-badge badge-${doc.type.toLowerCase()}">${doc.type}</span>
                            </div>
                        </td>
                        <td class="col-instructions" data-label="Instructions">
                            ${doc.instructions}
                        </td>
                        <td class="col-file" data-label="File Chosen">
                            <div class="file-upload-wrapper">
                                <input type="file" id="file-${doc.id}" accept="${acceptedFormats}" class="file-input-hidden">
                                <label for="file-${doc.id}" class="btn-choose">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                    </svg>
                                    Choose File
                                </label>
                                <div class="file-info" id="info-${doc.id}">
                                    <span class="file-status">No file chosen</span>
                                </div>
                            </div>
                        </td>
                        <td class="col-output" data-label="Output">
                            <span class="output-spec">${doc.output}</span>
                            <span class="output-format">Format: ${doc.format}</span>
                            <div class="status-container" id="status-container-${doc.id}" style="display: none;"></div>
                        </td>
                        <td class="col-download" data-label="Download">
                            <button id="btn-download-${doc.id}" class="btn-download" disabled>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                </svg>
                                Download
                            </button>
                        </td>
                    </tr>`;
        tbody.innerHTML += row;
    }
});


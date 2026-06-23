
const tbody = document.getElementById("tablebody");
const mainTitle = document.getElementById("title");
const mainSubtitle = document.getElementById("subtitle");

const pack = {
    jeemain: [
        {
            name: "Passport Photo *",
            id: "photo",
            type: "IMAGE",
            instructions: "Upload neatly cropped recent passport-size photo with white background and 80% face visibility with no cap/sunglasses. (Supported Formats: PNG, JPG, JPEG, WebP).",
            output: "10KB - 200KB",
            format: "JPG/JPEG"
        },

        {
            name: "Signature *",
            id: "signature",
            type: "IMAGE",
            instructions: "Upload neatly cropped running signature using blue/black ink on white paper. (Supported Formats: PNG, JPG, JPEG, WebP)",
            output: "10KB - 100KB",
            format: "JPG/JPEG"
        },

        {
            name: "Birth Proof *",
            id: "birthproof",
            type: "PDF",
            instructions: "Upload scanned/digital PDF of any one of Class 10 marksheet, Class 10 certificate or Birth Certificate for DOB verification.",
            output: "50KB - 300KB",
            format: "PDF"
        },

        {
            name: "Aadhaar ID *",
            id: "aadhaarid",
            type: "PDF",
            instructions: "Upload Aadhaar ID proof. Scanned PDF or DigiLocker Aadhaar PDF.",
            output: "10KB - 200KB",
            format: "PDF"
        },

        {
            name: "ID Proof",
            id: "idproof",
            type: "IMAGE",
            instructions: "Upload PAN, Passport, School ID, or any valid government ID proof.",
            output: "10KB - 200KB",
            format: "JPG"
        },

        {
            name: "Category Certificate",
            id: "categorycertificate",
            type: "PDF",
            instructions: "Upload valid SC/ST/OBC-NCL/EWS certificate if applicable.",
            output: "50KB - 300KB",
            format: "PDF"
        },

        {
            name: "PwD Certificate",
            id: "pwdcertificate",
            type: "PDF",
            instructions: "Upload valid disability certificate if applicable.",
            output: "50KB - 300KB",
            format: "PDF"
        }

    ],

    jeeadv: [
        {
            name: "Passport Photo *",
            id: "photo",
            type: "IMAGE",
            instructions: "Upload neatly cropped recent passport-size photograph.",
            output: "10KB - 200KB",
            format: "JPG/JPEG"
        },

        {
            name: "Signature *",
            id: "signature",
            type: "IMAGE",
            instructions: "Upload neatly cropped signature using blue/black ink.",
            output: "4KB - 30KB",
            format: "JPG/JPEG"
        },

        {
            name: "Class 10 Certificate *",
            id: "class10certificate",
            type: "PDF",
            instructions: "Upload Class 10 marksheet or certificate for date of birth verification.",
            output: "50KB - 300KB",
            format: "PDF"
        },

        {
            name: "Class 12 Proof *",
            id: "class12proof",
            type: "PDF",
            instructions: "Upload Class 12 marksheet, admit card, or appearing proof.",
            output: "50KB - 300KB",
            format: "PDF"
        },

        {
            name: "Category Certificate",
            id: "categorycertificate",
            type: "PDF",
            instructions: "Upload valid GEN-EWS/OBC-NCL/SC/ST certificate if applicable.",
            output: "50KB -  300KB",
            format: "PDF"
        },

        {
            name: "PwD Certificate",
            id: "pwdcertificate",
            type: "PDF",
            instructions: "Upload valid disability certificate if applicable.",
            output: "50KB - 300KB",
            format: "PDF"
        },

        {
            name: "OCI/Foreign Documents",
            id: "ocidocuments",
            type: "PDF",
            instructions: "Upload Passport or OCI card for OCI/foreign candidates.",
            output: "50KB -  300KB",
            format: "PDF"
        }
    ],

    neet: [
        {
            name: "Passport Photo *",
            id: "photo",
            type: "IMAGE",
            instructions: "Upload neatly cropped recent passport-size photo with white background.",
            output: "10KB - 200KB",
            format: "JPG/JPEG"
        },

        {
            name: "Postcard Photo *",
            id: "postcardphoto",
            type: "IMAGE",
            instructions: "Upload 4x6 postcard-size photograph.",
            output: "10KB - 200KB",
            format: "JPG/JPEG"
        },

        {
            name: "Signature *",
            id: "signature",
            type: "IMAGE",
            instructions: "Upload neatly cropped running signature using blue/black ink.",
            output: "10KB - 100KB",
            format: "JPG/JPEG"
        },

        {
            name: "Thumb Impression *",
            id: "thumbimpression",
            type: "IMAGE",
            instructions: "Upload left and right hand thumb/finger impressions clearly.",
            output: "10KB - 200KB",
            format: "JPG/JPEG"
        },

        {
            name: "Birth Proof *",
            id: "birthproof",
            type: "PDF",
            instructions: "Upload Class 10 marksheet or certificate for DOB verification.",
            output: "50KB - 300KB",
            format: "PDF"
        },

        {
            name: "Address Proof *",
            id: "addressproof",
            type: "PDF",
            instructions: "Upload Aadhaar, Passport, or valid address proof document.",
            output: "50KB - 300KB",
            format: "PDF"
        },

        {
            name: "Identity Proof *",
            id: "identityproof",
            type: "IMAGE",
            instructions: "Upload Aadhaar, PAN, Passport, Voter ID, or any valid government ID.",
            output: "50KB - 200KB",
            format: "JPG/JPEG"
        },

        {
            name: "Category Certificate",
            id: "categorycertificate",
            type: "PDF",
            instructions: "Upload valid SC/ST/OBC-NCL/EWS certificate if applicable.",
            output: "50KB - 300KB",
            format: "PDF"
        },

        {
            name: "PwBD Certificate",
            id: "pwbdcertificate",
            type: "PDF",
            instructions: "Upload valid disability certificate if applicable.",
            output: "50KB - 300KB",
            format: "PDF"
        },

        {
            name: "Citizenship Proof",
            id: "citizenshipproof",
            type: "PDF",
            instructions: "Upload Passport or citizenship proof for NRI/OCI/foreign candidates.",
            output: "Less than 300KB",
            format: "PDF"
        }
    ],

    cuet: [
        {
            name: "Passport Photo *",
            id: "photo",
            type: "IMAGE",
            instructions: "Upload neatly cropped recent passport-size photo with 80% face visibility.",
            output: "10KB - 200KB",
            format: "JPG/JPEG"
        },

        {
            name: "Signature *",
            id: "signature",
            type: "IMAGE",
            instructions: "Upload neatly cropped running signature using blue/black ink.",
            output: "4KB - 30KB",
            format: "JPG/JPEG"
        },

        {
            name: "Class 10 Proof *",
            id: "class10proof",
            type: "PDF",
            instructions: "Upload Class 10 marksheet or certificate for DOB verification.",
            output: "50KB - 300KB",
            format: "PDF"
        },

        {
            name: "Class 12 Proof *",
            id: "class12proof",
            type: "PDF",
            instructions: "Upload Class 12 marksheet, admit card, or appearing proof.",
            output: "50KB - 300KB",
            format: "PDF"
        },

        {
            name: "Identity Proof *",
            id: "identityproof",
            type: "PDF",
            instructions: "Upload Aadhaar, PAN, Passport, School ID, or any valid government ID proof.",
            output: "50KB - 300KB",
            format: "PDF/JPG"
        }, 

        {
            name: "Category Certificate",
            id: "categorycertificate",
            type: "PDF",
            instructions: "Upload valid SC/ST/OBC-NCL/EWS certificate if applicable.",
            output: "50KB - 300KB",
            format: "PDF"
        },

        {
            name: "PwBD Certificate",
            id: "pwbdcertificate",
            type: "PDF",
            instructions: "Upload valid disability certificate if applicable.",
            output: "50KB - 300KB",
            format: "PDF"
        }

    ]
};

const packinfo = document.getElementById("pack");
const documents = pack[packinfo.getAttribute("pack")];

let acceptedFormats = "";
documents.forEach((doc, i) => {
    if (doc.type === "IMAGE") {
        acceptedFormats = "image/*";
    } else {
        acceptedFormats = ".pdf";
    }
    const row = `<tr id="${doc.id}" data-serial="${i+1}">
                    <td class="col-sl" data-label="SL. NO">${i+1}</td>
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
});


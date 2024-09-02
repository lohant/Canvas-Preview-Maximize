function maximizePDFView() {
    // Hide the previous and next buttons
    const sequenceFooter = document.getElementById("sequence_footer");
    if (sequenceFooter) {
        sequenceFooter.style.display = "none";
    }

    // Hide the title and the parent container of the download link
    const titleElement = document.querySelector("#content h2");
    if (titleElement) {
        titleElement.style.display = "none";
    }

    const downloadContainer = document.querySelector("#content span");
    if (downloadContainer) {
        downloadContainer.parentElement.style.display = "none";
    }

    // Remove padding from content container
    const content = document.getElementById("content");
    if (content) {
        content.style.padding = "0";
    }

    // Maximize the PDF preview container
    const docPreview = document.getElementById("doc_preview");
    if (docPreview) {
        docPreview.style.height = "100vh";
        docPreview.style.width = "100vw";
        docPreview.style.border = "none";
    }

    // Ensure the iframe within the PDF preview takes up the full space
    const iframe = docPreview ? docPreview.querySelector("iframe") : null;
    if (iframe) {
        iframe.style.height = "100vh";
        iframe.style.width = "100vw";
        iframe.style.border = "none";
    }

    // Ensure the main content container takes up full width
    const mainContent = document.getElementById("main");
    if (mainContent) {
        mainContent.style.width = "100vw";
        mainContent.style.margin = "0";
        mainContent.style.padding = "0";
    }

    // Hide sidebars if present to maximize space
    const leftSide = document.getElementById("left-side");
    if (leftSide) {
        leftSide.style.display = "none";
    }

    const rightSideWrapper = document.getElementById("right-side-wrapper");
    if (rightSideWrapper) {
        rightSideWrapper.style.display = "none";
    }
}

// Listen for the Ctrl+M shortcut
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === 'm') {
        maximizePDFView();
    }
});

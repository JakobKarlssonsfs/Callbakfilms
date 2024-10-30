const params = new URLSearchParams(window.location.search);
    const mediaSrc = params.get("src");
    const mediaType = params.get("type");
    const mediaTitle = params.get("title");

    // Inject media content based on type
    const mediaContent = document.getElementById("media-content");
    const mediaTitleElement = document.getElementById("media-title");

    if (mediaType === "image") {
        const img = document.createElement("img");
        img.src = mediaSrc;
        img.alt = mediaTitle;
        img.classList.add("centered-media");
        mediaContent.appendChild(img);
    } else if (mediaType === "video") {
        const iframe = document.createElement("iframe");
        iframe.src = mediaSrc;
        iframe.title = mediaTitle;
        iframe.allowFullscreen = true;
        iframe.classList.add("centered-media");
        mediaContent.appendChild(iframe);
    }

    // Set media title
    mediaTitleElement.innerText = mediaTitle;
</script>

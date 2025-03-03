function showImages(friend) {
    const friendImagesDiv = document.getElementById("friend-images");
    friendImagesDiv.innerHTML = "";  // Clear previous images

    let images = [];

    if (friend === "friend1") {
        images = [
            "IMG_20221025_160702.jpg",
            "IMG_20221220_150406~2.jpg",
            "IMG_20240630_115514~2.jpg",
            "PXL_20220525_072441808.jpg",
            "PXL_20220707_042130957.PORTRAIT.jpg",
            "PXL_20220727_034244069.jpg"
        ];

    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Friend Image";
        friendImagesDiv.appendChild(img);
    });

    }
}

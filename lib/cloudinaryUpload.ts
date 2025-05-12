
export async function uploadImageToCloudinary(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "devsloop"); 
  
    const res = await fetch("https://api.cloudinary.com/v1_1/dclic7by5/image/upload", {
      method: "POST",
      body: formData,
    });
    
    if (!res.ok) throw new Error("Cloudinary upload failed");
  
    return res.json(); 
  }
  
import fitz # PyMuPDF
import os

pdf_files = [
    "public/Admin Toolkit.pdf",
    "public/Booldesk.pdf",
    "public/Compliance Agent sunum.pdf",
    "public/Mailtiv.pdf",
    "public/SPHub.pdf"
]

output_dir = "public/images/products"
os.makedirs(output_dir, exist_ok=True)

for pdf_path in pdf_files:
    try:
        doc = fitz.open(pdf_path)
        base_name = os.path.basename(pdf_path).replace(".pdf", "").replace(" ", "_").lower()
        print(f"Extracting images from {base_name}...")
        
        image_count = 0
        for i in range(len(doc)):
            page = doc[i]
            image_list = page.get_images()
            
            for img_index, img in enumerate(image_list, start=1):
                xref = img[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                image_name = f"{base_name}_p{i+1}_i{img_index}.{image_ext}"
                image_path = os.path.join(output_dir, image_name)
                
                with open(image_path, "wb") as f:
                    f.write(image_bytes)
                image_count += 1
                
        print(f"Extracted {image_count} images from {base_name}")
    except Exception as e:
        print(f"Error processing {pdf_path}: {e}")

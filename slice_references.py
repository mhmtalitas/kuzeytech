import os
from PIL import Image

def slice_image():
    input_path = "public/referanslar.png"
    output_dir = "public/images/references"
    os.makedirs(output_dir, exist_ok=True)
    
    img = Image.open(input_path).convert("RGB")
    width, height = img.size
    
    rows = 4
    cols = 4
    
    tile_width = width // cols
    tile_height = height // rows
    
    count = 1
    for r in range(rows):
        for c in range(cols):
            x1 = c * tile_width
            y1 = r * tile_height
            x2 = x1 + tile_width
            y2 = y1 + tile_height
            
            tile = img.crop((x1, y1, x2, y2))
            
            # Daha fazla margın vererek kutunun etrafındaki çerçeveleri kes
            # Çerçeveler görselde epey kalın görünüyor
            margin_x = int(tile_width * 0.1)
            margin_y = int(tile_height * 0.1)
            
            cropped_tile = tile.crop((margin_x, margin_y, tile_width - margin_x, tile_height - margin_y))
            
            # İçerideki gerçek logoyu bulmak için beyaz olmayan tüm piksellerin bounding box'ını al
            # Bunu yapmak yerine sadece cropped_tile'ı kaydedip ui tarafında mix-blend-multiply kullanabiliriz.
            # Ama logoyu biraz daha büyük göstermek iyi olur.
            
            output_path = os.path.join(output_dir, f"ref_{count}.png")
            cropped_tile.save(output_path)
            count += 1

if __name__ == "__main__":
    slice_image()

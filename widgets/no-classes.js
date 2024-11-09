// The main script expects a createCustomWidget function to be available
async function createCustomWidget() {
  // Parameters used for widget - you can hardcode your imgur URL here
  const imgurUrl = "https://i.imgur.com/PR6Pk5I.jpeg"; // Replace with your image
  
  // Create and configure widget
  const widget = new ListWidget();
  widget.backgroundColor = new Color("#1a1a1a");
  widget.setPadding(10, 10, 10, 10);
  
  try {
    // Extract imgur ID from URL
    const imgurId = imgurUrl.includes("imgur.com") 
      ? imgurUrl.split("/").pop().split(".")[0]
      : imgurUrl;
    
    // Construct direct image URL
    const imageUrl = `https://i.imgur.com/${imgurId}.jpg`;
    
    // Fetch and decode image
    const imgReq = new Request(imageUrl);
    const img = await imgReq.loadImage();
    
    // Calculate aspect ratio and dimensions
    const imgAspectRatio = img.size.width / img.size.height;
    const widgetWidth = 300;
    const widgetHeight = widgetWidth / imgAspectRatio;
    
    // Add image to widget
    const imgWidget = widget.addImage(img);
    imgWidget.imageSize = new Size(widgetWidth, widgetHeight);
    imgWidget.centerAlignImage();
    
    // Add subtle border
    widget.backgroundColor = new Color("#2a2a2a");
    
  } catch (error) {
    // Error handling
    const errorText = widget.addText("⚠️ Error loading image");
    errorText.centerAlignText();
    errorText.textColor = Color.red();
    errorText.font = Font.boldSystemFont(12);
    
    const errorMsg = widget.addText(error.message);
    errorMsg.centerAlignText();
    errorMsg.textColor = Color.gray();
    errorMsg.font = Font.systemFont(10);
  }
  
  return widget;
}

async function createCustomWidget() {
  const widget = new ListWidget();
  widget.backgroundColor = new Color("#1C1C1E");
  widget.setPadding(16, 16, 16, 16);
  
  // You can make API calls, fetch data, or create any widget layout you want here
  const stack = widget.addStack();
  stack.layoutVertically();
  
  const emoji = stack.addText("🌟");
  emoji.font = Font.systemFont(32);
  emoji.centerAlignText();
  
  stack.addSpacer(8);
  
  const title = stack.addText("Free Time!");
  title.textColor = Color.white();
  title.font = Font.boldSystemFont(16);
  title.centerAlignText();
  
  stack.addSpacer(4);
  
  // You could fetch a random quote or message
  const message = stack.addText("Time to relax or study");
  message.textColor = new Color("#999999");
  message.font = Font.systemFont(14);
  message.centerAlignText();
  
  return widget;
}

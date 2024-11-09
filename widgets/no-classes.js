async function createCustomWidget() {
  const widget = new ListWidget();
  widget.backgroundColor = new Color("#1C1C1E");
  widget.setPadding(16, 16, 16, 16);
  
  const stack = widget.addStack();
  stack.layoutVertically();
  
  const emoji = stack.addText("😴");
  emoji.font = Font.systemFont(32);
  emoji.centerAlignText();
  
  stack.addSpacer(8);
  
  const title = stack.addText("Time to Rest!");
  title.textColor = Color.white();
  title.font = Font.boldSystemFont(16);
  title.centerAlignText();
  
  return widget;
}

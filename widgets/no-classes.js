async function createCustomWidget() {
  const widget = new ListWidget();
  widget.backgroundColor = new Color("#1C1C1E");
  widget.setPadding(16, 16, 16, 16);

  const stack = widget.addStack();
  stack.layoutVertically();

  const emoji = stack.addText("");
  emoji.font = Font.systemFont(32);
  emoji.centerAlignText();

  stack.addSpacer(8);

  const title = stack.addText(""); // Initialize as empty; will update dynamically
  title.textColor = Color.white();
  title.font = Font.boldSystemFont(16);
  title.centerAlignText();

  const originalText = "Buenas noches culona";
  
  // Function to scroll text by creating a substring
  async function scrollText() {
    while (true) {
      for (let i = 0; i <= originalText.length; i++) {
        const displayedText = originalText.slice(i) + " " + originalText.slice(0, i);
        title.text = displayedText;
        await widget.refreshAfterDate(new Date(Date.now() + 0.2 * 1000)); // Refresh every 200ms
      }
    }
  }

  // Start the scrolling effect
  scrollText();

  return widget;
}

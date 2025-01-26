// Description: Entry point for the widget.
import { renderWidget } from '../components/WidgetWrapper'; // Import the renderWidget function from the WidgetWrapper component.

window.createWidget = (elementId, agentId) => {
  renderWidget(elementId, agentId);
};
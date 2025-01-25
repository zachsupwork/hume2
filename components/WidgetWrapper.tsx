import React from 'react';
import ReactDOM from 'react-dom';
import StartCall from './StartCall';

const WidgetWrapper = ({ agentId }: { agentId: string }) => {
  return (
    <div>
      <StartCall /> {/* this is the StartCall */}
    </div>
  );
};

// this will render the widget in the element with the given id
export const renderWidget = (elementId: string, agentId: string) => {
  const container = document.getElementById(elementId); // the container element where the widget will be rendered
  if (container) {
    ReactDOM.render(<WidgetWrapper agentId={agentId} />, container);
  }
};
import { html } from 'lit';
import '../src/cyber-cardNEW.js';

export default {
  title: 'CyberCardNEW',
  component: 'cyber-cardNEW',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <cyber-cardNEW
      style="--cyber-cardNEW-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </cyber-cardNEW>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};

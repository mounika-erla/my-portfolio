import { LitElement, html, css } from 'lit';

class JsonPrettyPrinter extends LitElement {
  static styles = css`
    textarea {
      width: 100%;
      height: 150px;
      margin-bottom: 10px;
    }
    pre {
      background-color: #f4f4f4;
      padding: 10px;
      white-space: pre-wrap;
      border-radius: 5px;
    }
  `;

  static properties = {
    input: { type: String },
    output: { type: String },
  };

  constructor() {
    super();
    this.input = '';
    this.output = '';
  }

  prettyPrint() {
    try {
      const obj = JSON.parse(this.input);
      this.output = JSON.stringify(obj, null, 2);
    } catch (e) {
      this.output = 'Invalid JSON';
    }
  }

  render() {
    return html`
      <textarea .value=${this.input} @input=${(e) => this.input = e.target.value}></textarea>
      <button @click=${this.prettyPrint}>Pretty Print JSON</button>
      <pre>${this.output}</pre>
    `;
  }
}

customElements.define('json-pretty-printer', JsonPrettyPrinter);

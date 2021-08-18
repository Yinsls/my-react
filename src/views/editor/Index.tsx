/* eslint-disable react/no-children-prop */
import { Component } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const content = `
  # Test Markdown component
  ## Second title
`;

interface State {
  markdown: string;
}
export default class Editor extends Component {
  state: State;
  constructor(props: any) {
    super(props);
    this.state = {
      markdown: content,
    };
  }

  render() {
    const markdown = this.state.markdown;
    return (
      <>
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </>
    );
  }
}

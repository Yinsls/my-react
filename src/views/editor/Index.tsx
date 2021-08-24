/* eslint-disable react/no-children-prop */
import { Component } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Index.less";

interface State {
  markdown: string;
}
export default class WriteEditor extends Component {
  state: State;
  constructor(props: any) {
    super(props);
    this.state = {
      markdown: "# aaa",
    };
  }

  render() {
    return (
      <>
        <div className="editor-box">
          <ReactMarkdown
            className="markdown-style"
            sourcePos={true}
            children={this.state.markdown}
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={dark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </div>
      </>
    );
  }
}

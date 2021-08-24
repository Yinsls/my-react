import { Component } from "react";

interface State {
  bookList: any[];
  recommend: any[];
}

export default class WebIndex extends Component {
  state: State;
  constructor(props: any) {
    super(props);
    this.state = {
      bookList: [],
      recommend: [],
    };
  }
}

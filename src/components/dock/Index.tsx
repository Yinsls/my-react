import Software from "../dockSoftware/Index";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Component } from "react";
import "./dock.less";

interface PropType {
  pos: string;
}

interface State {
  dockList: { id: string; name: string }[];
}

const dockList = [
  { id: "dock-01", name: "抖音", image: "http://49.234.181.185/images/boy.jpg" },
  { id: "dock-02", name: "爱奇艺", image: "http://49.234.181.185/images/boy.jpg" },
  { id: "dock-03", name: "知乎", image: "http://49.234.181.185/images/boy.jpg" },
  { id: "dock-04", name: "QQ", image: "http://49.234.181.185/images/boy.jpg" },
];

export default class Dock extends Component<PropType> {
  state: State;
  constructor(props: any) {
    super(props);
    this.state = {
      dockList: dockList,
    };
  }

  /** 程序坞 - 调整位置结束触发函数 */
  onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = this.getDragResult(dockList, result.source.index, result.destination.index);
    this.setState({
      dockList: items,
    });
  };

  /** 获取调整位置后的程序坞列表 */
  getDragResult = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  /** 设置Drag时样式 */
  getDragStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    margin: "0",
    padding: isDragging ? "10px 15px" : "0",
    ...draggableStyle,
  });

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided) => (
            <div className={"dock-" + this.props.pos} ref={provided.innerRef}>
              <div className="dock-content">
                {this.state.dockList.map((software, index) => {
                  return (
                    <Draggable draggableId={software.id} index={index} key={software.id}>
                      {(provided, snapshot) => (
                        <div
                          className="software-box"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={this.getDragStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <Software software={software} />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

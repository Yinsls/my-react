import DockSoftware from "../dockSoftware/Index";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Component } from "react";
import "./dock.less";

interface PropType {
  pos: string;
}

interface State {
  dockList: { id: string; name: string }[];
  isDrag: boolean;
}

const dockList = [
  { id: "dock-01", name: "抖音", image: "http://49.234.181.185/images/boy.jpg" },
  { id: "dock-02", name: "爱奇艺", image: "http://49.234.181.185/images/boy.jpg" },
  { id: "dock-03", name: "知乎", image: "http://49.234.181.185/images/boy.jpg" },
  { id: "dock-04", name: "QQ", image: "http://49.234.181.185/images/boy.jpg" },
  { id: "dock-05", name: "叮叮", image: "http://49.234.181.185/images/boy.jpg" },
];

export default class Dock extends Component<PropType> {
  state: State;
  constructor(props: any) {
    super(props);
    this.state = {
      dockList: dockList,
      isDrag: false,
    };
  }

  /** drag开始时触发函数 */
  onDragStart = () => {
    this.setState({
      isDrag: true,
    });
  };

  /** 程序坞 - 调整位置结束触发函数 */
  onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = this.getDragResult(
      this.state.dockList,
      result.source.index,
      result.destination.index
    );
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
    transform: "scale(1.5)",
    ...draggableStyle,
  });

  resetDragStatus = () => {
    this.setState({
      isDrag: false,
    });
  };

  render() {
    return (
      <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(droppableProvided) => (
            <div className="dock-bottom">
              <div className="dock-content" ref={droppableProvided.innerRef}>
                {this.state.dockList.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(draggableProvided) => (
                      <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                      >
                        <DockSoftware
                          software={item}
                          isDrag={this.state.isDrag}
                          resetDragStatus={this.resetDragStatus}
                        ></DockSoftware>
                      </div>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

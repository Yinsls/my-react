export default function Split(props: any) {
  return (
    <div
      className="split-box"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "inline-block",
          height: "1px",
          width: `${props.width || "100%"}`,
          background: `${props.background || "#f5f5f5"}`,
        }}
      ></div>
    </div>
  );
}

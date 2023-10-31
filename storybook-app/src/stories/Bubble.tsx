const Bubble = () => {
  return (
    <div
      style={{ position: "relative" }}
      onClick={() => {
        console.log("부모이벤트 발생");
      }}
    >
      부모컴포넌트
      <div style={{ position: "relative" }}>
        <button
          style={{ position: "absolute" }}
          onClick={(e) => {
            e.stopPropagation();
            console.log("자식이벤트 발생");
          }}
        >
          클릭
        </button>
      </div>
    </div>
  );
};

export default Bubble;

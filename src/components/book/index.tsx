import HTMLFlipBook from "react-pageflip";
import "./index.scss";

export default function Book() {
  return (
    <HTMLFlipBook
      width={300}
      height={500}
      size="stretch"
      minWidth={300}
      maxWidth={300}
      minHeight={500}
      maxHeight={500}
      drawShadow={true}
      flippingTime={500}
      usePortrait={true}
      startZIndex={10}
      autoSize={true}
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={true}
      swipeDistance={50}
      clickEventForward={false}
      useMouseEvents={true}
      renderOnlyPageLengthChange={true}
      className={""}
      style={{}}
      startPage={0}
      showPageCorners={true}
      disableFlipByClick={false}
    >
      <div className="demoPage">Page 1</div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
  );
}

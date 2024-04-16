import { usePopperTooltip } from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";
import "./style.scss";

const Tooltip = ({ children, tooltip, hideArrow, ...props }: any) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip();

  return (
    <div ref={setTriggerRef}>
      {children}
      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: "tooltip-container" })}
        >
          {tooltip}
          <div {...getArrowProps({ className: "tooltip-arrow" })} />
        </div>
      )}
    </div>
  );
};

export default Tooltip;

// import * as React from "react";
// import ReactDOM from "react-dom";
// import { usePopperTooltip } from "react-popper-tooltip";
// import "react-popper-tooltip/dist/styles.css";

// function App() {
//   return <Example />;
// }

// function Example() {
//   const {
//     getArrowProps,
//     getTooltipProps,
//     setTooltipRef,
//     setTriggerRef,
//     visible,
//   } = usePopperTooltip();

//   return (
//     <>
//       <div className="App">
//         <h1>Basic example</h1>

//         <button type="button" ref={setTriggerRef}>
//           Trigger element
//         </button>

//         {visible && (
//           <div
//             ref={setTooltipRef}
//             {...getTooltipProps({ className: "tooltip-container" })}
//           >
//             Tooltip element
//             <div {...getArrowProps({ className: "tooltip-arrow" })} />
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

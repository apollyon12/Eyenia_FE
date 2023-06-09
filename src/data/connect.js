import React, { useContext, useMemo } from "react";
import { AppContext } from "./AppContext";
import { DispatchObject } from "../util/types";
import { AppState } from "./state";

export function connect({
  mapStateToProps = () => ({}),
  mapDispatchToProps = {},
  component,
}) {
  const Connect = (ownProps) => {
    const context = useContext(AppContext);

    const dispatchFuncs = useMemo(() => {
      const dispatchFuncs = {};
      Object.keys(mapDispatchToProps).forEach((key) => {
        const oldFunc = mapDispatchToProps[key];
        const newFunc = (...args) => {
          const dispatchFunc = oldFunc(...args);
          if (typeof dispatchFunc === "object") {
            context.dispatch(dispatchFunc);
          } else {
            const result = dispatchFunc(context.dispatch);
            if (typeof result === "object" && result.then) {
              result.then((dispatchObject) => {
                if (dispatchObject && dispatchObject.type) {
                  context.dispatch(dispatchObject);
                }
              });
            }
          }
        };
        dispatchFuncs[key] = newFunc;
      });
      return dispatchFuncs;
      // eslint-disable-next-line
    }, [mapDispatchToProps]);

    const props = useMemo(() => {
      return Object.assign(
        {},
        ownProps,
        mapStateToProps(context.state, ownProps),
        dispatchFuncs
      );
      // eslint-disable-next-line
    }, [ownProps, context.state]);

    return React.createElement(component, props);
  };
  return React.memo(Connect);
}

import HeadlessTippy from "@tippyjs/react/headless";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles);
const defaultFn = () => {};

const Menu = ({ children, items = [], onChange = defaultFn }) => {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => {
                return [...prev, item.children];
              });
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <HeadlessTippy
      interactive
      offset={[12, 8]}
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => {
        return (
          <div className={cx("menu")} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx("menu-popper")}>
              {history.length > 1 && (
                <Header
                  title="Language"
                  onBack={() => {
                    setHistory((prev) => {
                      return prev.slice(0, prev.length - 1);
                    });
                  }}
                />
              )}
              {renderItems()}
            </PopperWrapper>
          </div>
        );
      }}
      onHide={() => {
        return setHistory((prev) => {
          return prev.slice(0, 1);
        });
      }}
    >
      {children}
    </HeadlessTippy>
  );
};

export default Menu;

import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleNotch,
  faMagnifyingGlass,
  faEllipsisVertical,
  faAdd,
  faCircleQuestion,
  faEarthAsia,
  faKeyboard,
  faCoins,
  faGear,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBookmark,
  faMessage,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

import { Wrapper as PopperWrapper } from "../../../Popper";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import AccountItem from "../../../AccountItem";
import Button from "../Button";
import Menu from "../../../Popper/Menu";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "fr",
          title: "Français",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard Shortcuts",
  },
];

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "View profile",
    to: "/@manax.it",
  },
  {
    icon: <FontAwesomeIcon icon={faBookmark} />,
    title: "Favorites",
    to: "/favorite",
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Get Coins",
    to: "/coin",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Settings",
    to: "/setting",
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
    title: "Log out",
    to: "/logout",
    separate: true,
  },
];

const Header = () => {
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        break;
      default:
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="Tik Tok" className={cx("logo")} />

        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => {
            return (
              <div className={cx("search-results")} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <h4 className={cx("search-title")}>Accounts</h4>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                </PopperWrapper>
              </div>
            );
          }}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon className={cx("load")} icon={faCircleNotch} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx("actions")}>
          <Button leftIcon={<FontAwesomeIcon icon={faAdd} />} text>
            Upload
          </Button>
          {currentUser ? (
            <>
              <Tippy delay={[0, 100]} content="Messages" placement="bottom">
                <button className={cx("action-btn")}>
                  {<FontAwesomeIcon icon={faPaperPlane} />}
                </button>
              </Tippy>
              <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  {<FontAwesomeIcon icon={faMessage} />}
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <img
                className={cx("user-avatar")}
                alt="Minh Man"
                src={images.avatar}
              ></img>
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;

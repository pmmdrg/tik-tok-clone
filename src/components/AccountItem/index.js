import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./AccountItem.module.scss";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/290689511_1737911996566659_8017096655365137141_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=F5UEt3QWilwAX_hKQn_&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfBSZnO1SDyY63sIENql12l17PVNJqubJug-J5MYy35ptA&oe=649F9F73"
        alt="Man"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Minh Man</span>
          <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
        </h4>
        <span className={cx("username")}>manax.it</span>
      </div>
    </div>
  );
};

export default AccountItem;

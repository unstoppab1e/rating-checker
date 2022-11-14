import { SidebarProps } from "./Sidebar.props";
import styles from './Sidebar.module.css';
import cn from 'classname';
import { Menu } from "../Menu/Menu";
import { Search } from "../../components";


export const Sidebar = ({ className, ...props}: SidebarProps): JSX.Element => {
    return (
        <div className={cn(className, styles.sidebar)} {...props} >
            <div className={styles.rating}>
                <span>
                    RatingChecker
                </span>
            </div>
            <Search />
            <Menu />
        </div>
    );
};
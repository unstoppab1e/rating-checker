import { DividerProps } from "./Divider.props";
import styles from './Divider.module.css';
import cn from 'classname';


export const Divider = ({ className, ...props}: DividerProps): JSX.Element => {
    return (
        <hr className={cn(className, styles.hr)} {...props}/>
    );
};
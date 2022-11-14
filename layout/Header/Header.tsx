import { HeaderProps } from "./Header.props";
import styles from './Header.module.css';
import cn from 'classname';
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { Sidebar } from "../Sidebar/Sidebar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


export const Header = ({ className, ...props}: HeaderProps): JSX.Element => {
    const router = useRouter();
    const [isOpened, setIsOpened] = useState<boolean>(false);

    useEffect(()=> {
        setIsOpened(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: 0,
            x: '100%'
        }
    }

    return (
        <header className={cn(className, styles.header)}{...props}>
            <div className={styles.rating}>
                <span>
                    RatingChecker
                </span>
            </div>
            <ButtonIcon appearance="white" icon="menu" onClick={() => {
                setIsOpened(true);
            }}/>

            <motion.div 
                className={styles.mobileMenu}
                variants={variants}
                initial={'closed'}
                animate={isOpened ? 'opened' : 'closed'}
            >
                <Sidebar />
                <ButtonIcon className={styles.menuClose} appearance="white" icon="close" onClick={()=> {
                    setIsOpened(false);
                }}/>
            </motion.div>
        </header>
    );
};
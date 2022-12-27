import { useState } from "react";
import styles from "../styles/dark.module.css"
import Image from "next/image";
import lightImage from "../Images/tabemono1.png"
import darkImage from "../Images/tabemono2.png"

const dark = () => {
    const [mode,setMode]=useState(false);
    const modeChange=()=>{
        setMode(!mode);
    }
    return (
        <div className={mode? styles.lightMode:styles.darkMode}>
            <div className={styles.header}>
                <p>Mode-Change</p>
                {mode? <div className={styles.lightImage} onClick={modeChange}>
                    <Image src={lightImage}/>
                </div>:
                <div className={styles.darkImage} src={darkImage} onClick={modeChange}>
                    <Image src={darkImage}/>
                </div>}
            </div>
            <div className={styles.content}>
                {mode? <p className={styles.black}>Dark-Mode</p>:<p className={styles.white}>Light-Mode</p>}
            </div>
        </div>
    );
}

export default dark;
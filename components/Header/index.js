import React from 'react';
import styles from "./styles.module.css";
import Link from "next/link";

const Header = () => {
    return (
        <React.Fragment>
            <header className={styles.wrapper}>
                <div className='container mx-auto flex justify-center'>
                    <Link href='/'>
                        <a><img src='/logo_palpitebox.svg' alt='PalpiteBox Logotype' /></a>
                    </Link>
                </div>
            </header>

            <div className={styles.navbar}>
                <Link href="/about">
                    <a className='hover:text-green-400'>About</a>
                </Link>
                <Link href="/contact">
                    <a className='hover:text-green-400'>Contact</a>
                </Link>
                <Link href="/survey">
                    <a className='hover:text-green-400'>Survey</a>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default Header;
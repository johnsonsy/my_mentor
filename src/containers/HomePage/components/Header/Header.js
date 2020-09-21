import React from 'react';
import { HeaderContainer, SignUpSpan } from "./Header.styles";
import Link from "next/link";
import Router from 'next/router';
import { useStores } from "@store";


const Header = () => {
    const { openModal } = useStores()['LoginModalStore']
    const { userId } = useStores()['LayoutStore']


    return (
        <HeaderContainer>
            {
                userId || <>
                    <Link href="/signup">
                        <SignUpSpan>
                            Signup
                        </SignUpSpan>
                    </Link>
                    <span onClick={() => {
                        openModal()
                    }}>
                Login
            </span>
                </>
            }

        </HeaderContainer>
    );
};

export default Header;

import React from 'react';
import { Modal } from '@material-ui/core';
import styled from "@emotion/styled";
import { GrClose } from 'react-icons/gr';

const MyModal = (props) => {
    const { children, onClose, width } = props;
    return (
        <Modal
            {...props}
        >
            <div>
                <MainContainer>
                    <HeaderContainer>
                        <HeaderCloseButton onClick={onClose}>
                            <HeaderCloseIcon size={20}/>
                        </HeaderCloseButton>
                    </HeaderContainer>
                    {children}
                </MainContainer>
            </div>
        </Modal>
    );
};

export default MyModal;
const MainContainer = styled.div`
    position: fixed;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    outline: none;
    border-radius: 10px;
    overflow: hidden;
    width: 60%;
    @media (max-width: 796px){
        width: 100%;

    }
`
const HeaderContainer = styled.div`
  display: flex;
`;

const HeaderCloseButton = styled.div`
   margin-left: auto;
   cursor: pointer;
   display: flex;
   justify-content: center;
`;

const HeaderCloseIcon = styled(GrClose)`
    margin: 10px;
    fill:white;
`;

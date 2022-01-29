import styled from "styled-components";
import { Link } from "react-scroll";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    background: rgba(0,0,0,0.5);
    position: fixed;
    display:flex;
    align-items: center;
    justify-content: center;
`

export const MyLogo = styled.span`
    color: #fff;
    font-family: 'Roboto Mono', monospace;
    display: inline-block;
    padding-left: 20px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const SLogo = styled.span`
    color: #fff;
    font-family: 'Roboto Mono', monospace;
    display: none;
    padding-left: 20px;
    @media screen and (max-width: 768px){
        display: inline-block;
    }
`
export const NavlinkContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const Navlinks = styled(Link)`
    color: white;
    padding-right: 20px;
    cursor: pointer;
`

export const Homelink = styled(Link)`
    cursor: pointer;
`

export const NavbarCC = styled.div`
    width: 100%;
    max-width: 1150px;
    display: flex;
    justify-content: space-between;
`
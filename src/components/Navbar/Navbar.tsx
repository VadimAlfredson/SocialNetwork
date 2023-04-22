import React, {FC, useEffect, useState} from 'react';
import s from './Navbar.module.css';
import {NavLink, useNavigate, useParams} from "react-router-dom";
import SubscriptionsContainer from "../Subscriptions/SubscriptionsContainer";
import {Box, Button, ButtonGroup, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {hover} from "@testing-library/user-event/dist/hover";

type propsType = {
    isAuth: boolean
}

type navCategoryType = 'Profile' | 'Dialogs' | 'Users' | 'Chat' | 'Setting' | 'News'

const NavMUI: FC<propsType> = (props) => {
    const [activeCategory, setActiveCategory] = useState<navCategoryType>('Profile')
    const navCategory = ['Profile', 'Dialogs', 'Users', 'Chat', 'News', 'Setting'] as Array<navCategoryType>
    const navigate = useNavigate()

    let onClickNavChange = (category: navCategoryType) => {
        if (activeCategory !== category) {
            setActiveCategory(category)
            navigate(`/${category}`)
        }
    }

    let onSubscriptionsChange = () => {
        setActiveCategory('Users')
        navigate('/users?pageNumber=1&friend=true')
    }

    const handleChange = (e: React.MouseEvent<HTMLElement>, category: navCategoryType) => {
        if (activeCategory !== category) {
            setActiveCategory(category)
            navigate(`/${category}`)
        }
    }

    let iconCategory = (category: navCategoryType) => {
        switch (category) {
            case 'Profile':
                return <PermIdentityOutlinedIcon sx={{m: '0'}}/>;
            case 'Dialogs':
                return <MailOutlineOutlinedIcon/>;
            case 'Chat':
                return <ChatBubbleOutlineOutlinedIcon/>;
            case 'Users':
                return <PeopleAltOutlinedIcon/>;
            case 'News':
                return <GradeOutlinedIcon/>;
            case 'Setting':
                return <SettingsOutlinedIcon/>;

        }
    }


    return <Box
        display={'flex'}
        flexGrow={1}
        flexDirection={{sm: 'row', md: 'column'}}
        minWidth={{xs: '100%', md: '250px'}}
        maxWidth={{xs: '100px', md: '250px'}}
    >
        {navCategory.map((category, index) =>
            <ToggleButton
                key={index}
                sx={{
                    flexGrow: {xs: 1, md: 0},
                    flexDirection: 'row',
                    padding: 'auto 0',
                    backgroundColor: /*activeCategory === category ? '#D0D3D4' :*/ 'inherit',
                    border: '1px solid #D0D3D4',
                    /*color: activeCategory === category ? '#0a0d11' : '#D0D3D4',*/
                    /*'&:hover': {
                        backgroundColor: activeCategory === category ? '#D0D3D4' : 'rgba(208,211,212,0.3)',
                    },*/
                    borderRadius: {
                        xs:
                            index === 0 ? '5px 0 0 5px' : index === 5 ? '0 5px 5px 0' : '0',
                        md: index === 0 ? '5px 5px 0 0' : '0'
                    },
                    pt: '0', pb: '0', pl: '0', pr: '0',
                }}
                value={category}
                aria-label={category}
                /*onClick={handleChange}*/
            >
                <NavLink to={`/${category.toLowerCase()}`}
                         style={{display: 'flex', flexDirection: 'row', textDecoration: 'none',
                             flexGrow: 1, justifyContent: 'center'}}
                className={style => style.isActive ? s.activeNav : s.itemNav}
                >
                    <Typography height={'25px'}
                    >{iconCategory(category)}</Typography>
                    <Typography
                        sx={{display: {xs: 'none', sm: 'inline'}, flexGrow: {xs: 0, sm: 1}}}
                    >{category}</Typography>
                </NavLink>
            </ToggleButton>
        )}

        {props.isAuth &&
            <Button
                sx={{
                    display: {md: 'block', xs: 'none'},
                    border: '1px solid #D0D3D4',
                    borderRadius: '0 0 5px 5px'

                }}
                variant={'outlined'}
                color={'info'}
                onClick={() => onSubscriptionsChange()}
            >
                <SubscriptionsContainer/>
            </Button>}
    </Box>
}

const Navbar = (props: propsType) => {
    return <nav className={s.nav}>
        <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.itemnav}>
            <div className={s.item}>
                Profile
            </div>
            <img className={s.iconItem} src={process.env.PUBLIC_URL + '/free-icon-user-2089773.png'} alt={'Profile'}/>
        </NavLink>
        <NavLink to="/Dialogs" className={navData => navData.isActive ? s.active : s.itemnav}>
            <div className={s.item}>
                Messages
            </div>
            <img className={s.iconItem} src={process.env.PUBLIC_URL + '/free-icon-speech-bubble-2496514.png'}
                 alt={'Dialogs'}/>
        </NavLink>
        <NavLink to="/Chat" className={navData => navData.isActive ? s.active : s.itemnav}>
            <div className={s.item}>
                Chat
            </div>
            <img className={s.iconItem} src={process.env.PUBLIC_URL + '/free-icon-chat-bubble-2089142.png'}
                 alt={'Dialogs'}/>
        </NavLink>
        <NavLink to="/Users" className={navData => navData.isActive ? s.active : s.itemnav}>
            <div className={s.item}>
                Users
            </div>
            <img className={s.iconItem} src={process.env.PUBLIC_URL + '/free-icon-group-2089672.png'} alt={'Users'}/>
        </NavLink>
        <NavLink to="/News" className={navData => navData.isActive ? s.active : s.itemnav}>
            <div className={s.item}>
                News
            </div>
            <img className={s.iconItem} src={process.env.PUBLIC_URL + '/free-icon-newspaper-2089343.png'} alt={'News'}/>
        </NavLink>
        {/*<NavLink to="/Music" className={navData => navData.isActive ? s.active : s.itemnav}>
            <div className={s.item}>
                Music
            </div>
            <img className={s.iconItem} src={process.env.PUBLIC_URL + '/free-icon-music-note-482046.png'}
                 alt={'Music'}/>
        </NavLink>*/}
        <NavLink to="/Setting" className={navData => navData.isActive ? s.active : s.itemnav}>
            <div className={s.item}>
                Settings
            </div>
            <img className={s.iconItem} src={process.env.PUBLIC_URL + '/free-icon-settings-2089734.png'}
                 alt={'Setting'}/>
        </NavLink>
        {props.isAuth &&
            <div className={s.following}>
                <SubscriptionsContainer/>
            </div>}
    </nav>
}

export default NavMUI
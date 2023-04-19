import React, {FC, useState} from 'react';
import s from './Navbar.module.css';
import {NavLink, useNavigate} from "react-router-dom";
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
        if (activeCategory !== category){
        setActiveCategory(category)
        navigate(`/${category}`)
    }}

    let onSubscriptionsChange = () => {
    setActiveCategory('Users')
        navigate('/users?pageNumber=1&friend=true')
    }

    const handleChange = (e: React.MouseEvent<HTMLElement>, category: navCategoryType) => {
        if (activeCategory !== category){
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
                    backgroundColor: activeCategory === category ? '#D0D3D4' : 'inherit',
                    border: '1px solid #D0D3D4',
                    color: activeCategory === category ? '#0a0d11' : '#D0D3D4',
                    '&:hover': {
                        backgroundColor: activeCategory === category ? '#D0D3D4' : 'rgba(208,211,212,0.3)',
                    }
                }}
                value={category}
                aria-label={category}
                onClick={handleChange}
            >
                <Typography height={'25px'}
                >{iconCategory(category)}</Typography>
                <Typography
                    sx={{display: {xs: 'none', sm: 'inline'}, flexGrow: {xs: 0, sm: 1}}}
                >{category}</Typography>
            </ToggleButton>
        )}
        {props.isAuth &&
            <Button
                sx={{display: {md: 'block', xs: 'none'}, border: '1px solid #D0D3D4'}}
                variant={'outlined'}
                color={'info'}
                onClick={() => onSubscriptionsChange()}
            >
                <SubscriptionsContainer/>
            </Button>}
    </Box>
}

export default NavMUI
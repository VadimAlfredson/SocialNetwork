import React, {FC, useState} from 'react';
import s from './Navbar.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import SubscriptionsContainer from "../Subscriptions/SubscriptionsContainer";
import {Box, Button, ButtonGroup, Typography} from "@mui/material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

type propsType = {
    isAuth: boolean
}

type navCategoryType = 'Profile' | 'Dialogs' | 'Users' | 'Chat' | 'Setting' | 'News'

const NavMUI: FC<propsType> = (props) => {
    const [activeCategory, setActiveCategory] = useState<navCategoryType>('Profile')
    const navCategory = ['Profile', 'Dialogs', 'Users', 'Chat', 'News', 'Setting'] as Array<navCategoryType>
    const navigate = useNavigate()
    let onClickNavChange = (category: navCategoryType) => {
        setActiveCategory(category)
        navigate(`/${category}`)
    }

    let iconCategory = (category: navCategoryType) => {
        switch (category) {
            case 'Profile':
                return <PermIdentityOutlinedIcon />;
            case 'Dialogs':
                return <MailOutlineOutlinedIcon />;
            case 'Chat':
                return <ChatBubbleOutlineOutlinedIcon />;
            case 'Users':
                return <PeopleAltOutlinedIcon />;
            case 'News':
                return <GradeOutlinedIcon />;
            case 'Setting':
                return <SettingsOutlinedIcon />;

        }
    }


    return <Box
        display={'flex'}
        flexGrow={1}
        flexDirection={{sm: 'row', md: 'column'}}
        minWidth={{xs: '100%', md: '250px'}}
        maxWidth={{xs: 'auto', md: '250px'}}
    >
        {navCategory.map(category =>
            <Button
                sx={{flexGrow: {xs: 1, md: 0}, flexDirection: 'row'}}
                variant={activeCategory === category ? 'contained' : 'outlined'}
                color={'info'}
                onClick={() => onClickNavChange(category)}
            >
                <Typography height={'25px'}
                >{iconCategory(category)}</Typography>
                <Typography
                sx={{display: {xs: 'none', sm: 'inline'}, flexGrow: 1}}
                >{category}</Typography>
            </Button>
        )}
        {props.isAuth &&
            <Button
                sx={{display: {md: 'block', xs: 'none'}}}
                variant={'outlined'}
                color={'info'}
            >
                <SubscriptionsContainer/>
            </Button>}
    </Box>
}

export default NavMUI
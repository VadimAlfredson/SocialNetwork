import React, {FC, useState} from 'react';
import s from './Navbar.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import SubscriptionsContainer from "../Subscriptions/SubscriptionsContainer";
import {Box, Button, ButtonGroup} from "@mui/material";

type propsType = {
    isAuth: boolean
}

type navCategoryType = 'Profile' | 'Dialogs' | 'Users' | 'Chat' | 'Setting' | 'News'

const NavMUI: FC<propsType> = (props) => {
    const [activeCategory, setActiveCategory] = useState<navCategoryType>('Profile')
    const navCategory = ['Profile', 'Dialogs', 'Users', 'Chat', 'Setting', 'News'] as Array<navCategoryType>
    const navigate = useNavigate()
    let onClickNavChange = (category: navCategoryType) => {
        setActiveCategory(category)
        navigate(`/${category}`)
    }


    return <Box
        display={'flex'}
        flexGrow={1}
        flexDirection={{xs: 'row', md: 'column'}}
        minWidth={{xs: '100%', md: '250px'}}
        maxWidth={{xs: 'auto', md: '250px'}}
    >
        {navCategory.map(category =>
            <Button
                sx={{flexGrow: {xs: 1, md: 0}}}
                variant={activeCategory === category ? 'contained' : 'outlined'}
                color={'info'}
                onClick={() => onClickNavChange(category)}
            >
                {category}
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
import { useDispatch, useSelector } from 'react-redux'
import { Badge, Box, IconButton } from '@mui/material';
import {
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
  PersonOutline
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';

import { shades } from '../../theme';
import { setIsCartOpen } from '../../state';


const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart)

  return (
    <Box display='flex'
      alignItems="center"
      height="60px"
      width="100%"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="="
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate('/')}
          sx={{ '&:hover': { courser: 'pointer' } }}
          color={shades.secondary[500]}
        >
          Ecomerce
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton color='black'>
            <SearchOutlined />
          </IconButton>
          <IconButton color='black'>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.lenght}
            color="secondary"
            invisible={cart.lenght === 0}
            sx={{
              '& .Mui-Badge-badge': {
                top: 5,
                right: 5,
                padding: "0 4px",
                height: "14px",
                mainWidth: "13px"
              }
            }}

          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen())}
              color='black'>
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton color='black'>
            <MenuOutlined />
          </IconButton>

        </Box>

      </Box>

    </Box >
  )
}

export default Navbar;
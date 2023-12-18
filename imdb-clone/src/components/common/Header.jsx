import { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import { logoURL } from "../../constants/constant";
import { Menu, BookmarkAdd, ExpandMore } from "@mui/icons-material";

//components
import HeaderMenu from "./HeaderMenu";

const StyledToolbar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;
  & > * {
    padding: 0 16px;
  }
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
        font-size: 14px;
        font-weight: 600;
    }
  }
  & > p {
        font-size: 14px;
        font-weight: 600;
    }
`;

const InputSearchField =styled(InputBase)`
    background: #FFFFFF;
    width: 55%;
    height: 30px;
    border-radius: 5px;
`

const Logo = styled("img")({
  width: 64,
});

const Header = () => {
    const [open, setOpen] = useState(null);
    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }

    const handleClose = () =>  {
        setOpen(null);
    }
  return (
    <AppBar>
      <StyledToolbar>
        <Logo src={logoURL} alt="logo" />
        <Box onClick={ handleClick }>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose} />
        <InputSearchField />
        <Typography>
          IMDb<Box component="span">Pro</Box>
        </Typography>
        <Box>
            <BookmarkAdd />
            <Typography>Add</Typography>
        </Box>
        <Typography>Sign In</Typography>
        <Box>
            <Typography>EN</Typography>
            <ExpandMore />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};
export default Header;

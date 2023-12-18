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

const StyledToolbar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  padding: 0 115px !important;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
        font-size: 14px;
        font-weight: 600;
    }
  }
`;

const Logo = styled("img")({
  width: 64,
});

const Header = () => {
  return (
    <AppBar>
      <StyledToolbar>
        <Logo src={logoURL} alt="logo" />
        <Box>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
        <InputBase />
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

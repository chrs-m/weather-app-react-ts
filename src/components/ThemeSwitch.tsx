import { FC } from "react";
import { PaletteMode } from "@mui/material";
import Switch from "@mui/material/Switch";

interface Props {
  mode: PaletteMode;
  onChange?: () => void;
}

const ThemeSwitch: FC<Props> = ({ mode, onChange }) => {
  return (
    <Switch
      checked={mode === "dark"}
      onChange={onChange}
      color="info"
      size="small"
    />
  );
};

export default ThemeSwitch;

import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

export default function TooltipButton() {
  return (
    <Tooltip title="click me">
      <Button variant="contained" onClick={() => alert("clicked")}>
        click me
      </Button>
    </Tooltip>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FullWidthTextFieldAR() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        direction: "rtl",
        textAlign: "right",
      }}
    >
      <TextField fullWidth label="اكتب ملاحظاتك هنا ..." id="fullWidth" />
    </Box>
  );
}

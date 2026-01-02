import React, { useState } from "react";
import dayjs from "dayjs";

import {
  Button,
  TextField,
  MenuItem,
  Divider,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";
import BookTableForm from "../../BookTableForm";

const Table = ({setActiveTab}) => {
  const [date, setDate] = useState(null);
  const [guests, setGuests] = useState("");

  return (
    <div className="w-[480px] bg-white rounded-2xl shadow-lg overflow-hidden">
      
      {/* Header */}
      <div className="bg-gray-100 p-6">
        <h1 className="text-3xl font-semibold mb-1">
          Table Reservation
        </h1>
        <p className="text-blue-600 font-semibold">
          Flat 10% OFF + 2 more offers
        </p>
      </div>

      <Divider />

      {/* Form */}
      <div className="p-6 space-y-4">

        <div className="flex gap-4">
          
          {/* DATE */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker
    label="Date"
    value={date}
    onChange={(newValue) => setDate(newValue)}
    minDate={dayjs().add(1, "day")}   //  tomorrow
    maxDate={dayjs().add(6, "day")}   //  next 6 days
  />
</LocalizationProvider>


          {/* GUEST */}
          <TextField
            select
            label="Guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: <PeopleIcon className="mr-2" />,
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((g) => (
              <MenuItem key={g} value={g}>
                {g} Guest{g > 1 && "s"}
              </MenuItem>
            ))}
          </TextField>

        </div>

        {/* CTA */}
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{
            backgroundColor: "#e23744",
            borderRadius: "12px",
            textTransform: "none",
            fontSize: "18px",
            "&:hover": {
              backgroundColor: "#c62828",
            },
          }}
           onClick={() => setActiveTab("book")}
        >
          Book Table
        </Button>
      </div>
    </div>
  );
};

export default Table;

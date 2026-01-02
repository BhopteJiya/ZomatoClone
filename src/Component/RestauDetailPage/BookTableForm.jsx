import React, { useState } from "react";
import {
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  MenuItem,
  Divider,
} from "@mui/material";

import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import BottomContent from "./Static/Overview/BottomContent";
import HomeFooter from "../Footer/HomeFooter";

const timeSlots = {
  breakfast: ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM"],
  lunch: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"],
  dinner: ["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"],
};

const BookTableForm = () => {
  const [date, setDate] = useState(null);
  const [guests, setGuests] = useState("");
  const [meal, setMeal] = useState("");
  const [slot, setSlot] = useState("");

  const isComplete = date && guests && meal && slot;

  return (
<>
    <div className="w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      
      {/* HEADER */}
      <div className="p-6 border-b">
        <h2 className="text-2xl font-semibold">Book a Table</h2>
        <p className="text-gray-500 text-sm">
          Select date, guests and time slot
        </p>
      </div>

      {/* BODY */}
      <div className="p-6 space-y-6 space-x-6">

        {/* DATE */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Date"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            renderInput={(params) => (
              <TextField {...params} 
               sx={{
    width: 250  

  }} />
            )}
          />
        </LocalizationProvider>

        {/* GUEST */}
        <TextField
          select
          label="Number of Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
           sx={{
    width: 300   // this controls width & height

  }}
        >
          {[1, 2, 3, 4, 5, 6].map((g) => (
            <MenuItem key={g} value={g}>
              {g} Guest{g > 1 && "s"}
            </MenuItem>
          ))}
        </TextField>

        <Divider />

        {/* MEAL */}
        <div>
          <p className="font-medium mb-2">Meal Preference</p>
          <ToggleButtonGroup
            exclusive
            value={meal}
            onChange={(e, value) => {
              setMeal(value);
              setSlot("");
            }}
            fullWidth
          >
            <ToggleButton value="breakfast">Breakfast</ToggleButton>
            <ToggleButton value="lunch">Lunch</ToggleButton>
            <ToggleButton value="dinner">Dinner</ToggleButton>
          </ToggleButtonGroup>
        </div>

        {/* TIME */}
        {meal && (
          <div>
            <p className="font-medium mb-2">Available Time Slots</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {timeSlots[meal].map((t) => (
                <Button
                  key={t}
                  onClick={() => setSlot(t)}
                  variant={slot === t ? "contained" : "outlined"}
                  color={slot === t ? "error" : "inherit"}
                  sx={{
                    borderRadius: "12px",
                    fontSize: "0.9rem",
                  }}
                >
                  {t}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="p-6 border-t bg-gray-50">
        <Button
          fullWidth
          size="large"
          variant="contained"
          color="error"
          disabled={!isComplete}
          sx={{
            borderRadius: "14px",
            py: 1.5,
            fontSize: "1rem",
          }}
          onClick={() => {
            console.log({
              date,
              guests,
              meal,
              slot,
            });
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
    <BottomContent></BottomContent>
    <HomeFooter></HomeFooter>
    </>
  );
};

export default BookTableForm;

import React, { useState } from "react";
import { Dialog } from "@mui/material";

const Images = ({ images }) => {
  const [openGallery, setOpenGallery] = useState(false);

  if (!images || images.length === 0) return null;

  const extraCount = images.length - 3;

  return (
    <>
      {/* MAIN GRID */}
      <div className="grid grid-cols-3 gap-2 h-[320px] w-full overflow-hidden rounded-xl">

        {/* LEFT LARGE IMAGE */}
        <div className="col-span-2">
          <img
            src={images[0]}
            alt="restaurant"
            className="h-full w-full object-cover cursor-pointer"
            onClick={() => setOpenGallery(true)}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-2">
          <img
            src={images[1]}
            alt="restaurant"
            className="h-1/2 w-full object-cover cursor-pointer"
            onClick={() => setOpenGallery(true)}
          />

          <div
            className="relative h-1/2 w-full cursor-pointer"
            onClick={() => setOpenGallery(true)}
          >
            <img
              src={images[2]}
              alt="restaurant"
              className="h-full w-full object-cover"
            />

            {/* +MORE OVERLAY */}
            {extraCount > 0 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-2xl font-bold">
                +{extraCount}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FULL GALLERY MODAL */}
      <Dialog
        open={openGallery}
        onClose={() => setOpenGallery(false)}
        fullWidth
        maxWidth="md"
      >
        <div className="grid grid-cols-2 gap-4 p-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="restaurant"
              className="w-full h-48 object-cover rounded-lg"
            />
          ))}
        </div>
      </Dialog>
    </>
  );
};

export default Images;

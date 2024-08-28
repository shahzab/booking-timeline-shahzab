"use client";
import { useState } from "react";
import classNames from "classnames";
const BookingTimeline = ({ bookings }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const timeline = bookings[0];

  const handleNext = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };
  const handlePrev = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const timeSlots = [
    "8:00 - 8:30",
    "8:30 - 9:00",
    "9:00 - 9:30",
    "9:30 - 10:00",
    "10:00 - 10:30",
    "10:30 - 11:00",
    "11:00 - 11:30",
    "11:30 - 12:00",
    "12:00 - 12:30",
    "12:30 - 13:00",
    "13:00 - 13:30",
    "13:30 - 14:00",
    "14:00 - 14:30",
    "14:30 - 15:00",
    "15:00 - 15:30",
    "15:30 - 16:00",
    "16:00 - 16:30",
    "16:30 - 17:00",
    "17:00 - 17:30",
    "17:30 - 18:00",
    "18:00 - 18:30",
  ];

  return (
    <div className="bookingTimeline mx-3">
      {/* header area */}
      <section className="flex mb-5 items-center flex-col-reverse md:flex-row">
        {/* navigator */}
        <div className="booking-navigator flex items-center">
          <div className="label mr-8">SELECT BOOKING</div>
          <button className="btn-nav btn-nav-prev mr-2" onClick={handlePrev}>
            <img src="assets/angle-left.svg" alt="arrow-left" />
          </button>
          <div className="text-gray-900">{formatDate(currentDate)}</div>
          <img
            src="assets/arrow-down-angle.svg"
            className="w-[18px] h-[18px]"
            alt=""
          />
          <button className="btn-nav btn-nav-next ml-2" onClick={handleNext}>
            <img src="assets/angle-right.svg" alt="arrow-left" />
          </button>
        </div>
        <div className="ml-none md:ml-auto mb-4 md:mb-0 space-x-2 flex">
          <div className="flex items-center space-x-2">
            <div className="bg-gray-50 rounded-md border border-gray-200 w-[30px] h-[20px]"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-gray-100 rounded-md border border-gray-200 w-[30px] h-[20px]"></div>
            <span>Not available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-primary rounded-md border border-gray-200 w-[30px] h-[20px]"></div>
            <span>Selected</span>
          </div>
        </div>
      </section>

      {/* Timeline area */}
      <section className="booking-timeline bg-gray-50 flex min-h-[600px]">
        <div className="border-r content-center px-3">
          <span className="text-primary">{timeline.space}</span>
        </div>
        <div className="flex flex-1 flex-col items-start">
          <h4 className="border-b text-center uppercase w-full py-3">
            Timeline
          </h4>
          <div className="flex flex-1 w-full">
            <div className="flex flex-col border-r">
              <div className="col border-b py-2">&nbsp;</div>
              <div className="flex flex-col flex-1  text-primary">
                {timeline.subSpace.map((subSpace, index) => (
                  <div
                    className="flex flex-1 border-b items-center "
                    key={`parentSpace${index}`}
                  >
                    <span className="px-3 flex-1 text-center">
                      {subSpace.space}
                    </span>
                    {subSpace.subSpace && subSpace.subSpace.length > 0 ? (
                      <div className="flex flex-col h-full bg-white border-l">
                        {subSpace.subSpace.map((subSubSpace, index) => (
                          <div
                            key={`subSpace${index}`}
                            className={classNames({
                              "flex items-center flex-1 px-3": true,
                              "border-b": index < subSpace.subSpace.length - 1,
                            })}
                          >
                            {subSubSpace.space}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-1 w-full relative ">
              <div className="absolute w-full h-full  overflow-auto no-scrollbar">
                <div className="h-full flex ">
                  {timeSlots.map((timeSlot, timSlotIndex) => (
                    <div
                      className={classNames({
                        "border-r min-w-[100px] flex flex-col": true,
                        sticky: timSlotIndex === 0,
                      })}
                      key={`timeSlot${timSlotIndex}`}
                    >
                      <div className="py-2 bg-white text-center border-b text-primary">
                        {timeSlot}
                      </div>
                      {timeline.subSpace.map((subSpace, mainColIndex) => (
                        <div
                          className="flex flex-1 border-b"
                          key={`mainCol${timSlotIndex}${mainColIndex}`}
                        >
                          {subSpace.subSpace && subSpace.subSpace.length > 0 ? (
                            <div className="flex flex-col flex-1">
                              {subSpace.subSpace.map((ss, subSpaceIndex) => (
                                <div
                                  key={`subSpace${timSlotIndex}${mainColIndex}${subSpaceIndex}`}
                                  className={classNames({
                                    "flex flex-1": true,
                                    "border-b":
                                      subSpaceIndex <
                                      subSpace.subSpace.length - 1,
                                    "bg-gray-100":
                                      mainColIndex == 0 &&
                                      subSpaceIndex == 1 &&
                                      timSlotIndex > 2 &&
                                      timSlotIndex < 6,
                                  })}
                                ></div>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BookingTimeline;

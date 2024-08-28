import BookingTimeline from "./components/BookingTimeline";

export default function Home() {
  const data1 = [
    {
      space: "Full",
      subSpace: [
        {
          space: "Half 1",
          subSpace: [{ space: "Space 1" }, { space: "Space 2" }],
        },
        {
          space: "Half 2",
          subSpace: [{ space: "Space 3" }, { space: "Space 4" }],
        },
      ],
    },
  ];
  const data2 = [
    {
      space: "Full",
      subSpace: [
        { space: "Lane 1" },
        { space: "Lane 2" },
        { space: "Lane 3" },
        { space: "Lane 4" },
        { space: "Lane 5" },
        { space: "Lane 6" },
        { space: "Lane 7" },
        { space: "Lane 8" },
      ],
    },
  ];

  return (
    <div className="container mx-auto my-5">
      <BookingTimeline bookings={data1} />
    </div>
  );
}

import BookEvent from "@/components/BookEvent";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database/event.model";
import { getSimilarEventsBySlug } from "@/lib/actions/event.actions";
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailItem = ({ icon, alt, label }: { icon: string; alt: string; label: string; }) => (
  <div className="flex-row-gap-2 items-center">
    <Image src={icon} alt={alt} width={17} height={17} />
    <p>{label}</p>
  </div>
);

const EventAgenda = ({ agendaItem }: { agendaItem: string[] }) => (
  <div className="agenda">
    <h2>Agenda</h2>
    <ul>
      {agendaItem.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const EventTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row gap-1.5 flex-wrap">
    {tags.map((tag) => (
      <div className="pill" key={tag}>{tag}</div>
    ))}
  </div>
)


const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const response = await fetch(`${BASE_URL}/api/events/${slug}`);

  if (!response.ok) {
    throw new Error("Failed to fetch event: " + response.statusText);
  }

  const {
    event: {
      description,
      image,
      overview,
      date,
      time,
      location,
      mode,
      agenda,
      organizer,
      audience,
      tags,
    },
  } = await response.json();

  const bookings = 10;

  const similiarEvents: IEvent[] = await getSimilarEventsBySlug(slug);

  return (
    <section id="event">
      <div className="header">
        <h1>Event Description</h1>
        <p>{description}</p>

        <div className="details">
          {/* Left side - Event Content */}
          <div className="content">
            <Image
              src={image}
              alt="Event Banner"
              width={800}
              height={800}
              className="banner"
            />

            <section className="flex-col-gap-2">
              <h2>Overview</h2>
              <p>{overview}</p>
            </section>

            <section className="flex-col-gap-2">
              <h2>Event Details</h2>

              <EventDetailItem
                icon="/icons/calendar.svg"
                alt="calendar"
                label={date}
              />
              <EventDetailItem
                icon="/icons/clock.svg"
                alt="clock"
                label={time}
              />
              <EventDetailItem
                icon="/icons/pin.svg"
                alt="pin"
                label={location}
              />
              <EventDetailItem icon="/icons/mode.svg" alt="mode" label={mode} />
              <EventDetailItem
                icon="/icons/audience.svg"
                alt="audience"
                label={audience}
              />
            </section>

            <section className="flex-col-gap-2">
              <EventAgenda agendaItem={agenda} />
            </section>

            <section className="flex-col-gap-2">
              <h2>About the Organizer</h2>
              <p>{organizer}</p>
            </section>

            <section className="flex-col-gap-2">
              <EventTags tags={tags} />
            </section>
          </div>


          {/* Right side - Booking Form */}
          <aside className="booking">
            <div className="signup-card">
              <h2>Book Your Seat</h2>
              {bookings > 0 ? (
                <p className="text-sm">Join {bookings} people who have already booked this event</p>
              ) : (
                <p className="text-sm">Be the first one to book this event</p>
              )}

              <BookEvent />
            </div>
          </aside>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 pt-20">
        <h2>Similar Events</h2>
        <div className="events">
          {similiarEvents.length > 0 && similiarEvents.map((similiarEvent: IEvent) => (
            <EventCard key={similiarEvent.title} {...similiarEvent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetailsPage;

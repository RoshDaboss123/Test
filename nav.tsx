import { ContentLink } from "../components/Nav";

type Props = {
  links: Array<ContentLink>;
};

const props: Props = {
  links: [
    {
      href: "/",
      text: "Home",
      hiddenFromMain: false,
    },
    {
      href: "/about",
      text: "About",
    },
    {
      href: "https://course.myflyglobal.com/landing.html",
      text: "Course",
    },
    {
      href: "/members",
      text: "Members",
    },
    {
      href: "/presentations",
      text: "Presentations",
      hiddenFromMain: true,
    },
    {
      href: "/conference",
      text: "Conference 2022",
    },
    // {
    //   // href: "/course",
    //   text: "Course",
    // },
    {
      href: "/events",
      text: "Events",
    },
    {
      href: "/contact",
      text: "Contact",
    },
  ],
};

export default props;

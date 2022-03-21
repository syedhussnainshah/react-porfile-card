import dummyImg from "../Assets/Images/dummy.jpg";
let profile = {
  info: {
    name: "Laura Smith",
    designation: "Frontend Developer",
    website: "laurasmith.website",
    image: dummyImg,
  },
  description: [
    {
      title: "About",
      desc: "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
    },
    {
      title: "Interests",
      desc: "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.",
    },
  ],
  professoanlLink: [
    {
      title: "linkedin",
      url: "linkedin.com",
    },
    {
      title: "email",
      url: "email.com",
    },
  ],
  socialLink: [
    {
      twitter: "twitter.com",
    },
    {
      facebook: "facebook.com",
    },
    {
      instagram: "instagram.com",
    },
    {
      github: "github.com",
    },
  ],
};

export default profile;

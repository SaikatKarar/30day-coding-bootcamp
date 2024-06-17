import guides from '../../assets/images/icon-guides.svg';
import courses from '../../assets/images/icon-courses.svg';
import whatsapp from '../../assets/images/icon-whatsapp.svg';
import sessions from '../../assets/images/icon-sessions.svg';
import star from '../../assets/images/icon-star.svg';
import aryan from '../../assets/images/avatars/avatar-aryan.webp';
import kevin from '../../assets/images/avatars/avatar-kevin.webp';
import umang from '../../assets/images/avatars/avatar-umang.webp';
import avatar1 from '../../assets/images/avatars/avatar-1.png';
import avatar2 from '../../assets/images/avatars/avatar-2.png';



export const navigation = [
    {
        id: "0",
        title: "Intro",
        url: "#intro",
    },
    {
        id: "1",
        title: "Pricing",
        url: "#pricing",
    },
    {
        id: "2",
        title: "Features",
        url: "#features",
    },
    {
        id: "3",
        title: "Testimonials",
        url: "#testimonials",
    },
    {
        id: "4",
        title: "Join Community",
        url: "#community",
        onlyMobile: true,
    }
];

export const collabApps = [
    {
        id: "0",
        title: "Figma",
        icon: "https://i.ibb.co/YyPhrD2/figma.png",
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "Notion",
        icon: "https://i.ibb.co/8BKpHwC/notion.png",
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "Discord",
        icon: "https://i.ibb.co/dBrrsqB/discord.png",
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "Slack",
        icon: "https://i.ibb.co/RzrTmH5/slack.png",
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "Photoshop",
        icon: "https://i.ibb.co/N1ZJ7F3/photoshop.png",
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "Protopie",
        icon: "https://i.ibb.co/1QSBLZQ/protopie.png",
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: "Framer",
        icon: "https://i.ibb.co/3SHDYfZ/framer.png",
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "Raindrop",
        icon: "https://i.ibb.co/rw2JJwh/raindrop.png",
        width: 38,
        height: 32,
    },
];

export const benefits = [
    {
        id: "1",
        title: "5+ Guides for Free",
        icon: guides,
    },
    {
        id: "2",
        title: "Exclusive Courses & Projects",
        icon: courses,
    },
    {
        id: "3",
        title: "24/7 WhatsApp Support Group",
        icon: whatsapp,
    },
    {
        id: "4",
        title: "1:1 Free Session",
        icon: sessions,
    }
];

export const testimonials = [
    {
        id: "1",
        name: "Aryan Singh",
        title: '"This community has been a game-changer for my career. The exclusive courses and personalized guidance from expert mentors have helped me take my coding skills to the next level."',
        icon: aryan,
        starIcon: star,
        company: "SWE at Google"
    },
    {
        id: "2",
        name: "Kevin Smith",
        title: '"The exclusive courses and bi-weekly live sessions have been incredibly insightful, and collaborating on open-source projects has been a great way to build my portfolio. I highly recommend this community."',
        icon: kevin,
        starIcon: star,
        company: "SWE at Tesla"
    },
    {
        id: "3",
        name: "Umang Chaudhary",
        title: '"Joining this community was one of the best decisions I`ve made for my career. The 24/7 WhatsApp group has been an incredible resource for networking and collaboration. I highly recommend this community"',
        icon: umang,
        starIcon: star,
        company: "SWE at Tiktok"
    }
];

export const pricedata = {
    header: {
        title: "Simple no-tricks pricing",
        subtitle: "Everything you need to grow 10x for less than a coffee.",
    },
    pricingCard: {
        content: {
            title: "Premium Elite Subscription",
            description: "Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee.",

            includedTitle: "What's included",

            features: [
                "Expert Mentors",
                "Exclusive Courses",
                "Networking & Collaboration",
                "Career guidance"
            ],
        },
        priceBox: {
            priceLabel: "Less than a cup of coffee",

            priceValue: "$5",

            strikePrice: "$1000",

            cta: {
                text: "Join Community",
                url: "https://nas.io/30dayscoding",
            },
            members: {
                avatars: [
                    aryan,
                    kevin,
                    umang,
                    avatar1,
                    avatar2
                ],
                avatarClass: "relative z-30 inline-block w-8 h-8 rounded-full ring-2 ring-white",
                memberText: "100+ Active Members",
                memberTextClass: "text-sm font-medium text-gray-950"
            }
        }
    }
};

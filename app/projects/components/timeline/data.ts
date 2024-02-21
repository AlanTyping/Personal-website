import web from '../../assets/web.svg';
import school from '../../assets/school.png';
import trading from '../../assets/trading.png';
import flash from '../../assets/flash.png';
import speed from '../../assets/speed.png';

export const projects = [
     {
        name: "Next one",
        descripcion: "Let's build it together",
        icon: web,
        date: '??? - ???',
        color: 'bg-[#9b650086]'
    },
    // {
    //     name: "School web",
    //     descripcion: "As I'm giving webpage services for schools, it's interesting to see a showcase project as a reference",
    //     icon: web,
    //     date: 'November 2023 - December 2023',
    //     link: 'https://school-showcase.vercel.app/',
    //     image: school,
    //     color: 'bg-[#9b650086]'
    // },
    {
        name: "Blueraising",
        descripcion: "One of the problems in trading is recording your progress, that often requires some excel knowledge and it isn't that cool to see your progress inside some rigid rectangles. This web app give you a nice layout to see your progress in a dinamic and graphic way",
        icon: web,
        date: 'July 2023 - November 2023',
        link: 'https://blueraising.vercel.app/',
        image: trading,
        color: 'bg-[#00205f9d]'
    },

    {
        name: "Speed Cube",
        descripcion: "Since I love solving the Rubik's Cube as a hobby, I developed a web app to automatically calculate the average time after 5 solves (It's only available for PC).",
        icon: web,
        date: 'December 2022 - March 2023',
        link: 'https://speedcube-timer.vercel.app/',
        image: speed,
        color: 'bg-[#0099ff36]'
    },

    {
        name: "Flash Typing",
        descripcion: "Web app created to enhance my skills with the React framework. If you're curious about your words-per-minute typing speed, it's a fun game to enjoy in your free time (It's only available for PC).",
        icon: web,
        date: 'Octuber 2022 - November 2022',
        link: 'https://flashtyping.netlify.app/',
        image: flash,
        color: 'bg-[#007ac03a]'
    },
]
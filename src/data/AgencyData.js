import Image from "next/image";
import AgencyImg from '../../src/image/agency1.png';
import AgencyImg2 from '../../src/image/agency2.png';


const AgencyData = [
    {
        icon: <Image src={AgencyImg}/>,
        head: 'Web Development',
        title: 'There are many variations of passages of Lorem Ipsum available, but the majority.',
    },
    {
        icon: <Image src={AgencyImg}/>,
        head: 'Web Development',
        title: 'There are many variations of passages of Lorem Ipsum available, but the majority.',
    },
    {
        icon: <Image src={AgencyImg}/>,
        head: 'Web Development',
        title: 'There are many variations of passages of Lorem Ipsum available, but the majority.',
    }
]

export default AgencyData;
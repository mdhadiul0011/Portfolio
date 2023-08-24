import Image from "next/image";
import PartnerImg from '../../src/image/p1.png';
import PartnerImg2 from '../../src/image/p2.png';
import PartnerImg3 from '../../src/image/p3.png';
import PartnerImg4 from '../../src/image/p4.png';


const PartnersData =[
    {
        img: <Image src={PartnerImg}/>,
        text: 'Happy Mart',
    },
    {
        img: <Image src={PartnerImg2}/>,
        text: 'Lori Cracker',
    },
    {
        img: <Image src={PartnerImg3}/>,
        text: 'Emad Fashion',
    },
    {
        img: <Image src={PartnerImg4}/>,
        text: 'Docco Semims',
    },
    {
        img: <Image src={PartnerImg2}/>,
        text: 'Lori Cracker',
    },
]

export default PartnersData;
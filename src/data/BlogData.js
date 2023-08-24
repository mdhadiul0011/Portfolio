import Image from "next/image";
import BlogImg from '../../src/image/blog.png';
import BlogImg2 from '../../src/image/blog2.png'
import BlogImg3 from '../../src/image/blog3.png'

const BlogData = [
    {
        img: <Image width={318} height={200} src={BlogImg}/>,
        date: "10 January 2023",
        title: 'Bitcoin and Economic Freedom',
        url: 'Read More',
    },
    {
        img: <Image width={318} height={200} src={BlogImg2}/>,
        date: "10 January 2023",
        title: 'Bitcoin and Economic Freedom',
        url: 'Read More',
    },
    {
        img: <Image width={318} height={200} src={BlogImg3}/>,
        date: "10 January 2023",
        title: 'Bitcoin and Economic Freedom',
        url: 'Read More',
    },
    {
        img: <Image width={318} height={200} src={BlogImg}/>,
        date: "10 January 2023",
        title: 'Bitcoin and Economic Freedom',
        url: 'Read More',
    },
]

export default BlogData;

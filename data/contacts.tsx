// Next
import Image from 'next/image';
// Images
import GmailIcon from '../public/photo/Contacts/gmail.png';
import GithublIcon from '../public/photo/Contacts/github.png';

interface Test {
	href: string | NodeJS.Process;
	textTooltip: string;
	image: JSX.Element;
}

export const contactsInfo: Array<Test> = [
	{
		href: `mailto:${process.env.NEXT_PUBLIC_MY_MAIL}`,
		textTooltip: 'Моя почта',
		image: <Image width={50} height={50} src={GmailIcon} alt="svg" />,
	},
	{
		href: process.env.NEXT_PUBLIC_URL_MY_GITHUB
			? process.env.NEXT_PUBLIC_URL_MY_GITHUB
			: '',
		textTooltip: 'Мой github',
		image: <Image width={50} height={50} src={GithublIcon} alt="svg" />,
	},
];

import { FC, useState } from 'react';
import store from '@/stores';
import { Link } from 'umi';

const PageList: { route: string, title: string, info?: string }[] = [
	{ route: '/001', title: '001 第一个例子' },
];

const HomePage: FC = () => {
	const [height, setHeight] = useState(window.innerHeight);
	window.addEventListener('resize', () => setHeight(window.innerHeight));

	return (
		<div style={{}}>
			<div style={{ height: height, overflowY: 'auto', overflowX: 'hidden', justifyContent: 'center', textAlign: 'center' }}>
				<div >
					{PageList.map((page, index) => {
						return (
							<p key={index}><Link to={page.route} >{page.title}</Link></p>
						);
					})}
				</div>
			</div>

		</div>
	);
};

export default HomePage;

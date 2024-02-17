import { FC, useState } from 'react';
import store from '@/stores';
import { Link } from 'umi';

const PageList: { route: string, title: string, info?: string }[] = [
	{ route: '/001', title: '001 第一个例子' },
];

const HomePage: FC = () => {
	const [height, setHeight] = useState(window.innerHeight - 100);
	window.addEventListener('resize', () => setHeight(window.innerHeight - 100));

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<div style={{ height: height, overflowY: 'auto', overflowX: 'hidden', }}>
				<div>
					{PageList.map((page, index) => {
						return (
							<Link to={page.route} key={index}>{page.title}</Link>
						);
					})}
				</div>
			</div>

		</div>
	);
};

export default HomePage;

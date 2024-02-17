import { Outlet } from 'umi';
import store from '@/stores/index';
import { Provider } from 'react-redux';

export default function Layout() {
	return (
		<Provider store={store}>
			<Outlet />
		</Provider>
	);
}

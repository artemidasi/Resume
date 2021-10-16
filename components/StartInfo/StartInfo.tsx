// Elements
import { MySwiper } from '../MySwiper';
import { MyPasport } from '../MyPasport';
// Interface
import type { IStartInfoProps } from '../../interfaces';

// Data
import { arrayMyPhoto } from '../../data/swiper';
// Style__Me
import styles from './startinfo.module.scss';

export const StartInfo: React.FC = () => {
	return (
		<div className="main-container d-flex flex-wrap justify-content-around">
			<MySwiper
				classSwiper={styles['StartInfo-Swiper']}
				classImage={styles['StartInfo-Image']}
				photos={arrayMyPhoto}
			></MySwiper>
			<MyPasport color={'blueGray'} />
		</div>
	);
};

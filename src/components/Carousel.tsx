import * as React from 'react';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import theme from '../theme';

type CarouselProps = {
	items: JSX.Element[];
	displayCount: number;
	slideByCount?: number;
	style?: React.CSSProperties;
};

type CarouselDirection = 'LEFT' | 'RIGHT';

const Carousel = ({
	items,
	displayCount,
	slideByCount = 1,
	style,
}: CarouselProps) => {
	const itemRefs = React.useMemo(
		() => items.map(() => React.createRef<HTMLDivElement>()),
		[items]
	);
	const carouselRef = React.createRef<HTMLDivElement>();
	const [currentItem, setCurrentItem] = React.useState<number>(0);
	const [nextPrevInQueue, setNextPrevInQueue] = React.useState({
		next: slideByCount,
		prev: -1,
	});
	const [nextPrevDisabled, setNextPrevDisabled] = React.useState({
		next: false,
		prev: true,
	});
	const itemsCount = items.length;

	React.useEffect(() => {
		setNextPrevInQueue({
			next: currentItem + displayCount,
			prev: currentItem - displayCount,
		});
		setNextPrevDisabled({
			next: currentItem + 1 > itemsCount - displayCount,
			prev: currentItem - 1 < 0,
		});

		currentItem > -1 &&
			currentItem < itemsCount &&
			carouselRef.current.scroll({
				top: 0,
				left: itemRefs[currentItem].current!.offsetLeft,
				behavior: 'smooth',
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentItem]);

	const onChange = (direction: CarouselDirection) => {
		direction === 'LEFT'
			? setCurrentItem(
					nextPrevInQueue.next < itemsCount - displayCount
						? nextPrevInQueue.next
						: itemsCount - displayCount
			  )
			: setCurrentItem(nextPrevInQueue.prev < 0 ? 0 : nextPrevInQueue.prev);
	};

	return (
		<div
			style={{
				display: 'flex',
				position: 'relative',
				width: '100%',
				alignItems: 'center',
				...style,
			}}
		>
			<NextPrevButtons
				onNext={() => onChange('LEFT')}
				onPrev={() => onChange('RIGHT')}
				nextDisabled={nextPrevDisabled.next}
				prevDisabled={nextPrevDisabled.prev}
			/>
			<div
				style={{ overflow: 'hidden', display: 'flex' }}
				ref={carouselRef}
			>
				{items.map((item, index) => {
					return (
						<div
							key={index}
							ref={itemRefs[index]}
						>
							{item}
						</div>
					);
				})}
			</div>
		</div>
	);
};

type nextPrevButtonProps = {
	onNext: () => void;
	onPrev: () => void;
	nextDisabled: boolean;
	prevDisabled: boolean;
};

const NextPrevButtons = ({
	onNext,
	onPrev,
	nextDisabled,
	prevDisabled,
}: nextPrevButtonProps) => {
	return (
		<div
			style={{
				position: 'absolute',
				display: 'flex',
				width: '100%',
				justifyContent: 'space-between',
				zIndex: 1000,
			}}
		>
			<Button
				style={{
					height: 64,
					maxWidth: 24,
					minWidth: 24,
					backgroundColor: prevDisabled ? '#00a6b840' : '#00a6b8',
					borderRadius: 5,
					padding: 0,
					right: 24,
				}}
				onClick={onPrev}
				disabled={prevDisabled}
			>
				<ArrowBackIosNewIcon style={{ color: theme.palette.white.main }} />
			</Button>
			<Button
				style={{
					height: 64,
					maxWidth: 24,
					minWidth: 24,
					backgroundColor: nextDisabled ? '#00a6b840' : '#00a6b8',
					borderRadius: 5,
					padding: 0,
					left: 24,
				}}
				onClick={onNext}
				disabled={nextDisabled}
			>
				<ArrowForwardIosIcon style={{ color: theme.palette.white.main }} />
			</Button>
		</div>
	);
};

export default Carousel;

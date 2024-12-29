import { StyleSheet, Text, View } from "react-native";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import type { SharedValue } from "react-native-reanimated";

const ChordComponent = ({
	progress,
	chord,
	index,
}: { progress: SharedValue<number>; chord: string; index: number }) => {
	// progress: SharedValue 0から1にうごく
	const animatedStyle = useAnimatedStyle(() => {
		// 7つのコードで360度を分割
		const angle = (2 * Math.PI) / 7; // 円周を7等分した角度。
		// 円の半径
		const radius = 100;

		const x = radius * Math.sin(angle * index) * progress.value;
		const y = -radius * Math.cos(angle * index) * progress.value;

		return {
			transform: [
				{
					translateX: x,
				},
				{
					translateY: y,
				},
			],
		};
	});
	return (
		<Animated.View style={[styles.box, styles.center, animatedStyle]}>
			<Text style={styles.boxText}>{chord}</Text>
		</Animated.View>
	);
};

export default function Index() {
	const progress = useSharedValue(0);

	return (
		<View
			style={[
				{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				},
			]}
			onTouchStart={() => {
				console.log("touch start");
				progress.value = withTiming(1);
			}}
			onTouchEnd={() => {
				console.log("touch end");
				progress.value = withTiming(0);
			}}
		>
			{["C", "D", "E", "F", "G", "A", "B"].map((chord, i) => (
				<ChordComponent
					progress={progress}
					chord={chord}
					index={i}
					key={chord}
				/>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	box: {
		position: "absolute",
		width: 70,
		aspectRatio: 1 / 1,
		borderRadius: 35,
		backgroundColor: "#fff",
		shadowColor: "#000",
		shadowOpacity: 0.2,
		shadowOffset: { width: 2, height: 2 },
		shadowRadius: 15,
		elevation: 3,
	},
	boxText: {
		fontSize: 28,
		fontWeight: "bold",
		color: "#6a6a6a",
	},
	center: {
		justifyContent: "center",
		alignItems: "center",
	},
});

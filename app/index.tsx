import { StyleSheet, Text, View } from "react-native";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";

export default function Index() {
	const progress = useSharedValue(0);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: progress.value * 1,
				},
				{
					translateY: progress.value * -1,
				},
			],
		};
	});

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
				progress.value = withTiming(100);
			}}
			onTouchEnd={() => {
				console.log("touch end");
				progress.value = withTiming(0);
			}}
		>
			<Animated.View style={[styles.box, styles.center, animatedStyle]}>
				<Text style={styles.boxText}>C</Text>
			</Animated.View>
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

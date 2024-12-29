import { StyleSheet, Text, View } from "react-native";

export default function Index() {
	return (
		<View
			style={[
				{
					flex: 1,
				},
				styles.center,
			]}
			onTouchStart={() => {
				console.log("touch start");
			}}
			onTouchEnd={() => {
				console.log("touch end");
			}}
		>
			<View style={[styles.box, styles.center]}>
				<Text style={styles.boxText}>C</Text>
			</View>
			<View
				style={[
					styles.box,
					styles.center,
					{
						transform: [
							{
								translateX: 100,
							},
							{
								translateY: -100,
							},
						],
					},
				]}
			>
				<Text style={styles.boxText}>C</Text>
			</View>
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

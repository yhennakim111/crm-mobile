import { Text, View } from "react-native";
import styles from "../features/welcome/styles";

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to Customer Manager Plus</Text>
            <Text style={styles.sub}>
                Your simple CRM app for Sales Representatives.
            </Text>
        </View>
    );
};

export default Welcome;